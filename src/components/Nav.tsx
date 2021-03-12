import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { User } from '../models/user';
const Nav = (props: { user: User }) => {
  const logout = async () => {
    await axios.post('logout', {});
  };

  return (
    <nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
      <Link className='navbar-brand col-md-3 col-lg-2 me-0 px-3' to='/'>
        Company name
      </Link>
      <ul className='my-2 my-md-0 mr-md-3'>
        <Link className='p-2 text-white' to={'/profile'}>
          {props.user.name}
        </Link>
        <Link className='p-2 text-white' to={'/login'} onClick={logout}>
          Sign out
        </Link>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: { user: User }) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Nav);
