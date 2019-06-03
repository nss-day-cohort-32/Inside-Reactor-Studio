import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import FriendList from "./friend/FriendList";
import FriendsManager from "../modules/FriendsManager";

export default class AddFriend extends Component {
    state = {
        friends: []
    };


    componentDidMount() {
        const newState = {};
        FriendsManager.getAll("friends")
            .then(friends => newState.friends = friends)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}