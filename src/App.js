import { useState } from 'react';

import Card from './components/UI/Card';
import RegistredUsers from './components/Users/RegistredUsers';
import Header from './components/Layout/Header/Header.jsx';
import NewUser from './components/Users/NewUser';
import NewUserForm from './components/Users/NewUserForm';

import classes from './App.module.scss';

function App() {
  const [adminAcces, setAdminAcces] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);

  const onAccesValid = acces => setAdminAcces(acces);
  const addingNewUserHandler = addingNewUser => setAddNewUser(addingNewUser);

  const admin = {
    name: 'simon',
    code: '23xyz',
  };

  console.log(addNewUser)

  //adminAcces condition changed for testing styles
  return (
    <Card>
      <Header
        admin={admin}
        adminAcces={adminAcces}
        onAccesValid={onAccesValid}
      />
      {adminAcces ? (
        <section>
          <RegistredUsers />
          {addNewUser ? (
            <NewUserForm onAddingNewUser={addingNewUserHandler} />
          ) : (
            <NewUser onAddingNewUser={addingNewUserHandler} />
          )}
        </section>
      ) : (
        <div className={classes['message__container']}>
          <p className={classes['message__no-acces']}>Login to see the users</p>
        </div>
      )}
    </Card>
  );
}

export default App;
