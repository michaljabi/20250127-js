/**
  Set consist only unique primitive types and/or unique references to objects.

*/

  const mySet = new Set();

  mySet.add( 'value' );
  mySet.add( 'value' );
  mySet.add( 'value' );

  console.log( mySet );

  const mySetFromArray = new Set( [ 1, 1, 2, 3, 3, 4, 6, 8, 10, 190, 190 ] );

  let iterator = mySetFromArray.values();
  console.log( iterator.next() );
  iterator = mySetFromArray.values();
  console.log( iterator.next() );

  for (const item of myMap.values()) {
    console.log( item );
  }

  // more:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  // Tasks:

// #1 Add and remove elements to Set

// #2 Check iteration using a for...of loop
