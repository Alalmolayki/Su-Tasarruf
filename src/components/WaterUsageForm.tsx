import React, { useState } from 'react';
import { Droplet, Info } from 'lucide-react';

interface WaterUsageFormProps {
  onUsageUpdate: (usage: number) => void;
}

interface UsageGuide {
  [key: string]: {
    typical: number;
    description: string;
  };
}

export default function WaterUsageForm({ onUsageUpdate }: WaterUsageFormProps) {
  const [formData, setFormData] = useState({
    shower: 0,
    tap: 0,
    washing: 0,
    other: 0,
  });

  const [showGuide, setShowGuide] = useState<string | null>(null);

  const usageGuide: UsageGuide = {
    shower: {
      typical: 60,
      description: '5 dakikalık duş yaklaşık 60 litre su tüketir.'
    },
    tap: {
      typical: 6,
      description: 'Bir musluk dakikada ortalama 6 litre su akıtır.'
    },
    washing: {
      typical: 50,
      description: 'Bir çamaşır yıkama 40-60 litre su kullanır.'
    },
    other: {
      typical: 20,
      description: 'Bahçe sulama, temizlik vb. aktiviteler için ortalama değer.'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: Number(value) };
    setFormData(newFormData);
    
    const totalUsage = Object.values(newFormData).reduce((a, b) => a + b, 0);
    onUsageUpdate(totalUsage);
  };

  const handleQuickFill = (name: string) => {
    const newFormData = { ...formData, [name]: usageGuide[name].typical };
    setFormData(newFormData);
    const totalUsage = Object.values(newFormData).reduce((a, b) => a + b, 0);
    onUsageUpdate(totalUsage);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
        <Droplet className="mr-2" />
        Günlük Su Tüketimi
      </h2>
      
      <div className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="relative">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            {key === 'tap' ? 'Musluk Kullanımı' : 
             key === 'shower' ? 'Duş' :
             key === 'washing' ? 'Çamaşır/Bulaşık' : 'Diğer'} (Litre)
          </label>
          <div className="mt-1 flex items-center space-x-2">
            <input
              type="number"
              name={key}
              value={value === 0 ? '' : value}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg px-4 py-2"
              min="0"
              placeholder=""
            />
            <button
              type="button"
              onClick={() => handleQuickFill(key)}
              className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              Tipik Değer
            </button>
            <button
              type="button"
              onMouseEnter={() => setShowGuide(key)}
              onMouseLeave={() => setShowGuide(null)}
              className="text-gray-400 hover:text-blue-500"
            >
              <Info size={20} />
            </button>
          </div>
          {showGuide === key && (
            <div className="absolute right-0 mt-1 p-2 bg-blue-50 rounded-md text-sm text-blue-800 shadow-lg z-10 w-64">
              {usageGuide[key].description}
            </div>
          )}
        </div>
        
        ))}
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <p className="text-blue-800 font-semibold">
          Toplam Günlük Tüketim: {Object.values(formData).reduce((a, b) => a + b, 0)} Litre
        </p>
      </div>
    </div>
  );
}