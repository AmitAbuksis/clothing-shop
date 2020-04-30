import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIN, isFacebookSignIn,  ...otherProps }) => {
    return (
        <button className={`
        ${isGoogleSignIN ? 'google-sign-in' : ''} 
        ${isFacebookSignIn ? 'facebook-sign-in' : ''}
         custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;