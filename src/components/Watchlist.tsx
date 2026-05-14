import { Star, TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../data/mockData';

interface WatchlistProps {
  watchlist: Stock[];
  selectedStock: Stock;
  onSelectStock: (stock: Stock) => void;
  onToggleWatchlist: (stock: Stock) => void;
}

export default function Watchlist({
  watchlist,
  selectedStock,
  onSelectStock,
  onToggleWatchlist,
}: WatchlistProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur p-4">
      <h3 className="mb-4 text-lg font-semibold text-white">Watchlist</h3>

      {watchlist.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-slate-600 p-8 text-center">
          <Star className="mx-auto h-8 w-8 text-slate-600 mb-2" />
          <p className="text-sm text-slate-400">No stocks in watchlist</p>
          <p className="text-xs text-slate-500 mt-1">Star stocks to add them here</p>
        </div>
      ) : (
        <div className="space-y-2">
          {watchlist.map((stock) => (
            <div
              key={stock.symbol}
              className={`rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                selectedStock.symbol === stock.symbol
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
              }`}
              onClick={() => onSelectStock(stock)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-semibold text-white">{stock.symbol}</p>
                  <p className="text-xs text-slate-400">${stock.current.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`text-right ${
                      stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {stock.change >= 0 ? '+' : ''}
                      {stock.change.toFixed(2)}%
                    </p>
                    <div className="flex items-center justify-end gap-1 text-xs">
                      {stock.change >= 0 ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWatchlist(stock);
                    }}
                    className="rounded-lg p-1.5 transition-all text-amber-400 hover:bg-amber-500/20"
                  >
                    <Star className="h-4 w-4" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
