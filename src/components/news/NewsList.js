import React, { Component } from 'react'
import './news.css';
import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'
import NewsManager from '../../modules/NewsManager'


export default class NewsList extends Component {
    state = {
        news: []
    };
    
    deleteArticle = id => {
        const newState = {};
        NewsManager.deleteArticle(id)
        .then(NewsManager.getAll)
        .then(news => {
            console.log("articles", news);
            newState.news = news;
            this.setState(newState);
        })
    };
    
    componentDidMount() {
        const newState = {};
        NewsManager.getAll("articles") 
            .then(articles => newState.news = articles)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <div className="news">
                <h2>Newsss</h2>
                <div className="newsButton">
                    <button>
                        <Link to="/articles/new">Add Article</Link>
                    </button>
                </div>
                <section className="articles">
                    {this.state.news.map(item => {
                        return (
                            <NewsCard 
                            key={item.id}
                            article={item}
                            {...this.props}
                            deleteArticle={this.deleteArticle}
                            />
                        )
                    })}
                </section>
            </div>
        );
    }
}