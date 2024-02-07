import './Home.css';
import school from './assets/Hogwarts_Legacy_background_seen_on_website.webp';

function Home() {
    return (
        <main id="home-main">
            <h2>DISCOVER HOGWARTS</h2>
            <img src={school} alt="A cloaked person stands on a cliff overlooking a misty, spired castle amidst mountains, with an eagle flying in the bright sky."/>
            <p>Welcome to Hogwarts School of Witchcraft and Wizardry, a premier educational institution nestled in the picturesque Scottish Highlands. Renowned for our rich history and cultural heritage, Hogwarts has been a pivotal part of the magical community since its establishment in the 10th century.</p>
            <p>At Hogwarts, we are proud to offer an inclusive educational environment, welcoming young witches and wizards from Great Britain and Ireland. Admission begins for students at the age of eleven, with our Quill of Acceptance and Book of Admittance ensuring a seamless enrolment process. Our unique location, hidden from the non-magical world, provides a safe and nurturing space for our students to explore and grow their magical abilities.</p>
            <p>Funded by the British Ministry of Magic, Hogwarts stands as a testament to the enduring values of the wizarding world. The school's storied history is intertwined with the development of magical education globally, sharing a prestigious status alongside other esteemed institutions like Beauxbatons Academy of Magic and the Durmstrang Institute.</p>
            <p>Our commitment to each student's magical journey is further exemplified by our personalized approach to those newly discovering their magical heritage. Special messengers are dispatched to guide Muggle-born and half-blood students, like the celebrated Harry Potter, ensuring they are warmly welcomed into our community.</p>
            <p>At the heart of our school ethos is the motto "Draco Dormiens Nunquam Titillandus" - a timeless reminder to respect and cherish the magical world we are part of. Join us at Hogwarts, where magic and learning come alive, and where every student embarks on an unforgettable adventure.</p>
        </main>
    );
}

export default Home;
