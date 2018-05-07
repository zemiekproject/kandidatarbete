import React from 'react'
import axios from 'axios'

export default class ReviewList extends React.Component {
    state = {
        reviews: []
    }


    componentDidMount() {
        axios.get("http://localhost:8000/reviews/api/review/")
        .then(res => {
            this.setState({reviews: res.data });
        })
    }

    render() {
        return(
            <ul>
            {this.state.reviews.map(review => <li>{review.title}</li>)}
            </ul>
        )
    }
}