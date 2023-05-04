const config = {
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		".*.ts": [
			"ts-jest",
			{
				useESM: true,
			},
		],
	},
	extensionsToTreatAsEsm: [".ts"],
	moduleNameMapper: {
		"./$1": "<rootDir>/lib/cjs/$1",
	},
};

export default config;
