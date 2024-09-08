import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { ValidatorFields } from "../../@seedwork/validators/class-validator-fields";
import { props } from "../entities/category";

export class CategoryRules {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;

  created_at: Date;

  constructor(data: props) {
    Object.assign(this, data);
  }
}

export class CategoryValidator extends ValidatorFields<CategoryRules> {
  validate(data: props): boolean {
    return super.validate(new CategoryRules(data));
  }
}

export const categoryValidator = new CategoryValidator();
