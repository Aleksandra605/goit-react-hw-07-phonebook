import PropTypes from 'prop-types';
import s from './contactsList-styles.module.css';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts-selectors';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={id} className={s.item}>
            <p className={s.p}>
              {name} <span className={s.span}>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
