import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const Piechart = ({ data = [], title }) => {
  const formattedData = data.map((item, index) => ({
    id: index,
    value: item.value,
    label: item.name,
  }));

  return (
    <div className="pie-chart">
      <h3>{title}</h3>
      <PieChart
        series={[
          {
            data: formattedData,
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};

export default Piechart;
