
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import ProblemSection from './components/ProblemSection';
import TheBigIdea from './components/TheBigIdea';
import HowItWorks from './components/HowItWorks';
import FlagshipOffer from './components/FlagshipOffer';
import ExpertiseSection from './components/ExpertiseSection';

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-mint selection:text-white pb-24">
      <Navigation />
      <Hero />
      <CredibilityStrip />
      <ProblemSection />
      <TheBigIdea />
      <HowItWorks />
      <FlagshipOffer />
      <ExpertiseSection />
      
      {/* Footer / FAQ / Risk Reversal can go here */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 py-24 border-t border-forest/10 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <h2 className="font-serif text-3xl text-forest mb-4">ValueLab</h2>
            <p className="text-forest-light leading-relaxed">
              If your firm is losing billable capacity inside workflow friction, operational drag, or underused systems, the next step is simply to see if this is the right fit.
            </p>
          </div>
          <div>
            <button className="bg-mint text-forest-dark px-8 py-4 rounded-sm font-medium tracking-wide tactile-button hover:bg-mint-light transition-colors">
              See If We're the Right Fit
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
