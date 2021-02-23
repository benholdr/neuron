class{
  #inputWeights;
  #output = true;
  #outputDecay;
  #decayCounter = 0;
  
  //expects a function of weights
  constructor(mutate){
    this.inputWeights = mutate();
  }
  
  //accepts array of values for calulation 
  set checkInput(input){
    #output = this.#inputWeights(input);
  }
  
  //returns if the neuron is in a state of fire 
  get ouput (){
    result = this.#output;
    this.#output = outputDecay();
    return result;
  }
  
  //updates function to calculate output
  updateInputWeights(mutate){
    this.#inputWeights = mutate
  }
  
  //updates the function to decay the output
  updateOutputDecay(mutate){
    this.#outputDecay = mutate();
  }
}
