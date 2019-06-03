import React, { Component } from 'react';
import NewsManager from "../../modules/NewsManager"
import './NewsList';
import EventManager from '../../modules/EventManager';

export default class NewsForm extends Component {
    state = {
      article_title: '',
      article_blurb: '',
      article_link:  '',
      article_published: ''
    };

    addArticle = article =>
        NewsManager.post(article)
            .then(() => NewsManager.getAll('articles'))
            .then(articles => 
                this.setState({
                    news: articles
                })
                )
                .then(() => this.props.history.push('articles'))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewArticle = evt => {
        evt.preventDefault();

        const article = {
            article_title: this.state.article_title,
            article_blurb: this.state.article_blurb,
            article_link: this.state.article_link,
            article_published: this.state.article_published
        };

        this.addArticle(article).then(() => this.props.history.push('/articles'));
    };

    render() {
        return(
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="article_title">Article Title</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_title"
                        placeholder="Article Title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_blurb">Article Blurb</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_blurb"
                        placeholder="Article Blurb"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_link">Article Link</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        name="article_link"
                        id="article_link"
                        onChange={this.handleFieldChange}
                        placeholder="Article Link"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_published">Date Published</label>
                        <input
                         type="date"
                         required
                        className="form-control"
                        name="article_published"
                        id="article_published"
                        onChange={this.handleFieldChange}
                         />
                     </div>
                     <button
                     className="btn btn-primary"
                     onClick={this.saveNewArticle}>
                         Submit
                     </button>
                     
                </form>
            </React.Fragment>
        )
    }
}