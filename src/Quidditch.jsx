import Page from './Page.jsx';
import Card from './Card.jsx';
import Snitch from './assets/GoldenSnitch_PM.webp'
import Gryffindor from './assets/Gryffindor_Badge.webp';
import Hufflepuff from './assets/Hufflepuff_Badge.webp';
import Ravenclaw from './assets/Ravenclaw_Badge.webp';
import Slytherin from './assets/Slytherin_Badge.webp';
import './Quidditch.css';

function Quidditch() {
    const houseData = [
        {
            name: 'Gryffindor',
            imageUrl: Gryffindor,
            alt: 'A distressed Gryffindor Quidditch shield with a lion emblem, in red and silver colors, with text \'Gryffindor Quidditch\'.',
            content: 'Gryffindor is represented by scarlet colors and a lion emblem.'
        },
        {
            name: 'Hufflepuff',
            imageUrl: Hufflepuff,
            alt: 'A weathered Hufflepuff Quidditch badge featuring a badger on a yellow background with the words \'Hufflepuff Quidditch\' around the edge.',
            content: 'Hufflepuff features canary yellow hues and a badger as its symbol.'
        },
        {
            name: 'Ravenclaw',
            imageUrl: Ravenclaw,
            alt: 'A vintage Ravenclaw Quidditch badge with an eagle emblem on a blue distressed background and the words \'Ravenclaw Quidditch\'.',
            content: 'Ravenclaw is characterized by blue colors and an eagle emblem.'
        },
        {
            name: 'Slytherin',
            imageUrl: Slytherin,
            alt: 'An aged Slytherin Quidditch shield with a silver serpent on a green textured background, and \'Slytherin Quidditch\' text.',
            content: 'Slytherin is distinguished by green colors and a serpent symbol.'
        },
    ];

    return (
        <main id="quidditch-main">
            <Page
                title={'Quidditch'}
                imageUrl={Snitch}
                alt={'A golden ball with wings, the Golden Snitch, in motion against a white background.'}
                contentLines={[
                    'Teams and Positions: Quidditch is played by two teams, each consisting of seven players. These players are divided into four distinct positions. There are three Chasers per team, whose role is to score goals by passing a ball called the Quaffle through one of the three hoops at the opposing team\'s end, earning 10 points per goal. The Keeper, one per team, defends the hoops to prevent the opposing Chasers from scoring. Two Beaters per team are responsible for managing the Bludgers, enchanted balls that fly around trying to knock players off their brooms; the Beaters use bats to redirect the Bludgers away from their team and towards their opponents. Finally, each team has a Seeker, whose sole task is to catch the Golden Snitch, a small, fast, winged ball that earns the team 150 points and ends the game when caught.',
                    'The Balls: Quidditch involves three types of balls. The Quaffle, a red ball used by Chasers to score goals, is the primary ball in play. The Bludgers, two black balls enchanted to fly around and disrupt the game, are controlled by Beaters using bats. The Golden Snitch, a tiny gold ball with wings, is the game-changer. It flies around the field independently, and its capture not only brings a significant number of points but also signals the end of the game.',
                    'The Field and Scoring: The game is played on an oval-shaped field with three tall goalposts of varying heights at each end. Players score by throwing the Quaffle through any of the opponent\'s hoops. Each successful goal is worth 10 points. The game\'s pace is fast and dynamic, with players flying on broomsticks and engaging in complex maneuvers.',
                    'Game End and the Snitch: The most unique aspect of Quidditch is the role of the Golden Snitch. The game ends when the Seeker catches this ball, which adds 150 points to the team\'s total score. This often determines the winning team, but not always – if a team is trailing by more than 150 points, catching the Snitch could still result in a loss.',
                    'Rules and Fouls: Quidditch has a wide array of rules and fouls, though fouls are infrequently called. Some examples include Blatching (flying to collide with another player), Blagging (grabbing another player\'s broom tail), and Cobbing (using elbows excessively). A referee oversees the game, enforcing rules and awarding penalty shots for fouls.'
                ]}
            />
            <h3>Teams</h3>
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

export default Quidditch;