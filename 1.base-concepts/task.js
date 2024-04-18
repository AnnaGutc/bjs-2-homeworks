"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;
	if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}



let P = (percent / 100) / 12;
	let S = amount - contribution;
	let monthlyPayment = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
	let fullPay = (monthlyPayment * countMonths);

	return (+fullPay.toFixed(2));