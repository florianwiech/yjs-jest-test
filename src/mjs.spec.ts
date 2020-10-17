import * as Y from "yjs/dist/yjs.mjs";

describe("example test", () => {
  it("should be defined", () => {
    const doc = new Y.Doc();

    expect(doc).toBeDefined();
  });
});
