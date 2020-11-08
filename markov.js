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

    let chain = {};
    // pick a starting word randomly
    //pick a word from words array
    // find all words that can come after that word

    for(let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1];

      if(!chain[word]){
        chain[word] = [];
      } 
      if(!nextWord){
        nextWord = null;
      }

      chain[word].push(nextWord);
      this.chain = chain;
  }
}

// pick one of those next-words randomly
// if we picked null, we’ve reached the end of the chain, so stop
// otherwise, restart at step 1
    
  /** return random text from chains */

  makeText(numWords = 100) {

    let chain = this.chain;
    let newText = "";
      
    for (let i = 0; i < numWords; i++){ 

      let firstWord = this.words[Math.floor(Math.random() * this.words.length)];

      if(firstWord === null){
        firstWord = this.words[Math.floor(Math.random() * this.words.length)];
      } 

      let nextWord = chain[firstWord][Math.floor(Math.random() * chain[firstWord].length)];
      
      if (nextWord === null) {
        
        newText = newText.trim();
        newText = newText.charAt(0).toUpperCase() + newText.slice(1) + ".";
        console.log(newText)
        return newText
      } else {
        newText = newText + " " + firstWord + " " + nextWord;
      }
    }//end of for
   
    newText = newText.trim();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1) + ".";
    console.log(newText);
    return newText;
  }//end of make text
 }

// let mM = new MarkovMachine("Hannah is anna");


module.exports = {
  MarkovMachine: MarkovMachine
};

