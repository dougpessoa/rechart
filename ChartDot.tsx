/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useState } from 'react';
import * as S from './styles';
import { DotProps } from 'recharts';

export type ChartDotType = {
  payload: {
    highlight: boolean;
  };
  stroke?: string;
  fill?: string;
  isActive?: boolean;
} & DotProps;

const ChartDot = ({
  cx,
  cy,
  stroke,
  payload,
  fill,
  isActive = false,
}: ChartDotType) => {
  const [highlight] = useState(payload.highlight);
  const [white] = useState('white');
  const [red] = useState('red');

  return (
    <S.Svg
      isActive={isActive}
      x={Number(cx) - (isActive ? 10 : 5)}
      y={Number(cy) - (isActive ? 10 : 5)}
    >
      <S.Circle
        isActive={isActive}
        fill={isActive ? (highlight ? red : fill) : highlight ? red : white}
        r={isActive ? 8 : highlight ? 4.25 : 3}
        stroke={isActive ? stroke : highlight ? white : stroke}
        strokeWidth={highlight ? 1.5 : 1}
      />
    </S.Svg>
  );
};

export default ChartDot;
