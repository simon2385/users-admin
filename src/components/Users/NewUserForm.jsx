import React from 'react';

import ButtonGreen from '../UI/Buttons/ButtonGreen';
import ButtonRed from '../UI/Buttons/ButtonRed';
import classes from './NewUserForm.module.css';

const NewUserForm = () => {
  return (
    <section className={classes['form-container']}>
      <h4 className={classes['form__title']}>Register new user</h4>
      <form className={classes.form}>
        <div className={classes['form-inputs']}>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="name">
              Name
            </label>
            <input className={classes['form__input']} id="name" />
          </div>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="last-name">
              Last name
            </label>
            <input id="last-name" className={classes['form__input']} />
          </div>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="age">
              Age
            </label>
            <input
              id="age"
              className={classes['form__input']}
              type="number"
              min="1"
            />
          </div>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="email">
              Email
            </label>
            <input id="email" className={classes['form__input']} />
          </div>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="password1">
              Password
            </label>
            <input id="password1" className={classes['form__input']} />
          </div>
          <div className={classes['form__input-box']}>
            <label className={classes['form__input-label']} htmlFor="password2">
              Repeat password
            </label>
            <input id="password2" className={classes['form__input']} />
          </div>
        </div>

        <div className={classes['form-btns']}>
          <ButtonRed type={"button"}>Cancel</ButtonRed>
          <ButtonGreen type={"submit"}>Add</ButtonGreen>
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
