/* @ds-bundle: {"format":3,"namespace":"ServiceFlowDesignSystem_c6741d","components":[{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"BookingCard","sourcePath":"components/data/BookingCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyState","sourcePath":"components/data/EmptyState.jsx"},{"name":"ServiceCard","sourcePath":"components/data/ServiceCard.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TimeSlot","sourcePath":"components/forms/TimeSlot.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/data/Badge.jsx":"6f5bde83bfae","components/data/BookingCard.jsx":"0e45a7472c95","components/data/DataTable.jsx":"6859b96fdc6d","components/data/EmptyState.jsx":"8238b8a156e1","components/data/ServiceCard.jsx":"b64dd81d3b11","components/feedback/Modal.jsx":"953e198540a3","components/feedback/Toast.jsx":"3d8bfcc7e3c3","components/forms/Button.jsx":"5a2030e667df","components/forms/DatePicker.jsx":"6df6fa0b4402","components/forms/Input.jsx":"6e297dc2c8aa","components/forms/SearchField.jsx":"0cebbefb1eab","components/forms/Select.jsx":"469b7ef57da7","components/forms/TimeSlot.jsx":"fd6d54ec0d47","components/navigation/Tabs.jsx":"b45bd99f4d14","components/navigation/TopNav.jsx":"57596d2a4e11","ui_kits/booking/BookingFlow.jsx":"2a7cba5b1917","ui_kits/booking/HomeSearch.jsx":"1af3b512f242","ui_kits/booking/ResultsPage.jsx":"d41de2403598","ui_kits/booking/data.js":"4dfd250ff27c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ServiceFlowDesignSystem_c6741d = window.ServiceFlowDesignSystem_c6741d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Badge.jsx
try { (() => {
/**
 * ServiceFlow Badge — small pill for status + categories. Soft tinted fills
 * (not loud solid blocks), warm-rounded, label in semibold. Use `dot` for a
 * leading status dot.
 */
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style = {}
}) {
  const tones = {
    neutral: {
      bg: 'var(--cream-200)',
      fg: 'var(--ink-700)',
      dotc: 'var(--ink-400)'
    },
    accent: {
      bg: 'var(--yellow-100)',
      fg: 'var(--yellow-700)',
      dotc: 'var(--accent-strong)'
    },
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-700)',
      dotc: 'var(--success-500)'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-700)',
      dotc: 'var(--warning-500)'
    },
    error: {
      bg: 'var(--error-100)',
      fg: 'var(--error-700)',
      dotc: 'var(--error-500)'
    },
    info: {
      bg: 'var(--info-100)',
      fg: 'var(--info-700)',
      dotc: 'var(--info-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '5px 13px',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.01em',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dotc,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/BookingCard.jsx
try { (() => {
/**
 * ServiceFlow BookingCard — a confirmed/upcoming booking summary. Reads like
 * a friendly boarding pass: yellow accent rail, big date block, service +
 * provider, status badge, and an action row. Warm, physical, not a table row.
 */
function BookingCard({
  month,
  day,
  service,
  provider,
  time,
  location,
  status = {
    tone: 'success',
    label: 'Confirmed',
    dot: true
  },
  code,
  onPrimary,
  primaryLabel = 'Manage',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: '0 26px',
      background: 'var(--yellow-50)',
      borderRight: '2px dashed var(--border)',
      minWidth: 108
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--accent-press)'
    }
  }, month), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--weight-extra)',
      lineHeight: 1,
      color: 'var(--ink-900)'
    }
  }, day)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, service), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status.tone,
    dot: status.dot
  }, status.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, provider && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, provider), time && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)'
    }
  }, time), location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-muted)'
    }
  }, location)), code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      letterSpacing: '0.05em'
    }
  }, "REF \xB7 ", code)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrimary,
    style: {
      padding: '0 22px',
      height: 46,
      border: '1.5px solid var(--border-strong)',
      background: 'var(--white)',
      color: 'var(--ink-800)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--ink-800)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  }, primaryLabel)));
}
Object.assign(__ds_scope, { BookingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BookingCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * ServiceFlow DataTable — bookings/appointments table that stays warm and
 * airy. Rounded panel, tinted (not grey) header, generous row height, hover
 * highlight, and a subtle warm divider — not a dense enterprise grid.
 * Cells may be plain values, {badge:{tone,label}}, or any React node.
 */
function DataTable({
  columns = [],
  rows = [],
  onRowClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--cream-100)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '16px 22px',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      whiteSpace: 'nowrap'
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    onClick: () => onRowClick && onRowClick(row),
    style: {
      borderTop: '1px solid var(--border-soft)',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--yellow-50)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, columns.map(c => {
    const cell = row[c.key];
    const isBadge = cell && typeof cell === 'object' && cell.badge;
    return /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        textAlign: c.align || 'left',
        padding: '18px 22px',
        fontSize: 'var(--text-sm)',
        fontWeight: c.strong ? 'var(--weight-bold)' : 'var(--weight-medium)',
        color: c.muted ? 'var(--text-muted)' : 'var(--text-heading)',
        fontFamily: c.mono ? 'var(--font-mono)' : 'var(--font-sans)',
        whiteSpace: 'nowrap'
      }
    }, isBadge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: cell.badge.tone,
      dot: cell.badge.dot
    }, cell.badge.label) : cell);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ServiceCard.jsx
try { (() => {
/**
 * ServiceFlow ServiceCard — a clear, photo-led card for a bookable service.
 * Big rounded image, charcoal title, provider + rating row, bold price, and
 * a pill CTA. Lifts on hover. Avoids the generic SaaS card (no thin grey
 * border + tiny text); this is a friendly marketplace tile.
 */
function ServiceCard({
  image,
  title,
  provider,
  rating,
  reviews,
  price,
  priceUnit = '',
  tag,
  duration,
  onBook,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 168,
      background: image ? `center/cover url(${image})` : 'linear-gradient(135deg, var(--yellow-200), var(--cream-200))'
    }
  }, tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "accent"
  }, tag)), duration && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 14,
      right: 14,
      background: 'rgba(27,24,19,0.82)',
      color: 'var(--cream-50)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)'
    }
  }, provider), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "var(--accent-strong)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 7.1-1.01z"
  })), rating, reviews != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "(", reviews, ")"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1.2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, price), priceUnit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)'
    }
  }, priceUnit)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onBook,
    style: {
      padding: '0 22px',
      height: 44,
      border: 'none',
      background: hover ? 'var(--accent-hover)' : 'var(--accent-strong)',
      color: 'var(--text-on-accent)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, "Book"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * ServiceFlow Modal — large, rounded, friendly confirmation/booking dialog.
 * Warm scrim, big radius, soft lift, optional accent header strip. Not a
 * cramped grey alert box. Footer actions sit right-aligned.
 */
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 520,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'rgba(27, 24, 19, 0.42)',
      backdropFilter: 'blur(3px)',
      animation: 'sf-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '88vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      animation: 'sf-pop var(--dur-slow) var(--ease-spring)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--space-7) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--accent-press)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1.15
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      flexShrink: 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--cream-100)',
      color: 'var(--ink-600)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--cream-200)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--cream-100)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: 'var(--space-5) var(--space-7)',
      borderTop: '1px solid var(--border-soft)',
      background: 'var(--cream-50)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes sf-fade{from{opacity:0}to{opacity:1}}@keyframes sf-pop{from{opacity:0;transform:translateY(12px) scale(0.97)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * ServiceFlow Toast — warm, rounded notification. Left accent rail in the
 * semantic colour, bold title, optional message. Slides up with a gentle
 * spring. Not a flat grey snackbar.
 */
