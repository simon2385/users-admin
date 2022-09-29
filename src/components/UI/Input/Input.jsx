import React, { useState } from 'react';

import classes from './Input.module.scss';

const Input = ({ name, onChange, value, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const iconPasswordInput = !showPassword ? (
    <i className="eye icon"></i>
  ) : (
    <i className="eye slash icon"></i>
  );

  let inputType;

  if (name === 'age') {
    inputType = 'number';
  } else if (name.includes('password')) {
    inputType = !showPassword ? 'password' : 'text';
  } else {
    inputType = 'text';
  }

  return (
    <div className={classes['form__input-box']}>
      {label && (
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={classes.input}
        type={inputType}
        name={name || ''}
        value={value}
        onChange={onChange}
        id={name}
        min={inputType === 'number' ? '16' : ''}
      />
      {name.includes('password') && (
        <button
          className={classes['button--show-password']}
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {iconPasswordInput}
        </button>
      )}
    </div>
  );
};

export default Input;
