import React from 'react'
import "./Second.css"
const Second = () => {
  return (
    <section>
         <div class="title">PICKN YOUR SLOT</div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus explicabo dolores velit dicta ipsum nisi asperiores, nam cumque voluptas eveniet ad maiores at nihil? Animi iste excepturi culpa sed dolores!</p>
        <form action="#">
    <div className="container">
        <div className="user-details">
            <div className="input-box">
                <span className="details">phone number</span>
                <input className="phone"type="phone number" placeholder="Enter Phone number" required/>
                <button className="otp"> send OTP</button>
            </div>
            <div className="Container">
                <h1> OTP</h1>
                <div className="UserInput">
                    <input className='inp' Type="Text" Id='Ist' Maxlength="1" Onkeyup="ClickEvent(This,'Sec')"/>
                    <input className='inp' Type="Text" Id="Sec" Maxlength="1" Onkeyup="ClickEvent(This,'Third')"/>
                    <input className='inp' Type="Text" Id="Third" Maxlength="1" Onkeyup="ClickEvent(This,'Fourth')"/>
                    <input className='inp' Type="Text" Id="Fourth" Maxlength="1" Onkeyup="ClickEvent(This,'Fifth')"/>
                    <input className='inp' Type="Text" Id="Fifth" Maxlength="1"/>
                </div>
            </div>
            <div className="Loction">
                <h2>Consultation type</h2>
                <button className="btn">online</button>
                <button className="btn">In-Person</button>
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

export default Second
