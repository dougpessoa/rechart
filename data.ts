// travel - 2068 - 10:56 in 29 apr 2021

export default {
  type: 'prices',
  title: 'Variações de preços',
  label: '',
  areas: [
    {
      name: 'Atual',
      lineColor: '#57707E',
      dotColor: '#FFFFFF',
      serie: 'actual_prices',
      gradients: undefined,
      type: 'line',
      areaId: undefined,
    },
    {
      name: 'Referência',
      lineColor: '#80B565',
      dotColor: '#FFFFFF',
      serie: 'reference_prices',
      type: 'area',
      areaId: 'bee1d6bf-1942-4a76-a0a8-8e767c2c8e4d',
      gradients: [
        {
          offset: '0%',
          opacity: 1,
          gradientColor: 'rgba(87, 112, 126, 0.8)',
        },
        {
          offset: '75.83%',
          opacity: 0,
          gradientColor: 'rgba(87, 112, 126, 0.3)',
        },
      ],
    },
  ],
  series: [
    {
      name: '01/03 15:00',
      actual_prices: 12,
      reference_prices: 3,
      highlight: true,
    },
    {
      name: '01/03 16:00',
      actual_prices: 23,
      reference_prices: 70,
      highlight: false,
    },
    {
      name: '01/03 17:00',
      actual_prices: 90,
      reference_prices: 4,
      highlight: false,
    },
    {
      name: '01/03 18:00',
      actual_prices: 40.13,
      reference_prices: 80,
      highlight: true,
    },
  ],
};
