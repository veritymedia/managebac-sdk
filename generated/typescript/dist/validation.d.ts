export declare class ResponseValidationError extends Error {
    readonly path: string;
    constructor(path: string, detail: string);
}
export declare function validate(value: unknown, typeName: string): void;
