import { createSelector } from '@reduxjs/toolkit';
const getLoading = state => state.contacts.loading;

const getFilter = state => {
  console.log('state.contacts', state);
  return state.contacts.filter;
};

const getAllContacts = state => {
  console.log('im here');
  return state.contacts.items;
};

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getLoading, getFilter, getAllContacts, getVisibleContacts };
