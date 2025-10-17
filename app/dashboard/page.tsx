'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
  affiliateLink: string; // This is where you'll add your real affiliate links
  tutorial: string;
}

const AI_TOOLS: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT Plus',
    category: 'Writing & Analysis',
    description: 'The most powerful AI writing assistant. Perfect for emails, reports, and brainstorming.',
    icon: '🤖',
    price: '$20/month',
    features: [
      'GPT-4 access (smarter responses)',
      'Faster response times',
      'Priority access during peak hours',
      'Web browsing & analysis'
    ],
    affiliateLink: 'https://chat.openai.com/auth/login', // Add your affiliate link
    tutorial: 'Learn how to write perfect emails in 30 seconds'
  },
  {
    id: 'claude',
    name: 'Claude Pro',
    category: 'Writing & Research',
    description: 'Anthropic\'s Claude - best for deep analysis, research, and long-form writing.',
    icon: '📚',
    price: '$20/month',
    features: [
      'Extended conversations',
      'Priority access',
      'Better for analysis & research',
      '200K token context window'
    ],
    affiliateLink: 'https://claude.ai/', // Add your affiliate link
    tutorial: 'Analyze complex documents and extract insights'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Image Generation',
    description: 'Create stunning, professional images from text descriptions.',
    icon: '🎨',
    price: '$10/month',
    features: [
      'Generate up to 200 images/month',
      'Commercial usage rights',
      'Access to latest models',
      'Private image generation'
    ],
    affiliateLink: 'https://www.midjourney.com/', // Add your affiliate link
    tutorial: 'Create professional graphics for presentations'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Voice & Audio',
    description: 'AI voice generation and cloning. Create professional voiceovers instantly.',
    icon: '🎙️',
    price: '$5/month',
    features: [
      'Text-to-speech in 29 languages',
      'Voice cloning',
      'Commercial license',
      '30,000 characters/month'
    ],
    affiliateLink: 'https://elevenlabs.io/', // Add your affiliate link
    tutorial: 'Generate voiceovers for videos and presentations'
  },
  {
    id: 'perplexity',
    name: 'Perplexity Pro',
    category: 'Research',
    description: 'AI-powered search engine. Get accurate answers with sources.',
    icon: '🔍',
    price: '$20/month',
    features: [
      'Unlimited AI searches',
      'Access to GPT-4 and Claude',
      'File upload & analysis',
      'Always cites sources'
    ],
    affiliateLink: 'https://www.perplexity.ai/', // Add your affiliate link
    tutorial: 'Research any topic in minutes with cited sources'
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'Video Generation',
    description: 'Create and edit videos using AI. No video editing experience needed.',
    icon: '🎬',
    price: '$12/month',
    features: [
      'Text-to-video generation',
      'AI video editing',
      'Remove backgrounds',
      'Green screen effects'
    ],
    affiliateLink: 'https://runwayml.com/', // Add your affiliate link
    tutorial: 'Create professional videos from text prompts'
  }
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Load user data
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) {
    return null;
  }

  const categories = ['All', ...Array.from(new Set(AI_TOOLS.map(tool => tool.category)))];
  const filteredTools = selectedCategory === 'All'
    ? AI_TOOLS
    : AI_TOOLS.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-700 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white">AI Executive Academy</h1>
            <p className="text-sm text-slate-400">Welcome back, {user.name}</p>
          </div>
          <div className="flex items-center gap-4">
            {user.promoCode && (
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                VIP Access
              </span>
            )}
            <button className="text-slate-400 hover:text-white transition">
              Account
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your AI Toolkit
          </h2>
          <p className="text-xl text-slate-300">
            Get started with these powerful AI tools. Click "Get Access" to sign up with our recommended platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-blue-500/50 transition"
            >
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{tool.icon}</div>
                <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                  {tool.price}
                </span>
              </div>

              {/* Tool Info */}
              <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-blue-400 mb-3">{tool.category}</p>
              <p className="text-slate-400 mb-4">{tool.description}</p>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tutorial */}
              <div className="mb-4 p-3 bg-slate-900/50 rounded-lg">
                <p className="text-xs text-slate-400 mb-1">Quick Tutorial:</p>
                <p className="text-sm text-slate-200">{tool.tutorial}</p>
              </div>

              {/* CTA */}
              <a
                href={tool.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center font-semibold rounded-lg transition"
              >
                Get Access →
              </a>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 p-8 bg-slate-800/30 border border-slate-700 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Help Getting Started?</h3>
          <p className="text-slate-300 mb-6">
            Watch our step-by-step video tutorials for each tool.
          </p>
          <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition">
            View All Tutorials
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500 text-sm">
        <p>© 2025 AI Executive Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
