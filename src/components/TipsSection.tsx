import React from 'react';
import { InfoIcon } from 'lucide-react';

export default function TipsSection() {
  const tips = [
    'Duş sürenizi 5 dakika ile sınırlandırın',
    'Dişlerinizi fırçalarken musluğu kapatın',
    'Çamaşır ve bulaşık makinelerini tam doluyken çalıştırın',
    'Bahçe sulamasını akşam saatlerinde yapın',
    'Su kaçaklarını hemen onarın'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
        <InfoIcon className="mr-2" />
        Su Tasarrufu İpuçları
      </h2>

      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm mr-3">
              {index + 1}
            </span>
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <p className="text-sm text-blue-800">
          Bu ipuçlarını uygulayarak aylık su tüketiminizi %30'a kadar azaltabilirsiniz.
        </p>
      </div>
    </div>
  );
}