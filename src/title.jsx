import './title.css'
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Title = () => {
    

    let curdate=new Date();
    const navigate=useNavigate()
  const calenderpage=()=>{
      navigate('/calender')
  };
  return (
    <div className='home'>
        <div className="title">
            <div className='tit-con'>
                <h1>Calendar</h1>
                <p>Monthly Calender <span>{`${curdate.getDate()}-${curdate.getMonth()+1}-${curdate.getFullYear()}`}</span></p>
            </div>
            <div className='btn'>
                <button onClick={calenderpage}><FaArrowRightToBracket/></button>
            </div>
        </div>
    </div>
    
  )
}

export default Title