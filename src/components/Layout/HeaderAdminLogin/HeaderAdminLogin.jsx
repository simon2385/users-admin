import React, { useState } from 'react';

import ButtonGreen from '../../UI/Buttons/ButtonGreen';
import classes from './HeaderAdminLogin.module.css';

const HeaderAdminLogin = ({ admin, onAccesValid }) => {
  const [enteredAdmin, setEnteredAdmin] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  let adminFormIsValid;

  const inputAdminHandler = e => {
    setEnteredAdmin(e.target.value);
  };

  const inputCodeAccesHandler = e => {
    setEnteredCode(e.target.value);
  };

  if (enteredAdmin === admin.name && enteredCode === admin.code) {
    adminFormIsValid = true;
  }

  const submitAdminHandler = e => {
    e.preventDefault();

    if (!adminFormIsValid) return;

    onAccesValid(true);

    setEnteredAdmin('');
    setEnteredCode('');
  };

  const btnLoginClasses = !adminFormIsValid
    ? classes.disabled
    : classes['btn--login'];

  const iconCodeInput = !showCode ? (
    <i className="eye icon"></i>
  ) : (
    <i className="eye slash icon"></i>
  );

  const showOrHideCodeHandler = () => {
    setShowCode(!showCode);
  };

  return (
    <form
      className={classes['admin__inputs-container']}
      onSubmit={submitAdminHandler}
    >
      <div className={classes['admin__name-container']}>
        <input
          type="text"
          className={classes['admin__input']}
          placeholder="administrator"
          onChange={inputAdminHandler}
          value={enteredAdmin}
        />
      </div>
      <div className={classes['admin__code-container']}>
        <input
          type={!showCode ? 'password' : 'text'}
          maxLength="5"
          id="log-admin__code"
          className={classes['admin__input']}
          placeholder="acces code"
          onChange={inputCodeAccesHandler}
          value={enteredCode}
        />
        <button
          className={classes['button--show-code']}
          type="button"
          onClick={showOrHideCodeHandler}
        >
          {iconCodeInput}
        </button>
      </div>
      <div className={classes['btn--login__container']}>
        <button type="submit" className={btnLoginClasses}>
          login
        </button>
      </div>
    </form>
  );
};

export default HeaderAdminLogin;
