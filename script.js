//Task2
// declear numbers array
const numbers = [10, 5, 2, 55, 25, 15, 75];
const calc = (arr) => {
  // chack array length
  if (arr.length) {
    // sum numbers using reduce methode
    const total = arr.reduce((prov, current) => prov + current, 0);
    // average numbers
    const average = total / arr.length;
    // return value
    return `Total in array: ${total}
            average in array: ${average}`;
  } else {
    return "Array Is Empty";
  }
};
// print result
console.log(calc(numbers));

//==============================================================================

//Task3
// declear words array
const words = [
  "my",
  "sub",
  "must",
  "my",
  "top",
  "down",
  "right",
  "top",
  "m",
  "right",
];

// sultion #1 using for each method
const removeDuplicates = (items) => {
  if (items.length) {
    const newWords = [];
    items.forEach((word) => {
      if (!newWords.includes(word)) {
        newWords.push(word);
      }
    });
    return newWords;
  } else {
    return "Array Is Empty";
  }
};

// print result
console.log(removeDuplicates(words));

// sultion #2 using set Obj
const removeDuplicatesBySet = (items) => {
  if (items.length) {
    return [...new Set(items)];
  } else {
    return "Array Is Empty";
  }
};

// print result
console.log(removeDuplicatesBySet(words));
