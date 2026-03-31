import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { site } from '@/lib/site';

export const metadata = {
  title: 'About',
  description: 'Professional biography and research interests for Amalgus Publication.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <section className="rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">About</p>
            <h1 className="text-4xl font-semibold text-slate-950">Research, architecture, and the craft of deliberate systems design.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              A senior technical author writing for leaders who need clarity in the face of complexity. The work spans enterprise architecture, data systems, machine learning operations, and product research that scales.
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-8 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Focus areas</p>
                <ul className="mt-5 space-y-4 text-slate-700">
                  <li>Systems architecture for high-trust enterprises</li>
                  <li>Research-driven model operations and governance</li>
                  <li>Engineering leadership, team systems, and platform quality</li>
                  <li>Editorial analysis of distributed systems and infrastructure</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Why this platform exists</p>
                <p className="mt-4 text-slate-600">
                  To create a calm, thoughtful space for technical writing that respects deep ideas while maintaining practical relevance for builders and decision makers.
                </p>
              </div>
            </div>
            <div className="space-y-8 text-slate-700">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Professional story</h2>
                <p className="mt-4 leading-8">
                  Experience across distributed systems, infrastructure, and ML platforms has shaped a perspective that values observability, safety, and a human-centered approach to complexity. I write from both technical practice and strategic architecture experience, bridging research intent with execution realities.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Leadership perspective</h2>
                <p className="mt-4 leading-8">
                  The strongest systems are built with thoughtful boundaries, explicit decisions, and a culture that understands the cost of complexity. My writing seeks to make those patterns more visible and more accessible to leaders who are building durable platforms.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Connect</p>
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>
                    GitHub: <a className="font-semibold text-forest" href={site.social.github} target="_blank" rel="noreferrer">{site.social.github}</a>
                  </p>
                  <p>
                    LinkedIn: <a className="font-semibold text-forest" href={site.social.linkedin} target="_blank" rel="noreferrer">{site.social.linkedin}</a>
                  </p>
                  <p>
                    Publications and talks: <a className="font-semibold text-forest" href="/work">Work & research</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
