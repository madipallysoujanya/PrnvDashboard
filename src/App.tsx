import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ServiceForm from './components/ServiceForm';
import ServiceGallery from './components/ServiceGallery';
import ServiceOffer from './components/ServiceOffer';
import ProviderMap from './components/ProviderMap';
import AllServices from './components/AllServices';

function App() {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'add-service':
        return <ServiceForm />;
      case 'all-services':
        return <AllServices />;
      case 'work-gallery':
        return <ServiceGallery />;
      case 'service-offer':
        return <ServiceOffer />;
      case 'provider-map':
        return <ProviderMap />;
      case 'pending-services':
        return <div className="p-6"><h1 className="text-2xl font-bold">Pending Services</h1></div>;
      case 'deleted-services':
        return <div className="p-6"><h1 className="text-2xl font-bold">Deleted Services</h1></div>;
      case 'inactive-services':
        return <div className="p-6"><h1 className="text-2xl font-bold">Inactive Services</h1></div>;
      case 'payments':
        return <div className="p-6"><h1 className="text-2xl font-bold">Payments</h1></div>;
      case 'video-gallery':
        return <div className="p-6"><h1 className="text-2xl font-bold">Video Gallery</h1></div>;
      case 'booking-list':
        return <div className="p-6"><h1 className="text-2xl font-bold">Booking List</h1></div>;
      case 'call-bookings':
        return <div className="p-6"><h1 className="text-2xl font-bold">Call Bookings</h1></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;