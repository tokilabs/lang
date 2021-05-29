import { parseFQN, requireByFQN } from "./fqn";

describe("FQN", () => {
	it("Should throw on FQN missing :", () => {
		// without :
		expect(() => parseFQN("@cashfarm/lang")).toThrow();
	});
	it("Should throw on FQN missing package name", () => {
		// without package
		expect(() => parseFQN(":EventEmitter")).toThrow();
	});
	it("Should throw on FQN missing : [2]", () => {
		// just wrong
		expect(() => parseFQN("events.EventEmitter")).toThrow();
	});
	it("Should throw on invalid FQN which has single word", () => {
		// just wrong
		expect(() => parseFQN("whatever")).toThrow();
	});

	it("Should import classes correctly", () => {
		expect(requireByFQN("@cashfarm/lang:Guid")).toEqual(
			require("@cashfarm/lang").Guid
		);
		expect(requireByFQN("events:EventEmitter")).toEqual(
			require("events").EventEmitter
		);
	});
});
