import Panel from './Panel.jsx';
import './House.css';
import Gryffindor_icon from './assets/Gryffindor_ClearBG.webp';
import Gryffindor_founder from './assets/Founders_gryffindor1.webp';
import Hufflepuff_icon from './assets/Hufflepuff_ClearBG.webp';
import Hufflepuff_founder from './assets/Founders_hufflepuff1.webp';
import Ravenclaw_icon from './assets/Ravenclaw_ClearBG.webp';
import Ravenclaw_founder from './assets/Founders_ravenclaw1.webp';
import Slytherin_icon from './assets/Slytherin_ClearBG.webp';
import Slytherin_founder from './assets/Founders_slytherin1.webp';

function House( {name} ) {
    const panelData = name == 'Gryffindor' && [
        {
            title: 'Traits',
            imageUrl: Gryffindor_icon,
            alt:'Detailed illustration of a roaring lion on a red backdrop, framed by a silver shield border with a clear background.',
            contentLines: [
                'The Gryffindor house emphasised the traits of courage as well as "daring, nerve, and chivalry", and thus its members were generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors had also been noted to be short-tempered.',
                'Notably, Gryffindor house contributed many members to Dumbledore\'s Army and the Order of the Phoenix, although this may have been because the main members made it a point not to associate with other houses.',
                'According to Phineas Nigellus Black, members of other houses, particularly Slytherin, sometimes felt that Gryffindors engaged in "pointless heroics". Another Slytherin, Severus Snape, considered many Gryffindors to be self-righteous and arrogant, with no regard for rules.'
            ]
        },
        {
            title: 'Founder',
            imageUrl: Gryffindor_founder,
            alt:'Portrait of a bearded man in medieval attire, featuring a richly embroidered red robe and cloak, holding a sword, standing in a stone archway.',
            contentLines: [
                'Godric Gryffindor valued courage, determination, chivalry, and strength of heart, and was described as one of the four most brilliant witches and wizards of his time. He was also the most tolerant and accepting of Muggle-borns out of the Founders, a point which brought about the end of his friendship with Salazar Slytherin. He was very forward thinking due to his creating the Sorting Hat to preserve the selection of the students after his time. This showcases his cleverness and creativity.',
                'He also had a versatile mindset as he chose to wield a sword as well as a wand, making him a rather dynamic man who deferred to the duelling style of his opponent, Muggle and wizard alike. Going along with this, it shows that he was respectful and fair, choosing to wield a sword instead of magic against Muggle combatants out of a sense of fair play as magic would be a most decidedly unbalanced weapon in a duel against a simple sword. In addition to showing his sense of fairness, his deference to the duelling style of opponent also shows a need to challenge himself, proving his worth and courage, which became one of the signature traits of his House at Hogwarts.',
                'His threat to unsheathe and use his famous blade against Ragnuk the First and his followers shows that despite his noble heart and good intentions, that Godric was very much capable of taking the lives of sapient beings such as goblins. This would not have been an uncommon trait for a man of his era or personality due to the constant violence that pervaded medieval Europe and the acceptability of duelling to the death among both wizard and Muggles alike.'
            ]
        },
    ] || name == 'Hufflepuff' && [
        {
            title: 'Traits',
            imageUrl: Hufflepuff_icon,
            alt:'A silver shield with intricate details, displaying a black and white badger on a yellow leafy background, with a clear backdrop.',
            contentLines: [
                'Students belonging to this house were known to be hard-working, friendly, loyal, honest and rather impartial. It might be that due to their values, Hufflepuffs were not as competitive as the other houses, and were more modest about their accomplishments. Hufflepuff was the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students.',
                'Hufflepuffs were known to have a strong moral code, and a sense of right and wrong. Hufflepuffs were usually accepting of everyone. Students in Hufflepuff were known to value everyone and treat them as equal.',
                'Hufflepuff appeared to have the least rivalry with the other houses, except in Quidditch, although the Triwizard Tournament did temporarily put a great deal of strain on the relationship between Gryffindor and Hufflepuff, due to unusual circumstances of the selection of both Gryffindor student Harry Potter and Hufflepuff student Cedric Diggory as champions. This was mended by 1998, where a majority of Hufflepuffs rose to defend Harry from Pansy Parkinson and later helped to defend Hogwarts.'
            ]
        },
        {
            title: 'Founder',
            imageUrl: Hufflepuff_founder,
            alt:'Portrait of a smiling woman with long braided hair, dressed in a golden medieval gown with a black cloak, holding a cup.',
            contentLines: [
                'Helga favoured loyalty, honesty, fair play, and hard work, but was known to accept all students regardless of whether or not they possessed these traits. Members of her House usually display at least one of these traits in varying degrees, however. Given that all of her portraits show her with a wide smile, it can be inferred that Helga was a very jolly woman. Her affinity for food-related charms and plump shape might also indicate that she had a large appetite.',
                'Helga was renowned for her compassionate nature and charming ways. She took in the house-elves to work in Hogwarts Kitchen, where they could work in peace and safety. This was considered to be the best option at the time for house-elves. When the other founders were careful in selection of students, Hufflepuff took in those who did not fit the standards of other houses.',
                'She was also a woman of tolerance, willing to accept Muggle-born students and disagreed with Slytherin\'s pure-blood exclusiveness, as well as bringing together people of varying backgrounds to construct the school and ensuring a decent working environment for house-elves, who were generally treated with indifference if not outright cruelty by most wizards.'
            ]
        },
    ] || name == 'Ravenclaw' && [
        {
            title: 'Traits',
            imageUrl: Ravenclaw_icon,
            alt:'A silver shield with elaborate details showcasing a brown eagle with outstretched wings against a blue background with a clear backdrop.',
            contentLines: [
                'Ravenclaw House prized learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tended to be academically motivated and talented students. They also prided themselves on being original in their ideas, and methods. It was not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun. Hermione Granger, an extremely intelligent witch and the top student in her year, was sorted into Gryffindor, though she admitted that the Sorting Hat had seriously considered placing her in Ravenclaw.',
                'Often hard-working and diligent, as often was the case with intellectuals with a predisposition for academics, some of the pupils sorted under the blue-bronzed eagle were known to be inclined to dismiss certain social expectations for the sake of satisfying their own intellectual curiosity. Some of these eventually also ended up being not only accepted but even celebrated, in spite of being initially subjected to scorn for their various oddities. Luna Lovegood, for example, was one such student: eccentric to put it at its mildest, she was a Ravenclaw student who initially was bullied for her open defiance of conventionality, but ultimately became a celebrated wizarding naturalist and renowned for her participation in the legendary Battle of Hogwarts and past membership in Dumbledore\'s Army. Another example would be Professor Filius Flitwick, a half-goblin who might have faced scorn for his short stature earlier in life but went on to become a renowned Duelling Champion, and subsequently one of the finest and most knowledgable Charms Masters in the entirety of the wizarding world during his employment at Hogwarts School of Witchcraft and Wizardry. (The best, according to some of his students).',
                'Ravenclaws tended to be curious about the world and paid attention to the world around them. Ravenclaws were known to be logical and rational. In addition, Ravenclaw students tended to have abilities regarding Memory. Garrick Ollivander, for example, possessed an eidetic memory and can remember every wand he has sold, and Gilderoy Lockhart had an exceptional talent in the Memory Charm.'
            ]
        },
        {
            title: 'Founder',
            imageUrl: Ravenclaw_founder,
            alt:'Portrait of a woman with long dark hair in a blue medieval dress and cloak, holding a red book, standing in a gothic archway.',
            contentLines: [
                'Ravenclaw\'s most notable traits were her intelligence and creativity. She valued the same characteristics in her students. Rowena seemed strict and intimidating, but despite this she seemed to be forgiving and loving. This shown by the fact that she was willing to disregard her daughter\'s betrayal just to see her one last time on her deathbed.',
                'Ravenclaw was very proud, not admitting that her daughter had run away with her diadem not even to her close friends, the other founders. However, she was not prejudiced towards those of Muggle parentage or inheritance, as she disagreed with Slytherin\'s views on their admittance to Hogwarts.',
                'Ravenclaw\'s pride, a defining aspect of her personality, was evident in her reluctance to acknowledge her daughter\'s actions regarding the diadem, even to her fellow founders. This pride, however, did not extend to matters of lineage, as she openly opposed Slytherin\'s prejudiced stance on the admission of students from Muggle families into Hogwarts. This stance highlights her progressive views and a deep-seated belief in the value of all magical individuals, regardless of their heritage. Her wisdom and fairness in such matters further cemented her legacy as a champion of inclusivity and an advocate for the intellectual and moral advancement of the wizarding community.'
            ]
        },
    ] || name == 'Slytherin' && [
        {
            title: 'Traits',
            imageUrl: Slytherin_icon,
            alt:'A silver shield with detailed edging, featuring a green serpent curled on a dark green background, with a clear backdrop.',
            contentLines: [
                'Slytherins tended to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also had highly developed senses of self-preservation. This means that Slytherins tended to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done.',
                'According to Albus Dumbledore, the qualities which Salazar valued in the students he had chosen included cleverness, resourcefulness, determination, and "a certain disregard for the rules". Dumbledore noted that all of these were qualities possessed by Harry Potter, who was a Gryffindor but was almost placed in Slytherin.',
                'Slytherins tended to take charge and possessed strong leadership skills. They were often self-assured and confident of their own competence and can be very loyal.',
                'Another characteristic some Slytherins share was a tendency towards deep, unrequited love. Severus Snape and the Bloody Baron held abiding but unreturned feelings for Lily Evans and Helena Ravenclaw, respectively.[24][25] Although some Slytherins, such as Tom Riddle, were incapable of feeling love at all, those that did were known to cherish their passion abidingly and unconditionally, although often tragically due to an inability to act appropriately on their feelings. Interestingly, Bellatrix Lestrange held feelings for Tom Riddle himself, which was a factor in her fanatical devotion to the Death Eaters; although Lord Voldemort was incapable of loving her in return, the existence of Delphini suggests that there was at least some kind of intimacy between them.'
            ]
        },
        {
            title: 'Founder',
            imageUrl: Slytherin_founder,
            alt:'Portrait of an elderly man with a long beard, wearing a dark gray robe and cloak, with a pendant around his neck, standing in a vaulted hallway.',
            contentLines: [
                'Salazar Slytherin was known to possess great cunning and determination, qualities which he prized in students of Slytherin House. At one point, the Sorting Hat referred to him as "power-hungry Slytherin". He seemed to stop at nothing to get what he wanted, which was proven when he constructed the Chamber of Secrets to purge Muggle-borns from the school, despite the fact that the other founders disagreed with his beliefs. This unrepentant ruthlessness mixed with his pure-blood supremacist views would be adopted by numerous descendants of his, the infamous Lord Voldemort most of all.',
                'Slytherin was also quite proud and vain, as he went to the trouble of immortalising his image in the Chamber of Secrets in the form of a titanic statue standing several dozen feet tall, something that the other three founders were never known to have done. An effigy of such proportions would certainly reflect a grandiose image of oneself. This love of grandeur was apparently passed onto his bloodline as well, as the descending Gaunt bloodline ended up squandering their fortune for self-indulgent lavishness long before the generation of Marvolo, who continued to flaunt the little heirlooms he had left in front of others.',
                'Slytherin was said to be one of the greatest wizards of his age, with extensive magical abilities, particularly in Legilimency. When considering sorting a student into Slytherin, the Sorting Hat looked for Slytherin\'s traits in the student, including cunning, determination, ambition, and resourcefulness.'
            ]
        },
    ];

    return (
        <main id="house-main" className={name.toLowerCase()}>
            <h2 className={name.toLowerCase()}>{name}</h2>
            {panelData.map((panel, index) => (
                <Panel 
                    key={index}
                    title={panel.title}
                    imageUrl={panel.imageUrl}
                    alt={panel.alt}
                    contentLines={panel.contentLines}
                    houseName={name.toLowerCase()}
                />
            ))}
        </main>
    );
}

export default House;
