
import Question from "./Component/Question";
import data from "./Component/data"
import { useState } from "react";



function App() {
  const [questions, setQuestions]= useState(data)
  console.log(data)
  return (
    <div>
     <main>
     <h3>Question and answer about login</h3>
      <div className="container">
        
        <section className="info">
          {questions.map((question, i)=>{
            return(
              <Question key={i} {...question} />

            )
          })}

        </section>

      </div>
     </main>
    </div>
  );
}

export default App;
