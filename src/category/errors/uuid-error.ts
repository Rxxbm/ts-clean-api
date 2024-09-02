export class UuidError extends Error {
    constructor() {
        super("Invalid UUID");
        this.name = "UuidError";
    }
}   