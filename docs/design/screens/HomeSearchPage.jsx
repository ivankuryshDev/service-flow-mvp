// ServiceFlow — Home / Search screen (project page).
// Composes design-system primitives (window.ServiceFlowDesignSystem_c6741d).
// First customer-facing page: search for a local service, then go to Search Results.
function HomeSearchPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Select, Input, DatePicker, Button } = DS;

  const [svc, setSvc] = React.useState('hair');
  const [loc, setLoc] = React.useState('Brooklyn, NY');
  const [day, setDay] = React.useState('24');

  // Build the Search Results destination, carrying the chosen filters in the query.
  const goResults = (catOverride) => {
    const cat = catOverride || svc;
    const q = new URLSearchParams();
    if (cat) q.set('cat', cat);
    if (loc) q.set('loc', loc);
    if (day) q.set('day', day);
    window.location.href = 'Search Results.html?' + q.toString();
  };

  const days = [
    { weekday: 'TODAY', date: '24', hint: '12 slots' },
    { weekday: 'WED', date: '25', hint: '9 slots' },
    { weekday: 'THU', date: '26', hint: '6 slots' },
    { weekday: 'FRI', date: '27', hint: '4 left' },
    { weekday: 'SAT', date: '28', state: 'soldout' },
    { weekday: 'SUN', date: '29', hint: '7 slots' },
    { weekday: 'MON', date: '30', hint: '11 slots' },
  ];

  const categories = [
    { icon: ScissorsIcon, label: 'Hair & Beauty', count: '320+ pros', cat: 'hair' },
    { icon: SparkleIcon, label: 'Wellness & Spa', count: '180+ pros', cat: 'wellness' },
    { icon: HomeIcon, label: 'Home & Cleaning', count: '240+ pros', cat: 'home' },
    { icon: PawIcon, label: 'Pet Care', count: '95+ pros', cat: 'pets' },
    { icon: WrenchIcon, label: 'Repairs', count: '160+ pros', cat: 'repairs' },
    { icon: CarIcon, label: 'Auto & Detail', count: '70+ pros', cat: 'auto' },
  ];

  const benefits = [
    { icon: BoltIcon, title: 'Instant confirmation', text: 'See live openings and lock in a time on the spot — no phone tag, no waiting.' },
    { icon: ShieldIcon, title: 'Trusted local pros', text: 'Every provider is reviewed and rated by neighbors near you. No guesswork.' },
    { icon: SwapIcon, title: 'Free to change', text: 'Plans shift. Reschedule or cancel free up to 24 hours before your booking.' },
  ];

  return (
    <div>
      <TopNav location={loc} activeLink="explore"
        links={[{ label: 'Explore', value: 'explore' }, { label: 'Bookings', value: 'bookings' }, { label: 'Favorites', value: 'favorites' }]}
        ctaLabel="List your service" />

      {/* ---------- HERO + BOOKING PANEL ---------- */}
      <section className="hero">
        <div className="sun" aria-hidden="true" />
        <div className="container">
          <span className="eyebrow"><span className="pulse" />Real-time openings near you</span>
          <h1>Book local services<br /><em>in seconds.</em></h1>
          <p>Find a trusted local pro, see live availability, and lock in a time that works for you — all in one sunny place.</p>

          <div className="bookpanel">
            <div className="bookgrid">
              <Select label="What do you need?" value={svc} onChange={setSvc} size="lg"
                options={[
                  { label: 'Hair & Beauty', value: 'hair' },
                  { label: 'Wellness & Spa', value: 'wellness' },
                  { label: 'Home & Cleaning', value: 'home' },
                  { label: 'Pet Care', value: 'pets' },
                  { label: 'Repairs', value: 'repairs' },
                ]} />
              <Input label="Where?" size="lg" value={loc} onChange={(e) => setLoc(e.target.value)}
                icon={<PinIcon />} placeholder="Enter your neighborhood" />
            </div>

            <div className="whenrow">
              <span className="whenlabel">When works for you?</span>
              <DatePicker days={days} value={day} onChange={setDay} />
            </div>

            <div className="ctarow">
              <span className="ctahint">Free to change up to 24 hours before · No booking fees</span>
              <Button size="lg" leadingIcon={<SearchGlyph />} disabled={!loc.trim()} onClick={() => goResults()}>Find services</Button>
            </div>
          </div>

          <div className="trustline">
            <Stars /> <strong>4.9</strong> average from <strong>28,000+</strong> bookings this month
          </div>
        </div>
      </section>

      {/* ---------- POPULAR CATEGORIES ---------- */}
      <section className="container block">
        <div className="blockhead">
          <div>
            <h2 className="secTitle">Popular categories</h2>
            <p className="secSub">Browse what neighbors are booking most right now.</p>
          </div>
          <a className="seeall" href="#" onClick={(e) => { e.preventDefault(); goResults(); }}>See all categories →</a>
        </div>
        <div className="catgrid">
          {categories.map((c) => <CatTile key={c.label} {...c} onSelect={() => goResults(c.cat)} />)}
        </div>
      </section>

      {/* ---------- TRUST / BENEFITS ---------- */}
      <section className="warmband">
        <div className="container block">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 8px' }}>
            <span className="eyebrow eyebrow-center"><span className="pulse" />Why ServiceFlow</span>
            <h2 className="secTitle" style={{ marginTop: 14 }}>Booking that feels like sunshine</h2>
          </div>
          <div className="bengrid">
            {benefits.map((b) => (
              <div className="bencard" key={b.title}>
                <span className="benicon"><b.icon /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOOTER CTA ---------- */}
      <section className="container" style={{ padding: '20px 24px 72px' }}>
        <div className="finalcta">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink-900)', margin: '0 0 8px' }}>Run a local service?</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-600)', margin: 0, maxWidth: 440 }}>List your openings on ServiceFlow and fill your calendar with customers nearby.</p>
          </div>
          <Button variant="secondary" size="lg">List your service</Button>
        </div>
      </section>
    </div>
  );
}

