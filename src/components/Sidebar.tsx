import React from 'react';
import { School, Users, GraduationCap, Calendar, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: School, label: 'Dashboard' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'teachers', icon: GraduationCap, label: 'Teachers' },
    { id: 'classes', icon: Calendar, label: 'Classes' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-indigo-800 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
        <School className="w-8 h-8 text-white" />
        <h1 className="text-white text-xl font-bold">EduAdmin</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? 'bg-indigo-700 text-white'
                  : 'text-indigo-200 hover:bg-indigo-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;