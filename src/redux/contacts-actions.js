import { createAction } from '@reduxjs/toolkit';

export const featchContactRequest = createAction(
  'contacts/featchContactRequest',
);
export const featchContactSuccess = createAction(
  'contacts/featchContactSuccess',
);
export const featchContactError = createAction('contacts/featchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
