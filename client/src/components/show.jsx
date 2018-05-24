import React from 'react';

const Show = ({ concert }) => (
  <div>
   <div>{concert.Artists[0].Name}</div>
   <div>Playing at {concert.Venue.Name}</div>
   <div>{concert.Venue.Address}</div>
   <div><a href={concert.Venue.Url}>Venue</a></div>
  </div>
)

export default Show;