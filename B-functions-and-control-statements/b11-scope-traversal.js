/**
 * Here we test the behavior of successive levels in case of scopes
 *
 *
 * # 1 task:
 * Going from the inside (fourthDream) to the outside (inception)
 * Comment one by one the constant named: "myColor"
 * (first line 24 then 21 etc ... up to 12)
 *
 * See how console.log behaves and shows from line 28
 *
 * */

const myColor = 'red';

function inception() {
	const myColor = 'cristal';

	function secondDream() {
		const myColor = 'sapphire';

		function thirdDream() {
			const myColor = 'emerald';

			function fourthDream() {
				const myColor = 'diamond';

				console.log(myColor);
			}
			fourthDream();
		}
		thirdDream();
	}
	secondDream();
}
inception();
