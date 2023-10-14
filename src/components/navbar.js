import React from 'react'
import  {Link} from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <TiShoppingCart style={{color: '#fff', fontSize:'32px'}} />
            </Link>
        </div>
    </div>
  )
}

export default Navbar
