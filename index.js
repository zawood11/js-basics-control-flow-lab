function scuberGreetingForFeet(feet){
  let result;
  if (feet <= 400) {
    result = 'This one is on me!';
  }
  else if (feet > 2500) {
    result = 'No can do.';
  }
  else if (feet > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  return result;
}

function ternaryCheckCity(city){
  const result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

  return result;
}

function switchOnCharmFromTip(tip){
  let result;
  if (tip === 'generous') {
    result = 'Thank you so much.';
  }
  else if (tip === 'not as generous') {
    result = 'Thank you.';
  }
  else {
    result = 'Bye.';
  }

  return result;
}