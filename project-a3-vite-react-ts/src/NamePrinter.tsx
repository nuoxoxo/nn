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
    const colorOffset: number = 42
    const colorOffsetInverted: number = 255 - colorOffset
    const tubeColor = {
        color: `rgb(${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${1})`,
        fontWeight: 'bold',
    };

    return <span className='tube' style={ tubeColor }>{name}</span>
};

export default NamePrinter
