import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logout, login, clearErrors } from '../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(SessionForm);