import { UniqueEntityUUID } from "../domain/unique-entity-uuid";

export abstract class Entity<T = any> {
  public readonly id: UniqueEntityUUID;
  constructor(public readonly props: T, id?: UniqueEntityUUID) {
    this.id = id ?? new UniqueEntityUUID();
  }

  get entityId(): string {
    return this.id.toString();
  }

  toJSON(): Required<T> & { id: string } {
    return {
      ...this.props,
      id: this.id.toString(),
    } as Required<T> & { id: string };
  }
}
