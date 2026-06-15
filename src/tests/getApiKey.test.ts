import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("should return null if no auth header is present", () => {
    const result = getAPIKey({});
    expect(result).toBe(null);
  });

  test("extracts the key", () => {
    const header = { authorization: "ApiKey xyz123" };
    const result = getAPIKey(header);
    expect(result).toBe("xyz123");
  });
});
