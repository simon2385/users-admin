import React from 'react';

import classes from './Button.module.scss';

const Button = ({ styles, type, children, onClick }) => {
  const myClass = `${classes.button} ${classes[styles]}`;

  return (
    <button type={type} className={myClass} onClick={onClick || undefined}>
      {children}
    </button>
  );
};

export default Button;
