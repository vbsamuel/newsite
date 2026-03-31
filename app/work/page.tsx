import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'Work',
  description: 'Curated work and research themes for architecture-driven engineering practice.',
};

const workItems = [
  {
    title: 'Governance-aware model pipelines',
    summary:
      'A research track for managing model lifecycle around observability, risk controls, and efficient collaboration between data science and platform teams.',
  },
  {
    title: 'Systems thinking for platform leadership',
    summary:
      'A body of writing that connects technical decision frameworks to team structure, delivery strategy, and architectural clarity.',
  },
  {
    title: 'Infrastructure for adaptive operations',
    summary:
      'Practice notes on designing systems that balance resilience, cost sensitivity, and continuous iteration in complex environments.',
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Work & research</p>
            <h1 className="text-4xl font-semibold text-slate-950">Curated themes and major work areas.</h1>
            <p className="text-lg leading-8 text-slate-600">
              A deliberate showcase of research directions, architectural inquiry, and technical storytelling beyond resume-style detail.
            </p>
          </div>
        </section>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {workItems.map((item) => (
            <article key={item.title} className="rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(224,235,242,0.92),rgba(250,245,236,0.9))] p-10 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-950">Major research directions</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Design inquiry</p>
              <p className="mt-4 text-slate-700 leading-7">
                Applying systems-level thinking to architecture decisions so engineering teams can move with intention while preserving operational composability.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Research cadence</p>
              <p className="mt-4 text-slate-700 leading-7">
                Framing technical research as a sustained practice grounded in evidence, experimentation, and the practical constraints of enterprise environments.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
