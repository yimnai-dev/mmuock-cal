import { CulturalCalendar } from "./types.util"

export const MMUOCK_LETEH_WEEK_DAYS = [
  'Ngangà',
  'Mbeqgnúá',
  'Mbeqlěq',
  'Njœêngong',
  'Mbeqńkœó',
  'Njœêlekœr̄',
  "Fa'à",
  'Télǎng',
]

export const NKWEN_WEEK_DAYS = [
  'Lahadi',
  'Litinin',
  'Talata',
  'Laraba',
  'Alhamis',
  `Juma'a`,
  'Asabar'
]

const weekDayMinMmuock = [
  'Ngang',
  'Mbeq',
  'Mbeql',
  'Njœ',
  'Mbeqń',
  'Njœ',
  'Fa',
  'Te',
]

const weekDayMinNkwen = [
  'Lah',
  'Lit',
  'Tal',
  'Lar',
  'Alh',
  'Jum',
  'Asa',
]

const weekDayMinBangwa = [
  'Ek', 'Or', 'Af', 'Nk'
]

export const BANGWA_WEEK_DAYS = [
  'Eke', 'Orie', 'Afo', 'Nkwo'
]

export const TEMP_MONTH_SHORTS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const MMUOCK_LETEH_MONTH_DAYS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]


export const ENGLISH_WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export const CULTURAL_CALENDAR_INFO: CulturalCalendar[] = [
  { region: 'mmuock',
    weekDays: MMUOCK_LETEH_WEEK_DAYS,
    monthNames: MMUOCK_LETEH_MONTH_DAYS,
    monthShorts: TEMP_MONTH_SHORTS,
    weekDaysMin: weekDayMinMmuock
  },
  { region: 'nkwen',
    weekDays: NKWEN_WEEK_DAYS,
    monthNames: MMUOCK_LETEH_MONTH_DAYS,
    monthShorts: TEMP_MONTH_SHORTS,
    weekDaysMin: weekDayMinNkwen
  },
  { region: 'bangwa',
      weekDays: BANGWA_WEEK_DAYS,
      monthNames: MMUOCK_LETEH_MONTH_DAYS,
      monthShorts: TEMP_MONTH_SHORTS,
      weekDaysMin: weekDayMinBangwa
  },
]