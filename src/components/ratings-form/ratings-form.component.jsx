import React from 'react';

import './ratings-form.styles.scss';

const RatingsForm = () => (
    <div className='ratings-form'>
        <form>
            <main>
                <div className='u-container'>
                    <div className='gutter'>
                        <div className='card'>
                            <div className='range-attributes'>
                                <div className='quality'>
                                    <div className='range'>
                                        <label>Quality</label>
                                        <div className='c-numberRangeInput'>
                                            <input type='range' id='number-range-quality' value='0' step='1' max='5' />
                                            <div className='c-numberRangeInput-rater'>
                                                <div className='c-numberRangeInput-rater-label'>
                                                    <div className='c-numberRangInput-rater-spacer'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='design'>
                                <div className='range'>
                                        <label>Design</label>
                                    </div>
                                </div>
                                <div className='experience'>
                                <div className='range'>
                                        <label>Experience</label>
                                    </div>
                                </div>
                            </div>
                            <div className='general-value-attributes'></div>
                            <fieldset className='shopper-value-attributes'></fieldset>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
               <button className='ratings-footer-btn'>
                Next    
               </button> 
            </footer>
        </form>
    </div>
);

export default RatingsForm;