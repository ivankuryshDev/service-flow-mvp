// ServiceFlow — Booking confirmation screen.
// Composes design-system primitives from window.ServiceFlowDesignSystem_c6741d.
// Renders into the CSS defined in "Booking Confirmation.html".

// --- tiny inline Lucide-style icons (rounded, ~2px) ---
const ico = (p) => React.createElement('svg', { width: p.s || 18, height: p.s || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, p.children);
const IconPin = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }), React.createElement('circle', { key: 2, cx: 12, cy: 10, r: 3 })] });
const IconClock = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3 2' })] });
const IconCal = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4' })] });
const IconUser = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 8, r: 4 }), React.createElement('path', { key: 2, d: 'M4 21c0-4 4-6 8-6s8 2 8 6' })] });
const IconTag = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 13l-7 7-9-9V4h7l9 9Z' }), React.createElement('circle', { key: 2, cx: 7.5, cy: 7.5, r: 1.4 })] });
const IconMail = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 5, width: 18, height: 14, rx: 3 }), React.createElement('path', { key: 2, d: 'M4 7l8 6 8-6' })] });
const IconBell = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9' }), React.createElement('path', { key: 2, d: 'M13.7 21a2 2 0 0 1-3.4 0' })] });
const IconRefresh = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5' }), React.createElement('path', { key: 2, d: 'M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5' })] });
const IconMsg = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M21 11.5a8.4 8.4 0 0 1-9 8.3L4 21l1.2-3.8A8.5 8.5 0 1 1 21 11.5Z' }) });
const IconCheck = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M4 12l5 5L20 6' }) });
const IconCalPlus = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4M12 13v5M9.5 15.5h5' })] });
const IconHelp = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M9.2 9.2a2.8 2.8 0 0 1 5.3 1c0 1.9-2.8 2.5-2.8 2.5M12 17h.01' })] });
const IconArrowRight = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M5 12h14M13 6l6 6-6 6' }) });

