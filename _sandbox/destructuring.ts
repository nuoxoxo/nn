import { printer } from './_helpers'

//  array, spread, default

const colors = ['red', 21, 'green', 42, 'blue', 1024, 'yellow', 'orange', 'purple']
const [ a, b, x, y, ... rest ] = colors

printer( a, b, x, y )
printer( rest )

var doSomeMath = (a: number, b: number) => {

    return [ a + b, a * b, /* a / b */ ]
}

const [ sum, mult, div = '(empty)' ] = doSomeMath(2, 3)

printer( sum, mult, div )

//  object

const person = {
  first: 'Pearl',
  last: 'Jam',
  age: 30,
  addr: {
    street: 'Exit on Main St',
    city: 'Alphaville',
    country: 'Moonlight Kingdom',
    addr2: 'Game Over'
  }
}

const { first,
        last,
        age,
        addr: { city },
        addr: { country },
        addr: { street, addr2 },
        addr: { street: st, addr2: a2 }} = person

printer( first, last, city, country )

printer( street, addr2 )

printer( st, a2 )


