import React from 'react';
import { useNavigate } from 'react-router-dom';
import { kalendaRegions } from '../../utils/data.util';
import { useCustomLocale } from '../../utils/locale.util';
import moment from 'moment';
import useSWR from 'swr';

export default function CalendarOptions(props: {
    year: number, 
    setYear: React.Dispatch<React.SetStateAction<number>>,
    viewOptions: boolean,
    setOptions: React.Dispatch<React.SetStateAction<boolean>>,
    customLanguage: boolean,
    setLanguage: React.Dispatch<React.SetStateAction<boolean>>,
    currentLang: string,
    setCurrentLang: React.Dispatch<React.SetStateAction<string>>,
    region: string,
    setRegion: React.Dispatch<React.SetStateAction<string>>,
    activeCulture: any,
    setActiveCulture: React.Dispatch<React.SetStateAction<any>>
}){

  const languages = [
    'English', 'French', 'German', 'Custom'
  ]

  const myCustomLocale = useCustomLocale({region: props.region, activeCulture: props.activeCulture})
  myCustomLocale.locale('custom')


  const navigate = useNavigate();

  const date = new Date()

  function viewCalendar(){
    navigate('/calendar')
  }

  function onYearChange(event: any){
    props.setYear(parseInt(event.target.value))

  }

  function displayOptions(){
    props.setOptions(!props.viewOptions)
  }
  function setCustomLang(){
    props.setLanguage(!props.customLanguage)
  }

  function onLangChange(e: any){
    props.setCurrentLang(e.target.value)
  }

  return (
    <section className='w-screen min-h-screen bg-hero bg-center'>
      <div className="container mx-auto">
      <div className="">
        <div className="py-3 block">
          <h1 className='text-5xl font-semibold'>Calendar Generator</h1>
        </div>
        <div className='w-full space-x-3 space-y-3'>
          <select className='inline-block border-2 border-solid border-black' onChange={event => {
            props.setRegion(event.target.value)
            const region = kalendaRegions.find(result => event.target.value.toLowerCase() === result.region.toLowerCase())
            //@ts-ignore
            //@ts-ignore
            props.setActiveCulture(region)
          }}>
            {kalendaRegions.map(region => (
              <option key={region.region} value={region.region}>{region.region}</option>
            ))}
          </select>
          <div className='inline-block'>
            <label htmlFor="year">Year:</label>
            <input type="number" id='year' value={props.year} onChange={onYearChange} />
          </div>
          <input type="button" value={'Show Calendar'} onClick={viewCalendar} className='text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white'/>
        </div>
        <div className="options--opener">
        <button onClick={displayOptions} className='text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white'>Display Options</button>
        {
          props.viewOptions && 
      <div className='w-full'>
        <div className="w-full space-x-5 space-y-3">
          <span className='inline-block'>
            <input type="checkbox" id='bilingual'/>
            <label htmlFor="bilingual">Bilingual</label>
          </span>
          <span className='inline-block'>
            <select onChange={onLangChange}>
                {languages.map(language => (
                  <option key={language}>{language}</option>
                ))}
            </select>
          </span>
          <span className='inline-block'>
            <input type="checkbox" id='swap'/>
            <label htmlFor="swap">Swap</label>
          </span>
      </div>
      <div className="w-full mx-auto">
        <div className='mw-full md:w-[22%] flex items-center justify-between py-3'>
          <span className='inline-block'>Columns:</span>
          <input type="number" className='inline-block'/>
        </div>
      </div>
      <div className="opt">
        <div className='mw-full md:w-[22%] flex items-center justify-between py-3'>
          <span className='inline-block'>Length:</span>
          <input className='inline-block' type="number" />
        </div>
      </div>
      <div className="opt">
        <div className='mw-full md:w-[22%] flex items-center justify-between py-3'>
          <span></span>
          <input type="number" />
        </div>
      </div>
      <div className="w-full space-x-3 space-y-3">
        <span className='inline-block'>
          <input type="checkbox" id='julian'/>
          <label htmlFor="julian">Julian</label>
        </span>
        <span className='inline-block'>
          <input type="checkbox" id='html' checked disabled />
          <label htmlFor="html">HTML</label>
        </span>
      </div>
    
    </div>
        }
        <div className='custom-opener'>
        {props.currentLang.toLowerCase() === 'custom' && 
          <button onClick={setCustomLang} className='text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white'>Custom Language</button>
        }
        {props.customLanguage && 
        <div className="custom">
        <h1 className='font-bold'>Day and month names</h1>
        <span className='italic text-sm'>Blank lines and comments are ignored; comments are those lines which commence with a semicolon (;).</span>
        <table>
          <tbody>
            <tr className='bg-gray-300 italic text-sm text-center'>
              <td>First Language</td>
              <td>Second Language</td>
              <td>12 month names</td>
            </tr>
            <tr className=''>
              <td>
                <div className='h-72 bg-white border-solid border-2 border-gray-300' contentEditable={true}></div>
              </td>
              <td>
                <div className='h-72 border-2 border-solid border-gray-300 bg-white' contentEditable={true}>
                  Sunday<br/>
                  Monday<br/>
                  Tuesday<br/>
                  Wednesday<br/>
                  Thursday<br/>
                  Friday<br/>
                  Saturday<br/>
                </div>
              </td>
              <td>
                <div contentEditable={true} className='border-2 border-solid border-gray bg-white h-72'>
                  January<br/>
                  February<br/>
                  March<br/>
                  April<br/>
                  May<br/>
                  June<br/>
                  July<br/>
                  September<br/>
                  October<br/>
                  November<br/>
                  December<br/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button>Reference dates</button><br/>
        <button className='text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white' onClick={viewCalendar}>show Calendar</button>
        <div className='space-x-3 space-y-3'>
        <div className='inline-block'>
          <label htmlFor="date">First:</label>
          <input type="date"/>
        </div>
        <div className='inline-block'>
          <label>Day 6: </label>
          <input type="number" />
        </div>
        <div className='inline-block'>
          <input type="checkbox" />
          <label>Apply</label>
        </div>
        </div>
        <div className='space-x-3 space-y-3'>
        <div className='inline-block'>
          <label htmlFor="date">Second:</label>
          <input type="date"/>
        </div>
        <div className='inline-block'>
          <label>Day: </label>
          <input type="number" />
        </div>
        <div className='inline-block'>
          <input type="checkbox" />
          <label>Apply</label>
        </div>
        </div>
        <button className='text-purple-800 bg-white rounded-md shadow-lg py-2 px-3 hover:bg-purple-800 hover:text-white' onClick={viewCalendar}>show Calendar</button>
      </div>
        }
      </div>
      </div>
      </div>
      <p className='border-solid border-b-2 border-b-gray-500 pb-6 my-6'>Copyright (©) 1998-{new Date().getFullYear()}</p>
    </div>
    </section>
  )
}