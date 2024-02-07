import Page from './Page.jsx';
import GreatHall from './assets/GreatHall-2.webp';

function Dining() {
    return (
        <main id="dining-main">
            <Page
                title={'Dining'}
                imageUrl={GreatHall}
                alt={'Large, empty medieval dining hall with long wooden tables, stone walls, and hanging lanterns.'}
                contentLines={[
                    'The Great Hall in the Hogwarts Castle was the main gathering area in the school, which was located off the Entrance Hall. It was a large hall where students and teachers dined and congregated. Three meals a day were hosted in this hall.',
                    'The Great Hall was the main place where students received their meals and daily owl post. They also held certain special events, such as the Sorting Ceremony, and the Hallowe\'en Feast.',
                    'The large hall had enough space to hold every student, as well as the main staff and guests. The Hall had tall walls that reached up to the ceiling, which was covered with floating candles and enchanted to look like the sky above.',
                    'At the front of the hall was the staff table, also known as the High Table, which was designed to house the entire Hogwarts staff. In the centre of the table was a throne chair where the present Headteacher sat. At the left of the table was a door which led to a chamber with portraits.',
                    'The Great Hall had also held many important events, such as the defeat of Lord Voldemort at the hands of Harry Potter, ending the Battle of Hogwarts and the climatic end of the Second Wizarding War.'
                ]}
            />
        </main>
    );
}

export default Dining;