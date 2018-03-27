export function createOptionsFromObject(object) {
  const { answer, options } = object;
  const correctChoice = createCorrectChoice(answer);
  const incorrectChoices = createIncorrectChoices(options);
  const choices = [...correctChoice, ...incorrectChoices];

  //To do - avoid mutating the original array. This works because it's not the 
  //state or prop of a component, but it feels icky. I don't like it
  shuffleChoices(choices);
  return choices;
}

function createCorrectChoice(text){
  return createChoice(text, true)
}

function createIncorrectChoices(array){
  const incorrectChoices = array
    .map(choice => createChoice(choice, false));
  return incorrectChoices
}

export function shuffleChoices(array){
  let counter = array.length;
  //If elements still exist in original array
  while(counter > 0) {
    //Pick a random index
    let index = Math.floor(Math.random() * counter);
    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

function createChoice(text, isAnswer) {
  return {
    text,
    isAnswer
  }
}