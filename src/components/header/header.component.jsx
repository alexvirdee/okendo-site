import React from 'react';

import './header.styles.scss';

class Header extends React.Component {
    state = {
        title: 'Review'
    };

    render() {
        return (
            <div className='header'>
            <div className='header-text'>
                <h1 className='title'>1815 Rose Gold Chronograph Watch - Brown Croco Strap</h1>
        <h2 className='subtitle'>{this.state.title}</h2>
            </div>
            <div className='nav-container'>
                <div className='grid-outterGutter'>
                    <nav className='header-steps'>
                        <div className='step'>
        <a className='review-btn' href="#">Review</a>   
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
    }
}


export default Header;