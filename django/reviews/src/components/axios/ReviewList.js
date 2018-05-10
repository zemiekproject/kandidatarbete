import React from 'react'
import axios from 'axios'


function searchingFor(term) {
    return function(x) {
      return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            reviewsFiltered: [],
        };
    }



    componentDidMount() {
        axios.get("http://localhost:8000/reviews/api/review/")
            .then(res => {
                this.setState({ reviews: res.data});
            })

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.reviews.filter(searchingFor(this.props.term)).map(review => <li>{review.title}</li>)}
                </ul>
                <a href="/reviews/create/"><h4>Make review</h4></a>
            </div>
        )
    }
}