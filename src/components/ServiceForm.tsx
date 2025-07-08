import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { FormData } from '../types';

const ServiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceTitle: '',
    serviceShortName: '',
    serviceAmount: '',
    country: '',
    state: '',
    city: '',
    category: '',
    subCategory: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.serviceTitle.trim()) {
      newErrors.serviceTitle = 'Service title is required';
    }
    if (!formData.serviceShortName.trim()) {
      newErrors.serviceShortName = 'Service short name is required';
    }
    if (!formData.serviceAmount.trim()) {
      newErrors.serviceAmount = 'Service amount is required';
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    if (!formData.state) {
      newErrors.state = 'State is required';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.subCategory) {
      newErrors.subCategory = 'Sub category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Service form submitted:', formData);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Add New Service
          </h1>
          <p className="text-slate-600 mt-1">Create a new service for your platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
              Service Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Title (English) *
                </label>
                <input
                  type="text"
                  name="serviceTitle"
                  value={formData.serviceTitle}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.serviceTitle ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                  placeholder="Enter service title"
                />
                {errors.serviceTitle && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceTitle}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Title Short Name *
                </label>
                <input
                  type="text"
                  name="serviceShortName"
                  value={formData.serviceShortName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.serviceShortName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                  placeholder="Enter short name"
                />
                {errors.serviceShortName && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceShortName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Amount *
                </label>
                <input
                  type="number"
                  name="serviceAmount"
                  value={formData.serviceAmount}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.serviceAmount ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                  placeholder="Enter amount"
                />
                {errors.serviceAmount && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceAmount}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.country ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select Country</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.state ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                </select>
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  City *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.city ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                </select>
                {errors.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                )}
              </div>
            </div>
          </div>

          {/* Service Category */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-blue-600 rounded-full mr-3"></div>
              Service Category
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.category ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select Category</option>
                  <option value="home-services">Home Services</option>
                  <option value="beauty-wellness">Beauty & Wellness</option>
                  <option value="repairs">Repairs</option>
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Sub Category *
                </label>
                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                    errors.subCategory ? 'border-red-500 bg-red-50' : 'border-slate-300'
                  }`}
                >
                  <option value="">Select Sub Category</option>
                  <option value="cleaning">Cleaning</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                </select>
                {errors.subCategory && (
                  <p className="mt-1 text-sm text-red-600">{errors.subCategory}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              Add Service
            </button>
            <button
              type="button"
              className="bg-slate-200 text-slate-700 px-8 py-3 rounded-xl hover:bg-slate-300 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;