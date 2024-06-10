import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Stack, Typography } from "@mui/material";

const Piechart = ({ data = [], title }) => {
  const formattedData = data.map((item, index) => ({
    id: index,
    value: item.value,
    label: item.name,
  }));

  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>{title}</Typography>
        <PieChart
          series={[
            {
              data: formattedData,
            },
          ]}
          width={400}
          height={200}
        />
      </Box>
    </Stack>
  );
};

export default Piechart;
