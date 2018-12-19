import React              from 'react';
import PropTypes          from 'prop-types';
import styled             from 'styled-components';
import { SocialIcon }     from 'react-social-icons';

import DeleteWidgetButton from './delete_widget_button';

const WidgetsPanel = ({ widgets }) => (
  <div>
    {
      widgets.map(w =>
        <WidgetsPanel.WidgetWrapper key={w.id}>
          <SocialIcon url={w.link} />
          <WidgetsPanel.Link>
            {w.link}
          </WidgetsPanel.Link>
          <DeleteWidgetButton id={w.id} />
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

WidgetsPanel.Link = styled.p`
  color        : grey;
  padding-left : 10px;
`;

WidgetsPanel.propTypes = {
  widgets : PropTypes.array
};

export default WidgetsPanel;
