import React          from 'react';
import styled         from 'styled-components';
import breakpoint     from 'styled-components-breakpoint';
import Typography     from '@material-ui/core/Typography';

import GradientButton from '../../../layouts/gradient_button';

const Features = () => (
  <Features.FeaturesWrapper>
    <Features.FeatureInfo>
      <Typography variant="display2" gutterBottom>
        Lorem Ipsum is
      </Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <GradientButton text="learn more" />
    </Features.FeatureInfo>
    <Features.FeatureInfo>
      <Typography variant="display2" gutterBottom>
        Lorem Ipsum is
      </Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <GradientButton text="learn more" />
    </Features.FeatureInfo>
    <Features.FeatureInfo>
      <Typography variant="display2" gutterBottom>
        Lorem Ipsum is
      </Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <GradientButton>
        learn more
      </GradientButton>
    </Features.FeatureInfo>
  </Features.FeaturesWrapper>
);

Features.FeaturesWrapper = styled.div`
  && {
    display        : flex;
    padding        : 4%;
    background     : #eaedf5;
    flex-direction : column;

    ${breakpoint('md')`
      padding               : 4% 8%;
      display               : grid;
      grid-template-columns : 30% 30% 30%;
      justify-content       : space-between;
    `}
  }
`;

Features.FeatureInfo = styled.div`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
`;


export default Features;
