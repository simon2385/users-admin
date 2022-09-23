import React, { useEffect, useState } from 'react';

import ButtonRed from '../UI/Buttons/ButtonRed';
import classes from './RegistredUsers.module.css';

const RegistredUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsersHandler = async () => {
      const response = await fetch(
        'https://users-d9aa9-default-rtdb.firebaseio.com/users.json'
      );

      if (!response.ok) throw new Error('🚨 SomeThing went wrong, try again.');

      const data = await response.json();
      setUsers(Object.values([data].at(0)));
      setIsLoading(false);
    };
    fetchUsersHandler().catch(err => alert(err.message));
  }, []);

  const usersToRender = users.map((user, i) => {
    return (
      <li key={Math.random()} className={classes['user__container']}>
        <h4 className={classes['user__id']}>User {i + 1}</h4>
        <div className={classes['user-info__container']}>
          <div className={classes['user__name']}>
            <b>Name: </b>
            {user.name[0].toUpperCase()}
            {user.name.slice(1)}
          </div>
          <div className={classes['user__last-name']}>
            <b>Last Name: </b>
            {user.lastName[0].toUpperCase()}
            {user.lastName.slice(1)}
          </div>
          <div className={classes['user__age']}>
            <b>Age: </b>
            {user.age}
          </div>
          <div className={classes['user__email']}>
            <b>Email: </b>
            {user.email}
          </div>
        </div>
        <div className={classes['btn__container']}>
          <ButtonRed>
            <i className="trash alternate outline icon"></i>
          </ButtonRed>
        </div>
      </li>
    );
  });

  return (
    <section className={classes['users__container']}>
      <div className={classes['title-box']}>
        <h4 className={classes['title']}>Users list</h4>
      </div>
      {isLoading && (
        <div className={classes['message-loading-container']}>
          <p className={classes['loading-message']}>Loading Users...</p>
        </div>
      )}
      {!isLoading && (
        <ul className={classes['users-list__container']}>{usersToRender}</ul>
      )}
    </section>
  );
};

export default RegistredUsers;
