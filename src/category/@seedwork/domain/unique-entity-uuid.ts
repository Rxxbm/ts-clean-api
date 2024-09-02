import { v4 as uuidv4, validate as uuidValidate} from "uuid";
import { UuidError } from "../../errors/uuid-error";

export class UniqueEntityUUID {
  private constructor(public readonly id?: string) {
    this.id = id ?? UniqueEntityUUID.generate();
    this.validate();
  }

  static generate(): string {
    return uuidv4();
  }

  private validate(): boolean{
    const isValid = uuidValidate(this.id);
    if(!isValid){
      throw new UuidError();
    }
    return isValid;
  }
}