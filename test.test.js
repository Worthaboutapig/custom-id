var customId = require("./index");

describe("Is it a string?", () => {
  let custom = customId({
    name: "Md. Abdullah",
    email: "abdullah@gmail.com",
    randomLength: 2,
    lowerCase: true
  });

  const expected = custom;
  it("Yeah, babe ... It is a fucking string", () => {
    expect(typeof expected).toBe("string");
  });
});
