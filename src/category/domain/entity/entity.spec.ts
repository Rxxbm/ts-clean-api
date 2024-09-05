import { UniqueEntityUUID } from "../../@seedwork/domain/unique-entity-uuid";
import { Entity } from "./entity";
import { validate as uuidValidate } from "uuid";

class StubEntity extends Entity<{prop1: string; prop2: string }> {}

describe('Entity tests', () => {
  it('should be defined', () => {
    const arrange = {prop1: 'prop1', prop2: 'prop2'};
    const entity = new StubEntity({ prop1: 'prop1', prop2: 'prop2' });
    expect(entity.props).toEqual(arrange);
    expect(entity.id).toBeInstanceOf(UniqueEntityUUID);
    expect(entity.entityId).not.toBeNull();
    expect(uuidValidate(entity.entityId)).toBeTruthy();
  });

  it("should be accept a valid id", () => {
    const arrange = {prop1: 'prop1', prop2: 'prop2'};
    const uniqueEntityUUID = new UniqueEntityUUID();
    const entity = new StubEntity(arrange, uniqueEntityUUID);
    expect(entity.id).toBeInstanceOf(UniqueEntityUUID);
    expect(entity.entityId).toEqual(uniqueEntityUUID.value);
  })

  it("should be return a valid JSON", () => {
    const arrange = {prop1: 'prop1', prop2: 'prop2'};
    const entity = new StubEntity(arrange);
    const json = entity.toJSON();
    expect(json).toEqual({ ...arrange, id: entity.entityId });
  });
})