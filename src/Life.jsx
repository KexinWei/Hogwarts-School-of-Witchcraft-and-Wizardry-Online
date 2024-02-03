import Panel from './Panel.jsx';
import './Life.css';
import GreatHall from './assets/GreatHall-1.webp';
import Dorm from './assets/Dorm-1.webp'
import Quidditch from './assets/Quidditch-1.webp'
import Tournament from './assets/TriwizardCup-1.webp'

function Life({ setPage }) {
    const panelData = [
        {
            title: 'Dining',
            imageUrl: GreatHall,
            alt:'Fantasy-themed grand dining hall with floating candles, a starry sky ceiling, and long tables filled with people.',
            contentLines: [
                'Students at Hogwarts School of Witchcraft and Wizardry dine in the Great Hall. The Great Hall is a central location within Hogwarts where students gather for daily meals, ceremonial feasts, and special occasions.',
                'The hall is described as a large room with a high ceiling, enchanted to look like the sky above. The four long tables for each of the Hogwarts Houses —— Gryffindor, Hufflepuff, Ravenclaw, and Slytherin —— are arranged in the Hall, where students sit with their housemates. The staff table is located at the front of the Hall, where the professors and the headmaster sit.',
                'Meals appear magically on the tables, and special decorations and themes are often seen during events like the Halloween feast and the Christmas dinner.'
            ]
        },
        {
            title: 'Dormitories',
            imageUrl: Dorm,
            alt:'A dimly lit wizarding dormitory with multiple four-poster beds, red hangings, open trunks, and a central rug with a house crest.',
            contentLines: [
                'The four House dormitories have secret entrances, generally known only to members of that house and require a password (Gryffindor and Slytherin), riddle answer (Ravenclaw) or ritual (Hufflepuff) in order to gain entrance.',
                'Inside is the common room, which contains armchairs and sofas for the pupils and tables for studying and homework. There are fireplaces to keep the rooms warm, and students either relax here in the evenings or else complete their homework, but may complete their work in the bedroom. There are notice boards in each common room and at other strategic points throughout the school. The students sleep in their House dormitories, which branch off from the common rooms.',
                'Each dormitory gets at least two rooms; one for boys and one for girls (an enchantment prevents boys from entering the girls\' area, although there is no spell to prevent the reverse from occurring). Each student sleeps in a large four-poster bed with bed covers and heavy curtains in the House colours, and thick white pillows. There is a bedside table for each bed, and each dormitory has a jug of water and goblets on a tray.'
            ]
        },
        {
            title: 'Quidditch',
            imageUrl: Quidditch,
            alt:'Aerial view of a quidditch stadium with green pitch and goalposts, with a blurred effect suggesting high-speed action.',
            contentLines: [
                'Quidditch (formerly known as Kwidditch and Cuaditch) was a wizarding sport played on flying broomsticks. It was the most popular and well-known game among wizards and witches, and, according to Rubeus Hagrid, the wizard equivalent to Muggles\' passion for football.',
                'The game was played by two teams with seven members each. The object of the game was to score more points than the opposing team.',
                'While Quidditch was the first (and so far, only) broomstick-based game to attain near-worldwide popularity amongst the wizarding people, it was certainly not the first broomstick game. In truth, Quidditch probably owed a debt to a number of its forerunners in making it as successful as it became. All of these archaic broom games were popular in localised areas, but none had the vast appeal that Quidditch did. The beauty of Quidditch was that it took the best aspects of all its predecessors, added its own unique twists, and ended up as a game that would remain popular with the masses for centuries.'
            ]
        },
        {
            title: 'Triwizard Tournament',
            imageUrl: Tournament,
            alt:'Medieval-style dormitory with four-poster beds, red curtains, stone walls, and a wooden chest on a patterned rug.',
            contentLines: [
                'The Triwizard Tournament was a magical contest held between the three largest wizarding schools of Europe: Hogwarts School of Witchcraft and Wizardry, Durmstrang Institute, and Beauxbatons Academy of Magic, each school being represented by one champion.',
                'Selected champions compete in three tasks — traditionally judged by the Headmasters or Headmistresses of the competing schools — designed to test magical ability, intelligence, and courage. Champions competed for the honour and glory of winning the Tournament, for the Triwizard Cup, and a monetary prize. The first Tournament was held sometime around the late 13th century.',
                'The Tournament was notorious for being extremely dangerous: many champions died while competing, and it was discontinued at some point in or after 1792, due to the high death toll. In 1994, the Tournament was revived with restrictions in place in an attempt to stop potential deaths.'
            ]
        }
    ];

    return (
        <main id="panels-main">
            <h2>STUDENT LIFE</h2>
            {panelData.map((panel, index) => (
                <Panel 
                    key={index}
                    title={panel.title}
                    imageUrl={panel.imageUrl}
                    alt={panel.alt}
                    contentLines={panel.contentLines}
                    setPage={setPage}
                />
            ))}
        </main>
    );
}

export default Life;
