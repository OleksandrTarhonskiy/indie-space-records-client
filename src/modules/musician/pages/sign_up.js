import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import Stepper        from '@material-ui/core/Stepper';
import Step           from '@material-ui/core/Step';
import StepLabel      from '@material-ui/core/StepLabel';
import StepContent    from '@material-ui/core/StepContent';
import Button         from '@material-ui/core/Button';
import Paper          from '@material-ui/core/Paper';
import Typography     from '@material-ui/core/Typography';
import * as R         from 'ramda';
import {
  compose,
  withStateHandlers,
}                     from 'recompose';

import {
  ALL_STEPS,
  getStepContent,
}                     from '../models/steps'
import GradientButton from '../../../layouts/gradient_button';
import MusicianSignUpForm from '../forms/sign_up_form'

const MusicianSignUp = ({
  steps : {
    activeStep,
    canMove,
  },
  handleNext,
  handleBack,
}) => (
  <MusicianSignUp.StepperWrapper>
    <Stepper activeStep={activeStep} orientation="vertical">
      {ALL_STEPS.map((label, index) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div>
                <div>
                  <MusicianSignUp.Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </MusicianSignUp.Button>
                  <GradientButton
                    text={activeStep === ALL_STEPS.length - 1 ? 'Finish' : 'Next'}
                    onClick={handleNext}
                  />
                </div>
              </div>
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
    {activeStep === ALL_STEPS.length && (
      <Paper square elevation={0}>
        <Typography>All steps completed - you&quot;re finished</Typography>
      </Paper>
    )}
  </MusicianSignUp.StepperWrapper>
);

MusicianSignUp.StepperWrapper = styled.div`
  width : '90%',
`;

MusicianSignUp.Button = styled(Button)`
  margin : 1% 2% 0 !important;
`;

MusicianSignUp.propTypes = {
  steps      : PropTypes.object.isRequired,
  handleNext : PropTypes.func.isRequired,
  handleBack : PropTypes.func.isRequired,
};

const withRecompose = compose(
  withStateHandlers(
    ({
      steps = {
        activeStep : 0,
      }
    }) => ({ steps }),
    {
      handleNext : state => () => {
        const activeStep = R.assoc('activeStep', state.steps.activeStep++, state.steps);
        console.log(state)
        return ({activeStep});
      },
      handleBack : state => () => {
        const activeStep = R.assoc('activeStep', state.steps.activeStep--, state.steps);
        return ({activeStep});
      },
    },
  ),
);

export default withRecompose(MusicianSignUp);
