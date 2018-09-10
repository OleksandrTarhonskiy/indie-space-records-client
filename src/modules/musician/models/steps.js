import React               from 'react';
import MusicianProfileForm from '../forms/musician_profile_form'

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

export function getStepContent(step) {
  switch (step) {
  case 0:
    return (<MusicianProfileForm />);
  case 1:
    return 'An ad group contains one or more ads which target a shared set of keywords.';
  case 2:
    return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
  default:
    return 'Unknown step';
  }
}

export const ALL_STEPS = getSteps();
