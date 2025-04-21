// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("check wheather a word is palindrome )", () => {
    const word = "madam";

    const palindrome = isPalindrome(word);

    expect(palindrome).toBe(true);
  });
  it("check wheather a word is not palindrome )", () => {
    const word = "cat";

    const palindrome = isPalindrome(word);

    expect(palindrome).toBe(false);
  });
  it("check wheather a word has upper and lowercase letters )", () => {
    const word = "mAdam";

    const palindrome = isPalindrome(word);

    expect(palindrome).toBe(true);
  });
  it("check wheather a word is an empty string", () => {
    const word = "";

    const palindrome = isPalindrome(word);

    expect(palindrome).toBe(false);
  });

  it("should check for non-numeric characters", () => {
    const word = "12wepo";

    expect(() => isPalindrome(word)).toThrow(
      new Error("Numeric characters detected")
    );
  });
});
