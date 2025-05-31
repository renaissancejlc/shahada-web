// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Shahada</h1>
      <p className="mb-6 text-gray-600">
        Secure, encrypted witness testimony. Offline-first. No identity needed.
      </p>
      <div className="text-glow text-2xl font-bold">
        If you see this styled, Tailwind works 🎉
        </div>
      <Link href="/submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Testimony</Link>
    </main>
  );
}
