import React from 'react';

import classes from './NewUser.module.css';

const NewUser = ({ onAddingNewUser }) => {
  const addUserHandler = () => {
    onAddingNewUser(true);
  }

  return (
    <div className={classes['new-user__container']}>
      <div className={classes['title-container']}>
        <p className={classes.title}>New User</p>
      </div>
      <div className={classes['btn--add-user__container']}>
        <button className={classes['btn--add-user']} onClick={addUserHandler}>
          <i className="plus icon"></i>
        </button>
      </div>
    </div>
  );
};

export default NewUser;
