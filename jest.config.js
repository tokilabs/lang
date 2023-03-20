const config = {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {},
	extensionsToTreatAsEsm: [".ts"],
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/lib/$1",
	},
};

export default config;
