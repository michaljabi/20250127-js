/**
* You can see that objects allow you to group together related information.
*
* Object can be combined from primitive values, but you can have objects inside the objects.
*/

// Little more complex object:
const user = {
	name: 'John',
	lastName: 'Smith',
	address: {
		village: 'Willoughby',
		shireCounty: 'Lincolnshire',
		// district: 'East Lindsey', // hardcoded version of the solution.
		district: '', // dostrict should be here as empty string, to show us
					  // the type of the district (string), and that this property
					  // can exist in address.
		house: {
			no: 23
		}
	},
	isRegistered: true
};

// #1 Task:
// Print on console - the "no" of the house form user:
console.log(user)
console.log(user.address)
console.log(user.address.house)
// solution
console.log(user.address.house.no)
// #2 Task:
// Add "district" "East Lindsey" to the user address
user.address.district = "East Lindsey";

console.log(user.address)
console.log(user.address.district)

// this solution will override existing adress object
user.address = { district: 'East Lindsey' }

console.log(user);
console.log(user.address);