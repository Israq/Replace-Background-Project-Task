import { BrowserRouter } from "react-router-dom"; 
import { About, Contact, Experience, Feedbacks, Socials, Cards,  Navbar, Rewards, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover
        bg-no-repeat bg-center"> */}
              <Navbar/>
              <Cards/>
              {/* <Droplink/> */}
           {/* </div> */}
           <About/>
          
           <Rewards/>
           <Works/>
           <Feedbacks/>
           {/* <div classsName="relative z-0"> */}
            
              {/* <StarsCanvas/>
              <Socials/> */}
           {/* </div> */}
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
