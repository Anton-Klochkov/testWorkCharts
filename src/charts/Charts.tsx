import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ChartDataProps } from './Charts.interface';

export const Charts = (props: ChartDataProps) => {
  const { data } = props;
  const [state, setState] = useState<number[]>([]);
  useEffect(() => {
    let value: number[] = [];
    data.forEach((el) => {
      const calcPercent: number =
        100 -
        Math.round(
          (el.value.pending - el.value.current) / (el.value.pending / 100),
        );
      value.push(calcPercent);
    });
    setState(value);
  }, [data]);

  const series = state;
  const options = {
    chart: {
      height: 10,
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -180,
        endAngle: 90,
        track: {
          background: '#efebe7',
          startAngle: -180,
          endAngle: 90,
        },
        hollow: {
          margin: 0,
          size: '60%',
          background: 'transparent',
          image: undefined,
        },
        stroke: {
          curve: 'smooth',
        },
        dataLabels: {
          position: 'top',
          name: {
            show: false,
          },
          value: {
            fontSize: '50px',
            show: true,
          },
          offsetX: 30,
        },
      },
    },
    colors: ['#b0a9a1', '#f98404'],
    legend: {
      show: false,
      floating: true,
      fontSize: '10px',
    },
  };

  return (
    <div>
      {!!state.length && (
        <ReactApexChart
          series={series}
          options={options}
          type="radialBar"
          height={390}
        />
      )}
    </div>
  );
};
