const markov = require("./markov");
let MarkovMachine = markov.MarkovMachine;


describe ("test makeText function", function(){
    test("get total w/o discount", function () {
        
        let text = "The hat is green so green"
        let mM = new MarkovMachine(text);

        let chain = mM.chain;

        expect(chain).toEqual({"The": ["hat"], "hat": ["is"], "is": ["green"], "green": ["so", null], "so": ["green"]});
      });
})