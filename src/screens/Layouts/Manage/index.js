import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAction } from '../../../actions/AccountActions';

const Layout = ({ children, signOutAction, account }) => {
  if (!account) {
    return <Redirect to='/signIn' />;
  }

  const signOutHandler = (e) => {
    e.preventDefault();

    signOutAction();
  };

  return (
    <div className='layout'>
      <nav className='navbar navbar-expand-lg bg-primary text-light'>
        <div className='container d-flex w-100 justify-content-between'>
          <div>
            <span>Back</span>
          </div>
          <div className='text-center'>
            <strong>Links</strong>
          </div>
          <div>
            <button className='btn btn-clear' onClick={signOutHandler}>
              Exit
            </button>
          </div>
        </div>
      </nav>
      <div className='container'>{children}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { signOutAction })(Layout);
