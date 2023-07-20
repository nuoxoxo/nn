var NamePrinter = () => { // PascalCasing: a react convention

    const names: string[] = [
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

    const name: string = names[ Math.floor(Math.random() * names.length) ]
    const offset: number = 42
    const offsetInverted: number = 255 - offset
    const tubeColor = {
        color: 'rgb(' 
            + Math.round(Math.random() * offsetInverted + offset) + ',' 
            + Math.round(Math.random() * offsetInverted + offset) + ',' 
            + Math.round(Math.random() * offsetInverted + offset) + ','
            + '1)',
        fontWeight: 'bold',
    };
    console.log(tubeColor['color'])

    return <span className='tube' style={ tubeColor }>{name}</span>
};

export default NamePrinter
