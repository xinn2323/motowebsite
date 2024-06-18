import React from 'react';
import Navbar from '../components/Navbar';
import jake from '../assets/img/t.jpeg';
import Footer from '../components/Footer';

// import adrian from '.../src/media/adrian.mp4'
import '../App.css';

export default function Home(){
  return(
    <>
   
    <div className="home-page " style={{width:"100%"}}>
      <div className="image-background" style ={{ marginTop:"5%", width:"50%"}}>    
      <h1 style={{margin: "-1px",zIndex:"1" }}>M O T O W E B S I T E</h1>
      <p>ADV-stands short for Adventure category motorcycles. Seeing the above picture one can get an idea that this kind of motorcycles are designed to go both on road and offroad as well. They have large suspension travel,higher ground clearance,spoke wheels and panniers for storing luggages</p>  
      

      
    
        {<img src={jake}  style={{width:"100%",zIndex:"-2", height:"100%", marginTop:"5%", marginLeft:"300px",}} />}
        <header className="header-overlay">
        
        <br />
        <Navbar />
        <section className="video-section">
          <div style={{position:'static'}} className="video-container">
        <video width="1470" height="615" controls loop autoPlay>
        <source src="src/media/adrian.mp4" type="video/mp4"/>
        file is not supported
        </video>
        </div>
        </section>
          {/* <h1>Welcome to Our Website!</h1>Add any other header content here */}
        </header>
    </div>
    <Footer/>
    </div>
    </>
  
  );
}
// return (
//   <>
//   <NavBar />
//     <div>
//       <header>       
//         <h1 style={{marginTop:"100px"}}>Welcome to Our Website!</h1>
//         {/* Add any other header content here */}
//       </header>
//       <main>
//       <img src={jake} style={{width:"80%", height:"100%", marginTop:"100px"}} />
//       <h1 style={{marginTop:"100px"}}>Welcome to Taste-To-Go!</h1>
//       <p style={{marginTop:"100px"}}>Explore our delicious dishes and find your favorites.</p>
//         {/* Add main content of the homepage here */}
//       </main>
//       <footer>
//         {/* Add footer content here */}
//       </footer>
//     </div>

