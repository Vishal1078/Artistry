// src/types/json.d.ts

export type JSONData = Record<string, unknown>;

declare module "*.json" {
  const value: JSONData;
  export default value;
}
