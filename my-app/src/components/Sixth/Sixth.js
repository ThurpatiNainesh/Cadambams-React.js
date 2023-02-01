import React from 'react'
import "./Sixth.css"
const Sixth = () => {
  return (
    <section>
       <div className="title">PICKN YOUR SLOT</div>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo dolores velit dicta ipsum nisi asperiores, nam cumque voluptas eveniet ad maiores at nihil? Animi iste excepturi culpa sed dolores!</p>
    <form action="#">
<div className="container">
    <div className="user-details">
        <div className="input-box">
            <span className="details">Address Line 1</span>
            <input type="text" placeholder="Enter eduction" required/>
        </div>
        <div class="input-box">
            <span className="details">Address Line 1</span>
            <input type="address" placeholder="Enter Address" required/>
        </div>
        <div class="input-box">
            <span className="details">Pincode</span>
            <input type="text" placeholder="select city" required/>
        </div>
        <button className="submit">Submit</button>
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

export default Sixth
