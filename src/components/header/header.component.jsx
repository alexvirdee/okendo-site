import React from 'react';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='header-text'>
            <h1 className='title'>1815 Rose Gold Chronograph Watch - Brown Croco Strap</h1>
            <h2 className='subtitle'>Review</h2>
        </div>
        <div className='nav-container'>
            <div className='grid-outterGutter'>
                <nav className='header-steps'>
                    <div className='step'>
                        <a href="#">Review</a>   
                    </div>
                    <div className='step'>                
                        <a href="#">Ratings</a>  
                    </div>
                    <div className='step'>         
                        <a href="#">Media</a>  
                    </div>
                    <div className='step'>                
                        <a href="#">Confirm</a>  
                    </div>
                </nav>
            </div>
        </div>
   </div>
)

export default Header;