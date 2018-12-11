import React from 'react';

const Section = ({
  type,
  events,
  products,
  content,
}) => {
  switch (type) {
  case 'music':
    return(<p>music here</p>);
  case 'merch':
    return(
      products.map(p =>
        <p key={p.id}>{p.title}</p>
      )
    );
  case 'events':
    return(
      events.map(e =>
        <p key={e.id}>{e.title}</p>
      )
    );
  default:
    return(<p>{content}</p>);
  }
};

export default Section;
