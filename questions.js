function Question(question, ans1, ans2, ans3, ans4, correct) {
  this.question = question;
  this.answers = [ans1, ans2, ans3, ans4];
  this.answerCorrect = correct;
}

var q1 = new Question('Approximately how many degrees can a three-toed sloth rotate its head?', '90&deg', '150&deg', '210&deg', '270&deg', 3);
var q2 = new Question('How many toes does a two-toed sloth have?', 'none', 1, 2, 3, 3);


var list = [q1, q2];
