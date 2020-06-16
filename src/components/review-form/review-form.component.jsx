import React from 'react';

import './review-form.styles.scss';

const ReviewForm = () => {
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
                                    <input className='c-input' type="text" id='title' name='title' for='title' placeholder='Summary of your experience'/>
                                </div>
                                <div className='review'>
                                    <label className='review-body-label'>Your Review</label>
                                    <textarea className='c-textarea' maxLength='10000' name="text" id="reviewBody" rows="10" placeholder='Give us some detail about what you liked and disliked about the product' required></textarea>
                                </div>
                                <div className='recommend'>
                                    <label className='rec-label'>Would you recommend this product?</label>
                                    <div className='toggle-btns'>
                                        <input  type="radio" id='recommend-yes' name='recommend' className='c-toggleSwitch-input' required/>
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
                    <div className='gutter'>
                        <span>By continuing you agree to our Terms and Conditions, and Privacy Policy</span>
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