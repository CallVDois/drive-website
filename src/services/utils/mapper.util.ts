export function safeString(value: any, fallback = ""): string {
    return typeof value === "string" ? value : fallback;
}

export function safeArray<T>(value: any): T[] {
    return Array.isArray(value) ? value : [];
}