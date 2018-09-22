import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Template = ({
  templates,
  name,
  genres,
}) => (
  <div>
  {
    templates.map(template =>
      <Template.Band
        typography={template.typographyColor}
        background={template.background}
      >
        <Template.Header>
          {name}
          <br />
          {genres}
        </Template.Header>
        <Template.Body>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
           Ipsum has been the industrys standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
           Ipsum has been the industrys standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
           Ipsum has been the industrys standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
           Ipsum has been the industrys standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
           specimen book. It has survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
           versions of Lorem Ipsum.
         </Template.Body>
      </Template.Band>
    )
  }
  </div>
);

Template.Band = styled.div`
  background : ${props => props.background};
  color      : ${props => props.typography};
  width      : 100%;
`;

Template.Body = styled.div`
  display         : flex;
  justify-content : center;
  flex-direction  : row;
  padding         : 5% 10%;
`;

Template.Header = styled.div`
 background : linear-gradient(to right,#983f98,#4f93cb);
 padding    : 5% 10%;
`;

Template.propTypes = {
  templates : PropTypes.array.isRequired,
  name      : PropTypes.string.isRequired,
  genres    : PropTypes.string.isRequired,
};

export default Template;
