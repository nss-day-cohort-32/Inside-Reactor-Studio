import React, { Component } from 'react';
export default class NewsCard extends Component {
    state = {
        saveDisabled: false
    };

    handleClick = e => {
        console.log("click", e, this.props.article.id);
        this.setState({
            saveDisabled: true
        });
        this.props.deleteNews(this.props.article.id);
    };

    render(){
        return (
        <article className="article-card">
            <h4>{this.props.news.article_title}</h4>
            <h5>{this.props.news.article_blurb}</h5>
            <h6>{this.props.news.article_link}</h6>
            <p>{this.props.news.article_published}</p>
            <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Delete</button>
            <hr />
        </article>
        );
    }
}