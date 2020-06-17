import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './header.styles.scss';

class Header extends React.Component {
    render() {
        const title = this.props.location.pathname.slice(1);
        return (
            <div className='header'>
            <div className='header-text'>
                <h1 className='title'>1815 Rose Gold Chronograph Watch - Brown Croco Strap</h1>
             <h2 style={{textTransform: 'capitalize'}} className='subtitle'>{title}</h2>
            </div>
            <div className='nav-container'>
                <div className='grid-outterGutter'>
                    <nav className='header-steps'>
                        <div className='step'>
        <Link className='review-btn' to="/review">Review</Link>   
                        </div>
                        <div className='step'>                
                            <Link to="/ratings">Ratings</Link>  
                        </div>
                        <div className='step'>         
                            <Link to="/media">Media</Link>  
                        </div>
                        <div className='step'>                
                            <Link to="/login">Confirm</Link> 
                        </div>
                    </nav>
                </div>
            </div>
       </div>
        )
    }
}


export default withRouter(Header);