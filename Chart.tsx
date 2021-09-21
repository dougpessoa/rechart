import React from 'react';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
} from 'recharts';
import * as S from './styles';
import ChartDot from './ChartDot';
import data from './data';

const Chart = () => {
  return (
    <S.Wrapper>
      <ComposedChart
        width={730}
        height={250}
        data={data.series}
        margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
      >
        {data.areas.map(({ type, gradients, areaId }) => {
          return (
            type === 'area' && (
              <defs>
                <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                  {gradients.map((gradient) => (
                    <stop
                      offset={gradient.offset}
                      stopColor={gradient.gradientColor}
                      stopOpacity={gradient.opacity}
                    />
                  ))}
                </linearGradient>
              </defs>
            )
          );
        })}

        <CartesianGrid height={1} strokeWidth={0.4} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend align="left" />
        {data.areas.map((props) => {
          return props.type === 'line' ? (
            <Line
              key={props.serie}
              type="monotone"
              dataKey={props.serie}
              stroke={props.lineColor}
              activeDot={(props) => <ChartDot isActive {...props} />}
              name={props.name}
              fill={props.dotColor}
              dot={(props) => <ChartDot {...props} />}
            />
          ) : (
            <Area
              type="monotone"
              dataKey={props.serie}
              key={props.serie}
              name={props.name}
              fill={`url(#${props.areaId})`}
              activeDot={(props) => <ChartDot isActive {...props} />}
              stroke={props.lineColor}
              dot={(props) => <ChartDot {...props} />}
            />
          );
        })}
      </ComposedChart>
    </S.Wrapper>
  );
};

export default Chart;
