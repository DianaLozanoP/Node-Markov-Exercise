/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/

    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words.filter(c => c !== "");
        this.makeChains();
    }

    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

    makeChains() {
        let chain = {}
        for (let i = 0; i <= this.words.length; i++) {
            if (chain[this.words[i]]) {
                if (this.words[i + 1] === undefined) {
                    words[i + 1] = null;
                }
                chain[this.words[i]].push(this.words[i + 1]);
            }
            else {
                chain[this.words[i]] = [this.words[i + 1]]
            }
        }
        delete chain.undefined
        return chain;
    }


    /** return random text from chains */

    makeText(numWords = 100) {
        let text = [];
        let chain = this.makeChains();
        let keys = Object.keys(chain);
        let randomNum = (Math.floor(Math.random() * keys.length))
        let firstWord = keys[randomNum];
        text.push(firstWord);
        for (let i = 0; i <= numWords; i++) {
            let word = text[i]
            let choicesArray = chain[word]
            let ranN = (Math.floor(Math.random() * choicesArray.length))
            text.push(choicesArray[ranN]);
        }
        let finalText = String(text)
        let ft = finalText.replaceAll(',', ' ')
        console.log(ft)
    }
}

let mm = new MarkovMachine('I like green eggs and ham! I do! I like them, Sam-I-am! And I would eat them in a boat! And I would eat them with a goat... And I will eat them in the rain. And in the dark. And on a train. And in a car. And in a tree. They are so goodm so goodm you see!')
mm.makeText(numWords = 10);

module.exports = { MarkovMachine }