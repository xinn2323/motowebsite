// import React from 'react';
// import Navbar from '../components/Navbar';
import dok from '../assets/img/B.jpeg';
import jake1 from '../assets/img/A.jpeg';
import jake2 from '../assets/img/C.jpeg';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Gallary() {
  return (
    <>
    
    <div className ="Gallary" style={{marginTop:"120px", width:"100vw", height:"100vh"}}>
    <Navbar />   
  <center>{<img src={dok} style={{width:"600px", height:"50", }} />}</center>
  <p >ninja $2million</p> 
  <p>The Ninja 1000 is powered by a Liquid Cooled Fuel Injection 1043 cc 4 Cylinder engine that gives 142hp of power at 10000 rpm and 111 Nm Torque at 7300 rpm. It comes with the option of a 6-Speed transmission gearbox. The Ninja 1000 has a seat height of 820 mm.</p>
  <center>{<img src={jake1} style={{width:"600px", height:"50"}} />}</center>
  <p>kawasaki $1million</p>
  <p>
The Kawasaki Ninja H2R is powered by 998cc BS6 engine which develops a power of 305.75 bhp and a torque of 165 Nm. With both front and rear disc brakes, Kawasaki Ninja H2R comes up with anti-locking braking system. This Ninja H2R bike weighs 216 kg and has a fuel tank capacity of 17 liters.</p>
  <center>{<img src={jake2} style={{width:"600px", height:"500"}} />}/</center>
  <p>gsx 1000cc $1million</p>
  <p>The Suzuki GSX-R1000 (often called a Gixxer) is a supersport motorcycle made by Suzuki. It was introduced in 2001 to replace the GSX-R1100 and is powered by a liquid-cooled 999 cc (61.0 cu in) inline four-cylinder, four-stroke engine although originally 988 cc (60.3 cu in) from 2001 to 2004.</p>
    
      <Footer/>
    </div>
    </>
  );
}

export default Gallary;