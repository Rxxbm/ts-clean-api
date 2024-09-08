export type ValidatorFieldsType = {
  [key: string]: string[];
};

export interface ValidatorFields<PropsValidated> {
  validate(data: any): boolean;
  errors: ValidatorFieldsType;
  validatedData: PropsValidated;
}
