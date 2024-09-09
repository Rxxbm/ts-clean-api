import { validateSync } from "class-validator";
import {
  ValidatorFieldsType,
  ValidatorFieldsInterface,
} from "./validator-fields.interface";

export abstract class ValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  constructor(
    public errors: ValidatorFieldsType = null,
    public validatedData: PropsValidated = null
  ) {}

  validate(data: any): boolean {
    const errors = validateSync(data);
    if (errors.length) {
      this.errors = {}; // Inicializa os erros como um objeto vazio
      errors.forEach((error) => {
        const { property, constraints } = error;
        if (this.errors[property]) {
          this.errors[property].push(...Object.values(constraints));
        } else {
          this.errors[property] = Object.values(constraints);
        }
      });
      return false;
    }

    // Limpa os erros após uma validação bem-sucedida
    this.errors = null;
    this.validatedData = data;
    return true;
  }
}
