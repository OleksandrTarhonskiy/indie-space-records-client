import React from 'react';

const Section = ({
  type,
  events,
}) => {
  switch (type) {
  case 'music':
    return(<p>music here</p>);
  case 'merch':
    return(<p>merch here</p>);
  case 'events':
    return(
      events.map(e =>
        <p key={e.id}>{e.title}</p>
      )
    );
  default:
    return(<p>text here</p>);
  }
};

export default Section;
