import React from 'react'
import "./First.css"
const first = () => {
  return (
    <section>
         <div className="title">PICKN YOUR SLOT</div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo dolores velit dicta ipsum nisi asperiores, nam cumque voluptas eveniet ad maiores at nihil? Animi iste excepturi culpa sed dolores!</p>
    <form action="#">
<div className="container">
    <div className="user-details">
        <div className="input-box">
            <span className="details">Date</span>
            <input type="date" placeholder="Enter date" required/>
        </div>
        <div class="input-box">
            <span className="details">time</span>
            <input type="time" placeholder="Enter time" required/>
        </div>
        
      
        
</div>
        </div>
    </form>
    <div className="buttons">
        <button>view all therapist</button>
        <button>call us</button>
        <button>call us</button>
    </div>
    </section>
  )
}

export default first
