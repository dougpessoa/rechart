import React from 'react';
import {
  LineChart,
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
import { data } from './data';

const Chart = () => {
  return (
    <S.Wrapper>
      <ComposedChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 25, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="rgba(87, 112, 126, 0.3)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="rgba(87, 112, 126, 0.3)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#80B565" />
        <Area
          type="monotone"
          dataKey="uv"
          fill="url(#colorUv)"
          stroke="#57707E"
        />
      </ComposedChart>
    </S.Wrapper>
  );
};

export default Chart;
