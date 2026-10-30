import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Check,
  Clock3,
  Dumbbell,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from 'lucide-react';

type Mode = 'football' | 'cricket';

const business = {
  name: 'Bandel Football Cricket Turf',
  phone: '+91 90737 55619',
  altPhone: '+91 62906 59413',
  whatsapp: '919073755619',
  address: 'Near Oil Mill, Adisaptagram, Krishnapur Chandanpur, Debanandapur, Chinsurah, Bandel, West Bengal 712123, India',
};

const imagePaths = {
  hero: '/images/home/Urban_Turf_Football_and_Cricket_Montage.png',
  football: '/images/football/ChatGPT_Image_Oct_30,_2026,_12_33_51_PM-3.png',
  cricket: '/images/cricket/ChatGPT_Image_Oct_30,_2026,_12_33_55_PM-5.png',
  footballCoaching: '/images/coaching/ChatGPT_Image_Oct_30,_2026,_12_33_53_PM-4.png',
  cricketCoaching: '/images/coaching/ChatGPT_Image_Oct_30,_2026,_12_33_49_PM-2.png',
  tournament: '/images/tournament/ChatGPT_Image_Oct_30,_2026,_12_33_56_PM-6.png',
  concept: '/images/concept/ChatGPT_Image_Oct_30,_2026,_12_33_47_PM-1.png',
};

