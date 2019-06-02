import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import FriendsManager from '../../modules/FriendsManager';

export default class FriendSearch extends Component {

    state = {
        query: '',
        data: [],
        searchString: []
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        }, () => {
            this.filterArray();
        })

    }

    getData = () => {
        fetch(`http://localhost:5002`)
            .then(response => response.json())
            .then(responseData => {
                // console.log(responseData)
                this.setState({
                    data: responseData,
                    searchString: responseData
                })
            })
    }

    filterArray = () => {
        let searchString = this.state.query;
        let responseData = this.state.data;
    }
}