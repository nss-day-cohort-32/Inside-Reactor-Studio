import React, { Component } from 'react'
import NewsManager from "../../modules/NewsManager"

export default class NewsEditForm extends Component {
    state = {
        article_title: '',
        article_blurb: '',
        article_link: '',
        article_published: '',
        
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value 
        this.setState(stateToChange);
        console.log(stateToChange)
    }



    updateExistingArticle = evt => {
        evt.preventDefault()

        const editedArticle = {
            id: this.props.match.params.articleId,
            article_title: this.state.article_title,
            article_blurb: this.state.article_blurb,
            article_link: this.state.article_link,
            article_published: this.state.article_published
        };
        console.log("edited article", editedArticle)
        NewsManager.put(editedArticle)
        .then(() => this.props.history.push('/articles'))
    }

    componentDidMount() {
        NewsManager.get(this.props.match.params.articleId)
        .then(article => {
            this.setState({
                article_title: article.article_title,
                article_blurb: article.article_blurb,
                article_link: article.article_link,
                article_published: article.article_published

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
                            value={this.state.article_title}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_blurb"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_blurb"
                        value={this.state.article_blurb}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_link"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_link"
                        value = {this.state.article_link}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_published"></label>
                        <input type="date"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="article_published"
                        value = {this.state.article_published}
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