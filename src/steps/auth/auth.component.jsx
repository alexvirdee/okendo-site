import React from 'react';

import './auth.styles.scss';

import ConfirmAuth from '../../components/confirm-auth/confirm-auth.component';

const AuthStep = () => (
    <div className='auth-step'>
        <ConfirmAuth />
    </div>
)

export default AuthStep;