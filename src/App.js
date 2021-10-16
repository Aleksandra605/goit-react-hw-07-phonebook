import './App.css';
import Form from './Components/form/Form';
import Filter from './Components/filter/Filter';
import ContactList from './Components/contacts-list/ContactList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoading } from './redux/contacts-selectors';
import { fetchContacts } from './redux/contacts-operations';
import { Component } from 'react';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <Form />
        <Filter />
        {this.props.isLoadingcontacts && <h2>Loading...</h2>}
        <ContactList />
      </div>
    );
  }
}

App.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => ({
  isLoadingcontacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
