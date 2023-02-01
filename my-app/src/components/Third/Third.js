import React from 'react'
import "./Third.css"
const Third = () => {
  return (
    <section>
        <div className="title">PICKN YOUR SLOT</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo dolores velit dicta ipsum nisi asperiores, nam cumque voluptas eveniet ad maiores at nihil? Animi iste excepturi culpa sed dolores!</p>
        <form action="#">
    <div className="container">
        <div className="user-details">
            <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Enter First & Last Name" required/>
            </div>
            <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter email address" required/>
            </div>
            <div class="input-box">
                <span className="details">Gender</span>
                <input type="gender" placeholder="Select Gender" required/>
            </div>
            <div className="input-box">
                <span className="details">Age</span>
                <input type="age" placeholder="Select Age" required/>
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

export default Third
