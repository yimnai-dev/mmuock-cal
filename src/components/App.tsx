import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarOptions from './cal/CalendarOptions';
import Year from './year/Year';
import { LANGUAGES, bilingualLanguages, kalendaRegions, regions } from '../utils/data.util';
import { KalendaOptions } from '../utils/types.util';

export default function App(){

  
  const [kalendaOptions, setKalendaOptions] = React.useState<KalendaOptions>({
    year: new Date().getFullYear(),
    viewOptions: false,
    customLanguage: false,
    currentLang: LANGUAGES[0],
    region: regions[0],
    activeCulture: kalendaRegions[0],
    isBilingual: false,
    swap: false,
    secondaryCalendar: {dayNames: [], monthNames: []},
    customKalendar: {dayNames: [], monthNames: []} 
  })

  React.useEffect(() => {
    const tempSecondary = kalendaOptions.activeCulture
    const newSecondary = {
      dayNames: kalendaOptions.isBilingual && kalendaOptions.currentLang !== 'Custom' ? bilingualLanguages[kalendaOptions.currentLang.toLowerCase() || LANGUAGES[0].toLowerCase()].dayNames : [],
      monthNames: kalendaOptions.isBilingual && kalendaOptions.currentLang !== 'Custom' ? bilingualLanguages[kalendaOptions.currentLang.toLowerCase() || LANGUAGES[0].toLowerCase()].monthNames : []
    }

    if(kalendaOptions.customLanguage && (kalendaOptions.customKalendar.dayNames.length > 0 && kalendaOptions.customKalendar.monthNames.length > 0)){
      newSecondary.dayNames = kalendaOptions.customKalendar.dayNames
      newSecondary.monthNames = kalendaOptions.customKalendar.monthNames
    }
    if(kalendaOptions.isBilingual && kalendaOptions.swap){
      setKalendaOptions((prev) => {
        return {
          ...prev,
          activeCulture: {
            weekDays: newSecondary.dayNames,
            monthNames: kalendaRegions.find(r => r.region.toLowerCase().includes(kalendaOptions.region.toLowerCase()))?.monthNames as string[],
            calOrigin: kalendaRegions.find(r => r.region.toLowerCase().includes(kalendaOptions.region.toLowerCase()))?.calOrigin,
            region: kalendaRegions.find(r => r.region.toLowerCase().includes(kalendaOptions.region.toLowerCase()))?.region as string
          },
          secondaryCalendar: {
            dayNames: tempSecondary.weekDays,
            monthNames: tempSecondary.monthNames
          }
        }
      })
    }
    if(kalendaOptions.isBilingual && !kalendaOptions.swap){
      setKalendaOptions((prev) => {
        return {
          ...prev,
          secondaryCalendar: {
            dayNames: newSecondary.dayNames,
            monthNames: newSecondary.monthNames,
          }
        }
      })
    }
    // const some = kalendaOptions.isBilingual && (kalendaOptions.swap && {dayNames: tempSecondary.weekDays, monthNames: tempSecondary.monthNames} )

    // if(some){
    //   setKalendaOptions(prevKalendaOptions => {
    //     return {
    //       ...prevKalendaOptions,
    //       activeCulture: {
    //         ...prevKalendaOptions.activeCulture,
    //         weekDays: newSecondary.dayNames,
    //         monthNames: newSecondary.monthNames
    //       },
    //       secondaryCalendar: some
    //     }
    //   })
    // }
    // else {
    //   setKalendaOptions((prev) => {
    //     return {
    //       ...prev,
    //       secondaryCalendar: newSecondary
    //     }
    //   })
    // }
  }, [kalendaOptions.isBilingual, kalendaOptions.currentLang, kalendaOptions.swap, kalendaOptions.customKalendar])

  return (
    <>
      <Routes>
        <Route path='/' element={<CalendarOptions 
          kalendaOptions={kalendaOptions}
          setKalendaOptions={setKalendaOptions}
          />}/>
        <Route path='/calendar' 
          element={<Year 
            kalendaOptions={kalendaOptions}
            setKalendaOptions={setKalendaOptions}
            />}
          />
      </Routes>
    </>
  )
}