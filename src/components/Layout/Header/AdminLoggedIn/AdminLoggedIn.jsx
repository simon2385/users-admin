import React from 'react';

import classes from './AdminLoggedIn.module.css';

const AdminLoggedIn = ({ admin, onAccesValid }) => {
  const submitHandler = e => {
    e.preventDefault();
    onAccesValid(false);

  };

  return (
    <form className={classes['loggedin__container']} onSubmit={submitHandler}>
      <div className={classes['loggedin__title-container']}>
        <h3 className={classes['loggedin__title']}>
          Welcome {admin.name[0].toUpperCase()}
          {admin.name.slice(1)}
        </h3>
      </div>
      <div className={classes['logout__btn-container']}>
        <button className={classes['btn--logout']}>logout</button>
      </div>
    </form>
  );
};

export default AdminLoggedIn;
