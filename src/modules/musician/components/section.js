import React           from 'react';
import styled          from 'styled-components';
import breakpoint      from 'styled-components-breakpoint';
import moment          from 'moment';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { Link }        from 'react-router-dom';
import Button          from '@material-ui/core/Button';

const Section = ({
  id,
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
      <React.Fragment>
        <Section.List>
          {
            products.map(p =>
              <Section.ListItem key={p.id}>
                <Section.ImageWrapper background={`http://localhost:8080/${p.url}`} />
                <Section.ProductName
                  elementFont={elementFont}
                  elementStyles={elementStyles}
                >
                  {p.title}
                </Section.ProductName>
                <Section.ProductPrice
                  elementFont={elementFont}
                  elementStyles={elementStyles}
                >
                  {p.price + ' ' + currency}
                </Section.ProductPrice>
                <Section.ButtonsWrapper>
                  <Section.Button
                    component={Link}
                    to={`/musicians/${id}/merch/${p.id}`}
                    elementFont={elementFont}
                    elementStyles={elementStyles}
                  >
                    Buy now
                  </Section.Button>
                  <Section.Button
                    elementFont={elementFont}
                    elementStyles={elementStyles}
                  >
                    <AddShoppingCart />
                    Add
                  </Section.Button>
                </Section.ButtonsWrapper>
              </Section.ListItem>
            )
          }
        </Section.List>
        <Section.ViewMoreWrapper>
          <Button
            variant="contained"
            component={Link}
            to={`/musicians/${id}/merch`}
          >
            View all merch
          </Button>
        </Section.ViewMoreWrapper>
      </React.Fragment>
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
              >
                {moment(e.date).format('D MMM HH:mm')}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
              >
                {e.title}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
              >
                {e.address}
              </Section.Cell>
              <Section.Cell
                elementFont={elementFont}
                elementStyles={elementStyles}
              >
                {e.price}
              </Section.Cell>
              <Section.Button
                elementFont={elementFont}
                elementStyles={elementStyles}
              >
              Tikets
              </Section.Button>
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
  grid-template-columns : 45% 45%;
`;

Section.Button = styled(Button)`
  && {
    font-family      : ${props => props.elementFont.linksFont}, sans-serif;
    background-color : ${props => props.elementStyles.buttonsBackground};
    height           : 62px;
    color            : ${props => props.elementStyles.buttonsColor};
    border           : ${props => props.elementStyles.border}px solid;
    border-radius    : ${props => props.elementStyles.borderRadius}px;
    margin           : 0 5%;
    padding          : 1% 5%;

    &:hover {
      color      : ${props => props.elementStyles.LinksHover};
      background : transparent;
    }
  }
`;

Section.ProductName = styled.h2`
  font-family : ${props => props.elementFont.regularTextFont}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
`;

Section.ProductPrice = styled.h3`
  font-family : ${props => props.elementFont.regularTextFont}, sans-serif;
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
  font-family : ${props => props.elementFont.regularTextFont}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
  font-size   : 20px;
  width       : 220px;
  margin      : 2%;
`;

Section.ViewMoreWrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : center;
  padding         : 5%;
`;

export default Section;
