import { useState } from 'react';
import { TrendingUp, TrendingDown, Star, Search } from 'lucide-react';
import StockChart from '../components/StockChart';
import Watchlist from '../components/Watchlist';
import { Stock, MOCK_STOCKS } from '../data/mockData';

interface StockDashboardProps {
  onNavigateToLanding?: () => void;
}

export default function StockDashboard({ onNavigateToLanding }: StockDashboardProps) {
  const [selectedStock, setSelectedStock] = useState<Stock>(MOCK_STOCKS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState<Stock[]>([
    MOCK_STOCKS[0],
    MOCK_STOCKS[1],
  ]);

  const filteredStocks = MOCK_STOCKS.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleWatchlist = (stock: Stock) => {
    const isInWatchlist = watchlist.some((s) => s.symbol === stock.symbol);
    if (isInWatchlist) {
      setWatchlist(watchlist.filter((s) => s.symbol !== stock.symbol));
    } else {
      setWatchlist([...watchlist, stock]);
    }
  };

  const isInWatchlist = watchlist.some((s) => s.symbol === selectedStock.symbol);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-2">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Stock Dashboard</h1>
                <p className="text-sm text-slate-400">Real-time market analysis</p>
              </div>
            </div>
            {onNavigateToLanding && (
              <button
                onClick={onNavigateToLanding}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
              >
                View Landing Page
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stock Info Card */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedStock.symbol}</h2>
                  <p className="text-slate-400">{selectedStock.company}</p>
                  <div className="mt-4 flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-white">
                      ${selectedStock.current.toFixed(2)}
                    </span>
                    <div
                      className={`flex items-center gap-1 rounded-lg px-3 py-1 ${
                        selectedStock.change >= 0
                          ? 'bg-emerald-900/30 text-emerald-400'
                          : 'bg-red-900/30 text-red-400'
                      }`}
                    >
                      {selectedStock.change >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="font-semibold">
                        {Math.abs(selectedStock.change).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleWatchlist(selectedStock)}
                  className={`rounded-lg p-3 transition-all ${
                    isInWatchlist
                      ? 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'
                      : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                  }`}
                >
                  <Star
                    className="h-6 w-6"
                    fill={isInWatchlist ? 'currentColor' : 'none'}
                  />
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-6">
              <StockChart stock={selectedStock} />
            </div>

            {/* Stock Statistics */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
                <p className="text-sm text-slate-400">52W High</p>
                <p className="text-xl font-bold text-white">
                  ${selectedStock.high52w.toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
                <p className="text-sm text-slate-400">52W Low</p>
                <p className="text-xl font-bold text-white">
                  ${selectedStock.low52w.toFixed(2)}
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
                <p className="text-sm text-slate-400">Market Cap</p>
                <p className="text-xl font-bold text-white">{selectedStock.marketCap}</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
                <p className="text-sm text-slate-400">Volume</p>
                <p className="text-xl font-bold text-white">
                  {(selectedStock.volume / 1e6).toFixed(1)}M
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-2 pl-10 pr-4 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Available Stocks */}
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
              <h3 className="mb-4 text-lg font-semibold text-white">Available Stocks</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredStocks.map((stock) => (
                  <button
                    key={stock.symbol}
                    onClick={() => setSelectedStock(stock)}
                    className={`w-full rounded-lg border px-3 py-2 text-left transition-all ${
                      selectedStock.symbol === stock.symbol
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                        : 'border-slate-600 bg-slate-700/30 text-slate-300 hover:border-slate-500 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{stock.symbol}</p>
                        <p className="text-xs text-slate-400">{stock.company}</p>
                      </div>
                      <div
                        className={`text-sm font-semibold ${
                          stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {stock.change >= 0 ? '+' : ''}
                        {stock.change.toFixed(2)}%
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Watchlist */}
            <Watchlist
              watchlist={watchlist}
              selectedStock={selectedStock}
              onSelectStock={setSelectedStock}
              onToggleWatchlist={toggleWatchlist}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
