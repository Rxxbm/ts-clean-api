import { ValidatorRules } from "../../@seedwork/validators/validator-rules";
import { UniqueEntityUUID } from "../../@seedwork/domain/unique-entity-uuid";
import { Entity } from "../entity/entity";
import { categoryValidator } from "../validators/category-validator";

export type props = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category extends Entity<props> {
  constructor(public readonly props: props, id?: UniqueEntityUUID) {
    Category.validate(props);
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
    this.props.is_active = this.props.is_active ?? true;
    this.description = this.props.description ?? null;
  }

  static validate(props: props): void {
    const validator = categoryValidator.validate(props);
    if (!validator) {
      throw new Error(JSON.stringify(categoryValidator.errors));
    }
  }

  update(name: string, description: string): void {
    Category.validate({ name, description });
    this.name = name;
    this.description = description;
  }

  activate(): void {
    this.props.is_active = true;
  }

  deactivate(): void {
    this.props.is_active = false;
  }

  private set name(name: string) {
    this.props.name = name;
  }

  private set description(description: string) {
    this.props.description = description;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
