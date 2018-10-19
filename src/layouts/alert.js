import React           from 'react';
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
    <Alert.Notification
      message={
        errorsList.length > 0 ?
          errorsList.map((err, index) => <p key={index}><WarningIcon /> {err}</p>)
          :
          <p><DoneIcon /> {`successfully ${action}d`}</p>
      }
    />
  </Snackbar>
);

Alert.Notification = styled(SnackbarContent)`
  background-color : ${props => props.message ? '#59d859' : '#ee3c25'} !important;
  font-family      : 'Roboto', sans-serif;
`;

export default Alert;
