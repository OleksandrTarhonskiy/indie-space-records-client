import React           from 'react';
import PropTypes       from 'prop-types';
import Snackbar        from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon     from '@material-ui/icons/Warning';
import DoneIcon        from '@material-ui/icons/Done';
import styled          from 'styled-components';

const Alert = ({
  action,
  hasError,
  hideAlert,
  errorsList,
}) => (
  <Snackbar
    open={hasError}
    autoHideDuration={2000}
    onClose={hideAlert}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    {
      errorsList.length > 0 ?
        <Alert.Error
          message={errorsList.map((err, index) => <p key={index}><WarningIcon /> {err}</p>)}
        />
        :
        <Alert.Notification
          message={<p><DoneIcon /> {`successfully ${action}`}</p>}
        />
    }
  </Snackbar>
);

Alert.Notification = styled(SnackbarContent)`
  background-color : #59d859 !important;
  font-family      : 'Roboto', sans-serif;
`;

Alert.Error = styled(SnackbarContent)`
  background-color : #ee3c25 !important;
  font-family      : 'Roboto', sans-serif;
`;

Alert.propTypes = {
  action     : PropTypes.string.isRequired,
  hasError   : PropTypes.bool.isRequired,
  hideAlert  : PropTypes.func.isRequired,
  errorsList : PropTypes.array.isRequired,
};

export default Alert;
