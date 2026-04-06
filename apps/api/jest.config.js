/** @type {import('jest').Config} */
const config = {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",
    roots: ["<rootDir>/src"],
    extensionsToTreatAsEsm: [".ts"],
    transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: "./tsconfig.node.json" }],
    },
}

export default config
