import Panel from './Panel.jsx';
import './Life.css';
import Astronomy from './assets/Astronomy-2.webp';
import Charms from './assets/Charms-2.webp';
import Defense from './assets/Defense-2.webp';
import Flying from './assets/Flying-2.webp';
import Herbology from './assets/Herbology-2.webp';
import History from './assets/History-2.webp';
import Potions from './assets/Potions-2.webp';
import Transfiguration from './assets/Transfiguration-2.webp';

function Curriculum({ setPage }) {
    const panelData = [
        {
            title: 'Astronomy',
            imageUrl: Astronomy,
            alt:'A magical telescope with an ethereal glow set against a rich, ornate background topped with a whimsical witch\'s hat.',
            contentLines: [
                'Astronomy was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and Uagadou. Astronomy was the branch of magic and science that studied stars and the movement of planets. Students would also use their wands with an Orrery to predict the next eclipse, the only known practical form of magic used in the class.',
                'Uagadou students were known to be skilled in Astronomy, implying the teaching that was provided at Uagadou was excellent.',
            ]
        },
        {
            title: 'Charms',
            imageUrl: Charms,
            alt:'A whimsical, heart-adorned book floating above swirling patterns, suggestive of a love spell or enchantment.',
            contentLines: [
                'Charms was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry. As the name suggests, it specialised in the teaching of charms.',
                'Even though mastering charm-work was clearly essential to performing the greater part of magic, charm-work was seen as a "softer option" by some. Augusta Longbottom who, incidentally, failed her Charms O.W.L. considered it such.',
            ]
        },
        {
            title: 'Defence Against the Dark Arts',
            imageUrl: Defense,
            alt:'A dark, blurry figure of a bat-like creature against a light backdrop, evoking a sense of mystery and the nocturnal.',
            contentLines: [
                'Defence Against the Dark Arts (abbreviated as DADA) was a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry. In this class, students studied and learnt how to defend themselves against all aspects of the Dark Arts, including dark creatures, curses, hexes and jinxes (dark charms), and duelling.',
                'The class was a core subject at Hogwarts. The position of Defence Against the Dark Arts professor at the school was once rumoured to be jinxed, as no teacher could hold the post for more than a year without suffering an unpleasant fate.',
            ]
        },
        {
            title: 'Flying',
            imageUrl: Flying,
            alt:'A group of students on a grassy field holding broomsticks with a castle wall in the background, poised for flight training.',
            contentLines: [
                'Flying, also known as Broom Flight Class, was a subject taught at Hogwarts School of Witchcraft and Wizardry. It was taught by Madam Rolanda Hooch, the Hogwarts Flying Instructor and Quidditch referee. The subject taught students how to fly broomsticks.',
                'The approach of this class was heavily anticipated by students, who often told exaggerated tales of past flying achievements. Ron Weasley told anybody who would listen how he hit a hanglider with Charlie\'s old broom.'
            ]
        },
        {
            title: 'Herbology',
            imageUrl: Herbology,
            alt:'A variety of vibrant, mystical plants on shelves in a greenhouse, indicating a study of magical botany.',
            contentLines: [
                'Herbology was the study of magical and mundane plants and fungi, making it the wizarding equivalent to botany. Herbology was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and Castelobruxo.',
                'In this class students learned to care for and utilise plants, learn about their magical properties and what they are used for. Many plants provided ingredients for potions and medicine, while others had magical effects of their own right.',
            ]
        },
        {
            title: 'History of Magic',
            imageUrl: History,
            alt:'A classroom setting with students and a ghostly teacher at the chalkboard, suggesting an otherworldly history lesson.',
            contentLines: [
                'History of Magic was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry. This class was a study of magical history. This was one of the subjects where the use of magic practically was not necessary. History of Magic was taught from the first year to the fifth, and was completed with an O.W.L. exam with only a written section.',
            ]
        },
        {
            title: 'Potions',
            imageUrl: Potions,
            alt:'An aged book with a green cauldron silhouette against a swirly background, hinting at alchemical and magical recipes.',
            contentLines: [
                'Potions was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry. In this class, students learnt the correct way to brew potions. They followed specific recipes and used various magical ingredients to create potions, starting with simple ones and moving to more advanced ones as they progressed in knowledge.',
                'A standard potions kit included plant ingredients such as belladonna, and supplies such as glass phials and weighing scales, along with a standard cauldron that all students were expected to bring with them to lessons.',
            ]
        },
        {
            title: 'Transfiguration',
            imageUrl: Transfiguration,
            alt:'A magical tome with a red butterfly emblem, symbolizing transformation and change.',
            contentLines: [
                'Transfiguration was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry, Ilvermorny School of Witchcraft and Wizardry and Uagadou. It taught the art of changing the form and appearance of an object or a person. This type of magic was commonly referred to as "Transfiguration" and was considered both complex and dangerous.',
                'There were limits to Transfiguration, which were governed by Gamp\'s Law of Elemental Transfiguration. There were also many branches of Transfiguration, including Trans-Species Transformation and Human Transfiguration. This type of magic was regarded as "very hard work" and was "more scientific" than charms-work, as one had to get it exactly right for the transfiguration to be successful.',
            ]
        }
    ];

    return (
        <main id="panels-main">
            <h2>CURRICULUM</h2>
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

export default Curriculum;
