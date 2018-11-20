import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import breakpoint             from 'styled-components-breakpoint';
import { graphql }            from 'react-apollo';
import { compose }            from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';

import { allMyProductsQuery } from '../graphql/queries';
import MerchHomePage          from './merch_home_page';
import NavTabs                from '../components/nav_tabs';

const MerchMainPage = ({
  data: {
    loading,
    allMyProducts = [],
  }
}) => {
  if (loading) {
    return (<CircularProgress />);
  } else {
    return (
      <MerchMainPage.PageWrapper>
        <MerchMainPage.Header>
          <NavTabs />
        </MerchMainPage.Header>
        <MerchHomePage products={allMyProducts} />
      </MerchMainPage.PageWrapper>
    );
  }
};

MerchMainPage.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 0 0 1%;
`;

MerchMainPage.Header = styled.div`
  display         : flex;
  flex-direction  : column;
  width           : 100%;
  background      : #ffff;
  justify-content : center;
  box-shadow      : 0px 3px 5px -1px rgba(0, 0, 0, 0.2);

  ${breakpoint('md')`
    flex-direction: row;
  `}
`;

MerchMainPage.MessageWrapper = styled.div`
  font-family     : 'Roboto', sans-serif;
  color           : #374142;
  display         : flex;
  flex-direction  : column;
  justify-content : center;
  padding         : 14%;
  font-size       : 25px;
`;

MerchMainPage.propTypes = {
  data : PropTypes.object.isRequired,
};

const withRecompose = compose(
  graphql(allMyProductsQuery),
);

export default withRecompose(MerchMainPage);
