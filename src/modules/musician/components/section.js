import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Section = ({
  type,
  events,
  products,
  content,
  currency,
}) => {
  switch (type) {
  case 'music':
    return(<p>music here</p>);
  case 'merch':
    return(
      <Section.List>
      {
        products.map((p, index) =>
          <Section.ListItem key={p.id}>
            <Section.ImageWrapper background={'https://images1.popmeh.ru/upload/custom/6d6/6d622e39eb0bc3405da998fc1f98b92a.jpg'} />
            {p.title}
            <Section.Button>
              {p.price + ' ' + currency}
            </Section.Button>
          </Section.ListItem>
        )
      }
      </Section.List>
    );
  case 'events':
    return(
      <Section.List>
      {
        events.map(e =>
          <li key={e.id}>{e.title}</li>
        )
      }
      </Section.List>
    );
  default:
    return(<p>{content}</p>);
  }
};

Section.List = styled.ul`
  && {
    display        : flex;
    flex-direction : column;
    list-style     : none;
    padding        : 0;
    margin         : 0;

    ${breakpoint('md')`
      display               : grid;
      grid-template-columns : 33% 33% 33%;
    `}
  }
`;

Section.ListItem = styled.li`
  margin : 4%;
`;

Section.ImageWrapper = styled.div`
  width             : 100%;
  height            : 462px;
  background        : url(${props => props.background});
  background-size   : contain;
  background-repeat : no-repeat;
`;

Section.Button = styled.button`
  background : transparent;
  height     : 62px;
  width      : 100%;
  color      : #ffff;
  font-size  : 25px;
  border     : solid;
`;

export default Section;
