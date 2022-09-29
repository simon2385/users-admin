import React from 'react';

import HeaderAdminLogin from '../HeaderAdminLogin/HeaderAdminLogin';
import AdminLoggedIn from './AdminLoggedIn/AdminLoggedIn';

import classes from './Header.module.scss';

const Header = ({ admin, adminAcces, onAccesValid }) => {
  const adminAuthToREnder = !adminAcces ? (
    <HeaderAdminLogin admin={admin} onAccesValid={onAccesValid} />
  ) : (
    <AdminLoggedIn admin={admin} onAccesValid={onAccesValid} />
  );

  return (
    <header className={classes.header}>
      <div className={classes['title__container']}>
        <h1 className={classes.title}>
          {!adminAcces ? (
            <i className="sign in alternate icon"></i>
          ) : (
            <i className="sign out alternate icon"></i>
          )}
        </h1>
      </div>
      {adminAuthToREnder}
    </header>
  );
};

export default Header;
