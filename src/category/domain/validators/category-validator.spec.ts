import { categoryValidator, CategoryValidator } from "./category-validator";

describe("Category Validator Integration Tests", () => {
  let Validator: CategoryValidator;

  beforeEach(() => {
    Validator = categoryValidator;
  });

  test("should validate name field with error", () => {
    const invalidScenarios = [
      {
        data: null,
        expectedErrors: [
          "name should not be empty",
          "name must be a string",
          "name must be shorter than or equal to 50 characters",
        ],
      },
      {
        data: { name: "" },
        expectedErrors: ["name should not be empty"],
      },
      {
        data: { name: 5 as any },
        expectedErrors: [
          "name must be a string",
          "name must be shorter than or equal to 50 characters",
        ],
      },
      {
        data: { name: "a".repeat(51) },
        expectedErrors: ["name must be shorter than or equal to 50 characters"],
      },
    ];

    invalidScenarios.forEach(({ data, expectedErrors }) => {
      const validate = Validator.validate(data);
      expect(validate).toBeFalsy();
      expect(Validator.errors).toEqual({ name: expectedErrors });
    });
  });

  test("should validate name field with success", () => {
    const arrange = [
      { name: "a".repeat(50) },
      { name: "any_name" },
      { name: "any_name", description: "any_description" },
      { name: "any_name", description: undefined },
      { name: "any_name", description: null },
      { name: "any_name", is_active: true },
      { name: "any_name", is_active: false },
    ];

    arrange.forEach((data) => {
      let validate = Validator.validate(data);
      expect(validate).toBeTruthy();
      expect(Validator.errors).toBeNull();
    });
  });
});
