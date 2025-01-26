/**
  New syntactic sugar and API extension for JavaScript
  v.2.0
*/

// Sample #1 | Modularity in JavaScript, old times:
(function oldFashionModularity(){
  console.log('#1  ---- oldFashionModularity() :');

  var outerScope = 'Hello';

  (function immediatelyInvokedFunctionExpression() {

    var innerScope = ' World?';
    console.log('Access to outer module.', outerScope + innerScope);
  }());

  // #! Remove comment below, to check:
  // console.log(innerScope);

  // DO you know / remember jQuery?
  const fakeJQuery = { fn: {} };
  (function ( $ ) {

    $.fn.whoIsYourCreator = function() {
       const author = {
         name: 'John Resig',
         birth: 'May 8, 1984',
         tweet: '@jeresig'
       };
       return author.name;
    };
  }( fakeJQuery ));
  console.log('my fake jQuery', fakeJQuery);


  // Now a similar effect (Modularization) is achieved with separate .js files
  /* example in browser:
    <script type="module">
        import './a102-es7-es8-es-next.js';
    </script>
  */
}());

// Sample #2 | New ways to declare variables: let, const
(function lexicalLetAndConst(){
  console.log('#2 ---- lexicalLetAndConst() :');
    let x = 1;
    x++;
    console.log('My ex is:', x);

    const y = 100;
    // y = 900; // not possible!
    console.log('Hello I\'m', y, 'I cannot be reassigned');
}());

// Sample #3 | Arrow functions
(function arrowFunctions(){
  console.log('#3 ---- arrowFunctions() :');
    // Shorten form:
    const myFunc = (x) => {
      console.log(x);
    };

    // Even shorter form:
    const myFunc2 = (x) => console.log(x);

    // Can be simplified if you got one parameter:
    const oneArgFunc = name => `hello ${name}`;
    console.log(oneArgFunc('Helena'));

    // Context is not changing!! when you use arrow function:
}());

// Sample #4 | Default values for function parameters
(function defaultValues(){
  console.log('#4 ---- defaultValues() :');

  function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
     console.log('Grab', device, 'dial', phoneNo, 'call', name)
  }

  callMyGrandpa('Josep');
  callMyGrandpa('Stanley', '0000-1202917');
  callMyGrandpa('Rodney', '+48 601-284-212', 'Xiaomi');
}());

// Sample #5 | Shorten properties and methods syntax in the object
(function objectPropertyShorthandAndMethodProperties() {
    console.log('#5 ---- objectPropertyShorthandAndMethodProperties() :');
    // Object Property Shorthand:
    const name = 'John';
    const user = {
        name
    }
    console.log(user);
    // Method Properties:
    const welcomer = {
        greetings() {
            console.log('Welcomer says: Hello !');
        }
    }
    welcomer.greetings()
}());

// Sample #6 | Syntactic sugar for classes
(function classes(){
  console.log('#6 ---- classes() :');

  class Grandma {
    constructor ( name ) {
      this.name = name;
      this.type = 'Grandma';
    }

    hello() {
      console.log(this.type, this.name, 'says Hello!');
    }
  }

  const myGrandma = new Grandma('Urszula');
  myGrandma.hello();

  console.log(typeof myGrandma);
  // #! Delete comment below, guess what shows on the console:
  // console.log(typeof Grandma);
}());

// Sample #7 | Objects and arrays Destructuring
(function destructuring(){
  console.log('#7 ---- destructuring() :');

  const inDoorAPI = {
    fridge: {
      manufacturer: 'Samsung',
      model: 'Cooler 291263',
      doors: 3,
      deFrost: true,
      content: ['eggs', 'ham', 'cheese', 'orange juice']
    }
  };

  //
  //
  //
  // a dozen or so lines of the code below (or just assuming that inDoorAPI is from another module)
  // .....

  // show me the fridge manufacturer
  const { manufacturer } = inDoorAPI.fridge;
  console.log('manufacturer:', manufacturer);

  // show me number of the doors in the fridge:
  const { fridge: {doors} } = inDoorAPI;
  console.log('doors:',doors);

  // take out the cheese from the fridge:
  const { content } = inDoorAPI.fridge;
  const [,,yourCheese] = content;
  console.log('Here you are, it is your:', yourCheese);
}());

// Sample #8 | helpers for passing and extracting arguments and manipulating arrays
(function spreadAndRestOperators(){
  console.log('#8 ---- spreadAndRestOperators() :');

  const fruits = ['apple', 'banana', 'pear'];
  const vegetables = ['carrot', 'onion'];

  // combine fruits and vegetables:
  const combineWithSpread = [...fruits, ...vegetables];
  console.log(combineWithSpread);

  let no = 1;
  function consoleCounter(msg, ...rest) {
    // first rest then spread:
    console.log(`no.${no++}`, msg, ...rest);
  }

  consoleCounter('First message', 'Hello World');
  consoleCounter('Second message');
  consoleCounter('Third message', 'Greetings !');
}());

// Sample #9 | interpolation of text and values and multiline strings
(function templateString(){
  console.log('#9 ---- templateString() :');

  const interpolate = 'official suit';
  console.log(`
  
  My
  multi-lined console.log is wearing an ${interpolate} !
  
  `)
}());

// Sample #10 | Generators
(function generators(){
  console.log('#10 ---- generators() :');

  function* giveMeNumber() {
    for(let x = 0; x <= 10; x++) {
      yield x;
    }
  }

  const iterator = giveMeNumber();
  console.log('Generating...', iterator.next().value);
  console.log('Generating...', iterator.next().value);
  console.log('Generating...', iterator.next().value);

}());

