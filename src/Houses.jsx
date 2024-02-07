import Gryffindor from './assets/Gryffindor.webp';
import Hufflepuff from './assets/Hufflepuff.webp';
import Ravenclaw from './assets/Ravenclaw.webp';
import Slytherin from './assets/Slytherin.webp';
import Card from './Card.jsx';
import './Houses.css';

function Houses({ setPage }) {
    const houseData = [
        {
            name: 'Gryffindor',
            imageUrl: Gryffindor,
            alt: 'Illustrated emblem with a roaring lion on a red and gold background and the word \'Gryffindor\' on a scroll beneath.',
            content: 'Gryffindor House, renowned for its valor and emblematic of bravery, daring, nerve, and chivalry, proudly stands as one of the four houses at Hogwarts School of Witchcraft and Wizardry. Symbolized by the lion and adorned in scarlet and gold, Gryffindor\'s legacy is upheld by notable figures like Minerva McGonagall and the celebrated Harry Potter. The house, founded by Godric Gryffindor and associated with the element of fire, is characterized by its high-situated common room in Hogwarts and the revered Sword of Gryffindor, encapsulating its enduring motto of courage and strength.'
        },
        {
            name: 'Hufflepuff',
            imageUrl: Hufflepuff,
            alt: 'Illustrated emblem with a badger over a black and yellow striped background, with the word \'Hufflepuff\' on a diagonal banner across the front.',
            content: 'Hufflepuff House at Hogwarts School of Witchcraft and Wizardry, founded by Helga Hufflepuff, is celebrated for its dedication to hard work, patience, loyalty, and fair play. Represented by the badger and adorned in yellow and black, Hufflepuff\'s spirit is further symbolized by yellow diamonds. Led by Pomona Sprout until 1998, the house boasts a warm, welcoming common room located near the castle\'s kitchens, accessible through a unique barrel-tapping entrance. Esteemed members like Newt Scamander and the first female Minister for Magic, Artemisia Lufkin, exemplify Hufflepuff\'s virtues. The house, aligned with the element of earth, also holds a significant historical artifact, Helga Hufflepuff\'s Cup.'
        },
        {
            name: 'Ravenclaw',
            imageUrl: Ravenclaw,
            alt: 'Illustrated emblem with a blue background featuring a bronze eagle, and a banner with the word \'Ravenclaw\' across the top.',
            content: 'Ravenclaw House at Hogwarts School of Witchcraft and Wizardry, founded by Rowena Ravenclaw, is distinguished for valuing intelligence, knowledge, creativity, and wit. Symbolized by the eagle and adorned in blue and bronze with sapphires representing its core values, Ravenclaw is led by Filius Flitwick. The house is associated with the element of air and features a unique common room in a west-side tower, where entry requires solving a riddle. Renowned members like Luna Lovegood and Garrick Ollivander, along with the inventor of Floo powder, Ignatia Wildsmith, embody Ravenclaw\'s spirit. The house also holds an important historical artifact, Rowena Ravenclaw\'s diadem, famously turned into a Horcrux by Tom Riddle.'
        },
        {
            name: 'Slytherin',
            imageUrl: Slytherin,
            alt: 'Illustrated emblem with a green and silver background, a silver serpent, and a banner with the word \'Slytherin\' at the top.',
            content: 'Slytherin House, founded by Salazar Slytherin at Hogwarts School of Witchcraft and Wizardry, is known for its emphasis on ambition, leadership, cunning, and resourcefulness. Symbolized by the serpent and boasting emerald green and silver colors with emeralds, Slytherin has been led by notable figures such as Horace Slughorn. Despite its reputation for producing several Dark wizards like Tom Riddle and Bellatrix Lestrange, the house celebrates a diverse legacy including members like Merlin. The Slytherin common room, located beneath the Black Lake in the Dungeons, mirrors the house\'s connection to the element of water. Renowned for its rich history, the house also possesses Salazar Slytherin\'s locket, a significant artifact infamously turned into a Horcrux by Tom Riddle.'
        },
    ];

    return (
        <main id="houses-main">
            <h2>HOUSES</h2>
            {houseData.map((house) => (
                <Card
                    key={house.name}
                    name={house.name}
                    imageUrl={house.imageUrl}
                    alt={house.alt}
                    content={house.content}
                    setPage={setPage}
                />
            ))}
        </main>
    );
}

export default Houses;