const BIG_CHECK = React.createElement('svg', { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }, React.createElement('path', { d: 'M4 12.5l5 5L20 6' }));
const BIG_CLOCK = React.createElement('svg', { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }, [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3.5 2' })]);

const BOOKING = {
  category: 'Home cleaning',
  service: 'Deep Home Clean',
  provider: 'Tidy & Co.',
  date: 'Thu 26 Jun',
  time: '9:00 AM',
  duration: '3 hrs',
  location: 'Park Slope, Brooklyn',
  price: 130,
  code: 'SF-7A2K9',
  email: 'jordan@email.com',
};

function ConfirmationPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Toast } = DS;

  const [status, setStatus] = React.useState('confirmed'); // 'confirmed' | 'pending'
  const [toast, setToast] = React.useState(null);
  const pending = status === 'pending';

  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4200);
    return () => clearTimeout(t);
  }, [toast]);

  const fire = (t) => setToast(t);

  const nav = React.createElement(TopNav, {
    location: 'Brooklyn, NY', activeLink: 'bookings',
    links: [{ label: 'Explore', value: 'explore' }, { label: 'Bookings', value: 'bookings' }, { label: 'Favorites', value: 'favorites' }],
    ctaLabel: 'List your service',
  });

  return (
    <div>
      {nav}

      {/* preview state toggle */}
      <div className="previewbar">
        <div className="previewrow">
          <span className="previewlbl">Preview state</span>
          <div className="seg">
            <button className={'segbtn' + (!pending ? ' on' : '')} onClick={() => setStatus('confirmed')}>Confirmed</button>
            <button className={'segbtn pend' + (pending ? ' on pend' : '')} onClick={() => setStatus('pending')}>Pending</button>
          </div>
        </div>
      </div>

      <div className="wrap">
        {/* hero */}
        <div className="hero">
          <span className={'halo' + (pending ? ' pend' : '')}>
            <span className="disc">{pending ? BIG_CLOCK : BIG_CHECK}</span>
          </span>
          <div className={'eyebrow' + (pending ? ' pend' : '')}>
            {pending ? <IconClock s={14} /> : <IconCheck s={14} />}
            {pending ? 'Awaiting confirmation' : 'Booking confirmed'}
          </div>
          <h1 className="herotitle">{pending ? 'Almost there.' : "You're all booked."}</h1>
          <p className="herosub">
            {pending
              ? <>We've sent your request to {BOOKING.provider}. You'll hear back within an hour — we'll email {BOOKING.email} the moment it's confirmed.</>
              : <>Your {BOOKING.service.toLowerCase()} is locked in. We sent the details to {BOOKING.email} — see you {BOOKING.date.split(' ').slice(0, 2).join(' ')}.</>}
          </p>
          <div className="refchip">
            <span className="k">Confirmation</span>
            <span className="v">{BOOKING.code}</span>
          </div>
        </div>

        {/* booking details card */}
        <div className="section">
          <h2 className="secTitle">Booking details</h2>
          <div className="panel details">
            <div className="drow">
              <span className="k"><IconTag s={17} /> Service</span>
              <span className="v">{BOOKING.service}
                <span className="sub">{BOOKING.category} · {BOOKING.duration}</span>
              </span>
            </div>
            <div className="drow">
              <span className="k"><IconUser s={17} /> Provider</span>
              <span className="v">{BOOKING.provider}<span className="sub">Verified pro</span></span>
            </div>
            <div className="drow">
              <span className="k"><IconCal s={17} /> Date</span>
              <span className="v mono">{BOOKING.date}</span>
            </div>
            <div className="drow">
              <span className="k"><IconClock s={17} /> Time</span>
              <span className="v mono">{BOOKING.time}</span>
            </div>
            <div className="drow">
              <span className="k"><IconPin s={17} /> Location</span>
              <span className="v">{BOOKING.location}</span>
            </div>
            <div className="pricerow">
              <span className="k">{pending ? 'Total due after visit' : 'Total paid'}</span>
              <span className="amt">${BOOKING.price}</span>
            </div>
          </div>
        </div>

        {/* what happens next */}
        <div className="section">
          <h2 className="secTitle">What happens next</h2>
          <div className="steps">
            <div className={'step' + (pending ? ' active' : '')}>
              <span className="stepnum">1</span>
              <h4>{pending ? 'We confirm your slot' : "You're confirmed"}</h4>
              <p>{pending
                ? `${BOOKING.provider} reviews the request and locks in your time.`
                : `${BOOKING.provider} has your booking and the slot is reserved for you.`}</p>
              {pending && <span className="stepflag"><span className="d"></span> Waiting on pro</span>}
            </div>
            <div className={'step' + (!pending ? ' active' : '')}>
              <span className="stepnum">2</span>
              <h4>A reminder the day before</h4>
              <p>We'll text and email you 24 hours ahead, with a heads-up when the pro is on the way.</p>
            </div>
            <div className="step">
              <span className="stepnum">3</span>
              <h4>Relax — it's handled</h4>
              <p>Your cleaner arrives at {BOOKING.time}. Pay after the visit; nothing's charged until it's done.</p>
            </div>
          </div>
        </div>

        {/* primary actions */}
        <div className="actions">
          <div className="grow">
            <Button full size="lg" leadingIcon={<IconCalPlus s={18} />}
              onClick={() => fire({ tone: 'success', title: 'Added to calendar', message: `${BOOKING.service} · ${BOOKING.date}, ${BOOKING.time}.` })}>
              Add to calendar
            </Button>
          </div>
          <div className="grow">
            <Button full size="lg" variant="outline" trailingIcon={<IconArrowRight s={18} />}
              onClick={() => fire({ tone: 'info', title: 'Opening your bookings', message: 'All your upcoming visits in one place.' })}>
              View my bookings
            </Button>
          </div>
        </div>

        {/* manage / help */}
        <div className="section">
          <h2 className="secTitle">Manage this booking</h2>
          <div className="panel helpcard helpgrid">
            <div className="helprow">
              <span className="helpic"><IconRefresh s={20} /></span>
              <div>
                <h4>Reschedule or cancel</h4>
                <p>Free to change up to 24 hours before {BOOKING.date}. <a href="#">Change time</a> or <a href="#">cancel</a>.</p>
              </div>
            </div>
            <div className="helprow">
              <span className="helpic"><IconMsg s={20} /></span>
              <div>
                <h4>Message {BOOKING.provider}</h4>
                <p>Add gate codes, parking notes, or areas to focus on. <a href="#">Send a message</a>.</p>
              </div>
            </div>
            <div className="helprow">
              <span className="helpic info"><IconBell s={20} /></span>
              <div>
                <h4>Reminders are on</h4>
                <p>We'll nudge you at {BOOKING.email} and by text the day before your visit.</p>
              </div>
            </div>
            <div className="helprow">
              <span className="helpic"><IconHelp s={20} /></span>
              <div>
                <h4>Need a hand?</h4>
                <p>Our team's here 7 days a week. <a href="#">Visit help center</a> or <a href="#">contact support</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="toasts">
        {toast && <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
window.ConfirmationPage = ConfirmationPage;
