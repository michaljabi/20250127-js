
// const calculations = () => {} 

function getVatTaxRateFromServer(calculations) {
	console.log(calculations);
	calculations(0.23)
}

getVatTaxRateFromServer((x) => {
	console.log(x)
})

// # 1 Task:
// Writing code below, print received 0.23 on the screen:
// function showCalculations(x) {
// 	console.log(x)
// 	// return calculations()
// }

// getVatTaxRateFromServer(showCalculations)