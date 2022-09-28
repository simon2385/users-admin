import React from 'react';

import classes from './ButtonRed.module.css';

const ButtonRed = ({ onClick, children, type }) => {
  return <button onClick={onClick || undefined} className={classes['btn--red']} type={type}>{children}</button>;
};

export default ButtonRed;
