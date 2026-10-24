interface HeaderProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Header = ({ onPageChange, currentPage }: HeaderProps) => {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onPageChange('home')}
            className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded px-2 py-1 ${
              currentPage === 'home' 
                ? 'text-[#DCAA89] font-medium' 
                : 'text-[#BFB9B5] hover:text-white'
            }`}
          >
            Apps
          </button>
          <button 
            onClick={() => onPageChange('about')}
            className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded px-2 py-1 ${
              currentPage === 'about' 
                ? 'text-[#DCAA89] font-medium' 
                : 'text-[#BFB9B5] hover:text-white'
            }`}
          >
            About
          </button>
          <a 
            href="/privacy.html"
            className={`transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded px-2 py-1 ${
              currentPage === 'privacy' 
                ? 'text-[#DCAA89] font-medium' 
                : 'text-[#BFB9B5] hover:text-white'
            }`}
          >
            Privacy
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;