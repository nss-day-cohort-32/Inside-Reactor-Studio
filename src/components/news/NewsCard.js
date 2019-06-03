import React, { Component } from 'react';
export default class NewsCard extends Component {
    state = {
        saveDisabled: false
    };

    render() {
        return (
        <article key={this.props.article.id}className="article-card">
            <h4>{this.props.article.article_title}</h4>
            <h5>{this.props.article.article_blurb}</h5>
            <a href={this.props.article.article_link}>Check a look</a>
            <p>{this.props.article.article_published}</p>
            <button onClick={
                () => {
                    this.setState(
                        { saveDisabled: true },
                        () => this.props.deleteArticle(this.props.article.id)
                        )
                    }
                    
                } 
                 disabled={this.state.saveDisabled}
            >Delete</button>
            <hr />
            <button 
                type="button"
                className="btn btn-success"
                onClick={() => {
                    this.props.history.push(`/articles/${this.props.article.id}/edit`)
                }}
                >
                    Edit Article
                </button>
            <hr />
        </article>
        );
    }
}