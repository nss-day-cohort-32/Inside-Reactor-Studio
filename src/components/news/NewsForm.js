import React, { Component } from 'react';
import './NewsList';

export default class NewsForm extends Component {
    state = {
      article_title: '',
      article_blurb: '',
      article_link:  '',
      article_published: ''
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewArticle = evt => {
        evt.preventDefault();

        const article = {
            article_name: this.state.article_title,
            article_blurb: this.state.article_blurb,
            article_link: this.state.article_link,
            article_published: this.state.article_published
        };

        this.props.addNews(article).then(() => this.props.history.push('./articles'));
    };

    render() {
        return(
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="article_name">Article Name</label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_name"
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
                        placeholder="article_blurb"
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_published">Event Date</label>
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
                     onClick={this.saveArticle}>
                         Submit
                     </button>
                     
                </form>
            </React.Fragment>
        )
    }
}