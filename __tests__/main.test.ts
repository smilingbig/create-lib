import { println } from "../src/main";

describe("printsln", () => {
  it("printsln", () => {
    expect(println).toBeDefined();
  });

  it("printsln", () => {
    expect(println("World")).toBe("Hello World");
  });
});
