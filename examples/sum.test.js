// Standard
//const sum = require('./sum')

// Using babelrc for es2015 support
import sum from './sum'

it('sum should correctly add values', () => {
    const result = sum(1,9)
    expect(result).toEqual(10)
})

it('Snapshottesting', () => {
    const result = sum(20, 40)
    expect(result).toMatchSnapshot()
})