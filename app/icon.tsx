import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const alt = 'شعار زين 5G والألياف البصرية';
export const size = { width: 96, height: 96 };
export const contentType = 'image/png';

export default async function Icon() {
  // Reuse the exact logo displayed in the website header.
  const logo = await readFile(
    join(process.cwd(), 'public', 'images', 'zain-5g-logo.webp'),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`data:image/webp;base64,${logo.toString('base64')}`}
          alt={alt}
          width="92"
          height="92"
          style={{ objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size },
  );
}
