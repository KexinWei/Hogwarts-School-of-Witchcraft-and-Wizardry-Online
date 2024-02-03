import Page from './Page.jsx';
import Astronomy from './assets/Astronomy-1.webp';
import Charms from './assets/Charms-1.webp';
import Defense from './assets/Defense-1.webp';
import Flying from './assets/Flying-1.webp';
import Herbology from './assets/Herbology-1.webp';
import History from './assets/History-1.webp';
import Potions from './assets/Potions-1.webp';
import Transfiguration from './assets/Transfiguration-1.webp';

function Class( {name} ) {
    const pageData = name == 'Astronomy' &&
        {
            title: 'Astronomy',
            imageUrl: Astronomy,
            alt:'A moonlit astronomy tower with an open-air balcony and a telescope facing the starry sky.',
            contentLines: [
                'Astronomy lessons were spent learning the names of stars and the movements of planets. It was a required class from year one until year five, and became an optional subject for the final two years.',
                'In the fifth year, the Ordinary Wizarding Level examinations were taken. During the exam, students had to fill in a blank star chart. If a student achieved a passing O.W.L. score, they were allowed to advance to N.E.W.T. level.',
                'Astronomy was one of the only fields of study at Hogwarts which had a direct equivalent in the Muggle world. Known student activities included learning the names of stars, constellations, and planets, as well as their location and movements, and describing the environments of planets and moons.'
            ]
        } || name == 'Charms' &&
        {
            title: 'Charms',
            imageUrl: Charms,
            alt:'Students from behind, attentively watching a demonstration at the front of a brightly lit classroom.',
            contentLines: [
                'Charms was a required subject for all students in their first five years at Hogwarts School of Witchcraft and Wizardry. The spells learned in Charms class were taken from textbooks. Students were taught specific wand movements and proper pronunciation. Often students partnered up in class to experiment on one another.',
                'In a student\'s fifth year, they took the Ordinary Wizarding Level examinations. This exam contained a written portion and a practical portion. The written portion was made up of questions concerning the theory of charms and the practical was where students were judged upon the charms they could perform. Their O.W.L. scores decided what courses they would be taking in their final years at Hogwarts. Only students who achieved a high O.W.L. score of either "Outstanding" or "Exceeds Expectations" might advance to N.E.W.T.-level.',
                'An O.W.L. and a N.E.W.T. in Charms were compulsory for both Auror and Healer training, at either an "Exceeds Expectations" or "Outstanding" level.'
            ]
        } || name == 'Defense' &&
        {
            title: 'Defence Against the Dark Arts',
            imageUrl: Defense,
            alt:'Students seated facing a ghostly professor beside a chalkboard in a classroom with gothic windows.',
            contentLines: [
                'Defence Against the Dark Arts was a required subject from first year to fifth year. The curriculum of the class varied greatly depending on what the professor at the time deemed appropriate.',
                'The lessons generally had a practical approach, with the cases of competent teachers believing that when it came to the Dark Arts a practical approach was the best way, with theoretical assignments given as homework. Inadequate teachers, such as Quirinus Quirrell and Dolores Umbridge, who were focused on theories alone, hampered the learning of defences as they would not be providing students any practical experiences.',
                'In the fifth year, Ordinary Wizarding Level examinations were taken; as such, students spent their time learning new topics and possibly revisiting the past four years of lessons (depending on the teacher). As part of their Defence Against the Dark Arts O.W.L., students had to sit a written exam one of the questions asks to describe the five signs of a werewolf and after students must complete a practical exam of; counter-jinxes, defensive spells, the Boggart-Banishing Spell, and the Patronus Charm (for bonus points).'
            ]
        } || name == 'Flying' &&
        {
            title: 'Flying',
            imageUrl: Flying,
            alt:'Three students looking skyward, holding broomsticks, with a clear sky above and trees in the distance.',
            contentLines: [
                'The course aimed of these lessons were largely aimed towards providing students with a basic understanding of the only the most elementary principles behind the study of broomology, which was to say, both how to handle a broom and progressively work on various techniques and manoeuvres performed while in flight, as well as receiving proper instructions on the subject of proper broom care and maintenance.',
                'During the tenure of Madam Rolanda Hooch, she would often warn her pupils against erratic flying, emphasising the importance of remaining focused, as the consequences of allowing oneself to become distracted or take unnecessary risks while in the air could, in the worst cases, cause the rider to slide off their broom and fall to their deaths.',
                'Forbidden from bringing their own brooms to the school in their first year, the students would each be supplied with a school broom, which were old and of poor quality, yet passable for the use of teaching pupils to fly.'
            ]
        } || name == 'Herbology' &&
        {
            title: 'Herbology',
            imageUrl: Herbology,
            alt:'Students and a professor tending to exotic plants in a sunny, well-equipped greenhouse.',
            contentLines: [
                'Herbology was a mandatory class at Hogwarts for the first five years of a student\'s education. Students spent class time learning about the different varieties of magical plants that existed. The further into a student\'s education, the more difficult and dangerous the plants became.',
                'In the fifth year, when students took Ordinary Wizarding Level examinations, much of the year was spent working with a variety of more dangerous plants like the Fanged Geranium, as well as revisiting the past four years of lessons. As part of their Herbology O.W.L, students had to sit a written exam, and then complete a practical exam, during which the students worked with a wide selection of plants.',
                'Students who achieved a pass grade on their Herbology O.W.L. could move on to the advanced class, where the plants become even more dangerous. At the end of their seventh year, students prepared for their N.E.W.T.s.'
            ]
        } || name == 'History' &&
        {
            title: 'History of Magic',
            imageUrl: History,
            alt:'A classroom scene with a ghostly professor at the front, teaching students seated at desks with quills and parchment.',
            contentLines: [
                'The lesson plan usually consisted of lectures on the \'History of Wizards and the Magical World\' (in which goblin rebellions appeared most memorably). This class was similar to the study of History in the Muggle World, as particular emphasis was placed upon remembering dates, names and events.',
                'The class was taught by the ghost of Professor Cuthbert Binns. According to Hogwarts folklore, Professor Binns had failed to notice that he was dead; he simply got up from his chair in the staffroom one morning and left his body behind.',
                'As Professor Binns was very old at the time of his death, he was very set in his ways and students find him difficult to relate to. Binns\' lessons consisted of him reciting (or "droning", as many would put it) lectures to his students. He did not seem to mind (or notice) that the class rarely paid attention or even slept through his class (with the exception of Hermione Granger, who alone "seemed able to resist the soporific power of Binns\' voice").'
            ]
        } || name == 'Potions' &&
        {
            title: 'Potions',
            imageUrl: Potions,
            alt:'Students seated at wooden tables, watching a professor preparing a potion in a dungeon-like classroom.',
            contentLines: [
                'At Hogwarts School of Witchcraft and Wizardry, Potions was a required subject for students, from the first year to the fifth year. Potion recipes could be found in many books, including the books the students at Hogwarts used in their classes, but the intricacies of timing, ageing, stirring techniques, and bottling which are much more difficult to learn without the mentoring of the experienced masters. Certain ingredients could be found in the cupboard in the classroom, but others had to be bought before the start of the year at the apothecary.',
                'Ordinary Wizarding Level examinations were taken at the end of a student\'s fifth year; as such students spent time learning Ordinary Wizarding Level potions and possibly revisiting the past four years of lessons. As part of their Potions O.W.L., students had to sit a written exam; one of the questions was to identify the effects of Polyjuice Potion and its purpose, and after students had to complete a practical exam. Professor Snape mentioned that achieving a high mark at Ordinary Wizarding Level was difficult, which was later demonstrated in 1996, when only twelve students reached the required level to advance to N.E.W.T.',
                'When Severus Snape was the professor, students had to achieve an \'Outstanding\' on their O.W.L. in order to take his advanced class.'
            ]
        } || name == 'Transfiguration' &&
        {
            title: 'Transfiguration',
            imageUrl: Transfiguration,
            alt:'A group of students in a classroom with a birdcage, watching as a professor demonstrates transfiguration at the front.',
            contentLines: [
                'Transfiguration was a required subject for all first year to fifth year students, with the option of a N.E.W.T. (Nastily Exhausting Wizarding Test) course in sixth and seventh year.',
                'Students practised actual transfigurations during classes. Accidents sometimes resulted in partial transfigurations, and theoretical homework was sometimes assigned. The further into a student\'s education, the more difficult the classwork and homework became.',
                'Like charms work, Transfiguration was achieved through concentration, precise wand movements, and the proper pronunciation of an incantation. However, it was generally more difficult than Charms and required great effort.'
            ]
        }
    ;

    return (
        <main id="class-main">
            <Page
                title={pageData.title}
                imageUrl={pageData.imageUrl}
                alt={pageData.title.alt}
                contentLines={pageData.contentLines}
            />
        </main>
    );
}

export default Class;
