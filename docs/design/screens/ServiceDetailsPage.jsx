// ServiceFlow — Service details + booking screen.
// Composes design-system primitives from window.ServiceFlowDesignSystem_c6741d.

// --- tiny inline Lucide-style icons (rounded, ~2px) ---
const ico = (p) => React.createElement('svg', { width: p.s || 18, height: p.s || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, p.children);
const IconPin = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }), React.createElement('circle', { key: 2, cx: 12, cy: 10, r: 3 })] });
const IconClock = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3 2' })] });
const IconCal = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4' })] });
const IconShield = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z' }), React.createElement('path', { key: 2, d: 'M9 12l2 2 4-4' })] });
const IconRefresh = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5' }), React.createElement('path', { key: 2, d: 'M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5' })] });
const IconTag = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 13l-7 7-9-9V4h7l9 9Z' }), React.createElement('circle', { key: 2, cx: 7.5, cy: 7.5, r: 1.4 })] });
const IconCheck = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M4 12l5 5L20 6' }) });
const IconUser = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 8, r: 4 }), React.createElement('path', { key: 2, d: 'M4 21c0-4 4-6 8-6s8 2 8 6' })] });
const IconMail = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 5, width: 18, height: 14, rx: 3 }), React.createElement('path', { key: 2, d: 'M4 7l8 6 8-6' })] });
const IconNote = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M5 3h14v18l-3-2-2 2-2-2-2 2-3-2V3Z' }), React.createElement('path', { key: 2, d: 'M9 8h6M9 12h6' })] });
const IconInfo = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 11v5M12 8h.01' })] });
const IconAlert = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 8v4M12 16h.01' })] });
const IconSpark = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M18 18l-2.5-2.5M18 6l-2.5 2.5M6 18l2.5-2.5' }) });
const IconArrowLeft = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M19 12H5M11 18l-6-6 6-6' }) });
const Star = ({ s }) => React.createElement('svg', { width: s || 16, height: s || 16, viewBox: '0 0 24 24', fill: 'currentColor' }, React.createElement('path', { d: 'M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16.9 5.9 19.4 7.4 12.9l-5-4.3 6.6-.6L12 2Z' }));
const SunBig = () => React.createElement('svg', { viewBox: '0 0 24 24', width: '100%', height: '100%', fill: 'currentColor' }, React.createElement('path', { d: 'M12 6.5A5.5 5.5 0 1 0 12 17.5 5.5 5.5 0 0 0 12 6.5ZM12 1l1.4 2.7L16 2.3l-.3 3 3 .3-1.4 2.6 2.4 1.8-2.4 1.8 1.4 2.6-3 .3.3 3-2.6-1.4L12 23l-1.4-2.7L8 21.7l.3-3-3-.3 1.4-2.6L4.3 12l2.4-1.8L5.3 7.6l3-.3-.3-3 2.6 1.4L12 1Z' }));

const SERVICE = {
  category: 'Home cleaning',
  name: 'Deep Home Clean',
  provider: 'Tidy & Co.',
  initials: 'TC',
  rating: 4.9,
  reviews: 304,
  location: 'Park Slope, Brooklyn',
  duration: '3 hrs',
  price: 130,
  desc: 'A top-to-bottom reset for your whole place — kitchen, bathrooms, floors, and the spots that usually get skipped. Same trusted cleaner every visit, eco-friendly supplies included.',
  included: [
    'Kitchen & bathrooms deep cleaned',
    'All floors vacuumed & mopped',
    'Inside windows, sills & skirting',
    'Dusting, surfaces & mirrors',
    'Beds made & linens straightened',
    'Eco-friendly supplies included',
  ],
};

// availability per day: 'loading' resolves to slots; a fully-booked day -> empty state
const NO_SLOT_DAYS = ['25'];
const DAYS = [
  { weekday: 'MON', date: '23', hint: '8 slots' },
  { weekday: 'TUE', date: '24', hint: '5 slots' },
  { weekday: 'WED', date: '25', hint: 'Fully booked' },
  { weekday: 'THU', date: '26', hint: '6 slots' },
  { weekday: 'FRI', date: '27', hint: '2 left' },
  { weekday: 'SAT', date: '28', hint: '3 left' },
  { weekday: 'SUN', date: '29', hint: '7 slots' },
];
const MONTH = 'Jun';
const SLOTS_AM = [
  { id: '0800', time: '8:00 AM' },
  { id: '0900', time: '9:00 AM', meta: '2 left' },
  { id: '0930', time: '9:30 AM' },
  { id: '1030', time: '10:30 AM', state: 'unavailable' },
  { id: '1100', time: '11:00 AM' },
  { id: '1130', time: '11:30 AM' },
];
const SLOTS_PM = [
  { id: '1300', time: '1:00 PM' },
  { id: '1400', time: '2:00 PM', meta: '1 left' },
  { id: '1430', time: '2:30 PM', state: 'unavailable' },
  { id: '1530', time: '3:30 PM' },
  { id: '1600', time: '4:00 PM' },
  { id: '1700', time: '5:00 PM' },
];

function ServiceDetailsPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Input, TimeSlot, DatePicker, Badge, EmptyState, Modal, Toast } = DS;

  const [day, setDay] = React.useState('26');
  const [loading, setLoading] = React.useState(false);
  const [slot, setSlot] = React.useState(null);
  const [name, setName] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [note, setNote] = React.useState('');
  const [errs, setErrs] = React.useState({});
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [confirmed, setConfirmed] = React.useState(false);

  const dayObj = DAYS.find((d) => d.date === day) || {};
  const noSlots = NO_SLOT_DAYS.includes(day);
  const slotObj = [...SLOTS_AM, ...SLOTS_PM].find((s) => s.id === slot);

  const pickDay = (d) => {
    setDay(d); setSlot(null);
    setLoading(true);
    setTimeout(() => setLoading(false), 650);
  };

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!contact.trim()) e.contact = 'Add an email or phone so we can confirm.';
    if (!slot) e.slot = true;
    setErrs(e);
    return e;
  };

  const onConfirm = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setToast({ tone: 'error', title: 'Missing details', message: e.slot && (e.name || e.contact) ? 'Pick a time and complete your details.' : e.slot ? 'Pick a time slot to continue.' : 'Complete the required fields above.' });
      return;
    }
    setModal(true);
  };

  const finalize = () => {
    setModal(false); setConfirmed(true);
    setToast({ tone: 'success', title: 'Booking confirmed', message: 'We sent the details to your email.' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4200); return () => clearTimeout(t); }, [toast]);

  const dateLabel = dayObj.weekday ? `${dayObj.weekday[0] + dayObj.weekday.slice(1).toLowerCase()} ${dayObj.date} ${MONTH}` : '—';

  const nav = React.createElement(TopNav, {
    location: 'Brooklyn, NY', activeLink: 'explore',
    links: [{ label: 'Explore', value: 'explore' }, { label: 'Bookings', value: 'bookings' }, { label: 'Favorites', value: 'favorites' }],
    ctaLabel: 'List your service',
  });

  return (
    <div>
      {nav}

      {/* breadcrumb */}
      <div className="crumbband">
        <div className="container crumbrow">
          <button className="crumb">
            <span>Explore</span><span className="sep">/</span>
            <span>Home cleaning</span><span className="sep">/</span>
            <span className="here">{SERVICE.name}</span>
          </button>
          <button className="backlink"><IconArrowLeft s={16} /> Back to results</button>
        </div>
      </div>

      {/* provider header */}
      <div className="container">
        <div className="headpanel">
          <div className="headphoto">
            <div className="photorow">
              <span className="photopill"><IconTag s={13} /> {SERVICE.category}</span>
              <span className="sunmark" aria-hidden="true">
                <svg viewBox="0 0 120 120" width="78" height="78">
                  <circle cx="60" cy="60" r="30" fill="rgba(255,255,255,0.55)" />
                  <g stroke="rgba(255,255,255,0.55)" strokeWidth="8" strokeLinecap="round">
                    <line x1="60" y1="4" x2="60" y2="20" /><line x1="60" y1="100" x2="60" y2="116" />
                    <line x1="4" y1="60" x2="20" y2="60" /><line x1="100" y1="60" x2="116" y2="60" />
                    <line x1="21" y1="21" x2="33" y2="33" /><line x1="87" y1="87" x2="99" y2="99" />
                    <line x1="99" y1="21" x2="87" y2="33" /><line x1="21" y1="99" x2="33" y2="87" />
                  </g>
                </svg>
              </span>
            </div>
            <div className="photofoot">
              <span className="durchip">{SERVICE.duration}</span>
              <span className="gallerystrip">
                <span className="gthumb" style={{ background: 'linear-gradient(135deg,var(--yellow-200),var(--cream-100))' }}></span>
                <span className="gthumb" style={{ background: 'linear-gradient(135deg,var(--cream-200),var(--yellow-100))' }}></span>
                <span className="gthumb" style={{ background: 'linear-gradient(135deg,var(--yellow-300),var(--yellow-100))' }}></span>
              </span>
            </div>
          </div>

          <div className="headmain">
            <div className="hprovider">
              <span className="pavatar">{SERVICE.initials}</span>
              <span className="pname">{SERVICE.provider}</span>
              <span className="verified"><IconCheck s={14} /> Verified pro</span>
            </div>
            <h1 className="hname">{SERVICE.name}</h1>
            <div className="hmeta">
              <span className="hrating"><span className="star"><Star s={17} /></span>{SERVICE.rating} <em>({SERVICE.reviews} reviews)</em></span>
              <span className="hdivd"></span>
              <span className="hloc"><IconPin s={16} /> {SERVICE.location}</span>
              <span className="hdivd"></span>
              <Badge tone="accent">Top rated</Badge>
            </div>
            <p className="hdesc">{SERVICE.desc}</p>
            <div className="priceft">
              <div>
                <div className="from">Price from</div>
                <span className="amt">${SERVICE.price}</span>
              </div>
              <span className="unit">per visit · taxes included</span>
            </div>
          </div>
        </div>
      </div>

      {/* main layout */}
      <div className="container layout">
        {/* LEFT */}
        <div>
          {/* details */}
          <div className="section">
            <span className="secEyebrow">The details</span>
            <h2 className="secTitle">What's included</h2>
            <div className="panel inclpanel">
              <div className="inclgrid">
                {SERVICE.included.map((it) => (
                  <div className="inclrow" key={it}>
                    <span className="inclcheck"><IconCheck s={14} /></span>{it}
                  </div>
                ))}
              </div>
            </div>
            <div className="metacards">
              <div className="metacard">
                <span className="mc-ic"><IconClock s={20} /></span>
                <h4>Duration</h4>
                <p>About {SERVICE.duration} on site. We'll text when the cleaner is on the way.</p>
              </div>
              <div className="metacard">
                <span className="mc-ic"><IconRefresh s={20} /></span>
                <h4>Free cancellation</h4>
                <p>Change or cancel free up to 24 hours before. No charge until after the visit.</p>
              </div>
              <div className="metacard">
                <span className="mc-ic"><IconShield s={20} /></span>
                <h4>Trust & safety</h4>
                <p>Background-checked pros, $1M insured, and the same cleaner each visit.</p>
              </div>
            </div>
          </div>

          {/* availability */}
          <div className="section">
            <span className="secEyebrow">When</span>
            <h2 className="secTitle">Pick a date & time</h2>
            <div className="panel availpanel">
              <div className="avhead">
                <h3>Choose a day</h3>
                <span className="livepill"><span className="livedot"></span> Live openings</span>
              </div>
              <DatePicker days={DAYS} value={day} onChange={pickDay} />

              {!loading && noSlots ? (
                <div style={{ paddingTop: 14 }}>
                  <EmptyState
                    icon={<IconCal s={28} />}
                    title="No openings that day"
                    description="Wed 25 Jun is fully booked. Try another day — most fill up fast."
                    actionLabel="See next available"
                    onAction={() => pickDay('26')}
                  />
                </div>
              ) : (
                <div>
                  <div className="slotsub"><span>MORNING</span><span className="ln"></span></div>
                  <div className="slotgrid">
                    {loading
                      ? Array.from({ length: 6 }).map((_, i) => <div className="slotskel" key={i}></div>)
                      : SLOTS_AM.map((s) => (
                        <TimeSlot key={s.id} time={s.time} meta={s.meta}
                          state={s.state === 'unavailable' ? 'unavailable' : slot === s.id ? 'selected' : 'available'}
                          onClick={() => { setSlot(s.id); setErrs((p) => ({ ...p, slot: false })); }} />
                      ))}
                  </div>
                  <div className="slotsub"><span>AFTERNOON</span><span className="ln"></span></div>
                  <div className="slotgrid">
                    {loading
                      ? Array.from({ length: 6 }).map((_, i) => <div className="slotskel" key={i}></div>)
                      : SLOTS_PM.map((s) => (
                        <TimeSlot key={s.id} time={s.time} meta={s.meta}
                          state={s.state === 'unavailable' ? 'unavailable' : slot === s.id ? 'selected' : 'available'}
                          onClick={() => { setSlot(s.id); setErrs((p) => ({ ...p, slot: false })); }} />
                      ))}
                  </div>
                  <div className="legend">
                    <span><span className="lgbox"></span> Available</span>
                    <span><span className="lgbox sel"></span> Selected</span>
                    <span><span className="lgbox un"></span> Unavailable</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* customer details */}
          <div className="section">
            <span className="secEyebrow">Your details</span>
            <h2 className="secTitle">Who's it for?</h2>
            <p className="reqnote">Fields marked <b>*</b> are required.</p>
            <div className="panel formpanel">
              <div className="formgrid">
                <Input label="Full name *" placeholder="e.g. Jordan Rivera" size="lg"
                  icon={<IconUser s={18} />} value={name} error={errs.name}
                  onChange={(e) => { setName(e.target.value); if (errs.name) setErrs((p) => ({ ...p, name: undefined })); }} />
                <Input label="Email or phone *" placeholder="you@email.com or (555) 012-3456" size="lg"
                  icon={<IconMail s={18} />} value={contact} error={errs.contact}
                  onChange={(e) => { setContact(e.target.value); if (errs.contact) setErrs((p) => ({ ...p, contact: undefined })); }} />
                <div className="formfull">
                  <Input label="Note for the pro (optional)" placeholder="Gate code, pets, parking, areas to focus on…" size="lg"
                    icon={<IconNote s={18} />} value={note} onChange={(e) => setNote(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — booking summary */}
        <div className="summary">
          <div className="sumcard">
            <div className="sumtop">
              <div>
                <span className="lbl">Your booking</span>
                <div className="svc">{SERVICE.name}</div>
              </div>
              <span className="code">SF-7A2K9</span>
            </div>
            <div className="sumbody">
              <div className="sumrow">
                <span className="k"><IconUser s={15} /> Provider</span>
                <span className="v">{SERVICE.provider}</span>
              </div>
              <div className="sumrow">
                <span className="k"><IconCal s={15} /> Date</span>
                <span className="v">{dateLabel}</span>
              </div>
              <div className="sumrow">
                <span className="k"><IconClock s={15} /> Time</span>
                <span className={'v' + (slotObj ? ' mono' : ' muted')}>{slotObj ? slotObj.time : 'Select a time'}</span>
              </div>
              <div className="sumrow">
                <span className="k"><IconPin s={15} /> Location</span>
                <span className="v">{SERVICE.location}</span>
              </div>
            </div>
            <div className="sumtotal">
              <span className="tl">Total{slotObj ? '' : ' from'}</span>
              <span className="tamt">${SERVICE.price}</span>
            </div>
            <div className="sumcta">
              {(errs.name || errs.contact || errs.slot) && (
                <div className="ctaerr"><IconAlert s={16} />
                  <span>{errs.slot && (errs.name || errs.contact) ? 'Pick a time and fill in your details to continue.' : errs.slot ? 'Pick a time slot above to continue.' : 'Fill in the required details above.'}</span>
                </div>
              )}
              {confirmed ? (
                <Button full size="lg" disabled leadingIcon={<IconCheck s={18} />}>Booking confirmed</Button>
              ) : (
                <Button full size="lg" onClick={onConfirm}>Confirm booking</Button>
              )}
              <div className="reassure"><IconCheck s={15} /> Confirmed instantly · free to change up to 24h before</div>
            </div>
          </div>

          <div className="heldnote">
            <span className="ic"><IconInfo s={20} /></span>
            <span>Your slot is held for 5 more minutes while you book.</span>
          </div>
        </div>
      </div>

      {/* confirm modal */}
      <Modal open={modal} onClose={() => setModal(false)} eyebrow="Almost there" title="Confirm your booking"
        footer={<>
          <Button variant="outline" onClick={() => setModal(false)}>Back</Button>
          <Button onClick={finalize} leadingIcon={<IconSpark s={17} />}>Confirm & pay</Button>
        </>}>
        <span>You're booking <strong>{SERVICE.name}</strong> with {SERVICE.provider} on <strong>{dateLabel}{slotObj ? ` at ${slotObj.time}` : ''}</strong> at {SERVICE.location}. Total <strong>${SERVICE.price}</strong> — free to change up to 24 hours before.</span>
      </Modal>

      <div className="toasts">
        {toast && <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
window.ServiceDetailsPage = ServiceDetailsPage;
