var katzDeliLine = [];

function takeANumber(katzDeliLine,newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var output = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  for (let i = 0; i < katzDeliLine.length; i++) {
    output += (i + 1) + ". " + katzDeliLine[i] + ", ";
  }
  
  
  return "The line is currently: " + output.slice(0,-2);
}


