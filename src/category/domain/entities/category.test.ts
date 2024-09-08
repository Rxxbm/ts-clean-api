import { Category } from "./category";

describe("Integration Category Tests", () => {
  test("should a returns an error if name is invalid", () => {
    let arrange = [{ name: "" }, { name: null }, { name: undefined }];

    arrange.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(new Error("name is required"));
    });

    arrange = [{ name: "a" }, { name: "ab" }];

    arrange.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(
        new Error("name must be at least 3 characters")
      );
    });

    arrange = [{ name: "a".repeat(51) }];

    arrange.forEach((arr) => {
      expect(() => new Category(arr)).toThrow(
        new Error("name must be less than 50 characters")
      );
    });

    expect(() => new Category({ name: 123 as any })).toThrow(
      new Error("name must be a string")
    );
  });
});
