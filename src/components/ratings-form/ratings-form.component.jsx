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
                                        {/* Main Product Ratings */}
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

                            {/* Product Highlights  */}
                            <div className='general-value-attributes'>
                                <div className='value-attributes-wrapper'>
                                    <div>Product Standouts</div>
                                    <div className='options-text'>
                                        <span> Choose up to 5 that best apply (optional)</span>
                                    </div>
                                    <div classNmae='option-inputs'>
                                        <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Accurate Timekeeping</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item flex-start'>
                                        <div className='option-input-control'>
                                            <span>High Quality</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Durable</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Elegant</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Good Weight</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Versatile</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Looks Expensive</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Attracts Compliments</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Unique</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Great Gift</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div classNmae='option-inputs'>
                                    <div className='option-inputs-item'>
                                        <div className='option-input-control'>
                                            <span>Great Value</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <fieldset className='shopper-value-attributes'>
                                <legend>
                                    <span>About You</span>
                                </legend>

                                {/* Age Range */}
                                <div className='shopper-attributes'>
                                    <div>Age Range</div>
                                    <div>Choose one</div>
                                    <div>
                                        <div className='age-option-inputs'>
                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>Under 18</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>18 - 24</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>25 - 34</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>35 - 44</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>45 - 54</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>55 - 64</span>
                                                </div>
                                            </div>

                                            <div className='option-inputs-item'>
                                                <div className='options-inputs-control'>
                                                    <span>65+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bought For Section */}
                                    <div className='bought-for'>
                                        <div>Bought For</div>
                                        <div>Choose one</div>
                                        <div>
                                            <div className='option-inputs'>
                                                <div className='option-input-item'>
                                                    <div className='option-input-item-control'>
                                                        <span>Personal Use</span>
                                                    </div>
                                                </div>
                                                <div className='option-input-item'>
                                                    <div className='option-input-item-control'>
                                                        <span>Gift</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </fieldset>
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