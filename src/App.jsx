import React, { useState } from 'react';

// Helper component for the course timeline section (3-Day teaser styling)
const CourseDay = ({ day, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-2xl border-2 border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
        <div className="text-3xl font-bold text-emerald-400 mb-3">Day {day}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
    </div>
);

// Simple brand logo component (inline SVG + wordmark)
const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="drop-shadow">
      <defs>
        <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#lg)" opacity="0.2" />
      <path d="M18 44 L32 16 L46 44" stroke="url(#lg)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="32" cy="32" r="6" fill="url(#lg)" />
    </svg>
    <span className="font-extrabold tracking-tight text-white text-xl">AIsikau</span>
  </div>
);

// Full-screen celebration overlay (no falling confetti, more focused + personalized)
const Celebration = ({ name, role }) => {
  const roleKey = (role || '').toLowerCase();
  const messages = {
    entrepreneur: "Imagine delegating research, outreach, and reporting to agents while you focus on strategy.",
    learner: "In five days you’ll think like an AI operator — frameworks first, tools second.",
    student: "You’ll be years ahead of the syllabus with operator-grade thinking.",
    artist: "Let agents handle versions, references, and publishing so you can create more.",
    engineer: "Blueprints for orchestrating agents without changing your stack.",
    other: "This is about leverage — tailor it to your world.",
  };
  const personalized = messages[roleKey] || messages.other;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-cyan-900/20 backdrop-blur-sm" />
      <div className="relative w-full max-w-3xl mx-auto text-center px-6">
        <div className="relative rounded-3xl border border-white/10 bg-black/70 p-10 shadow-2xl overflow-hidden">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl" aria-hidden="true" />
          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-white shadow-lg">
            <div className="absolute -inset-2 rounded-full animate-[pulseRing_2s_ease-out_infinite]" style={{ boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.35)' }} />
            <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="relative text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-300">
              You’re in{name ? `, ${name}` : ''}!
            </span>
          </h2>
          <p className="relative mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
            Your seat for the <span className="text-white font-semibold">Free 5‑Day AI Teaser</span> is confirmed. Check your email for access and your pre‑session brief.
          </p>
          <div className="relative mt-5 text-base text-gray-300 max-w-2xl mx-auto">
            {personalized}
          </div>
          <div className="relative mt-8 flex items-center justify-center gap-3">
            <a href="#top" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-700 transition">
              Back to Top
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.35); }
          70% { box-shadow: 0 0 0 24px rgba(168, 85, 247, 0); }
          100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
        }
      `}</style>
    </div>
  );
};

// Icon for the FAQ toggle
const ChevronDownIcon = ({ open }) => (
    <svg className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

// FAQ Item Component
const FAQItem = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-gray-700 py-6">
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-semibold text-white">{q}</h3>
                <ChevronDownIcon open={open} />
            </button>
            {open && (
                <div className="mt-4 text-gray-300">
                    <p>{a}</p>
                </div>
            )}
        </div>
    );
};

// FAQ Section Component
const FAQ = () => (
    <section id="faq" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Your Questions, Answered.
            </h2>
            <FAQItem
                q="Is this really 100% free?"
                a="Yes — the 5-Day Teaser is free. You'll get live sessions, frameworks, and demos designed to help you think like an operator."
            />
            <FAQItem
                q="Will we actually build an AI agent in this challenge?"
                a="No — you will learn, not build. We focus on the strategic 'why' and 'how' with live teardowns, so you leave with clarity and a blueprint."
            />
            <FAQItem
                q="What if I miss a day of the live challenge?"
                a="Each session is available for 24 hours as a replay to keep momentum for the cohort."
            />
            <FAQItem
                q="What happens after the 5 days?"
                a="You'll leave with an operator's blueprint and clarity on next steps. You'll also receive an optional invite to continue into the full program."
            />
        </div>
    </section>
);

// Registration Form Section Component
const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [otherDetail, setOtherDetail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const roles = ['Entrepreneur', 'Learner', 'Student', 'Artist', 'Engineer', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const isOtherOk = role !== 'other' || (role === 'other' && otherDetail.trim().length > 1);
        if (name && email.includes('@') && role && isOtherOk) {
            setLoading(true);
            setErrorMsg('');
            setTimeout(() => {
              setSubmitted(true);
              setLoading(false);
            }, 900);
        } else {
            setErrorMsg('Please fill your name, email, and select how you define yourself.');
            setTimeout(() => setErrorMsg(''), 3000);
        }
    };

    return (
        <section id="register" className="relative overflow-hidden py-20 px-6">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Get the 5-Day Advantage.</h2>
              <p className="text-lg sm:text-xl text-emerald-100/90 mb-2">In one week you’ll think like an AI operator — frameworks first, tools second.</p>
              <p className="text-sm text-emerald-200/90">No box, no fuss — just enter your details below and you’re in.</p>
            </div>
            {submitted ? (
              <Celebration name={name} role={role} />
            ) : (
              <form onSubmit={handleSubmit} className="p-0 text-left">
                {/* Name */}
                <div className="transition-all duration-500 mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">👤</span>
                    <input
                      type="text"
                      placeholder="e.g. Alex Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-800/80 text-white pl-10 p-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="transition-all duration-500 mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">✉️</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-800/80 text-white pl-10 p-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>
                {/* Role */}
                <div className="transition-all duration-500 mb-6">
                  <label className="block mb-3 text-sm font-medium text-gray-300">How do you define yourself?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {roles.map((r) => {
                      const value = r.toLowerCase();
                      const selected = role === value;
                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(value)}
                          aria-pressed={selected}
                          className={`p-3 rounded-lg border text-center font-medium transition-all duration-200 ${selected ? 'bg-emerald-600 border-emerald-500 text-white shadow' : 'bg-gray-800/80 border-gray-700 hover:border-emerald-500 text-gray-200'}`}
                        >
                          {r}
                        </button>
                      );
                    })}
                  </div>
                  {role === 'other' && (
                    <div className="mt-3">
                      <label className="block mb-2 text-xs font-medium text-gray-400">Tell us a bit more</label>
                      <input
                        type="text"
                        value={otherDetail}
                        onChange={(e) => setOtherDetail(e.target.value)}
                        placeholder="e.g. Product Manager, Researcher, etc."
                        className="w-full bg-gray-800/80 text-white p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
                      />
                    </div>
                  )}
                </div>
                <div className="transition-all duration-500">
                  <button type="submit" disabled={loading} className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-10 py-4 text-xl font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed">
                    <span className="absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition" />
                    {loading ? (
                      <span className="relative inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                    ) : (
                      <span className="relative">🚀 JOIN THE 5-DAY TEASER (FREE)</span>
                    )}
                    {!loading && <span className="relative inline-flex h-5 w-5 items-center justify-center">→</span>}
                  </button>
                  <p className="mt-4 text-sm text-emerald-200 text-center">Next cohort begins Monday • Limited seats</p>
                  <p className="mt-1 text-xs text-gray-400 text-center">By joining, you agree to receive session reminders. Unsubscribe anytime.</p>
                  {errorMsg && <p className="mt-3 text-sm text-red-400 text-center" role="alert" aria-live="polite">{errorMsg}</p>}
                </div>
              </form>
            )}
          </div>
            {/* Spotlight glow behind form to draw attention */}
            <div className="pointer-events-none absolute right-[-10vw] md:right-[2%] top-1/2 -translate-y-1/2 w-[70vw] max-w-[780px] h-[70vw] max-h-[780px] bg-emerald-500/14 rounded-full blur-3xl" />
            {/* Light network background for the registration section */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full opacity-12"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="gr" x1="0" x2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <g className="network-lines" stroke="url(#gr)" strokeWidth="1" fill="none">
                <line x1="140" y1="120" x2="500" y2="200" className="line l1" />
                <line x1="500" y1="200" x2="880" y2="160" className="line l2" />
                <line x1="240" y1="420" x2="560" y2="340" className="line l3" />
                <line x1="560" y1="340" x2="940" y2="380" className="line l4" />
              </g>
              <g className="network-nodes" fill="url(#gr)">
                <circle cx="140" cy="120" r="4" className="node n1" />
                <circle cx="500" cy="200" r="5" className="node n2" />
                <circle cx="880" cy="160" r="4" className="node n3" />
                <circle cx="240" cy="420" r="4" className="node n4" />
                <circle cx="560" cy="340" r="5" className="node n5" />
                <circle cx="940" cy="380" r="4" className="node n6" />
              </g>
            </svg>
            <style>{`
              .network-lines .line { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: drawReg 9s linear infinite; opacity: .35; }
              .network-lines .l2 { animation-delay: 1s; }
              .network-lines .l3 { animation-delay: 2s; }
              .network-lines .l4 { animation-delay: 3s; }
              @keyframes drawReg { 0%{stroke-dashoffset:2000;opacity:0;} 35%{stroke-dashoffset:1000;opacity:.5;} 75%{stroke-dashoffset:400;opacity:.3;} 100%{stroke-dashoffset:2000;opacity:.2;} }
              .network-nodes .node { transform-origin:center; animation: pulseReg 3.8s ease-in-out infinite; opacity:.85; }
              .network-nodes .n2 { animation-delay:.2s; }
              .network-nodes .n3 { animation-delay:.4s; }
              .network-nodes .n4 { animation-delay:.6s; }
              .network-nodes .n5 { animation-delay:.8s; }
              .network-nodes .n6 { animation-delay:1s; }
              @keyframes pulseReg { 0%{transform:scale(1);opacity:.85;} 50%{transform:scale(1.3);opacity:.5;} 100%{transform:scale(1);opacity:.85;} }
              @media (prefers-reduced-motion: reduce) { .network-lines .line, .network-nodes .node { animation:none; } }
            `}</style>
        </section>
    );
};


export default function App() {
  // Using App as the main component for Canvas compatibility
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white font-sans" id="top">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#mission" className="hover:text-white">5-Day Teaser</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
             <a href="#register" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold shadow">Join Free</a>
          </nav>
        </div>
      </header>
      {/* Hero Section with network animation background */}
      <section className="relative overflow-hidden text-center px-6 py-20 max-w-4xl mx-auto">
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <g className="network-lines" stroke="url(#g1)" strokeWidth="1" fill="none">
            <line x1="120" y1="80" x2="420" y2="160" className="line l1" />
            <line x1="420" y1="160" x2="760" y2="120" className="line l2" />
            <line x1="760" y1="120" x2="980" y2="220" className="line l3" />
            <line x1="200" y1="360" x2="480" y2="300" className="line l4" />
            <line x1="480" y1="300" x2="840" y2="360" className="line l5" />
            <line x1="840" y1="360" x2="1080" y2="320" className="line l6" />
            <line x1="60" y1="240" x2="260" y2="120" className="line l7" />
            <line x1="260" y1="120" x2="480" y2="60" className="line l8" />
          </g>
          <g className="network-nodes" fill="url(#g1)">
            <circle cx="120" cy="80" r="4" className="node n1" />
            <circle cx="420" cy="160" r="5" className="node n2" />
            <circle cx="760" cy="120" r="4" className="node n3" />
            <circle cx="980" cy="220" r="6" className="node n4" />
            <circle cx="200" cy="360" r="4" className="node n5" />
            <circle cx="480" cy="300" r="5" className="node n6" />
            <circle cx="840" cy="360" r="4" className="node n7" />
            <circle cx="1080" cy="320" r="5" className="node n8" />
            <circle cx="260" cy="120" r="4" className="node n9" />
            <circle cx="480" cy="60" r="5" className="node n10" />
          </g>
        </svg>

        <style>{`
          .network-lines .line { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: draw 8s linear infinite; opacity: .6; }
          .network-lines .l2 { animation-delay: 1s; }
          .network-lines .l3 { animation-delay: 2s; }
          .network-lines .l4 { animation-delay: .5s; }
          .network-lines .l5 { animation-delay: 1.5s; }
          .network-lines .l6 { animation-delay: 2.5s; }
          .network-lines .l7 { animation-delay: .2s; }
          .network-lines .l8 { animation-delay: .8s; }
          @keyframes draw { 0%{stroke-dashoffset:2000;opacity:0;} 30%{stroke-dashoffset:1000;opacity:.75;} 70%{stroke-dashoffset:400;opacity:.45;} 100%{stroke-dashoffset:2000;opacity:.3;} }
          .network-nodes .node { transform-origin:center; animation: pulse 3.6s ease-in-out infinite; opacity:.95; }
          .network-nodes .n2 { animation-delay:.2s; }
          .network-nodes .n3 { animation-delay:.4s; }
          .network-nodes .n4 { animation-delay:.6s; }
          .network-nodes .n5 { animation-delay:.8s; }
          .network-nodes .n6 { animation-delay:1s; }
          .network-nodes .n7 { animation-delay:1.2s; }
          .network-nodes .n8 { animation-delay:1.4s; }
          .network-nodes .n9 { animation-delay:1.6s; }
          .network-nodes .n10 { animation-delay:1.8s; }
          @keyframes pulse { 0%{transform:scale(1);opacity:.95;} 50%{transform:scale(1.5);opacity:.6;} 100%{transform:scale(1);opacity:.95;} }
          @media (prefers-reduced-motion: reduce) { .network-lines .line, .network-nodes .node { animation:none; } }
        `}</style>

        <h1 className="relative z-10 text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
          In 5 Days, Learn To Command An AI Workforce — Not Just Prompt It.
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Free 5-Day AI Teaser. Daily live breakdowns, frameworks, and real demos. You will <span className="font-semibold text-white">learn</span> how operators think and architect — no building required.
        </p>
        <a href="#register" className="relative z-10 inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg transition transform hover:scale-105">
          🚀 Join the Free 5-Day Teaser
        </a>
         <p className="relative z-10 mt-4 text-sm text-gray-400">100% Free • No Coding • Seats Limited</p>
      </section>

      
      <section className="relative overflow-hidden bg-gray-900/40 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="pr-8">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Learn The Operator Playbook In 5 Days.</h2>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start"><span className="text-emerald-400 text-2xl mr-3 mt-1">›</span><span><strong>From Prompting to Command:</strong> The mental models that turn one-line prompts into multi-step autonomous missions.</span></li>
              <li className="flex items-start"><span className="text-emerald-400 text-2xl mr-3 mt-1">›</span><span><strong>Operator Frameworks, Not Hacks:</strong> Reusable blueprints for research, content, outreach, and simple automation — without touching code.</span></li>
              <li className="flex items-start"><span className="text-emerald-400 text-2xl mr-3 mt-1">›</span><span><strong>See It, Then Do It:</strong> Daily live teardowns and debriefs. Learn the “why” behind the system so you can apply it in your context.</span></li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">The Teaser Is For You If You're...</h3>
            <ul className="space-y-4">
                <li className="flex"><span className="text-xl mr-4">🎓</span><div><strong className="text-emerald-300">The Ambitious Student</strong><p className="text-gray-400">Who wants skills 5 years ahead of the curriculum.</p></div></li>
                <li className="flex"><span className="text-xl mr-4">🎨</span><div><strong className="text-emerald-300">The Overwhelmed Creator</strong><p className="text-gray-400">Ready to multiply your output without the burnout.</p></div></li>
                <li className="flex"><span className="text-xl mr-4">🚀</span><div><strong className="text-emerald-300">The Savvy Entrepreneur</strong><p className="text-gray-400">Who wants to build a business with unparalleled leverage.</p></div></li>
                <li className="flex"><span className="text-xl mr-4">🧠</span><div><strong className="text-emerald-300">The Forward-Thinking Pro</strong><p className="text-gray-400">Who refuses to become obsolete and aims to be indispensable.</p></div></li>
            </ul>
          </div>
        </div>
        {/* Light network background for this section */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full opacity-15"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g2" x1="0" x2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <g className="network-lines" stroke="url(#g2)" strokeWidth="1" fill="none">
            <line x1="180" y1="120" x2="520" y2="180" className="line l1" />
            <line x1="520" y1="180" x2="860" y2="140" className="line l2" />
            <line x1="240" y1="420" x2="560" y2="340" className="line l3" />
            <line x1="560" y1="340" x2="920" y2="380" className="line l4" />
          </g>
          <g className="network-nodes" fill="url(#g2)">
            <circle cx="180" cy="120" r="4" className="node n1" />
            <circle cx="520" cy="180" r="5" className="node n2" />
            <circle cx="860" cy="140" r="4" className="node n3" />
            <circle cx="240" cy="420" r="4" className="node n4" />
            <circle cx="560" cy="340" r="5" className="node n5" />
            <circle cx="920" cy="380" r="4" className="node n6" />
          </g>
        </svg>
        <style>{`
          .network-lines .line { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: draw2 9s linear infinite; opacity: .45; }
          .network-lines .l2 { animation-delay: 1s; }
          .network-lines .l3 { animation-delay: 2s; }
          .network-lines .l4 { animation-delay: 3s; }
          @keyframes draw2 { 0%{stroke-dashoffset:2000;opacity:0;} 35%{stroke-dashoffset:1000;opacity:.6;} 75%{stroke-dashoffset:400;opacity:.35;} 100%{stroke-dashoffset:2000;opacity:.25;} }
          .network-nodes .node { transform-origin:center; animation: pulse2 3.8s ease-in-out infinite; opacity:.9; }
          .network-nodes .n2 { animation-delay:.2s; }
          .network-nodes .n3 { animation-delay:.4s; }
          .network-nodes .n4 { animation-delay:.6s; }
          .network-nodes .n5 { animation-delay:.8s; }
          .network-nodes .n6 { animation-delay:1s; }
          @keyframes pulse2 { 0%{transform:scale(1);opacity:.9;} 50%{transform:scale(1.35);opacity:.5;} 100%{transform:scale(1);opacity:.9;} }
          @media (prefers-reduced-motion: reduce) { .network-lines .line, .network-nodes .node { animation:none; } }
        `}</style>
      </section>

      {/* 5-Day Mission Briefing (with blurred gradient background) */}
      <section id="mission" className="relative overflow-hidden py-20 text-white px-4 sm:px-6 lg:px-8">
        {/* Blurred gradient background specific to this section */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-[44rem] w-[44rem] bg-gradient-to-br from-emerald-500/20 via-cyan-400/20 to-purple-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-[-12rem] right-[-12rem] h-[36rem] w-[36rem] bg-gradient-to-tr from-purple-500/15 via-emerald-400/15 to-cyan-400/15 blur-3xl rounded-full" />
        </div>
        <div className="container relative z-10 mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Your 5-Day Mission Briefing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                <CourseDay 
                    day="1" 
                    title="The Awakening" 
                    description="Understand the massive shift from simple chatbots to autonomous AI agents. We'll show you what they are and why they matter." 
                />
                <CourseDay 
                    day="2" 
                    title="Meet the Agents" 
                    description="Get hands-on access to powerful AI agents. You'll give your first commands and witness their power live." 
                />
                <CourseDay 
                    day="3" 
                    title="The Creator Moment" 
                    description="The most exciting day. Build and deploy your very own AI agent for a specific task. No coding required!" 
                />
                <CourseDay 
                    day="4" 
                    title="The Automation Engine" 
                    description="Learn to deploy agents to automate tedious parts of your life or business. Reclaim your time." 
                />
                <CourseDay 
                    day="5" 
                    title="The Monetization Blueprint" 
                    description="Discover real-world strategies to earn with your new skills. Plus, a roadmap for what comes next." 
                />
            </div>
      </div>
      </section>

      <Registration />

      <FAQ />

      <section className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Spots Are Filling Fast</h2>
        <p className="mb-6">This is the only free run of the course this year. Miss it, and you’ll be learning from those who took your spot.</p>
         <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition">
          🚀 Claim My Spot — It’s Free
        </button>
      </section>
      </div>
  );
}
