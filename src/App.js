
import './App.css';
import Navbar from './components/Navbar'
import SelfieLinks from './components/SelfieLinks';
import IntroText from './components/IntroText'
import MoreScroll from './components/MoreScroll'
import ProjectDisplay from './components/Projects-Section/ProjectDisplay';
import Marginner from './components/Marginner';
import MobileNav from './components/MobileNav'
import Skills from './components/Skills-Section/Skills'



function App() {

  return (

<div className = 'App'>
  <Navbar/>
  <SelfieLinks/>
<div className='introduction'>
<IntroText/>
<MobileNav/>
</div>
<Marginner/>
<div className='Skills'>
<Skills/>
</div>



    </div>
   
  );
}

export default App;
