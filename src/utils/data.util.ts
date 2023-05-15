//@ts-nocheck

import { Region } from "./types.util"

export const LANGUAGES = [
  'English', 'French', 'German', 'Custom'
]

export const MONTH_SHORTS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]

export const regions = ['Mmuock (upper)', 'Mmuock (Mmockmbie)', 'Nkwen', 'Bangwa', 'Custom']


export const kalendaRegions: Region[] = [
  {
    region: 'Mmuock (upper)',
    weekDays: Kalenda.DAYNAMES.mmuock,
    monthNames: Kalenda.MONTHNAMES.mmuock,
    calOrigin: Kalenda.MMUOCK,
  },
  {
    region: 'Mmuock (Mmockmbie)',
    weekDays: Kalenda.DAYNAMES.mmockmbie,    
    monthNames: Kalenda.MONTHNAMES.mmockmbie ? Kalenda.MONTHNAMES.mmockmbie : MONTH_NAMES,
    calOrigin: Kalenda.MMOCKMBIE || Kalenda.MMUOCK,
  },
  {
    region: 'bangwa',
    weekDays: Kalenda.DAYNAMES.bangwa,    
    monthNames: Kalenda.MONTHNAMES.bangwa,
    calOrigin: Kalenda.BANGWA
  },
  {
    region: 'nkwen',
    weekDays: Kalenda.DAYNAMES.nkwen,    
    monthNames: Kalenda.MONTHNAMES.nkwen,
    calOrigin: Kalenda.NKWEN
  },
  {
    region: 'en',
    weekDays: Kalenda.DAYNAMES.en,    
    monthNames: Kalenda.MONTHNAMES.en,
    calOrigin: Kalenda.EN
  },
  {
    region: 'fr',
    weekDays: Kalenda.DAYNAMES.fr,    
    monthNames: Kalenda.MONTHNAMES.fr,
    calOrigin: Kalenda.FR
  },
  {
    region: 'de',
    weekDays: Kalenda.DAYNAMES.de,    
    monthNames: Kalenda.MONTHNAMES.de,
    calOrigin: Kalenda.DE
  },
  {
    region: 'hausa',
    weekDays: Kalenda.DAYNAMES.hausa,    
    monthNames: Kalenda.MONTHNAMES.hausa,
    calOrigin: Kalenda.HAUSA
  },{
    region: 'fula',
    weekDays: Kalenda.DAYNAMES.fula,    
    monthNames: Kalenda.MONTHNAMES.fula,
    calOrigin: Kalenda.FULA
  },
  {
    region: 'igbo',
    weekDays: Kalenda.DAYNAMES.igbo,    
    monthNames: Kalenda.MONTHNAMES.igbo,
    calOrigin: Kalenda.IGBO
  }
]

export const bilingualLanguages: { [key: string]: { dayNames: string[], monthNames: string[] } } = {
    english: {
      dayNames: Kalenda.DAYNAMES.en,
      monthNames: Kalenda.MONTHNAMES.en
    },
    french: {
      dayNames: Kalenda.DAYNAMES.fr,
      monthNames: Kalenda.MONTHNAMES.fr
    },
    german: {
      dayNames: Kalenda.DAYNAMES.de,
      monthNames: Kalenda.MONTHNAMES.de
    }
}

