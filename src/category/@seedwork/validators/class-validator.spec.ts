import * as lib from "class-validator";
import { ValidatorFields } from "./class-validator-fields";

class stubValidator extends ValidatorFields<{ name: string }> {
  constructor() {
    super();
  }
}

describe("Class Validator Tests", () => {
  test("should initialize errors and fields with null", () => {
    const validator = new stubValidator();
    expect(validator.errors).toBeNull();
    expect(validator.validatedData).toBeNull();
  });

  test("should validate data with errors", () => {
    const spyValidate = jest.spyOn(lib, "validateSync");
    spyValidate.mockReturnValue([
      {
        property: "name",
        constraints: { isNotEmpty: "name should not be empty" },
      },
    ]);
    const validator = new stubValidator();
    expect(validator.validate(null)).toBeFalsy();
    expect(spyValidate).toHaveBeenCalled();
    expect(validator.validatedData).toBeNull();
    expect(validator.errors).toEqual({ name: ["name should not be empty"] });
  });

  test("should validate data without errors", () => {
    const spyValidate = jest.spyOn(lib, "validateSync");
    spyValidate.mockReturnValue([]);
    const validator = new stubValidator();
    expect(validator.validate("any_name")).toBeTruthy();
    expect(spyValidate).toHaveBeenCalled();
    expect(validator.validatedData).toEqual("any_name");
    expect(validator.errors).toBeNull();
  });
});
