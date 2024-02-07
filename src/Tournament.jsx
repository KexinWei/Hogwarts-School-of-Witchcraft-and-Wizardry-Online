import Page from './Page.jsx';
import Cup from './assets/TriwizardCup-2.webp'

function Tournament() {
    return (
        <main id="tournament-main">
            <Page
                title={'Triwizard Tournament'}
                imageUrl={Cup}
                alt={'A mystical goblet with blue flames on a pedestal, surrounded by magical, swirling patterns on the floor in a dimly lit room.'}
                contentLines={[
                    'The Triwizard Tournament was established approximately seven-hundred years ago as a friendly competition between the wizarding schools the Hogwarts School of Witchcraft and Wizardry, the Beauxbatons Academy of Magic, and the Durmstrang Institute. Held every five years, the competition would be hosted by each school in turn, the judges for the Tournament comprising the headmasters or headmistresses of the schools.',
                    'There had been at least 125 editions of the Tournament: Hogwarts had 63 wins, and Beauxbatons had 62.',
                    'Due to the risks involved in overcoming the extremely dangerous tasks, and an increasing number of deaths, the Tournament was eventually discontinued at some point in or after the 1790s. Multiple attempts had been made to revive the Tournament, but none succeeded until the 1994–1995 school year, when it was held at Hogwarts Castle.',
                    'Despite a new set of rules imposed to prevent any more deaths, a champion nevertheless died at the end, though this only occurred due to the tournament being sabotaged.'
                ]}
            />
        </main>
    );
}

export default Tournament;