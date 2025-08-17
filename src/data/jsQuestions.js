export const questions = {
  javascript: [
    {
      question: 'What is the output of `console.log([] == false)`?',
      options: ['true', 'false', 'undefined', 'Error'],
      answer: 'true',
      explanation:
        '[] is coerced to "" which becomes 0, and 0 == false evaluates to true due to type coercion.',
    },
    {
      question: 'Which of the following is NOT true about `let` and `const`?',
      options: [
        'They are block-scoped',
        'They support hoisting but cannot be accessed before initialization',
        'They can be redeclared in the same scope',
        'They are introduced in ES6',
      ],
      answer: 'They can be redeclared in the same scope',
      explanation:
        'Variables declared with let/const cannot be redeclared in the same block scope.',
    },
    {
      question: 'What will the following code output?\n\n```js\nconsole.log(typeof NaN);\n```',
      options: ['NaN', 'undefined', 'number', 'object'],
      answer: 'number',
      explanation: 'In JavaScript, NaN (Not-a-Number) is of type number.',
    },
    {
      question:
        'Which concept allows a function to access variables from its outer scope even after that scope has closed?',
      options: ['Hoisting', 'Closure', 'Currying', 'Prototyping'],
      answer: 'Closure',
      explanation:
        'Closures allow inner functions to remember and access variables from the outer function scope.',
    },
    {
      question: 'What is the difference between `map()` and `forEach()` in arrays?',
      options: [
        'map() returns a new array, forEach() returns undefined',
        'map() mutates the original array, forEach() does not',
        'Both return new arrays',
        'forEach() is faster than map()',
      ],
      answer: 'map() returns a new array, forEach() returns undefined',
      explanation:
        '`map()` creates a new array with transformed values, while `forEach()` is only for iteration.',
    },
    {
      question: 'What will this code output?\n\n```js\nconsole.log(0.1 + 0.2 === 0.3);\n```',
      options: ['true', 'false', 'undefined', 'Error'],
      answer: 'false',
      explanation:
        'Due to floating-point precision issues, 0.1 + 0.2 results in 0.30000000000000004.',
    },
    {
      question: 'Which statement about async/await is correct?',
      options: [
        'await can only be used inside async functions',
        'await pauses execution of the whole program',
        'async functions always block the main thread',
        'await works with any function',
      ],
      answer: 'await can only be used inside async functions',
      explanation:
        'await can only be used inside async functions, and it pauses only within that function, not the entire program.',
    },
    {
      question: 'What is the prototype chain in JavaScript?',
      options: [
        'A way to implement classical inheritance',
        'An internal property that links objects for inheritance',
        'A chain of variables inside closures',
        'A special array that stores all object properties',
      ],
      answer: 'An internal property that links objects for inheritance',
      explanation:
        'The prototype chain is how JavaScript objects inherit properties/methods from other objects.',
    },
    {
      question:
        'What will happen?\n\n```js\nfunction test() {\n  console.log(a);\n  var a = 5;\n}\ntest();\n```',
      options: ['5', 'undefined', 'ReferenceError', 'null'],
      answer: 'undefined',
      explanation:
        'Due to hoisting, `var a` is declared at the top but not initialized, so `console.log(a)` outputs undefined.',
    },
    {
      question: 'What is the main difference between deep copy and shallow copy in JavaScript?',
      options: [
        'Shallow copy copies primitive values only, deep copy copies objects',
        'Shallow copy copies references for nested objects, deep copy creates completely new copies',
        'They are the same',
        'Deep copy is faster than shallow copy',
      ],
      answer:
        'Shallow copy copies references for nested objects, deep copy creates completely new copies',
      explanation:
        'Shallow copy duplicates only the top-level properties, while nested objects still reference the same memory. Deep copy creates entirely new independent objects.',
    },
  ],
  html: [
    {
      question: 'What does the <a> tag do?',
      options: ['Link', 'Image', 'Heading', 'Script'],
      answer: 'Link',
      explanation: '<a> defines a hyperlink in HTML.',
    },
    {
      question: 'Which tag is used to define the largest heading in HTML?',
      options: ['<h6>', '<h1>', '<heading>', '<head>'],
      answer: '<h1>',
      explanation: '<h1> defines the largest heading, while <h6> defines the smallest.',
    },
    {
      question: 'Which attribute is used to provide an alternative text for an image?',
      options: ['src', 'alt', 'title', 'href'],
      answer: 'alt',
      explanation: 'The alt attribute provides alternative text if the image cannot be displayed.',
    },
    {
      question: 'What does the <br> tag do?',
      options: ['Line break', 'Bold text', 'Page break', 'New paragraph'],
      answer: 'Line break',
      explanation: '<br> inserts a line break in the text.',
    },
    {
      question: 'Which tag is used to create a numbered list?',
      options: ['<ol>', '<ul>', '<li>', '<list>'],
      answer: '<ol>',
      explanation: '<ol> creates an ordered (numbered) list, while <ul> creates an unordered list.',
    },
    {
      question: 'Which HTML element is used to play video files?',
      options: ['<media>', '<video>', '<embed>', '<movie>'],
      answer: '<video>',
      explanation: '<video> is used to embed video content in HTML.',
    },
    {
      question: 'Which tag is used to insert a table row?',
      options: ['<th>', '<tr>', '<td>', '<table-row>'],
      answer: '<tr>',
      explanation: '<tr> defines a table row, while <td> defines a table cell.',
    },
    {
      question: 'What does the <title> tag define in HTML?',
      options: ['Main heading', 'Website link', 'Browser tab title', 'Tooltip'],
      answer: 'Browser tab title',
      explanation: '<title> specifies the title of the document shown in the browser tab.',
    },
    {
      question: 'Which tag is used to embed an image in HTML?',
      options: ['<picture>', '<image>', '<img>', '<src>'],
      answer: '<img>',
      explanation: '<img> is used to embed images in a webpage.',
    },
    {
      question: 'Which input type is used to create a checkbox?',
      options: ['radio', 'check', 'box', 'checkbox'],
      answer: 'checkbox',
      explanation: '<input type="checkbox"> creates a checkbox input.',
    },
  ],
  css: [
    {
      question: 'Which property changes text color?',
      options: ['background', 'color', 'font-size', 'style'],
      answer: 'color',
      explanation: 'The `color` property changes the text color.',
    },
    {
      question: 'Which property is used to change the background color?',
      options: ['color', 'background-color', 'bg', 'background'],
      answer: 'background-color',
      explanation: 'The `background-color` property changes the background color of an element.',
    },
    {
      question: 'Which property controls the size of text?',
      options: ['font-style', 'font-size', 'text-size', 'font-weight'],
      answer: 'font-size',
      explanation: 'The `font-size` property controls the size of text.',
    },
    {
      question: 'How do you make text bold in CSS?',
      options: ['font-style', 'text-decoration', 'font-weight', 'font-bold'],
      answer: 'font-weight',
      explanation: 'The `font-weight` property is used, with value `bold` to make text bold.',
    },
    {
      question: 'Which property is used to change the font of text?',
      options: ['font-style', 'font-family', 'text-font', 'font-size'],
      answer: 'font-family',
      explanation: 'The `font-family` property specifies the font of the text.',
    },
    {
      question: 'Which property is used to underline text?',
      options: ['font-style', 'text-decoration', 'text-style', 'line-style'],
      answer: 'text-decoration',
      explanation:
        'The `text-decoration` property with value `underline` is used to underline text.',
    },
    {
      question: 'Which CSS property is used to control spacing between lines of text?',
      options: ['letter-spacing', 'line-height', 'word-spacing', 'spacing'],
      answer: 'line-height',
      explanation: 'The `line-height` property specifies the space between lines of text.',
    },
    {
      question: 'Which property is used to align text in CSS?',
      options: ['text-align', 'vertical-align', 'align', 'position'],
      answer: 'text-align',
      explanation:
        'The `text-align` property is used to align text (left, right, center, justify).',
    },
    {
      question: 'Which property is used to set the space inside an element?',
      options: ['margin', 'padding', 'spacing', 'border'],
      answer: 'padding',
      explanation:
        'The `padding` property sets the space inside the element, between content and border.',
    },
    {
      question: 'Which property is used to set the space outside an element?',
      options: ['margin', 'padding', 'border-spacing', 'gap'],
      answer: 'margin',
      explanation:
        'The `margin` property sets the space outside the element, creating distance from others.',
    },
  ],
  vue: [
    {
      question: 'What directive is used for conditional rendering in Vue?',
      options: ['v-for', 'v-if', 'v-bind', 'v-model'],
      answer: 'v-if',
      explanation: '`v-if` is used to conditionally render elements in Vue.',
    },
    {
      question: 'Which directive is used for two-way data binding?',
      options: ['v-if', 'v-model', 'v-bind', 'v-for'],
      answer: 'v-model',
      explanation: '`v-model` creates two-way data binding between input fields and data.',
    },
    {
      question: 'Which Vue directive is used to loop through items?',
      options: ['v-loop', 'v-for', 'v-each', 'v-repeat'],
      answer: 'v-for',
      explanation: '`v-for` is used to render a list of items from an array or object.',
    },
    {
      question: 'Which directive is used to bind attributes dynamically?',
      options: ['v-bind', 'v-model', 'v-for', 'v-on'],
      answer: 'v-bind',
      explanation: '`v-bind` dynamically binds data to attributes like `src` or `class`.',
    },
    {
      question: 'Which directive is shorthand for v-bind?',
      options: ['@', ':', '#', '$'],
      answer: ':',
      explanation: 'The `:` is shorthand syntax for `v-bind` in Vue.',
    },
    {
      question: 'Which directive is shorthand for v-on?',
      options: ['@', ':', '#', '%'],
      answer: '@',
      explanation: 'The `@` symbol is shorthand for `v-on` in Vue to listen to events.',
    },
    {
      question: 'What is the root instance property in every Vue app?',
      options: ['el', 'data', 'methods', 'app'],
      answer: 'el',
      explanation: 'The `el` property specifies the root DOM element the Vue instance controls.',
    },
    {
      question: 'Where do you define component state in Vue 3 Composition API?',
      options: ['data()', 'setup()', 'methods', 'props'],
      answer: 'setup()',
      explanation: 'In Vue 3, `setup()` is used to define reactive state and logic.',
    },
    {
      question: 'Which hook is called when a component is mounted?',
      options: ['onCreated', 'onMounted', 'beforeMount', 'destroyed'],
      answer: 'onMounted',
      explanation: '`onMounted` is a lifecycle hook triggered when a component is mounted.',
    },
    {
      question: 'Which file is usually the entry point for a Vue 3 project?',
      options: ['main.js', 'App.vue', 'index.html', 'router.js'],
      answer: 'main.js',
      explanation: '`main.js` (or `main.ts`) is the entry point of a Vue 3 application.',
    },
  ],
  react: [
    {
      question: 'Which method is used to create components in modern React?',
      options: ['class()', 'function()', 'component()', 'create()'],
      answer: 'function()',
      explanation: 'In modern React, components are typically created using JavaScript functions.',
    },
    {
      question: 'What hook is used to manage state in a functional component?',
      options: ['useEffect', 'useState', 'useRef', 'useContext'],
      answer: 'useState',
      explanation: '`useState` is the React hook used for adding state to functional components.',
    },
    {
      question: 'Which hook is used for side effects in React?',
      options: ['useState', 'useEffect', 'useReducer', 'useMemo'],
      answer: 'useEffect',
      explanation:
        '`useEffect` is used to perform side effects like fetching data or updating the DOM.',
    },
    {
      question: 'What is JSX in React?',
      options: ['Java Syntax Extension', 'JavaScript XML', 'JSON Extension', 'Java XML Script'],
      answer: 'JavaScript XML',
      explanation: 'JSX stands for JavaScript XML and lets you write HTML inside JavaScript.',
    },
    {
      question: 'Which prop is used to render dynamic lists efficiently?',
      options: ['id', 'key', 'index', 'ref'],
      answer: 'key',
      explanation:
        'React uses the `key` prop to identify elements in lists for efficient re-rendering.',
    },
    {
      question: 'What is the default parent component in a React app?',
      options: ['index.js', 'App.js', 'main.js', 'Root.js'],
      answer: 'App.js',
      explanation: 'Typically, `App.js` is the main parent component that holds other components.',
    },
    {
      question: 'What hook provides a reference to DOM elements in React?',
      options: ['useDOM', 'useNode', 'useRef', 'useEffect'],
      answer: 'useRef',
      explanation: '`useRef` allows you to directly reference and interact with DOM elements.',
    },
    {
      question: 'Which hook is used for context management in React?',
      options: ['useState', 'useReducer', 'useContext', 'useEffect'],
      answer: 'useContext',
      explanation: '`useContext` allows you to consume values from React Context API easily.',
    },
    {
      question: 'Which React feature helps to split code for faster loading?',
      options: ['Lazy Loading', 'Suspense', 'Fragments', 'Keys'],
      answer: 'Lazy Loading',
      explanation:
        'React supports `React.lazy` for code-splitting and loading components on demand.',
    },
    {
      question: 'What does React StrictMode do?',
      options: [
        'Adds styles',
        'Checks potential problems',
        'Improves performance',
        'Removes bugs automatically',
      ],
      answer: 'Checks potential problems',
      explanation:
        'StrictMode highlights potential issues like unsafe lifecycle methods and deprecated APIs.',
    },
  ],
  angular: [
    {
      question: 'What is the main purpose of Angular?',
      options: ['Data binding', 'Routing', 'Dependency injection', 'All of the above'],
      answer: 'All of the above',
      explanation:
        'Angular provides data binding, routing, and dependency injection as core features.',
    },
    {
      question: 'Which directive is used to create a component in Angular?',
      options: ['@Component', '@Directive', '@Injectable', '@NgModule'],
      answer: '@Component',
      explanation: '@Component is used to define a component in Angular.',
    },
    {
      question: 'What is the purpose of services in Angular?',
      options: [
        'To handle HTTP requests',
        'To share data between components',
        'To encapsulate business logic',
        'All of the above',
      ],
      answer: 'All of the above',
      explanation:
        'Services in Angular are used for HTTP requests, data sharing, and business logic encapsulation.',
    },
    {
      question: 'Which module is used for routing in Angular?',
      options: ['FormsModule', 'HttpClientModule', 'RouterModule', 'CommonModule'],
      answer: 'RouterModule',
      explanation: 'RouterModule is used to configure and manage routes in Angular applications.',
    },
    {
      question: 'What is the purpose of ngFor directive in Angular?',
      options: [
        'To iterate over a collection and render elements',
        'To conditionally render elements',
        'To bind data to an input field',
        'To create a form',
      ],
      answer: 'To iterate over a collection and render elements',
      explanation:
        'ngFor is used to loop through collections and render elements dynamically in templates.',
    },
    {
      question: 'What is the purpose of ngIf directive in Angular?',
      options: [
        'To iterate over a collection',
        'To conditionally render elements based on a boolean expression',
        'To bind data to an input field',
        'To create a form',
      ],
      answer: 'To conditionally render elements based on a boolean expression',
      explanation: 'ngIf allows conditional rendering of elements based on a boolean expression.',
    },
    {
      question: 'What does the `async` pipe do in Angular?',
      options: [
        'It automatically subscribes to Observables',
        'It formats dates',
        'It handles HTTP requests',
        'It creates components',
      ],
      answer: 'It automatically subscribes to Observables',
      explanation:
        'The `async` pipe subscribes to an Observable or Promise and returns the latest value.',
    },
    {
      question: 'What is the purpose of Angular CLI?',
      options: [
        'To create and manage Angular projects',
        'To compile TypeScript code',
        'To handle HTTP requests',
        'To create components',
      ],
      answer: 'To create and manage Angular projects',
      explanation:
        'Angular CLI is a command-line interface tool for creating, building, and managing Angular applications.',
    },
    {
      question: 'What is the purpose of the `ngModel` directive in Angular?',
      options: [
        'To bind data to an input field',
        'To iterate over a collection',
        'To conditionally render elements',
        'To create a form',
      ],
      answer: 'To bind data to an input field',
      explanation:
        '`ngModel` is used for two-way data binding between form controls and component properties.',
    },
    {
      question: 'What is the purpose of Angular modules?',
      options: [
        'To group related components, directives, and services',
        'To handle HTTP requests',
        'To create forms',
        'To manage styles',
      ],
      answer: 'To group related components, directives, and services',
      explanation:
        'Angular modules help organize an application by grouping related components, directives, and services together.',
    },
  ],
}
