import React from 'react';
import Work from '../Work';
import image from '../../assets/images/circitorigin.jpg';
import marvelproject from '../../assets/images/marvelscreenshot1.png'
import statstracker from '../../assets/images/stattracker.jpg'
import gamerslinkup from '../../assets/images/gamerslinkup'
function Portfolio(props) {
    return (
        <div>
            <Work
            name='Marvel Project'
            repoLink='https://github.com/lilslash/MarvelProject'
            liveLink='https://lilslash.github.io/MarvelProject/'
            projectImg={marvelproject} 
            />
            <Work
            name='Stats Tracker'
            repoLink='https://github.com/lilslash/Stats-Tracker'
            liveLink='https://super-statz.herokuapp.com/'
            projectImg={statstracker} 
            />
            <Work
            name='Gamers Link Up'
            repoLink='https://github.com/bslindsa/gamers-link-up'
            liveLink='https://gamers-link-up.herokuapp.com/'
            projectImg={gamerslinkup} 
            />
        </div>
        
    )
}

export default Portfolio;