import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export const Header = () => {
    return (
        <div className='headerBody'>
            <Link to='/' className='imgLink'>
                <img src='https://acessopolitico.com.br/wp-content/uploads/2017/06/cinema.png' alt='logo' />
            </Link>
            <Link to='/login' className='btnLogin'>
                <button>Login</button>
            </Link>
        </div>
    )
}
