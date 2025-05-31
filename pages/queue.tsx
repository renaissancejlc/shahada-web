import { useEffect, useState } from 'react';

type QueuedItem = {
  id: string;
  type: 'photo' | 'audio' | 'video' | 'text';
  status: 'pending' | 'uploading' | 'uploaded' | 'failed';
  contentPreview: string; // could be URL or truncated text
};

export default function QueuePage() {
  const [queue, setQueue] = useState<QueuedItem[]>([]);

  useEffect(() => {
    // TODO: Load from IndexedDB (e.g., using idb or Dexie)
    const sample = [
      {
        id: '1',
        type: 'text' as const,
        status: 'pending' as const,
        contentPreview: 'Life under siege is...',
      },
    ];
    setQueue(sample);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Queue</h1>
      {queue.length === 0 ? (
        <p className="text-gray-600">No pending submissions.</p>
      ) : (
        <ul className="space-y-4">
          {queue.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <p className="font-semibold capitalize">{item.type} testimony</p>
              <p className="text-sm text-gray-500">{item.contentPreview}</p>
              <p className="text-xs mt-1 text-blue-600">Status: {item.status}</p>
              {item.status === 'failed' && (
                <button className="mt-2 text-sm bg-red-500 text-white px-3 py-1 rounded">
                  Retry Upload
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}