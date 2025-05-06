import React from 'react';
import { BookOpen, Globe, School } from 'lucide-react';

export default function EducationalContent() {
  const articles = [
    {
      title: 'Küresel Su Krizi',
      description: 'Dünya genelinde su kıtlığı ve sürdürülebilir su yönetimi hakkında detaylı bilgi.',
      link: 'https://cdn.hitit.edu.tr/sbe/files/12259_1602291132379.pdf',
      icon: Globe
    },
    {
      title: 'Evde Su Tasarrufu',
      description: 'Günlük hayatta uygulayabileceğiniz pratik su tasarrufu yöntemleri.',
      link: 'https://dacd.artvin.edu.tr/en/download/article-file/476928',
      icon: BookOpen
    },
    {
      title: 'Okullarda Su Projesi',
      description: 'Öğrenciler için su tasarrufu projeleri ve eğitim materyalleri.',
      link: 'https://www.winssolutions.org/tr/gri-su-geri-donusumu-surdurulebilir-su-kullanimi-icin-pratik-bir-okul-dersi/#:~:text=%C3%96%C4%9Frenciler%20taraf%C4%B1ndan%20ba%C5%9Flat%C4%B1lan%20proje%2C%20okulun,koruman%C4%B1n%20%C3%B6nemi%20hakk%C4%B1nda%20fark%C4%B1ndal%C4%B1k%20yarat%C4%B1r.',
      icon: School
    }
  ];

  const videos = [
    {
      title: 'Su Tasarrufu İpuçları',
      thumbnail: 'https://images.unsplash.com/photo-1527100673774-cce25eafaf7f?auto=format&fit=crop&w=500',
      duration: '4:30'
    },
    {
      title: 'Sürdürülebilir Su Yönetimi',
      thumbnail: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=500',
      duration: '6:15'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-6">Eğitim İçerikleri</h2>

      {/* Articles Section */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-medium text-gray-900">Makaleler</h3>
        <div className="grid gap-4">
          {articles.map((article, index) => (
            <div key={index} className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
              <div className="flex items-start space-x-3">
                <article.icon className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-blue-900">{article.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                  <a href={article.link} target='_blank' className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block">
                    Devamını Oku →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Videolar</h3>
        <div className="grid gap-4">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="font-medium">{video.title}</h4>
                  <span className="text-sm opacity-90">{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}