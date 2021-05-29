import { inspect } from "util";
import { NanoGuid } from "./nanoGuid";

test("NanoGuid", () => {
	describe("Guid", () => {
		it("Should be an instance of string", () => {
			const g = new NanoGuid();
			expect(
				g instanceof String /* , "Not an instance of String" */
			).toBeTruthy();
		});

		it("Should use the value when passed", () => {
			const guidStr = "1ad03214-05aa-4f25-b233-84e5caa3accb";

			expect(new NanoGuid(guidStr).toString()).toEqual(guidStr);
		});

		it("Should throw when a invalid guid is passed", () => {
			expect(() => new NanoGuid("abc")).toThrow();
		});

		it("Should always print lowercase", () => {
			const upperCaseGuid = new NanoGuid().toUpperCase();

			expect(new NanoGuid(upperCaseGuid).toString()).toEqual(
				upperCaseGuid.toLowerCase()
			);
		});

		it("Should behave like a string when concatenating and inside templates", () => {
			const g1: string = <any>new NanoGuid();
			const g2: string = <any>new NanoGuid();

			expect(g1 + g2).toEqual(g1.toString() + g2.toString());
			expect(`${g1}${g2}`).toEqual(g1.toString() + g2.toString());
		});

		it("Should serialize as a string", () => {
			const guidStr = "1ad03214-05aa-4f25-b233-84e5caa3accb";
			const g = new NanoGuid(guidStr);

			expect(JSON.stringify(g)).toEqual(JSON.stringify(guidStr));
			expect(inspect(g)).toEqual(inspect(guidStr));
		});
	});
});
