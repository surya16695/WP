var input = '{"q1":{"qtext":"JSON stands for JavaScript Object Notation", "choices": [{"optionText":"True", "isCorrect":"true", "feedback":"Good Job!"}, {"optionText":"False", "isCorrect":"false", "feedback":"Try Again!"}], "hint":["Think back to the introduction!"]},"q2":{"qtext":"JavaScript was originally called LivelyScript", "choices": [{"optionText":"True", "isCorrect":"false", "feedback":"Try Again!"}, {"optionText":"False", "isCorrect":"true", "feedback":"Good Job!"}], "hint":["Think back to the introduction!"]}}';
var questions = JSON.parse(input);

const myCustomDiv = document.createElement('div');

for(i=0;i<Object.keys(questions).length;i++) {
    const newElement = document.createElement('p');
    newElement.innerText = questions[i];
}

