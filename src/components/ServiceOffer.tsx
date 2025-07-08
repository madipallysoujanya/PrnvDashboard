import React, { useState } from 'react';
import { Plus, Bold, Italic, Underline, List, Link, Image } from 'lucide-react';
import { OfferData } from '../types';

const ServiceOffer: React.FC = () => {
  const [offerData, setOfferData] = useState<OfferData>({
    serviceOffered: '',
    description: ''
  });

  const [showEditor, setShowEditor] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOfferData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Offer form submitted:', offerData);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Service Offer
          </h1>
          <p className="text-slate-600 mt-1">Create and manage service offerings</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Offered */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-blue-600 rounded-full mr-3"></div>
              Service Offered
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Offered *
                </label>
                <textarea
                  name="serviceOffered"
                  value={offerData.serviceOffered}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter service offered details"
                />
              </div>

              <button
                type="button"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                onClick={() => setShowEditor(!showEditor)}
              >
                <Plus size={16} />
                <span>Add More</span>
              </button>
            </div>
          </div>

          {/* Details Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full mr-3"></div>
              Details Information
            </h2>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Descriptions
              </label>
              
              {/* Rich Text Editor Toolbar */}
              <div className="border border-slate-300 rounded-t-xl p-3 bg-slate-50">
                <div className="flex items-center space-x-3">
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Bold size={16} />
                  </button>
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Italic size={16} />
                  </button>
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Underline size={16} />
                  </button>
                  <div className="h-6 border-l border-slate-300 mx-2"></div>
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <List size={16} />
                  </button>
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Link size={16} />
                  </button>
                  <button type="button" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
                    <Image size={16} />
                  </button>
                  <select className="text-sm border border-slate-300 rounded-lg px-3 py-1 bg-white">
                    <option>Normal</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                  </select>
                </div>
              </div>
              
              {/* Text Area */}
              <textarea
                name="description"
                value={offerData.description}
                onChange={handleInputChange}
                rows={8}
                className="w-full px-4 py-3 border border-slate-300 border-t-0 rounded-b-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter detailed description"
              />
            </div>
          </div>

          {/* Service Gallery Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-3"></div>
              Service Gallery
            </h2>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-blue-500 transition-all duration-300 hover:bg-blue-50">
              <Image size={48} className="text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg font-medium mb-2">Add images to showcase your service</p>
              <p className="text-slate-500 text-sm">Drag and drop or click to upload</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              Save Offer
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

export default ServiceOffer;