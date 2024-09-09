import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ValidatorFields } from "./class-validator-fields";

class Rules {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  constructor(data: any) {
    this.name = data.name;
    this.price = data.price;
  }
}

class stubValidator extends ValidatorFields<Rules> {
  validate(data: any): boolean {
    return super.validate(new Rules(data));
  }
}

describe("Class Validator Integration Tests", () => {
  test("should validate data with errors", () => {
    const validator = new stubValidator();
    expect(validator.validate({})).toBeFalsy();
    expect(validator.errors).toEqual({
      name: ["name must be a string", "name should not be empty"],
      price: [
        "price must be a number conforming to the specified constraints",
        "price should not be empty",
      ],
    });
  });

  test("should validate data without errors", () => {
    const validator = new stubValidator();
    expect(validator.validate({ name: "test", price: 100 })).toBeTruthy();
    expect(validator.errors).toBeNull();
    expect(validator.validatedData).toEqual({ name: "test", price: 100 });
  });
});
