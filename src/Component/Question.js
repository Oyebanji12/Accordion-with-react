import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"



const Question = ({title, info}) => {
    const [showInfo, setShowInfo]= useState(false)
  return (
    <div>
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={()=> setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p> }
        </article>


    </div>
  )
}

export default Question










































// const Question = () => {
//     const [questions, setQuestion]= useState(data)
//     const [showInfo, setShowInfo]= useState(false)
//     console.log(data)

//     const toggleButtonClick=()=>{
//         setShowInfo(!showInfo)
//     }


//   return (
//     <div>
//         <h2>question and answer</h2>
//         <div>
//             {questions.map((question)=>{
//                 return(
//                 <div key={question.index}>
//                   <p>{question.title}</p>  
//                   <button onClick={toggleButtonClick}>
//                     {showInfo ?  <AiOutlineMinus /> : <AiOutlinePlus />}
//                   </button>
//                   {showInfo && question.info}
//                   <div>
                    
                    
//                   </div>
//                 </div>
//                 )
//             })}
//         </div>

//     </div>
//   )
// }

// export default Question