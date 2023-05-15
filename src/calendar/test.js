#!/usr/bin/env node
/*
 * Test of the Kalenda class
 * Tano Fotang, Wed Dec 14 09:42:55 PM WAT 2022
 *
 * Run as: ./test.js [<month>|<month> <year>]
 * */

import { readFileSync } from "fs";
import { runInThisContext } from 'vm';
var content = readFileSync("./kalenda-min.js")
runInThisContext(content)


try{
    /* Create a calendar model.
       Some calendars are predefined:
        - Kalenda.MMUOCK
        - Kalenda.NKWEN
        - Kalenda.BANGWA
        - Kalenda.IGBO
        - Kalenda.WESTERN (mainstream western calendars, Hausa, Fula)

       Note: calendars include only month days; they do not include day names
       or month names.
     * */
    var mmuock=new Kalenda(Kalenda.MMUOCK);
    
    let month=12;
    let year=2022;
    const arg = process.argv.slice(2);
    if(2===arg.length){
        month=parseInt(arg[0]);
        if(month != arg[0])
            throw 'Invalid value for month';
        year=parseInt(arg[1]);
        if(year != arg[1])
            throw 'Invalid value for year';
    }else if(1===arg.length){
        month=parseInt(arg[0]);
        if(month != arg[0])
            throw 'Invalid value for month';
    }

    /* generate a calendar for a given month. true means to pad the week using days
     * from surrounding months; such days will be negative. */
    let dec2022=mmuock.cal(month,year,true);

    /* Get the table of the calendar's month days: dec2022.cal.
       At the start and end of the table, days might be negative;
       negative days belong to the preceding month (if at
       start of the table), or to the next month (if at the end of the table).
       E.g., dec2022.cal for Dec 2022:
    ┌─────┬─────┬─────┬─────┬─────┬─────┬────┬────┐
    │ -25 │ -26 │ -27 │ -28 │ -29 │ -30 │ 1  │ 2  │
    │  3  │  4  │  5  │  6  │  7  │  8  │ 9  │ 10 │
    │ 11  │ 12  │ 13  │ 14  │ 15  │ 16  │ 17 │ 18 │
    │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25 │ 26 │
    │ 27  │ 28  │ 29  │ 30  │ 31  │ -1  │ -2 │ -3 │
    └─────┴─────┴─────┴─────┴─────┴─────┴────┴────┘
     The leading negative numbers represent November 25th thro 30th (2022), while
     the terminating negative numbers represent January 1st thro 3rd (2023).
    */

        dec2022tab=dec2022.cal;

    /* If you plan on modifying dec2022tab, set memoise to false. Then, dec2022.cal
       will be re-calculated everytime it is accessed. That is obviously slower.
        dec2022.memoise=false

       Alternatively, use a copy:
        dec2022tab=structuredClone(dec2022.cal)
     */

        /* For illustration, let's put the days that don't belong to the month,
           in square brackets:
        dec2022tab=dec2022tab.map(row=>row.map(day=>day<0?'['+(-1*day)+']':day));
        */
        console.table(dec2022tab);

    /* Assign day names for the calendar.
       Some names are pre-defined:
        - Kalenda.DAYNAMES.mmuock
        - Kalenda.DAYNAMES.mmockmbie
        - Kalenda.DAYNAMES.bangwa
        - Kalenda.DAYNAMES.nkwen
  console.table(secondaryDayNames, secondaryDayNames)
        - Kalenda.DAYNAMES.en
        - Kalenda.DAYNAMES.fr
        - Kalenda.DAYNAMES.de
        - Kalenda.DAYNAMES.hausa
        - Kalenda.DAYNAMES.fula
        - Kalenda.DAYNAMES.igbo
     * */
        let daynames=Kalenda.DAYNAMES.mmuock; // array of day names
        if(daynames.length !== dec2022.numwkdays)
            throw "Invalid number of day names";
    /* set day names in upper case */
        daynames=daynames.map(n=>n.toUpperCase());
    /* display calendar + day names, on the console. this modifies dec2022tab. */
        dec2022tab=structuredClone(dec2022.cal); // use a copy of the month calendar
        dec2022tab.unshift([...daynames]); // prepend row of day names
        console.table(dec2022tab);

    console.log('All done.');

    /* Add a second language to the month calendar. Use a western calendar.  */
        dec2022.bilingual(Kalenda.WESTERN);
    /* property cal2 is a table of the month days but using the week days  of the
       secondary language. cal2 is similar to dec2022.cal except that its values
       are in the range of 1 and number of days in secondary language.
     */
        console.table(dec2022.cal2);

    /* display bilingual calendar on the console */
        let daynames2=Kalenda.DAYNAMES.en;
        if(daynames2.length !== dec2022.numwkdays2)
            throw "Invalid number of day names";
        daynames2=daynames2.map(name=>name.substring(0,2)); //use only 2 characters

        let v=dec2022.cal.map((row,idx)=>row.map((d, idx2)=>(d<1 || d===null)?
                d:
                d+' ('+daynames2[dec2022.cal2[idx][idx2]]+')'));
        v.unshift([...daynames]); // prepend row of day names
        console.table(v);
    /*
┌───────────┬────────────┬───────────┬─────────────┬────────────┬─────────────┬───────────┬───────────┐
│ 'NGANGÀ'  │ 'MBEQGNÚÁ' │ 'MBEQLĚQ' │ 'NJŒÊNGONG' │ 'MBEQŃKŒÓ' │ 'NJŒÊLEKŒR̄' │  "FA'À"   │ 'TÉLǍNG'  │
│    -25    │    -26     │    -27    │     -28     │    -29     │     -30     │    -31    │ '1 (Tu)'  │
│ '2 (We)'  │ '14 (Th)'  │ '15 (Fr)' │  '16 (Sa)'  │ '17 (Su)'  │  '18 (Mo)'  │ '19 (Tu)' │ '20 (We)' │
│ '21 (Th)' │ '22 (Fr)'  │ '23 (Sa)' │  '24 (Su)'  │ '25 (Mo)'  │  '26 (Tu)'  │ '27 (We)' │ '28 (Th)' │
│ '29 (Fr)' │ '30 (Sa)'  │    -1     │     -2      │     -3     │     -4      │    -5     │    -6     │
└───────────┴────────────┴───────────┴─────────────┴────────────┴─────────────┴───────────┴───────────┘
   */
       monthname=Kalenda.MONTHNAMES.mmuock[month-1];
       console.log(monthname);

}
catch(ex){
        console.error(`Error: ${ex}`);
}

