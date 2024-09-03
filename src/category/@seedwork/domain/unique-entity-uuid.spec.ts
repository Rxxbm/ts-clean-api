import { UuidError } from "../../errors/uuid-error";
import { UniqueEntityUUID } from "./unique-entity-uuid";

describe("UniqueEntityUUID Constructor", () => {

    it("should a create id if no data is provided", () => {
        const uuid = new UniqueEntityUUID();
        expect(uuid.value).toBeDefined();
    });

    it("should throws an error if an invalid id is provided", () => {
        const spyValidate = jest.spyOn(UniqueEntityUUID.prototype as any, 'validate');
        expect(() => new UniqueEntityUUID('invalid_id')).toThrow(new UuidError());
        expect(spyValidate).toHaveBeenCalled();
    });

    it("should not throws an error if a valid id is provided", () => {
        const spyValidate = jest.spyOn(UniqueEntityUUID.prototype as any, 'validate');
        const uuid = "550e8400-e29b-41d4-a716-446655440000";
        expect(() => new UniqueEntityUUID(uuid)).not.toThrow();
        expect(spyValidate).toHaveBeenCalled();
        expect(new UniqueEntityUUID(uuid).value).toBe(uuid);
    });

}
);