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
                  <Link
                    component={Link}
                    to={`/product/${p.id}`}
                  >
                    <Section.Button
                      elementFont={elementFont}
                      elementStyles={elementStyles}
                      className="apply-font-linksFont"
                    >
                      Buy now
                    </Section.Button>
                  </Link>
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
  font-size  : 20px;
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

Section.ViewMoreWrapper = styled.div`
  display         : flex;
  flex-direction  : row;
  justify-content : center;
  padding         : 5%;
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
