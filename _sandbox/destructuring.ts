import { printer } from './_helpers'

//  array, spread

const colors = ['red', 21, 'green', 42, 'blue', 1024, 'yellow', 'orange', 'purple']
const [ a, b, x, y, ... rest ] = colors

printer( a )
printer( b )
printer( x )
printer( y )
printer()

printer( rest )
printer()

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

printer( first )
printer( last )
printer( city )
printer( country )
printer()

printer( street )
printer( addr2 )
printer()

printer( st )
printer( a2 )
printer()

