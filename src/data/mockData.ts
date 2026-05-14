export interface CandleData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Stock {
  symbol: string;
  company: string;
  current: number;
  change: number;
  high52w: number;
  low52w: number;
  marketCap: string;
  volume: number;
  candles: CandleData[];
}

// Generate mock candlestick data
function generateCandleData(basePrice: number, days: number = 60): CandleData[] {
  const data: CandleData[] = [];
  let currentPrice = basePrice;

  for (let i = days; i >= 0; i--) {
    const timestamp = Date.now() - i * 24 * 60 * 60 * 1000;
    const open = currentPrice;

    currentPrice = currentPrice * (1 + (Math.random() - 0.5) * 0.03);

    const high = Math.max(open, currentPrice) * (1 + Math.random() * 0.02);
    const low = Math.min(open, currentPrice) * (1 - Math.random() * 0.02);
    const close = low + Math.random() * (high - low);

    data.push({
      timestamp,
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 5000000 + 1000000),
    });
  }

  return data;
}

export const MOCK_STOCKS: Stock[] = [
  {
    symbol: 'AAPL',
    company: 'Apple Inc.',
    current: 182.45,
    change: 2.85,
    high52w: 199.62,
    low52w: 124.17,
    marketCap: '2.8T',
    volume: 52_300_000,
    candles: generateCandleData(182.45),
  },
  {
    symbol: 'MSFT',
    company: 'Microsoft Corporation',
    current: 378.91,
    change: 1.92,
    high52w: 416.68,
    low52w: 277.08,
    marketCap: '2.8T',
    volume: 18_700_000,
    candles: generateCandleData(378.91),
  },
  {
    symbol: 'GOOGL',
    company: 'Alphabet Inc.',
    current: 139.67,
    change: 3.45,
    high52w: 191.02,
    low52w: 102.21,
    marketCap: '1.8T',
    volume: 21_400_000,
    candles: generateCandleData(139.67),
  },
  {
    symbol: 'AMZN',
    company: 'Amazon.com Inc.',
    current: 192.85,
    change: -1.23,
    high52w: 188.65,
    low52w: 101.26,
    marketCap: '2.0T',
    volume: 45_600_000,
    candles: generateCandleData(192.85),
  },
  {
    symbol: 'NVDA',
    company: 'NVIDIA Corporation',
    current: 875.43,
    change: 5.67,
    high52w: 1_052.64,
    low52w: 345.01,
    marketCap: '2.1T',
    volume: 32_800_000,
    candles: generateCandleData(875.43),
  },
  {
    symbol: 'TSLA',
    company: 'Tesla Inc.',
    current: 238.56,
    change: -2.34,
    high52w: 299.29,
    low52w: 138.80,
    marketCap: '750B',
    volume: 128_400_000,
    candles: generateCandleData(238.56),
  },
  {
    symbol: 'META',
    company: 'Meta Platforms Inc.',
    current: 412.78,
    change: 4.12,
    high52w: 501.13,
    low52w: 233.47,
    marketCap: '1.3T',
    volume: 15_200_000,
    candles: generateCandleData(412.78),
  },
  {
    symbol: 'NFLX',
    company: 'Netflix Inc.',
    current: 276.45,
    change: 3.89,
    high52w: 323.12,
    low52w: 141.82,
    marketCap: '120B',
    volume: 2_100_000,
    candles: generateCandleData(276.45),
  },
  {
    symbol: 'UBER',
    company: 'Uber Technologies Inc.',
    current: 72.34,
    change: 1.56,
    high52w: 82.47,
    low52w: 28.51,
    marketCap: '155B',
    volume: 31_200_000,
    candles: generateCandleData(72.34),
  },
  {
    symbol: 'AMD',
    company: 'Advanced Micro Devices',
    current: 198.67,
    change: 2.43,
    high52w: 238.40,
    low52w: 92.48,
    marketCap: '322B',
    volume: 42_800_000,
    candles: generateCandleData(198.67),
  },
];
