import { Category } from "./category";
import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";

describe("Category Constructor", () => {
  it("should be created and returned category if description, is_active and created_at is not provided", () => {
    let props = {
      id: "any_id",
      name: "any_name",
    };

    let category = new Category(props);

    const categoryWithoutCreatedAt = omit(category.props, "created_at");

    expect(categoryWithoutCreatedAt).toStrictEqual({
      id: "any_id",
      name: "any_name",
      description: null,
      is_active: true,
    });
  });
  it("should be created and returned category, is_active and created_at is not provided", () => {
    let props = {
      id: "any_id",
      name: "any_name",
      description: "any_description",
    };

    let category = new Category(props);

    const categoryWithoutCreatedAt = omit(category.props, "created_at");

    expect(categoryWithoutCreatedAt).toStrictEqual({
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: true,
    });
  });

  it("should be created and returned category if created_at is not provided", () => {
    let props = {
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: true,
    };

    let category = new Category(props);

    let categoryWithoutCreatedAt = omit(category.props, "created_at");

    expect(categoryWithoutCreatedAt).toStrictEqual({
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: true,
    });

    props.is_active = false;

    category = new Category(props);

    categoryWithoutCreatedAt = omit(category.props, "created_at");

    expect(categoryWithoutCreatedAt).toStrictEqual({
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: false,
    });
  });

  it("should be created and returned category if everything is provided", () => {
    const created_at = new Date();

    let props = {
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: true,
      created_at,
    };

    let category = new Category(props);

    expect(category.props).toStrictEqual({
      id: "any_id",
      name: "any_name",
      description: "any_description",
      is_active: true,
      created_at,
    });
  });

  it("should be create id successfully", () => {
    let props = [
      { name: "any_name", id: "d71de38f-620a-49c2-8dc5-2fafa1f7b09e" },
      { name: "any_name", id: null },
      { name: "any_name", id: undefined },
    ];

    props.forEach((prop) => {
      let category = new Category(prop);
      expect(category.entityId).not.toBeNull();
      expect(uuidValidate(category.entityId)).toBeTruthy();
    });
  });

  it("should be update name and description successfully", () => {
    let props = {
      name: "any_name",
      description: "any_description",
      is_active: true,
    };

    let category = new Category(props);

    category.update("new_name", "new_description");

    expect(category.props).toMatchObject({
      name: "new_name",
      description: "new_description",
      is_active: true,
    });
  });

  it("should be activate category successfully", () => {
    let props = {
      name: "any_name",
      description: "any_description",
      is_active: false,
    };

    let category = new Category(props);

    category.activate();

    expect(category.props.is_active).toBeTruthy();
  });

  it("should be deactivate category successfully", () => {
    let props = {
      name: "any_name",
      description: "any_description",
      is_active: true,
    };

    let category = new Category(props);

    category.deactivate();

    expect(category.props.is_active).toBeFalsy();
  });
});
