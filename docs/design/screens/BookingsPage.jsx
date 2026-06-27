// ServiceFlow — Bookings management screen.
// Composes design-system primitives from window.ServiceFlowDesignSystem_c6741d.
// Renders into the CSS defined in "Bookings Management.html".

const ico = (p) => React.createElement('svg', { width: p.s || 18, height: p.s || 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }, p.children);
const IconSearch = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 11, cy: 11, r: 7 }), React.createElement('path', { key: 2, d: 'M21 21l-4-4' })] });
const IconCal = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4' })] });
const IconCalPlus = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 4, width: 18, height: 18, rx: 4 }), React.createElement('path', { key: 2, d: 'M3 9h18M8 2v4M16 2v4M12 13v4M10 15h4' })] });
const IconChev = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M6 9l6 6 6-6' }) });
const IconX = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M6 6l12 12M18 6L6 18' }) });
const IconCheck = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M4 12l5 5L20 6' }) });
const IconEye = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z' }), React.createElement('circle', { key: 2, cx: 12, cy: 12, r: 3 })] });
const IconMail = ({ s }) => ico({ s, children: [React.createElement('rect', { key: 1, x: 3, y: 5, width: 18, height: 14, rx: 3 }), React.createElement('path', { key: 2, d: 'M4 7l8 6 8-6' })] });
const IconPhone = ({ s }) => ico({ s, children: React.createElement('path', { d: 'M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z' }) });
const IconPin = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }), React.createElement('circle', { key: 2, cx: 12, cy: 10, r: 3 })] });
const IconClock = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M12 7v5l3 2' })] });
const IconTag = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M20 13l-7 7-9-9V4h7l9 9Z' }), React.createElement('circle', { key: 2, cx: 7.5, cy: 7.5, r: 1.4 })] });
const IconNote = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M5 3h14v18l-3-2-2 2-2-2-2 2-3-2V3Z' }), React.createElement('path', { key: 2, d: 'M9 8h6M9 12h5' })] });
const IconCheckCircle = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M8.5 12.5l2.5 2.5 4.5-5' })] });
const IconAlert = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M10.3 4l-7.5 13A2 2 0 0 0 4.5 20h15a2 2 0 0 0 1.7-3l-7.5-13a2 2 0 0 0-3.4 0Z' }), React.createElement('path', { key: 2, d: 'M12 9v4M12 17h.01' })] });
const IconRefresh = ({ s }) => ico({ s, children: [React.createElement('path', { key: 1, d: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5' }), React.createElement('path', { key: 2, d: 'M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5' })] });
const IconBan = ({ s }) => ico({ s, children: [React.createElement('circle', { key: 1, cx: 12, cy: 12, r: 9 }), React.createElement('path', { key: 2, d: 'M5.6 5.6l12.8 12.8' })] });

const AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Crect width='46' height='46' fill='%23FFD43B'/%3E%3Ctext x='23' y='30' font-family='Plus Jakarta Sans,sans-serif' font-size='17' font-weight='800' fill='%231B1813' text-anchor='middle'%3ESM%3C/text%3E%3C/svg%3E";

// status -> badge tone + label + rail color
const STATUS = {
  new: { tone: 'warning', label: 'New' },
  confirmed: { tone: 'info', label: 'Confirmed' },
  completed: { tone: 'success', label: 'Completed' },
  cancelled: { tone: 'neutral', label: 'Cancelled' },
};

const BOOKINGS = [
  { ref: 'SF-7A2K9', cust: 'Aoife Byrne', init: 'AB', svc: 'Screen replacement', svcKey: 'screen', d: '26 Jun', dd: 'Thu', t: '9:30 AM', via: 'email', email: 'aoife.byrne@email.com', phone: '+353 86 102 4471', price: '€140', status: 'new', note: 'Cracked top-right corner, screen still works but flickers. Cigarette-free home, buzzer is flat #4.' },
  { ref: 'SF-2H8K4', cust: 'Cian Walsh', init: 'CW', svc: 'Data recovery', svcKey: 'data', d: '26 Jun', dd: 'Thu', t: '3:00 PM', via: 'phone', email: 'cian.walsh@email.com', phone: '+353 87 449 9012', price: '€180', status: 'new', note: 'Laptop won\u2019t boot after a fall. Need wedding photos off the drive if at all possible \u2014 thank you!' },
  { ref: 'SF-1G7Y5', cust: 'Jack Nolan', init: 'JN', svc: 'Data recovery', svcKey: 'data', d: '30 Jun', dd: 'Mon', t: '9:00 AM', via: 'phone', email: 'jack.nolan@email.com', phone: '+353 85 771 3360', price: '€180', status: 'new', note: '' },
  { ref: 'SF-4C1M2', cust: 'Liam Murphy', init: 'LM', svc: 'Virus & malware removal', svcKey: 'virus', d: '26 Jun', dd: 'Thu', t: '11:00 AM', via: 'phone', email: 'liam.m@email.com', phone: '+353 83 220 8845', price: '€70', status: 'confirmed', note: 'Pop-ups everywhere after a dodgy download. Will drop in at the shop.' },
  { ref: 'SF-9X3P7', cust: 'Niamh O\u2019Connor', init: 'NO', svc: 'Battery replacement', svcKey: 'battery', d: '26 Jun', dd: 'Thu', t: '1:15 PM', via: 'email', email: 'niamh.oc@email.com', phone: '+353 86 990 1123', price: '€95', status: 'confirmed', note: '' },
  { ref: 'SF-6B5N1', cust: 'Saoirse Kelly', init: 'SK', svc: 'Performance tune-up', svcKey: 'tuneup', d: '26 Jun', dd: 'Thu', t: '4:30 PM', via: 'email', email: 'saoirse.k@email.com', phone: '+353 87 334 5567', price: '€60', status: 'confirmed', note: 'Machine is very slow on startup. Mostly used for college work.' },
  { ref: 'SF-3T9R8', cust: 'Tom Doyle', init: 'TD', svc: 'Hardware diagnostic', svcKey: 'diag', d: '24 Jun', dd: 'Tue', t: '10:00 AM', via: 'email', email: 'tom.doyle@email.com', phone: '+353 86 445 8890', price: '€45', status: 'completed', note: 'Fan rattling at high load.' },
  { ref: 'SF-5L2W6', cust: 'Emma Ryan', init: 'ER', svc: 'Screen replacement', svcKey: 'screen', d: '23 Jun', dd: 'Mon', t: '2:00 PM', via: 'phone', email: 'emma.ryan@email.com', phone: '+353 85 661 2204', price: '€140', status: 'completed', note: '' },
  { ref: 'SF-0F6V2', cust: 'Orla Brennan', init: 'OB', svc: 'Keyboard repair', svcKey: 'keyboard', d: '21 Jun', dd: 'Sat', t: '11:30 AM', via: 'email', email: 'orla.b@email.com', phone: '+353 87 118 7740', price: '€85', status: 'completed', note: 'A few sticky keys after a coffee spill.' },
  { ref: 'SF-8D4Q3', cust: 'Mark Fitzgerald', init: 'MF', svc: 'Performance tune-up', svcKey: 'tuneup', d: '22 Jun', dd: 'Sun', t: '3:30 PM', via: 'email', email: 'mark.fitz@email.com', phone: '+353 86 552 9931', price: '€60', status: 'cancelled', note: 'Sorted it myself in the end \u2014 sorry for the late notice.' },
];

const SERVICE_OPTS = [
  { label: 'All services', value: 'all' },
  { label: 'Screen replacement', value: 'screen' },
  { label: 'Data recovery', value: 'data' },
  { label: 'Virus & malware removal', value: 'virus' },
  { label: 'Battery replacement', value: 'battery' },
  { label: 'Performance tune-up', value: 'tuneup' },
  { label: 'Hardware diagnostic', value: 'diag' },
  { label: 'Keyboard repair', value: 'keyboard' },
];
const DATE_OPTS = [
  { label: 'Any date', value: 'all' },
  { label: 'Today', value: 'today' },
  { label: 'This week', value: 'week' },
  { label: 'This month', value: 'month' },
];

function timelineFor(b) {
  const base = [
    { state: 'done', tt: 'Booking requested', ts: `${b.cust} booked online`, tw: `${b.d} \u00B7 via ${b.via}` },
    { state: 'done', tt: 'Confirmation email sent', ts: 'Auto-sent to customer', tw: `${b.d}` },
  ];
  if (b.status === 'new') base.push({ state: 'now', tt: 'Awaiting your confirmation', ts: 'Confirm to lock in the slot', tw: 'Now' });
  if (b.status === 'confirmed') base.push({ state: 'done', tt: 'You confirmed the booking', ts: 'Sarah confirmed the slot', tw: `${b.d}` }, { state: 'now', tt: 'Upcoming visit', ts: `Scheduled for ${b.t}`, tw: b.d });
  if (b.status === 'completed') base.push({ state: 'done', tt: 'You confirmed the booking', ts: 'Sarah confirmed the slot', tw: b.d }, { state: 'done', tt: 'Marked completed', ts: 'Service finished & paid', tw: `${b.d} \u00B7 ${b.t}` });
  if (b.status === 'cancelled') base.push({ state: 'done', tt: 'Booking cancelled', ts: 'Cancelled by customer', tw: b.d });
  return base;
}

function BookingsPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const { TopNav, Button, Badge, Select, Tabs, EmptyState, Toast } = DS;

  const [q, setQ] = React.useState('');
  const [tab, setTab] = React.useState('all');
  const [svc, setSvc] = React.useState('all');
  const [dt, setDt] = React.useState('all');
  const [preview, setPreview] = React.useState('data'); // data | loading | empty | error
  const [openRef, setOpenRef] = React.useState('SF-7A2K9');
  const [overrides, setOverrides] = React.useState({}); // ref -> new status
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(null), 4000); return () => clearTimeout(t); }, [toast]);

  const statusOf = (b) => overrides[b.ref] || b.status;
  const setStatus = (b, s, msg) => { setOverrides((p) => ({ ...p, [b.ref]: s })); setToast(msg); };

  const counts = React.useMemo(() => {
    const c = { all: BOOKINGS.length, new: 0, confirmed: 0, completed: 0, cancelled: 0 };
    BOOKINGS.forEach((b) => { c[statusOf(b)]++; });
    return c;
  }, [overrides]);

  const rows = BOOKINGS.filter((b) => {
    if (tab !== 'all' && statusOf(b) !== tab) return false;
    if (svc !== 'all' && b.svcKey !== svc) return false;
    if (q && !(`${b.cust} ${b.svc} ${b.ref}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  });

  const filtersActive = q || tab !== 'all' || svc !== 'all' || dt !== 'all';
  const clearAll = () => { setQ(''); setTab('all'); setSvc('all'); setDt('all'); };

  const open = BOOKINGS.find((b) => b.ref === openRef);
  const openStatus = open ? statusOf(open) : null;

  const nav = React.createElement(TopNav, {
    location: 'Dublin, IE', activeLink: 'bookings', avatar: AVATAR,
    links: [{ label: 'Dashboard', value: 'dashboard' }, { label: 'Bookings', value: 'bookings' }, { label: 'Calendar', value: 'calendar' }, { label: 'Services', value: 'services' }],
    ctaLabel: 'Add availability',
    onCta: () => setToast({ tone: 'info', title: 'Open your calendar', message: 'Add open slots customers can book.' }),
  });

  // contextual row action by status
  const rowAction = (b) => {
    const s = statusOf(b);
    if (s === 'new') return <button className="iconbtn primary" title="Confirm booking" onClick={(e) => { e.stopPropagation(); setStatus(b, 'confirmed', { tone: 'success', title: 'Booking confirmed', message: `${b.cust} \u00B7 ${b.svc}` }); }}><IconCheck s={18} /></button>;
    if (s === 'confirmed') return <button className="iconbtn go" title="Mark completed" onClick={(e) => { e.stopPropagation(); setStatus(b, 'completed', { tone: 'success', title: 'Marked completed', message: `${b.cust} \u00B7 ${b.svc}` }); }}><IconCheckCircle s={18} /></button>;
    return null;
  };

  return (
    <div>
      {nav}

      <div className="container">
        {/* page header */}
        <div className="pghead">
          <div>
            <div className="pgcrumb"><IconCal s={15} /> Manage</div>
            <h1 className="pgtitle">Bookings</h1>
            <p className="pgsub">Every request in one place. <b>{counts.new} new</b> waiting on you today.</p>
          </div>
          <div className="pgactions">
            <button className="daterange"><IconCal s={17} /> Jun 1 – Jun 30 <span className="chev"><IconChev s={16} /></span></button>
            <Button size="md" leadingIcon={<IconCalPlus s={18} />}
              onClick={() => setToast({ tone: 'info', title: 'Open your calendar', message: 'Add open slots customers can book.' })}>
              Add availability
            </Button>
          </div>
        </div>

        {/* filter bar */}
        <div className="filterbar">
          <div className="fsearch">
            <IconSearch s={18} />
            <input placeholder="Search by customer, service or reference…" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <Select value={svc} onChange={setSvc} options={SERVICE_OPTS} style={{ width: 210 }} />
          <Select value={dt} onChange={setDt} options={DATE_OPTS} style={{ width: 150 }} />
          <span className="fdivide"></span>
          <button className="clearbtn" disabled={!filtersActive} onClick={clearAll}><IconX s={15} /> Clear</button>
        </div>

        {/* status tabs + state preview */}
        <div className="tabrow">
          <Tabs value={tab} onChange={setTab} tabs={[
            { label: 'All', value: 'all', count: counts.all },
            { label: 'New', value: 'new', count: counts.new },
            { label: 'Confirmed', value: 'confirmed', count: counts.confirmed },
            { label: 'Completed', value: 'completed', count: counts.completed },
            { label: 'Cancelled', value: 'cancelled', count: counts.cancelled },
          ]} />
          <div className="statepreview">
            <span className="pvlbl">Preview</span>
            <div className="seg">
              {['data', 'loading', 'empty', 'error'].map((p) => (
                <button key={p} className={'segbtn' + (preview === p ? ' on' : '')} onClick={() => setPreview(p)}>{p[0].toUpperCase() + p.slice(1)}</button>
              ))}
            </div>
          </div>
        </div>

        {/* table / states */}
        {preview === 'loading' ? (
          <div className="tbl">
            <div className="tblwrap">
            <div className="thead"><div className="tcols">
              <div>Ref</div><div>Customer</div><div>Service</div><div>Date &amp; time</div><div>Price</div><div>Status</div><div></div>
            </div></div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="skelrow" key={i}><div className="tcols">
                <div><span className="sk" style={{ width: 70 }}></span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span className="skc"></span><span className="sk" style={{ width: 96 }}></span></div>
                <div><span className="sk" style={{ width: 120 }}></span></div>
                <div><span className="sk" style={{ width: 80 }}></span></div>
                <div><span className="sk" style={{ width: 48 }}></span></div>
                <div><span className="sk" style={{ width: 74, height: 24, borderRadius: 999 }}></span></div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 7 }}><span className="skc"></span><span className="skc"></span></div>
              </div></div>
            ))}
            </div>
          </div>
        ) : preview === 'error' ? (
          <div className="errstate">
            <span className="eic"><IconAlert s={34} /></span>
            <h3>We couldn't load your bookings</h3>
            <p>Something went wrong on our end. Check your connection and try again — your bookings are safe.</p>
            <div style={{ marginTop: 6 }}>
              <Button variant="outline" leadingIcon={<IconRefresh s={17} />} onClick={() => setPreview('data')}>Try again</Button>
            </div>
          </div>
        ) : preview === 'empty' || rows.length === 0 ? (
          <div style={{ marginTop: 16 }}>
            <EmptyState icon={<IconSearch s={30} />} title="No bookings match"
              description="Try a different status, service or search term — or clear your filters to see everything."
              actionLabel="Clear filters" onAction={clearAll} />
          </div>
        ) : (
          <div className="tbl">
            <div className="tblwrap">
            <div className="thead"><div className="tcols">
              <div>Ref</div><div>Customer</div><div>Service</div><div>Date &amp; time</div><div>Price</div><div>Status</div><div></div>
            </div></div>
            {rows.map((b) => {
              const s = statusOf(b);
              const st = STATUS[s];
              return (
                <div className={'trow' + (b.ref === openRef ? ' sel' : '')} key={b.ref} onClick={() => setOpenRef(b.ref)}>
                  <div className="tcols">
                    <div className="cref">{b.ref}</div>
                    <div className="ccust">
                      <span className="cava">{b.init}</span>
                      <span className="cust-tx">
                        <span className="nm">{b.cust}</span>
                        <span className="ct">{b.via === 'email' ? <IconMail s={12} /> : <IconPhone s={12} />}{b.via === 'email' ? 'Email' : 'Phone'}</span>
                      </span>
                    </div>
                    <div className="csvc">{b.svc}</div>
                    <div className="cdt"><span className="d">{b.dd} {b.d}</span><span className="tm">{b.t}</span></div>
                    <div className="cprice">{b.price}</div>
                    <div><Badge tone={st.tone} dot>{st.label}</Badge></div>
                    <div className="cact">
                      {rowAction(b)}
                      <button className="iconbtn" title="View details" onClick={(e) => { e.stopPropagation(); setOpenRef(b.ref); }}><IconEye s={18} /></button>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        )}
        <div style={{ height: 60 }}></div>
      </div>

      {/* detail drawer */}
      {open && (
        <>
          <div className="scrim" onClick={() => setOpenRef(null)}></div>
          <aside className="drawer">
            <div className="dwtop">
              <div>
                <div className="dwref"><IconTag s={14} /> {open.ref}</div>
                <h2 className="dwname">{open.cust}</h2>
                <Badge tone={STATUS[openStatus].tone} dot>{STATUS[openStatus].label}</Badge>
              </div>
              <button className="dwclose" onClick={() => setOpenRef(null)}><IconX s={18} /></button>
            </div>

            <div className="dwbody">
              {/* contact */}
              <div className="dwsec">
                <p className="dwlabel">Contact</p>
                <div className="dwcontact">
                  <div className="dwline"><span className="li"><IconMail s={17} /></span><a href="#">{open.email}</a></div>
                  <div className="dwline"><span className="li"><IconPhone s={17} /></span>{open.phone}</div>
                  <div className="dwline"><span className="li"><IconPin s={17} /></span>Park West, Dublin 12 <span className="mut">· 3.2 km away</span></div>
                </div>
              </div>

              {/* service */}
              <div className="dwsec">
                <p className="dwlabel">Service</p>
                <div className="svcbox">
                  <div className="srow"><span className="sk2"><IconTag s={15} /> Service</span><span className="sv">{open.svc}</span></div>
                  <div className="srow"><span className="sk2"><IconCal s={15} /> Date</span><span className="sv">{open.dd} {open.d}</span></div>
                  <div className="srow"><span className="sk2"><IconClock s={15} /> Time</span><span className="sv mono">{open.t} · 60 min</span></div>
                  <div className="srow"><span className="sk2"><IconTag s={15} /> Price</span><span className="sv big">{open.price}</span></div>
                </div>
              </div>

              {/* note */}
              <div className="dwsec">
                <p className="dwlabel">Customer note</p>
                {open.note
                  ? <div className="notebox"><span className="ni"><IconNote s={18} /></span><span>{open.note}</span></div>
                  : <div className="notebox empty"><span className="ni"><IconNote s={18} /></span><span>No note left with this booking.</span></div>}
              </div>

              {/* timeline */}
              <div className="dwsec">
                <p className="dwlabel">Timeline</p>
                <div className="timeline">
                  {timelineFor({ ...open, status: openStatus }).map((it, i) => (
                    <div className="tlitem" key={i}>
                      <span className={'tldot ' + it.state}></span>
                      <div className="tt">{it.tt}</div>
                      <div className="ts">{it.ts}</div>
                      <div className="tw">{it.tw}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* footer actions adapt to status */}
            <div className="dwfoot">
              {openStatus === 'new' && (
                <>
                  <Button full size="md" leadingIcon={<IconCheck s={18} />}
                    onClick={() => setStatus(open, 'confirmed', { tone: 'success', title: 'Booking confirmed', message: `${open.cust} \u00B7 ${open.svc}` })}>
                    Confirm booking
                  </Button>
                  <div className="frow">
                    <button className="dangerbtn" onClick={() => setStatus(open, 'cancelled', { tone: 'warning', title: 'Booking cancelled', message: `${open.ref} was cancelled.` })}><IconBan s={17} /> Cancel</button>
                  </div>
                </>
              )}
              {openStatus === 'confirmed' && (
                <>
                  <Button full size="md" variant="secondary" leadingIcon={<IconCheckCircle s={18} />}
                    onClick={() => setStatus(open, 'completed', { tone: 'success', title: 'Marked completed', message: `${open.cust} \u00B7 ${open.svc}` })}>
                    Mark completed
                  </Button>
                  <div className="frow">
                    <button className="dangerbtn" onClick={() => setStatus(open, 'cancelled', { tone: 'warning', title: 'Booking cancelled', message: `${open.ref} was cancelled.` })}><IconBan s={17} /> Cancel booking</button>
                  </div>
                </>
              )}
              {openStatus === 'completed' && <div className="closednote ok"><IconCheckCircle s={17} /> Completed · paid {open.price}</div>}
              {openStatus === 'cancelled' && <div className="closednote no"><IconBan s={17} /> This booking was cancelled</div>}
            </div>
          </aside>
        </>
      )}

      <div className="toasts">
        {toast && <Toast tone={toast.tone} title={toast.title} message={toast.message} onClose={() => setToast(null)} />}
      </div>
    </div>
  );
}
window.BookingsPage = BookingsPage;
