/* import React, { useState } from 'react';

import Input from './Input';

const InputPassword = () => {
  const [showCode, setShowCode] = useState(false);
  const [enteredCode, setEnteredCode] = useState('');

  const inputCodeAccesHandler = e => {
    setEnteredCode(e.target.value);
  };

  const showOrHideCodeHandler = () => {
    setShowCode(!showCode);
  };

  const iconCodeInput = !showCode ? (
    <i className="eye icon"></i>
  ) : (
    <i className="eye slash icon"></i>
  );

  return (
    <>
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
    </>
  );
};

export default InputPassword;
 */