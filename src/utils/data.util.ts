//@ts-nocheck

import { Region } from "./types.util"

export const MONTH_SHORTS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
]




export const kalendaRegions: Region[] = [
  {
    region: 'mmuock',
    weekDays: Kalenda.DAYNAMES.mmuock,
    monthNames: Kalenda.MONTHNAMES.mmuock,
  },
  {
    region: 'mmockmbie',
    weekDays: Kalenda.DAYNAMES.mmockmbie,    
    monthNames: Kalenda.MONTHNAMES.mmockmbie,
  },
  {
    region: 'bangwa',
    weekDays: Kalenda.DAYNAMES.bangwa,    
    monthNames: Kalenda.MONTHNAMES.bangwa,
  },
  {
    region: 'nkwen',
    weekDays: Kalenda.DAYNAMES.nkwen,    
    monthNames: Kalenda.MONTHNAMES.nkwen,
  },
  {
    region: 'en',
    weekDays: Kalenda.DAYNAMES.en,    
    monthNames: Kalenda.MONTHNAMES.en,
  },
  {
    region: 'fr',
    weekDays: Kalenda.DAYNAMES.fr,    
    monthNames: Kalenda.MONTHNAMES.fr,
  },
  {
    region: 'de',
    weekDays: Kalenda.DAYNAMES.de,    
    monthNames: Kalenda.MONTHNAMES.de,
  },
  {
    region: 'hausa',
    weekDays: Kalenda.DAYNAMES.hausa,    
    monthNames: Kalenda.MONTHNAMES.hausa,
  },{
    region: 'fula',
    weekDays: Kalenda.DAYNAMES.fula,    
    monthNames: Kalenda.MONTHNAMES.fula,
  },
  {
    region: 'igbo',
    weekDays: Kalenda.DAYNAMES.igbo,    
    monthNames: Kalenda.MONTHNAMES.igbo,
  }
]
