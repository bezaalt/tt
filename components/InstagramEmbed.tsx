'use client';

import { useEffect } from 'react';

/**
 * Instagram only offers official embed for individual posts/reels.
 * For a live feed grid, use a third-party like SnapWidget/LightWidget.
 * Drop their provided <script> + <iframe> code into the return below.
 */
export default function InstagramEmbed() {
  useEffect(() => {
    // If using official Instagram embeds for a single post, you can load their script here.
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://www.instagram.com/embed.js';
    // document.body.appendChild(script);
    // return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
      <p className="text-sm text-gray-400 mb-3">Live Instagram Feed</p>
      <div className="aspect-[16/9] w-full rounded-xl bg-gray-900 flex items-center justify-center text-gray-500">
        {/* Replace this with an embed snippet from SnapWidget/LightWidget */}
        <span>@sharkwraps_ feed will render here</span>
      </div>
    </div>
  );
}
