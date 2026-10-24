import { ElementType } from 'react';
import { ExternalLink } from 'lucide-react';

export interface AppCardProps {
  app: {
    title: string;
    tagline?: string;
    description: string;
    icon: ElementType;
    thumbnail: string;
    features: string[];
    url?: string;
    badge?: string;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  const { title, tagline, description, icon: Icon, thumbnail, features, url, badge } = app;

  const cardContent = (
    <>
      {/* Thumbnail */}
      <div className="relative h-64 flex-shrink-0 overflow-hidden flex items-center justify-center">
        <img 
          src={thumbnail} 
          alt={title}
          className={`h-full aspect-square object-contain rounded-[15.6%] transition-transform duration-500 ${url ? 'group-hover:scale-110' : ''}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-br from-[#4C848D] to-[#30525C] opacity-25 transition-opacity duration-300 ${url ? 'group-hover:opacity-40' : ''}`}></div>
        
        {/* Icon overlay */}
        <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-[15.6%]">
          <Icon size={32} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h4 className={`text-2xl font-bold text-white mb-2 transition-all duration-300 flex items-center gap-2 ${url ? 'group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#DCAA89] group-hover:to-[#6BA7B0] group-hover:bg-clip-text' : ''}`}>
          {title}
          {badge && (
            <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C35627]/20 text-[#DCAA89] border border-[#C35627]/40">
              {badge}
            </span>
          )}
        </h4>

        {tagline && (
          <p className="text-white font-bold italic text-base py-1 mb-4 leading-snug">
            {tagline}
          </p>
        )}
        
        <p className="text-[#BFB9B5] text-base leading-relaxed mb-4 whitespace-pre-line">
          {description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h5 className="text-white font-semibold mb-3">Key Features:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-[#4C848D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-200 text-sm leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto bg-gradient-to-r from-[#B84B1B] to-[#C35627] hover:from-[#A63E12] hover:to-[#B84B1B] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#C35627]/25 hover:scale-[1.02] flex items-center justify-center space-x-2 flex-shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1a1e]"
          >
            <span>Launch App</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <div className="w-full mt-auto bg-gray-800/80 border border-gray-700/60 text-gray-400 py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 flex-shrink-0 cursor-default">
            <span>Coming Soon to Android</span>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="group relative bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#4C848D]/30 hover:border-[#DCAA89]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
      {cardContent}
    </div>
  );
};

export default AppCard;