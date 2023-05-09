import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarOptions from './cal/CalendarOptions';
import Year from './year/Year';
import { bilingualLanguages, kalendaRegions } from '../utils/data.util';
import { Region, SecondaryCalendar } from '../utils/types.util';
import { props } from '../descriptor/property';

export default function App(){

  const languages = [
    'English', 'French', 'German', 'Custom'
  ]

  
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [viewOptions, setOptions] = React.useState(false)
  const [customLanguage, setLanguage] = React.useState(false)
  const [currentLang, setCurrentLang] = React.useState(languages[0])
  const [region, setRegion] = React.useState(kalendaRegions[0].weekDays[0])
  const [activeCulture, setActiveCulture] = React.useState(kalendaRegions[0])
  const [isBilingual, setIsBilingual] = React.useState(false)
  const [swap, setSwap] = React.useState(false)
  const [secondaryCalendar, setSecondaryCalendar] = React.useState<SecondaryCalendar>({dayNames: [], monthNames: []})
  const [customKalendar, setCustomKalendar] = React.useState<SecondaryCalendar>({dayNames: [], monthNames: []})

  React.useEffect(() => {
    const tempSecondary = activeCulture
    const newSecondary = {
      dayNames: isBilingual && currentLang !== 'Custom' ? bilingualLanguages[currentLang.toLowerCase() || languages[0].toLowerCase()].dayNames : [],
      monthNames: isBilingual && currentLang !== 'Custom' ? bilingualLanguages[currentLang.toLowerCase() || languages[0].toLowerCase()].monthNames : []
    }

    if(customKalendar.dayNames.length > 0 && customKalendar.monthNames.length > 0){
      newSecondary.dayNames = customKalendar.dayNames
      newSecondary.monthNames = customKalendar.monthNames
    }


    const some = isBilingual && (swap && {dayNames: tempSecondary.weekDays, monthNames: tempSecondary.monthNames} )

    if(some){
      setSecondaryCalendar((prev) => {
        return some
      })
      setActiveCulture((prevCulture: Region) => {
        return {
          region: prevCulture.region,
          calOrigin: prevCulture.calOrigin,
          weekDays: newSecondary.dayNames,
          monthNames: newSecondary.monthNames
        }
      })
    }
    else {
      setSecondaryCalendar((prev) => {
        return newSecondary
      })
    }
  }, [isBilingual, currentLang, swap, customKalendar])

  return (
    <>
      <Routes>
        <Route path='/' element={<CalendarOptions 
          year={year} 
          setYear={setYear}
          viewOptions={viewOptions}
          setOptions={setOptions}
          customLanguage={customLanguage}
          setLanguage={setLanguage}
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          region={region}
          setRegion={setRegion}
          activeCulture={activeCulture}
          setActiveCulture={setActiveCulture}
          isBilingual={isBilingual}
          setIsBilingual={setIsBilingual}
          swap={swap}
          setSwap={setSwap}
          secondaryCalendar={secondaryCalendar}
          setSecondaryCalendar={setSecondaryCalendar}
          customKalendar={customKalendar}
          setCustomKalendar={setCustomKalendar}
          />}/>
        <Route path='/calendar' 
          element={<Year 
            year={year} 
            setYear={setYear}
            region={region}
            activeCulture={activeCulture}
            isBilingual={isBilingual}
            language={currentLang}
            secondaryCalendar={secondaryCalendar}
            setSecondaryCalendar={setSecondaryCalendar}
            />}
          />
      </Routes>
    </>
  )
}