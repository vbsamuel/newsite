import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold text-slate-950">We couldn’t find that page.</h1>
        <p className="mt-4 max-w-xl text-slate-600">This publication is organized around thoughtful essays, but the path you followed does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-3xl bg-forest px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
          Return home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
