import React from 'react';

import classes from './ButtonGreen.module.css'

const ButtonGreen = ({ children, onClick, className, type }) => {
  const styles = `${classes['btn--green']} ${className}`
  
  return (
    <button className={styles} type={type} onClick={onClick || undefined}>
      {children} 
    </button>
  );
}

export default ButtonGreen;
