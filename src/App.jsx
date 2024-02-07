import { useState } from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import Houses from './Houses.jsx';
import House from './House.jsx';
import Life from './Life.jsx';
import Dining from './Dining.jsx';
import Dormitories from './Dormitories.jsx';
import Quidditch from './Quidditch.jsx';
import Tournament from './Tournament.jsx';
import Curriculum from './Curriculum.jsx';
import Class from './Class.jsx';
import Admissions from './Admissions.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <>
      <Header setPage={setPage} />
      {page === 'Home' && <Home />}
      {page === 'Houses' && <Houses setPage={setPage} />}
      {page === 'Gryffindor' && <House name={'Gryffindor'} />}
      {page === 'Hufflepuff' && <House name={'Hufflepuff'} />}
      {page === 'Ravenclaw' && <House name={'Ravenclaw'} />}
      {page === 'Slytherin' && <House name={'Slytherin'} />}
      {page === 'Life' && <Life setPage={setPage} />}
      {page === 'Dining' && <Dining />}
      {page === 'Dormitories' && <Dormitories />}
      {page === 'Quidditch' && <Quidditch />}
      {page === 'Tournament' && <Tournament />}
      {page === 'Curriculum' && <Curriculum setPage={setPage} />}
      {page === 'Astronomy' && <Class name={'Astronomy'} />}
      {page === 'Charms' && <Class name={'Charms'} />}
      {page === 'Defense' && <Class name={'Defense'} />}
      {page === 'Flying' && <Class name={'Flying'} />}
      {page === 'Herbology' && <Class name={'Herbology'} />}
      {page === 'History' && <Class name={'History'} />}
      {page === 'Potions' && <Class name={'Potions'} />}
      {page === 'Transfiguration' && <Class name={'Transfiguration'} />}
      {page === 'Admissions' && <Admissions />}
      <Footer />
    </>
  );
}

export default App;