function whatsappLink(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<Mode>('football');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const jumpTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    ['Is this a regulation-size five-a-side pitch?', 'No. This is a compact 30 × 70 ft mini turf designed for small-sided football, coaching, drills and local activities.'],
    ['How does the cricket run-up gate work?', 'The permanent 10 × 70 ft cricket lane stays fixed. Its sliding gate opens only when the main turf is free, allowing a bowler to use the aligned side as additional run-up space.'],
    ['Can football and extended-run-up cricket happen together?', 'No. The gate remains closed while a football match or other main-turf activity is active.'],
    ['Will coaching schedules and fees be available now?', 'Coaching structure, age groups, timings, coaches and fees are being finalised. WhatsApp us to register your interest for updates.'],
    ['Where is the turf located?', 'Near Oil Mill, Adisaptagram, Krishnapur Chandanpur, Debanandapur, Chinsurah, Bandel, West Bengal 712123.'],
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement"><Sparkles size={15} /> Facility preparation is underway — call or WhatsApp for launch updates.</div>
      <header className="site-header">
        <div className="header-inner">
          <button className="brand-button" onClick={() => jumpTo('top')} aria-label="Back to top">
            <img className="brand-logo" src="/Bandel_Football_Cricket_Turf_Logo.png" alt="Bandel Football Cricket Turf" />
          </button>
          <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
            {['facility', 'services', 'coaching', 'tournament', 'about', 'contact'].map((item) => (
              <button key={item} onClick={() => jumpTo(item)}>{item === 'tournament' ? 'Events' : item[0].toUpperCase() + item.slice(1)}</button>
            ))}
            <a className="nav-whatsapp" href={whatsappLink('Hello Bandel Football Cricket Turf. I would like launch updates.')} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp Us</a>
          </nav>
          <div className="header-actions">
            <a className="mobile-call" href={`tel:${business.phone.replace(/\s/g, '')}`} aria-label="Call Bandel Football Cricket Turf"><Phone size={19} /></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <img className="hero-image" src={imagePaths.hero} alt="Compact local football turf and cricket practice nets at evening with bamboo supports and floodlights" />
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <div className="eyebrow"><span /> Local Football • Cricket • Coaching</div>
            <h1>Play local.<br /><em>Train better.</em><br />Grow together.</h1>
            <p className="hero-copy">A practical community sports space near Oil Mill in Adisaptagram for mini football, permanent cricket-net practice, coaching and local tournaments.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappLink('Hello Bandel Football Cricket Turf. I would like launch updates.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp for updates</a>
              <a className="button button-light" href={`tel:${business.phone.replace(/\s/g, '')}`}><Phone size={18} /> Call now</a>
            </div>
            <div className="hero-chips"><span>30 × 70 ft mini turf</span><span>10 × 70 ft cricket net</span><span>Coaching & tournaments</span></div>
          </div>
          <div className="hero-note">Concept visuals — final appearance may vary.</div>
        </section>

        <section className="intro section-light">
          <div className="page-width intro-grid">
            <div><p className="kicker">A ground with a plan</p><h2>One local ground.<br /><span>More ways to play.</span></h2></div>
            <div className="intro-copy"><p>Bandel Football Cricket Turf is being developed as a compact community sports facility — not a large commercial stadium.</p><p>The aim is simple: give children, young players, local teams and families a clean place to train, play, practise and take part in organised events.</p><button className="text-link" onClick={() => jumpTo('facility')}>See how the ground works <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section className="services section-cream" id="services">
          <div className="page-width"><div className="section-heading"><div><p className="kicker">Built for the neighbourhood</p><h2>Find your way<br /><span>onto the turf.</span></h2></div><p>From first touches to friendly matches, every area is designed around practical local use.</p></div>
            <div className="service-grid">
              <ServiceCard number="01" title="Mini Football Turf" copy="Compact small-sided football, children's sessions, ball-control drills, local games and coaching on a 30 × 70 ft turf." image={imagePaths.football} alt="Players playing football on a compact green turf under evening lights" onClick={() => jumpTo('football')} />
              <ServiceCard number="02" title="Cricket Net Practice" copy="A permanent 10 × 70 ft lane for batting, bowling, beginner sessions and guided practice." image={imagePaths.cricket} alt="Bowler running inside a green cricket net lane at sunset" onClick={() => jumpTo('cricket')} />
              <ServiceCard number="03" title="Coaching" copy="Beginner-friendly football and cricket drills for children, teenagers and developing players." image={imagePaths.footballCoaching} alt="Coach guiding young football players through a cone drill" onClick={() => jumpTo('coaching')} />
              <ServiceCard number="04" title="Matches & Events" copy="Friendly matches, skills events and community tournaments designed to bring local players together." image={imagePaths.tournament} alt="Community football tournament on a local turf with spectators" onClick={() => jumpTo('tournament')} />
            </div>
          </div>
        </section>

        <section className="facility section-dark" id="facility">
          <div className="page-width">
            <div className="section-heading light-heading"><div><p className="kicker">The layout, simply explained</p><h2>One ground.<br /><span>Two playing modes.</span></h2></div><p>The gate changes the way the space is used. The cricket lane itself never moves.</p></div>
            <div className="mode-switcher" role="group" aria-label="Facility mode"><button className={mode === 'football' ? 'active' : ''} onClick={() => setMode('football')}><span className="mode-dot" /> Football mode</button><button className={mode === 'cricket' ? 'active' : ''} onClick={() => setMode('cricket')}><span className="mode-dot" /> Cricket practice mode</button></div>
            <div className="facility-grid"><div className="facility-diagram" aria-label="Concept layout showing main turf, coaching zone and cricket lane">
              <div className={`main-turf ${mode === 'football' ? 'highlighted' : ''}`}><span>30 × 70 ft</span><strong>Mini turf</strong><small>{mode === 'football' ? 'Full turf available' : 'Additional run-up route'}</small></div>
              <div className="coaching-zone"><span>10 × 70 ft</span><strong>Coaching zone</strong></div>
              <div className="cricket-lane"><span>10 × 70 ft</span><strong>Permanent cricket lane</strong><small>Fixed in place</small></div>
              <div className={`sliding-gate ${mode === 'cricket' ? 'open' : ''}`}><span>{mode === 'cricket' ? 'Gate open' : 'Sliding gate closed'}</span></div>
            </div><div className="facility-copy"><span className="status-pill"><span /> {mode === 'football' ? 'Football mode' : 'Cricket practice mode'}</span><h3>{mode === 'football' ? 'Keep the full mini turf in play.' : 'Open the gate only when the turf is free.'}</h3><p>{mode === 'football' ? 'The sliding gate stays closed so the 30 × 70 ft turf can support football matches, coaching and multi-sport play.' : 'A bowler can use the aligned side of the main turf as additional run-up space before entering the permanent cricket lane.'}</p><ul><li><Check size={16} /> {mode === 'football' ? 'Gate closed during football activity' : 'Gate opens sideways for the run-up'}</li><li><Check size={16} /> Permanent cricket lane remains fixed</li><li><Check size={16} /> Football and extended run-up cricket are scheduled separately</li></ul><div className="concept-label">Concept / layout visual — final site arrangement will be checked on location.</div></div></div>
          </div>
        </section>

        <section className="split-section section-light" id="football"><div className="page-width split-grid"><div className="split-image"><img src={imagePaths.football} alt="Football players in a compact local turf under floodlights" loading="lazy" /></div><div className="split-copy"><p className="kicker">01 / Football</p><h2>Compact football<br /><span>in Bandel.</span></h2><p>The 30 × 70 ft turf is designed for compact small-sided football, dribbling, passing, shooting, fitness, children’s sessions and local community games.</p><p className="honesty"><ShieldCheck size={18} /><span><strong>Good to know</strong>This is a mini turf, not a regulation-size five-a-side pitch. Sessions will be organised around the available space.</span></p><button className="text-link" onClick={() => jumpTo('contact')}>Ask about football sessions <ArrowRight size={16} /></button></div></div></section>

        <section className="split-section section-cream" id="cricket"><div className="page-width split-grid reverse"><div className="split-image"><img src={imagePaths.cricket} alt="Cricket bowler and batsman practising inside a permanent green net lane" loading="lazy" /></div><div className="split-copy"><p className="kicker">02 / Cricket</p><h2>Permanent cricket<br /><span>net practice.</span></h2><p>The 10 × 70 ft cricket lane is intended for batting, bowling, line-and-length practice, beginner coaching and repeated skill work.</p><p>When the main turf is not being used for a football match, the sliding gate can open so a bowler can begin the run-up from the aligned side.</p><button className="text-link" onClick={() => jumpTo('contact')}>Ask about cricket practice <ArrowRight size={16} /></button></div></div></section>

        <section className="coaching section-light" id="coaching"><div className="page-width"><div className="section-heading"><div><p className="kicker">Build fundamentals</p><h2>Coaching that starts<br /><span>with the basics.</span></h2></div><p>Schedules, age groups, coaches and fees will be published after final confirmation. Register your interest now.</p></div><div className="coaching-grid"><CoachingCard title="Football coaching" image={imagePaths.footballCoaching} alt="Football coach working with children on a local turf" items={['Ball control', 'Dribbling & passing', 'Shooting & movement', 'Agility & fitness']} /><CoachingCard title="Cricket coaching" image={imagePaths.cricketCoaching} alt="Cricket coach guiding a batsman in a green practice net" items={['Batting fundamentals', 'Bowling control', 'Fielding & catching', 'Net safety']} /></div></div></section>

        <section className="tournament section-dark" id="tournament"><div className="page-width tournament-grid"><div className="tournament-image"><img src={imagePaths.tournament} alt="Community football tournament on a compact turf with spectators" loading="lazy" /><span>Launch concept · date to be announced</span></div><div className="tournament-copy"><p className="kicker">03 / Community events</p><h2>Bandel Turf<br /><span>Champions Cup.</span></h2><p>A planned community-first mini-football event built around participation, local visibility and a strong experience for every registered player.</p><div className="scoreboard"><div><strong>10</strong><span>planned teams</span></div><div><strong>50</strong><span>player places</span></div><div><strong>₹10k</strong><span>proposed prize pool</span></div></div><a className="button button-gold" href={whatsappLink('Hello Bandel Football Cricket Turf. Please update me about the Bandel Turf Champions Cup 2026.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Join the update list</a></div></div></section>

        <section className="about section-cream" id="about"><div className="page-width about-grid"><div><p className="kicker">A local sports community</p><h2>More than a<br /><span>pay-and-play turf.</span></h2><p className="large-copy">The long-term goal is to create a recognisable local sports community through friendly matches, junior activities, coaching sessions, small tournaments and community days.</p><div className="about-points"><span><Users size={18} /> Children & young players</span><span><Dumbbell size={18} /> Practical training</span><span><Trophy size={18} /> Community events</span></div></div><div className="about-image"><img src={imagePaths.concept} alt="Concept visual of a practical local turf layout with cricket nets and bamboo supports" loading="lazy" /><span>Concept visual — final appearance may vary.</span></div></div></section>

        <section className="faq section-light"><div className="page-width faq-grid"><div><p className="kicker">Questions, answered plainly</p><h2>Good sport starts<br /><span>with clarity.</span></h2><p>Have another question? Call or WhatsApp and we’ll share the latest confirmed information.</p><a className="text-link" href={whatsappLink('Hello Bandel Football Cricket Turf. I have a question about the facility.')} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown className={openFaq === index ? 'rotate' : ''} size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="contact section-green" id="contact"><div className="page-width contact-grid"><div className="contact-intro"><img className="contact-logo" src="/Bandel_Football_Cricket_Turf_Logo.png" alt="Bandel Football Cricket Turf" loading="lazy" /><p className="kicker">Come play local</p><h2>Ready to get<br /><span>in the game?</span></h2><p>Tell us whether you’re interested in football, cricket practice, coaching or team events. Enquiries and early updates are open.</p><div className="contact-details"><div><MapPin size={19} /><span>{business.address}</span></div><div><Phone size={19} /><a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a><a href={`tel:${business.altPhone.replace(/\s/g, '')}`}>{business.altPhone}</a></div><div><Clock3 size={19} /><span>Opening details will be announced after final ground and safety checks.</span></div></div></div><form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><p className="form-label">QUICK ENQUIRY</p>{submitted ? <div className="success-state"><Check size={28} /><h3>Thanks for reaching out.</h3><p>Your enquiry is ready. WhatsApp us directly to continue the conversation.</p><a className="button button-dark" href={whatsappLink('Hello Bandel Football Cricket Turf. I would like to make an enquiry.')} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Continue on WhatsApp</a></div> : <><label>Your name<input required name="name" placeholder="Full name" /></label><label>What are you looking for?<select name="interest" defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Football turf</option><option>Cricket net practice</option><option>Football coaching</option><option>Cricket coaching</option><option>Tournament or team event</option></select></label><label>Message<textarea name="message" rows={4} placeholder="Tell us how we can help" /></label><button className="button button-dark" type="submit">Send enquiry <ArrowRight size={18} /></button><p className="form-note">No account needed. We’ll help with confirmed information and next steps.</p></>}</form></div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-grid"><div><img className="footer-logo" src="/Bandel_Football_Cricket_Turf_Logo.png" alt="Bandel Football Cricket Turf" loading="lazy" /><p className="descriptor">Football • Cricket • Coaching • Tournaments</p><p className="footer-line">Real local sports. Practical coaching. Community-first events.</p></div><div><h3>Explore</h3><button onClick={() => jumpTo('facility')}>The facility</button><button onClick={() => jumpTo('services')}>Services</button><button onClick={() => jumpTo('tournament')}>Events</button><button onClick={() => jumpTo('contact')}>Contact</button></div><div><h3>Contact</h3><a href={`tel:${business.phone.replace(/\s/g, '')}`}>{business.phone}</a><a href={`tel:${business.altPhone.replace(/\s/g, '')}`}>{business.altPhone}</a><p>Near Oil Mill, Adisaptagram,<br />Bandel, West Bengal 712123</p></div><div><h3>Stay connected</h3><p className="footer-note">Launch updates, coaching news and community events will be shared here first.</p><div className="socials"><a href={whatsappLink('Hello Bandel Football Cricket Turf.')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a><a href="#contact" aria-label="Instagram"><Instagram size={18} /></a><a href="#contact" aria-label="Facebook"><Facebook size={18} /></a></div></div></div><div className="footer-bottom page-width"><span>© 2026 Bandel Football Cricket Turf</span><span>Opening soon · Enquiries welcome</span></div></footer>
      <div className="mobile-action-bar"><a href={`tel:${business.phone.replace(/\s/g, '')}`}><Phone size={17} /> Call</a><a href={whatsappLink('Hello Bandel Football Cricket Turf. I would like an update.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a><button onClick={() => jumpTo('contact')}><MapPin size={17} /> Location</button></div>
    </div>
  );
}

function ServiceCard({ number, title, copy, image, alt, onClick }: { number: string; title: string; copy: string; image: string; alt: string; onClick: () => void }) {
  return <button className="service-card" onClick={onClick}><div className="card-image"><img src={image} alt={alt} loading="lazy" /><span>{number}</span></div><div className="card-content"><h3>{title}</h3><p>{copy}</p><span className="card-link">Explore <ArrowRight size={15} /></span></div></button>;
}

function CoachingCard({ title, image, alt, items }: { title: string; image: string; alt: string; items: string[] }) {
  return <article className="coaching-card"><img src={image} alt={alt} loading="lazy" /><div><h3>{title}</h3><ul>{items.map((item) => <li key={item}><Check size={15} /> {item}</li>)}</ul><a className="text-link" href={whatsappLink(`Hello Bandel Football Cricket Turf. I would like ${title} updates.`)} target="_blank" rel="noreferrer">Register interest <ArrowRight size={15} /></a></div></article>;
}

export default App;
