import Card from './Card.jsx';
import Gryffindor_dorm from './assets/Gryffindor_Dormitory.webp';
import Hufflepuff_dorm from './assets/Hufflepuff_Dormitory.webp';
import Ravenclaw_dorm from './assets/Ravenclaw_Dormitory.webp';
import Slytherin_dorm from './assets/Slytherin_Dormitory.webp';

function Dormitories() {
    const houseData = [
        {
            name: 'Gryffindor',
            imageUrl: Gryffindor_dorm,
            alt: 'Cozy dormitory room with stone walls, a four-poster bed with red curtains, Gryffindor crest on the bedspread, and a matching house banner.',
            content: 'Located at the top of Gryffindor Tower, this dormitory is known for its cozy and warm atmosphere. It features four-poster beds with deep red hangings and is decorated with Gryffindor colors of scarlet and gold. The common room, which leads to the dormitories, has a roaring fireplace, comfortable armchairs, and is adorned with portraits, including that of the Fat Lady who guards the entrance.'
        },
        {
            name: 'Hufflepuff',
            imageUrl: Hufflepuff_dorm,
            alt: 'Warm dormitory room with a four-poster bed, Hufflepuff banner above, stone walls, potted plants, and a Hufflepuff crest rug on the floor.',
            content: 'Situated near the kitchens, the Hufflepuff dormitory is cozy and welcoming. The decor is dominated by the house colors of yellow and black. The dormitory is known for its homely feel, with plants and flowers adding to the warmth. The beds are draped in patchwork quilts, and the common room has low ceilings and comfortable furniture, creating a snug and friendly environment.'
        },
        {
            name: 'Ravenclaw',
            imageUrl: Ravenclaw_dorm,
            alt: 'A serene dormitory setting with a four-poster bed, Ravenclaw banner, Gothic windows, and a rug with an eagle emblem.',
            content: 'Located in Ravenclaw Tower, this dormitory is airy and ethereal, with blue and bronze decor reflecting the house colors. The atmosphere is serene, with large windows offering breathtaking views of the surrounding landscapes. The common room is decorated with elegant and intellectually stimulating items, such as bookcases filled with books and celestial charts.'
        },
        {
            name: 'Slytherin',
            imageUrl: Slytherin_dorm,
            alt: 'Dormitory room with stone architecture, a four-poster bed with a Slytherin banner, and a serpent emblem rug on the floor.',
            content: 'Found in the dungeons, the Slytherin dormitory has a mysterious and somewhat austere ambiance. The decor includes green and silver colors, representing the house. The dormitories are located underwater, with windows looking into the depths of the Hogwarts Lake, offering a view of aquatic life. The common room is decorated with dark wood and has an overall cold and grandiose feel.'
        },
    ];

    return (
        <main id="dormitories-main">
            <h2>Dormitories</h2>
            {houseData.map((house) => (
                <Card
                    key={house.name}
                    name={house.name}
                    imageUrl={house.imageUrl}
                    alt={house.alt}
                    content={house.content}
                />
            ))}
        </main>
    );
}

export default Dormitories;
