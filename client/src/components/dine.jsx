import React from 'react';

const Dine = ({ restaurant }) => (
  <div>
    <div>{restaurant.restaurant.name}</div>
    <div>Average Price for Two People: {restaurant.restaurant.currency}{restaurant.restaurant.average_cost_for_two}</div>
    <div><a href={restaurant.restaurant.menu_url}>Menu</a></div> 
  </div>
)


 export default Dine;