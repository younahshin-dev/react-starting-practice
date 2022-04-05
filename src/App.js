import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
const DUMMY_USER = [
  {
    id: 'e1',
    username: 'Max',
    age: 11,
  },
  {
    id: 'e2',
    username: 'Terry',
    age: 32,
  },
];
function App() {
  const [users, setUsers] = useState(DUMMY_USER);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), username: uName, age: uAge },
      ];
    });
  };

  return (
    <div className='App'>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
