import Main from './main';

test('This is a sample', () => {
    const testMain = new Main();
    expect(testMain.getTest()).toBe(1);
});
