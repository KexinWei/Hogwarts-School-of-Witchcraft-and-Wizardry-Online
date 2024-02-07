import { useState } from 'react';
import logo from './assets/Hogwartscrest.webp';
import './Header.css';

function Header({ setPage }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    return (
      <header>
        <a className="skip" href="#main">Skip to Content</a>
        <a href="#home" onClick={(e) => {e.preventDefault(); setPage('Home');}}>
            <img src={logo} alt="Illustrated crest featuring four house emblems: a lion, a snake, a badger, and an eagle around a large letter 'H', with a banner reading 'Draco Dormiens Nunquam Titillandus'."/>
        </a>
        <h1>Hogwarts School of Witchcraft and Wizardry</h1>
        <button className="hamburger" onClick={toggleNav}>&#x2261;</button>
        <ul className={isNavOpen ? "navbar open" : "navbar"}>
            <li><a className="header-link" href="#home" onClick={(e) => {e.preventDefault(); setPage('Home');}}>DISCOVER HOGWARTS</a></li>
            <li className ="houses">
                <a className="header-link" href="#houses" onClick={(e) => {e.preventDefault(); setPage('Houses');}}>HOUSES</a>
                <ul className="house-links">
                    <li><a className="sub-link" href="#gryffindor" onClick={(e) => {e.preventDefault(); setPage('Gryffindor');}}>Gryffindor</a></li>
                    <li><a className="sub-link" href="#hufflepuff" onClick={(e) => {e.preventDefault(); setPage('Hufflepuff');}}>Hufflepuff</a></li>
                    <li><a className="sub-link" href="#ravenclaw" onClick={(e) => {e.preventDefault(); setPage('Ravenclaw');}}>Ravenclaw</a></li>
                    <li><a className="sub-link" href="#slytherin" onClick={(e) => {e.preventDefault(); setPage('Slytherin');}}>Slytherin</a></li>
                </ul>
            </li>
            <li className ="life">
                <a className="header-link" href="#life" onClick={(e) => {e.preventDefault(); setPage('Life');}}>STUDENT LIFE</a>
                <ul className="life-links">
                    <li><a className="sub-link" href="#dining" onClick={(e) => {e.preventDefault(); setPage('Dining');}}>Dining</a></li>
                    <li><a className="sub-link" href="#dormitories" onClick={(e) => {e.preventDefault(); setPage('Dormitories');}}>Dormitories</a></li>
                    <li><a className="sub-link" href="#quidditch" onClick={(e) => {e.preventDefault(); setPage('Quidditch');}}>Quidditch</a></li>
                    <li><a className="sub-link" href="#tournament" onClick={(e) => {e.preventDefault(); setPage('Tournament');}}>Triwizard Tournament</a></li>
                </ul>
            </li>
            <li className ="curriculum">
                <a className="header-link" href="#curriculum" onClick={(e) => {e.preventDefault(); setPage('Curriculum');}}>CURRICULUM</a>
                <ul className="curriculum-links">
                    <li><a className="sub-link" href="#astronomy" onClick={(e) => {e.preventDefault(); setPage('Astronomy');}}>Astronomy</a></li>
                    <li><a className="sub-link" href="#charms" onClick={(e) => {e.preventDefault(); setPage('Charms');}}>Charms</a></li>
                    <li><a className="sub-link" href="#defense" onClick={(e) => {e.preventDefault(); setPage('Defense');}}>Defence Against the Dark Arts</a></li>
                    <li><a className="sub-link" href="#flying" onClick={(e) => {e.preventDefault(); setPage('Flying');}}>Flying</a></li>
                    <li><a className="sub-link" href="#herbology" onClick={(e) => {e.preventDefault(); setPage('Herbology');}}>Herbology</a></li>
                    <li><a className="sub-link" href="#history" onClick={(e) => {e.preventDefault(); setPage('History');}}>History of Magic</a></li>
                    <li><a className="sub-link" href="#potions" onClick={(e) => {e.preventDefault(); setPage('Potions');}}>Potions</a></li>
                    <li><a className="sub-link" href="#transfiguration" onClick={(e) => {e.preventDefault(); setPage('Transfiguration');}}>Transfiguration</a></li>
                </ul>
            </li>
            <li><a className="header-link" href="#admissions" onClick={(e) => {e.preventDefault(); setPage('Admissions');}}>ADMISSIONS</a></li>
        </ul>
      </header>
    );
}

export default Header;