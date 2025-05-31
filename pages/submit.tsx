

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ROUTES } from '../lib/constants';

export default function SubmitPage() {
  const [text, setText] = useState('');
  const [mediaType, setMediaType] = useState<'photo' | 'video' | 'audio' | 'text' | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for encrypting and saving the submission locally
    console.log({ mediaType, text });
    alert('Submission saved locally (simulated)');
  };

  return (
    <>
      <Head>
        <title>Submit Testimony – Shahada</title>
      </Head>
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Submit Testimony</h1>
        <p className="mb-4 text-gray-600">Choose how you want to testify:</p>

        <div className="flex gap-4 mb-6">
          {['photo', 'video', 'audio', 'text'].map((type) => (
            <button
              key={type}
              onClick={() => setMediaType(type as any)}
              className={`px-4 py-2 rounded border ${
                mediaType === type ? 'bg-blue-600 text-white' : 'bg-white text-black'
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {mediaType === 'text' && (
          <textarea
            className="w-full p-3 border rounded mb-4"
            rows={6}
            placeholder="Write your testimony here..."
            value={text}
            onChange={handleTextChange}
          />
        )}

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!mediaType || (mediaType === 'text' && !text.trim())}
        >
          Save Submission
        </button>

        <div className="mt-6">
          <Link href={ROUTES.HOME} className="text-blue-600 underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}