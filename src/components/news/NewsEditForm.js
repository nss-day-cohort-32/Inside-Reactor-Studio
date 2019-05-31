import React, { Component } from 'react'
import NewsManager from "../../modules/NewsManager"

export default class NewsEditForm extends Component {
    state = {
        article_title: '',
        article_blurb: '',
        article_link: '',
        article_published: '',
        title: '',
        blurb: '',
        link: '',
        published: ''
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.placeholder 
        this.setState(stateToChange)
    }

    updateExistingArticle = evt => {
        evt.preventDefault()

        const editedArticle = {
            id: this.props.match.params.id,
            article_title: this.state.article_title,
            article_blurb: this.state.article_blurb,
            article_link: this.state.article_link,
            article_published: this.state.article_published
        };
        this.props.updateArticle(editedArticle)
        .then(() => this.props.history.push('/animals'))
    }

    componentDidMount() {
        NewsManager.get(this.props.match.params.id)
        .then(article => {
            this.setState({
                article_title: article.article_title,
                article_blurb: this.state.article_blurb,
                article_link: this.state.article_link,
                article_published: this.state.article_published

            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <form className="newsForm">
                    <div className="form-group">
                        <label htmlFor="article_title">Article Title</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="article_title"
                            placeholder={this.state.article_title}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_blurb"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder = {this.state.article_blurb}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_link"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder = {this.state.article_link}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_published"></label>
                        <input type="date"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder = {this.state.article_published}
                        />
                    </div>
                    <button
              type="submit"
              onClick={this.updateExistingArticle}
              className="btn btn-primary"
            >
              Submit
            </button>
                </form>
            </React.Fragment>
        )
    }
     
}