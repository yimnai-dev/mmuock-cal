import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarOptions from './cal/CalendarOptions';
import Year from './year/Year';
import { bilingualLanguages, kalendaRegions } from '../utils/data.util';
import { KalendaOptions, Region, SecondaryCalendar } from '../utils/types.util';

export default function App(){

  const languages = [
    'English', 'French', 'German', 'Custom'
  ]
  
  const [kalendaOptions, setKalendaOptions] = React.useState<KalendaOptions>({
    year: new Date().getFullYear(),
    viewOptions: false,
    customLanguage: false,
    currentLang: languages[0],
    region: kalendaRegions[0].weekDays[0],
    activeCulture: kalendaRegions[0],
    isBilingual: false,
    swap: false,
    secondaryCalendar: {dayNames: [], monthNames: []},
    customKalendar: {dayNames: [], monthNames: []} 
  })

  React.useEffect(() => {
    const tempSecondary = kalendaOptions.activeCulture
    const newSecondary = {
      dayNames: kalendaOptions.isBilingual && kalendaOptions.currentLang !== 'Custom' ? bilingualLanguages[kalendaOptions.currentLang.toLowerCase() || languages[0].toLowerCase()].dayNames : [],
      monthNames: kalendaOptions.isBilingual && kalendaOptions.currentLang !== 'Custom' ? bilingualLanguages[kalendaOptions.currentLang.toLowerCase() || languages[0].toLowerCase()].monthNames : []
    }

    if(kalendaOptions.customLanguage && (kalendaOptions.customKalendar.dayNames.length > 0 && kalendaOptions.customKalendar.monthNames.length > 0)){
      newSecondary.dayNames = kalendaOptions.customKalendar.dayNames
      newSecondary.monthNames = kalendaOptions.customKalendar.monthNames
    }


    const some = kalendaOptions.isBilingual && (kalendaOptions.swap && {dayNames: tempSecondary.weekDays, monthNames: tempSecondary.monthNames} )

    if(some){
      setKalendaOptions(prevKalendaOptions => {
        return {
          ...prevKalendaOptions,
          activeCulture: {
            region: prevKalendaOptions.activeCulture.region,
            calOrigin: prevKalendaOptions.activeCulture.calOrigin,
            weekDays: newSecondary.dayNames,
            monthNames: newSecondary.monthNames
          },
          secondaryCalendar: some
        }
      })
    }
    else {
      setKalendaOptions((prev) => {
        return {
          ...prev,
          secondaryCalendar: newSecondary
        }
      })
    }
    // console.table({ primaryKalenda: kalendaOptions.activeCulture, secondaryKalenda: kalendaOptions.secondaryCalendar })
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