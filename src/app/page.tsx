export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-bold text-primary-600">Prestige Portfolios</a>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-600 hover:text-primary-600 transition">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 transition">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition">Reviews</a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition">Contact</a>
          </nav>
          <a href="#contact" className="bg-primary-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition">Get Started</a>
        </div>
      </header>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video src="/hero.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">Your Career, Beautifully Presented</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">Professional model portfolios, comp cards, and digital CVs that get you noticed by agencies and casting directors.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#services" className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition">Our Services</a>
            <a href="#contact" className="bg-white/20 backdrop-blur text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/30 transition border border-white/30">Book a Consultation</a>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Portfolio Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Everything you need to launch or elevate your modeling career.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "/service-1.jpg", title: "Digital Portfolio", desc: "A stunning online portfolio with your best shots, measurements, experience, and direct booking capability." },
              { img: "/service-2.jpg", title: "Comp Cards", desc: "Industry-standard composite cards printed on premium stock and available as digital downloads for submissions." },
              { img: "/service-3.jpg", title: "Professional Headshots", desc: "Studio headshots with expert lighting, retouching, and multiple looks to showcase your versatility." },
              { img: "/service-4.jpg", title: "Video Reels", desc: "30-60 second video introductions and runway reels edited to highlight your movement and personality." },
              { img: "/service-5.jpg", title: "Social Media Kits", desc: "Curated content packages for Instagram and TikTok that build your personal brand and attract followers." },
              { img: "/service-6.jpg", title: "Agency Submission Packages", desc: "Complete submission-ready packages formatted to the requirements of top modeling agencies worldwide." },
            ].map((s, i) => (
              <div key={i} className="group bg-primary-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">About Prestige Portfolios</h2>
            <p className="text-gray-700 text-lg mb-6">We started Prestige because too many talented models were held back by poor presentation. Your portfolio should be as impressive as you are.</p>
            <p className="text-gray-700 text-lg mb-8">Our team includes fashion photographers, graphic designers, and former agency bookers who know exactly what casting directors look for.</p>
            <div className="flex gap-8">
              <div><p className="text-3xl font-bold text-primary-600">3K+</p><p className="text-gray-600">Portfolios Created</p></div>
              <div><p className="text-3xl font-bold text-primary-600">500+</p><p className="text-gray-600">Agency Placements</p></div>
              <div><p className="text-3xl font-bold text-primary-600">4.9</p><p className="text-gray-600">Client Rating</p></div>
            </div>
          </div>
          <img src="/about.jpg" alt="About Prestige Portfolios" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h3 className="font-display text-3xl font-bold text-gray-900 mb-10 text-center">Meet the Creative Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "/team-1.jpg", name: "Isabella Cruz", role: "Creative Director" },
              { img: "/team-2.jpg", name: "Theo Ashford", role: "Lead Photographer" },
              { img: "/team-3.jpg", name: "Maya Lin", role: "Digital Strategist" },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <img src={m.img} alt={m.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="font-display text-xl font-bold text-gray-900">{m.name}</h4>
                <p className="text-primary-600">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-16 text-center">Model Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Prestige built my portfolio and within two weeks I was signed by three agencies. The quality speaks for itself.", name: "Ava J.", role: "Fashion Model" },
              { quote: "My old comp cards were embarrassing. The ones Prestige made are gorgeous and I immediately started booking more.", name: "Damien R.", role: "Commercial Model" },
              { quote: "The social media kit transformed my Instagram. I went from 2K to 15K followers in three months.", name: "Sophie T.", role: "Influencer Model" },
            ].map((t, i) => (
              <div key={i} className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>)}</div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Do I need professional photos to start?", a: "No. We offer photography as part of our packages, or you can bring existing professional images for us to work with." },
              { q: "How quickly can I get my portfolio?", a: "Standard turnaround is 5-7 business days. Rush delivery is available for an additional fee." },
              { q: "Do you work with new models?", a: "Absolutely. We specialize in helping aspiring models create their first professional portfolio." },
              { q: "Can I update my portfolio later?", a: "Yes. All digital portfolios include 6 months of free updates. Extended maintenance plans are available." },
              { q: "Do you ship comp cards internationally?", a: "Yes. We ship printed materials worldwide with tracking." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl p-6 border border-primary-100">
                <summary className="cursor-pointer font-bold text-gray-900 flex justify-between items-center">
                  {item.q}
                  <svg className="w-5 h-5 text-primary-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Start Your Portfolio</h2>
              <p className="text-gray-600 text-lg mb-8">Tell us about your modeling goals and we will recommend the perfect package for you.</p>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>45 Fashion Ave, Studio 12</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>(555) 555-0045</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>hello@prestigeportfolios.com</p>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none" placeholder="Your message..." />
              </div>
              <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-full font-medium hover:bg-primary-600 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">Prestige Portfolios</h3>
              <p className="text-gray-400">Professional model portfolio, comp card, and digital CV services helping models get noticed by top agencies.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition">Services</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 10am-7pm</p>
              <p className="text-gray-400">Sat: 10am-4pm</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Prestige Portfolios. A Tideline demo.</p>
            <p className="mt-1">Designed by <a href="https://tideline.torreypines.io" className="text-gray-400 hover:text-white transition">Tideline</a> &mdash; AI-powered web design</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
