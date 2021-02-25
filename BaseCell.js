class neuron{
  
  //expects a function of weights
  constructor(){
    this.inputWeights = null;
    this.output = true;
    this.outputDecay = null;
    this.decayCounter = 0;
  }
  
  //accepts array of values for calulation 
  checkInput(input){
    this.output = this.inputWeights;
  }
  
  //returns if the neuron is in a state of fire 
  ouputVal(){
    let result = this.output;
    this.output = this.outputDecay;
    return result;
  }
  
  //updates function to calculate output
  updateInputWeights(mutate){
    this.inputWeights = mutate;
  }
  
  //updates the function to decay the output
  updateOutputDecay(mutate){
    this.outputDecay = mutate;
    console.log("here");
  }
}

let thing = new neuron();
thing.updateInputWeights("some value");
thing.updateOutputDecay("some other value");

console.log(thing.checkInput());
console.log(thing.ouputVal());
console.log(thing.outoutDecay);
