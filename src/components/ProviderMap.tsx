import React, { useState } from 'react';
import { MapPin, AlertCircle, RefreshCw, Users, Activity, TrendingUp } from 'lucide-react';

const ProviderMap: React.FC = () => {
  const [mapError, setMapError] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setMapError(false);
    setTimeout(() => {
      setIsLoading(false);
      setMapError(true);
    }, 2000);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Provider Map
          </h1>
          <p className="text-slate-600 mt-1">Track and manage provider locations</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
                <p className="text-slate-600 font-medium">Loading map...</p>
              </div>
            ) : mapError ? (
              <div className="text-center">
                <AlertCircle size={64} className="text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  Sorry! Something went wrong.
                </h3>
                <p className="text-sm text-slate-500 mb-6 max-w-md">
                  This page didn't load Google Maps correctly. See the JavaScript console for technical details.
                </p>
                <button
                  onClick={handleRefresh}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl mx-auto font-semibold"
                >
                  <RefreshCw size={16} />
                  <span>Retry</span>
                </button>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
                <p className="text-emerald-700 font-semibold text-lg">Map loaded successfully!</p>
              </div>
            )}
          </div>

          {/* Map Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium">
                <MapPin size={16} />
                <span>Show All Providers</span>
              </button>
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium">
                <MapPin size={16} />
                <span>Filter by Location</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-600 font-medium">Total Providers:</span>
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-200">
                87
              </span>
            </div>
          </div>
        </div>

        {/* Provider Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Active Providers</p>
                <p className="text-3xl font-bold text-emerald-600 mb-2">74</p>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={14} className="text-emerald-500" />
                  <span className="text-emerald-500 text-sm font-medium">+8%</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-xl shadow-lg">
                <Users size={28} className="text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Inactive Providers</p>
                <p className="text-3xl font-bold text-red-600 mb-2">13</p>
                <div className="flex items-center space-x-1">
                  <Activity size={14} className="text-red-500" />
                  <span className="text-red-500 text-sm font-medium">-2%</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-xl shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-semibold mb-1">Coverage Areas</p>
                <p className="text-3xl font-bold text-blue-600 mb-2">25</p>
                <div className="flex items-center space-x-1">
                  <TrendingUp size={14} className="text-blue-500" />
                  <span className="text-blue-500 text-sm font-medium">+12%</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderMap;