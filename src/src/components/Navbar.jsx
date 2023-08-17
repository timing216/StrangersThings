import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ logout, token }) => {
  return (
    
    <header>
      <h1>Welcome to Adam's Version of Stranger's Things!</h1>
      <nav>
       
        <Link to='/'> Home </Link>
        <Link to='/posts'> Posts </Link>
        <Link to='/profile'> Profile </Link>
        <Link class="link" to='/posts/create-post'>Create Post</Link>
        
        {
          token ? (
            <Link to='/' onClick={ () => logout() }>Logout</Link>
          ) : (
            <>
              <Link to='/register'> Register </Link>
              <Link to='/login'> Login </Link>
                           
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar;