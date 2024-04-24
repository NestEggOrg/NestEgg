import React from 'react';

const LegendItem = ({ category, spend, budget, color }) => {

  const colorVar = color.replace(/['"]+/g, '');
  return (
    <div
      className={`flex justify-between shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-1 ml-1 mr-1`}
      style={{backgroundColor: colorVar}}
    >
      <div>{category}</div>
      <div>
        ${spend} / ${budget}
      </div>
    </div>
  );
};

export default LegendItem;
