import React      from 'react';
import styled     from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import moment     from 'moment';

const Section = ({
  type,
  events,
  products,
  content,
  currency,
  elementFont,
  elementStyles,
}) => {
  switch (type) {
  case 'music':
    return(<p>music here</p>);
  case 'merch':
    return(
      <Section.List>
        {
          products.map(p =>
            <Section.ListItem key={p.id}>
              <Section.ImageWrapper background={'https://images1.popmeh.ru/upload/custom/6d6/6d622e39eb0bc3405da998fc1f98b92a.jpg'} />
              <Section.ProductName
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {p.title}
              </Section.ProductName>
              <Section.Button
                elementFont={elementFont}
                className="apply-font-linksFont"
              >
                {p.price + ' ' + currency}
              </Section.Button>
            </Section.ListItem>
          )
        }
      </Section.List>
    );
  case 'events':
    return(
      <div>
        {
          events.map(e =>
            <Section.EventsItem key={e.id}>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {moment(e.date).format('D MMM HH:mm')}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {e.title}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {e.address}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {e.price}
              </Section.Cell>
              <Section.TiketsButton
                elementFont={elementFont}
                className="apply-font-linksFont"
              >
              Tikets
              </Section.TiketsButton>
            </Section.EventsItem>
          )
        }
      </div>
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
  font-family : ${props => `${props.elementFont.linksFont}`}, sans-serif;
  background : transparent;
  height     : 62px;
  width      : 100%;
  color      : #ffff;
  font-size  : 25px;
  border     : solid;
`;

Section.ProductName = styled.p`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
`;

Section.EventsItem = styled.div`
  && {
    display        : flex;
    flex-direction : column;
    width          : 100%;

    ${breakpoint('md')`
      display        : flex;
      flex-direction : row;
    `}
  }
`;

Section.Cell = styled.div`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  font-size   : 20px;
  width       : 220px;
  margin      : 2%;
  color       : #fff;
`;

Section.TiketsButton = styled.button`
  font-family : ${props => `${props.elementFont.linksFont}`}, sans-serif;
  background  : transparent;
  color       : #ffff;
  border      : solid;
  width       : 100px;
  height      : 45px;
`;

export default Section;
