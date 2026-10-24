import { Code, Heart } from 'lucide-react';

const About = () => {
  const user = 'hello';
  const domain = 'catherina.dev';
  const email = `${user}@${domain}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162d34] via-[#0c181c] to-black">
      {/* Header Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Practice Lab
            </h1>

          </div>

          {/* Mission Section */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-[#4C848D]/30">

            <p className="text-[#BFB9B5] text-lg leading-relaxed">
            I created these tools to bring more structure to my practice. While balancing work, life, and music, I realized I needed to be more disciplined and focused in order to make the most of the time I can dedicate to practicing.            </p>
          </div>

          {/* Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#4C848D]/30">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-[#6BA7B0] mr-3" />
                <h3 className="text-xl font-semibold text-white">Built with Purpose</h3>
              </div>
              <p className="text-[#BFB9B5]">
                Every tool addresses a specific practice need. No bloat, no unnecessary features - just focused 
                functionality that helps you practice better.
              </p>
            </div>

            <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#4C848D]/30">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-[#D6794D] mr-3" />
                <h3 className="text-xl font-semibold text-white">Contact</h3>
              </div>
              <p className="text-[#BFB9B5]">
                <a href={`mai` + `lto:${email}`} className="text-[#DCAA89] hover:text-[#F3D7C3] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded">
                  {email}
                </a>
              </p>
            </div>
          </div>


          {/* Contact/Footer */}
          
        </div>
      </div>
    </div>
  );
};

export default About;
