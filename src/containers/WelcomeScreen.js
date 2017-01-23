import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import * as movieActions from '../stores/movies/actions';
import * as _ from 'lodash';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.onClickPushMe = this.onClickPushMe.bind(this);
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentDidMount() {
        this.props.dispatch(movieActions.fetchMovieList());
    }

    componentWillReceiveProps(props) {
        this.setState({
            dataSource: ds.cloneWithRows(props.movies)
        });
    }

    render() {
        if (!this.props.movies) return this.renderLoading();
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
                <Button title="Push me" onPress={this.onClickPushMe}/>
            </View>
        );
    }

    _renderRow(rowData) {
        let imageUri = `https://image.tmdb.org/t/p/w500${rowData.poster_path}`;
        return (
            <View>
                <Image source={{uri: imageUri}} style={{width: 100, height: 100}} />
                <Text>{imageUri}</Text>
                <Text>{rowData.original_title}</Text>
            </View>
        );
    }

    renderLoading() {
        return (
            <p>Loading...</p>
        );
    }

    onClickPushMe() {
        this.props.navigator.push({
            screen: 'com.example.WelcomeScreen'
        });
    }
}

function mapStateToProps(state) {
    const mappedMovies = _.keyBy(state.movies.movies, 'id')
    return {
        movies: mappedMovies
    };
}

export default connect(mapStateToProps)(WelcomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
