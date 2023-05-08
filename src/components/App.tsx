import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarOptions from './cal/CalendarOptions';
import Year from './year/Year';
import { kalendaRegions } from '../utils/data.util';

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
  // const [bilingual]

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
          />}/>
        <Route path='/calendar' element={<Year isBilingual={isBilingual} language={currentLang} year={year} region={region} setYear={setYear} activeCulture={activeCulture}/>} />
      </Routes>
    </>
  )
}