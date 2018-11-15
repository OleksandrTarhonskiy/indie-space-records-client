import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import Paper                  from '@material-ui/core/Paper';
import { graphql }            from 'react-apollo';
import { compose }            from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';
import { Link }               from 'react-router-dom';

import { allMyProductsQuery } from '../graphql/queries';

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
        <MerchMainPage.Container>
          {
            allMyProducts.length ?
              <p>you have some</p>
              :
              <MerchMainPage.MessageWrapper>
                <h2>You dont have products...</h2>
                <h3>
                But you can create them
                  <Link to="merch/create"> here</Link>
                </h3>
              </MerchMainPage.MessageWrapper>
          }
        </MerchMainPage.Container>
      </MerchMainPage.PageWrapper>
    );
  }
};

MerchMainPage.PageWrapper = styled.div`
  background : #eaedf5;
  padding    : 1% 0 1%;
`;

MerchMainPage.Container = styled(Paper)`
  margin  : 1%;
  padding : 2%;
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
