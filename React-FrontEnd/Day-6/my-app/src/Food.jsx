import React from "react";
import { useParams } from "react-router-dom";

function Food() {
  const { foodName } = useParams();

  const foodInfo = {
    briyani:
      "Many historians believe  that biryani originated from Persia and was brought to India by the Mughals. Biryani was further developed in the Mughal royal kitchen. the Mughal soldiers looked undernourished. In order to provide a balanced diet to the soldiers, she asked the chefs to prepare dish with meat and rice.",
    chicken65:
      "03/4​Why '65'? If you are wondering why the dish is called Chicken 65, it is simply because it was invented in the year 1965. Many people also say that the chicken was chopped into 65 pieces or was marinated for 65 days, that's why the dish got its unique name.",
    lollipop:
      "Chicken Lollipop, or Drums of Heaven, is a popular, spicy fried chicken recipe that is crispy on the outside and juicy, tender on the inside. These crispy fried chicken can be served as a starter, appetizer, or a side.",
  };

  const info = foodInfo[foodName];
  return (
    <div>
      <h2>{foodName}</h2>
      <p>{info}</p>
    </div>
  );
}

export default Food;
