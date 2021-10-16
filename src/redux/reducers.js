import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  changeFilter,
  featchContactRequest,
  featchContactSuccess,
  featchContactError,
} from './contacts-actions';

const items = createReducer([], {
  [featchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, action) => {
    let similar = state.find(item => item.name === action.payload.name);

    if (similar !== undefined) {
      alert(`${action.payload.name} is already in contacts.`);
      return state;
    } else return [...state, action.payload];
  },
  [deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [featchContactRequest]: () => true,
  [featchContactSuccess]: () => false,
  [featchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items: items,
  loading: loading,
  filter: filter,
  error: error,
});

export default contactsReducer;
