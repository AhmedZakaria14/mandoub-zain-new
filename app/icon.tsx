import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

export const runtime = 'nodejs';
export const alt = 'شعار زين 5G والألياف البصرية';
export const size = { width: 96, height: 96 };
export const contentType = 'image/png';

export default async function Icon() {
  // Convert the exact header logo to a square PNG. Unlike ImageResponse,
  // sharp supports WebP as a source during Next.js prerendering.
  const logo = await readFile(
    join(process.cwd(), 'public', 'images', 'zain-5g-logo.webp'),
  );

  const png = await sharp(logo)
    .resize(size.width, size.height, {
      fit: 'contain',
      background: '#ffffff',
    })
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
