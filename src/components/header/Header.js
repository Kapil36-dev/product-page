import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Headbar() {
    return (
        <>
          <div className="headbar_container">
              <div className="headbar_logo">CODESANDBOTS</div>
             <Link to="/"> 
                <div className="headbar_option">HOME</div> 
             </Link>
              <div className="headbar_option">SHOP</div>
              <div className="headbar_option">CLASSES</div>
          </div> 
        </>
    )
}

export default Headbar;