function Toast({
  tone = 'success',
  title,
  message,
  onClose,
  style = {}
}) {
  const tones = {
    success: {
      rail: 'var(--success-500)',
      icon: 'M5 13l4 4L19 7'
    },
    warning: {
      rail: 'var(--warning-500)',
      icon: 'M12 8v5M12 17h.01'
    },
    error: {
      rail: 'var(--error-500)',
      icon: 'M15 9l-6 6M9 9l6 6'
    },
    info: {
      rail: 'var(--info-500)',
      icon: 'M12 11v5M12 8h.01'
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      minWidth: 320,
      maxWidth: 420,
      padding: '16px 18px 16px 16px',
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: `5px solid ${t.rail}`,
      animation: 'sf-toast var(--dur-slow) var(--ease-spring)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: t.rail,
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon,
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      flexShrink: 0,
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-400)',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("style", null, `@keyframes sf-toast{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceFlow Button.
 * Pill-shaped, confident, touch-friendly. Primary is filled sunny
 * yellow with CHARCOAL text (not white) for poster-like legibility.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = 'button',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 18px',
      height: 40,
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '0 26px',
      height: 52,
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '0 34px',
      height: 62,
      fontSize: 'var(--text-lg)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: full ? '100%' : 'auto',
    border: '1.5px solid transparent',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-bold)',
    lineHeight: 1,
    letterSpacing: '-0.01em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--accent-strong)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--shadow-accent)'
    },
    secondary: {
      background: 'var(--ink-800)',
      color: 'var(--cream-50)'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--ink-800)',
      borderColor: 'var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)'
    }
  };
  const hoverByVariant = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--accent-hover)' : 'var(--accent-strong)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--ink-900)' : 'var(--ink-800)';
    },
    outline: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--ink-800)' : 'var(--border-strong)';
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--cream-100)' : 'transparent';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) hoverByVariant[variant](e, true);
    },
    onMouseLeave: e => {
      if (!disabled) hoverByVariant[variant](e, false);
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px) scale(0.985)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyState.jsx
try { (() => {
/**
 * ServiceFlow EmptyState — friendly, encouraging, never a sad grey box.
 * Big warm circular icon halo, confident headline in the display font, a
 * supportive line, and a primary CTA to move forward.
 */
function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14,
      padding: 'var(--space-9) var(--space-6)',
      background: 'var(--surface-card)',
      border: '1.5px dashed var(--border)',
      borderRadius: 'var(--radius-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 88,
      height: 88,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 35% 30%, var(--yellow-100), var(--yellow-50))',
      color: 'var(--accent-press)',
      boxShadow: 'inset 0 0 0 1.5px var(--yellow-200)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      marginTop: 4,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 380,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description), actionLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onAction
  }, actionLabel)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
/**
 * ServiceFlow DatePicker — a horizontal "day strip" (the airline fare-strip
 * pattern) rather than a cramped calendar grid. Each day is a tall rounded
 * card with weekday, date, and an availability hint. Selected day fills yellow.
 */
function DatePicker({
  days = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      paddingBottom: 4,
      ...style
    }
  }, days.map(d => {
    const selected = (d.value ?? d.date) === value;
    const soldOut = d.state === 'soldout';
    return /*#__PURE__*/React.createElement("button", {
      key: d.value ?? d.date,
      type: "button",
      disabled: soldOut,
      onClick: () => onChange && onChange(d.value ?? d.date),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        flex: '0 0 auto',
        minWidth: 92,
        padding: '16px 14px',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${selected ? 'var(--accent-strong)' : 'var(--border)'}`,
        background: selected ? 'var(--accent-strong)' : soldOut ? 'var(--cream-100)' : 'var(--white)',
        boxShadow: selected ? 'var(--shadow-accent)' : 'var(--shadow-xs)',
        cursor: soldOut ? 'not-allowed' : 'pointer',
        opacity: soldOut ? 0.6 : 1,
        transition: 'all var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!selected && !soldOut) e.currentTarget.style.borderColor = 'var(--accent-strong)';
      },
      onMouseLeave: e => {
        if (!selected && !soldOut) e.currentTarget.style.borderColor = 'var(--border)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: selected ? 'var(--ink-800)' : 'var(--ink-400)'
      }
    }, d.weekday), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-h3)',
        fontWeight: 'var(--weight-bold)',
        lineHeight: 1,
        color: selected ? 'var(--ink-900)' : 'var(--text-heading)'
      }
    }, d.date), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        color: selected ? 'var(--ink-800)' : soldOut ? 'var(--text-disabled)' : 'var(--success-500)'
      }
    }, soldOut ? 'Full' : d.hint));
  }));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceFlow Input. Big, touch-friendly, rounded. Floating label
 * pattern with a yellow focus ring — feels like an airline search box,
 * not an admin form field.
 */
function Input({
  label,
  type = 'text',
  size = 'md',
  icon = null,
  hint = null,
  error = null,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    md: 56,
    lg: 66
  };
  const h = heights[size] || 56;
  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    height: h,
    padding: icon ? '0 20px 0 18px' : '0 20px',
    background: disabled ? 'var(--cream-100)' : 'var(--white)',
    border: `1.5px solid ${error ? 'var(--error-500)' : focus ? 'var(--border-focus)' : 'var(--border-input)'}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'var(--shadow-xs)',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'lg' ? 'var(--text-lg)' : 'var(--text-base)',
    fontWeight: 'var(--weight-medium)',
    color: 'var(--text-heading)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: wrap
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--ink-400)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: input
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: error ? 'var(--error-700)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
/**
 * ServiceFlow SearchField — the hero "booking bar": a single big rounded
 * white pill split into labelled segments (like an airline search) with a
 * round yellow search button on the right. This is the signature component.
 */
function SearchField({
  segments = [],
  onSearch,
  buttonLabel = 'Search',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--white)',
      border: '1.5px solid var(--border-soft)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8,
      gap: 0,
      ...style
    }
  }, segments.map((seg, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: seg.onClick,
    style: {
      flex: seg.flex || 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 3,
      minWidth: 0,
      padding: '12px 22px',
      border: 'none',
      background: 'transparent',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--cream-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, seg.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: seg.value ? 'var(--text-heading)' : 'var(--text-muted)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    }
  }, seg.value || seg.placeholder)), i < segments.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      alignSelf: 'center',
      height: '52%',
      background: 'var(--border)'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSearch,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      flexShrink: 0,
      marginLeft: 6,
      padding: '0 30px',
      background: 'var(--accent-strong)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-bold)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-accent)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--accent-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--accent-strong)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "2.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  })), buttonLabel));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * ServiceFlow Select — custom dropdown styled to match Input. Big rounded
 * trigger, friendly chevron, yellow focus ring. Avoids the native grey
 * <select> look entirely.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Choose…',
  size = 'md',
  disabled = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const heights = {
    md: 56,
    lg: 66
  };
  const h = heights[size] || 56;
  React.useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const selected = options.find(o => (o.value ?? o) === value);
  const selectedLabel = selected ? selected.label ?? selected : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    },
    ref: ref
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: h,
      padding: '0 18px 0 20px',
      background: disabled ? 'var(--cream-100)' : 'var(--white)',
      border: `1.5px solid ${open ? 'var(--border-focus)' : 'var(--border-input)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: open ? '0 0 0 4px var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'lg' ? 'var(--text-lg)' : 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: selectedLabel ? 'var(--text-heading)' : 'var(--text-muted)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, selectedLabel || placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "var(--ink-500)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      left: 0,
      right: 0,
      zIndex: 30,
      background: 'var(--white)',
      border: '1.5px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lab = o.label ?? o;
    const active = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => {
        onChange && onChange(val);
        setOpen(false);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '12px 14px',
        border: 'none',
        background: active ? 'var(--yellow-50)' : 'transparent',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: 'var(--text-heading)',
        cursor: 'pointer',
        textAlign: 'left'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = 'var(--cream-100)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, lab, active && /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      stroke: "var(--accent-press)",
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TimeSlot.jsx
try { (() => {
/**
 * ServiceFlow TimeSlot — a selectable pill for a single bookable time.
 * Three states: available (outline), selected (yellow fill + charcoal),
 * unavailable (struck, muted). Big tap target.
 */
function TimeSlot({
  time,
  state = 'available',
  meta = null,
  onClick,
  style = {}
}) {
  const selected = state === 'selected';
  const unavailable = state === 'unavailable';
  const base = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    minWidth: 96,
    minHeight: 56,
    padding: '8px 18px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-sans)',
    cursor: unavailable ? 'not-allowed' : 'pointer',
    transition: 'all var(--dur-fast) var(--ease-out)',
    border: '1.5px solid'
  };
  const styles = selected ? {
    background: 'var(--accent-strong)',
    borderColor: 'var(--accent-strong)',
    color: 'var(--text-on-accent)',
    boxShadow: 'var(--shadow-accent)'
  } : unavailable ? {
    background: 'var(--cream-100)',
    borderColor: 'transparent',
    color: 'var(--text-disabled)',
    textDecoration: 'line-through'
  } : {
    background: 'var(--white)',
    borderColor: 'var(--border)',
    color: 'var(--text-heading)',
    boxShadow: 'var(--shadow-xs)'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: unavailable,
    onClick: onClick,
    style: {
      ...base,
      ...styles,
      ...style
    },
    onMouseEnter: e => {
      if (!selected && !unavailable) {
        e.currentTarget.style.borderColor = 'var(--accent-strong)';
        e.currentTarget.style.background = 'var(--yellow-50)';
      }
    },
    onMouseLeave: e => {
      if (!selected && !unavailable) {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.background = 'var(--white)';
      }
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-bold)',
      fontFamily: 'var(--font-mono)',
      letterSpacing: '-0.02em'
    }
  }, time), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      opacity: 0.8
    }
  }, meta));
}
Object.assign(__ds_scope, { TimeSlot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TimeSlot.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * ServiceFlow Tabs — pill-segmented control on a cream track. The active tab
 * is a white lifted pill (or yellow, when accent). Friendly, touch-sized.
 * Used for switching service categories / dashboard views.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = 'default',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 5,
      background: 'var(--cream-100)',
      borderRadius: 'var(--radius-pill)',
      border: '1.5px solid var(--border-soft)',
      ...style
    }
  }, tabs.map(tab => {
    const val = tab.value ?? tab;
    const label = tab.label ?? tab;
    const active = val === value;
    const accent = variant === 'accent';
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '11px 22px',
        border: 'none',
        borderRadius: 'var(--radius-pill)',
        background: active ? accent ? 'var(--accent-strong)' : 'var(--white)' : 'transparent',
        color: active ? accent ? 'var(--text-on-accent)' : 'var(--text-heading)' : 'var(--text-muted)',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-bold)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-heading)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, tab.icon, label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)',
        padding: '1px 8px',
        borderRadius: 'var(--radius-pill)',
        background: active ? accent ? 'rgba(27,24,19,0.14)' : 'var(--yellow-100)' : 'var(--cream-200)',
        color: active && !accent ? 'var(--accent-press)' : 'inherit'
      }
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
/**
 * ServiceFlow TopNav — bright, airy top bar. Sun wordmark on the left, a
 * location pill, friendly nav links with a yellow active underline, and a
 * primary CTA + avatar on the right. Sits on cream with a soft hairline,
 * not a heavy grey app header.
 */
function TopNav({
  location = 'Brooklyn, NY',
  links = [],
  activeLink,
  onNavigate,
  ctaLabel = 'List your service',
  onCta,
  avatar,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      height: 76,
      padding: '0 var(--space-6)',
      background: 'rgba(252,250,244,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--accent-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-accent)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.4",
    fill: "var(--ink-900)"
  }), Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: "11.1",
    y: "1.4",
    width: "1.8",
    height: "3.6",
    rx: "0.9",
    fill: "var(--ink-900)",
    transform: `rotate(${i * 45} 12 12)`
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-extra)',
      letterSpacing: 'var(--tracking-snug)',
      color: 'var(--ink-900)'
    }
  }, "ServiceFlow")), location && /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      padding: '9px 16px',
      background: 'var(--white)',
      border: '1.5px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z",
    stroke: "var(--accent-press)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.4",
    fill: "var(--accent-press)"
  })), location), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => {
    const val = l.value ?? l;
    const label = l.label ?? l;
    const active = val === activeLink;
    return /*#__PURE__*/React.createElement("a", {
      key: val,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(val);
      },
      style: {
        position: 'relative',
        padding: '8px 14px',
        textDecoration: 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-semibold)',
        color: active ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-heading)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, label, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 14,
        right: 14,
        bottom: -2,
        height: 3,
        borderRadius: 3,
        background: 'var(--accent-strong)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      flexShrink: 0,
      padding: '0 22px',
      height: 46,
      border: 'none',
      background: 'var(--ink-800)',
      color: 'var(--cream-50)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--ink-900)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--ink-800)';
    }
  }, ctaLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      flexShrink: 0,
      background: avatar ? `center/cover url(${avatar})` : 'var(--yellow-200)',
      border: '2px solid var(--white)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--ink-800)'
    }
  }, !avatar && 'JA'));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/BookingFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ServiceFlow UI kit — interactive customer booking flow.
// Composes the design-system primitives (window.ServiceFlowDesignSystem_c6741d).
function BookingFlow() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const {
    TopNav,
    SearchField,
    Tabs,
    ServiceCard,
    DatePicker,
    TimeSlot,
    Badge,
    BookingCard,
    Modal,
    Toast,
    Button
  } = DS;
  const D = window.SF_DATA;
  const [step, setStep] = React.useState('browse'); // browse | time | done
  const [cat, setCat] = React.useState('all');
  const [svc, setSvc] = React.useState(null);
  const [day, setDay] = React.useState('24');
  const [slot, setSlot] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const showToast = t => {
    setToast(t);
    setTimeout(() => setToast(null), 4200);
  };
  const goBrowse = () => {
    setStep('browse');
    setSvc(null);
    setSlot(null);
    window.scrollTo(0, 0);
  };
  const filtered = cat === 'all' ? D.services : D.services.filter(s => s.cat === cat);
  const dayLabel = D.days.find(d => d.date === day) || {};
  const slotObj = D.slots.find(s => s.id === slot);
  const nav = /*#__PURE__*/React.createElement(TopNav, {
    location: "Brooklyn, NY",
    activeLink: step === 'browse' ? 'explore' : 'bookings',
    links: [{
      label: 'Explore',
      value: 'explore'
    }, {
      label: 'Bookings',
      value: 'bookings'
    }, {
      label: 'Favorites',
      value: 'favorites'
    }],
    ctaLabel: "List your service",
    onNavigate: v => {
      if (v === 'explore') goBrowse();
    }
  });

  // ---------- BROWSE ----------
  function Browse() {
    const [q, setQ] = React.useState('Haircut');
    return /*#__PURE__*/React.createElement("div", {
      className: "fade"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "\u25CF Real-time openings near you"), /*#__PURE__*/React.createElement("h1", null, "Book local services ", /*#__PURE__*/React.createElement("em", null, "in seconds.")), /*#__PURE__*/React.createElement("p", null, "Find a trusted local pro, see live openings, and lock in a time \u2014 no phone tag."), /*#__PURE__*/React.createElement(SearchField, {
      buttonLabel: "Find times",
      onSearch: () => {},
      segments: [{
        label: 'SERVICE',
        value: q,
        flex: 1.3
      }, {
        label: 'NEAR',
        value: 'Brooklyn, NY'
      }, {
        label: 'WHEN',
        placeholder: 'Any day'
      }]
    }))), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        paddingBottom: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "secTitle"
    }, "Available near you"), /*#__PURE__*/React.createElement(Tabs, {
      value: cat,
      onChange: setCat,
      tabs: D.categories
    })), /*#__PURE__*/React.createElement("div", {
      className: "grid"
    }, filtered.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
      key: s.id
    }, s, {
      onBook: () => {
        setSvc(s);
        setSlot(null);
        setStep('time');
        window.scrollTo(0, 0);
      }
    }))))));
  }

  // ---------- SELECT TIME ----------
  function SelectTime() {
    return /*#__PURE__*/React.createElement("div", {
      className: "fade"
    }, /*#__PURE__*/React.createElement("div", {
      className: "warmband"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        padding: '32px 24px'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "crumb",
      onClick: goBrowse
    }, "\u2190 Back to results"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: 18,
        background: 'linear-gradient(135deg, var(--yellow-200), var(--cream-200))',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("h2", {
      className: "secTitle"
    }, svc.title), svc.tag && /*#__PURE__*/React.createElement(Badge, {
      tone: "accent"
    }, svc.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        color: 'var(--ink-500)',
        fontSize: 15,
        fontWeight: 600,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", null, svc.provider), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-300)'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u2605 ", svc.rating, " (", svc.reviews, ")"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-300)'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, svc.duration)))))), /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        padding: '34px 24px 70px',
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 28,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--ink-900)',
        margin: '0 0 14px'
      }
    }, "Choose a day"), /*#__PURE__*/React.createElement(DatePicker, {
      days: D.days,
      value: day,
      onChange: d => {
        setDay(d);
        setSlot(null);
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 20,
        fontWeight: 700,
        color: 'var(--ink-900)',
        margin: '30px 0 14px'
      }
    }, "Pick a time"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12
      }
    }, D.slots.map(s => /*#__PURE__*/React.createElement(TimeSlot, {
      key: s.id,
      time: s.time,
      meta: s.meta,
      state: s.state === 'unavailable' ? 'unavailable' : slot === s.id ? 'selected' : 'available',
      onClick: () => setSlot(s.id)
    })))), /*#__PURE__*/React.createElement("div", {
      className: "panel",
      style: {
        padding: 24,
        position: 'sticky',
        top: 24
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 19,
        fontWeight: 700,
        color: 'var(--ink-900)',
        margin: '0 0 16px'
      }
    }, "Your booking"), /*#__PURE__*/React.createElement(Row, {
      k: "Service",
      v: svc.title
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Provider",
      v: svc.provider
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Day",
      v: dayLabel.weekday ? `${dayLabel.weekday} ${dayLabel.date} Jun` : '—'
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Time",
      v: slotObj ? slotObj.time : 'Select a time',
      mono: !!slotObj,
      muted: !slotObj
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: 'var(--border-soft)',
        margin: '14px 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--ink-700)'
      }
    }, "From"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 30,
        fontWeight: 800,
        color: 'var(--ink-900)'
      }
    }, svc.price)), /*#__PURE__*/React.createElement(Button, {
      full: true,
      size: "lg",
      disabled: !slot,
      onClick: () => setModal(true)
    }, "Continue"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-400)',
        textAlign: 'center',
        margin: '12px 0 0'
      }
    }, "Free to change up to 24 hours before."))));
  }
  function Row({
    k,
    v,
    mono,
    muted
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '7px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--ink-400)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'right',
        color: muted ? 'var(--ink-400)' : 'var(--ink-800)',
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)'
      }
    }, v));
  }

  // ---------- DONE ----------
  function Done() {
    return /*#__PURE__*/React.createElement("div", {
      className: "fade container",
      style: {
        padding: '54px 24px 80px',
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--success-100)',
        color: 'var(--success-500)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "38",
      height: "38",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      stroke: "currentColor",
      strokeWidth: "2.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 40,
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--ink-900)',
        margin: '0 0 8px'
      }
    }, "You're booked!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        color: 'var(--ink-500)',
        margin: 0
      }
    }, "We sent the details to your email. See you soon.")), /*#__PURE__*/React.createElement(BookingCard, {
      month: "JUN",
      day: day,
      service: svc.title,
      provider: svc.provider,
      time: slotObj ? slotObj.time : '2:30 PM',
      location: "Brooklyn, NY",
      status: {
        tone: 'success',
        label: 'Confirmed',
        dot: true
      },
      code: "SF-7A2K9",
      primaryLabel: "Add to calendar"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: goBrowse
    }, "Browse more services")));
  }
  return /*#__PURE__*/React.createElement("div", null, nav, step === 'browse' && /*#__PURE__*/React.createElement(Browse, null), step === 'time' && svc && /*#__PURE__*/React.createElement(SelectTime, null), step === 'done' && svc && /*#__PURE__*/React.createElement(Done, null), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    onClose: () => setModal(false),
    eyebrow: "Almost there",
    title: "Confirm your booking",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setModal(false)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setModal(false);
        setStep('done');
        showToast({
          tone: 'success',
          title: 'Booking confirmed',
          message: 'We sent the details to your email.'
        });
        window.scrollTo(0, 0);
      }
    }, "Confirm & pay"))
  }, svc && /*#__PURE__*/React.createElement("span", null, "You're booking ", /*#__PURE__*/React.createElement("strong", null, svc.title), " with ", svc.provider, " on ", /*#__PURE__*/React.createElement("strong", null, dayLabel.weekday, " ", dayLabel.date, " Jun at ", slotObj ? slotObj.time : ''), ". Free to change up to 24 hours before.")), /*#__PURE__*/React.createElement("div", {
    className: "toasts"
  }, toast && /*#__PURE__*/React.createElement(Toast, {
    tone: toast.tone,
    title: toast.title,
    message: toast.message,
    onClose: () => setToast(null)
  })));
}
window.BookingFlow = BookingFlow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/BookingFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/HomeSearch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ServiceFlow — Home / Search screen.
// Composes design-system primitives (window.ServiceFlowDesignSystem_c6741d).
function HomeSearch() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const {
    TopNav,
    Select,
    Input,
    DatePicker,
    Button,
    Badge
  } = DS;
  const [svc, setSvc] = React.useState('hair');
  const [loc, setLoc] = React.useState('Brooklyn, NY');
  const [day, setDay] = React.useState('24');
  const days = [{
    weekday: 'TODAY',
    date: '24',
    hint: '12 slots'
  }, {
    weekday: 'WED',
    date: '25',
    hint: '9 slots'
  }, {
    weekday: 'THU',
    date: '26',
    hint: '6 slots'
  }, {
    weekday: 'FRI',
    date: '27',
    hint: '4 left'
  }, {
    weekday: 'SAT',
    date: '28',
    state: 'soldout'
  }, {
    weekday: 'SUN',
    date: '29',
    hint: '7 slots'
  }, {
    weekday: 'MON',
    date: '30',
    hint: '11 slots'
  }];
  const categories = [{
    icon: ScissorsIcon,
    label: 'Hair & Beauty',
    count: '320+ pros'
  }, {
    icon: SparkleIcon,
    label: 'Wellness & Spa',
    count: '180+ pros'
  }, {
    icon: HomeIcon,
    label: 'Home & Cleaning',
    count: '240+ pros'
  }, {
    icon: PawIcon,
    label: 'Pet Care',
    count: '95+ pros'
  }, {
    icon: WrenchIcon,
    label: 'Repairs',
    count: '160+ pros'
  }, {
    icon: CarIcon,
    label: 'Auto & Detail',
    count: '70+ pros'
  }];
  const benefits = [{
    icon: BoltIcon,
    title: 'Instant confirmation',
    text: 'See live openings and lock in a time on the spot — no phone tag, no waiting.'
  }, {
    icon: ShieldIcon,
    title: 'Trusted local pros',
    text: 'Every provider is reviewed and rated by neighbors near you. No guesswork.'
  }, {
    icon: SwapIcon,
    title: 'Free to change',
    text: 'Plans shift. Reschedule or cancel free up to 24 hours before your booking.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopNav, {
    location: loc,
    activeLink: "explore",
    links: [{
      label: 'Explore',
      value: 'explore'
    }, {
      label: 'Bookings',
      value: 'bookings'
    }, {
      label: 'Favorites',
      value: 'favorites'
    }],
    ctaLabel: "List your service"
  }), /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sun",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), "Real-time openings near you"), /*#__PURE__*/React.createElement("h1", null, "Book local services", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "in seconds.")), /*#__PURE__*/React.createElement("p", null, "Find a trusted local pro, see live availability, and lock in a time that works for you \u2014 all in one sunny place."), /*#__PURE__*/React.createElement("div", {
    className: "bookpanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookgrid"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    value: svc,
    onChange: setSvc,
    size: "lg",
    options: [{
      label: 'Hair & Beauty',
      value: 'hair'
    }, {
      label: 'Wellness & Spa',
      value: 'wellness'
    }, {
      label: 'Home & Cleaning',
      value: 'home'
    }, {
      label: 'Pet Care',
      value: 'pets'
    }, {
      label: 'Repairs',
      value: 'repairs'
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Where?",
    size: "lg",
    value: loc,
    onChange: e => setLoc(e.target.value),
    icon: /*#__PURE__*/React.createElement(PinIcon, null),
    placeholder: "Enter your neighborhood"
  })), /*#__PURE__*/React.createElement("div", {
    className: "whenrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "whenlabel"
  }, "When works for you?"), /*#__PURE__*/React.createElement(DatePicker, {
    days: days,
    value: day,
    onChange: setDay
  })), /*#__PURE__*/React.createElement("div", {
    className: "ctarow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ctahint"
  }, "Free to change up to 24 hours before \xB7 No booking fees"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(SearchGlyph, null)
  }, "Find services"))), /*#__PURE__*/React.createElement("div", {
    className: "trustline"
  }, /*#__PURE__*/React.createElement(Stars, null), " ", /*#__PURE__*/React.createElement("strong", null, "4.9"), " average from ", /*#__PURE__*/React.createElement("strong", null, "28,000+"), " bookings this month"))), /*#__PURE__*/React.createElement("section", {
    className: "container block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockhead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "secTitle"
  }, "Popular categories"), /*#__PURE__*/React.createElement("p", {
    className: "secSub"
  }, "Browse what neighbors are booking most right now.")), /*#__PURE__*/React.createElement("a", {
    className: "seeall",
    href: "#",
    onClick: e => e.preventDefault()
  }, "See all categories \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "catgrid"
  }, categories.map(c => /*#__PURE__*/React.createElement(CatTile, _extends({
    key: c.label
  }, c))))), /*#__PURE__*/React.createElement("section", {
    className: "warmband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container block"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560,
      margin: '0 auto 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), "Why ServiceFlow"), /*#__PURE__*/React.createElement("h2", {
    className: "secTitle",
    style: {
      marginTop: 14
    }
  }, "Booking that feels like sunshine")), /*#__PURE__*/React.createElement("div", {
    className: "bengrid"
  }, benefits.map(b => /*#__PURE__*/React.createElement("div", {
    className: "bencard",
    key: b.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "benicon"
  }, /*#__PURE__*/React.createElement(b.icon, null)), /*#__PURE__*/React.createElement("h3", null, b.title), /*#__PURE__*/React.createElement("p", null, b.text)))))), /*#__PURE__*/React.createElement("section", {
    className: "container",
    style: {
      padding: '20px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "finalcta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-.02em',
      color: 'var(--ink-900)',
      margin: '0 0 8px'
    }
  }, "Run a local service?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--ink-600)',
      margin: 0,
      maxWidth: 440
    }
  }, "List your openings on ServiceFlow and fill your calendar with customers nearby.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "List your service"))));
}
function CatTile({
  icon: Icon,
  label,
  count
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    className: "cattile",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      borderColor: hover ? 'var(--yellow-300)' : 'var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "caticon"
  }, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement("span", {
    className: "catlabel"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "catcount"
  }, count));
}

/* ---- inline line icons (Lucide-style, ~2px rounded) ---- */
const I = (paths, fill) => props => /*#__PURE__*/React.createElement("svg", {
  width: props && props.size || 24,
  height: props && props.size || 24,
  viewBox: "0 0 24 24",
  fill: fill || 'none',
  stroke: fill ? 'none' : 'currentColor',
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, paths);
const PinIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
})));
const SearchGlyph = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-4-4"
})));
const ScissorsIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
})));
const SparkleIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 15l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z"
})));
const HomeIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 11l9-7 9 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v10h14V10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 20v-6h6v6"
})));
const PawIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "11",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "10.5",
  cy: "6.5",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "6.5",
  r: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "11",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.5 14.5c1-1.5 2-2.5 3.5-2.5s2.5 1 3.5 2.5 1.7 2.6.8 3.8c-.8 1-2.1.4-3.3.2-.6-.1-1.3-.1-2 0-1.2.2-2.5.8-3.3-.2-.9-1.2-.2-2.3.8-3.8z"
})));
const WrenchIcon = I(/*#__PURE__*/React.createElement("path", {
  d: "M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-.7-.7-2.5z"
}));
const CarIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 13l2-5a3 3 0 012.8-2h8.4A3 3 0 0119 8l2 5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 13h18v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "7",
  cy: "15.5",
  r: "0.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "15.5",
  r: "0.6"
})));
const BoltIcon = I(/*#__PURE__*/React.createElement("path", {
  d: "M13 2L4 14h7l-1 8 9-12h-7z"
}));
const ShieldIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4"
})));
const SwapIcon = I(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M17 4l3 3-3 3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 7H8a4 4 0 00-4 4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 20l-3-3 3-3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 17h12a4 4 0 004-4"
})));
const Stars = () => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    gap: 2
  }
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", {
  key: i,
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "var(--accent-strong)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 7.1-1.01z"
}))));
window.HomeSearch = HomeSearch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/HomeSearch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/ResultsPage.jsx
try { (() => {
// ServiceFlow — Search Results screen.
// Composes design-system primitives (window.ServiceFlowDesignSystem_c6741d).
function ResultsPage() {
  const DS = window.ServiceFlowDesignSystem_c6741d;
  const {
    TopNav,
    Badge,
    Button,
    Select,
    EmptyState
  } = DS;

  // ---- demo data ----
  const ALL = [{
    id: 'cut',
    cat: 'hair',
    title: 'Signature Cut & Style',
    provider: 'The Fade Room',
    rating: 4.9,
    reviews: 212,
    price: 48,
    loc: 'Williamsburg · 0.4 mi',
    next: 'Today 2:30 PM',
    slots: ['2:30 PM', '4:00 PM', '5:15 PM'],
    hue: 44,
    recommended: true
  }, {
    id: 'massage',
    cat: 'wellness',
    title: 'Deep Tissue Massage',
    provider: 'Stillpoint Studio',
    rating: 5.0,
    reviews: 148,
    price: 95,
    loc: 'Park Slope · 1.1 mi',
    next: 'Today 6:00 PM',
    slots: ['6:00 PM', '7:15 PM'],
    hue: 38
  }, {
    id: 'clean',
    cat: 'home',
    title: 'Deep Home Clean',
    provider: 'Tidy & Co.',
    rating: 4.9,
    reviews: 304,
    price: 130,
    loc: 'Bushwick · 2.3 mi',
    next: 'Tomorrow 9:00 AM',
    slots: ['Tue 9:00 AM', 'Tue 1:00 PM'],
    hue: 50
  }, {
    id: 'color',
    cat: 'hair',
    title: 'Gloss & Color Refresh',
    provider: 'Sunbeam Studio',
    rating: 4.8,
    reviews: 96,
    price: 120,
    loc: 'Greenpoint · 0.9 mi',
    next: 'Today 3:45 PM',
    slots: ['3:45 PM', '5:30 PM'],
    hue: 42
  }, {
    id: 'facial',
    cat: 'wellness',
    title: 'Glow Facial',
    provider: 'Daylight Skin',
    rating: 4.7,
    reviews: 73,
    price: 80,
    loc: 'Cobble Hill · 1.6 mi',
    next: 'Wed 11:00 AM',
    slots: ['Wed 11:00 AM', 'Wed 2:00 PM'],
    hue: 36
  }, {
    id: 'walk',
    cat: 'pets',
    title: 'Dog Walk & Play',
    provider: 'Happy Tails',
    rating: 5.0,
    reviews: 189,
    price: 24,
    loc: 'Fort Greene · 0.7 mi',
    next: 'Today 1:00 PM',
    slots: ['1:00 PM', '3:00 PM', '5:00 PM'],
    hue: 46
  }];
  const CATS = [{
    label: 'Hair & Beauty',
    value: 'hair'
  }, {
    label: 'Wellness & Spa',
    value: 'wellness'
  }, {
    label: 'Home & Cleaning',
    value: 'home'
  }, {
    label: 'Pet Care',
    value: 'pets'
  }, {
    label: 'Repairs',
    value: 'repairs'
  }];
  const RATINGS = [{
    label: 'Any',
    value: 0
  }, {
    label: '4.0+',
    value: 4
  }, {
    label: '4.5+',
    value: 4.5
  }, {
    label: '4.8+',
    value: 4.8
  }];
  const AVAIL = [{
    label: 'Any time',
    value: 'any'
  }, {
    label: 'Today',
    value: 'today'
  }, {
    label: 'This week',
    value: 'week'
  }, {
    label: 'Weekends',
    value: 'weekend'
  }];
  const [cats, setCats] = React.useState([]);
  const [maxPrice, setMaxPrice] = React.useState(200);
  const [minRating, setMinRating] = React.useState(0);
  const [avail, setAvail] = React.useState('any');
  const [sort, setSort] = React.useState('rec');
  const toggleCat = v => setCats(c => c.includes(v) ? c.filter(x => x !== v) : [...c, v]);
  const reset = () => {
    setCats([]);
    setMaxPrice(200);
    setMinRating(0);
    setAvail('any');
  };
  let results = ALL.filter(s => (cats.length === 0 || cats.includes(s.cat)) && s.price <= maxPrice && s.rating >= minRating && (avail !== 'today' || s.next.startsWith('Today')));
  if (sort === 'price') results = [...results].sort((a, b) => a.price - b.price);else if (sort === 'rating') results = [...results].sort((a, b) => b.rating - a.rating);else results = [...results].sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));
  const activeCount = cats.length + (maxPrice < 200 ? 1 : 0) + (minRating > 0 ? 1 : 0) + (avail !== 'any' ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopNav, {
    location: "Brooklyn, NY",
    activeLink: "explore",
    links: [{
      label: 'Explore',
      value: 'explore'
    }, {
      label: 'Bookings',
      value: 'bookings'
    }, {
      label: 'Favorites',
      value: 'favorites'
    }],
    ctaLabel: "List your service"
  }), /*#__PURE__*/React.createElement("div", {
    className: "summaryband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container summarybar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summarychips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "schip"
  }, /*#__PURE__*/React.createElement(ScissorsIcon, null), " Hair & Beauty"), /*#__PURE__*/React.createElement("span", {
    className: "sdot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "schip"
  }, /*#__PURE__*/React.createElement(PinIcon, null), " Brooklyn, NY"), /*#__PURE__*/React.createElement("span", {
    className: "sdot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "schip"
  }, /*#__PURE__*/React.createElement(CalIcon, null), " Today, Jun 24")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement(EditIcon, null)
  }, "Edit search"))), /*#__PURE__*/React.createElement("div", {
    className: "container layout"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filterhead"
  }, /*#__PURE__*/React.createElement("h2", null, "Filters"), activeCount > 0 && /*#__PURE__*/React.createElement("button", {
    className: "clearbtn",
    onClick: reset
  }, "Clear (", activeCount, ")")), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Category"
  }, CATS.map(c => /*#__PURE__*/React.createElement("label", {
    className: "checkrow",
    key: c.value
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: cats.includes(c.value),
    onChange: () => toggleCat(c.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkbox"
  }, cats.includes(c.value) && /*#__PURE__*/React.createElement(CheckMark, null)), c.label))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Price range"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pricelabel"
  }, "Up to ", /*#__PURE__*/React.createElement("strong", null, "$", maxPrice), maxPrice >= 200 && '+'), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "20",
    max: "200",
    step: "5",
    value: maxPrice,
    onChange: e => setMaxPrice(+e.target.value),
    className: "slider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sliderends"
  }, /*#__PURE__*/React.createElement("span", null, "$20"), /*#__PURE__*/React.createElement("span", null, "$200+"))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillrow"
  }, RATINGS.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.value,
    className: 'fpill' + (minRating === r.value ? ' on' : ''),
    onClick: () => setMinRating(r.value)
  }, r.value > 0 && /*#__PURE__*/React.createElement(StarMini, null), r.label)))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Availability",
    last: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillrow"
  }, AVAIL.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.value,
    className: 'fpill' + (avail === a.value ? ' on' : ''),
    onClick: () => setAvail(a.value)
  }, a.label))))), /*#__PURE__*/React.createElement("main", {
    className: "resultscol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resulthead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "rTitle"
  }, results.length, " services available"), /*#__PURE__*/React.createElement("p", {
    className: "rSub"
  }, "Hair & Beauty near Brooklyn, NY \xB7 Today")), /*#__PURE__*/React.createElement("div", {
    className: "sortwrap"
  }, /*#__PURE__*/React.createElement(Select, {
    value: sort,
    onChange: setSort,
    options: [{
      label: 'Recommended',
      value: 'rec'
    }, {
      label: 'Price: low to high',
      value: 'price'
    }, {
      label: 'Top rated',
      value: 'rating'
    }]
  }))), results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "emptywrap"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: /*#__PURE__*/React.createElement(SearchBig, null),
    title: "No services match those filters",
    description: "Try widening your price range, lowering the rating, or clearing a filter to see more pros near you.",
    actionLabel: "Clear all filters",
    onAction: reset
  })) : /*#__PURE__*/React.createElement("div", {
    className: "cardlist"
  }, results.map(s => /*#__PURE__*/React.createElement(ResultCard, {
    key: s.id,
    s: s
  }))))));
}
function ResultCard({
  s
}) {
  const {
    Badge,
    Button
  } = window.ServiceFlowDesignSystem_c6741d;
  const [hover, setHover] = React.useState(false);
  const rec = s.recommended;
  return /*#__PURE__*/React.createElement("div", {
    className: 'rcard' + (rec ? ' rec' : ''),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : rec ? 'var(--shadow-md)' : 'var(--shadow-sm)'
    }
  }, rec && /*#__PURE__*/React.createElement("div", {
    className: "recflag"
  }, /*#__PURE__*/React.createElement(SparkMini, null), " Recommended for you"), /*#__PURE__*/React.createElement("div", {
    className: "rbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rthumb",
    style: {
      background: `linear-gradient(150deg, hsl(${s.hue} 92% 72%), hsl(${s.hue + 8} 60% 86%))`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rdur"
  }, s.slots.length, " open today")), /*#__PURE__*/React.createElement("div", {
    className: "rmain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rtop"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rprovider"
  }, s.provider), /*#__PURE__*/React.createElement("span", {
    className: "rrating"
  }, /*#__PURE__*/React.createElement(StarMini, {
    solid: true
  }), s.rating.toFixed(1), " ", /*#__PURE__*/React.createElement("em", null, "(", s.reviews, ")"))), /*#__PURE__*/React.createElement("h3", {
    className: "rname"
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "rloc"
  }, /*#__PURE__*/React.createElement(PinMini, null), " ", s.loc), /*#__PURE__*/React.createElement("div", {
    className: "rnext"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rnextlabel"
  }, /*#__PURE__*/React.createElement("span", {
    className: "livedot"
  }), "Next available"), /*#__PURE__*/React.createElement("div", {
    className: "slotrow"
  }, s.slots.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'miniSlot' + (i === 0 ? ' first' : '')
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "raside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rpriceblock"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rfrom"
  }, "from"), /*#__PURE__*/React.createElement("span", {
    className: "rprice"
  }, "$", s.price)), /*#__PURE__*/React.createElement(Button, {
    onClick: () => {}
  }, "View availability"))));
}
function FilterGroup({
  title,
  children,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fgroup",
    style: {
      borderBottom: last ? 'none' : '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ftitle"
  }, title), children);
}

/* ---- inline icons (Lucide-style) ---- */
const Ic = (paths, fill) => props => /*#__PURE__*/React.createElement("svg", {
  width: props && props.size || 18,
  height: props && props.size || 18,
  viewBox: "0 0 24 24",
  fill: fill || 'none',
  stroke: fill ? 'none' : 'currentColor',
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, paths);
const ScissorsIcon = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "6",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "18",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
})));
const PinIcon = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
})));
const PinMini = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
})));
const CalIcon = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "16",
  rx: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18M8 3v4M16 3v4"
})));
const EditIcon = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 20h9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"
})));
const SearchBig = Ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 21l-4-4"
})));
const CheckMark = Ic(/*#__PURE__*/React.createElement("path", {
  d: "M5 13l4 4L19 7"
}));
const SparkMini = Ic(/*#__PURE__*/React.createElement("path", {
  d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"
}));
const StarMini = ({
  solid
}) => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: solid ? 'var(--accent-strong)' : 'currentColor'
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 7.1-1.01z"
}));
window.ResultsPage = ResultsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/ResultsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/data.js
try { (() => {
// ServiceFlow UI kit — demo data
window.SF_DATA = {
  categories: [{
    label: 'All',
    value: 'all'
  }, {
    label: 'Hair & Beauty',
    value: 'hair'
  }, {
    label: 'Wellness',
    value: 'wellness'
  }, {
    label: 'Home',
    value: 'home'
  }, {
    label: 'Pets',
    value: 'pets'
  }],
  services: [{
    id: 'cut',
    cat: 'hair',
    title: 'Signature Cut & Style',
    provider: 'The Fade Room',
    rating: 4.9,
    reviews: 212,
    price: '$48',
    priceUnit: '& up',
    tag: 'Top rated',
    duration: '45 min'
  }, {
    id: 'color',
    cat: 'hair',
    title: 'Gloss & Color Refresh',
    provider: 'Sunbeam Studio',
    rating: 4.8,
    reviews: 96,
    price: '$120',
    priceUnit: '',
    tag: 'Popular',
    duration: '90 min'
  }, {
    id: 'massage',
    cat: 'wellness',
    title: 'Deep Tissue Massage',
    provider: 'Stillpoint',
    rating: 5.0,
    reviews: 148,
    price: '$95',
    priceUnit: '/hr',
    tag: 'Top rated',
    duration: '60 min'
  }, {
    id: 'facial',
    cat: 'wellness',
    title: 'Glow Facial',
    provider: 'Daylight Skin',
    rating: 4.7,
    reviews: 73,
    price: '$80',
    priceUnit: '',
    tag: null,
    duration: '50 min'
  }, {
    id: 'clean',
    cat: 'home',
    title: 'Deep Home Clean',
    provider: 'Tidy & Co.',
    rating: 4.9,
    reviews: 304,
    price: '$130',
    priceUnit: '',
    tag: 'Popular',
    duration: '3 hrs'
  }, {
    id: 'walk',
    cat: 'pets',
    title: 'Dog Walk & Play',
    provider: 'Happy Tails',
    rating: 5.0,
    reviews: 189,
    price: '$24',
    priceUnit: '/walk',
    tag: 'Top rated',
    duration: '30 min'
  }],
  days: [{
    weekday: 'MON',
    date: '23',
    hint: '8 slots'
  }, {
    weekday: 'TUE',
    date: '24',
    hint: '2 left'
  }, {
    weekday: 'WED',
    date: '25',
    state: 'soldout'
  }, {
    weekday: 'THU',
    date: '26',
    hint: '6 slots'
  }, {
    weekday: 'FRI',
    date: '27',
    hint: '5 slots'
  }, {
    weekday: 'SAT',
    date: '28',
    hint: '3 left'
  }, {
    weekday: 'SUN',
    date: '29',
    hint: '7 slots'
  }],
  slots: [{
    id: '0900',
    time: '9:00 AM'
  }, {
    id: '0930',
    time: '9:30 AM',
    meta: '2 left'
  }, {
    id: '1000',
    time: '10:00 AM'
  }, {
    id: '1030',
    time: '10:30 AM',
    state: 'unavailable'
  }, {
    id: '1100',
    time: '11:00 AM'
  }, {
    id: '1200',
    time: '12:00 PM'
  }, {
    id: '1330',
    time: '1:30 PM'
  }, {
    id: '1400',
    time: '2:00 PM'
  }, {
    id: '1430',
    time: '2:30 PM',
    meta: '1 left'
  }, {
    id: '1500',
    time: '3:00 PM'
  }, {
    id: '1600',
    time: '4:00 PM'
  }, {
    id: '1630',
    time: '4:30 PM',
    state: 'unavailable'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BookingCard = __ds_scope.BookingCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TimeSlot = __ds_scope.TimeSlot;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
