export class ValidatorRules {
  private constructor(
    private readonly value: any,
    private readonly field: any
  ) {
    this.value = value;
    this.field = field;
  }

  static values(value: any, field: any) {
    return new ValidatorRules(value, field);
  }

  isRequired() {
    if (!this.value) {
      throw new Error(`${this.field} is required`);
    }
    return this;
  }

  maxLength(length: number) {
    if (this.value.length > length) {
      throw new Error(`${this.field} must be less than ${length} characters`);
    }
    return this;
  }

  minLength(length: number) {
    if (this.value.length < length) {
      throw new Error(`${this.field} must be at least ${length} characters`);
    }
    return this;
  }

  string() {
    if (typeof this.value !== "string") {
      throw new Error(`${this.field} must be a string`);
    }
    return this;
  }
}
