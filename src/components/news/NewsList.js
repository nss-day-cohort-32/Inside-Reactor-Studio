import React, { Component } from 'react';
import './news.css';
import { Link } from 'react-router-dom'
import NewsCard from './NewsCard';
import NewsManager from '../../modules/NewsManager'


export default class NewsList extends Component {
    state = {
        news: []
    };
    componentDidMount() {
        NewsManager.getAll().then(allNews => {
            this.setState({
                news: allNews
            });
        });
    }

    render() {
        return (
            <div className="news">
                <h2>Newsss</h2>
                <div class="newsButton">
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
                            deleteNews={this.props.deleteNews}
                            />
                        )
                    })}
                </section>
            </div>
        );
    }
}