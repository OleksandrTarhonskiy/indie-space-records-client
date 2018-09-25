import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const Template = () => (
  <div>
    <Template.Band>
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
  </div>
);

Template.Band = styled.div`
  background : grey;
  color      : #ffff;
  width      : 100%;
`;

Template.Body = styled.div`
  display         : flex;
  justify-content : center;
  flex-direction  : row;
  padding         : 5% 10%;
`;

Template.Header = styled.div`
 background : linear-gradient(to right, #983f98, #4f93cb);
 padding    : 5% 10%;
`;

export default Template;
