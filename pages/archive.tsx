

import Head from 'next/head';
import Link from 'next/link';
import { ROUTES } from '../next.config';

export default function ArchivePage() {
  return (
    <>
      <Head>
        <title>Testimony Archive – Shahada</title>
      </Head>
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Testimony Archive</h1>
        <p className="mb-6 text-gray-600">
          Explore a growing archive of testimonies shared by Palestinians and allies around the world.
          Only submissions marked for public sharing appear here.
        </p>

        {/* Placeholder for story feed or map */}
        <div className="border rounded p-6 bg-gray-50 text-center text-gray-500">
          Archive feed or interactive map will appear here.
        </div>

        <div className="mt-6">
          <Link href={ROUTES.HOME} className="text-blue-600 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}