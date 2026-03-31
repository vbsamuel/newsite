import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Submit an inquiry for collaboration, speaking, or research engagement.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <section className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr] lg:items-start">
          <div className="space-y-6 rounded-[2.5rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
            <h1 className="text-4xl font-semibold text-slate-950">Connect on research, architecture, and strategic writing.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Use the form to initiate a conversation about collaboration, speaking engagements, or practice-focused research partnerships.
            </p>
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                Email: <a href={`mailto:${site.email}`} className="font-semibold text-forest">{site.email}</a>
              </p>
              <p>LinkedIn: <a href={site.social.linkedin} className="font-semibold text-forest" target="_blank" rel="noreferrer">{site.social.linkedin}</a></p>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
