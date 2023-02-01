import React from 'react'
import "./Fifth.css"
const Fifth = () => {
  return (
    <section>
        <div className="title">PICKN YOUR SLOT</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo dolores velit dicta ipsum nisi asperiores, nam cumque voluptas eveniet ad maiores at nihil? Animi iste excepturi culpa sed dolores!</p>
        <form action="#">
    <div className="container">
        <div className="user-details">
            <div className="input-box">
                <span className="details">Educational</span>
                <input type="text" placeholder="Enter eduction" required/>
            </div>
            <div className="input-box">
                <span className="details">Occupation</span>
                <input type="text" placeholder="Enter Occupation" required/>
            </div>
            <div class="input-box">
                <span className="details">City</span>
                <input type="text" placeholder="select city" required/>
            </div>
            <div class="input-box">
                <span className="details">Pincode</span>
                <input type="text" placeholder="select city" required/>
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

export default Fifth
