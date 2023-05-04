import { inspect } from "util";
import { Decimal } from "../lib/cjs/decimal.js";

describe("Decimal", () => {
	it("Should be an instance of number", () => {
		const d = new Decimal(2.0);
		// tslint:disable-next-line:chai-vague-errors no-unused-expression
		expect(
			d instanceof Number /* , "Not an instance of Number" */
		).toBeTruthy();
	});

	it("Should always have two decimal places", () => {
		expect(new Decimal(2).toString()).toEqual("2.00");
		expect(new Decimal(2.1).toString()).toEqual("2.10");
		expect(new Decimal(2.254965).toString()).toEqual("2.25");
		expect(new Decimal(2.254).valueOf()).toEqual(2.25);
		expect(new Decimal(2.358).valueOf()).toEqual(2.36);
	});

	// Have to disable no-any here because TS still doesn't support operators between types
	// tslint:disable:no-any
	it("Should support math operations", () => {
		const d: number = <any>new Decimal(2.22);
		expect(d + 2).toEqual(2.22 + 2);
		expect(d + d).toEqual(4.44);
		expect(
			new Decimal(<any>new Decimal(2.254) + <any>new Decimal(2.358)).valueOf()
		).toEqual(4.61);
	});

	it("Should serialize as a number", () => {
		expect(JSON.stringify(new Decimal(2))).toEqual(JSON.stringify(2));
		expect(inspect(new Decimal(2))).toEqual(inspect(2));

		expect(JSON.stringify(new Decimal(2))).toEqual(JSON.stringify(2));
		expect(inspect(new Decimal(2.22))).toEqual(inspect(2.22));
	});
});
