import React, { useState } from 'react';
import { DropletIcon, BarChart3Icon, LineChart, InfoIcon, Droplets } from 'lucide-react';
import WaterUsageForm from './components/WaterUsageForm';
import WaterStats from './components/WaterStats';
import TipsSection from './components/TipsSection';
import Header from './components/Header';
import EducationalContent from './components/EducationalContent';

function App() {
  const [dailyUsage, setDailyUsage] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <WaterUsageForm onUsageUpdate={setDailyUsage} />
            <TipsSection />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <WaterStats dailyUsage={dailyUsage} />
            <EducationalContent />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;