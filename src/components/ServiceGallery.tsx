import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { GalleryData } from '../types';

const ServiceGallery: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GalleryData>({
    metaTitle: '',
    metaDescription: '',
    metaKeywords: ''
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGalleryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Gallery form submitted:', { galleryData, selectedFile });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Service Gallery
          </h1>
          <p className="text-slate-600 mt-1">Upload and manage service images</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-blue-500 transition-all duration-300 hover:bg-blue-50">
              {previewUrl ? (
                <div className="space-y-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mx-auto max-h-64 rounded-xl shadow-lg"
                  />
                  <p className="text-sm text-slate-600 font-medium">{selectedFile?.name}</p>
                </div>
              ) : (
                <>
                  <Upload size={64} className="text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-700 mb-2 font-semibold text-lg">Upload service image*</p>
                  <p className="text-sm text-slate-500">Click here to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-2">PNG, JPG, GIF up to 10MB</p>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                {previewUrl ? 'Change File' : 'Choose File'}
              </label>
            </div>
          </div>

          {/* Meta Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full mr-3"></div>
              Meta Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={galleryData.metaTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter meta title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  name="metaDescription"
                  value={galleryData.metaDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter meta description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Meta Keywords
                </label>
                <input
                  type="text"
                  name="metaKeywords"
                  value={galleryData.metaKeywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter meta keywords (comma separated)"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              Add to Gallery
            </button>
            <button
              type="button"
              className="bg-slate-200 text-slate-700 px-8 py-3 rounded-xl hover:bg-slate-300 transition-all duration-200 font-semibold"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceGallery;