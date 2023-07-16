export const printer = ( ...nodes ) => {

    if ( nodes.length === 0 ) {
        console.log()
        return
    }
    for (let node of nodes) {
        console.log( '(printing)\t', node, ` (${ typeof node })` )
    }
    console.log()
}

