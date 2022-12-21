import React from 'react';
import "./searchbar.css";

const Searchbar = () => {
  return (
    <div className='searchbar'>
        <div className='container'>
            <div className='searchbar-content'>
                <div className='searchbar-left'>
                    <h1 className='title'>What do you want to buy? 🛍️</h1>
                    <input className='search_input' type="text" placeholder="Please enter you wanted to reach :)"/>
                </div>

                <div className='searchbar-right'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchbar