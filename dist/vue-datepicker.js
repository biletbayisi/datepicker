import { unref as E, reactive as _t, computed as Y, ref as x, toRef as $t, watch as at, h as On, render as tn, defineComponent as lt, openBlock as U, createElementBlock as G, renderSlot as me, createCommentVNode as le, normalizeClass as ke, withKeys as Pe, createElementVNode as Se, onMounted as Mt, normalizeProps as We, mergeProps as Ze, toDisplayString as ot, Fragment as Re, renderList as $e, createTextVNode as nn, createVNode as ht, Transition as mn, withCtx as xe, withModifiers as je, normalizeStyle as it, nextTick as Dt, useSlots as Gt, createBlock as Ct, createSlots as kt, guardReactiveProps as Ue, onUnmounted as pn, resolveDynamicComponent as gn, getCurrentScope as _n, onScopeDispose as Bn, isRef as an, Teleport as In } from "vue";
import { format as Le, isEqual as yn, setHours as hn, setMinutes as bn, setSeconds as Dn, setMilliseconds as kn, isAfter as wn, setMonth as En, setYear as dt, addMonths as et, subMonths as wt, getMonth as re, getYear as ie, isValid as Rt, isBefore as Mn, set as he, eachDayOfInterval as An, startOfWeek as Sn, endOfWeek as Nn, getHours as Ke, getMinutes as tt, getSeconds as Jt, parse as Ut, isDate as Fn, addYears as Yn, subYears as xn, addDays as Ve, getDay as Wn, differenceInCalendarDays as Ln, getWeek as zn, getISOWeek as jn, add as Hn } from "date-fns";
function ln(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Un(e) {
  return (t) => Le(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Kn = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let l;
  if (e !== null)
    try {
      l = a.map(Un(e));
    } catch {
      l = a.map(ln(t));
    }
  else
    l = a.map(ln(t));
  const c = l.slice(0, r), u = l.slice(r + 1, l.length);
  return [l[r]].concat(...u).concat(...c);
}, qn = (e, t) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: `${a}` });
  return t ? r.reverse() : r;
}, Gn = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((c) => {
    const u = c < 10 ? `0${c}` : c;
    return /* @__PURE__ */ new Date(`2017-${u}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const c = r === "long" ? "MMMM" : "MMM";
      return a.map((u, p) => {
        const h = Le(u, c, { locale: e });
        return {
          text: h.charAt(0).toUpperCase() + h.substring(1),
          value: p
        };
      });
    } catch {
    }
  const l = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((c, u) => {
    const p = l.format(c);
    return {
      text: p.charAt(0).toUpperCase() + p.substring(1),
      value: u
    };
  });
}, Ie = (e) => {
  const t = E(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Jn = (e) => ({ type: "dot", ...e ?? {} }), Xn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Xt = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, ye = (e) => e, rn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, un = (e) => e === null, nt = (e, t, r = !1) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, Qn = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Vn(e, t) {
  let r = [...document.querySelectorAll(Qn())];
  r = r.filter((l) => !e.contains(l) || l.hasAttribute("data-datepicker-instance"));
  const a = r.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= r.length))
    return r[a + (t ? -1 : 1)];
}
const Qt = (e) => Le(e, "dd-MM-yyyy"), Et = (e) => Array.isArray(e), Ot = (e, t) => t.get(Qt(e)), Zn = (e, t) => e ? t ? t instanceof Map ? !!Ot(e, t) : t(D(e)) : !1 : !0, on = (e, t, r, a, l) => {
  const c = Ut(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Rt(c) && Fn(c) ? a || l ? c : he(c, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, ea = (e, t, r, a, l) => {
  const c = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return on(e, t, c, a, l);
  if (Array.isArray(t)) {
    let u = null;
    for (const p of t)
      if (u = on(e, p, c, a, l), u)
        break;
    return u;
  }
  return typeof t == "function" ? t(e) : null;
}, D = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), ta = (e, t, r) => {
  if (t) {
    const l = (e.getMonth() + 1).toString().padStart(2, "0"), c = e.getDate().toString().padStart(2, "0"), u = e.getHours().toString().padStart(2, "0"), p = e.getMinutes().toString().padStart(2, "0"), h = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${l}-${c}T${u}:${p}:${h}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Ce = (e) => {
  let t = D(JSON.parse(JSON.stringify(e)));
  return t = hn(t, 0), t = bn(t, 0), t = Dn(t, 0), t = kn(t, 0), t;
}, bt = (e, t, r, a) => {
  let l = e ? D(e) : D();
  return (t || t === 0) && (l = hn(l, +t)), (r || r === 0) && (l = bn(l, +r)), (a || a === 0) && (l = Dn(l, +a)), kn(l, 0);
}, fe = (e, t) => !e || !t ? !1 : Mn(Ce(e), Ce(t)), ne = (e, t) => !e || !t ? !1 : yn(Ce(e), Ce(t)), ve = (e, t) => !e || !t ? !1 : wn(Ce(e), Ce(t)), na = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? ve(r, e[0]) && fe(r, e[1]) : e != null && e[0] && t ? ve(r, e[0]) && fe(r, t) || fe(r, e[0]) && ve(r, t) : !1, pt = (e) => {
  const t = he(new Date(e), { date: 1 });
  return Ce(t);
}, Pt = (e) => ({
  hours: Ke(e),
  minutes: tt(e),
  seconds: Jt(e)
}), Tn = (e, t) => {
  const r = ve(e, t) ? t : e, a = ve(t, e) ? t : e;
  return An({ start: r, end: a });
}, aa = (e) => {
  const t = et(e, 1);
  return { month: re(t), year: ie(t) };
}, Ye = (e, t) => {
  const r = Sn(e, { weekStartsOn: +t }), a = Nn(e, { weekStartsOn: +t });
  return [r, a];
}, Rn = (e, t) => {
  const r = {
    hours: Ke(D()),
    minutes: tt(D()),
    seconds: t ? Jt(D()) : 0
  };
  return Object.assign(r, e);
}, He = (e, t, r) => [he(D(e), { date: 1 }), he(D(), { month: t, year: r, date: 1 })], ct = (e, t, r) => {
  let a = e ? D(e) : D();
  return (t || t === 0) && (a = En(a, t)), r && (a = dt(a, r)), a;
}, la = (e, t, r, a, l) => {
  if (!a || l && !t || !l && !r)
    return !1;
  const c = l ? et(e, 1) : wt(e, 1), u = [re(c), ie(c)];
  return l ? !ua(...u, t) : !ra(...u, r);
}, ra = (e, t, r) => fe(...He(r, e, t)) || ne(...He(r, e, t)), ua = (e, t, r) => ve(...He(r, e, t)) || ne(...He(r, e, t)), oa = (e, t, r, a, l, c, u) => {
  if (typeof t == "function" && !u)
    return t(e);
  const p = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${Le(e[0], c, p)}${l && !e[1] ? "" : a}${e[1] ? Le(e[1], c, p) : ""}` : Le(e, c, p);
}, ut = (e) => {
  if (e)
    return null;
  throw new Error(Xt.prop("partial-range"));
}, St = (e, t) => {
  if (t)
    return e();
  throw new Error(Xt.prop("range"));
}, Kt = (e) => Array.isArray(e) ? Rt(e[0]) && (e[1] ? Rt(e[1]) : !0) : e ? Rt(e) : !1, sa = (e, t) => he(t ?? D(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Nt = (e, t, r, a) => {
  if (!e)
    return !0;
  if (a) {
    const l = r === "max" ? Mn(e, t) : wn(e, t), c = { seconds: 0, milliseconds: 0 };
    return l || yn(he(e, c), he(t, c));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Ft = (e, t, r) => e ? sa(e, t) : D(r ?? t), sn = (e, t, r, a, l) => {
  if (Array.isArray(a)) {
    const u = Ft(e, a[0], t), p = Ft(e, a[1], t);
    return Nt(a[0], u, r, !!t) && Nt(a[1], p, r, !!t) && l;
  }
  const c = Ft(e, a, t);
  return Nt(a, c, r, !!t) && l;
}, Yt = (e) => he(D(), Pt(e)), gt = _t({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Pn = () => {
  const e = (a) => {
    gt.menuFocused = a;
  }, t = (a) => {
    gt.shiftKeyInMenu !== a && (gt.shiftKeyInMenu = a);
  };
  return {
    control: Y(() => ({ shiftKeyInMenu: gt.shiftKeyInMenu, menuFocused: gt.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, oe = _t({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), xt = x(null), Tt = x(!1), Wt = x(!1), Lt = x(!1), zt = x(!1), De = x(0), ge = x(0), Vt = () => {
  const e = Y(() => Tt.value ? [...oe.selectionGrid, oe.actionRow].filter((A) => A.length) : Wt.value ? [
    ...oe.timePicker[0],
    ...oe.timePicker[1],
    zt.value ? [] : [xt.value],
    oe.actionRow
  ].filter((A) => A.length) : Lt.value ? [...oe.monthPicker, oe.actionRow] : [oe.monthYear, ...oe.calendar, oe.time, oe.actionRow].filter((A) => A.length)), t = (A) => {
    De.value = A ? De.value + 1 : De.value - 1;
    let F = null;
    e.value[ge.value] && (F = e.value[ge.value][De.value]), F || (De.value = A ? De.value - 1 : De.value + 1);
  }, r = (A) => {
    if (ge.value === 0 && !A || ge.value === e.value.length && A)
      return;
    ge.value = A ? ge.value + 1 : ge.value - 1, e.value[ge.value] ? e.value[ge.value] && !e.value[ge.value][De.value] && De.value !== 0 && (De.value = e.value[ge.value].length - 1) : ge.value = A ? ge.value - 1 : ge.value + 1;
  }, a = (A) => {
    let F = null;
    e.value[ge.value] && (F = e.value[ge.value][De.value]), F ? F.focus({ preventScroll: !Tt.value }) : De.value = A ? De.value - 1 : De.value + 1;
  }, l = () => {
    t(!0), a(!0);
  }, c = () => {
    t(!1), a(!1);
  }, u = () => {
    r(!1), a(!0);
  }, p = () => {
    r(!0), a(!0);
  }, h = (A, F) => {
    oe[F] = A;
  }, M = (A, F) => {
    oe[F] = A;
  }, v = () => {
    De.value = 0, ge.value = 0;
  };
  return {
    buildMatrix: h,
    buildMultiLevelMatrix: M,
    setTimePickerBackRef: (A) => {
      xt.value = A;
    },
    setSelectionGrid: (A) => {
      Tt.value = A, v(), A || (oe.selectionGrid = []);
    },
    setTimePicker: (A, F = !1) => {
      Wt.value = A, zt.value = F, v(), A || (oe.timePicker[0] = [], oe.timePicker[1] = []);
    },
    setTimePickerElements: (A, F = 0) => {
      oe.timePicker[F] = A;
    },
    arrowRight: l,
    arrowLeft: c,
    arrowUp: u,
    arrowDown: p,
    clearArrowNav: () => {
      oe.monthYear = [], oe.calendar = [], oe.time = [], oe.actionRow = [], oe.selectionGrid = [], oe.timePicker[0] = [], oe.timePicker[1] = [], Tt.value = !1, Wt.value = !1, zt.value = !1, Lt.value = !1, v(), xt.value = null;
    },
    setMonthPicker: (A) => {
      Lt.value = A, v();
    },
    refSets: oe
    // exposed for testing
  };
}, qe = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), $n = (e, t) => {
  const r = qt(e, t);
  return r || D();
}, ia = (e, t) => t.dateInTz ? qe(new Date(e), t.dateInTz) : D(e), qt = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return D(e);
  const r = D(e);
  return t.exactMatch ? ia(e, t) : qe(r, t.timezone);
}, dn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), da = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), cn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, ca = (e) => {
  const t = typeof e == "object" && e, r = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...r, count: cn(!1) };
  const a = t ? e : {}, l = t ? a.count ?? !0 : e, c = cn(l);
  return Object.assign(r, a, { count: c });
}, fa = (e, t, r) => e || (typeof r == "string" ? r : t), va = (e) => typeof e == "boolean" ? e ? dn({}) : !1 : dn(e), ma = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, pa = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), ga = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), ya = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, ha = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0
}, ...e ?? {} }), ba = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => D(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Da = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, ka = (e, t) => {
  const r = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...r, ...e } : {
    enabled: e,
    noDisabledRange: t.noDisabledRange,
    showLastInRange: t.showLastInRange,
    minMaxRawRange: t.minMaxRawRange,
    partialRange: t.partialRange,
    disableTimeRangeValidation: t.disableTimeRangeValidation,
    maxRange: t.maxRange,
    minRange: t.minRange,
    autoRange: t.autoRange,
    fixedStart: t.fixedStart,
    fixedEnd: t.fixedEnd
  };
}, wa = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, jt = (e, t) => new Map(
  e.map((r) => {
    const a = $n(r, t);
    return [Qt(a), a];
  })
), Ma = (e, t) => e.length ? new Map(
  e.map((r) => {
    const a = $n(r.date, t);
    return [Qt(a), r];
  })
) : null, Aa = (e, t, r, a, l, c, u) => ({
  minDate: qt(e, u),
  maxDate: qt(t, u),
  disabledDates: Et(r) ? jt(r, u) : r,
  allowedDates: Et(a) ? jt(a, u) : null,
  highlight: typeof l == "object" && Et(l == null ? void 0 : l.dates) ? jt(l.dates, u) : l,
  markers: Ma(c, u)
}), Oe = (e) => {
  const t = () => {
    const V = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${V}` : `hh:mm${V} aa`;
  }, r = () => {
    var V;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((V = Z.value) == null ? void 0 : V.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (V) => Rn(V, e.enableSeconds), l = () => J.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, c = Y(() => ca(e.multiCalendars)), u = Y(() => l()), p = Y(() => da(e.ariaLabels)), h = Y(() => pa(e.filters)), M = Y(() => va(e.transitions)), v = Y(() => ga(e.actionRow)), P = Y(
    () => fa(e.previewFormat, e.format, r())
  ), _ = Y(() => ma(e.textInput)), b = Y(() => ya(e.inline)), N = Y(() => ha(e.config)), z = Y(() => ba(e.highlight)), Z = Y(() => Da(e.weekNumbers)), A = Y(() => wa(e.timezone, e.emitTimezone)), F = Y(
    () => Aa(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      z.value,
      e.markers,
      A.value
    )
  ), J = Y(
    () => ka(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: M,
    defaultedMultiCalendars: c,
    defaultedStartTime: u,
    defaultedAriaLabels: p,
    defaultedFilters: h,
    defaultedActionRow: v,
    defaultedPreviewFormat: P,
    defaultedTextInput: _,
    defaultedInline: b,
    defaultedConfig: N,
    defaultedHighlight: z,
    defaultedWeekNumbers: Z,
    defaultedRange: J,
    propDates: F,
    defaultedTz: A,
    getDefaultPattern: r,
    getDefaultStartTime: l
  };
}, Sa = (e, t, r) => {
  const a = x(), { defaultedTextInput: l, defaultedRange: c, defaultedTz: u, getDefaultPattern: p } = Oe(t), h = x(""), M = $t(t, "format");
  at(
    a,
    () => {
      e("internal-model-change", a.value);
    },
    { deep: !0 }
  ), at(M, () => {
    I();
  });
  const v = (n, s, C = !1) => oa(
    n,
    t.format,
    t.formatLocale,
    l.value.rangeSeparator,
    t.modelAuto,
    s ?? p(),
    C
  ), P = (n) => n ? t.modelType ? g(n) : {
    hours: Ke(n),
    minutes: tt(n),
    seconds: t.enableSeconds ? Jt(n) : 0
  } : null, _ = (n) => t.modelType ? g(n) : { month: re(n), year: ie(n) }, b = (n) => Array.isArray(n) ? t.multiDates ? n.map((s) => N(s, dt(D(), s))) : St(
    () => [
      dt(D(), n[0]),
      n[1] ? dt(D(), n[1]) : ut(c.value.partialRange)
    ],
    c.value.enabled
  ) : dt(D(), +n), N = (n, s) => (typeof n == "string" || typeof n == "number") && t.modelType ? q(n) : s, z = (n) => Array.isArray(n) ? [
    N(
      n[0],
      bt(null, +n[0].hours, +n[0].minutes, n[0].seconds)
    ),
    N(
      n[1],
      bt(null, +n[1].hours, +n[1].minutes, n[1].seconds)
    )
  ] : N(n, bt(null, n.hours, n.minutes, n.seconds)), Z = (n) => {
    const s = he(D(), { date: 1 });
    return Array.isArray(n) ? t.multiDates ? n.map((C) => N(C, ct(s, +C.month, +C.year))) : St(
      () => [
        N(n[0], ct(s, +n[0].month, +n[0].year)),
        N(
          n[1],
          n[1] ? ct(s, +n[1].month, +n[1].year) : ut(c.value.partialRange)
        )
      ],
      c.value.enabled
    ) : N(n, ct(s, +n.month, +n.year));
  }, A = (n) => {
    if (Array.isArray(n))
      return n.map((s) => q(s));
    throw new Error(Xt.dateArr("multi-dates"));
  }, F = (n) => {
    if (Array.isArray(n) && c.value.enabled) {
      const s = n[0], C = n[1];
      return [
        D(Array.isArray(s) ? s[0] : null),
        D(Array.isArray(C) ? C[0] : null)
      ];
    }
    return D(n[0]);
  }, J = (n) => t.modelAuto ? Array.isArray(n) ? [q(n[0]), q(n[1])] : t.autoApply ? [q(n)] : [q(n), null] : Array.isArray(n) ? St(
    () => n[1] ? [
      q(n[0]),
      n[1] ? q(n[1]) : ut(c.value.partialRange)
    ] : [q(n[0])],
    c.value.enabled
  ) : q(n), V = () => {
    Array.isArray(a.value) && c.value.enabled && a.value.length === 1 && a.value.push(ut(c.value.partialRange));
  }, se = () => {
    const n = a.value;
    return [
      g(n[0]),
      n[1] ? g(n[1]) : ut(c.value.partialRange)
    ];
  }, de = () => a.value[1] ? se() : g(ye(a.value[0])), ae = () => (a.value || []).map((n) => g(n)), X = () => (V(), t.modelAuto ? de() : t.multiDates ? ae() : Array.isArray(a.value) ? St(() => se(), c.value.enabled) : g(ye(a.value))), te = (n) => !n || Array.isArray(n) && !n.length ? null : t.timePicker ? z(ye(n)) : t.monthPicker ? Z(ye(n)) : t.yearPicker ? b(ye(n)) : t.multiDates ? A(ye(n)) : t.weekPicker ? F(ye(n)) : J(ye(n)), ce = (n) => {
    const s = te(n);
    Kt(ye(s)) ? (a.value = ye(s), I()) : (a.value = null, h.value = "");
  }, m = () => {
    const n = (s) => Le(s, l.value.format);
    return `${n(a.value[0])} ${l.value.rangeSeparator} ${a.value[1] ? n(a.value[1]) : ""}`;
  }, k = () => r.value && a.value ? Array.isArray(a.value) ? m() : Le(a.value, l.value.format) : v(a.value), $ = () => a.value ? t.multiDates ? a.value.map((n) => v(n)).join("; ") : l.value.enabled && typeof l.value.format == "string" ? k() : v(a.value) : "", I = () => {
    !t.format || typeof t.format == "string" || l.value.enabled && typeof l.value.format == "string" ? h.value = $() : h.value = t.format(a.value);
  }, q = (n) => {
    if (t.utc) {
      const s = new Date(n);
      return t.utc === "preserve" ? new Date(s.getTime() + s.getTimezoneOffset() * 6e4) : s;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(n) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ut(n, p(), /* @__PURE__ */ new Date()) : Ut(n, t.modelType, /* @__PURE__ */ new Date()) : new Date(n);
  }, g = (n) => n ? t.utc ? ta(n, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +n : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? v(n) : v(n, t.modelType, !0) : n : "", i = (n, s = !1) => {
    if (e("update:model-value", n), u.value.emitTimezone && s) {
      const C = Array.isArray(n) ? n.map((ee) => qe(ye(ee), u.value.emitTimezone)) : qe(ye(n), u.value.emitTimezone);
      e("update:model-timezone-value", C);
    }
  }, R = (n) => Array.isArray(a.value) ? t.multiDates ? a.value.map((s) => n(s)) : [
    n(a.value[0]),
    a.value[1] ? n(a.value[1]) : ut(c.value.partialRange)
  ] : n(ye(a.value)), j = () => {
    if (Array.isArray(a.value)) {
      const n = Ye(a.value[0], t.weekStart), s = a.value[1] ? Ye(a.value[1], t.weekStart) : [];
      return [n.map((C) => D(C)), s.map((C) => D(C))];
    }
    return Ye(a.value, t.weekStart).map((n) => D(n));
  }, w = (n) => i(ye(R(n)));
  return {
    inputValue: h,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? c.value.enabled ? c.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: ce,
    formatInputValue: I,
    emitModelValue: () => (I(), t.monthPicker ? w(_) : t.timePicker ? w(P) : t.yearPicker ? w(ie) : t.weekPicker ? e("update:model-value", j()) : i(X(), !0))
  };
}, Ta = (e, t) => {
  const { defaultedFilters: r, propDates: a } = Oe(e), { validateMonthYearInRange: l } = At(e), c = (v, P) => {
    let _ = v;
    return r.value.months.includes(re(_)) ? (_ = P ? et(v, 1) : wt(v, 1), c(_, P)) : _;
  }, u = (v, P) => {
    let _ = v;
    return r.value.years.includes(ie(_)) ? (_ = P ? Yn(v, 1) : xn(v, 1), u(_, P)) : _;
  }, p = (v, P = !1) => {
    const _ = he(D(), { month: e.month, year: e.year });
    let b = v ? et(_, 1) : wt(_, 1);
    e.disableYearSelect && (b = dt(b, e.year));
    let N = re(b), z = ie(b);
    r.value.months.includes(N) && (b = c(b, v), N = re(b), z = ie(b)), r.value.years.includes(z) && (b = u(b, v), z = ie(b)), l(N, z, v, e.preventMinMaxNavigation) && h(N, z, P);
  }, h = (v, P, _) => {
    t("update-month-year", { month: v, year: P, fromNav: _ });
  }, M = Y(() => (v) => la(
    he(D(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    v
  ));
  return { handleMonthYearChange: p, isDisabled: M, updateMonthYear: h };
};
var st = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(st || {}), Qe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(Qe || {}), ft = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(ft || {}), Be = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Be || {});
const Ra = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: l,
  emit: c,
  props: u,
  slots: p
}) => {
  const h = x({}), M = x(!1), v = x({
    top: "0",
    left: "0"
  }), P = x(!1), _ = $t(u, "teleportCenter");
  at(_, () => {
    v.value = JSON.parse(JSON.stringify({})), V();
  });
  const b = (g) => {
    if (u.teleport) {
      const i = g.getBoundingClientRect();
      return {
        left: i.left + window.scrollX,
        top: i.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, N = (g, i) => {
    v.value.left = `${g + i - h.value.width}px`;
  }, z = (g) => {
    v.value.left = `${g}px`;
  }, Z = (g, i) => {
    u.position === st.left && z(g), u.position === st.right && N(g, i), u.position === st.center && (v.value.left = `${g + i / 2 - h.value.width / 2}px`);
  }, A = (g) => {
    const { width: i, height: R } = g.getBoundingClientRect(), { top: j, left: w } = u.altPosition ? u.altPosition(g) : b(g);
    return { top: +j, left: +w, width: i, height: R };
  }, F = () => {
    v.value.left = "50%", v.value.top = "50%", v.value.transform = "translate(-50%, -50%)", v.value.position = "fixed", delete v.value.opacity;
  }, J = () => {
    const g = Ie(r), { top: i, left: R, transform: j } = u.altPosition(g);
    v.value = { top: `${i}px`, left: `${R}px`, transform: j ?? "" };
  }, V = (g = !0) => {
    var i;
    if (!l.value.enabled) {
      if (_.value)
        return F();
      if (u.altPosition !== null)
        return J();
      if (g) {
        const R = u.teleport ? (i = t.value) == null ? void 0 : i.$el : e.value;
        R && (h.value = R.getBoundingClientRect()), c("recalculate-position");
      }
      return m();
    }
  }, se = ({ inputEl: g, left: i, width: R }) => {
    window.screen.width > 768 && !M.value && Z(i, R), X(g);
  }, de = (g) => {
    const { top: i, left: R, height: j, width: w } = A(g);
    v.value.top = `${j + i + +u.offset}px`, P.value = !1, M.value || (v.value.left = `${R + w / 2 - h.value.width / 2}px`), se({ inputEl: g, left: R, width: w });
  }, ae = (g) => {
    const { top: i, left: R, width: j } = A(g);
    v.value.top = `${i - +u.offset - h.value.height}px`, P.value = !0, se({ inputEl: g, left: R, width: j });
  }, X = (g) => {
    if (u.autoPosition) {
      const { left: i, width: R } = A(g), { left: j, right: w } = h.value;
      if (!M.value) {
        if (Math.abs(j) !== Math.abs(w)) {
          if (j <= 0)
            return M.value = !0, z(i);
          if (w >= document.documentElement.clientWidth)
            return M.value = !0, N(i, R);
        }
        return Z(i, R);
      }
    }
  }, te = () => {
    const g = Ie(r);
    if (g) {
      const { height: i } = h.value, { top: R, height: j } = g.getBoundingClientRect(), d = window.innerHeight - R - j, S = R;
      return i <= d ? Qe.bottom : i > d && i <= S ? Qe.top : d >= S ? Qe.bottom : Qe.top;
    }
    return Qe.bottom;
  }, ce = (g) => te() === Qe.bottom ? de(g) : ae(g), m = () => {
    const g = Ie(r);
    if (g)
      return u.autoPosition ? ce(g) : de(g);
  }, k = function(g) {
    if (g) {
      const i = g.scrollHeight > g.clientHeight, j = window.getComputedStyle(g).overflowY.indexOf("hidden") !== -1;
      return i && !j;
    }
    return !0;
  }, $ = function(g) {
    return !g || g === document.body || g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : k(g) ? g : $(g.parentNode);
  }, I = (g) => {
    if (g)
      switch (u.position) {
        case st.left:
          return { left: 0, transform: "translateX(0)" };
        case st.right:
          return { left: `${g.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${g.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: P,
    menuStyle: v,
    xCorrect: M,
    setMenuPosition: V,
    getScrollableParent: $,
    shadowRender: (g, i) => {
      var n, s, C;
      const R = document.createElement("div"), j = (n = Ie(r)) == null ? void 0 : n.getBoundingClientRect();
      R.setAttribute("id", "dp--temp-container");
      const w = (s = a.value) != null && s.clientWidth ? a.value : document.body;
      w.append(R);
      const d = I(j), S = On(
        g,
        {
          ...i,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...d }
        },
        Object.fromEntries(
          Object.keys(p).filter((ee) => ["right-sidebar", "left-sidebar"].includes(ee)).map((ee) => [ee, p[ee]])
        )
      );
      tn(S, R), h.value = (C = S.el) == null ? void 0 : C.getBoundingClientRect(), tn(null, R), w.removeChild(R);
    }
  };
}, yt = [
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "calendar-bottom-marker-description-area", use: ["calendar", "shared"] }
  //{ name: 'clock-icon', use: ['time', 'calendar', 'shared'] },
  //{ name: 'arrow-left', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
  //{ name: 'arrow-right', use: ['month-year', 'calendar', 'shared', 'year-mode'] },
  //{ name: 'arrow-up', use: ['time', 'calendar', 'month-year', 'shared'] },
  //{ name: 'arrow-down', use: ['time', 'calendar', 'month-year', 'shared'] },
  //{ name: 'calendar-icon', use: ['month-year', 'time', 'calendar', 'shared', 'year-mode'] },
  //{ name: 'day', use: ['calendar', 'shared'] },
  //{ name: 'month-overlay-value', use: ['calendar', 'month-year', 'shared'] },
  //{ name: 'year-overlay-value', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
  //{ name: 'year-overlay', use: ['month-year', 'shared'] },
  //{ name: 'month-overlay', use: ['month-year', 'shared'] },
  //{ name: 'month-overlay-header', use: ['month-year', 'shared'] },
  //{ name: 'year-overlay-header', use: ['month-year', 'shared'] },
  //{ name: 'hours-overlay-value', use: ['calendar', 'time', 'shared'] },
  //{ name: 'minutes-overlay-value', use: ['calendar', 'time', 'shared'] },
  //{ name: 'seconds-overlay-value', use: ['calendar', 'time', 'shared'] },
  //{ name: 'hours', use: ['calendar', 'time', 'shared'] },
  //{ name: 'minutes', use: ['calendar', 'time', 'shared'] },
  //{ name: 'month', use: ['calendar', 'month-year', 'shared'] },
  //{ name: 'year', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
  //{ name: 'action-buttons', use: ['action'] },
  //{ name: 'action-preview', use: ['action'] },
  //{ name: 'action-extra', use: ['menu'] },
  //{ name: 'time-picker-overlay', use: ['calendar', 'time', 'shared'] },
  //{ name: 'am-pm-button', use: ['calendar', 'time', 'shared'] },
  //{ name: 'right-sidebar', use: ['menu'] },
  //{ name: 'time-picker', use: ['menu', 'shared'] },
  //{ name: 'action-row', use: ['action'] },
], Pa = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], $a = {
  all: () => yt,
  input: () => Pa,
  calendar: () => yt.filter((e) => e.use.includes("calendar")),
  menu: () => yt.filter((e) => e.use.includes("menu")),
  shared: () => yt.filter((e) => e.use.includes("shared")),
  monthYear: () => yt.filter((e) => e.use.includes("month-year"))
}, vt = (e, t, r) => {
  const a = [];
  return $a[t]().forEach((l) => {
    e[l.name] && a.push(l.name);
  }), r != null && r.length && r.forEach((l) => {
    l.slot && a.push(l.slot);
  }), a;
}, Ca = (e) => {
  const t = Y(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = Y(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, Oa = (e, t) => {
  const { defaultedRange: r, defaultedTz: a } = Oe(e), l = D(qe(D(), a.value.timezone)), c = x([{ month: re(l), year: ie(l) }]), u = _t({
    hours: r.value.enabled ? [Ke(l), Ke(l)] : Ke(l),
    minutes: r.value.enabled ? [tt(l), tt(l)] : tt(l),
    seconds: r.value.enabled ? [0, 0] : 0
  }), p = Y({
    get: () => e.internalModelValue,
    set: (v) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", v);
    }
  }), h = Y(
    () => (v) => c.value[v] ? c.value[v].month : 0
  ), M = Y(
    () => (v) => c.value[v] ? c.value[v].year : 0
  );
  return {
    calendars: c,
    time: u,
    modelValue: p,
    month: h,
    year: M
  };
}, _a = (e, t) => {
  const { defaultedMultiCalendars: r, defaultedHighlight: a, defaultedTz: l, propDates: c, defaultedRange: u } = Oe(t), { isDisabled: p } = At(t), h = x(null), M = x(qe(/* @__PURE__ */ new Date(), l.value.timezone)), v = (n) => {
    !n.current && t.hideOffsetDates || (h.value = n.value);
  }, P = () => {
    h.value = null;
  }, _ = (n) => Array.isArray(e.value) && u.value.enabled && e.value[0] && h.value ? n ? ve(h.value, e.value[0]) : fe(h.value, e.value[0]) : !0, b = (n, s) => {
    const C = () => e.value ? s ? e.value[0] || null : e.value[1] : null, ee = e.value && Array.isArray(e.value) ? C() : null;
    return ne(D(n.value), ee);
  }, N = (n) => {
    const s = Array.isArray(e.value) ? e.value[0] : null;
    return n ? !fe(h.value ?? null, s) : !0;
  }, z = (n, s = !0) => (u.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !n.current ? !1 : ne(D(n.value), e.value[s ? 0 : 1]) : u.value.enabled ? b(n, s) && N(s) || ne(n.value, Array.isArray(e.value) ? e.value[0] : null) && _(s) : !1, Z = (n, s, C) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? n ? !1 : C ? ve(e.value[0], s.value) : fe(e.value[0], s.value) : !1, A = (n) => !e.value || t.hideOffsetDates && !n.current ? !1 : u.value.enabled ? t.modelAuto && Array.isArray(e.value) ? ne(n.value, e.value[0] ? e.value[0] : M.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((s) => ne(s, n.value)) : ne(n.value, e.value ? e.value : M.value), F = (n) => {
    if (u.value.autoRange || t.weekPicker) {
      if (h.value) {
        if (t.hideOffsetDates && !n.current)
          return !1;
        const s = Ve(h.value, +u.value.autoRange), C = Ye(D(h.value), t.weekStart);
        return t.weekPicker ? ne(C[1], D(n.value)) : ne(s, D(n.value));
      }
      return !1;
    }
    return !1;
  }, J = (n) => {
    if (u.value.autoRange || t.weekPicker) {
      if (h.value) {
        const s = Ve(h.value, +u.value.autoRange);
        if (t.hideOffsetDates && !n.current)
          return !1;
        const C = Ye(D(h.value), t.weekStart);
        return t.weekPicker ? ve(n.value, C[0]) && fe(n.value, C[1]) : ve(n.value, h.value) && fe(n.value, s);
      }
      return !1;
    }
    return !1;
  }, V = (n) => {
    if (u.value.autoRange || t.weekPicker) {
      if (h.value) {
        if (t.hideOffsetDates && !n.current)
          return !1;
        const s = Ye(D(h.value), t.weekStart);
        return t.weekPicker ? ne(s[0], n.value) : ne(h.value, n.value);
      }
      return !1;
    }
    return !1;
  }, se = (n) => na(e.value, h.value, n.value), de = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, ae = () => t.modelAuto ? Xn(t.internalModelValue) : !0, X = (n) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const s = u.value.enabled ? !z(n) && !z(n, !1) : !0;
    return !p(n.value) && !A(n) && !(!n.current && t.hideOffsetDates) && s;
  }, te = (n) => u.value.enabled ? t.modelAuto ? de() && A(n) : !1 : A(n), ce = (n) => a.value ? Zn(n.value, c.value.highlight) : !1, m = (n) => {
    const s = p(n.value);
    return s && (typeof a.value == "function" ? !a.value(n.value, s) : !a.value.options.highlightDisabled);
  }, k = (n) => {
    var s;
    return typeof a.value == "function" ? a.value(n.value) : (s = a.value.weekdays) == null ? void 0 : s.includes(n.value.getDay());
  }, $ = (n) => (u.value.enabled || t.weekPicker) && (!(r.value.count > 0) || n.current) && ae() && !(!n.current && t.hideOffsetDates) && !A(n) ? se(n) : !1, I = (n) => {
    const { isRangeStart: s, isRangeEnd: C } = R(n), ee = u.value.enabled ? s || C : !1;
    return {
      dp__cell_offset: !n.current,
      dp__pointer: !t.disabled && !(!n.current && t.hideOffsetDates) && !p(n.value),
      dp__cell_disabled: p(n.value),
      dp__cell_highlight: !m(n) && (ce(n) || k(n)) && !te(n) && !ee && !V(n) && !($(n) && t.weekPicker) && !C,
      dp__cell_highlight_active: !m(n) && (ce(n) || k(n)) && te(n),
      dp__today: !t.noToday && ne(n.value, M.value) && n.current,
      "dp--past": fe(n.value, M.value),
      "dp--future": ve(n.value, M.value)
    };
  }, q = (n) => ({
    dp__active_date: te(n),
    dp__date_hover: X(n)
  }), g = (n) => {
    if (e.value && !Array.isArray(e.value)) {
      const s = Ye(e.value, t.weekStart);
      return {
        ...w(n),
        dp__range_start: ne(s[0], n.value),
        dp__range_end: ne(s[1], n.value),
        dp__range_between_week: ve(n.value, s[0]) && fe(n.value, s[1])
      };
    }
    return {
      ...w(n)
    };
  }, i = (n) => {
    if (e.value && Array.isArray(e.value)) {
      const s = Ye(e.value[0], t.weekStart), C = e.value[1] ? Ye(e.value[1], t.weekStart) : [];
      return {
        ...w(n),
        dp__range_start: ne(s[0], n.value) || ne(C[0], n.value),
        dp__range_end: ne(s[1], n.value) || ne(C[1], n.value),
        dp__range_between_week: ve(n.value, s[0]) && fe(n.value, s[1]) || ve(n.value, C[0]) && fe(n.value, C[1]),
        dp__range_between: ve(n.value, s[1]) && fe(n.value, C[0])
      };
    }
    return {
      ...w(n)
    };
  }, R = (n) => {
    const s = r.value.count > 0 ? n.current && z(n) && ae() : z(n) && ae(), C = r.value.count > 0 ? n.current && z(n, !1) && ae() : z(n, !1) && ae();
    return { isRangeStart: s, isRangeEnd: C };
  }, j = (n) => {
    const { isRangeStart: s, isRangeEnd: C } = R(n);
    return {
      dp__range_start: s,
      dp__range_end: C,
      dp__range_between: $(n),
      dp__date_hover_start: Z(X(n), n, !0),
      dp__date_hover_end: Z(X(n), n, !1)
    };
  }, w = (n) => ({
    ...j(n),
    dp__cell_auto_range: J(n),
    dp__cell_auto_range_start: V(n),
    dp__cell_auto_range_end: F(n)
  }), d = (n) => u.value.enabled ? u.value.autoRange ? w(n) : t.modelAuto ? { ...q(n), ...j(n) } : t.weekPicker ? i(n) : j(n) : t.weekPicker ? g(n) : q(n);
  return {
    setHoverDate: v,
    clearHoverDate: P,
    getDayClassData: (n) => t.hideOffsetDates && !n.current ? {} : {
      ...I(n),
      ...d(n),
      [t.dayClass ? t.dayClass(n.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, At = (e) => {
  const { defaultedFilters: t, defaultedRange: r, propDates: a } = Oe(e), l = (m) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(D(m)) : !!Ot(m, a.value.disabledDates) : !1, c = (m) => {
    const k = a.value.maxDate ? ve(m, a.value.maxDate) : !1, $ = a.value.minDate ? fe(m, a.value.minDate) : !1, I = l(m), g = t.value.months.map((d) => +d).includes(re(m)), i = e.disabledWeekDays.length ? e.disabledWeekDays.some((d) => +d === Wn(m)) : !1, R = v(m), j = ie(m), w = j < +e.yearRange[0] || j > +e.yearRange[1];
    return !(k || $ || I || g || w || i || R);
  }, u = (m, k) => fe(...He(a.value.minDate, m, k)) || ne(...He(a.value.minDate, m, k)), p = (m, k) => ve(...He(a.value.maxDate, m, k)) || ne(...He(a.value.maxDate, m, k)), h = (m, k, $) => {
    let I = !1;
    return a.value.maxDate && $ && p(m, k) && (I = !0), a.value.minDate && !$ && u(m, k) && (I = !0), I;
  }, M = (m, k, $, I) => {
    let q = !1;
    return I ? a.value.minDate && a.value.maxDate ? q = h(m, k, $) : (a.value.minDate && u(m, k) || a.value.maxDate && p(m, k)) && (q = !0) : q = !0, q;
  }, v = (m) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !Ot(m, a.value.allowedDates) : !1, P = (m) => !c(m), _ = (m) => r.value.noDisabledRange ? !An({ start: m[0], end: m[1] }).some(($) => P($)) : !0, b = (m) => {
    if (m) {
      const k = ie(m);
      return k >= +e.yearRange[0] && k <= e.yearRange[1];
    }
    return !0;
  }, N = (m, k) => !!(Array.isArray(m) && m[k] && (r.value.maxRange || r.value.minRange) && b(m[k])), z = (m, k, $ = 0) => {
    if (N(k, $) && b(m)) {
      const I = Ln(m, k[$]), q = Tn(k[$], m), g = q.length === 1 ? 0 : q.filter((R) => P(R)).length, i = Math.abs(I) - (r.value.minMaxRawRange ? 0 : g);
      if (r.value.minRange && r.value.maxRange)
        return i >= +r.value.minRange && i <= +r.value.maxRange;
      if (r.value.minRange)
        return i >= +r.value.minRange;
      if (r.value.maxRange)
        return i <= +r.value.maxRange;
    }
    return !0;
  }, Z = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, A = (m) => Array.isArray(m) ? [m[0] ? Yt(m[0]) : null, m[1] ? Yt(m[1]) : null] : Yt(m), F = (m, k, $) => m.find(
    (I) => +I.hours === Ke(k) && I.minutes === "*" ? !0 : +I.minutes === tt(k) && +I.hours === Ke(k)
  ) && $, J = (m, k, $) => {
    const [I, q] = m, [g, i] = k;
    return !F(I, g, $) && !F(q, i, $) && $;
  }, V = (m, k) => {
    const $ = Array.isArray(k) ? k : [k];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? J(e.disabledTimes, $, m) : !$.some((I) => F(e.disabledTimes, I, m)) : m;
  }, se = (m, k) => {
    const $ = Array.isArray(k) ? [Pt(k[0]), k[1] ? Pt(k[1]) : void 0] : Pt(k), I = !e.disabledTimes($);
    return m && I;
  }, de = (m, k) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? V(k, m) : se(k, m) : k, ae = (m) => {
    let k = !0;
    if (!m || Z())
      return !0;
    const $ = !a.value.minDate && !a.value.maxDate ? A(m) : m;
    return (e.maxTime || a.value.maxDate) && (k = sn(
      e.maxTime,
      a.value.maxDate,
      "max",
      ye($),
      k
    )), (e.minTime || a.value.minDate) && (k = sn(
      e.minTime,
      a.value.minDate,
      "min",
      ye($),
      k
    )), de(m, k);
  }, X = (m) => {
    if (!e.monthPicker)
      return !0;
    let k = !0;
    const $ = D(pt(m));
    if (a.value.minDate && a.value.maxDate) {
      const I = D(pt(a.value.minDate)), q = D(pt(a.value.maxDate));
      return ve($, I) && fe($, q) || ne($, I) || ne($, q);
    }
    if (a.value.minDate) {
      const I = D(pt(a.value.minDate));
      k = ve($, I) || ne($, I);
    }
    if (a.value.maxDate) {
      const I = D(pt(a.value.maxDate));
      k = fe($, I) || ne($, I);
    }
    return k;
  }, te = Y(() => (m) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : ae(m)), ce = Y(() => (m) => e.monthPicker ? Array.isArray(m) && (r.value.enabled || e.multiDates) ? !m.filter(($) => !X($)).length : X(m) : !0);
  return {
    isDisabled: P,
    validateDate: c,
    validateMonthYearInRange: M,
    isDateRangeAllowed: _,
    checkMinMaxRange: z,
    isValidTime: ae,
    isTimeValid: te,
    isMonthValid: ce
  };
}, Ba = (e, t, r) => {
  const a = x(0), l = _t({
    [ft.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [ft.calendar]: !1,
    [ft.header]: !1
  }), c = Y(() => e.monthPicker), u = (P) => {
    var _;
    if ((_ = e.flow) != null && _.length) {
      if (!P && c.value)
        return v();
      l[P] = !0, Object.keys(l).filter((b) => !l[b]).length || v();
    }
  }, p = () => {
    var P;
    (P = e.flow) != null && P.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), v());
  }, h = () => {
    a.value = -1;
  }, M = (P, _, ...b) => {
    var N, z;
    e.flow[a.value] === P && r.value && ((z = (N = r.value)[_]) == null || z.call(N, ...b));
  }, v = () => {
    M(Be.month, "toggleMonthPicker", !0), M(Be.year, "toggleYearPicker", !0), M(Be.calendar, "toggleTimePicker", !1, !0), M(Be.time, "toggleTimePicker", !0, !0);
    const P = e.flow[a.value];
    (P === Be.hours || P === Be.minutes || P === Be.seconds) && M(P, "toggleTimePicker", !0, !0, P);
  };
  return { childMount: u, updateFlowStep: p, resetFlow: h, flowStep: a };
}, Bt = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !1 },
  autoApply: { type: Boolean, default: !0 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !0 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !1 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !0 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "tr-TR" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !1 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !1 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !0 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, Zt = {
  ...Bt,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, Ia = {
  key: 1,
  class: "dp__input_wrap"
}, Ea = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], Na = {
  key: 2,
  class: "dp__clear_icon"
}, Fa = /* @__PURE__ */ lt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Bt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, {
      defaultedTextInput: c,
      defaultedAriaLabels: u,
      defaultedInline: p,
      defaultedConfig: h,
      defaultedRange: M,
      getDefaultPattern: v,
      getDefaultStartTime: P
    } = Oe(l), { checkMinMaxRange: _ } = At(l), b = x(), N = x(null), z = x(!1), Z = x(!1), A = Y(
      () => ({
        dp__pointer: !l.disabled && !l.readonly && !c.value.enabled,
        dp__disabled: l.disabled,
        dp__input_readonly: !c.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !l.hideInputIcon,
        dp__input_valid: !!l.state,
        dp__input_invalid: l.state === !1,
        dp__input_focus: z.value || l.isMenuOpen,
        dp__input_reg: !c.value.enabled,
        [l.inputClassName]: !!l.inputClassName
      })
    ), F = () => {
      a("set-input-date", null), l.autoApply && (a("set-empty-date"), b.value = null);
    }, J = (i) => {
      const R = P();
      return ea(
        i,
        c.value.format ?? v(),
        R ?? Rn({}, l.enableSeconds),
        l.inputValue,
        Z.value
      );
    }, V = (i) => {
      const { rangeSeparator: R } = c.value, [j, w] = i.split(`${R}`);
      if (j) {
        const d = J(j.trim()), S = w ? J(w.trim()) : null, n = d && S ? [d, S] : [d];
        _(S, n, 0) && (b.value = d ? n : null);
      }
    }, se = () => {
      Z.value = !0;
    }, de = (i) => {
      if (M.value.enabled)
        V(i);
      else if (l.multiDates) {
        const R = i.split(";");
        b.value = R.map((j) => J(j.trim())).filter((j) => j);
      } else
        b.value = J(i);
    }, ae = (i) => {
      var j;
      const R = typeof i == "string" ? i : (j = i.target) == null ? void 0 : j.value;
      R !== "" ? (c.value.openMenu && !l.isMenuOpen && a("open"), de(R), a("set-input-date", b.value)) : F(), Z.value = !1, a("update:input-value", R);
    }, X = (i) => {
      c.value.enabled ? (de(i.target.value), c.value.enterSubmit && Kt(b.value) && l.inputValue !== "" ? (a("set-input-date", b.value, !0), b.value = null) : c.value.enterSubmit && l.inputValue === "" && (b.value = null, a("clear"))) : m(i);
    }, te = (i) => {
      c.value.enabled && c.value.tabSubmit && de(i.target.value), c.value.tabSubmit && Kt(b.value) && l.inputValue !== "" ? (a("set-input-date", b.value, !0, !0), b.value = null) : c.value.tabSubmit && l.inputValue === "" && (b.value = null, a("clear", !0));
    }, ce = () => {
      var i;
      z.value = !0, a("focus"), c.value.enabled && c.value.selectOnFocus && ((i = N.value) == null || i.select());
    }, m = (i) => {
      i.preventDefault(), nt(i, h.value, !0), c.value.enabled && c.value.openMenu && !p.value.input && !l.isMenuOpen ? a("open") : c.value.enabled || a("toggle");
    }, k = () => {
      a("real-blur"), z.value = !1, (!l.isMenuOpen || p.value.enabled && p.value.input) && a("blur"), l.autoApply && c.value.enabled && b.value && !l.isMenuOpen && (a("set-input-date", b.value), a("select-date"), b.value = null);
    }, $ = (i) => {
      nt(i, h.value, !0), a("clear");
    }, I = (i) => {
      if (!c.value.enabled) {
        if (i.code === "Tab")
          return;
        i.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var i;
        (i = N.value) == null || i.focus({ preventScroll: !0 });
      },
      setParsedDate: (i) => {
        b.value = i;
      }
    }), (i, R) => {
      var j;
      return U(), G("div", { onClick: m }, [
        i.$slots.trigger && !i.$slots["dp-input"] && !E(p).enabled ? me(i.$slots, "trigger", { key: 0 }) : le("", !0),
        !i.$slots.trigger && (!E(p).enabled || E(p).input) ? (U(), G("div", Ia, [
          i.$slots["dp-input"] && !i.$slots.trigger && (!E(p).enabled || E(p).enabled && E(p).input) ? me(i.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: ae,
            onEnter: X,
            onTab: te,
            onClear: $,
            onBlur: k,
            onKeypress: I,
            onPaste: se,
            openMenu: () => i.$emit("open"),
            closeMenu: () => i.$emit("close"),
            toggleMenu: () => i.$emit("toggle")
          }) : le("", !0),
          i.$slots["dp-input"] ? le("", !0) : (U(), G("input", {
            key: 1,
            id: i.uid ? `dp-input-${i.uid}` : void 0,
            ref_key: "inputRef",
            ref: N,
            name: i.name,
            class: ke(A.value),
            inputmode: E(c).enabled ? "text" : "none",
            placeholder: i.placeholder,
            disabled: i.disabled,
            readonly: i.readonly,
            required: i.required,
            value: e.inputValue,
            autocomplete: i.autocomplete,
            "aria-label": (j = E(u)) == null ? void 0 : j.input,
            "aria-disabled": i.disabled || void 0,
            "aria-invalid": i.state === !1 ? !0 : void 0,
            onInput: ae,
            onKeydown: [
              Pe(X, ["enter"]),
              Pe(te, ["tab"]),
              I
            ],
            onBlur: k,
            onFocus: ce,
            onKeypress: I,
            onPaste: se
          }, null, 42, Ea)),
          Se("div", {
            onClick: R[1] || (R[1] = (w) => a("toggle"))
          }, [
            i.$slots["input-icon"] && !i.hideInputIcon ? (U(), G("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: R[0] || (R[0] = (w) => a("toggle"))
            }, [
              me(i.$slots, "input-icon")
            ])) : le("", !0)
          ]),
          i.$slots["clear-icon"] && e.inputValue && i.clearable && !i.disabled && !i.readonly ? (U(), G("span", Na, [
            me(i.$slots, "clear-icon", { clear: $ })
          ])) : le("", !0)
        ])) : le("", !0)
      ]);
    };
  }
}), Ya = { class: "dp__month_year_row" }, xa = /* @__PURE__ */ lt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...Zt
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, { handleMonthYearChange: c, updateMonthYear: u } = Ta(l, a), p = x(!1), h = x(!1);
    Mt(() => {
      a("mount");
    });
    const M = (b, N) => {
      N !== void 0 ? b.value = N : b.value = !b.value, b.value || a("overlay-closed");
    }, v = (b = !1, N) => {
      _(b), M(p, N);
    }, P = (b = !1, N) => {
      _(b), M(h, N);
    }, _ = (b) => {
      b || a("reset-flow");
    };
    return t({
      toggleMonthPicker: v,
      toggleYearPicker: P,
      handleMonthYearChange: c
    }), (b, N) => (U(), G("div", Ya, [
      b.$slots["month-year"] ? me(b.$slots, "month-year", We(Ze({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: E(u), handleMonthYearChange: E(c), instance: e.instance }))) : le("", !0)
    ]));
  }
}), Wa = ["aria-label"], La = {
  class: "dp__calendar_header",
  role: "row"
}, za = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, ja = ["aria-label"], Ha = /* @__PURE__ */ Se("div", { class: "dp__calendar_header_separator" }, null, -1), Ua = ["aria-label"], Ka = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, qa = { class: "dp__cell_inner" }, Ga = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Ja = /* @__PURE__ */ lt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Zt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, { buildMultiLevelMatrix: c } = Vt(), {
      defaultedTransitions: u,
      defaultedConfig: p,
      defaultedAriaLabels: h,
      defaultedMultiCalendars: M,
      defaultedWeekNumbers: v
    } = Oe(l), P = x(null), _ = x({
      bottom: "",
      left: "",
      transform: ""
    }), b = x([]), N = x(null), z = x(!0), Z = x(""), A = x([]), F = x({ left: "50%" }), J = Y(() => l.calendar ? l.calendar(l.mappedDates) : l.mappedDates), V = Y(() => l.dayNames ? Array.isArray(l.dayNames) ? l.dayNames : l.dayNames(l.locale, +l.weekStart) : Kn(l.formatLocale, l.locale, +l.weekStart));
    Mt(() => {
      a("mount", { cmp: "calendar", refs: b }), l.monthChangeOnScroll && N.value && N.value.addEventListener("wheel", g, { passive: !1 });
    });
    const se = (d) => d ? l.vertical ? "vNext" : "next" : l.vertical ? "vPrevious" : "previous", de = (d, S) => {
      if (l.transitions) {
        const n = Ce(ct(D(), l.month, l.year));
        Z.value = ve(Ce(ct(D(), d, S)), n) ? u.value[se(!0)] : u.value[se(!1)], z.value = !1, Dt(() => {
          z.value = !0;
        });
      }
    }, ae = Y(
      () => ({
        [l.calendarClassName]: !!l.calendarClassName
      })
    ), X = Y(() => (d) => {
      const S = Jn(d);
      return {
        dp__marker_dot: S.type === "dot",
        dp__marker_line: S.type === "line"
      };
    }), te = Y(() => (d) => ne(d, P.value)), ce = Y(() => ({
      dp__calendar: !0,
      dp__calendar_next: M.value.count > 0 && l.instance !== 0
    })), m = Y(() => (d) => l.hideOffsetDates ? d.current : !0), k = (d) => Le(d, "yyyy-MM-dd"), $ = async (d, S, n) => {
      var s, C;
      if (a("set-hover-date", d), (C = (s = d.marker) == null ? void 0 : s.tooltip) != null && C.length) {
        const ee = Ie(b.value[S][n]);
        if (ee) {
          const { width: H, height: we } = ee.getBoundingClientRect();
          P.value = d.value;
          let pe = { left: `${H / 2}px` }, Me = -50;
          if (await Dt(), A.value[0]) {
            const { left: Te, width: f } = A.value[0].getBoundingClientRect();
            Te < 0 && (pe = { left: "0" }, Me = 0, F.value.left = `${H / 2}px`), window.innerWidth < Te + f && (pe = { right: "0" }, Me = 0, F.value.left = `${f - H / 2}px`);
          }
          _.value = {
            bottom: `${we}px`,
            ...pe,
            transform: `translateX(${Me}%)`
          }, a("tooltip-open", d.marker);
        }
      }
    }, I = (d) => {
      P.value && (P.value = null, _.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", d.marker));
    }, q = (d, S, n) => {
      d && (Array.isArray(b.value[S]) ? b.value[S][n] = d : b.value[S] = [d]), l.arrowNavigation && c(b.value, "calendar");
    }, g = (d) => {
      l.monthChangeOnScroll && (d.preventDefault(), a("handle-scroll", d));
    }, i = (d) => v.value.type === "local" ? zn(d.value, { weekStartsOn: +l.weekStart }) : v.value.type === "iso" ? jn(d.value) : typeof v.value.type == "function" ? v.value.type(d.value) : "", R = (d) => {
      const S = d[0];
      return v.value.hideOnOffsetDates ? d.some((n) => n.current) ? i(S) : "" : i(S);
    }, j = (d, S) => {
      nt(d, p.value), a("select-date", S);
    }, w = (d) => {
      nt(d, p.value);
    };
    return t({ triggerTransition: de }), (d, S) => {
      var n;
      return U(), G("div", {
        class: ke(ce.value)
      }, [
        Se("div", {
          ref_key: "calendarWrapRef",
          ref: N,
          role: "grid",
          class: ke(ae.value),
          "aria-label": (n = E(h)) == null ? void 0 : n.calendarWrap
        }, [
          Se("div", La, [
            d.weekNumbers ? (U(), G("div", za, ot(d.weekNumName), 1)) : le("", !0),
            (U(!0), G(Re, null, $e(V.value, (s, C) => {
              var ee, H;
              return U(), G("div", {
                key: C,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (H = (ee = E(h)) == null ? void 0 : ee.weekDay) == null ? void 0 : H.call(ee, C)
              }, [
                d.$slots["calendar-header"] ? me(d.$slots, "calendar-header", {
                  key: 0,
                  day: s,
                  index: C
                }) : le("", !0),
                d.$slots["calendar-header"] ? le("", !0) : (U(), G(Re, { key: 1 }, [
                  nn(ot(s), 1)
                ], 64))
              ], 8, ja);
            }), 128))
          ]),
          Ha,
          ht(mn, {
            name: Z.value,
            css: !!d.transitions
          }, {
            default: xe(() => {
              var s;
              return [
                z.value ? (U(), G("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((s = E(h)) == null ? void 0 : s.calendarDays) || void 0
                }, [
                  (U(!0), G(Re, null, $e(J.value, (C, ee) => (U(), G("div", {
                    key: ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    d.weekNumbers ? (U(), G("div", Ka, [
                      Se("div", qa, ot(R(C.days)), 1)
                    ])) : le("", !0),
                    (U(!0), G(Re, null, $e(C.days, (H, we) => {
                      var pe, Me, Te;
                      return U(), G("div", {
                        id: k(H.value),
                        ref_for: !0,
                        ref: (f) => q(f, ee, we),
                        key: we + ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (H.classData.dp__active_date || H.classData.dp__range_start || H.classData.dp__range_start) ?? void 0,
                        "aria-disabled": H.classData.dp__cell_disabled || void 0,
                        "aria-label": (Me = (pe = E(h)) == null ? void 0 : pe.day) == null ? void 0 : Me.call(pe, H),
                        tabindex: "0",
                        onClick: je((f) => j(f, H), ["prevent"]),
                        onKeydown: [
                          Pe((f) => d.$emit("select-date", H), ["enter"]),
                          Pe((f) => d.$emit("handle-space", H), ["space"])
                        ],
                        onMouseenter: (f) => $(H, ee, we),
                        onMouseleave: (f) => I(H)
                      }, [
                        Se("div", {
                          class: ke(["dp__cell_inner", H.classData])
                        }, [
                          d.$slots.day && m.value(H) ? me(d.$slots, "day", {
                            key: 0,
                            day: +H.text,
                            date: H.value
                          }) : le("", !0),
                          d.$slots.day ? le("", !0) : (U(), G(Re, { key: 1 }, [
                            nn(ot(H.text), 1)
                          ], 64)),
                          H.marker && m.value(H) ? (U(), G(Re, { key: 2 }, [
                            d.$slots.marker ? me(d.$slots, "marker", {
                              key: 0,
                              marker: H.marker,
                              day: +H.text,
                              date: H.value
                            }) : (U(), G("div", {
                              key: 1,
                              class: ke(X.value(H.marker)),
                              style: it(H.marker.color ? { backgroundColor: H.marker.color } : {})
                            }, null, 6))
                          ], 64)) : le("", !0),
                          te.value(H.value) ? (U(), G("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: A,
                            class: "dp__marker_tooltip",
                            style: it(_.value)
                          }, [
                            (Te = H.marker) != null && Te.tooltip ? (U(), G("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: w
                            }, [
                              (U(!0), G(Re, null, $e(H.marker.tooltip, (f, O) => (U(), G("div", {
                                key: O,
                                class: "dp__tooltip_text"
                              }, [
                                d.$slots["marker-tooltip"] ? me(d.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: f,
                                  day: H.value
                                }) : le("", !0),
                                d.$slots["marker-tooltip"] ? le("", !0) : (U(), G(Re, { key: 1 }, [
                                  Se("div", {
                                    class: "dp__tooltip_mark",
                                    style: it(f.color ? { backgroundColor: f.color } : {})
                                  }, null, 4),
                                  Se("div", null, ot(f.text), 1)
                                ], 64))
                              ]))), 128)),
                              Se("div", {
                                class: "dp__arrow_bottom_tp",
                                style: it(F.value)
                              }, null, 4)
                            ])) : le("", !0)
                          ], 4)) : le("", !0)
                        ], 2)
                      ], 40, Ga);
                    }), 128))
                  ]))), 128)),
                  d.$slots["calendar-bottom-marker-description-area"] ? me(d.$slots, "calendar-bottom-marker-description-area", {
                    key: 0,
                    weeks: J.value
                  }) : le("", !0)
                ], 8, Ua)) : le("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Wa)
      ], 2);
    };
  }
}), Xa = /* @__PURE__ */ lt({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, r = Y(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = Y(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (l, c) => (U(), G("div", {
      class: ke({
        dp__menu_inner: !l.stretch,
        "dp--menu--inner-stretched": l.stretch,
        dp__flex_display: l.multiCalendars > 0,
        "dp--flex-display-collapsed": l.collapse
      })
    }, [
      (U(!0), G(Re, null, $e(r.value, (u, p) => (U(), G("div", {
        key: u,
        class: ke(a.value)
      }, [
        me(l.$slots, "default", {
          instance: u,
          index: p
        })
      ], 2))), 128))
    ], 2));
  }
}), fn = (e) => Array.isArray(e), Qa = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => ne(e, a))) {
      const a = t.value.filter((l) => !ne(l, e));
      t.value = a.length ? a : null;
    } else
      (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, Va = (e, t, r, a) => {
  e && (e[0] && e[1] && r || e[0] && !e[1] && a && r) && t("auto-apply");
}, Za = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => qe(D(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = qe(D(e.value), e.timezone));
}, el = (e, t, r, a) => Array.isArray(t.value) && t.value.length === 2 ? a.value.fixedStart && (ve(e, t.value[0]) || ne(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (fe(e, t.value[1]) || ne(e, t.value[1])) ? [e, t.value[1]] : (r("invalid-fixed-range", e), t.value) : [], tl = (e, t, r, a) => {
  const l = x([]), c = x(/* @__PURE__ */ new Date()), { modelValue: u, calendars: p, time: h } = Oa(e, t), { defaultedMultiCalendars: M, defaultedRange: v, defaultedTz: P, propDates: _ } = Oe(e), { validateMonthYearInRange: b, isDisabled: N, isDateRangeAllowed: z, checkMinMaxRange: Z } = At(e), A = Y(
    () => (o) => p.value[o] ? p.value[o].month : 0
  ), F = Y(
    () => (o) => p.value[o] ? p.value[o].year : 0
  ), J = (o, y, L) => {
    var Q, ue;
    p.value[o] || (p.value[o] = { month: 0, year: 0 }), p.value[o].month = un(y) ? (Q = p.value[o]) == null ? void 0 : Q.month : y, p.value[o].year = un(L) ? (ue = p.value[o]) == null ? void 0 : ue.year : L;
  }, V = () => {
    e.autoApply && t("select-date");
  };
  at(
    u,
    (o, y) => {
      JSON.stringify(o) !== JSON.stringify(y) && ae();
    },
    { deep: !0 }
  ), Mt(() => {
    e.shadow || (u.value || R(), ae(!0), e.focusStartDate && e.startDate && R());
  });
  const se = Y(() => {
    var o;
    return (o = e.flow) != null && o.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), de = () => {
    e.autoApply && se.value && t("auto-apply");
  }, ae = (o = !1) => {
    if (u.value)
      return Array.isArray(u.value) ? (l.value = u.value, I(o)) : ce(u.value, o);
    if (M.value.count && o && !e.startDate)
      return te(D(), o);
  }, X = () => Array.isArray(u.value) && v.value.enabled ? re(u.value[0]) === re(u.value[1] ?? u.value[0]) : !1, te = (o, y = !1) => {
    if ((!M.value.count || !M.value.static || y) && J(0, re(o), ie(o)), M.value.count && (!M.value.solo || !u.value || X()))
      for (let L = 1; L < M.value.count; L++) {
        const Q = he(D(), { month: A.value(L - 1), year: F.value(L - 1) }), ue = Hn(Q, { months: 1 });
        p.value[L] = { month: re(ue), year: ie(ue) };
      }
  }, ce = (o, y) => {
    te(o), M.value.count && y && i();
  }, m = (o) => {
    if (M.value.count) {
      if (M.value.solo)
        return 0;
      const y = re(o[0]), L = re(o[1]);
      return Math.abs(L - y) < M.value.count ? 0 : 1;
    }
    return 1;
  }, k = (o, y) => {
    o[1] && v.value.showLastInRange ? te(o[m(o)], y) : te(o[0], y);
  }, $ = (o, y) => {
    if ((v.value.enabled || e.weekPicker) && !e.multiDates)
      return k(o, y);
    if (e.multiDates && y) {
      const L = o[o.length - 1];
      return ce(L, y);
    }
  }, I = (o) => {
    const y = u.value;
    $(y, o), M.value.count && M.value.solo && i();
  }, q = (o, y) => {
    const L = he(D(), { month: A.value(y), year: F.value(y) }), Q = o < 0 ? et(L, 1) : wt(L, 1);
    b(re(Q), ie(Q), o < 0, e.preventMinMaxNavigation) && (J(y, re(Q), ie(Q)), t("update-month-year", { instance: y, month: re(Q), year: ie(Q) }), M.value.count && !M.value.solo && g(y), r());
  }, g = (o) => {
    for (let y = o - 1; y >= 0; y--) {
      const L = wt(he(D(), { month: A.value(y + 1), year: F.value(y + 1) }), 1);
      J(y, re(L), ie(L));
    }
    for (let y = o + 1; y <= M.value.count - 1; y++) {
      const L = et(he(D(), { month: A.value(y - 1), year: F.value(y - 1) }), 1);
      J(y, re(L), ie(L));
    }
  }, i = () => {
    if (Array.isArray(u.value) && u.value.length === 2) {
      const o = D(
        D(u.value[1] ? u.value[1] : et(u.value[0], 1))
      ), [y, L] = [re(u.value[0]), ie(u.value[0])], [Q, ue] = [re(u.value[1]), ie(u.value[1])];
      (y !== Q || y === Q && L !== ue) && M.value.solo && J(1, re(o), ie(o));
    } else
      u.value && !Array.isArray(u.value) && (J(0, re(u.value), ie(u.value)), te(D()));
  }, R = () => {
    e.startDate && (J(0, re(D(e.startDate)), ie(D(e.startDate))), M.value.count && g(0));
  }, j = (o, y) => {
    if (e.monthChangeOnScroll) {
      const L = (/* @__PURE__ */ new Date()).getTime() - c.value.getTime(), Q = Math.abs(o.deltaY);
      let ue = 500;
      Q > 1 && (ue = 100), Q > 100 && (ue = 0), L > ue && (c.value = /* @__PURE__ */ new Date(), q(e.monthChangeOnScroll !== "inverse" ? -o.deltaY : o.deltaY, y));
    }
  }, w = (o, y, L = !1) => {
    e.monthChangeOnArrows && e.vertical === L && d(o, y);
  }, d = (o, y) => {
    q(o === "right" ? -1 : 1, y);
  }, S = (o) => {
    if (_.value.markers)
      return Ot(o.value, _.value.markers);
  }, n = (o, y) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [o == 0, !0];
      case "fair":
        return [o == 0 || y > o, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, s = (o, y, L, Q) => {
    if (e.sixWeeks && o.length < 6) {
      const ue = 6 - o.length, _e = (y.getDay() + 7 - Q) % 7, rt = 6 - (L.getDay() + 7 - Q) % 7, [Xe, T] = n(_e, rt);
      for (let W = 1; W <= ue; W++)
        if (T ? !!(W % 2) == Xe : Xe) {
          const ze = o[0].days[0], Fe = C(Ve(ze.value, -7), re(y));
          o.unshift({ days: Fe });
        } else {
          const ze = o[o.length - 1], Fe = ze.days[ze.days.length - 1], It = C(Ve(Fe.value, 1), re(y));
          o.push({ days: It });
        }
    }
    return o;
  }, C = (o, y) => {
    const L = D(o), Q = [];
    for (let ue = 0; ue < 7; ue++) {
      const _e = Ve(L, ue), Je = re(_e) !== y;
      Q.push({
        text: e.hideOffsetDates && Je ? "" : _e.getDate(),
        value: _e,
        current: !Je,
        classData: {}
      });
    }
    return Q;
  }, ee = (o, y) => {
    const L = [], Q = new Date(y, o), ue = new Date(y, o + 1, 0), _e = e.weekStart, Je = Sn(Q, { weekStartsOn: _e }), rt = (Xe) => {
      const T = C(Xe, o);
      if (L.push({ days: T }), !L[L.length - 1].days.some(
        (W) => ne(Ce(W.value), Ce(ue))
      )) {
        const W = Ve(Xe, 7);
        rt(W);
      }
    };
    return rt(Je), s(L, Q, ue, _e);
  }, H = (o) => {
    const y = bt(D(o.value), h.hours, h.minutes, be());
    t("date-update", y), e.multiDates ? Qa(y, u, e.multiDatesLimit) : u.value = y, a(), Dt().then(() => {
      de();
    });
  }, we = (o) => v.value.noDisabledRange ? Tn(l.value[0], o).some((L) => N(L)) : !1, pe = () => {
    l.value = u.value ? u.value.slice() : [], l.value.length === 2 && !(v.value.fixedStart || v.value.fixedEnd) && (l.value = []);
  }, Me = (o, y) => {
    const L = [
      D(o.value),
      Ve(D(o.value), +v.value.autoRange)
    ];
    z(L) ? (y && Te(o.value), l.value = L) : t("invalid-date", o.value);
  }, Te = (o) => {
    const y = re(D(o)), L = ie(D(o));
    if (J(0, y, L), M.value.count > 0)
      for (let Q = 1; Q < M.value.count; Q++) {
        const ue = aa(
          he(D(o), { year: A.value(Q - 1), month: F.value(Q - 1) })
        );
        J(Q, ue.month, ue.year);
      }
  }, f = (o) => {
    if (we(o.value) || !Z(o.value, u.value, v.value.fixedStart ? 0 : 1))
      return t("invalid-date", o.value);
    l.value = el(D(o.value), u, t, v);
  }, O = (o, y) => {
    if (pe(), v.value.autoRange)
      return Me(o, y);
    if (v.value.fixedStart || v.value.fixedEnd)
      return f(o);
    l.value[0] ? Z(D(o.value), u.value) && !we(o.value) ? fe(D(o.value), D(l.value[0])) ? (l.value.unshift(D(o.value)), t("range-end", l.value[0])) : (l.value[1] = D(o.value), t("range-end", l.value[1])) : (e.autoApply && t("auto-apply-invalid", o.value), t("invalid-date", o.value)) : (l.value[0] = D(o.value), t("range-start", l.value[0]));
  }, be = (o = !0) => e.enableSeconds ? Array.isArray(h.seconds) ? o ? h.seconds[0] : h.seconds[1] : h.seconds : 0, Ae = (o) => {
    l.value[o] = bt(
      l.value[o],
      h.hours[o],
      h.minutes[o],
      be(o !== 1)
    );
  }, Ge = () => {
    var o, y;
    l.value[0] && l.value[1] && +((o = l.value) == null ? void 0 : o[0]) > +((y = l.value) == null ? void 0 : y[1]) && (l.value.reverse(), t("range-start", l.value[0]), t("range-end", l.value[1]));
  }, B = () => {
    l.value.length && (l.value[0] && !l.value[1] ? Ae(0) : (Ae(0), Ae(1), a()), Ge(), u.value = l.value.slice(), Va(l.value, t, e.autoApply, e.modelAuto));
  };
  return {
    calendars: p,
    modelValue: u,
    month: A,
    year: F,
    time: h,
    getCalendarDays: ee,
    getMarker: S,
    handleScroll: j,
    handleSwipe: d,
    handleArrow: w,
    selectDate: (o, y = !1) => {
      if (N(o.value) || !o.current && e.hideOffsetDates)
        return t("invalid-date", o.value);
      if (!v.value.enabled)
        return H(o);
      fn(h.hours) && fn(h.minutes) && !e.multiDates && (O(o, y), B());
    },
    updateMonthYear: (o, y) => {
      var Q;
      J(o, y.month, y.year), M.value.count && !M.value.solo && g(o), t("update-month-year", { instance: o, month: y.month, year: y.year }), r(M.value.solo ? o : void 0);
      const L = (Q = e.flow) != null && Q.length ? e.flow[e.flowStep] : void 0;
      !y.fromNav && (L === Be.month || L === Be.year) && a();
    },
    presetDate: (o, y) => {
      Za({
        value: o,
        modelValue: u,
        range: v.value.enabled,
        timezone: y ? void 0 : P.value.timezone
      }), V(), e.multiCalendars && Dt().then(() => ae(!0));
    },
    selectCurrentDate: () => {
      v.value.enabled ? u.value && Array.isArray(u.value) && u.value[0] ? u.value = fe(D(), u.value[0]) ? [D(), u.value[0]] : [u.value[0], D()] : u.value = [D()] : u.value = D(), V();
    }
  };
}, nl = /* @__PURE__ */ lt({
  __name: "DatePicker",
  props: {
    ...Zt
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, {
      calendars: c,
      month: u,
      year: p,
      modelValue: h,
      time: M,
      getCalendarDays: v,
      getMarker: P,
      handleArrow: _,
      handleScroll: b,
      handleSwipe: N,
      selectDate: z,
      updateMonthYear: Z,
      presetDate: A,
      selectCurrentDate: F
    } = tl(l, a, I, q), J = Gt(), { setHoverDate: V, getDayClassData: se, clearHoverDate: de } = _a(h, l), { defaultedMultiCalendars: ae } = Oe(l), X = x([]), te = x([]), ce = vt(J, "calendar"), m = vt(J, "monthYear"), k = (w) => {
      l.shadow || a("mount", w);
    };
    at(
      c,
      () => {
        l.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const $ = Y(() => (w) => v(u.value(w), p.value(w)).map((d) => ({
      ...d,
      days: d.days.map((S) => (S.marker = P(S), S.classData = se(S), S))
    })));
    function I(w) {
      var d;
      w || w === 0 ? (d = te.value[w]) == null || d.triggerTransition(u.value(w), p.value(w)) : te.value.forEach((S, n) => S.triggerTransition(u.value(n), p.value(n)));
    }
    function q() {
      a("update-flow-step");
    }
    const g = (w, d = !1) => {
      z(w, d), l.spaceConfirm && a("select-date");
    };
    return t({
      clearHoverDate: de,
      presetDate: A,
      selectCurrentDate: F,
      toggleMonthPicker: (w, d, S = 0) => {
        var n;
        (n = X.value[S]) == null || n.toggleMonthPicker(w, d);
      },
      toggleYearPicker: (w, d, S = 0) => {
        var n;
        (n = X.value[S]) == null || n.toggleYearPicker(w, d);
      },
      handleArrow: _,
      updateMonthYear: Z,
      getSidebarProps: () => ({
        modelValue: h,
        month: u,
        year: p,
        time: M,
        updateMonthYear: Z,
        selectDate: z,
        presetDate: A
      })
    }), (w, d) => (U(), Ct(Xa, {
      "multi-calendars": E(ae).count,
      collapse: w.collapse
    }, {
      default: xe(({ instance: S, index: n }) => [
        w.disableMonthYearSelect ? le("", !0) : (U(), Ct(xa, Ze({
          key: 0,
          ref: (s) => {
            s && (X.value[n] = s);
          },
          months: E(Gn)(w.formatLocale, w.locale, w.monthNameFormat),
          years: E(qn)(w.yearRange, w.reverseYears),
          month: E(u)(S),
          year: E(p)(S),
          instance: S
        }, w.$props, {
          onMount: d[0] || (d[0] = (s) => k(E(ft).header)),
          onResetFlow: d[1] || (d[1] = (s) => w.$emit("reset-flow")),
          onUpdateMonthYear: (s) => E(Z)(S, s),
          onOverlayClosed: d[2] || (d[2] = (s) => w.$emit("focus-menu"))
        }), kt({ _: 2 }, [
          $e(E(m), (s, C) => ({
            name: s,
            fn: xe((ee) => [
              me(w.$slots, s, We(Ue(ee)))
            ])
          }))
        ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
        ht(Ja, Ze({
          ref: (s) => {
            s && (te.value[n] = s);
          },
          "mapped-dates": $.value(S),
          month: E(u)(S),
          year: E(p)(S),
          instance: S
        }, w.$props, {
          onSelectDate: (s) => E(z)(s, S !== 1),
          onHandleSpace: (s) => g(s, S !== 1),
          onSetHoverDate: d[3] || (d[3] = (s) => E(V)(s)),
          onHandleScroll: (s) => E(b)(s, S),
          onHandleSwipe: (s) => E(N)(s, S),
          onMount: d[4] || (d[4] = (s) => k(E(ft).calendar)),
          onResetFlow: d[5] || (d[5] = (s) => w.$emit("reset-flow")),
          onTooltipOpen: d[6] || (d[6] = (s) => w.$emit("tooltip-open", s)),
          onTooltipClose: d[7] || (d[7] = (s) => w.$emit("tooltip-close", s))
        }), kt({ _: 2 }, [
          $e(E(ce), (s, C) => ({
            name: s,
            fn: xe((ee) => [
              me(w.$slots, s, We(Ue({ ...ee })))
            ])
          }))
        ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), al = ["id", "aria-label"], ll = {
  key: 0,
  class: "dp--menu-load-container"
}, rl = /* @__PURE__ */ Se("span", { class: "dp--menu-loader" }, null, -1), ul = [
  rl
], ol = {
  key: 0,
  class: "dp__sidebar_left"
}, sl = ["onClick", "onKeydown"], il = {
  key: 2,
  class: "dp__sidebar_right"
}, dl = {
  key: 3,
  class: "dp__action_extra"
}, vn = /* @__PURE__ */ lt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Bt,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, c = x(null), u = Y(() => {
      const { openOnTop: f, ...O } = l;
      return {
        ...O,
        flowStep: X.value,
        collapse: l.collapse,
        noOverlayFocus: l.noOverlayFocus,
        menuWrapRef: c.value
      };
    }), { setMenuFocused: p, setShiftKey: h, control: M } = Pn(), v = Gt(), { defaultedTextInput: P, defaultedInline: _, defaultedConfig: b } = Oe(l), N = x(null), z = x(0), Z = x(null), A = x(!1), F = x(null);
    Mt(() => {
      if (!l.shadow) {
        A.value = !0, J(), window.addEventListener("resize", J);
        const f = Ie(c);
        if (f && !P.value.enabled && !_.value.enabled && (p(!0), $()), f) {
          const O = (be) => {
            b.value.allowPreventDefault && be.preventDefault(), nt(be, b.value, !0);
          };
          f.addEventListener("pointerdown", O), f.addEventListener("mousedown", O);
        }
      }
    }), pn(() => {
      window.removeEventListener("resize", J);
    });
    const J = () => {
      const f = Ie(Z);
      f && (z.value = f.getBoundingClientRect().width);
    }, { arrowRight: V, arrowLeft: se, arrowDown: de, arrowUp: ae } = Vt(), { flowStep: X, updateFlowStep: te, childMount: ce, resetFlow: m } = Ba(l, a, F), k = Y(() => nl), $ = () => {
      const f = Ie(c);
      f && f.focus({ preventScroll: !0 });
    }, I = Y(() => {
      var f;
      return ((f = F.value) == null ? void 0 : f.getSidebarProps()) || {};
    }), q = () => {
      l.openOnTop && a("recalculate-position");
    }, g = Y(() => l.monthPicker || l.yearPicker ? vt(v, "monthYear") : vt(v, "shared")), i = Y(() => l.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), R = Y(() => ({
      dp__menu_disabled: l.disabled,
      dp__menu_readonly: l.readonly,
      "dp-menu-loading": l.loading
    })), j = Y(
      () => ({
        dp__menu: !0,
        dp__menu_index: !_.value.enabled,
        dp__relative: _.value.enabled,
        [l.menuClassName]: !!l.menuClassName
      })
    ), w = (f) => {
      nt(f, b.value, !0);
    }, d = () => {
      l.escClose && a("close-picker");
    }, S = (f) => {
      if (l.arrowNavigation) {
        if (f === "up")
          return ae();
        if (f === "down")
          return de();
        if (f === "left")
          return se();
        if (f === "right")
          return V();
      } else
        f === "left" || f === "up" ? H("handleArrow", "left", 0, f === "up") : H("handleArrow", "right", 0, f === "down");
    }, n = (f) => {
      h(f.shiftKey), !l.disableMonthYearSelect && f.code === "Tab" && f.target.classList.contains("dp__menu") && M.value.shiftKeyInMenu && (f.preventDefault(), nt(f, b.value, !0), a("close-picker"));
    }, s = () => {
      $(), a("time-picker-close");
    }, C = () => {
      var f;
      (f = F.value) == null || f.toggleTimePicker(!1, !1);
    }, ee = (f) => {
      var O;
      return f === "time" ? (O = F.value) == null ? void 0 : O.toggleTimePicker(!0, !1) : C();
    }, H = (f, ...O) => {
      var be, Ae;
      (be = F.value) != null && be[f] && ((Ae = F.value) == null || Ae[f](...O));
    }, we = () => {
      H("selectCurrentDate");
    }, pe = (f, O) => {
      H("presetDate", f, O);
    }, Me = () => {
      H("clearHoverDate");
    };
    return t({
      updateMonthYear: (f, O) => {
        H("updateMonthYear", f, O);
      },
      switchView: ee
    }), (f, O) => {
      var be, Ae, Ge;
      return U(), G("div", {
        id: f.uid ? `dp-menu-${f.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: c,
        tabindex: "0",
        role: "dialog",
        "aria-label": (be = f.ariaLabels) == null ? void 0 : be.menu,
        class: ke(j.value),
        onMouseleave: Me,
        onClick: w,
        onKeydown: [
          Pe(d, ["esc"]),
          O[15] || (O[15] = Pe(je((B) => S("left"), ["prevent"]), ["left"])),
          O[16] || (O[16] = Pe(je((B) => S("up"), ["prevent"]), ["up"])),
          O[17] || (O[17] = Pe(je((B) => S("down"), ["prevent"]), ["down"])),
          O[18] || (O[18] = Pe(je((B) => S("right"), ["prevent"]), ["right"])),
          n
        ]
      }, [
        (f.disabled || f.readonly) && E(_).enabled || f.loading ? (U(), G("div", {
          key: 0,
          class: ke(R.value)
        }, [
          f.loading ? (U(), G("div", ll, ul)) : le("", !0)
        ], 2)) : le("", !0),
        !E(_).enabled && !f.teleportCenter ? (U(), G("div", {
          key: 1,
          class: ke(i.value)
        }, null, 2)) : le("", !0),
        Se("div", {
          ref_key: "innerMenuRef",
          ref: Z,
          class: ke({
            dp__menu_content_wrapper: ((Ae = f.presetDates) == null ? void 0 : Ae.length) || !!f.$slots["left-sidebar"] || !!f.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((Ge = f.presetDates) == null ? void 0 : Ge.length) || !!f.$slots["left-sidebar"] || !!f.$slots["right-sidebar"]
          }),
          style: it({ "--dp-menu-width": `${z.value}px` })
        }, [
          f.$slots["left-sidebar"] ? (U(), G("div", ol, [
            me(f.$slots, "left-sidebar", We(Ue(I.value)))
          ])) : le("", !0),
          f.presetDates.length ? (U(), G("div", {
            key: 1,
            class: ke({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (U(!0), G(Re, null, $e(f.presetDates, (B, mt) => (U(), G(Re, { key: mt }, [
              B.slot ? me(f.$slots, B.slot, {
                key: 0,
                presetDate: pe,
                label: B.label,
                value: B.value
              }) : (U(), G("button", {
                key: 1,
                type: "button",
                style: it(B.style || {}),
                class: ke(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: je((Ee) => pe(B.value, B.noTz), ["prevent"]),
                onKeydown: [
                  Pe(je((Ee) => pe(B.value, B.noTz), ["prevent"]), ["enter"]),
                  Pe(je((Ee) => pe(B.value, B.noTz), ["prevent"]), ["space"])
                ]
              }, ot(B.label), 47, sl))
            ], 64))), 128))
          ], 2)) : le("", !0),
          Se("div", {
            ref_key: "calendarWrapperRef",
            ref: N,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (U(), Ct(gn(k.value), Ze({
              ref_key: "dynCmpRef",
              ref: F
            }, u.value, {
              "flow-step": E(X),
              onMount: E(ce),
              onUpdateFlowStep: E(te),
              onResetFlow: E(m),
              onFocusMenu: $,
              onSelectDate: O[0] || (O[0] = (B) => f.$emit("select-date")),
              onDateUpdate: O[1] || (O[1] = (B) => f.$emit("date-update", B)),
              onTooltipOpen: O[2] || (O[2] = (B) => f.$emit("tooltip-open", B)),
              onTooltipClose: O[3] || (O[3] = (B) => f.$emit("tooltip-close", B)),
              onAutoApply: O[4] || (O[4] = (B) => f.$emit("auto-apply", B)),
              onRangeStart: O[5] || (O[5] = (B) => f.$emit("range-start", B)),
              onRangeEnd: O[6] || (O[6] = (B) => f.$emit("range-end", B)),
              onInvalidFixedRange: O[7] || (O[7] = (B) => f.$emit("invalid-fixed-range", B)),
              onTimeUpdate: O[8] || (O[8] = (B) => f.$emit("time-update")),
              onAmPmChange: O[9] || (O[9] = (B) => f.$emit("am-pm-change", B)),
              onTimePickerOpen: O[10] || (O[10] = (B) => f.$emit("time-picker-open", B)),
              onTimePickerClose: s,
              onRecalculatePosition: q,
              onUpdateMonthYear: O[11] || (O[11] = (B) => f.$emit("update-month-year", B)),
              onAutoApplyInvalid: O[12] || (O[12] = (B) => f.$emit("auto-apply-invalid", B)),
              onInvalidDate: O[13] || (O[13] = (B) => f.$emit("invalid-date", B)),
              "onUpdate:internalModelValue": O[14] || (O[14] = (B) => f.$emit("update:internal-model-value", B))
            }), kt({ _: 2 }, [
              $e(g.value, (B, mt) => ({
                name: B,
                fn: xe((Ee) => [
                  me(f.$slots, B, We(Ue({ ...Ee })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          f.$slots["right-sidebar"] ? (U(), G("div", il, [
            me(f.$slots, "right-sidebar", We(Ue(I.value)))
          ])) : le("", !0),
          f.$slots["action-extra"] ? (U(), G("div", dl, [
            f.$slots["action-extra"] ? me(f.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: we
            }) : le("", !0)
          ])) : le("", !0)
        ], 6)
      ], 42, al);
    };
  }
}), cl = typeof window < "u" ? window : void 0, Ht = () => {
}, fl = (e) => _n() ? (Bn(e), !0) : !1, vl = (e, t, r, a) => {
  if (!e)
    return Ht;
  let l = Ht;
  const c = at(
    () => E(e),
    (p) => {
      l(), p && (p.addEventListener(t, r, a), l = () => {
        p.removeEventListener(t, r, a), l = Ht;
      });
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), l();
  };
  return fl(u), u;
}, ml = (e, t, r, a = {}) => {
  const { window: l = cl, event: c = "pointerdown" } = a;
  return l ? vl(l, c, (p) => {
    const h = Ie(e), M = Ie(t);
    !h || !M || h === p.target || p.composedPath().includes(h) || p.composedPath().includes(M) || r(p);
  }, { passive: !0 }) : void 0;
}, pl = /* @__PURE__ */ lt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Bt
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, l = e, c = Gt(), u = x(!1), p = $t(l, "modelValue"), h = $t(l, "timezone"), M = x(null), v = x(null), P = x(null), _ = x(!1), b = x(null), N = x(!1), z = x(!1), Z = x(!1), { setMenuFocused: A, setShiftKey: F } = Pn(), { clearArrowNav: J } = Vt(), { validateDate: V, isValidTime: se } = At(l), { defaultedTransitions: de, defaultedTextInput: ae, defaultedInline: X, defaultedConfig: te, defaultedRange: ce } = Oe(l), { menuTransition: m, showTransition: k } = Ca(de);
    Mt(() => {
      S(l.modelValue), Dt().then(() => {
        X.value.enabled || window == null || window.addEventListener("resize", Te);
      }), X.value.enabled && (u.value = !0), window == null || window.addEventListener("keyup", f), window == null || window.addEventListener("keydown", O);
    }), pn(() => {
      X.value.enabled || window == null || window.removeEventListener("resize", Te), window == null || window.removeEventListener("keyup", f), window == null || window.removeEventListener("keydown", O);
    });
    const $ = vt(c, "all", l.presetDates), I = vt(c, "input");
    at(
      [p, h],
      () => {
        S(p.value);
      },
      { deep: !0 }
    );
    const { openOnTop: q, menuStyle: g, xCorrect: i, setMenuPosition: R, shadowRender: j } = Ra({
      menuRef: M,
      menuRefInner: v,
      inputRef: P,
      pickerWrapperRef: b,
      inline: X,
      emit: a,
      props: l,
      slots: c
    }), {
      inputValue: w,
      internalModelValue: d,
      parseExternalModelValue: S,
      emitModelValue: n,
      formatInputValue: s,
      checkBeforeEmit: C
    } = Sa(a, l, _), ee = Y(
      () => ({
        dp__main: !0,
        dp__theme_dark: l.dark,
        dp__theme_light: !l.dark,
        dp__flex_display: X.value.enabled,
        "dp--flex-display-collapsed": Z.value,
        dp__flex_display_with_input: X.value.input
      })
    ), H = Y(() => l.dark ? "dp__theme_dark" : "dp__theme_light"), we = Y(() => ({
      to: typeof l.teleport == "boolean" ? "body" : l.teleport,
      disabled: !l.teleport || X.value.enabled
    })), pe = Y(() => ({ class: "dp__outer_menu_wrap" })), Me = Y(() => X.value.enabled && (l.timePicker || l.monthPicker || l.yearPicker || l.quarterPicker)), Te = () => {
      var W;
      u.value && R();
      const T = (W = v.value) == null ? void 0 : W.$el.getBoundingClientRect().width;
      Z.value = document.body.offsetWidth <= T;
    }, f = (T) => {
      T.key === "Tab" && !X.value.enabled && !l.teleport && te.value.tabOutClosesMenu && (b.value.contains(document.activeElement) || Ne()), z.value = T.shiftKey;
    }, O = (T) => {
      z.value = T.shiftKey;
    }, be = () => {
      !l.disabled && !l.readonly && (j(vn, l), R(!1), u.value = !0, u.value && a("open"), u.value || Ee(), S(l.modelValue));
    }, Ae = () => {
      var T;
      w.value = "", Ee(), (T = P.value) == null || T.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), te.value.closeOnClearValue && Ne();
    }, Ge = () => {
      const T = d.value;
      return !T || !Array.isArray(T) && V(T) ? !0 : Array.isArray(T) ? l.multiDates || T.length === 2 && V(T[0]) && V(T[1]) ? !0 : ce.value.partialRange && !l.timePicker ? V(T[0]) : !1 : !1;
    }, B = () => {
      C() && Ge() ? (n(), Ne()) : a("invalid-select", d.value);
    }, mt = () => {
      P.value && ae.value.enabled && P.value.setParsedDate(d.value);
    }, Ee = () => {
      ae.value.enabled || (d.value = null);
    }, Ne = () => {
      X.value.enabled || (u.value && (u.value = !1, i.value = !1, A(!1), F(!1), J(), a("closed"), w.value && S(p.value)), Ee(), a("blur"));
    }, en = (T, W, K = !1) => {
      if (!T) {
        d.value = null;
        return;
      }
      const ze = Array.isArray(T) ? !T.some((It) => !V(It)) : V(T), Fe = se(T);
      ze && Fe && (d.value = T, W && (N.value = K, B(), a("text-submit")));
    }, o = () => {
      l.autoApply && se(d.value) && n(), mt();
    }, y = () => u.value ? Ne() : be(), L = (T) => {
      d.value = T;
    }, Q = () => {
      ae.value.enabled && (_.value = !0, s()), a("focus");
    }, ue = () => {
      if (ae.value.enabled && (_.value = !1, S(l.modelValue), N.value)) {
        const T = Vn(b.value, z.value);
        T == null || T.focus();
      }
      a("blur");
    }, _e = (T) => {
      v.value && v.value.updateMonthYear(0, {
        month: rn(T.month),
        year: rn(T.year)
      });
    }, Je = (T) => {
      S(T ?? l.modelValue);
    }, rt = (T, W) => {
      var K;
      (K = v.value) == null || K.switchView(T, W);
    }, Xe = (T) => te.value.onClickOutside ? te.value.onClickOutside(T) : Ne();
    return ml(M, P, () => Xe(Ge)), t({
      closeMenu: Ne,
      selectDate: B,
      clearValue: Ae,
      openMenu: be,
      formatInputValue: s,
      // exposed for testing purposes
      updateInternalModelValue: L,
      // modify internal modelValue
      setMonthYear: _e,
      parseModel: Je,
      switchView: rt,
      toggleMenu: y
    }), (T, W) => (U(), G("div", {
      ref_key: "pickerWrapperRef",
      ref: b,
      class: ke(ee.value),
      "data-datepicker-instance": ""
    }, [
      ht(Fa, Ze({
        ref_key: "inputRef",
        ref: P,
        "input-value": E(w),
        "onUpdate:inputValue": W[0] || (W[0] = (K) => an(w) ? w.value = K : null),
        "is-menu-open": u.value
      }, T.$props, {
        onClear: Ae,
        onOpen: be,
        onSetInputDate: en,
        onSetEmptyDate: E(n),
        onSelectDate: B,
        onToggle: y,
        onClose: Ne,
        onFocus: Q,
        onBlur: ue,
        onRealBlur: W[1] || (W[1] = (K) => _.value = !1)
      }), kt({ _: 2 }, [
        $e(E(I), (K, ze) => ({
          name: K,
          fn: xe((Fe) => [
            me(T.$slots, K, We(Ue(Fe)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (U(), Ct(gn(T.teleport ? In : "div"), We(Ue(we.value)), {
        default: xe(() => [
          ht(mn, {
            name: E(m)(E(q)),
            css: E(k) && !E(X).enabled
          }, {
            default: xe(() => [
              u.value ? (U(), G("div", Ze({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: M
              }, pe.value, {
                class: { "dp--menu-wrapper": !E(X).enabled },
                style: E(X).enabled ? void 0 : E(g)
              }), [
                ht(vn, Ze({
                  ref_key: "dpMenuRef",
                  ref: v
                }, T.$props, {
                  "internal-model-value": E(d),
                  "onUpdate:internalModelValue": W[2] || (W[2] = (K) => an(d) ? d.value = K : null),
                  class: { [H.value]: !0, "dp--menu-wrapper": T.teleport },
                  "open-on-top": E(q),
                  "no-overlay-focus": Me.value,
                  collapse: Z.value,
                  onClosePicker: Ne,
                  onSelectDate: B,
                  onAutoApply: (K) => !0,
                  onTimeUpdate: o,
                  onFlowStep: W[3] || (W[3] = (K) => T.$emit("flow-step", K)),
                  onUpdateMonthYear: W[4] || (W[4] = (K) => T.$emit("update-month-year", K)),
                  onInvalidSelect: W[5] || (W[5] = (K) => T.$emit("invalid-select", E(d))),
                  onAutoApplyInvalid: W[6] || (W[6] = (K) => T.$emit("invalid-select", K)),
                  onInvalidFixedRange: W[7] || (W[7] = (K) => T.$emit("invalid-fixed-range", K)),
                  onRecalculatePosition: E(R),
                  onTooltipOpen: W[8] || (W[8] = (K) => T.$emit("tooltip-open", K)),
                  onTooltipClose: W[9] || (W[9] = (K) => T.$emit("tooltip-close", K)),
                  onTimePickerOpen: W[10] || (W[10] = (K) => T.$emit("time-picker-open", K)),
                  onTimePickerClose: W[11] || (W[11] = (K) => T.$emit("time-picker-close", K)),
                  onAmPmChange: W[12] || (W[12] = (K) => T.$emit("am-pm-change", K)),
                  onRangeStart: W[13] || (W[13] = (K) => T.$emit("range-start", K)),
                  onRangeEnd: W[14] || (W[14] = (K) => T.$emit("range-end", K)),
                  onDateUpdate: W[15] || (W[15] = (K) => T.$emit("date-update", K)),
                  onInvalidDate: W[16] || (W[16] = (K) => T.$emit("invalid-date", K))
                }), kt({ _: 2 }, [
                  $e(E($), (K, ze) => ({
                    name: K,
                    fn: xe((Fe) => [
                      me(T.$slots, K, We(Ue({ ...Fe })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : le("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Cn = /* @__PURE__ */ (() => {
  const e = pl;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(gl).forEach(([e, t]) => {
  e !== "default" && (Cn[e] = t);
});
export {
  Cn as default
};
