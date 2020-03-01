import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from '../store/actions';
import { IFieldState } from '../Types/Types';
import '../styles/index.css';

class App extends React.Component {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <>
        <h1> Insert Name</h1>

        <div className='app'>
          <input
            value={firstName}
            type='text'
            placeholder='First Name'
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />

          <input
            value={secondName}
            type='text'
            placeholder='Second Name'
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />

          <div>{`${firstName} ${secondName}`}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IFieldState) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
