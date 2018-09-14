import React            from 'react';
import ChipInput        from 'material-ui-chip-input'
import TextField        from '@material-ui/core/TextField';
import * as R           from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers,
}                       from 'recompose';
import { gql, graphql } from 'react-apollo';
import styled           from 'styled-components';

import GradientButton   from '../../../layouts/gradient_button';

const MusicianProfileForm = ({
  form: {
    name,
    genres,
  },
  addChip,
  deleteChip,
  submit,
  handleChange,
}) => (
  <form>
    <MusicianProfileForm.Headline>
      Tell me some information about your band
    </MusicianProfileForm.Headline>
    <TextField
      id="name"
      name="name"
      label="Name"
      type="text"
      margin="normal"
      value={name}
      onChange={handleChange}
      fullWidth
    />
    <ChipInput
      label="Genres"
      placeholder="Type and press enter to add..."
      value={genres || []}
      onAdd={addChip.bind(null, 'genres')}
      onDelete={deleteChip.bind(null, 'genres')}
    />
    <br />
    <GradientButton
      text={'Create'}
      onClick={submit}
    />
  </form>
);

MusicianProfileForm.Headline = styled.h1`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
  text-align  : center;
  font-weight : 300;
`;

const createProfileMutation = gql`
  mutation($name: String!, $genres: String!) {
    createProfile(name: $name, genres: $genres) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

const withRecompose = compose(
  graphql(createProfileMutation),

  withStateHandlers(
    ({
      form = {
        name   : '',
        genres : [],
      },
    }) => ({ form }),
    {
      handleChange : state => ({ target }) => {
        const form = R.assoc(target.name, target.value, state.form);
        return ({ form });
      },
      addChip   : state => (field, value) => {
        const fieldLens = R.lensProp(field);
        const form = R.set(fieldLens, R.compose(R.append(value), R.view(fieldLens))(state.form), state.form);
        return ({ form });
      },
      deleteChip : state => (field, value, ind) => {
        const form = R.dissocPath([field, ind], (state.form: Object));
        return ({ form });
      },
    },
  ),
  withHandlers({
    submit : ({
      form : {
        name,
        genres,
      },
      mutate,
    }) => async () => {
      const genresString = genres.toString()
      const response = await mutate({
        variables: {name: name, genres: genresString}
      });

      const { ok, errors } = response.data.profile;

      if (ok) {
        console.log(ok)
      } else {
        console.log(errors)
      }
    },
  })
);

export default withRecompose(MusicianProfileForm);
