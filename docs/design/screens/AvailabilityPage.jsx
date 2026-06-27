// ServiceFlow — Business: weekly availability management.
// Composes design-system primitives from window.ServiceFlowDesignSystem_c6741d.
// Renders into the CSS defined in "Availability Management.html".

// --- inline Lucide-style icons (rounded, ~2px) ---
const ico = (p) => React.createElement('svg', { width: p.s || 18, height: p.s || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, p.children);
const IconCal = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4' })] });
const IconChevL = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M15 6l-6 6 6 6' }) });
const IconChevR = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M9 6l6 6-6 6' }) });
const IconPlus = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M12 5v14M5 12h14' }) });
const IconCopy = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 9, y: 9, width: 12, height: 12, rx: 3 }), React.createElement('path', { key: 2, d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })] });
const IconBan = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M5.6 5.6l12.8 12.8' })] });
const IconTrash = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M4 7h16M10 11v6M14 11v6' }), React.createElement('path', { key: 2, d: 'M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3' })] });
const IconRepeat = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M17 2l4 4-4 4' }), React.createElement('path', { key: 2, d: 'M3 12V10a4 4 0 0 1 4-4h14M7 22l-4-4 4-4' }), React.createElement('path', { key: 3, d: 'M21 12v2a4 4 0 0 1-4 4H3' })] });
const IconLock = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 4, y: 11, width: 16, height: 9, rx: 2 }), React.createElement('path', { key: 2, d: 'M8 11V8a4 4 0 0 1 8 0v3' })] });
const IconClock = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3 2' })] });
const IconAlert = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M10.3 3.8 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z' }), React.createElement('path', { key: 2, d: 'M12 9v4M12 17h.01' })] });
const IconUsers = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }), React.createElement('circle', { key: 2, cx: 9, cy: 7, r: 4 }), React.createElement('path', { key: 3, d: 'M22 20v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11' })] });
const IconSliders = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3' }), React.createElement('path', { key: 2, d: 'M1 14h6M9 8h6M17 16h6' })] });
const IconRefresh = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M21 12a9 9 0 1 1-3-6.7L21 8' }), React.createElement('path', { key: 2, d: 'M21 3v5h-5' })] });
const IconBolt = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M13 2L4 14h7l-1 8 9-12h-7l1-8Z' }) });
const IconInfo = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 11v5M12 8h.01' })] });
const IconCalX = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4M10 14l4 4M14 14l-4 4' })] });

const SunDecor = () => React.createElement('svg', { className: 'sun', viewBox: '0 0 120 120', 'aria-hidden': 'true' },
  React.createElement('circle', { cx: 60, cy: 60, r: 26, fill: 'rgba(255,212,59,0.32)' }),
  React.createElement('g', { stroke: 'rgba(255,212,59,0.32)', strokeWidth: 8, strokeLinecap: 'round' },
    React.createElement('line', { x1: 60, y1: 8, x2: 60, y2: 24 }), React.createElement('line', { x1: 60, y1: 96, x2: 60, y2: 112 }),
    React.createElement('line', { x1: 8, y1: 60, x2: 24, y2: 60 }), React.createElement('line', { x1: 96, y1: 60, x2: 112, y2: 60 }),
    React.createElement('line', { x1: 24, y1: 24, x2: 36, y2: 36 }), React.createElement('line', { x1: 84, y1: 84, x2: 96, y2: 96 }),
    React.createElement('line', { x1: 96, y1: 24, x2: 84, y2: 36 }), React.createElement('line', { x1: 24, y1: 96, x2: 36, y2: 84 })));

const AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Crect width='46' height='46' fill='%23FFD43B'/%3E%3Ctext x='23' y='30' font-family='Plus Jakarta Sans,sans-serif' font-size='17' font-weight='800' fill='%231B1813' text-anchor='middle'%3ESM%3C/text%3E%3C/svg%3E";

const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

