import React from 'react';

import './review-form.styles.scss';

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        rating: '',
        title: '',
        review: '',
        recommend: ''
    })

    const { rating, title, review, recommend } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        this.props.history.push('/ratings');
    }

    return (
        <div className='review-form'>
            <form>
                <main>
                    <div className='review-container'>
                        <div className='gutter'>
                            <div className='card'>
                                <div className='rating'>
                                    <span>Your Rating</span>
                                   
                                </div>
                                <div className='title'>
                                    <label className='review-title-label'>Review Title</label>
                                    <input className='c-input' type="text" id='title' name='title' value={title} onChange={e => onChange(e)} for='title' placeholder='Summary of your experience'/>
                                </div>
                                <div className='review'>
                                    <label className='review-body-label'>Your Review</label>
                                    <textarea value={review} onChange={e => pnChange(e)} className='c-textarea' maxLength='10000' name="text" id="reviewBody" rows="10" placeholder='Give us some detail about what you liked and disliked about the product' required></textarea>
                                </div>
                                <div className='recommend'>
                                    <label className='rec-label'>Would you recommend this product?</label>
                                    <div className='toggle-btns'>
                                        <input type="radio" id='recommend-yes' name='recommend' className='c-toggleSwitch-input' required/>
                                        <label translate="" for="recommend-yes" className="c-toggleSwitch-label"><span>YES</span></label>
                                        <input type="radio" id='recommend-no' name='recommend' className='c-toggleSwitch-input' required/>
                                        <label translate="" for="recommend-no" className="c-toggleSwitch-label"><span>NO</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className='review-footer'>
                    <div className='gutter agree-terms'>
                        <span className="agree-text">By continuing you agree to our <a className='terms-link' href="https://www.okendo.io/end-user-terms/" target="_blank">Terms and Conditions</a>, and <a href="https://www.okendo.io/privacy-policy/" target="_blank" className="privacy-link">Privacy Policy </a></span>
                        <div className='agree-btn-container'>
                            <button className='c-button c-button-brand agree-btn'>
                                <span>Agree & Continue</span>
                            </button>
                        </div>
                    </div>
                </footer>
            </form>
        </div>
    )
};

export default ReviewForm;