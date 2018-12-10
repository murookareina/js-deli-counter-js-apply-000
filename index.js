var katzDeliLine = [];

function takeANumber(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    katzDeliLine.push(1);
  } else {
  katzDeliLine.push(katzDeliLine[katzDeliLine.length-1] + 1);
  return `Welcome. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
   var firstPerson = katzDeliLine.shift();
   return `Currently serving ${firstPerson}.`;
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."; 
  } else {
    var current = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      let name = katzDeliLine[i]
      current.push(` ${i+1}. ${name}`);
    }
    return `The line is currently:${current}`;
  }
  
}