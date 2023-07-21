import React, { useState } from 'react' // Import useState hook

var NamePrinter = () => {

    const names = [
        'Wahou !',
        'L\’ultima notte di Amore (Dernière nuit à Milan)',
        'The Pope\'s Exorcist (L\'exorciste du Vatican)',
        'Le principal',
        'About My Father (Mon père et moi)',
        'Sick of Myself',
        'The Boogeyman (Le Croque-Mitaine)',
        'L\'amour et les forêts',
        'Umami',
        'Jeanne du Barry',
        'No Hard Feelings (Le Challenge)',
        'Asteroid City'
    ]

    // Define state variables to keep track of the current name and style
    const [name, setName] = useState(names[Math.floor(Math.random() * names.length)])
    const [tubeColor, setTubeColor] = useState(getRandomTubeColor())

    // Function to generate a random tube color
    function getRandomTubeColor() {
        const offset = 42
        const offsetInverted = 255 - offset
        return {
            color: 'rgb('
                + Math.round(Math.random() * offsetInverted + offset) + ','
                + Math.round(Math.random() * offsetInverted + offset) + ','
                + Math.round(Math.random() * offsetInverted + offset) + ','
                + '1)',
            fontWeight: 'bold',
            userSelect: 'none',
            cursor: 'pointer',
        }
    }

    // Function to handle the click event
    var handleOnClick = () => {

        setName(names[Math.floor(Math.random() * names.length)])
        setTubeColor(getRandomTubeColor())
    }

    console.log(tubeColor['color'])

    return (
        <span
            onClick={handleOnClick}
            className='tube'
            style={ tubeColor }>
            { name }
        </span>
    )
}

export default NamePrinter
