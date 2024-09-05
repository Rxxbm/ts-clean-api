import { ValueObject } from "./value-object";

const makeStubValueObject = (v: any) => {
    class StubValueObject extends ValueObject {}
    return new StubValueObject(v);
};

describe("ValueObject tests", () => {
    it("should create a value object", () => {
        let arrange = [
            { value: "value", expected: "value" },
            { value: 123, expected: "123" },
            { value: null, expected: "null" },
            { value: undefined, expected: "undefined" },
            { value: NaN, expected: "NaN" },
            { value: true, expected: "true" },
            { value: false, expected: "false" }
        ];

        arrange.forEach(a => {
            const stub = makeStubValueObject(a.value);
            expect(stub.toString()).toEqual(a.expected);
        });
    });
});
