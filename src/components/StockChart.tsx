import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Stock, CandleData } from '../data/mockData';

interface StockChartProps {
  stock: Stock;
}

interface ChartData extends CandleData {
  name: string;
  ma20?: number | null;
  ema12?: number | null;
}

// Calculate moving averages
function calculateMovingAverages(data: CandleData[], period: number) {
  return data.map((item: CandleData, index: number) => {
    if (index < period - 1) {
      return { ...item, ma: null };
    }

    const slice = data.slice(index - period + 1, index + 1);
    const average = slice.reduce((sum: number, d: CandleData) => sum + d.close, 0) / period;

    return { ...item, ma: average };
  });
}

function calculateEMA(data: CandleData[], period: number) {
  const k = 2 / (period + 1);
  let ema: number | null = null;

  return data.map((item: CandleData, index: number) => {
    if (index < period - 1) {
      return { ...item, ema: null };
    }

    if (ema === null) {
      // First EMA is SMA
      const slice = data.slice(0, period);
      ema = slice.reduce((sum: number, d: CandleData) => sum + d.close, 0) / period;
    } else {
      ema = item.close * k + (ema as number) * (1 - k);
    }

    return { ...item, ema };
  });
}

export default function StockChart({ stock }: StockChartProps) {
  // Prepare data with moving averages
  let chartData: ChartData[] = stock.candles.map((candle) => ({
    ...candle,
    name: new Date(candle.timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
  }));

  // Calculate different moving averages
  const withMA20 = calculateMovingAverages(stock.candles, 20);
  const withEMA12 = calculateEMA(stock.candles, 12);

  // Merge all data
  chartData = stock.candles.map((candle, index) => ({
    ...candle,
    name: new Date(candle.timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    ma20: (withMA20[index] as any).ma,
    ema12: (withEMA12[index] as any).ema,
  }));

  // Custom Tooltip
  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0]?.payload;
      if (!data) return null;
      
      return (
        <div className="rounded-lg border border-slate-600 bg-slate-900 p-3 shadow-lg">
          <p className="text-sm text-slate-300">{data.name}</p>
          <div className="mt-2 space-y-1 text-sm">
            <p className="text-slate-400">
              O: <span className="text-white">${data.open.toFixed(2)}</span>
            </p>
            <p className="text-slate-400">
              H: <span className="text-white">${data.high.toFixed(2)}</span>
            </p>
            <p className="text-slate-400">
              L: <span className="text-white">${data.low.toFixed(2)}</span>
            </p>
            <p className="text-slate-400">
              C: <span className="text-white">${data.close.toFixed(2)}</span>
            </p>
            {data.ma20 && (
              <p className="text-slate-400">
                MA20: <span className="text-blue-400">${data.ma20.toFixed(2)}</span>
              </p>
            )}
            {data.ema12 && (
              <p className="text-slate-400">
                EMA12: <span className="text-purple-400">${data.ema12.toFixed(2)}</span>
              </p>
            )}
            <p className="text-slate-400">
              Vol: <span className="text-white">{(data.volume / 1e6).toFixed(1)}M</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-4 bg-emerald-500 rounded" />
          <span className="text-slate-400">Close</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-4 bg-slate-400 rounded" />
          <span className="text-slate-400">Volume</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-4 bg-blue-500 rounded" />
          <span className="text-slate-400">MA20</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-4 bg-purple-500 rounded" />
          <span className="text-slate-400">EMA12</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis
            dataKey="name"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            interval={Math.floor(chartData.length / 12)}
          />
          <YAxis
            yAxisId="left"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }}
            domain={['dataMin - 10', 'dataMax + 10']}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            label={{ value: 'Volume', angle: 90, position: 'insideRight' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px', color: '#e2e8f0' }}
          />

          {/* Volume bars */}
          <Bar
            yAxisId="right"
            dataKey="volume"
            fill="#64748b"
            fillOpacity={0.3}
            name="Volume"
            radius={[2, 2, 0, 0]}
          />

          {/* Close price line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="close"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            name="Close"
            isAnimationActive={false}
          />

          {/* Moving Average 20 */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ma20"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            name="MA20"
            strokeDasharray="5 5"
            isAnimationActive={false}
          />

          {/* EMA 12 */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="ema12"
            stroke="#a855f7"
            strokeWidth={2}
            dot={false}
            name="EMA12"
            strokeDasharray="3 3"
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
