import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import './ratings-form.styles.scss'

import countries from './countries.data';

const RatingsForm = () => {
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
      : isoCode;
  }
  
  const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });

  const [formData, setFormData] = useState({
      quality: 0,
      design: 0,
      experience: 0,
      productStandouts: [],
      age: null,
      boughtFor: '',
      country: ''
  });

  const { quality, design, experience, productStandouts, age, boughtFor, country } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const history = useHistory();

  const onSubmit = e => {
      e.preventDefault();

      history.push('/media');
  }

    return (
        <div className='ratings-form'>
        <form onSubmit={e => onSubmit(e)}>
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
                                            <span>High Quality</span>
                                            <span>Durable</span>
                                            <span>Elegant</span>
                                            <span>Good Weight</span>
                                            <span>Versatile</span>
                                            <span>Looks Expensive</span>
                                            <span>Attracts Compliments</span>
                                            <span>Unique</span>
                                            <span>Great Gift</span>
                                            <span>Great Value</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shopper-value-attributes'>
                                <legend>
                                    <span style={{fontWeight: 'bold'}}>About You</span>
                                </legend>

                                {/* Age Range */}
                                <div className='shopper-attributes'>
                                    <div>Age Range</div>
                                    <div className='choose-option'>Choose <span>one</span></div>
                                    <div>
                                        <div className='age-option-inputs'>
                                            <div className='option-inputs-item'>
                                                <div className='option-input-control'>
                                                    <span>Under 18</span>
                                                    <span>18 - 24</span>
                                                    <span>25 - 34</span>
                                                    <span>35 - 44</span>
                                                    <span>45 - 54</span>
                                                    <span>55 - 64</span>
                                                    <span>65+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bought For Section */}
                                    <div className='bought-for'>
                                        <div>Bought For</div>
                                        <div className='choose-option'>Choose <span>one</span></div>
                                        <div>
                                            <div className='option-inputs'>
                                                <div className='option-inpust-item'>
                                                    <div className='option-input-control'>
                                                        <span>Personal Use</span>
                                                        <span>Gift</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Country */}
                                <div className='country-pick'>
                                    <label className='country-section'>Country</label>
                                    <div>
                                    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={countries}
    //   classes={{
    //     option: classes.option,
    //   }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
                                    </div>
                                </div>

                                </div>
                            </div>
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
    )

}


export default withRouter(RatingsForm);