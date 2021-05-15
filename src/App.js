
import './App.css';
import Navbar from './components/Navbar'
import SelfieLinks from './components/SelfieLinks';
import IntroText from './components/IntroText'
import MoreScroll from './components/MoreScroll'
import ProjectDisplay from './components/Projects-Section/ProjectDisplay';
import Marginner from './components/Marginner';




function App() {

  return (

<div className = 'App'>
  <Navbar/>
  <SelfieLinks/>
<div className='introduction'>
<IntroText/>
</div>
<Marginner/>
<div className='projects'>

</div>



    </div>
   
  );
}

export default App;
