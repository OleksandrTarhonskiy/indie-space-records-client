import React          from 'react';
import PropTypes      from 'prop-types';
import styled         from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const WidgetsPanel = ({ widgets }) => (
  <div>
    {
      widgets.map(w =>
        <WidgetsPanel.WidgetWrapper key={w.id}>
          <SocialIcon url={w.link} />
          <WidgetsPanel.Link href={w.link}>
            {w.link}
          </WidgetsPanel.Link>
        </WidgetsPanel.WidgetWrapper>
      )
    }
  </div>
);

WidgetsPanel.WidgetWrapper = styled.div`
  display        : flex;
  flex-direction : row;
  padding        : 2%;
`;

WidgetsPanel.Link = styled.a`
  color           : grey;
  text-decoration : none;
  padding         : 1%;
`;

WidgetsPanel.propTypes = {
  widgets : PropTypes.array
};

export default WidgetsPanel;
