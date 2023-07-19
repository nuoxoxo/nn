var NamePrinter = () => { // PascalCasing: a react convention

    const names: string[] = [
        'Aurelius',
        'Valentina',
        'Augustus',
        'Cornelius',
        'Sebastian',
        'Alpha',
        'Constantine',
        'Alexandria',
        'Theodora',
        'Maximilian',
        'Octavius',
        'Omega'
    ]

    const name: string = names[ Math.floor(Math.random() * names.length) ]

    const colorOffset: number = 42
    const colorOffsetInverted: number = 255 - colorOffset

    const tubeStyle = {
        color: `rgb(${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${Math.round(Math.random() * colorOffsetInverted + colorOffset)},
                    ${1})`,
    };

    return <span className='tube' style={ tubeStyle }>Hello {name}</span>
};

export default NamePrinter
