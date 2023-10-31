const { MarkovMachine } = require("./markov");

describe('get Text', function () {
    test('get string of words', function () {
        let mm = new MarkovMachine('I would not like them. Here or there. I would not lie them. Anywhere. I do not like.Green eggs andham.')

        expect(mm.makeText(numWords = 10)).toEqual(expect.any(String))
    })
});