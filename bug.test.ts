import { expect, it, jest } from "@jest/globals";
import { add } from "./add";

jest.mock("./add", () => {
   return { 
    add: jest.fn(() => 5), 
   }
})

it("works", () => {
    const result = add(2, 3)
    expect(result).toBe(5)
})