// --- seed week data (Mon 22 – Sun 28 Jun, today = Thu 25) ---
const WEEK = [
  { key: 'mon', name: 'Mon', date: '22', slots: [
    { id: 'm1', start: '9:00 AM', end: '10:00 AM', svc: 'Screen replacement', state: 'booked', cust: 'Aoife Byrne', cap: 1, booked: 1 },
    { id: 'm2', start: '10:30 AM', end: '11:30 AM', svc: 'Battery replacement', state: 'available', cap: 1, booked: 0 },
    { id: 'm3', start: '1:00 PM', end: '2:00 PM', svc: 'Performance tune-up', state: 'available', cap: 1, booked: 0 },
    { id: 'm4', start: '3:00 PM', end: '4:00 PM', svc: 'Virus & malware removal', state: 'booked', cust: 'Liam Murphy', cap: 1, booked: 1 },
  ] },
  { key: 'tue', name: 'Tue', date: '23', slots: [
    { id: 't1', start: '9:00 AM', end: '10:30 AM', svc: 'Data recovery', state: 'booked', cust: "Niamh O'Connor", cap: 1, booked: 1 },
    { id: 't2', start: '11:00 AM', end: '12:00 PM', svc: 'Hardware diagnostic', state: 'available', cap: 1, booked: 0 },
    { id: 't3', start: '2:00 PM', end: '3:00 PM', svc: 'Personal — lunch', state: 'blocked' },
    { id: 't4', start: '4:00 PM', end: '5:00 PM', svc: 'Performance tune-up', state: 'available', cap: 1, booked: 0 },
  ] },
  { key: 'wed', name: 'Wed', date: '24', slots: [
    { id: 'w1', start: '9:00 AM', end: '10:00 AM', svc: 'Screen replacement', state: 'available', cap: 1, booked: 0, overlap: true },
    { id: 'w2', start: '9:30 AM', end: '10:30 AM', svc: 'Battery replacement', state: 'available', cap: 1, booked: 0, overlap: true },
    { id: 'w3', start: '1:00 PM', end: '2:00 PM', svc: 'Virus & malware removal', state: 'booked', cust: 'Cian Walsh', cap: 1, booked: 1 },
    { id: 'w4', start: '3:00 PM', end: '4:00 PM', svc: 'Hardware diagnostic', state: 'available', cap: 1, booked: 0 },
  ] },
  { key: 'thu', name: 'Thu', date: '25', today: true, slots: [
    { id: 'h1', start: '9:30 AM', end: '10:30 AM', svc: 'Screen replacement', state: 'booked', cust: 'Aoife Byrne', cap: 1, booked: 1 },
    { id: 'h2', start: '11:00 AM', end: '12:00 PM', svc: 'Virus & malware removal', state: 'booked', cust: 'Liam Murphy', cap: 1, booked: 1 },
    { id: 'h3', start: '1:15 PM', end: '2:15 PM', svc: 'Battery replacement', state: 'available', cap: 1, booked: 0 },
    { id: 'h4', start: '3:00 PM', end: '4:00 PM', svc: 'Group repair clinic', state: 'booked', cust: 'Walk-ins', cap: 3, booked: 2 },
    { id: 'h5', start: '4:30 PM', end: '5:30 PM', svc: 'Data recovery', state: 'booked', cust: 'Saoirse Kelly', cap: 1, booked: 1 },
  ] },
  { key: 'fri', name: 'Fri', date: '26', slots: [
    { id: 'f1', start: '9:00 AM', end: '10:00 AM', svc: 'Hardware diagnostic', state: 'available', cap: 1, booked: 0 },
    { id: 'f2', start: '11:00 AM', end: '12:00 PM', svc: 'Performance tune-up', state: 'available', cap: 1, booked: 0 },
    { id: 'f3', start: '2:00 PM', end: '6:00 PM', svc: 'Closed — workshop', state: 'blocked' },
  ] },
  { key: 'sat', name: 'Sat', date: '27', slots: [
    { id: 's1', start: '10:00 AM', end: '11:00 AM', svc: 'Screen replacement', state: 'available', cap: 1, booked: 0 },
    { id: 's2', start: '11:30 AM', end: '12:30 PM', svc: 'Battery replacement', state: 'booked', cust: 'Cara Doyle', cap: 1, booked: 1 },
    { id: 's3', start: '2:00 PM', end: '3:00 PM', svc: 'After hours', state: 'unavailable' },
  ] },
  { key: 'sun', name: 'Sun', date: '28', slots: [] },
];

