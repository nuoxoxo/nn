export const printer = (node: any | null = null) => {

    if ( !node ) {
        console.log()
        return
    }
    console.log( '(printing)\t', node, ` (${ typeof node })` )
}

