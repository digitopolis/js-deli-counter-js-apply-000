var customerNumber = 0;

function takeANumber(line, newPerson) {
  customerNumber++;
//  var lineLength = line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ` + customerNumber + ` of the day.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var numberedLine = [];
    var position = 1;
    var i;
    for (i = 0; i < line.length; i++) {
      numberedLine.push(` ` + position + `. ${line[i]}`);
      position++;
    }
    return "The line is currently:" + numberedLine.toString();
  }
}