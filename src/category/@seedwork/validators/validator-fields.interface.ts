export type ValidatorFieldsType = {
  [key: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  validate(data: any): boolean;
  errors: ValidatorFieldsType;
  validatedData: PropsValidated;
}
