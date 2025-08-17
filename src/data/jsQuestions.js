// export default [
//   {
//     question: 'What is the output of `typeof null`?',
//     options: ['null', 'object', 'undefined', 'number'],
//     answer: 'object',
//     explanation: "In JavaScript, the typeof null is 'object' due to a historical bug.",
//   },
//   {
//     question: 'Which method converts JSON to a JavaScript object?',
//     options: ['JSON.stringify()', 'JSON.parse()', 'parse.JSON()', 'stringify.JSON()'],
//     answer: 'JSON.parse()',
//     explanation: 'JSON.parse() is used to convert a JSON string to a JS object.',
//   },
  // {
  //   question: 'What is the output of `[] + []` in JavaScript?',
  //   options: ['0', 'undefined', '"" (empty string)', 'NaN'],
  //   answer: '"" (empty string)',
  //   explanation:
  //     'In JavaScript, adding two empty arrays results in an empty string due to type coercion.',
  // },
  // {
  //   question: 'Which keyword is used to declare a constant in JavaScript?',
  //   options: ['let', 'const', 'var', 'constant'],
  //   answer: 'const',
  //   explanation: '`const` is used to declare variables that cannot be reassigned.',
  // },
  // {
  //   question: 'What will `NaN === NaN` return?',
  //   options: ['true', 'false', 'undefined', 'Error'],
  //   answer: 'false',
  //   explanation: 'NaN is not equal to itself in JavaScript. Use Number.isNaN() to check.',
  // },
  // {
  //   question: 'What is a closure in JavaScript?',
  //   options: [
  //     'A function that returns another function',
  //     'A function having access to its outer function scope even after the outer function has returned',
  //     'A function that runs when the page loads',
  //     'A loop inside a function',
  //   ],
  //   answer:
  //     'A function having access to its outer function scope even after the outer function has returned',
  //   explanation:
  //     'Closures allow inner functions to access variables from outer functions even after they’ve executed.',
  // },
  // {
  //   question: 'Which of the following is NOT a JavaScript data type?',
  //   options: ['String', 'Boolean', 'Float', 'Undefined'],
  //   answer: 'Float',
  //   explanation:
  //     'JavaScript only has one number type (Number), and "float" is not a separate type.',
  // },
  // {
  //   question: 'Which array method creates a new array with all elements that pass a test?',
  //   options: ['map()', 'filter()', 'forEach()', 'reduce()'],
  //   answer: 'filter()',
  //   explanation:
  //     '`filter()` returns a new array with only the elements that pass the provided function test.',
  // },
  // {
  //   question: 'What is the default value of an uninitialized variable in JavaScript?',
  //   options: ['null', '0', 'undefined', 'false'],
  //   answer: 'undefined',
  //   explanation: 'When a variable is declared but not assigned, it holds the value `undefined`.',
  // },
  // {
  //   question: 'Which of these is a falsy value in JavaScript?',
  //   options: ['"0"', '[]', 'false', '{}'],
  //   answer: 'false',
  //   explanation: '`false` is a falsy value. Others like `"0"` and `[]` are truthy.',
  // },
// ]


export const questions = {
  javascript: [
    {
      question: 'What does "===" check in JS?',
      options: ['Value only', 'Type only', 'Value & Type', 'None'],
      answer: 'Value & Type',
      explanation: '=== checks both value and type equality.',
    },
    {
      question: 'Which is not a JS data type?',
      options: ['String', 'Number', 'Boolean', 'Element'],
      answer: 'Element',
      explanation: 'Element is part of DOM, not a JS data type.',
    },
  ],
  html: [
    {
      question: 'What does <a> tag do?',
      options: ['Link', 'Image', 'Heading', 'Script'],
      answer: 'Link',
      explanation: '<a> defines a hyperlink in HTML.',
    },
  ],
  css: [
    {
      question: 'Which property changes text color?',
      options: ['background', 'color', 'font-size', 'style'],
      answer: 'color',
      explanation: 'The `color` property changes the text color.',
    },
  ],
  vue: [
    {
      question: 'Which property changes text color?',
      options: ['background', 'color', 'font-size', 'style'],
      answer: 'color',
      explanation: 'The `color` property changes the text color.',
    },
  ],
  react: [
    {
      question: 'Which property changes text color?',
      options: ['background', 'color', 'font-size', 'style'],
      answer: 'color',
      explanation: 'The `color` property changes the text color.',
    },
  ],
}
