import React from 'react';
import { Users, Shield, Settings, CreditCard, Calendar, User, TrendingUp, MapPin, Activity, DollarSign } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatCard, Booking } from '../types';

const Dashboard: React.FC = () => {
  const stats: StatCard[] = [
    { icon: Users, label: 'Total Users', value: '2,847', color: 'from-blue-500 to-blue-600', change: '+12%' },
    { icon: Shield, label: 'Active Providers', value: '1,234', color: 'from-emerald-500 to-emerald-600', change: '+8%' },
    { icon: Settings, label: 'Total Services', value: '5,678', color: 'from-purple-500 to-purple-600', change: '+15%' },
    { icon: CreditCard, label: 'Revenue', value: '₹8,45,230', color: 'from-orange-500 to-orange-600', change: '+23%' }
  ];

  const recentBookings: Booking[] = [
    { id: 1, name: 'MOKILA SHANKER YADHAV', date: '05 Aug 2024', services: 'Cleaning', status: 'Pending', avatar: '👤' },
    { id: 2, name: 'Surla Raju', date: '05 Aug 2024', services: 'Plumbing', status: 'Completed', avatar: '👤' },
    { id: 3, name: 'INDRA RAM', date: '03 Aug 2024', services: 'Electrical', status: 'Cancelled', avatar: '👤' },
    { id: 4, name: 'Pujari Chandan', date: '02 Aug 2024', services: 'Carpentry', status: 'Pending', avatar: '👤' },
    { id: 5, name: 'JAMES GANDHALA', date: '10 Jul 2024', services: 'Painting', status: 'Completed', avatar: '👤' }
  ];

  const chartData = [
    { name: 'Jan', users: 400, revenue: 2400, services: 240 },
    { name: 'Feb', users: 300, revenue: 1398, services: 221 },
    { name: 'Mar', users: 200, revenue: 9800, services: 229 },
    { name: 'Apr', users: 278, revenue: 3908, services: 200 },
    { name: 'May', users: 189, revenue: 4800, services: 218 },
    { name: 'Jun', users: 239, revenue: 3800, services: 250 },
    { name: 'Jul', users: 349, revenue: 4300, services: 210 }
  ];

  const pieData = [
    { name: 'Cleaning', value: 35, color: '#3B82F6' },
    { name: 'Plumbing', value: 25, color: '#10B981' },
    { name: 'Electrical', value: 20, color: '#8B5CF6' },
    { name: 'Carpentry', value: 15, color: '#F59E0B' },
    { name: 'Others', value: 5, color: '#EF4444' }
  ];

  const StatCardComponent: React.FC<StatCard & { change?: string }> = ({ icon: Icon, label, value, color, change }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-slate-600 text-sm font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-slate-800 mb-2">{value}</p>
          {change && (
            <div className="flex items-center space-x-1">
              <TrendingUp size={14} className="text-emerald-500" />
              <span className="text-emerald-500 text-sm font-medium">{change}</span>
              <span className="text-slate-500 text-sm">vs last month</span>
            </div>
          )}
        </div>
        <div className={`bg-gradient-to-r ${color} p-4 rounded-xl shadow-lg`}>
          <Icon size={28} className="text-white" />
        </div>
      </div>
    </div>
  );

  const getStatusBadge = (status: string): string => {
    const styles: Record<string, string> = {
      'Pending': 'bg-amber-100 text-amber-800 border border-amber-200',
      'Cancelled': 'bg-red-100 text-red-800 border border-red-200',
      'Completed': 'bg-emerald-100 text-emerald-800 border border-emerald-200'
    };
    return styles[status] || styles['Pending'];
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
          Welcome Back, Admin! 👋
        </h1>
        <p className="text-slate-600 text-lg">Here's what's happening with your platform today.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCardComponent key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Revenue Overview</h3>
            <div className="flex items-center space-x-2">
              <DollarSign size={20} className="text-emerald-500" />
              <span className="text-emerald-500 font-medium">+23% this month</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" stroke="#64748B" />
              <YAxis stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Service Distribution</h3>
            <Activity size={20} className="text-purple-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* User Growth Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">User Growth & Services</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Services</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="name" stroke="#64748B" />
            <YAxis stroke="#64748B" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E2E8F0', 
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }} 
            />
            <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }} />
            <Line type="monotone" dataKey="services" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">Recent Bookings</h2>
            <Calendar size={20} className="text-blue-500" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-2 font-semibold text-slate-600">Customer</th>
                  <th className="text-left py-3 px-2 font-semibold text-slate-600">Date</th>
                  <th className="text-left py-3 px-2 font-semibold text-slate-600">Service</th>
                  <th className="text-left py-3 px-2 font-semibold text-slate-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <User size={16} className="text-white" />
                        </div>
                        <span className="font-medium text-slate-800">{booking.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-slate-600">{booking.date}</td>
                    <td className="py-4 px-2 text-slate-600">{booking.services}</td>
                    <td className="py-4 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-800">Quick Stats</h3>
            <MapPin size={20} className="text-emerald-500" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Active Providers</p>
                  <p className="text-2xl font-bold text-blue-800">1,234</p>
                </div>
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Shield size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium">Completed Today</p>
                  <p className="text-2xl font-bold text-emerald-800">89</p>
                </div>
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <Activity size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Avg Rating</p>
                  <p className="text-2xl font-bold text-purple-800">4.8</p>
                </div>
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Users size={20} className="text-white" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 text-sm font-medium">Coverage Areas</p>
                  <p className="text-2xl font-bold text-orange-800">25</p>
                </div>
                <div className="bg-orange-500 p-2 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;