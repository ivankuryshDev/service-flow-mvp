// ServiceFlow — Search Results screen (project page).
// Composes design-system primitives (window.ServiceFlowDesignSystem_c6741d).
// Second customer-facing page: compare providers, then go to Service Details & Booking.
function SearchResultsPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Select, EmptyState } = DS;

  // ---- demo data ----
  const ALL = [
    { id: 'cut', cat: 'hair', title: 'Signature Cut & Style', provider: 'The Fade Room', rating: 4.9, reviews: 212, price: 48, loc: 'Williamsburg · 0.4 mi', next: 'Today 2:30 PM', slots: ['2:30 PM', '4:00 PM', '5:15 PM'], hue: 44, recommended: true },
    { id: 'massage', cat: 'wellness', title: 'Deep Tissue Massage', provider: 'Stillpoint Studio', rating: 5.0, reviews: 148, price: 95, loc: 'Park Slope · 1.1 mi', next: 'Today 6:00 PM', slots: ['6:00 PM', '7:15 PM'], hue: 38 },
    { id: 'clean', cat: 'home', title: 'Deep Home Clean', provider: 'Tidy & Co.', rating: 4.9, reviews: 304, price: 130, loc: 'Bushwick · 2.3 mi', next: 'Tomorrow 9:00 AM', slots: ['Tue 9:00 AM', 'Tue 1:00 PM'], hue: 50 },
    { id: 'color', cat: 'hair', title: 'Gloss & Color Refresh', provider: 'Sunbeam Studio', rating: 4.8, reviews: 96, price: 120, loc: 'Greenpoint · 0.9 mi', next: 'Today 3:45 PM', slots: ['3:45 PM', '5:30 PM'], hue: 42 },
    { id: 'facial', cat: 'wellness', title: 'Glow Facial', provider: 'Daylight Skin', rating: 4.7, reviews: 73, price: 80, loc: 'Cobble Hill · 1.6 mi', next: 'Wed 11:00 AM', slots: ['Wed 11:00 AM', 'Wed 2:00 PM'], hue: 36 },
    { id: 'walk', cat: 'pets', title: 'Dog Walk & Play', provider: 'Happy Tails', rating: 5.0, reviews: 189, price: 24, loc: 'Fort Greene · 0.7 mi', next: 'Today 1:00 PM', slots: ['1:00 PM', '3:00 PM', '5:00 PM'], hue: 46 },
  ];

  const CATS = [
    { label: 'Hair & Beauty', value: 'hair' },
    { label: 'Wellness & Spa', value: 'wellness' },
    { label: 'Home & Cleaning', value: 'home' },
    { label: 'Pet Care', value: 'pets' },
    { label: 'Repairs', value: 'repairs' },
  ];
  const CAT_LABEL = { hair: 'Hair & Beauty', wellness: 'Wellness & Spa', home: 'Home & Cleaning', pets: 'Pet Care', repairs: 'Repairs', auto: 'Auto & Detail' };
  const RATINGS = [{ label: 'Any', value: 0 }, { label: '4.0+', value: 4 }, { label: '4.5+', value: 4.5 }, { label: '4.8+', value: 4.8 }];
  const AVAIL = [{ label: 'Any time', value: 'any' }, { label: 'Today', value: 'today' }, { label: 'This week', value: 'week' }, { label: 'Weekends', value: 'weekend' }];

  // ---- read incoming search from Home / Search ----
  const params = new URLSearchParams(window.location.search);
  const incomingCat = params.get('cat');
  const incomingLoc = params.get('loc') || 'Brooklyn, NY';
  const initialCats = incomingCat && CAT_LABEL[incomingCat] ? [incomingCat] : [];

  const [cats, setCats] = React.useState(initialCats);
  const [maxPrice, setMaxPrice] = React.useState(200);
  const [minRating, setMinRating] = React.useState(0);
  const [avail, setAvail] = React.useState('any');
  const [sort, setSort] = React.useState('rec');

  const toggleCat = (v) => setCats((c) => c.includes(v) ? c.filter((x) => x !== v) : [...c, v]);
  const reset = () => { setCats([]); setMaxPrice(200); setMinRating(0); setAvail('any'); };

  let results = ALL.filter((s) =>
    (cats.length === 0 || cats.includes(s.cat)) &&
    s.price <= maxPrice &&
    s.rating >= minRating &&
    (avail !== 'today' || s.next.startsWith('Today'))
  );
  if (sort === 'price') results = [...results].sort((a, b) => a.price - b.price);
  else if (sort === 'rating') results = [...results].sort((a, b) => b.rating - a.rating);
  else results = [...results].sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));

  const activeCount = cats.length + (maxPrice < 200 ? 1 : 0) + (minRating > 0 ? 1 : 0) + (avail !== 'any' ? 1 : 0);

  const summaryCat = cats.length === 1 ? CAT_LABEL[cats[0]] : (incomingCat && CAT_LABEL[incomingCat]) || 'All services';
  const goDetails = () => { window.location.href = 'Service Details & Booking.html'; };
  const editSearch = () => { window.location.href = 'Home Search.html'; };

  return (
    <div>
      <TopNav location={incomingLoc} activeLink="explore"
        links={[{ label: 'Explore', value: 'explore' }, { label: 'Bookings', value: 'bookings' }, { label: 'Favorites', value: 'favorites' }]}
        ctaLabel="List your service"
        onNavigate={(v) => { if (v === 'explore') editSearch(); }} />

      {/* ---- search summary bar ---- */}
      <div className="summaryband">
        <div className="container summarybar">
          <div className="summarychips">
            <span className="schip"><ScissorsIcon /> {summaryCat}</span>
            <span className="sdot">·</span>
            <span className="schip"><PinIcon /> {incomingLoc}</span>
            <span className="sdot">·</span>
            <span className="schip"><CalIcon /> Today, Jun 24</span>
          </div>
          <Button variant="outline" size="sm" leadingIcon={<EditIcon />} onClick={editSearch}>Edit search</Button>
        </div>
      </div>

      {/* ---- main: filters + results ---- */}
      <div className="container layout">
        {/* filter rail */}
        <aside className="filters">
          <div className="filterhead">
            <h2>Filters</h2>
            {activeCount > 0 && <button className="clearbtn" onClick={reset}>Clear ({activeCount})</button>}
          </div>

          <FilterGroup title="Category">
            {CATS.map((c) => (
              <label className="checkrow" key={c.value}>
                <input type="checkbox" checked={cats.includes(c.value)} onChange={() => toggleCat(c.value)} />
                <span className="checkbox">{cats.includes(c.value) && <CheckMark />}</span>
                {c.label}
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Price range">
            <div className="pricelabel">Up to <strong>${maxPrice}</strong>{maxPrice >= 200 && '+'}</div>
            <input type="range" min="20" max="200" step="5" value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="slider" />
            <div className="sliderends"><span>$20</span><span>$200+</span></div>
          </FilterGroup>

          <FilterGroup title="Rating">
            <div className="pillrow">
              {RATINGS.map((r) => (
                <button key={r.value} className={'fpill' + (minRating === r.value ? ' on' : '')} onClick={() => setMinRating(r.value)}>
                  {r.value > 0 && <StarMini />}{r.label}
                </button>
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Availability" last>
            <div className="pillrow">
              {AVAIL.map((a) => (
                <button key={a.value} className={'fpill' + (avail === a.value ? ' on' : '')} onClick={() => setAvail(a.value)}>{a.label}</button>
              ))}
            </div>
          </FilterGroup>
        </aside>

        {/* results column */}
        <main className="resultscol">
          <div className="resulthead">
            <div>
              <h1 className="rTitle">{results.length} services available</h1>
              <p className="rSub">{summaryCat} near {incomingLoc} · Today</p>
            </div>
            <div className="sortwrap">
              <Select value={sort} onChange={setSort}
                options={[{ label: 'Recommended', value: 'rec' }, { label: 'Price: low to high', value: 'price' }, { label: 'Top rated', value: 'rating' }]} />
            </div>
          </div>

          {results.length === 0 ? (
            <div className="emptywrap">
              <EmptyState icon={<SearchBig />} title="No services match those filters"
                description="Try widening your price range, lowering the rating, or clearing a filter to see more pros near you."
                actionLabel="Clear all filters" onAction={reset} />
            </div>
          ) : (
            <div className="cardlist">
              {results.map((s) => <ResultCard key={s.id} s={s} onView={goDetails} />)}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ResultCard({ s, onView }) {
  const { Button } = window.ServiceFlowDesignSystem_c6741d;
  const [hover, setHover] = React.useState(false);
  const rec = s.recommended;
  return (
    <div className={'rcard' + (rec ? ' rec' : '')}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ transform: hover ? 'translateY(-3px)' : 'none', boxShadow: hover ? 'var(--shadow-lg)' : (rec ? 'var(--shadow-md)' : 'var(--shadow-sm)') }}>
      {rec && <div className="recflag"><SparkMini /> Recommended for you</div>}
      <div className="rbody">
        <div className="rthumb" style={{ background: `linear-gradient(150deg, hsl(${s.hue} 92% 72%), hsl(${s.hue + 8} 60% 86%))` }}>
          <span className="rdur">{s.slots.length} open today</span>
        </div>
        <div className="rmain">
          <div className="rtop">
            <span className="rprovider">{s.provider}</span>
            <span className="rrating"><StarMini solid />{s.rating.toFixed(1)} <em>({s.reviews})</em></span>
          </div>
          <h3 className="rname">{s.title}</h3>
          <div className="rloc"><PinMini /> {s.loc}</div>
          <div className="rnext">
            <span className="rnextlabel"><span className="livedot" />Next available</span>
            <div className="slotrow">
              {s.slots.map((t, i) => <span key={i} className={'miniSlot' + (i === 0 ? ' first' : '')}>{t}</span>)}
            </div>
          </div>
        </div>
        <div className="raside">
          <div className="rpriceblock">
            <span className="rfrom">from</span>
            <span className="rprice">${s.price}</span>
          </div>
          <Button onClick={onView}>View availability</Button>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children, last }) {
  return (
    <div className="fgroup" style={{ borderBottom: last ? 'none' : '1px solid var(--border-soft)' }}>
      <h3 className="ftitle">{title}</h3>
      {children}
    </div>
  );
}

/* ---- inline icons (Lucide-style) ---- */
const Ic = (paths, fill) => (props) => (
  <svg width={(props && props.size) || 18} height={(props && props.size) || 18} viewBox="0 0 24 24" fill={fill || 'none'}
    stroke={fill ? 'none' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);
const ScissorsIcon = Ic(<><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" /></>);
const PinIcon = Ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></>);
const PinMini = Ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></>);
const CalIcon = Ic(<><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 9h18M8 3v4M16 3v4" /></>);
const EditIcon = Ic(<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" /></>);
const SearchBig = Ic(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>);
const CheckMark = Ic(<path d="M5 13l4 4L19 7" />);
const SparkMini = Ic(<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />);
const StarMini = ({ solid }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={solid ? 'var(--accent-strong)' : 'currentColor'}><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 7.1-1.01z" /></svg>
);

window.SearchResultsPage = SearchResultsPage;
