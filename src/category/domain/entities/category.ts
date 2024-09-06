import { UniqueEntityUUID } from "../../@seedwork/domain/unique-entity-uuid";
import { Entity } from "../entity/entity";

type props = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category extends Entity<props> {
  constructor(public readonly props: props, id?: UniqueEntityUUID) {
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
    this.props.is_active = this.props.is_active ?? true;
    this.description = this.props.description ?? null;
  }

  update(name: string, description: string): void {
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
