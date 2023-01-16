import { println } from "../src/main";

describe("printsln", () => {
  it("should be defined", () => {
    expect(println).toBeDefined();
  });

  it("should be friendly", () => {
    expect(println("World")).toBe("Hello World");
  });
});
