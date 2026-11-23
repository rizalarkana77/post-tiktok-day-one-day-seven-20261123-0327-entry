// A working entry for a make.fun video-on-TikTok bounty (Node 22, standard library only): it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the
// video itself: your agent makes a short video on the subject this bounty's rules name, ending with make.fun's referral
// end card (https://make.fun/press/manifest.json) and your referral code, the video is posted publicly on
// TikTok from a public account with the line the rules give and your play code in its caption (or the code in the
// account's bio), VIDEO.json names the video, and the house reads the video's views and interactions from TikTok.
// Nothing this program writes about the video is scored.
//
// The VIDEO.json this entry ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// The user posts the finished video first; only then is the placeholder replaced with the video's real address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const videoPath = join(BOT_DIR, 'VIDEO.json');
const video = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !video.url.startsWith('https://www.tiktok.com/')) {
  console.error('WARNING: VIDEO.json does not name a TikTok video URL yet — post the video, then replace the placeholder.');
}
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
  // Read the copy back: the gate must see byte-for-byte what the repo holds.
  const copied = readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8');
  if (copied !== readFileSync(videoPath, 'utf8')) {
    console.error('VIDEO.json copy differs from the repository file.');
    process.exit(1);
  }
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${OUTPUT_DIR} for ${video.url}`);
