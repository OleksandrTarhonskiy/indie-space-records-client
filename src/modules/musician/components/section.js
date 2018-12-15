import React           from 'react';
import styled          from 'styled-components';
import breakpoint      from 'styled-components-breakpoint';
import moment          from 'moment';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

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
              <Section.ImageWrapper background={'https://www.hypebot.com/.a/6a00d83451b36c69e201b8d13ade89970c-800wi'} />
              <Section.ProductName
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {p.title}
              </Section.ProductName>
              <Section.ProductPrice
                elementFont={elementFont}
                elementStyles={elementStyles}
                className="apply-font-regularTextFont"
              >
                {p.price + ' ' + currency}
              </Section.ProductPrice>
              <Section.ButtonsWrapper>
                <Section.Button
                  elementFont={elementFont}
                  elementStyles={elementStyles}
                  className="apply-font-linksFont"
                >
                  Buy now
                </Section.Button>
                <Section.Button
                  elementFont={elementFont}
                  elementStyles={elementStyles}
                  className="apply-font-linksFont"
                >
                  <AddShoppingCart />
                  Add
                </Section.Button>
              </Section.ButtonsWrapper>
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
                elementStyles={elementStyles}
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

Section.ButtonsWrapper = styled.div`
  display               : grid;
  grid-template-columns : 30% 30%;
`;

Section.Button = styled.button`
  font-family : ${props => `${props.elementFont.linksFont}`}, sans-serif;
  background : transparent;
  height     : 62px;
  color      : ${props => props.elementStyles.LinksColor};
  font-size  : 24px;
  border     : solid;
  margin     : 1%;
`;

Section.ProductName = styled.h2`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
`;

Section.ProductPrice = styled.h3`
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
`;

Section.TiketsButton = styled.button`
  font-family : ${props => `${props.elementFont.linksFont}`}, sans-serif;
  background  : transparent;
  color       : ${props => props.elementStyles.LinksColor};
  border      : solid;
  width       : 100px;
  height      : 45px;
`;

export default Section;
