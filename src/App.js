
import './App.css';

import SelfieLinks from './components/SelfieLinks';
import IntroText from './components/IntroText'
import MoreScroll from './components/MoreScroll'
import ProjectDisplay from './components/Projects-Section/ProjectDisplay';
import Marginner from './components/Marginner';
import Skills from './components/Skills-Section/Skills'
import About from './components/About-Section/About'
import Nav from './components/Nav'
import Circle from './components/assets/images/Ellipse9.png'
import ResumeBtn from './components/ResumeBtn'

function App() {

  return (

<div className = 'App'>
  <div className='wrapper'>
  <Nav/>
  <SelfieLinks/>
  <ResumeBtn/>
  <IntroText/>
<Marginner/>
<About/>
<Skills/>
<Marginner/>
<ProjectDisplay/>
</div>
    </div>
   
  );
}

export default App;
