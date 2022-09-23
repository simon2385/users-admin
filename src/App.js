import { useState } from 'react';

import Card from './components/UI/Card';
import RegistredUsers from './components/Users/RegistredUsers';
import Header from './components/Layout/Header/Header.jsx';
import NewUser from './components/Users/NewUser';
import NewUserForm from './components/Users/NewUserForm';
import classes from './App.module.css';

function App() {
  const [adminAcces, setAdminAcces] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);

  const onAccesValid = acces => setAdminAcces(acces);
  const onAddingNewUser = addingNewUser => setAddNewUser(addingNewUser);

  const admin = {
    name: 'simon',
    code: '23xyz',
  };

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
            <NewUserForm />
          ) : (
            <NewUser onAddingNewUser={onAddingNewUser} />
          )}
        </section>
      ) : (
        <div className={classes['message-container']}>
          <p className={classes['no-acces__message']}>Login to see the users</p>
        </div>
      )}
    </Card>
  );
}

export default App;
