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
  age: 42,
  addr: {
    street: 'Exit on Main St',
    city: 'Alphaville',
    country: 'Moonlight Kingdom',
    addr2: 'Game Over'
  },
  namePerson: 'Pearl Jam'
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


// use ... to make 2 objects become 1

const animal = {
  first: 'Deau',
  last: 'Ville',
  age: 21,
  addr: {
    street: 'Sunset Blvd.',
    city: 'Los Angeles',
    country: 'California'
  },
  nameAnimal: 'Deauville'
}

const combined = { ...person, ...animal }

printer( combined )

