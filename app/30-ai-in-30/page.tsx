'use client';

import Link from 'next/link';

const days = [
  { day: 1, title: "ChatGPT Basics", description: "Master the fundamentals of conversational Ai" },
  { day: 2, title: "Advanced Prompting", description: "Write prompts that get better results" },
  { day: 3, title: "Email Automation", description: "10x your email productivity" },
  { day: 4, title: "Claude for Research", description: "Deep analysis and document review" },
  { day: 5, title: "Grok Real-Time Data", description: "Access live information instantly" },
  { day: 6, title: "Gemini Workspace", description: "Integrate Ai with Google tools" },
  { day: 7, title: "Perplexity Research", description: "Cited answers for executive decisions" },
  { day: 8, title: "Content Creation", description: "Generate reports and presentations" },
  { day: 9, title: "Data Analysis", description: "Turn spreadsheets into insights" },
  { day: 10, title: "Visual Design", description: "Create professional graphics" },
  { day: 11, title: "Meeting Summaries", description: "Never miss key action items" },
  { day: 12, title: "Competitive Analysis", description: "Research competitors in minutes" },
  { day: 13, title: "Strategic Planning", description: "Ai-powered business strategy" },
  { day: 14, title: "Customer Insights", description: "Analyze feedback at scale" },
  { day: 15, title: "Financial Modeling", description: "Build projections faster" },
  { day: 16, title: "Marketing Copy", description: "Write compelling campaigns" },
  { day: 17, title: "Sales Enablement", description: "Personalize outreach at scale" },
  { day: 18, title: "HR & Recruiting", description: "Screen candidates efficiently" },
  { day: 19, title: "Legal Review", description: "Analyze contracts and documents" },
  { day: 20, title: "Product Development", description: "Validate ideas with Ai" },
  { day: 21, title: "Crisis Management", description: "Real-time decision support" },
  { day: 22, title: "Board Presentations", description: "Create executive-level decks" },
  { day: 23, title: "Industry Trends", description: "Stay ahead of the curve" },
  { day: 24, title: "Risk Assessment", description: "Identify threats early" },
  { day: 25, title: "Innovation Labs", description: "Brainstorm breakthrough ideas" },
  { day: 26, title: "Global Markets", description: "Analyze international data" },
  { day: 27, title: "M&A Due Diligence", description: "Research acquisition targets" },
  { day: 28, title: "Stakeholder Reports", description: "Communicate with clarity" },
  { day: 29, title: "Future Planning", description: "Build your Ai roadmap" },
  { day: 30, title: "Ai Leadership", description: "Lead the Ai transformation" },
];

export default function ThirtyAiInThirty() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-8xl md:text-9xl font-bold mb-6 tracking-tight">
            <span className="text-white">30</span>
            <span className="text-gray-500 mx-4">Ai</span>
            <span className="text-white">in</span>
            <span className="text-gray-500 mx-4">30</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-serif">
            A documentary-style journey through artificial intelligence mastery.
            Thirty days. Thirty lessons. Transform how you work.
          </p>
        </div>

        {/* Featured Video */}
        {days[0] && (
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="border border-gray-800 bg-gray-900/30 p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl font-serif font-bold text-white leading-none">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-white">
                    {days[0].title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {days[0].description}
                  </p>
                  <video
                    controls
                    className="w-full rounded bg-black"
                    poster="/day-1-poster.jpg"
                  >
                    <source src="/day-1-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Days Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {days.map((item) => (
            <div
              key={item.day}
              className="group border border-gray-800 hover:border-gray-600 transition p-6 bg-gray-900/30"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-bold text-gray-700 group-hover:text-white transition leading-none">
                  {item.day}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 font-serif">
            © 2025 Caper The Faceless Ghost. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
