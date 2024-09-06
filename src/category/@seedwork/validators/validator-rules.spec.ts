import { ValidatorRules } from "./validator-rules";

describe("ValidatorRules", () => {
  it("should create an instance", () => {
    const value = "value";
    const field = "field";
    const result = ValidatorRules.values(value, field);
    expect(result).toBeInstanceOf(ValidatorRules);
  });

  it("should throw an error if value is required", () => {
    const value = ["", null, undefined];
    const field = "field";
    value.forEach((v) => {
      const result = ValidatorRules.values(v, field);
      expect(() => result.isRequired()).toThrow(`${field} is required`);
    });
  });

  it("should throw an error if value is not a string", () => {
    const value = 1;
    const field = "field";
    const result = ValidatorRules.values(value, field);
    expect(() => result.string()).toThrow(`${field} must be a string`);
  });

  it("should throw an error if value is less than the minimum length", () => {
    const value = "value";
    const field = "field";
    const result = ValidatorRules.values(value, field);
    expect(() => result.minLength(6)).toThrow(
      `${field} must be at least 6 characters`
    );
  });

  it("should throw an error if value is greater than the maximum length", () => {
    const value = "value";
    const field = "field";
    const result = ValidatorRules.values(value, field);
    expect(() => result.maxLength(4)).toThrow(
      `${field} must be less than 4 characters`
    );
  });
});
