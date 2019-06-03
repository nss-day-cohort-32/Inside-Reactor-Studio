// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';
// import FriendsManager from "../modules/FriendsManager";

// export default class FriendList extends Component {
//     state = {
//         friends: []
//     };

//     componentDidMount() {
//         const newState = {};
//         FriendsManager.getAll("friends")
//             .then(friends => newState.friends = friends)
//             .then(() => this.setState(newState))
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.friends.map(item => {
//                     return (
//                         <Card key={this.props.friend.friendUserid} className="friend-card">
//                             <CardImg top width="100%" src="" alt="Card image cap" />
//                             <CardBody>
//                                 <CardTitle>{this.props.friend.friendUserId}</CardTitle>
//                                 <CardSubtitle>Card subtitle</CardSubtitle>
//                                 <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                                 <button>
//                                     <Link to="/friends/new">Add Friend</Link>
//                                 </button>
//                             </CardBody>
//                         </Card>
//                     )
//                 })}
//             </div>
//         );
//     }

// }