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

    updateArticle = article => {
        NewsManager.put(article)
    }

    updateExistingArticle = evt => {
        evt.preventDefault()

        const editedArticle = {
            id: this.props.match.params.articleId,
            title: this.state.article_title,
            blurb: this.state.article_blurb,
            link: this.state.article_link,
            published: this.state.article_published
        };
        console.log("edited article", editedArticle)
        this.props.updateArticle(editedArticle)
        .then(() => this.props.history.push('/animals'))
    }

    componentDidMount() {
        NewsManager.get(this.props.match.params.id)
        .then(article => {
            this.setState({
                title: article.title,
                blurb: article.blurb,
                link: article.link,
                published: article.published

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
                            placeholder={this.state.title}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_blurb"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder={this.state.blurb}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_link"></label>
                        <input type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder = {this.state.link}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="article_published"></label>
                        <input type="date"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder = {this.state.published}
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