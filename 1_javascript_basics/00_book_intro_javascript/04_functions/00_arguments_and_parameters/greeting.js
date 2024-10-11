let greetingMessage = "Good Morning!";

a("Good Evening");
b(); // => 'Good Evening'

let a = function greetPeople() {
  console.log(greetingMessage);
}

let b = function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}