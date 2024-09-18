import { useState } from 'react';
import './calen.css'
import { FaArrowAltCircleLeft } from  "react-icons/fa";
import { FaArrowAltCircleRight  } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Calen = () => {
    const navigate=useNavigate()

    const[curmon,newmon]=useState(new Date())
    const[curyr,newyr]=useState(new Date())
    let days=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    const month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let monthinhead=month[curmon.getMonth()]
    const getdat=()=>{
        let getdates=[]
        let firstday=new Date(curyr.getFullYear(),curmon.getMonth(),1)
        let lastdat=new Date(curyr.getFullYear(),curmon.getMonth()+1,0)
        for(let id=0;id<firstday.getDay();id++){
            getdates.push(null)
        }
        for(let id=1;id<=lastdat.getDate();id++){
            getdates.push(new Date(curyr.getFullYear(),curmon.getMonth(),id))

        }
        return (getdates)
    }
    getdat()

    const changemon=(month)=>{
        let monnum=Number(month)
        newmon(new Date(curyr.getFullYear(),monnum,1))

    }
    const changeyr=(year)=>{
        let yearr=Number(year)
        newyr(new Date(yearr,curmon.getMonth(),1))
    }

    const prevmonth=()=>{
        newmon(new Date(curyr.getFullYear(),curmon.getMonth()-1,1))
    }
    const nextmonth=()=>{
        let newone=new Date(curyr.getFullYear(),curmon.getMonth()+1,1)
        newmon(newone)
        
    }

    const currentdate=(date1,date2)=>{
        return date1.getDate()===date2.getDate()&&date1.getMonth()===date2.getMonth()&&date1.getFullYear()===date2.getFullYear()
    }

    const homepage=()=>{
        navigate('/')
    };
  return (
    <div className={`calen`}>
        <div className='top'>
            <div className='top-cont'>
                <p className='top-yr'>{curyr.getFullYear()}</p>
                <p className='top-mon'>{monthinhead}</p>
            </div>
            
        </div>
        <div className='boxer'>
            <div className='input-cont'>
                <div className='inp'>
                    <button onClick={prevmonth}><FaArrowAltCircleLeft/></button>
                    <select value={curmon.getMonth()} onChange={(e)=>changemon(e.target.value,10)}>
                        {month.map((mon,index)=>
                        <option value={index} key={index}>{mon}</option>)}
                    </select>
                    <select value={curyr.getFullYear()} onChange={(e)=>changeyr(e.target.value,10)}>
                        {Array.from({length:12},(_,i)=>curyr.getFullYear()-5+i).map((indiyr)=>
                        <option  key={indiyr} value={indiyr}>{indiyr}</option>)}
                    </select>
                    <button onClick={nextmonth}><FaArrowAltCircleRight/></button>
                </div>
                
            </div>
            <div className='grid'>
                    <div className='dayshere'>
                        {days.map((day)=>
                            <p>{day}</p>)}
                    </div>
                    <div className='dateshere'>
                        {getdat().map((curday,indi)=>
                            <div key={indi} className={curday?(currentdate(curday,new Date())?'day current':'day'):"empty"}>{curday?curday.getDate():''}
                            </div>
                        )}

                    </div>
            </div>
        </div>
        <button onClick={homepage} className='back-btn'><RiArrowGoBackLine/></button>
    </div>
  )
}

export default Calen