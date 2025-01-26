/**

 Getting to know new Objects in ES6 +: Sets and Maps.
 Iterating over Map and Set elements

*/


// Formerly, a Hash Map could be obtained by using an object
// and its dynamic property access:

  const oldFashionWay = {};
  oldFashionWay[ 'key' ] = 'value';
  oldFashionWay[ 'key' ] = 'other-value';
  console.log( oldFashionWay[ 'key' ] );

// Nowadays MAPS:

  const myMap = new Map();

  myMap.set( 'hello', 'world' );
  myMap.set( 'hello', 'world 2' );
  myMap.set( 'myName', 'Andrew Walker' );

  console.log( myMap );
  console.log( myMap.get( 'non-existing' ) );
  console.log( myMap.get( 'hello' ) );

  // You can build a new Map from the nested array,
  // Array of key, value pairs is nested inside a wrapping array:
  const mapFromArray = new Map( [ [ 'key', 'value' ], [ 'key2', 'value2' ] ] );

  console.log( mapFromArray.get( 'key' ) );

  console.assert( mapFromArray.delete( 'key' ) );
  console.log( mapFromArray.get( 'key' ) );

  // more:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// #1 Add and remove elements to Map

// #2 Check iteration using a for...of loop for values, keys and entries (key + value pair)
