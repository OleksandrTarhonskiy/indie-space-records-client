import React            from 'react';
import styled           from 'styled-components';
import { gql, graphql } from 'react-apollo';

const Profile = ({ data: { allProfiles = []} }) => (
  <div>
    {allProfiles.map(profile =>
      <Profile.Body key={profile.id} a={JSON.parse(profile.theme.style)}>
        <Profile.Header>
          <Profile.Headline a={JSON.parse(profile.theme.style)}>
            {profile.name}
          </Profile.Headline>
        </Profile.Header>
        <Profile.Members a={JSON.parse(profile.theme.style)}>
          <Profile.SubHeadline a={JSON.parse(profile.theme.style)}>
            Section#1
          </Profile.SubHeadline>
          <Profile.Text a={JSON.parse(profile.theme.style)}>
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
        <Profile.Music a={JSON.parse(profile.theme.style)}>
          <Profile.Text a={JSON.parse(profile.theme.style)}>
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
        <Profile.Merch a={JSON.parse(profile.theme.style)}>
          <Profile.Text a={JSON.parse(profile.theme.style)}>
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
  color            : ${props => props.a.color};
  background-color : ${props => props.a.backgroundColor};
`;

Profile.Members = styled.div`
  min-height : 400px;
  background : ${props => props.a.firstSection};
  padding    : 2%;
`;

Profile.Merch = styled.div`
  min-height : 400px;
  background : ${props => props.a.thirdSection};
  padding    : 2%;
`;

Profile.Header = styled.div`
  min-height       : 400px;
  background-color : #17171a;
  padding          : 10%;
`;

Profile.Music = styled.div`
  min-height : 400px;
  background : ${props => props.a.secondSection};
  padding    : 2%;
`;

Profile.SubHeadline = styled.h2`
  font-size : ${props => props.a.h2FontSize}px;
`;

Profile.Text = styled.p`
  font-size : ${props => props.a.RegularFontSize}px;
`;

Profile.BioSection = styled.div`
  min-height : 500px;
  padding    : 10%;
`;

Profile.Headline = styled.h1`
  font-size : ${props => props.a.h1FontSize}px;
`;

const allProfilesQuery = gql`
  {
    allProfiles{
      id
      name
      genres
      theme {
        style
      }
    }
  }
`;
export default graphql(allProfilesQuery)(Profile);
