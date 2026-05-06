import ScrollReveal from "./ScrollReveal";

export default function EmailCampaignDemo() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-steel/10 text-steel text-xs font-semibold tracking-wider uppercase mb-6">
              Premium Feature
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              Email Campaigns
              <br />
              <span className="text-steel">That Convert</span>
            </h2>
            <div className="h-1 w-16 bg-steel mt-6 mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Automated, branded email campaigns that keep your company
              top-of-mind with prospects and existing clients. Industry updates,
              product spotlights, and seasonal promotions — all on autopilot.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Monthly industry newsletter with your branding",
                "Product spotlight campaigns for new inventory",
                "Automated drip sequences for lead nurturing",
                "Performance analytics and open rate tracking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <svg className="h-5 w-5 text-steel flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Email mockup */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
              {/* Email client header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1.5 text-center">
                  mail.gulfcoastalloys.net
                </div>
              </div>

              {/* Email content */}
              <div className="bg-white rounded overflow-hidden">
                {/* Header bar */}
                <div className="bg-navy px-6 py-4 flex items-center justify-between">
                  <span className="text-white font-bold text-sm">GCA</span>
                  <span className="text-steel-light text-xs">Gulf Coast Alloys</span>
                </div>

                {/* Subject */}
                <div className="px-6 py-4 border-b border-gray-100">
                  <p className="text-xs text-gray-400">From: Gulf Coast Alloys</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    New CuNi Inventory Now Available — Request Pricing
                  </p>
                </div>

                {/* Body preview */}
                <div className="px-6 py-6 space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We&apos;ve just received a new shipment of 90/10 and 70/30
                    CuNi fittings and flanges from our partners at HAE WON and
                    BM MEtal. Competitive pricing available for Q2 projects.
                  </p>
                  <div className="bg-gray-50 p-4 border-l-4 border-steel">
                    <p className="text-xs font-semibold text-navy">Featured Products:</p>
                    <p className="text-xs text-gray-500 mt-1">
                      CuNi 90/10 Flanges &bull; CuNi 70/30 Fittings &bull; Marine Grade Pipe
                    </p>
                  </div>
                  <div className="text-center pt-2">
                    <span className="inline-block bg-steel text-white text-xs font-semibold tracking-wide uppercase px-8 py-3">
                      Request a Quote
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 text-center">
                  <p className="text-[10px] text-gray-400">
                    Gulf Coast Alloys, LLC &bull; Houston, TX &bull; Unsubscribe
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
