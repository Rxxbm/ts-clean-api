import { Category } from "./category";

describe("Integration Category Tests", () => {
  test("should return an error if name is invalid", () => {
    const arrange = [{ name: null as any }, { name: undefined }];

    arrange.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(
        new Error(
          JSON.stringify({
            name: [
              "name should not be empty",
              "name must be a string",
              "name must be shorter than or equal to 50 characters",
            ],
          })
        )
      );
    });

    const tooShortNames = [{ name: "a".repeat(52) }, { name: "ab".repeat(44) }];

    tooShortNames.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(
        new Error(
          JSON.stringify({
            name: ["name must be shorter than or equal to 50 characters"],
          })
        )
      );
    });

    const tooLongNames = [{ name: "a".repeat(51) }];

    tooLongNames.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(
        new Error(
          JSON.stringify({
            name: ["name must be shorter than or equal to 50 characters"],
          })
        )
      );
    });

    expect(() => new Category({ name: 123 as any })).toThrow(
      new Error(
        JSON.stringify({
          name: [
            "name must be a string",
            "name must be shorter than or equal to 50 characters",
          ],
        })
      )
    );
  });
});
