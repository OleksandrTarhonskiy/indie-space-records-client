import React     from 'react';
import TextField from '@material-ui/core/TextField';
import styled    from 'styled-components';

const MusicianSignUpForm = () => (
  <div>
    <MusicianSignUpForm.Headline>
      Sign up
    </MusicianSignUpForm.Headline>
    <form>
      <TextField
        id="name"
        label="Name"
        margin="normal"
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        margin="normal"
        fullWidth
      />
    </form>
  </div>
);

MusicianSignUpForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
`;

export default MusicianSignUpForm;
