import './Admissions.css';
import quill from './assets/Magicquill.webp';
import book from './assets/BookofAdmittance.webp';
import letter from './assets/HogwartsAcceptanceLetter.webp';
import alley from './assets/Diagon_Alley.webp';
import express from './assets/Hogwarts_Express.webp';
import hat from './assets/Sorting_Hat.webp';

function Admissions() {
    return (
        <main id="admissions-main">
            <h2>ADMISSIONS</h2>
            <p>Magical Quill at Hogwarts: There is a magical quill at Hogwarts which detects the birth of magical children and writes their names into a large book, the "Book of Admittance." This happens at the moment the child first displays signs of magic, regardless of their background or blood status.</p>
            <img src={quill} alt="A glowing, enchanted quill on a dark background, representing magical writing or spellcasting."/>
            <p>Eligibility by Age: The child must be 11 years old by the 1st of September of the year they start at Hogwarts. Students typically begin Hogwarts in the September after they turn 11.</p>
            <img src={book} alt="An open ancient book with an quill on top, symbolizing the recording of new students."/>
            <p>Acceptance Letters: Acceptance letters are sent out to these children when they turn 11. These letters are delivered by owls. For Muggle-born students, who might not be aware of the magical world, a staff member from Hogwarts visits the family to explain everything to them and assist with preparations.</p>
            <img src={letter} alt="A classic Hogwarts acceptance letter addressed to Mr. Potter, with a detailed school crest."/>
            <p>Supplies and Preparation: The acceptance letter includes a list of books and equipment the student will need for their studies at Hogwarts. Students are expected to purchase these items, typically from Diagon Alley in London.</p>
            <img src={alley} alt="A bustling magical marketplace with quaint shops and a cobbled street, under a twilight sky."/>
            <p>Travel to Hogwarts: First-year students travel to Hogwarts via the Hogwarts Express, which leaves from Platform 9¾ at King's Cross Station in London.</p>
            <img src={express} alt="Students waiting beside the iconic red steam train, ready to depart under an ornate glass ceiling."/>
            <p>Sorting Ceremony: Upon arrival at Hogwarts, new students are sorted into one of the four houses – Gryffindor, Hufflepuff, Ravenclaw, or Slytherin – by the Sorting Hat, which assesses their characteristics and preferences.</p>
            <img src={hat} alt="The famous Sorting Hat from Hogwarts, old and patched, ready to sort new students into their houses."/>
            <p>Education at Hogwarts: Once admitted, students undergo a magical education, learning various subjects like Potions, Defense Against the Dark Arts, Transfiguration, and more.</p>
        </main>
    );
}

export default Admissions;
