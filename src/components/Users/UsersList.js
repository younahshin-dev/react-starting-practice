import React from 'react';
import UserItem from './UserItem';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
