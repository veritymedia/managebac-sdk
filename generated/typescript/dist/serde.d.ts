/** Raw JSON value (wire names) -> SDK value (camelCase names). */
export declare function deserialize<T = unknown>(value: unknown, typeName: string): T;
/** SDK value (camelCase names) -> raw JSON value (wire names). */
export declare function serialize(value: unknown, typeName: string): unknown;
