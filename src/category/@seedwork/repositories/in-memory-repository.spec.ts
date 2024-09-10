import { UniqueEntityUUID } from "../domain/unique-entity-uuid";
import { Entity } from "../entity/entity";
import { InMemoryRepository } from "./in-memory-repository";

class Category extends Entity {
  constructor(props: { name: string }, id?: UniqueEntityUUID) {
    super(props, id);
  }
}

class CategoryRepository extends InMemoryRepository<Category> {}

describe("InMemoryRepository", () => {
  let categoryRepository: CategoryRepository;

  beforeEach(() => {
    categoryRepository = new CategoryRepository();
  });

  it("should save a category", async () => {
    const category = new Category({ name: "Category 1" });
    await categoryRepository.save(category);
    expect(await categoryRepository.findById(category.id)).toBe(category);
  });

  it("should delete a category", async () => {
    const category = new Category({ name: "Category 1" });
    await categoryRepository.save(category);
    await categoryRepository.delete(category.id);
    await expect(categoryRepository.findById(category.id)).rejects.toThrow(
      "Entity not found"
    );
  });

  it("should update a category", async () => {
    const category = new Category({ name: "Category 1" });
    await categoryRepository.save(category);
    const updatedCategory = new Category({ name: "Category 2" }, category.id);
    await categoryRepository.update(updatedCategory);
    expect(await categoryRepository.findById(category.id)).toEqual(
      updatedCategory
    );
  });

  it("should find a category by id", async () => {
    const category = new Category({ name: "Category 1" });
    await categoryRepository.save(category);
    expect(await categoryRepository.findById(category.id)).toEqual(category);
  });

  it("should find all categories", async () => {
    const category1 = new Category({ name: "Category 1" });
    const category2 = new Category({ name: "Category 2" });
    await categoryRepository.save(category1);
    await categoryRepository.save(category2);
    expect(await categoryRepository.findAll()).toEqual([category1, category2]);
  });
});
