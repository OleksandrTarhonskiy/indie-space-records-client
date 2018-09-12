import React  from 'react';
import styled from 'styled-components';
import ChipInput from 'material-ui-chip-input'
import * as R                  from 'ramda';
import {
  compose,
  withStateHandlers
}                              from 'recompose';


const MusicianProfileForm = ({
  profile: {
    genres,
  },
  addChip,
  deleteChip
}) => (
  <form>
    <ChipInput
      label="Genres"
      placeholder="Type and press enter to add..."
      value={genres || []}
      onAdd={addChip.bind(null, 'genres')}
      onDelete={deleteChip.bind(null, 'genres')}
    />
  </form>
);

const withRecompose = compose(
  withStateHandlers(
    ({
      profile = {
        genres : [],
      },
    }) => ({ profile }),
    {
      addChip   : state => (field, value) => {
        const fieldLens = R.lensProp(field);
        const profile   = R.set(fieldLens, R.compose(R.append(value), R.view(fieldLens))(state.profile), state.profile);
        return ({ profile });
      },
      deleteChip : state => (field, value, ind) => {
        const profile = R.dissocPath([field, ind], (state.profile: Object));
        return ({ profile });
      },
    },
  ),
);

export default withRecompose(MusicianProfileForm);
