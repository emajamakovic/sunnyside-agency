import './App.css';
import Header from './components/Header';
import About from './components/About';
import StandOut from './components/StandOut';
import Category from './components/Category';
import Testimonials from './components/Testimonials';
import TestimonialsInfo from './components/TestimonialsInfo';
import Photos from './components/Photos';
import Footer from './components/Footer';


function App() {

  const testimonials=TestimonialsInfo.map(client=> {
    return (
    <Testimonials 
    key={client.id} 
    {...client}/>
    )})


  return (
    <>
      <Header/>
      <About/>
      <StandOut/>
      <Category/>
      <div className='testimonials-component'>
        <div className='d-flex justify-content-center headline'>Client Testimonials</div>
        <div className='testimonials'>
          <div className='container3'>
            {testimonials}
        </div>
        </div>
      </div>
      <Photos/>
      <Footer/>
    </>
    
  )
}

export default App;
