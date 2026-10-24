import { Shield, Eye, Lock, FileText, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162d34] via-[#0c181c] to-black">
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Shield className="h-16 w-16 text-[#DCAA89] mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#BFB9B5] text-lg">
              Effective Date: July 12, 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#4C848D]/30">
            <p className="text-[#BFB9B5] text-lg leading-relaxed">
              This Privacy Policy explains how our suite of music practice tools (collectively referred to as "Practice Lab Apps", including Bright Sight, Score Tone, Practice Mirror, Practice Mate timer, Spot Practice, Click Up, Practice Koh-Pilot, Rhythm Weaver, Scaled, and Pitch Mate) handles your data. We are committed to protecting your privacy and ensuring a secure experience.
            </p>
          </div>

          {/* Google Services Section */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#4C848D]/30">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-[#6BA7B0] mr-3" />
              <h2 className="text-2xl font-bold text-white">Google API Services & User Data</h2>
            </div>
            <p className="text-[#BFB9B5] mb-6 leading-relaxed">
              Some of our applications integrate with Google API Services to provide specific functionalities. We strictly adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-[#DCAA89] hover:text-[#F3D7C3] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>

            <div className="space-y-6">
              {/* Practice Mirror (YouTube) */}
              <div className="border-l-4 border-[#D6794D] pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Practice Mirror (YouTube Integration)</h3>
                <p className="text-[#BFB9B5] leading-relaxed mb-2">
                  <strong className="text-white">How it uses Google Auth:</strong> Practice Mirror requests permission to upload videos to your YouTube account (<code className="text-[#DCAA89]">youtube.upload</code> scope). This allows you to upload practice recording sessions directly to your channel.
                </p>
                <p className="text-[#BFB9B5] leading-relaxed">
                  <strong className="text-white">Data Storage & Privacy:</strong> We do not store, collect, or share your YouTube login credentials, channel data, or videos. All OAuth authentication and video uploads occur directly client-side between your browser and Google's servers. No third-party servers are used to store or access your video files.
                </p>
              </div>

              {/* ScoreTone (Google Drive) */}
              <div className="border-l-4 border-[#D6794D] pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">ScoreTone (Google Drive & Picker Integration)</h3>
                <p className="text-[#BFB9B5] leading-relaxed mb-2">
                  <strong className="text-white">How it uses Google Auth:</strong> ScoreTone uses Google OAuth and the Google Picker API to let you select and view PDF sheet music files stored in your Google Drive (<code className="text-[#DCAA89]">drive.readonly</code> or <code className="text-[#DCAA89]">drive.file</code> scopes).
                </p>
                <p className="text-[#BFB9B5] leading-relaxed">
                  <strong className="text-white">Data Storage & Privacy:</strong> ScoreTone operates entirely client-side. We do not download, store, or transmit your Google Drive files or metadata to any external servers. The file content is read and rendered locally in your browser session.
                </p>
              </div>
            </div>
          </div>

          {/* General Data Collection */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#4C848D]/30">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-[#6BA7B0] mr-3" />
              <h2 className="text-2xl font-bold text-white">General Data Handling</h2>
            </div>
            <ul className="space-y-4 text-[#BFB9B5]">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-[#6BA7B0] mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-white">No Account Required:</strong> You do not need to create an account with us to use our tools.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-[#6BA7B0] mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Local Storage:</strong> Any application configurations, schedules, practice logs, or preferences are stored locally in your browser (via LocalStorage or IndexedDB) and remain entirely on your device.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-[#6BA7B0] mr-3 mt-1 flex-shrink-0" />
                <span><strong className="text-white">No Analytics/Tracking:</strong> We do not track your usage habits or sell data to advertising networks.</span>
              </li>
            </ul>
          </div>

          {/* Revocation & Third Party ToS */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-[#4C848D]/30">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-[#6BA7B0] mr-3" />
              <h2 className="text-2xl font-bold text-white">Third-Party Terms & Revocation</h2>
            </div>
            <p className="text-[#BFB9B5] mb-4 leading-relaxed">
              By using Practice Mirror, you also agree to be bound by the <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-[#DCAA89] hover:text-[#F3D7C3] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded">YouTube Terms of Service</a> and Google's main Privacy Policy.
            </p>
            <p className="text-[#BFB9B5] leading-relaxed">
              You can revoke our applications' access to your Google account at any time. To manage your app permissions, visit the <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-[#DCAA89] hover:text-[#F3D7C3] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] rounded">Google Security Settings Page</a>.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#0e1a1e]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#4C848D]/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions & Contact</h2>
            <p className="text-[#BFB9B5] mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us.
            </p>
            <a 
              href="https://www.microsaurus.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gradient-to-r from-[#B84B1B] to-[#C35627] hover:from-[#A63E12] hover:to-[#B84B1B] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#C35627]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAA89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e1a1e]"
            >
              Contact Us via Microsaurus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
