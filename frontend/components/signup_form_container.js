import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup",
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);