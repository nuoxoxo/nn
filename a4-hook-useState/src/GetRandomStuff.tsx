const GetRandomColorCSS = () => {

    const offset = 42
    const offsetInverted = 255 - offset

    return {
        color: 'rgb('
            + Math.round(Math.random() * offsetInverted + offset) + ','
            + Math.round(Math.random() * offsetInverted + offset) + ','
            + Math.round(Math.random() * offsetInverted + offset) + ','
            + '1)',
        fontWeight: 'bold',
        cursor: 'pointer',
        outline: 'none'
    }
}

const GetRandomPosShort = () => {

    return Math.floor(Math.random() * 32768)
}

const GetRandomPosInt = () => {

    return Math.floor(Math.random() * 2147483648)
}

export { GetRandomColorCSS, GetRandomPosShort, GetRandomPosInt }
