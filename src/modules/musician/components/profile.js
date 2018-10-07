import React            from 'react';
import styled           from 'styled-components';
import { gql, graphql } from 'react-apollo';

const Profile = ({ data: { allProfiles = []} }) => (
  <div>
    {allProfiles.map(profile =>
      <Profile.Body
        key={profile.id}
        elemetStyles={JSON.parse(profile.theme.style)}
      >
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).headlineFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).regularTextFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).LinksFont}`} rel="stylesheet" />
        <link href={`https://fonts.googleapis.com/css?family=${JSON.parse(profile.theme.fonts).subHead}`} rel="stylesheet" />
        <Profile.Navigation elemetStyles={JSON.parse(profile.theme.style)}>
          <Profile.NavItems elemetStyles={JSON.parse(profile.theme.style)}>
            <Profile.NavItem elemetStyles={JSON.parse(profile.theme.style)}>
              <Profile.Link
                href=""
                elemetStyles={JSON.parse(profile.theme.style)}
                elemetFont={JSON.parse(profile.theme.fonts)}
                className="apply-font-LinksFont"
              >
                Music
              </Profile.Link>
            </Profile.NavItem>
            <Profile.NavItem>
              <Profile.Link
                href=""
                elemetStyles={JSON.parse(profile.theme.style)}
                elemetFont={JSON.parse(profile.theme.fonts)}
                className="apply-font-LinksFont"
              >
              Merch
              </Profile.Link>
            </Profile.NavItem>
            <Profile.NavItem>
              <Profile.Link
                href=""
                elemetStyles={JSON.parse(profile.theme.style)}
                elemetFont={JSON.parse(profile.theme.fonts)}
                className="apply-font-LinksFont"
              >
                About
              </Profile.Link>
            </Profile.NavItem>
          </Profile.NavItems>
        </Profile.Navigation>
        <Profile.Header>
          <Profile.Headline
            elemetFont={JSON.parse(profile.theme.fonts)}
            className="apply-font-headlineFont"
            elemetStyles={JSON.parse(profile.theme.style)}
          >
            {profile.name}
          </Profile.Headline>
        </Profile.Header>
        <Profile.Members elemetStyles={JSON.parse(profile.theme.style)}>
          <Profile.SubHeadline
            elemetStyles={JSON.parse(profile.theme.style)}
            elemetFont={JSON.parse(profile.theme.fonts)}
            className="apply-font-subHead"
          >
            Section#1
          </Profile.SubHeadline>
          <Profile.Text
            elemetStyles={JSON.parse(profile.theme.style)}
            elemetFont={JSON.parse(profile.theme.fonts)}
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
        <Profile.Music elemetStyles={JSON.parse(profile.theme.style)}>
          <Profile.Text
            elemetStyles={JSON.parse(profile.theme.style)}
            elemetFont={JSON.parse(profile.theme.fonts)}
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
        <Profile.Merch elemetStyles={JSON.parse(profile.theme.style)}>
          <Profile.Text
            elemetStyles={JSON.parse(profile.theme.style)}
            elemetFont={JSON.parse(profile.theme.fonts)}
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
    )}
  </div>
);

Profile.Body = styled.div`
  color            : ${props => props.elemetStyles.color};
  background-color : ${props => props.elemetStyles.backgroundColor};
  position         : relative;
`;

Profile.Navigation = styled.div`
  position   : absolute;
  width      : 100%;
  text-align : ${props => props.elemetStyles.MenuLinksPosition};;
`;

Profile.NavItems = styled.ul`
  margin  : 0;
  padding : 0;
`;

Profile.Link = styled.a`
  && {
    color           : ${props => props.elemetStyles.LinksColor};
    text-decoration : none;
    font-family     : ${props => `${props.elemetFont.LinksFont}`}, sans-serif;
    font-weight     : 600;

    &:hover {
      color : ${props => props.elemetStyles.LinksHover};
    }
  }
`;

Profile.NavItem = styled.li`
  display : inline-block;
  padding : 2%;
`;

Profile.Members = styled.div`
  min-height : 400px;
  background : ${props => props.elemetStyles.firstSection};
  padding    : 2%;
`;

Profile.Merch = styled.div`
  min-height : 400px;
  background : ${props => props.elemetStyles.thirdSection};
  padding    : 2%;
`;

Profile.Header = styled.div`
  min-height       : 400px;
  background-color : #17171a;
  padding          : 10%;
`;

Profile.Music = styled.div`
  min-height : 400px;
  background : ${props => props.elemetStyles.secondSection};
  padding    : 2%;
`;

Profile.SubHeadline = styled.h2`
  font-family : ${props => `${props.elemetFont.subHead}`}, sans-serif;
  font-size   : ${props => props.elemetStyles.h2FontSize}px;
`;

Profile.Text = styled.p`
  font-family : ${props => `${props.elemetFont.regularTextFont}`}, sans-serif;
  font-size   : ${props => props.elemetStyles.RegularFontSize}px;
`;

Profile.BioSection = styled.div`
  min-height : 500px;
  padding    : 10%;
`;

Profile.Headline = styled.h1`
  font-family : ${props => `${props.elemetFont.headlineFont}`}, sans-serif;
  font-size   : ${props => props.elemetStyles.h1FontSize}px;
`;

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      theme {
        style
        fonts
      }
    }
  }
`;
export default graphql(allProfilesQuery)(Profile);
