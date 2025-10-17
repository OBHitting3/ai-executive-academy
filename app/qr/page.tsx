'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Ghost from '../components/Ghost';

export default function QRPage() {
  const [qrCode, setQrCode] = useState('');
  const siteUrl = 'https://ai-executive-academy.vercel.app';

  useEffect(() => {
    // Generate QR code using Google Charts API (free, no signup needed)
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(siteUrl)}`;
    setQrCode(qrUrl);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Casper Ghost Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white opacity-20">
        <Ghost className="w-[800px] h-[960px]" />
      </div>

      {/* Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
        <div className="max-w-2xl w-full text-center">
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Scan to Learn Ai
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            👻 Caper The Faceless Ghost
          </p>

          {/* QR Code */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl mb-8 inline-block">
            {qrCode ? (
              <img
                src={qrCode}
                alt="QR Code for AI Executive Academy"
                className="w-[400px] h-[400px]"
              />
            ) : (
              <div className="w-[400px] h-[400px] flex items-center justify-center">
                <div className="text-slate-400">Loading QR Code...</div>
              </div>
            )}
          </div>

          {/* URL Display */}
          <div className="mb-12">
            <p className="text-sm text-slate-400 mb-2">Or visit:</p>
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition text-lg font-mono"
            >
              ai-executive-academy.vercel.app
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold mb-2">30 Days</h3>
              <p className="text-slate-400 text-sm">Master Ai in bite-sized lessons</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-white font-bold mb-2">$99 Once</h3>
              <p className="text-slate-400 text-sm">Lifetime access, no subscription</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-white font-bold mb-2">For Executives</h3>
              <p className="text-slate-400 text-sm">ChatGPT, Claude, Grok & more</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-bold rounded-lg shadow-2xl shadow-blue-500/50 transition transform hover:scale-105"
          >
            View Full Site →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-slate-500 text-sm relative z-10">
        <p>© 2025 Caper The Faceless Ghost. All rights reserved.</p>
      </footer>
    </div>
  );
}
