import ScrollReveal from "./ScrollReveal";

export default function HeyGenDemo() {
  return (
    <section className="py-24 sm:py-32 bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video mockup */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Video card */}
              <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video shadow-2xl">
                {/* Gradient placeholder for video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-steel/40" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                    <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  0:47
                </div>

                {/* HeyGen badge */}
                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                  AI Avatar Video
                </div>
              </div>

              {/* Platform badges */}
              <div className="flex items-center gap-3 mt-4 justify-center">
                {["Reels", "Shorts", "TikTok", "LinkedIn"].map((platform) => (
                  <span
                    key={platform}
                    className="text-[10px] tracking-wider uppercase text-gray-400 bg-white/5 border border-white/10 px-3 py-1"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-steel/20 text-steel-light text-xs font-semibold tracking-wider uppercase mb-6">
              Premium Feature
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              AI Avatar
              <br />
              <span className="text-steel-light">Video Marketing</span>
            </h2>
            <div className="h-1 w-16 bg-steel mt-6 mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Photorealistic AI avatar videos featuring your likeness and
              voice — professionally scripted, produced monthly, and
              ready to post across all platforms. No filming required.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Photorealistic AI avatar trained on your likeness",
                "AI-cloned voice matching your natural tone",
                "Monthly professionally written scripts",
                "Platform-ready for Reels, Shorts, TikTok & LinkedIn",
                "Product spotlights and industry updates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <svg className="h-5 w-5 text-steel-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
