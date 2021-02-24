var colorifier = (string) => {
  var leftOverLetters = string.length % 6;
  var increment = Math.floor(string.length / 6);
  var outputString = '';

  var i = 0;
  while (i < string.length) {
    var index = leftOverLetters > 0 ? i + increment + 1 : i + increment;
    outputString +=`%c${string.slice(i, index)}`;
    i += leftOverLetters > 0 ? increment + 1 : increment;
    leftOverLetters--;
  }

  styles = [
    "background: linear-gradient(90deg, rgb(255, 0, 0), rgb(255, 255, 0));line-height: 40px;color: white;text-shadow: 2px 2px 1px black",
    "background: linear-gradient(90deg, rgb(255, 255, 0), rgb(0, 255, 0));line-height: 40px;color: white;text-shadow: 2px 2px 1px black",
    "background: linear-gradient(90deg, rgb(0, 255, 0), rgb(0, 255, 255));line-height: 40px;color: white;text-shadow: 2px 2px 1px black",
    "background: linear-gradient(90deg, rgb(0, 255, 255), rgb(0, 0, 255));line-height: 40px;color: white;text-shadow: 2px 2px 1px black",
    "background: linear-gradient(90deg, rgb(0, 0, 255), rgb(255, 0, 255));line-height: 40px;color: white;text-shadow: 2px 2px 1px black",
    "background: linear-gradient(90deg, rgb(255, 0, 255), rgb(255, 0, 0));line-height: 40px;color: white;text-shadow: 2px 2px 1px black"
  ]

  console.log(outputString, ...styles);
  return;
};