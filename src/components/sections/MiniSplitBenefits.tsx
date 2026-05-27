const benefits = [
  {
    n: "01",
    title: "Efficient",
    desc: "Heats and cools only the rooms you use — less energy, better comfort.",
  },
  {
    n: "02",
    title: "Quiet",
    desc: "Whisper-quiet indoors and out. No noisy ductwork hum.",
  },
  {
    n: "03",
    title: "Flexible",
    desc: "Works in bedrooms, home offices, garages, basements, and additions.",
  },
  {
    n: "04",
    title: "No Ductwork",
    desc: "Clean line set install — no major construction, no torn-up walls.",
  },
];

export function MiniSplitBenefits() {
  return (
    <section className="section-y bg-navy text-white">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why a mini split?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Efficient, quiet, and simple to install — often the cleanest
              solution for single-zone comfort without major renovations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {benefits.map((b) => (
              <div key={b.n} className="border-t border-white/10 pt-6">
                <div className="text-[11px] font-bold tracking-[0.18em] text-orange/70">
                  {b.n}
                </div>
                <h3 className="mt-2 text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
