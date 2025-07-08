import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  ChevronRight, 
  ChevronDown,
  Plus,
  List,
  Clock,
  Trash2,
  Pause,
  CreditCard,
  Image,
  Video,
  MapPin,
  Users,
  Star,
  Calendar,
  Phone,
  MessageSquare,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ExpandedSections {
  services: boolean;
  advertisements: boolean;
  pincodes: boolean;
  areas: boolean;
  serviceArea: boolean;
  categories: boolean;
  reviews: boolean;
  booking: boolean;
  responses: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    services: true,
    advertisements: false,
    pincodes: false,
    areas: false,
    serviceArea: false,
    categories: false,
    reviews: false,
    booking: false,
    responses: false
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  interface MenuItemProps {
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    hasChildren?: boolean;
    isExpanded?: boolean;
    onToggle?: () => void;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ 
    icon: Icon, 
    label, 
    isActive = false, 
    onClick, 
    hasChildren = false, 
    isExpanded = false, 
    onToggle 
  }) => (
    <div className="mb-1">
      <div
        className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 ${
          isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800 hover:scale-102'
        }`}
        onClick={hasChildren ? onToggle : onClick}
      >
        <div className="flex items-center space-x-3">
          <Icon size={20} />
          <span className="font-medium">{label}</span>
        </div>
        {hasChildren && (
          <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
            <ChevronRight size={16} />
          </div>
        )}
      </div>
    </div>
  );

  interface SubMenuItemProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }

  const SubMenuItem: React.FC<SubMenuItemProps> = ({ label, isActive, onClick }) => (
    <div
      className={`ml-8 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-l-4 border-blue-500' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );

  return (
    <div className="w-64 bg-white h-screen shadow-2xl fixed left-0 top-0 overflow-y-auto z-50 border-r border-slate-200">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <span className="font-bold text-xl text-slate-800">Admin</span>
            <p className="text-xs text-slate-500">Dashboard</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">Main</div>
          
          <MenuItem
            icon={Home}
            label="Dashboard"
            isActive={activeSection === 'dashboard'}
            onClick={() => setActiveSection('dashboard')}
          />

          <div className="text-slate-400 text-xs font-semibold mb-3 mt-6 uppercase tracking-wider">Services</div>
          
          <MenuItem
            icon={Settings}
            label="Services"
            hasChildren
            isExpanded={expandedSections.services}
            onToggle={() => toggleSection('services')}
          />
          
          {expandedSections.services && (
            <div className="ml-4 space-y-1 animate-fadeIn">
              <SubMenuItem
                label="Add Services"
                isActive={activeSection === 'add-service'}
                onClick={() => setActiveSection('add-service')}
              />
              <SubMenuItem
                label="All Services"
                isActive={activeSection === 'all-services'}
                onClick={() => setActiveSection('all-services')}
              />
              <SubMenuItem
                label="Pending Services"
                isActive={activeSection === 'pending-services'}
                onClick={() => setActiveSection('pending-services')}
              />
              <SubMenuItem
                label="Deleted Services"
                isActive={activeSection === 'deleted-services'}
                onClick={() => setActiveSection('deleted-services')}
              />
              <SubMenuItem
                label="Inactive Services"
                isActive={activeSection === 'inactive-services'}
                onClick={() => setActiveSection('inactive-services')}
              />
              <SubMenuItem
                label="Payments"
                isActive={activeSection === 'payments'}
                onClick={() => setActiveSection('payments')}
              />
              <SubMenuItem
                label="All Work Gallery"
                isActive={activeSection === 'work-gallery'}
                onClick={() => setActiveSection('work-gallery')}
              />
              <SubMenuItem
                label="All Video Gallery"
                isActive={activeSection === 'video-gallery'}
                onClick={() => setActiveSection('video-gallery')}
              />
            </div>
          )}

          <div className="text-slate-400 text-xs font-semibold mb-3 mt-6 uppercase tracking-wider">Management</div>
          
          <MenuItem
            icon={MessageSquare}
            label="Advertisements"
            hasChildren
            isExpanded={expandedSections.advertisements}
            onToggle={() => toggleSection('advertisements')}
          />

          <MenuItem
            icon={MapPin}
            label="Locations"
            hasChildren
            isExpanded={expandedSections.pincodes}
            onToggle={() => toggleSection('pincodes')}
          />

          <MenuItem
            icon={List}
            label="Categories"
            hasChildren
            isExpanded={expandedSections.categories}
            onToggle={() => toggleSection('categories')}
          />

          <MenuItem
            icon={Star}
            label="Reviews"
            hasChildren
            isExpanded={expandedSections.reviews}
            onToggle={() => toggleSection('reviews')}
          />

          <div className="text-slate-400 text-xs font-semibold mb-3 mt-6 uppercase tracking-wider">Booking</div>
          
          <MenuItem
            icon={Calendar}
            label="Booking List"
            isActive={activeSection === 'booking-list'}
            onClick={() => setActiveSection('booking-list')}
          />

          <MenuItem
            icon={Phone}
            label="Call Bookings"
            isActive={activeSection === 'call-bookings'}
            onClick={() => setActiveSection('call-bookings')}
          />

          <MenuItem
            icon={MapPin}
            label="Provider Map"
            isActive={activeSection === 'provider-map'}
            onClick={() => setActiveSection('provider-map')}
          />

          <MenuItem
            icon={Settings}
            label="Service Offer"
            isActive={activeSection === 'service-offer'}
            onClick={() => setActiveSection('service-offer')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;