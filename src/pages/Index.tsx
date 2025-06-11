import React from 'react';
import Header from '../components/Header';
import SignAffiliates from '../components/SignAffiliates';
import LatestUpdates from '../components/LatestUpdates';
import CreatorsSection from '../components/CreatorsSection';
import MyContributions from '../components/MyContributions';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="container mx-auto px-6 py-8">
        {/* Grid Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-16">
            {/* Latest Updates Section */}
            <div>
              <LatestUpdates />
            </div>

            {/* Creators Section */}
            <div>
              <CreatorsSection />
            </div>

            {/* My Contributions Section */}
            <div>
              <MyContributions />
            </div>
          </div>

          {/* Sign Affiliates Section - 1/3 width on desktop, full width on mobile */}
          <div>
            <SignAffiliates />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50 mt-16">
          <div className="crypto-gradient bg-clip-text text-transparent font-semibold">
            SignCommunityHub - Building the Future Together
          </div>
          <p className="text-muted-foreground text-sm mt-2">
            Powered by the Sign Community • Made with ❤️ by EmLord
          </p>
        </footer>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 crypto-button rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-10"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Index;
