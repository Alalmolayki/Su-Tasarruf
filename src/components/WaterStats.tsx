import React from 'react';
import { BarChart3Icon, TrendingDown, TrendingUp } from 'lucide-react';

interface WaterStatsProps {
  dailyUsage: number;
}

export default function WaterStats({ dailyUsage }: WaterStatsProps) {
  const averageUsage = 150; // Ortalama günlük su tüketimi (litre)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
        <BarChart3Icon className="mr-2" />
        Su Tüketim İstatistikleri
      </h2>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="font-medium text-blue-800">Günlük Tüketim Analizi</h3>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <span>Sizin Tüketiminiz:</span>
              <span className="font-bold">{dailyUsage} Litre</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span>Ortalama Tüketim:</span>
              <span className="font-bold">{averageUsage} Litre</span>
            </div>
          </div>
          
          <div className="mt-4">
            {dailyUsage > averageUsage ? (
              <div className="flex items-center text-red-600">
                <TrendingUp className="mr-2" />
                <span>Ortalamanın üzerinde tüketim yapıyorsunuz</span>
              </div>
            ) : (
              <div className="flex items-center text-green-600">
                <TrendingDown className="mr-2" />
                <span>Ortalamanın altında tüketim yapıyorsunuz</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-md text-white">
          <h3 className="font-medium">Tasarruf Potansiyeli</h3>
          <p className="mt-2">
            Günlük su tüketiminizi %10 azaltarak yılda yaklaşık {Math.round(dailyUsage * 0.1 * 365)} litre su tasarrufu yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}