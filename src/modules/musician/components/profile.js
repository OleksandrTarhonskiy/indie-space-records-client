import React                       from 'react';
import PropTypes                   from 'prop-types';
import styled                      from 'styled-components';
import { Helmet }                  from 'react-helmet';

const Profile = ({ myProfile }) => (
  <div>
    <Profile.Body
      key={myProfile.id}
      elementStyles={JSON.parse(myProfile.theme.style)}
    >
      <Helmet>
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(myProfile.theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(myProfile.theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(myProfile.theme.fonts).linksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(myProfile.theme.fonts).subHead}`} rel="stylesheet" />
      </Helmet>
      <Profile.Navigation elementStyles={JSON.parse(myProfile.theme.style)}>
        <Profile.NavItems elementStyles={JSON.parse(myProfile.theme.style)}>
          <Profile.NavItem elementStyles={JSON.parse(myProfile.theme.style)}>
            <Profile.Link
              href=""
              elementStyles={JSON.parse(myProfile.theme.style)}
              elementFont={JSON.parse(myProfile.theme.fonts)}
              className="apply-font-linksFont"
            >
            Music
            </Profile.Link>
          </Profile.NavItem>
          <Profile.NavItem>
            <Profile.Link
              href=""
              elementStyles={JSON.parse(myProfile.theme.style)}
              elementFont={JSON.parse(myProfile.theme.fonts)}
              className="apply-font-linksFont"
            >
            Merch
            </Profile.Link>
          </Profile.NavItem>
          <Profile.NavItem>
            <Profile.Link
              href=""
              elementStyles={JSON.parse(myProfile.theme.style)}
              elementFont={JSON.parse(myProfile.theme.fonts)}
              className="apply-font-linksFont"
            >
            About
            </Profile.Link>
          </Profile.NavItem>
        </Profile.NavItems>
      </Profile.Navigation>
      <Profile.Header>
        <Profile.Headline
          elementStyles={JSON.parse(myProfile.theme.style)}
          elementFont={JSON.parse(myProfile.theme.fonts)}
          className="apply-font-headlineFont"
        >
          {myProfile.name}
        </Profile.Headline>
      </Profile.Header>
      <Profile.Members elementStyles={JSON.parse(myProfile.theme.style)}>
        <Profile.SubHeadline
          elementStyles={JSON.parse(myProfile.theme.style)}
          elementFont={JSON.parse(myProfile.theme.fonts)}
          className="apply-font-subHead"
        >
        Section#1
        </Profile.SubHeadline>
        <Profile.Text
          elementStyles={JSON.parse(myProfile.theme.style)}
          elementFont={JSON.parse(myProfile.theme.fonts)}
          className="apply-font-regularTextFont"
        >
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
        </Profile.Text>
      </Profile.Members>
      <Profile.Music elementStyles={JSON.parse(myProfile.theme.style)}>
        <Profile.Text
          elementStyles={JSON.parse(myProfile.theme.style)}
          elementFont={JSON.parse(myProfile.theme.fonts)}
          className="apply-font-regularTextFont"
        >
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
        </Profile.Text>
      </Profile.Music>
      <Profile.Merch elementStyles={JSON.parse(myProfile.theme.style)}>
        <Profile.Text
          elementStyles={JSON.parse(myProfile.theme.style)}
          elementFont={JSON.parse(myProfile.theme.fonts)}
          className="apply-font-regularTextFont"
        >
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
        </Profile.Text>
      </Profile.Merch>
    </Profile.Body>
  </div>
);

Profile.Body = styled.div`
  color            : ${props => props.elementStyles.color};
  background-color : ${props => props.elementStyles.backgroundColor};
  position         : relative;
`;

Profile.Navigation = styled.div`
  position   : absolute;
  width      : 100%;
  text-align : ${props => props.elementStyles.MenuLinksPosition};;
`;

Profile.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

Profile.Link = styled.a`
  && {
    color           : ${props => props.elementStyles.LinksColor};
    text-decoration : none;
    font-family     : ${props => `${props.elementFont.linksFont}`}, sans-serif;
    font-weight     : 600;
    outline         : none;

    &:hover {
      color : ${props => props.elementStyles.LinksHover};
    }
  }
`;

Profile.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

Profile.Members = styled.div`
  min-height : 400px;
  background : ${props => props.elementStyles.firstSection};
  padding    : 2%;
`;

Profile.Merch = styled.div`
  min-height : 400px;
  background : ${props => props.elementStyles.thirdSection};
  padding    : 2%;
`;

Profile.Header = styled.div`
  min-height       : 400px;
  background-color : #17171a;
  padding          : 10%;
`;

Profile.Music = styled.div`
  min-height : 400px;
  background : ${props => props.elementStyles.secondSection};
  padding    : 2%;
`;

Profile.SubHeadline = styled.h2`
  font-family : ${props => `${props.elementFont.subHead}`}, sans-serif;
  font-size   : ${props => props.elementStyles.h2FontSize}px;
`;

Profile.Text = styled.p`
  font-family : ${props => `${props.elementFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.RegularFontSize}px;
`;

Profile.BioSection = styled.div`
  min-height : 500px;
  padding    : 10%;
`;

Profile.Headline = styled.h1`
  font-family : ${props => `${props.elementFont.headlineFont}`}, sans-serif;
  font-size   : ${props => props.elementStyles.h1FontSize}px;
`;

Profile.propTypes = {
  data : PropTypes.object.isRequired,
};

export default Profile;
