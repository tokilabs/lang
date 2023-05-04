import {
	deserialize,
	deserializeArray,
} from "../lib/cjs/serialization/functions.js";

class SampleObject {
	public name: string;
}

describe("Serialization", () => {
	it("Should deserialize objects", () => {
		const objects = { name: "Object one" };

		const desObj = deserialize(SampleObject, objects);

		expect(desObj).toBeInstanceOf(SampleObject);
		expect(desObj.name).toEqual("Object one");
	});

	it("Should deserialize arrays of objects", () => {
		const objects = [{ name: "Object one" }, { name: "Object two" }];

		const desObj = deserialize(SampleObject, objects);

		expect(desObj).toBeInstanceOf(Array);
		expect(desObj.length).toEqual(2);
		expect(desObj[1]).toBeInstanceOf(SampleObject);
		expect(desObj[1].name).toEqual("Object two");
	});

	it("Should deserialize JSON object strings", () => {
		const objects = '{ "name": "Object one" }';

		const desObj = deserialize(SampleObject, objects);

		expect(desObj).toBeInstanceOf(SampleObject);
		expect(desObj.name).toEqual("Object one");
	});

	it("Should deserialize JSON array strings", () => {
		const objects = '[{ "name": "Object one" }, { "name": "Object two" }]';

		const desObj = deserializeArray(SampleObject, objects);

		expect(desObj).toBeInstanceOf(Array);
		expect(desObj.length).toEqual(2);
		expect(desObj[1]).toBeInstanceOf(SampleObject);
		expect(desObj[1].name).toEqual("Object two");
	});
});
