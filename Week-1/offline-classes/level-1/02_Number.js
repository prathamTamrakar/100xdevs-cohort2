// parseInt() and parseFloat() functions are used to convert strings to numbers. parseInt() function converts a string to an integer and parseFloat() function converts a string to a floating-point number.

function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");
  