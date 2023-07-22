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
        userSelect: 'none',
        cursor: 'pointer',
    }
}

export default GetRandomColorCSS