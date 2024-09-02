import { Category } from "./category";

describe("Category", () => {
  it("should create a category", () => {
    const category = new Category('any_name', 'any_id');
    expect(category).toBeInstanceOf(Category);
    expect(category).toEqual({
        id:'any_id',
        name: 'any_name'
    });
  });
})