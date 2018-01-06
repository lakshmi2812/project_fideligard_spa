import React from "react";

const Stocks = ({ stock }) => {
  return (
    <tr>
      <td>{stock.dataset.dataset_code}</td>
      <td>{stock.dataset.data[0][4]}</td>
      <td />
      <td />
      <td />
      <td />
    </tr>
  );
};

export default Stocks;
