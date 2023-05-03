import { parseFQN, requireByFQN } from "./fqn";
import * as Event from "events";
import * as ClassTransformer from "class-transformer";
describe("FQN", () => {
	it("Should throw on FQN missing :", () => {
		expect(() => parseFQN("@tokilabs/lang")).toThrow();
	});

	it("Should throw on FQN missing package name", () => {
		// without package
		expect(() => parseFQN(":EventEmitter")).toThrow();
	});

	it("Should throw on FQN missing : [2]", () => {
		expect(() => parseFQN("events.EventEmitter")).toThrow();
	});

	it("Should throw on invalid FQN which has single word", () => {
		expect(() => parseFQN("whatever")).toThrow();
	});

	it("Should import classes correctly", () => {
		expect(requireByFQN("class-transformer:ClassTransformer")).toEqual(
			ClassTransformer.ClassTransformer
		);
		expect(requireByFQN("events:EventEmitter")).toEqual(Event.EventEmitter);
	});

	it("Should import functions correctly", () => {
		expect(requireByFQN("class-transformer:plainToClass")).toEqual(
			ClassTransformer.plainToClass
		);
	});
});
