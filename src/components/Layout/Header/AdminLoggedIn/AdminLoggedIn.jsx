import React from 'react';

import Button from '../../../UI/Buttons/Button/Button';

import classes from './AdminLoggedIn.module.scss';

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
        <Button type={'submit'} styles={'button--secondary'}>logout</Button>
      </div>
    </form>
  );
};

export default AdminLoggedIn;
