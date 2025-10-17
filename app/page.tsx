'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const router = useRouter();

  const handlePromoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check promo code
    const response = await fetch('/api/check-promo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: promoCode })
    });

    const data = await response.json();

    if (data.valid) {
      // Valid code - redirect to onboarding with free access
      router.push(`/onboarding?promo=${promoCode}`);
    } else {
      setPromoError(data.message || 'Invalid or already used promo code');
    }
  };

  const handleBuyNow = () => {
    // For now, go straight to onboarding
    // In production, this would go to Stripe checkout
    router.push('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="absolute top-0 w-full p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AI Executive Academy</h1>
          <button
            onClick={() => setShowPromoInput(!showPromoInput)}
            className="text-sm text-blue-300 hover:text-blue-200 transition"
          >
            Have a promo code?
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-sm text-blue-300">Built for Busy Executives</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master AI in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              30 Days
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            The executive's roadmap to ChatGPT, Claude, Midjourney, and 10+ AI tools that will 10x your productivity.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-12 text-slate-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm">AI Tools Covered</div>
            </div>
            <div className="h-12 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">30</div>
              <div className="text-sm">Days to Mastery</div>
            </div>
            <div className="h-12 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$99</div>
              <div className="text-sm">One-Time Payment</div>
            </div>
          </div>

          {/* Promo Code Input (Conditional) */}
          {showPromoInput && (
            <div className="mb-8 p-6 bg-slate-800/50 border border-slate-700 rounded-lg max-w-md mx-auto">
              <form onSubmit={handlePromoSubmit}>
                <label className="block text-sm text-slate-300 mb-2 text-left">
                  Enter your exclusive promo code:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setPromoError('');
                    }}
                    placeholder="Enter code..."
                    className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-red-400 text-sm mt-2 text-left">{promoError}</p>
                )}
              </form>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBuyNow}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-semibold rounded-lg shadow-xl shadow-blue-500/50 transition transform hover:scale-105"
            >
              Get Started - $99
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold rounded-lg border border-slate-600 transition">
              View Curriculum
            </button>
          </div>

          {/* Trust Badge */}
          <p className="mt-6 text-sm text-slate-400">
            ✓ Lifetime access • ✓ No subscription • ✓ 30-day money back guarantee
          </p>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-2">ChatGPT Mastery</h3>
            <p className="text-slate-400">
              Write emails, reports, and presentations in minutes instead of hours.
            </p>
          </div>
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Design Tools</h3>
            <p className="text-slate-400">
              Create stunning visuals with Midjourney, DALL-E, and Firefly.
            </p>
          </div>
          <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg backdrop-blur">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
            <p className="text-slate-400">
              Analyze spreadsheets, reports, and trends with Claude and Perplexity.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm">
        <p>© 2025 AI Executive Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
