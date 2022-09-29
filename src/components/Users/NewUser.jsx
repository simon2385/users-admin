import React from 'react';

import Button from '../UI/Buttons/Button/Button';
import classes from './NewUser.module.scss';

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
        <Button styles={'button--primary'} onClick={addUserHandler} type={'button'}>
          <i className="plus icon"></i>
        </Button>
      </div>
    </div>
  );
};

export default NewUser;
