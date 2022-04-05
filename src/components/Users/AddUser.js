import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0).',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    setEnteredName('');
    setEnteredAge('');
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clickHandler = () => {};

  const cacelErrorModal = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title || 'An error occured!'}
          message={error.message || 'Something went wrong!'}
          onClickOkay={cacelErrorModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>UserName</label>
          <input
            id='username'
            type='text'
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type='submit' onClick={clickHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