const RULES = [
  { ico: IconClock, k: 'Working hours', v: '9:00 – 18:00', d: 'Mon to Sat · closed Sun' },
  { ico: IconRefresh, k: 'Buffer between bookings', v: '15 min', d: 'Auto-added after each job' },
  { ico: IconCalX, k: 'Cancellation window', v: '24 hours', d: 'Free changes before this' },
  { ico: IconUsers, k: 'Max bookings per day', v: '8 jobs', d: 'Stops over-booking your day' },
];

const SERVICES = ['Screen replacement', 'Battery replacement', 'Virus & malware removal', 'Data recovery', 'Hardware diagnostic', 'Performance tune-up', 'Group repair clinic'];
const TIMES = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'];

function Slot({ slot, onClick }) {
  const cls = 'slot ' + slot.state + (slot.overlap ? ' overlap' : '');
  const clickable = slot.state === 'available' || slot.state === 'booked';
  return (
    <div className={cls} onClick={clickable ? onClick : undefined}>
      {slot.overlap && <span className="ovflag"><IconAlert s={11} /> Overlap</span>}
      <div className="stime">
        {slot.state === 'blocked' && <IconLock s={12} />}
        {slot.start}<span style={{ color: 'var(--ink-300)' }}>–</span>{slot.end}
      </div>
      <div className="ssvc">{slot.svc}</div>
      {slot.state === 'booked' && (
        <div className="scust">
          <span className="sava">{initials(slot.cust)}</span>
          <span className="snm">{slot.cust}</span>
        </div>
      )}
      {slot.state === 'booked' && slot.cap > 1 && (
        <div className="capbar"><i style={{ width: (slot.booked / slot.cap * 100) + '%' }}></i></div>
      )}
      <div className="sfoot">
        {slot.state === 'available' && <><span className="sdot"></span>Open · {slot.cap} spot{slot.cap > 1 ? 's' : ''}</>}
        {slot.state === 'booked' && <><span className="sdot"></span>{slot.cap > 1 ? `${slot.booked} of ${slot.cap} booked` : 'Booked'}</>}
        {slot.state === 'blocked' && <>Blocked</>}
        {slot.state === 'unavailable' && <>Unavailable</>}
      </div>
    </div>
  );
}

function AvailabilityPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Badge, Modal, Toast, Select, Input } = DS;

  const [view, setView] = React.useState('ready'); // ready | loading | error
  const [week, setWeek] = React.useState(WEEK);
  const [toast, setToast] = React.useState(null);
  const [modal, setModal] = React.useState(null); // {day, edit?}
  const [weekOffset, setWeekOffset] = React.useState(0);

  // modal form state
  const [fSvc, setFSvc] = React.useState(SERVICES[0]);
  const [fDay, setFDay] = React.useState('thu');
  const [fStart, setFStart] = React.useState('9:00 AM');
  const [fEnd, setFEnd] = React.useState('10:00 AM');
  const [fCap, setFCap] = React.useState(1);
  const [fRepeat, setFRepeat] = React.useState('none');

  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4000); return () => clearTimeout(t); }, [toast]);

  const overlapDays = week.filter((d) => d.slots.some((s) => s.overlap)).map((d) => d.name);
  const totalOpen = week.reduce((n, d) => n + d.slots.filter((s) => s.state === 'available').length, 0);
  const totalBooked = week.reduce((n, d) => n + d.slots.filter((s) => s.state === 'booked').length, 0);

  const weekLabel = weekOffset === 0 ? 'Jun 22 – 28' : weekOffset < 0 ? 'Jun 15 – 21' : 'Jun 29 – Jul 5';

  const openAdd = (dayKey) => {
    setFSvc(SERVICES[0]); setFStart('9:00 AM'); setFEnd('10:00 AM'); setFCap(1); setFRepeat('none');
    setFDay(dayKey || 'thu');
    setModal({ mode: 'add' });
  };
  const openEdit = (dayKey, slot) => {
    setFSvc(slot.svc.includes('—') ? SERVICES[0] : slot.svc); setFStart(slot.start); setFEnd(slot.end);
    setFCap(slot.cap || 1); setFRepeat('none'); setFDay(dayKey);
    setModal({ mode: 'edit', dayKey, slot });
  };

  const saveSlot = () => {
    const newSlot = { id: 'n' + Date.now(), start: fStart, end: fEnd, svc: fSvc, state: 'available', cap: fCap, booked: 0 };
    setWeek((prev) => prev.map((d) => {
      if (modal.mode === 'edit' && modal.slot) {
        if (d.key === modal.dayKey) return { ...d, slots: d.slots.map((s) => s.id === modal.slot.id ? { ...s, ...newSlot, id: s.id, state: s.state, cust: s.cust, booked: s.booked } : s) };
        return d;
      }
      if (fRepeat === 'weekly' || d.key === fDay) {
        return { ...d, slots: [...d.slots, { ...newSlot, id: newSlot.id + d.key }] };
      }
      return d;
    }));
    setModal(null);
    setToast({ tone: 'success', title: modal.mode === 'edit' ? 'Time slot updated' : (fRepeat === 'weekly' ? 'Recurring slots added' : 'Time slot added'),
      message: fRepeat === 'weekly' && modal.mode === 'add' ? `${fSvc} · ${fStart} added to every day this week.` : `${fSvc} · ${fStart}–${fEnd}.` });
  };

  const blockDay = (day) => {
    setWeek((prev) => prev.map((d) => d.key === day.key
      ? { ...d, slots: [{ id: 'blk' + Date.now(), start: '9:00 AM', end: '6:00 PM', svc: 'Blocked — day off', state: 'blocked' }] } : d));
    setToast({ tone: 'warning', title: `${day.name} blocked`, message: 'Customers can no longer book this day.' });
  };
  const clearDay = (day) => {
    setWeek((prev) => prev.map((d) => d.key === day.key ? { ...d, slots: [] } : d));
    setToast({ tone: 'info', title: `${day.name} cleared`, message: 'All time slots removed from this day.' });
  };

  const nav = React.createElement(TopNav, {
    location: 'Dublin, IE', activeLink: 'calendar', avatar: AVATAR,
    links: [{ label: 'Dashboard', value: 'dashboard' }, { label: 'Bookings', value: 'bookings' }, { label: 'Calendar', value: 'calendar' }, { label: 'Services', value: 'services' }],
    ctaLabel: 'Add time slot', onCta: () => openAdd('thu'),
  });

  const dayOpts = week.map((d) => ({ label: `${d.name} ${d.date} Jun`, value: d.key }));

  return (
    <div>
      {nav}

      <div className="container">
        {/* header */}
        <div className="pghead">
          <div>
            <div className="pgcrumb"><IconCal s={14} /> Calendar · Availability</div>
            <h1 className="pgtitle">Availability</h1>
            <p className="pgsub">Manage your open slots, block time off, and control exactly what customers can book. <b>{totalOpen} open</b> · <b>{totalBooked} booked</b> this week.</p>
          </div>
          <div className="pgactions">
            <div className="weeksel">
              <button className="weekarrow" onClick={() => setWeekOffset((o) => o - 1)} aria-label="Previous week"><IconChevL s={20} /></button>
              <div className="weeklbl"><span className="wk">{weekLabel}</span><span className="yr">2026</span></div>
              <button className="weekarrow" onClick={() => setWeekOffset((o) => o + 1)} aria-label="Next week"><IconChevR s={20} /></button>
            </div>
            {weekOffset !== 0 && <button className="todaybtn" onClick={() => setWeekOffset(0)}>This week</button>}
            <Button size="md" leadingIcon={<IconPlus s={18} />} onClick={() => openAdd('thu')}>Add time slot</Button>
          </div>
        </div>

        {/* quick actions */}
        <div className="qbar">
          <button className="qchip" onClick={() => { setView('loading'); setTimeout(() => { setWeek(WEEK); setView('ready'); setToast({ tone: 'success', title: 'Week copied', message: 'Availability from Jun 15 – 21 applied to this week.' }); }, 1100); }}>
            <IconCopy s={17} /> Copy previous week
          </button>
          <button className="qchip" onClick={() => openAdd('thu')}><IconRepeat s={17} /> Add recurring slots</button>
          <button className="qchip" onClick={() => blockDay(week.find((d) => d.today))}><IconBan s={17} /> Block a day</button>
          <button className="qchip danger" onClick={() => clearDay(week.find((d) => d.today))}><IconTrash s={17} /> Clear a day</button>
          <div className="spacer"></div>
          <div className="seg">
            <span className="pvlbl">Preview</span>
            <button className={'segbtn' + (view === 'ready' ? ' on' : '')} onClick={() => setView('ready')}>Schedule</button>
            <button className={'segbtn' + (view === 'loading' ? ' on' : '')} onClick={() => setView('loading')}>Loading</button>
            <button className={'segbtn' + (view === 'error' ? ' on' : '')} onClick={() => setView('error')}>Error</button>
          </div>
        </div>

        {/* legend */}
        <div className="legend">
          <span className="lgi"><span className="lgsw book"></span>Booked</span>
          <span className="lgi"><span className="lgsw open"></span>Available</span>
          <span className="lgi"><span className="lgsw block"></span>Blocked</span>
          <span className="lgi"><span className="lgsw unav"></span>Unavailable</span>
        </div>

        {/* overlap warning */}
        {view === 'ready' && overlapDays.length > 0 && (
          <div className="warnbar">
            <span className="wi"><IconAlert s={20} /></span>
            <div className="wtx">
              <h4>Overlapping time slots on {overlapDays.join(', ')}</h4>
              <p>Two slots share the 9:30–10:00 window. Customers could double-book — adjust the times or remove one.</p>
            </div>
            <button className="wfix" onClick={() => openEdit('wed', week.find((d) => d.key === 'wed').slots[1])}>Review slots</button>
          </div>
        )}

        {/* === board / states === */}
        {view === 'error' ? (
          <div className="errstate">
            <span className="eic"><IconAlert s={34} /></span>
            <h3>We couldn't load your schedule</h3>
            <p>Something went wrong fetching this week's availability. Check your connection and try again — your slots are safe.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <Button variant="outline" size="md" onClick={() => setView('ready')}>Go back</Button>
              <Button size="md" leadingIcon={<IconRefresh s={17} />} onClick={() => { setView('loading'); setTimeout(() => setView('ready'), 1100); }}>Try again</Button>
            </div>
          </div>
        ) : view === 'loading' ? (
          <div className="board">
            {week.map((d) => (
              <div className="daycol" key={d.key}>
                <div className="dayhd"><div className="dname"><span className="dn">{d.name}</span><span className="dd">{d.date}</span></div></div>
                <div className="daybody">
                  <div className="skslot"></div>
                  <div className="skslot" style={{ height: 56 }}></div>
                  <div className="skslot" style={{ height: 64 }}></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="board">
            {week.map((d) => (
              <div className={'daycol' + (d.today ? ' today' : '')} key={d.key}>
                <div className="dayhd">
                  <div className="dname"><span className="dn">{d.name}</span><span className="dd">{d.date}</span></div>
                  {d.today ? <span className="todaypill">Today</span> : <span className="daycount">{d.slots.length || '—'}</span>}
                </div>
                <div className="daybody">
                  {d.slots.length === 0 ? (
                    <div className="dayempty">
                      <span className="dei"><IconCal s={20} /></span>
                      <p>No slots yet</p>
                      <button className="addslot" style={{ marginTop: 0 }} onClick={() => openAdd(d.key)}><IconPlus s={15} /> Add slot</button>
                    </div>
                  ) : (
                    <>
                      {d.slots.map((s) => (
                        <Slot key={s.id} slot={s} onClick={() => openEdit(d.key, s)} />
                      ))}
                      <button className="addslot" onClick={() => openAdd(d.key)}><IconPlus s={15} /> Add slot</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* === rules + tip === */}
        <div className="lowgrid">
          <div className="panel">
            <div className="ruleshd">
              <div className="rt">
                <span className="rti"><IconSliders s={20} /></span>
                <div>
                  <h3>Availability rules</h3>
                  <div className="rsub">Defaults applied to every new slot you open</div>
                </div>
              </div>
              <button className="editrules" onClick={() => setToast({ tone: 'info', title: 'Edit rules', message: 'Adjust your working hours, buffers and limits.' })}><IconSliders s={16} /> Edit rules</button>
            </div>
            <div className="rulesgrid">
              {RULES.map((r, i) => {
                const Ic = r.ico;
                return (
                  <div className="rule" key={i}>
                    <span className="rico"><Ic s={20} /></span>
                    <div>
                      <div className="rk">{r.k}</div>
                      <div className="rv">{r.v}</div>
                      <div className="rd">{r.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tipcard">
            <SunDecor />
            <span className="tipeyebrow"><IconBolt s={14} /> Fill your week</span>
            <h3>Sunday is wide open.</h3>
            <p>You have no slots on Sunday and only two on Saturday. Open a few to catch weekend bookings.</p>
            <div className="tipstats">
              <div className="tipstat"><div className="tn">{totalOpen}</div><div className="tl">Open slots</div></div>
              <div className="tipstat"><div className="tn">{totalBooked}</div><div className="tl">Booked</div></div>
              <div className="tipstat"><div className="tn">71%</div><div className="tl">Filled</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* === add / edit modal === */}
      <Modal open={!!modal} onClose={() => setModal(null)}
        eyebrow={modal && modal.mode === 'edit' ? 'Edit slot' : 'New slot'}
        title={modal && modal.mode === 'edit' ? 'Edit time slot' : 'Add a time slot'}
        width={540}
        footer={modal && (
          <>
            <Button variant="ghost" size="md" onClick={() => setModal(null)}>Cancel</Button>
            <Button size="md" onClick={saveSlot}>{modal.mode === 'edit' ? 'Save changes' : 'Save slot'}</Button>
          </>
        )}>
        {modal && (
          <div className="mform">
            <div className="fld">
              <label>Service type</label>
              <Select options={SERVICES} value={fSvc} onChange={setFSvc} />
            </div>
            <div className="fld">
              <label>Date</label>
              <Select options={dayOpts} value={fDay} onChange={setFDay} />
            </div>
            <div className="mrow">
              <div className="fld">
                <label>Start time</label>
                <Select options={TIMES} value={fStart} onChange={setFStart} />
              </div>
              <div className="fld">
                <label>End time</label>
                <Select options={TIMES} value={fEnd} onChange={setFEnd} />
              </div>
            </div>
            <div className="fld">
              <label>Slot capacity</label>
              <div className="stepper">
                <button className="stepbtn" onClick={() => setFCap((c) => Math.max(1, c - 1))} aria-label="Decrease">−</button>
                <span className="sv">{fCap}</span>
                <button className="stepbtn" onClick={() => setFCap((c) => Math.min(12, c + 1))} aria-label="Increase">+</button>
                <span className="su">{fCap > 1 ? 'customers' : 'customer'} per slot</span>
              </div>
            </div>
            <div className="fld">
              <label>Repeat</label>
              <div className="repeat">
                <button className={'repbtn' + (fRepeat === 'none' ? ' on' : '')} onClick={() => setFRepeat('none')}><IconCal s={18} /> Does not repeat</button>
                <button className={'repbtn' + (fRepeat === 'weekly' ? ' on' : '')} onClick={() => setFRepeat('weekly')}><IconRepeat s={18} /> Weekly</button>
              </div>
            </div>
            <div className="mnote">
              <IconInfo s={18} />
              <span>A <b>15 min buffer</b> is added automatically after this slot, per your availability rules.</span>
            </div>
          </div>
        )}
      </Modal>

      <div className="toasts">
        {toast && <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
window.AvailabilityPage = AvailabilityPage;