function CatTile({ icon: Icon, label, count, onSelect }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button className="cattile" onClick={onSelect} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ transform: hover ? 'translateY(-4px)' : 'none', boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)', borderColor: hover ? 'var(--yellow-300)' : 'var(--border-card)' }}>
      <span className="caticon"><Icon /></span>
      <span className="catlabel">{label}</span>
      <span className="catcount">{count}</span>
    </button>
  );
}

/* ---- inline line icons (Lucide-style, ~2px rounded) ---- */
const I = (paths, fill) => (props) => (
  <svg width={props && props.size || 24} height={props && props.size || 24} viewBox="0 0 24 24" fill={fill || 'none'}
    stroke={fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const PinIcon = I(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></>);
const SearchGlyph = I(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>);
const ScissorsIcon = I(<><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" /></>);
const SparkleIcon = I(<><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" /></>);
const HomeIcon = I(<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>);
const PawIcon = I(<><circle cx="6" cy="11" r="2" /><circle cx="10.5" cy="6.5" r="2" /><circle cx="15" cy="6.5" r="2" /><circle cx="18" cy="11" r="2" /><path d="M8.5 14.5c1-1.5 2-2.5 3.5-2.5s2.5 1 3.5 2.5 1.7 2.6.8 3.8c-.8 1-2.1.4-3.3.2-.6-.1-1.3-.1-2 0-1.2.2-2.5.8-3.3-.2-.9-1.2-.2-2.3.8-3.8z" /></>);
const WrenchIcon = I(<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-.7-.7-2.5z" />);
const CarIcon = I(<><path d="M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5" /><path d="M3 13h18v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1z" /><circle cx="7" cy="15.5" r="0.6" /><circle cx="17" cy="15.5" r="0.6" /></>);
const BoltIcon = I(<path d="M13 2L4 14h7l-1 8 9-12h-7z" />);
const ShieldIcon = I(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>);
const SwapIcon = I(<><path d="M17 4l3 3-3 3" /><path d="M20 7H8a4 4 0 00-4 4" /><path d="M7 20l-3-3 3-3" /><path d="M4 17h12a4 4 0 004-4" /></>);
const Stars = () => (
  <span style={{ display: 'inline-flex', gap: 2 }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="var(--accent-strong)"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 7.1-1.01z" /></svg>
    ))}
  </span>
);

window.HomeSearchPage = HomeSearchPage;
