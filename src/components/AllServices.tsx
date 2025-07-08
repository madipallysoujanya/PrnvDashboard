import React, { useState } from 'react';
import { RefreshCw, Filter, Plus, Edit, Eye, Trash2, Search } from 'lucide-react';
import { Service } from '../types';

const AllServices: React.FC = () => {
  const [autoApproval, setAutoApproval] = useState<boolean>(true);
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: 'Hardware Services',
      category: 'Computer/Laptop Repair & Services',
      subCategory: 'Services',
      amount: 1000,
      date: '25 Oct 2023',
      status: 'active',
      createdBy: 'provider',
      image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: 2,
      name: 'AC Installation',
      category: 'AC Repair & Services',
      subCategory: 'Installation & Uninstallation',
      amount: 1200,
      date: '09 Sep 2023',
      status: 'active',
      createdBy: 'provider',
      image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      id: 3,
      name: 'AC Jet Pump Service',
      category: 'AC Repair & Services',
      subCategory: 'Deep Clean',
      amount: 500,
      date: '09 Sep 2023',
      status: 'active',
      createdBy: 'provider',
      image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ]);

  const toggleServiceStatus = (id: number) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' }
        : service
    ));
  };

  const deleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Services Management
              </h1>
              <p className="text-slate-600 mt-1">Manage and monitor all your services</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <RefreshCw size={20} />
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Filter size={20} />
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-3 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-semibold text-slate-700">Auto Approval</span>
                <button
                  onClick={() => setAutoApproval(!autoApproval)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ${
                    autoApproval ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-lg ${
                      autoApproval ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-600 font-medium">Search:</span>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Search services..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="border border-slate-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-slate-600">entries</span>
            </div>
          </div>

          {/* Services Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-50 to-slate-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">#</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Services</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Sub Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Created By</th>
                  <th className="text-left py-4 px-6 font-semibold text-slate-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 text-slate-900 font-medium">{index + 1}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-14 h-14 rounded-xl object-cover shadow-md"
                        />
                        <span className="font-semibold text-slate-900">{service.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">{service.category}</td>
                    <td className="py-4 px-6 text-slate-600">{service.subCategory}</td>
                    <td className="py-4 px-6 text-slate-900 font-bold">₹{service.amount}</td>
                    <td className="py-4 px-6 text-slate-600">{service.date}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => toggleServiceStatus(service.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          service.status === 'active' 
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
                            : 'bg-slate-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 shadow-lg ${
                            service.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="py-4 px-6 text-slate-600 capitalize">{service.createdBy}</td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col space-y-2">
                        <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                          <Eye size={14} />
                          <span>View</span>
                        </button>
                        <button 
                          onClick={() => deleteService(service.id)}
                          className="flex items-center space-x-2 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                        >
                          <Trash2 size={14} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-slate-600">
              Showing {filteredServices.length} of {services.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm shadow-lg">
                1
              </button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;