import { Category } from "./category";
import { omit } from 'lodash';

describe("Category Constructor", () => {
  it("should be created and returned category if description, is_active and created_at is not provided", () => {

    let props = {
        id:'any_id',
        name: 'any_name'
    }

    let category = new Category(props);

    const categoryWithoutCreatedAt = omit(category.props, 'created_at');

    expect(categoryWithoutCreatedAt).toStrictEqual({
        id:'any_id',
        name: 'any_name',
        description: null,
        is_active: true
    });
  });
    it("should be created and returned category, is_active and created_at is not provided", () => {

      let props = {
          id:'any_id',
          name: 'any_name',
          description: 'any_description'
      }
  
      let category = new Category(props);
  
      const categoryWithoutCreatedAt = omit(category.props, 'created_at');
  
      expect(categoryWithoutCreatedAt).toStrictEqual({
          id:'any_id',
          name: 'any_name',
          description: 'any_description',
          is_active: true
      });
  });

  it("should be created and returned category if created_at is not provided", () => {

    let props = {
        id:'any_id',
        name: 'any_name',
        description: 'any_description',
        is_active: true
    }

    let category = new Category(props);

    let categoryWithoutCreatedAt = omit(category.props, 'created_at');

    expect(categoryWithoutCreatedAt).toStrictEqual({
        id:'any_id',
        name: 'any_name',
        description: 'any_description',
        is_active: true
    });

    props.is_active = false;

    category = new Category(props);

    categoryWithoutCreatedAt = omit(category.props, 'created_at');

    expect(categoryWithoutCreatedAt).toStrictEqual({
      id:'any_id',
      name: 'any_name',
      description: 'any_description',
      is_active: false
  });
});

  it("should be created and returned category if everything is provided", () => {

    const created_at = new Date();

    let props = {
        id:'any_id',
        name: 'any_name',
        description: 'any_description',
        is_active: true,
        created_at
    }

    let category = new Category(props);

    expect(category.props).toStrictEqual({
        id:'any_id',
        name: 'any_name',
        description: 'any_description',
        is_active: true,
        created_at
    });
});
});
