import sortit from './list'

it('Should correct sort the list', () => {
    const result = sortit(['b','c','a'])
    expect(result).toEqual(['a','b','c'])
})

it('Should correct sort the list', () => {
    const result = sortit(['b','c','a','👻'])   // cmd + ctrl + space
    expect(result).toMatchSnapshot()
})