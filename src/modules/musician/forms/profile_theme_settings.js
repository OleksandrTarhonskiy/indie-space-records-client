import React          from 'react';
import PropTypes      from 'prop-types';
import ColorPicker    from 'material-ui-color-picker';
import * as R         from 'ramda';
import {
  compose,
  withStateHandlers,
  withHandlers
}                     from 'recompose';
import {
  gql,
  graphql
}                     from 'react-apollo';

import GradientButton from '../../../layouts/gradient_button';

const ProfileThemeSettings = ({
  styles: {
    color,
    backgroundColor,
  },
  handleChange,
  submit,
}) => (
  <div>
    <ColorPicker
      defaultValue={color}
      value={color}
      name="color"
      onChange={handleChange.bind(null, 'color')}
      label="Font color"
      margin="normal"
    />
    <ColorPicker
      defaultValue={backgroundColor}
      value={backgroundColor}
      name="backgroundColor"
      label="Site Background Color"
      onChange={handleChange.bind(null, 'backgroundColor')}
      margin="normal"
    />
    <br />
    <GradientButton
      text={'Update this section'}
      onClick={submit}
    />
  </div>
);

const updateThemeMutation = gql`
  mutation($style: String!) {
    updateTheme(style: $style) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

ProfileThemeSettings.propTypes = {
  styles       : PropTypes.object.isRequired,
  submit       : PropTypes.func.isRequired,
  handleChange : PropTypes.func.isRequired,
};


const withRecompose = compose(
  graphql(updateThemeMutation),
  withStateHandlers(
    ({
      styles = {
        color           : '',
        backgroundColor : '',
      },
    }) => ({ styles }),
    {
      handleChange : state => (field, value) => {
        const styles = R.assoc(field, value, state.styles);
        return ({ styles });
      },
    },
  ),
  withHandlers({
    submit : ({styles, mutate }) => async () => {
      const stringStyles = JSON.stringify(styles);
      const response = await mutate({
        variables: {style : stringStyles},
      });
    },
  })
);

export default withRecompose(ProfileThemeSettings);
