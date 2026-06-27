// ServiceFlow — Business owner dashboard overview.
// Composes design-system primitives from window.ServiceFlowDesignSystem_c6741d.
// Renders into the CSS defined in "Business Dashboard.html".

// --- tiny inline Lucide-style icons (rounded, ~2px) ---
const ico = (p) => React.createElement('svg', { width: p.s || 18, height: p.s || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, p.children);
const IconCal = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4' })] });
const IconCalPlus = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4M12 13v4M10 15h4' })] });
const IconInbox = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M3 12h5l2 3h4l2-3h5' }), React.createElement('path', { key: 2, d: 'M5 5h14l2 7v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5L5 5Z' })] });
const IconCheckCircle = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M8.5 12.5l2.5 2.5 4.5-5' })] });
const IconSparkle = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z' }) });
const IconX = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M6 6l12 12M18 6L6 18' }) });
const IconEuro = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M17 6.3A6 6 0 1 0 17 17.7' }), React.createElement('path', { key: 2, d: 'M4 10h9M4 14h7' })] });
const IconArrow = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M5 12h14M13 6l6 6-6 6' }) });
const IconUp = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M7 17L17 7M9 7h8v8' }) });
const IconClock = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3 2' })] });
const IconBolt = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M13 2L4 14h7l-1 8 9-12h-7l1-8Z' }) });
const IconPlus = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M12 5v14M5 12h14' }) });
const IconBell = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9' }), React.createElement('path', { key: 2, d: 'M13.7 21a2 2 0 0 1-3.4 0' })] });
const IconWrench = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M14.5 6a3.5 3.5 0 0 0 4.6 4.4l-9 9a2.1 2.1 0 0 1-3-3l9-9A3.5 3.5 0 0 0 14.5 6Z' }) });
const IconCheck = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M4 12l5 5L20 6' }) });

const SunDecor = () => React.createElement('svg', { className: 'sun', viewBox: '0 0 120 120', 'aria-hidden': 'true' },
  React.createElement('circle', { cx: 60, cy: 60, r: 28, fill: 'rgba(255,255,255,0.5)' }),
  React.createElement('g', { stroke: 'rgba(255,255,255,0.5)', strokeWidth: 8, strokeLinecap: 'round' },
    React.createElement('line', { x1: 60, y1: 6, x2: 60, y2: 22 }), React.createElement('line', { x1: 60, y1: 98, x2: 60, y2: 114 }),
    React.createElement('line', { x1: 6, y1: 60, x2: 22, y2: 60 }), React.createElement('line', { x1: 98, y1: 60, x2: 114, y2: 60 }),
    React.createElement('line', { x1: 22, y1: 22, x2: 34, y2: 34 }), React.createElement('line', { x1: 86, y1: 86, x2: 98, y2: 98 }),
    React.createElement('line', { x1: 98, y1: 22, x2: 86, y2: 34 }), React.createElement('line', { x1: 22, y1: 98, x2: 34, y2: 86 })));

const BIZ = { name: 'Dublin Laptop Care', owner: 'Sarah', date: 'Thursday, 26 June' };
const AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Crect width='46' height='46' fill='%23FFD43B'/%3E%3Ctext x='23' y='30' font-family='Plus Jakarta Sans,sans-serif' font-size='17' font-weight='800' fill='%231B1813' text-anchor='middle'%3ESM%3C/text%3E%3C/svg%3E";

const STATS = [
  { key: 'new', ic: 'warn', icon: IconInbox, num: '3', lbl: 'New bookings', sub: 'Awaiting your reply', delta: null },
  { key: 'confirmed', ic: '', icon: IconCheckCircle, num: '4', lbl: 'Confirmed today', sub: 'On the schedule', delta: null },
  { key: 'done', ic: 'ok', icon: IconSparkle, num: '18', lbl: 'Completed this week', sub: null, delta: { dir: 'up', txt: '+5' } },
  { key: 'cancel', ic: 'err', icon: IconX, num: '1', lbl: 'Cancelled', sub: 'this week', delta: null },
  { key: 'value', feature: true, icon: IconEuro, num: '€1,240', lbl: 'Booking value · week', sub: null, delta: { dir: 'up', txt: '+12%' } },
];

const TODAY = [
  { id: 1, t: '9:30', ampm: 'AM', cust: 'Aoife Byrne', init: 'AB', svc: 'Screen replacement', price: '€140', status: 'new' },
  { id: 2, t: '11:00', ampm: 'AM', cust: 'Liam Murphy', init: 'LM', svc: 'Virus & malware removal', price: '€70', status: 'confirmed' },
  { id: 3, t: '1:15', ampm: 'PM', cust: "Niamh O'Connor", init: 'NO', svc: 'Battery replacement', price: '€95', status: 'confirmed' },
  { id: 4, t: '3:00', ampm: 'PM', cust: 'Cian Walsh', init: 'CW', svc: 'Data recovery', price: '€180', status: 'new' },
  { id: 5, t: '4:30', ampm: 'PM', cust: 'Saoirse Kelly', init: 'SK', svc: 'Performance tune-up', price: '€60', status: 'confirmed' },
];

const UPCOMING = [
  { month: 'JUN', day: '27', service: 'Hardware diagnostic', provider: 'Tom Doyle', time: '10:00 AM', status: { tone: 'success', label: 'Confirmed', dot: true } },
  { month: 'JUN', day: '28', service: 'Screen replacement', provider: 'Emma Ryan', time: '12:30 PM', status: { tone: 'success', label: 'Confirmed', dot: true } },
  { month: 'JUN', day: '30', service: 'Data recovery', provider: 'Jack Nolan', time: '9:00 AM', status: { tone: 'warning', label: 'Pending', dot: true } },
];

const ACTIVITY = [
  { kind: 'ok', icon: IconCheck, html: <><b>You confirmed</b> Liam Murphy's virus removal</>, when: '12 minutes ago' },
  { kind: 'new', icon: IconBell, html: <><b>New booking</b> — Cian Walsh requested data recovery</>, when: '40 minutes ago' },
  { kind: 'info', icon: IconCalPlus, html: <><b>Availability added</b> — 4 slots opened for Sat 28 Jun</>, when: '2 hours ago' },
  { kind: 'err', icon: IconX, html: <><b>Cancellation</b> — Mark Fitzgerald cancelled a tune-up</>, when: 'Yesterday, 5:10 PM' },
];

function StatCard({ s }) {
  const Icon = s.icon;
  return (
    <div className={'stat' + (s.feature ? ' feature' : '')}>
      <div className="top">
        <span className={'ic ' + (s.ic || '')}><Icon s={20} /></span>
        {s.delta && <span className={'delta ' + (s.delta.dir === 'up' ? 'up' : 'flat')}><IconUp s={13} />{s.delta.txt}</span>}
      </div>
      <div className="num">{s.num}</div>
      <div className="lbl">{s.lbl}</div>
      {s.sub && <div className="sub">{s.sub}</div>}
    </div>
  );
}

function DashboardPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Badge, BookingCard, EmptyState, Tabs, Toast } = DS;

  const [mode, setMode] = React.useState('active'); // 'active' | 'new'
  const [tab, setTab] = React.useState('all');
  const [confirmed, setConfirmed] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const isNew = mode === 'new';

  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4000); return () => clearTimeout(t); }, [toast]);

  const confirmBooking = (b) => {
    setConfirmed((p) => ({ ...p, [b.id]: true }));
    setToast({ tone: 'success', title: 'Booking confirmed', message: `${b.cust} · ${b.svc} at ${b.t} ${b.ampm}.` });
  };

  const newCount = TODAY.filter((b) => b.status === 'new' && !confirmed[b.id]).length;
  const visibleToday = TODAY.filter((b) => {
    if (tab === 'new') return b.status === 'new' && !confirmed[b.id];
    if (tab === 'confirmed') return b.status === 'confirmed' || confirmed[b.id];
    return true;
  });

  const stats = isNew
    ? STATS.map((s) => ({ ...s, num: s.key === 'value' ? '€0' : '0', sub: s.key === 'new' ? 'No requests yet' : s.sub, delta: null }))
    : STATS;

  const nav = React.createElement(TopNav, {
    location: 'Dublin, IE', activeLink: 'dashboard', avatar: AVATAR,
    links: [{ label: 'Dashboard', value: 'dashboard' }, { label: 'Bookings', value: 'bookings' }, { label: 'Calendar', value: 'calendar' }, { label: 'Services', value: 'services' }],
    ctaLabel: 'Add availability',
    onCta: () => setToast({ tone: 'info', title: 'Open your calendar', message: 'Add open slots customers can book.' }),
  });

  return (
    <div>
      {nav}

      {/* dashboard header */}
      <div className="container dashhead">
        <div className="dashrow">
          <div>
            <div className="bizline">
              <span className="biztile"><IconWrench s={18} /></span>
              <span className="bizname"><b>{BIZ.name}</b></span>
              <span className="bizplan"><span className="livedot"></span>{isNew ? 'New business' : 'Pro plan'}</span>
            </div>
            <h1 className="greeting">Good morning, {BIZ.owner}<span className="wave">.</span></h1>
            <div className="subline">
              <span className="dt"><IconCal s={16} /> {BIZ.date}</span>
              <span className="pip"></span>
              {isNew
                ? <span>Let's get your calendar filled up.</span>
                : <span><span className="hot">{TODAY.length} bookings</span> today · <span className="hot">{newCount} need confirming</span></span>}
            </div>
          </div>
          <div className="headactions">
            <div className="seg">
              <button className={'segbtn' + (!isNew ? ' on' : '')} onClick={() => setMode('active')}>Active</button>
              <button className={'segbtn' + (isNew ? ' on' : '')} onClick={() => setMode('new')}>New business</button>
            </div>
            <Button size="md" leadingIcon={<IconCalPlus s={18} />}
              onClick={() => setToast({ tone: 'info', title: 'Open your calendar', message: 'Add open slots customers can book.' })}>
              Add availability
            </Button>
          </div>
        </div>

        {/* stats */}
        <div className="stats">
          {stats.map((s) => <StatCard key={s.key} s={s} />)}
        </div>
      </div>

      {/* main */}
      <div className="container layout">
        {/* LEFT */}
        <div>
          {/* today's bookings */}
          <div className="block">
            <div className="blockhead">
              <h2>Today's bookings{!isNew && <span className="cnt">{TODAY.length}</span>}</h2>
              {!isNew && (
                <Tabs value={tab} onChange={setTab} tabs={[
                  { label: 'All', value: 'all', count: TODAY.length },
                  { label: 'New', value: 'new', count: newCount },
                  { label: 'Confirmed', value: 'confirmed' },
                ]} />
              )}
            </div>

            {isNew ? (
              <EmptyState icon={<IconCal s={30} />} title="No bookings yet"
                description="When customers book a slot it'll show up here, ready to confirm. Add availability to get found."
                actionLabel="Add availability"
                onAction={() => setToast({ tone: 'info', title: 'Open your calendar', message: 'Add open slots customers can book.' })} />
            ) : (
              <div className="panel">
                {visibleToday.length === 0 ? (
                  <div style={{ padding: '40px 22px', textAlign: 'center', color: 'var(--ink-400)', fontWeight: 600, fontSize: 14 }}>
                    Nothing here — every booking in this view is handled.
                  </div>
                ) : visibleToday.map((b) => {
                  const isDone = b.status === 'confirmed' || confirmed[b.id];
                  return (
                    <div className="brow" key={b.id}>
                      <div className="btime"><span className="t">{b.t}</span><span className="ampm">{b.ampm}</span></div>
                      <span className={'brail ' + (isDone ? 'confirmed' : 'new')}></span>
                      <span className="bava">{b.init}</span>
                      <div className="bmain">
                        <div className="cust">{b.cust}</div>
                        <div className="svc">{b.svc}<span className="pip"></span><span className="price">{b.price}</span></div>
                      </div>
                      <div className="bstatus">
                        {isDone
                          ? <Badge tone="success" dot>Confirmed</Badge>
                          : <Badge tone="warning" dot>New request</Badge>}
                      </div>
                      <div className="bactions">
                        {!isDone && <button className="qbtn confirm" onClick={() => confirmBooking(b)}>Confirm</button>}
                        <button className="qbtn ghost" onClick={() => setToast({ tone: 'info', title: b.cust, message: `${b.svc} · ${b.price} · ${b.t} ${b.ampm}` })}>View details</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* upcoming */}
          <div className="block">
            <div className="blockhead">
              <h2>Upcoming</h2>
              {!isNew && <button className="seeall">View all <IconArrow s={15} /></button>}
            </div>
            {isNew ? (
              <div className="lowact">
                <span className="lic"><IconCal s={22} /></span>
                <h4>Your week is open</h4>
                <p>Confirmed bookings for the days ahead will line up right here.</p>
              </div>
            ) : (
              <div className="upcoming">
                {UPCOMING.map((u, i) => (
                  <BookingCard key={i} month={u.month} day={u.day} service={u.service}
                    provider={u.provider} time={u.time} status={u.status}
                    primaryLabel="View details"
                    onPrimary={() => setToast({ tone: 'info', title: u.service, message: `${u.provider} · ${u.day} ${u.month} at ${u.time}` })} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT sidebar */}
        <div className="side">
          {/* availability reminder */}
          <div className="availcard">
            <SunDecor />
            <span className="ahd"><IconBolt s={14} /> {isNew ? 'Get started' : 'Heads up'}</span>
            <h3>{isNew ? 'Open your first slots' : '3 open slots this week'}</h3>
            <p>{isNew
              ? 'Add availability so customers can find and book you. It only takes a minute.'
              : 'Friday afternoon and Sunday are still wide open. Fill them before the weekend rush.'}</p>
            {!isNew && (
              <div className="availweek">
                {[['Mo', 'Full', 'full'], ['Tu', 'Full', 'full'], ['We', '6', ''], ['Th', '4', ''], ['Fr', '0', 'open'], ['Sa', '2', ''], ['Su', '0', 'open']].map((d, i) => (
                  <div className={'availday ' + d[2]} key={i}><div className="d">{d[0]}</div><div className="v">{d[1]}</div></div>
                ))}
              </div>
            )}
            <div className="acta">
              <Button full size="md" variant="secondary" leadingIcon={<IconPlus s={17} />}
                onClick={() => setToast({ tone: 'success', title: 'Manage availability', message: 'Opening your weekly calendar.' })}>
                Manage availability
              </Button>
            </div>
          </div>

          {/* recent activity */}
          <div>
            <div className="sidehead"><h3>Recent activity</h3></div>
            {isNew ? (
              <div className="lowact" style={{ marginTop: 14 }}>
                <span className="lic"><IconBell s={22} /></span>
                <h4>Nothing yet</h4>
                <p>New bookings, confirmations and changes will appear here as they happen.</p>
              </div>
            ) : (
              <div className="panel actpanel" style={{ marginTop: 14 }}>
                {ACTIVITY.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div className="actitem" key={i}>
                      <span className={'actdot ' + a.kind}><Icon s={17} /></span>
                      <div className="actbody"><p>{a.html}</p><div className="when">{a.when}</div></div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="toasts">
        {toast && <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
window.DashboardPage = DashboardPage;
