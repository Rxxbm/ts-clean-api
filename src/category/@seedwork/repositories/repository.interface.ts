import { UniqueEntityUUID } from "../domain/unique-entity-uuid";
import { Entity } from "../entity/entity";

export interface RepositoryInterface<E extends Entity> {
  save(entity: E): Promise<void>;
  delete(id: UniqueEntityUUID | string): Promise<void>;
  update(entity: E): Promise<E>;
  findById(id: UniqueEntityUUID | string): Promise<E>;
  findAll(): Promise<E[]>;
}
