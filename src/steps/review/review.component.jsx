import React from 'react';

import ReviewForm from '../../components/review-form/review-form.component';

import './review.styles.scss';

class ReviewStep extends React.Component {
    componentDidMount() {
        this.setState({ title: 'Review' })
    }

    render() {
        return (
            <div className='review-step'>
            <ReviewForm />
        </div>
        )
    }
}

export default ReviewStep;