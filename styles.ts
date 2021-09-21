import styled from 'styled-components';
import { ChartDotType } from './ChartDot';

export const Wrapper = styled.div`
  .recharts-cartesian-axis-tick-line {
    display: none;
  }
`;

type ChartDotStyleType = Pick<ChartDotType, 'isActive'>;

export const Svg = styled.svg.attrs(({ isActive }: ChartDotStyleType) => ({
  viewBox: isActive ? '0 0 20 20' : '0 0 10 10',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  width: isActive ? 20 : 10,
  height: isActive ? 20 : 10,
}))<ChartDotStyleType>``;

export const Circle = styled.circle.attrs(
  ({ isActive }: ChartDotStyleType) => ({
    cx: isActive ? 10 : 5,
    cy: isActive ? 10 : 5,
    viewBox: isActive ? '0 0 20 20' : '0 0 10 10',
    xmlns: 'http://www.w3.org/2000/svg',
  })
)<ChartDotStyleType>``;
