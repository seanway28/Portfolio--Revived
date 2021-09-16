import React from 'react';
import Sun from '../../assets/images/Sun.jpg';
import SMC21 from '../../assets/images/SMC21.jpg';
import Fam from '../../assets/images/Fam.jpg';
import Shop from '../../assests/images/Shop.jpg'

const About = () => {
    return (
       <section>
  <div className="body-text"/>
  <h3 className="title-text">Sean M. Conway</h3>
          <p>
          Hello, I’m @seanway28, but you can call me Sean!
        I’m interested in full stack development, mobile app development, cyber security and other new opportunities. I believe I can combine this new knowledge with by previous 10+ years as a Project Manager for several Caterpillar dealerships and corporate offices and my time at General Electric that gave me the inspiration to start my coding studies.
        I’m currently a student in the Butler University Full Stack Code Development Executive Bootcamp Program!
        I’m looking to work and collaborate anywhere that encourages growth and expansion in both knowledge and practice. I bring leadership and well over a decade of electrical engineering and project management experience from both Caterpillar and General Electric. I look forward using my skillsets, both new and old, in today's ever growing technical market.
        The best way to reach me is at the following email address seanway28@gmail.com
        I look gorward to hearing from you!
          </p>
            <div>

            <div className="row justify-content-center mx-2"/>
            <div className="card col-4 my-3 p-0 no-border">
                <img src={Sun} alt="Sunset at Fable Farms"/>
            </div>
            <div className="card col-4 my-3 p-0 no-border">
               <img src={SMC21} alt="Portrait amoung pears"/>
            </div>
            <div className="card col-4 my-3 p-0 no-border">
               <img src={Fam} alt="Family is Everything"/>
            </div>   
            
    </div>
     </section>
    
  );
}

export default About;
