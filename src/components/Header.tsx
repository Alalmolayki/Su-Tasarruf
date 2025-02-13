import React from 'react';
import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2">
          <Droplets className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Su Takip</h1>
        </div>
        <p className="mt-2 max-w-2xl">
          Günlük su tüketiminizi takip edin, tasarruf edin ve sürdürülebilir bir gelecek için katkıda bulunun.
        </p>
      </div>
    </header>
  );
}