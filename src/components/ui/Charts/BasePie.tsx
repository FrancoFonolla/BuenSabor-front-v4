import { PieChart } from '@mui/x-charts/PieChart';

export default function BasePie() {
  return (
    <PieChart
        colors={['#ff7f50', '#FFA500', '#ffcc99']} 
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
