import forEach from './mock'

it('Should check that callback method is called', () => {
    const mockCallback = jest.fn();

    forEach([1,2], mockCallback)

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(1);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(2);
})