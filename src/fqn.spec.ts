import { parseFQN, requireByFQN } from "@/fqn";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

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
			require("class-transformer").ClassTransformer
		);
		expect(requireByFQN("events:EventEmitter")).toEqual(
			require("events").EventEmitter
		);
	});

	it("Should import functions correctly", () => {
		expect(requireByFQN("class-transformer:plainToClass")).toEqual(
			require("class-transformer").plainToClass
		);
	});
});
