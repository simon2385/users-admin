import React, { useState } from 'react';

import ButtonGreen from '../UI/Buttons/ButtonGreen';
import ButtonRed from '../UI/Buttons/ButtonRed';
import Input from '../UI/Input/Input';
import classes from './NewUserForm.module.css';

const NewUserForm = ({ onAddingNewUser }) => {
  const [inputs, setInputs] = useState({});

  const inputChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  };

  const cancelAddNewUserHandler = () => onAddingNewUser(false);

  const submitHandler = e => {
    e.preventDefault();
    onAddingNewUser(false);
  };

  return (
    <section className={classes['form-container']}>
      <h4 className={classes['form__title']}>Register new user</h4>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['form-inputs']}>
          <Input
            label={'Name'}
            name={'name'}
            onChange={inputChangeHandler}
            value={inputs.name || ''}
          />
          <Input
            label={'Last Name'}
            name={'lastName'}
            onChange={inputChangeHandler}
            value={inputs.lastName || ''}
          />
          <Input
            label={'Email'}
            name={'email'}
            onChange={inputChangeHandler}
            value={inputs.email || ''}
            type={'email'}
          />
          <Input
            label={'Age'}
            name={'age'}
            onChange={inputChangeHandler}
            value={inputs.age || ''}
          />
          <Input
            label={'Password'}
            name={'password1'}
            onChange={inputChangeHandler}
            value={inputs.password1 || ''}
          />
          <Input
            label={'Repeat Password'}
            name={'password2'}
            onChange={inputChangeHandler}
            value={inputs.password2 || ''}
          />
        </div>
        <div className={classes['form-btns']}>
          <ButtonRed onClick={cancelAddNewUserHandler} type={'button'}>
            Cancel
          </ButtonRed>
          <ButtonGreen type={'submit'}>Add</ButtonGreen>
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
