import React from 'react';

import './ratings-form.styles.scss';

const RatingsForm = () => (
    <div className='ratings-form'>
        <form>
            <main className='review-main'>
                <div className='u-container'>
                    <div className='gutter'>
                        <div className='card'>
                            <div className='range-attributes'>
                                <div className='quality'>
                                    <div className='range'>
                                        <label className='range-label'>Quality</label>
                                        <div className='c-numberRangeInput'>
                                            <input type='range' className='u-assistive-hidden' id='number-range-quality' value='0' step='1' max='5' />
                                            <div className='c-numberRangeInput-rater'>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>1</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>2</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>3</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>4</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>5</div>
                                                </div>
                                            </div>
                                            <div className='range-input-labels'>
                                                <div className='range-input-labels-item'>Poor</div>
                                                <div className='range-input-labels-item'>Excellent</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='design'>
                                <div className='range'>
                                        <label>Design</label>
                                        <div className='c-numberRangeInput'>
                                            <input type='range' className='u-assistive-hidden' id='number-range-design' value='0' step='1' max='5' />
                                            <div className='c-numberRangeInput-rater'>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>1</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>2</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>3</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>4</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>5</div>
                                                </div>
                                            </div>
                                            <div className='range-input-labels'>
                                                <div className='range-input-labels-item'>Poor</div>
                                                <div className='range-input-labels-item'>Excellent</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='experience'>
                                <div className='range'>
                                        <label>Experience</label>
                                        <div className='c-numberRangeInput'>
                                            <input type='range' className='u-assistive-hidden' id='number-range-experience' value='0' step='1' max='5' />
                                            <div className='c-numberRangeInput-rater'>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>1</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>2</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>3</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>4</div>
                                                </div>
                                                <div className='c-numberRangInput-rater-spacer'></div>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='start'>5</div>
                                                </div>
                                            
                                            </div>
                                            <div className='range-input-labels'>
                                                <div className='range-input-labels-item'>Poor</div>
                                                <div className='range-input-labels-item'>Excellent</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='general-value-attributes'></div>
                            <fieldset className='shopper-value-attributes'></fieldset>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='ratings-footer'>
               <button className='ratings-footer-btn'>
                <span>Next</span>    
               </button> 
            </footer>
        </form>
    </div>
);

export default RatingsForm;