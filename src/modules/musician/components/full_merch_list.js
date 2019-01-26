import React                  from 'react';
import PropTypes              from 'prop-types';
import styled                 from 'styled-components';
import breakpoint             from 'styled-components-breakpoint';
import { graphql }            from 'react-apollo';
import {
  compose,
  withHandlers,
  withState,
}                             from 'recompose';
import CircularProgress       from '@material-ui/core/CircularProgress';
import InfiniteScroll         from 'react-infinite-scroller';

import { fetchProductsQuery } from '../../merch/graphql/queries';

const FullMerchList = ({
  profile,
  data: {
    loading,
    Products = [],
    fetchMore,
  },
  loadMore,
  hasMore,
}) => (
  <React.Fragment>
    {
      loading ?
        <CircularProgress />
        :
        <FullMerchList.Wrapper
          profileFonts={JSON.parse(profile.theme.fonts)}
          profileStyles={JSON.parse(profile.theme.style)}
          sectionStyles={JSON.parse(profile.theme.sections.find((element) => element.type === 'merch').style)}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<CircularProgress key={0} />}
            useWindow={true}
          >
            <FullMerchList.List>
              {
                Products.map(product =>
                  <FullMerchList.ProductItem key={product.id}>
                    <FullMerchList.ImageWrapper background={`http://localhost:8080/${product.url}`} />
                    <p>{product.title}</p>
                    <p>{product.price} {profile.currency}</p>
                  </FullMerchList.ProductItem>
                )
              }
            </FullMerchList.List>
          </InfiniteScroll>
        </FullMerchList.Wrapper>
    }
  </React.Fragment>
);

FullMerchList.propTypes = {
  profile  : PropTypes.object.isRequired,
  data     : PropTypes.object.isRequired,
  id       : PropTypes.number.isRequired,
  loadMore : PropTypes.func.isRequired,
  hasMore  : PropTypes.bool.isRequired,
};

FullMerchList.Wrapper = styled.div`
  background-color : ${props => props.sectionStyles.background};
  color            : ${props => props.sectionStyles.color};
  padding          : 5% 8%;
  font-family      : ${props => props.profileFonts.regularTextFont}, sans-serif;
  font-size        : ${props => props.profileStyles.RegularFontSize}px;
`;

FullMerchList.List = styled.ul`
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

FullMerchList.ProductItem = styled.li`
  margin : 5%;
`;

FullMerchList.ImageWrapper = styled.div`
  width             : 100%;
  height            : 462px;
  background        : url(${props => props.background});
  background-size   : contain;
  background-repeat : no-repeat;
`;

const withRecompose = compose(
  graphql(fetchProductsQuery, {
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        profileId : props.id,
        offset    : 0,
      },
    }),
  }),
  withState('hasMore', 'setHasMore', true),
  withHandlers(
    {
      loadMore : ({ data, setHasMore }) => () => {
        data.fetchMore({
          variables : {
            offset : data.Products.length,
          },

          updateQuery : (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }

            if (fetchMoreResult.Products.length < 5) {
              setHasMore(false);
            }

            return {
              ...previousResult,
              Products: [...previousResult.Products, ...fetchMoreResult.Products],
            };
          },
        });
      }
    },
  ),
);

export default withRecompose(FullMerchList);
