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
});
