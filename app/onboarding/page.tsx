'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promoCode = searchParams.get('promo');

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    role: '',
    goal: '',
    level: '',
    name: '',
    email: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save user data and go to dashboard
      localStorage.setItem('user', JSON.stringify({
        ...answers,
        promoCode,
        isPaid: !!promoCode, // If promo code exists, they get free access
        joinedAt: new Date().toISOString()
      }));
      router.push('/dashboard');
    }
  };

  const isStepComplete = () => {
    if (step === 1) return answers.role !== '';
    if (step === 2) return answers.goal !== '';
    if (step === 3) return answers.name !== '' && answers.email !== '';
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Casper Ghost Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="text-[40rem] select-none">👻</div>
      </div>
      <div className="max-w-2xl w-full relative z-10">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-slate-400">Step {step} of 3</span>
            {promoCode && (
              <span className="text-sm text-green-400">
                ✓ VIP Access ({promoCode})
              </span>
            )}
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur">
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What&apos;s your role?
              </h2>
              <p className="text-slate-400 mb-8">
                This helps us personalize your AI learning path.
              </p>
              <div className="space-y-3">
                {['Executive/C-Suite', 'Manager/Director', 'Consultant', 'Entrepreneur', 'Professional Services', 'Other'].map((role) => (
                  <button
                    key={role}
                    onClick={() => setAnswers({...answers, role})}
                    className={`w-full p-4 rounded-lg border-2 transition text-left ${
                      answers.role === role
                        ? 'border-blue-500 bg-blue-500/20 text-white'
                        : 'border-slate-600 bg-slate-900/50 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What do you want to achieve with AI?
              </h2>
              <p className="text-slate-400 mb-8">
                Select your primary goal (you&apos;ll learn all the tools).
              </p>
              <div className="space-y-3">
                {[
                  'Write faster (emails, reports, presentations)',
                  'Create visual content (images, videos)',
                  'Analyze data and make decisions',
                  'Automate repetitive tasks',
                  'Learn everything about AI',
                  'Other'
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setAnswers({...answers, goal})}
                    className={`w-full p-4 rounded-lg border-2 transition text-left ${
                      answers.goal === goal
                        ? 'border-blue-500 bg-blue-500/20 text-white'
                        : 'border-slate-600 bg-slate-900/50 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Let&apos;s get you set up
              </h2>
              <p className="text-slate-400 mb-8">
                Just a few details to create your account.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={answers.name}
                    onChange={(e) => setAnswers({...answers, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={answers.email}
                    onChange={(e) => setAnswers({...answers, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {promoCode && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm">
                      🎉 You have lifetime free access with code <strong>{promoCode}</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                isStepComplete()
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Start Learning' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <OnboardingContent />
    </Suspense>
  );
}
