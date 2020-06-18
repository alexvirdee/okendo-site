import React from 'react';

import './confirm-auth.styles.scss';

const ConfirmAuth = () => {
    return (
        <main>
            <div className='u-container'>
                <div className='gutter'>
                    <div className='card auth-card'>
                    <form>
                    <input type="hidden" name="returnUrl" value="" autoComplete="off" />
                    <h2>Add your profile picture to your review!</h2>
                    <p className='mb-medium'>This helps other shoppers by adding authenticity to your review.</p>
                    <div className='profile-btns'>
                        <button type='submit' name='provider' value='Google' id='Google' className='signIn signIn-google'>
                            Connect with Google+
                        </button>
                        <button type='submit' name='provider' value='Facebook' id='Facebook' className='signIn signIn-facebook'>
                            Connect with Facebook
                        </button>
                    </div>
                    </form>
                    <div className='divider'><span>OR</span></div>
                        <form>
                            <div className='signIn signIn-guest'>
                                <button className='signIn-guest-btn'>Continue as guest</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ConfirmAuth;