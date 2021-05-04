const { minDepth } = require("./index");

describe("minDepth test", () => {
  test("should return 0", () => {
    const result = minDepth({});
    expect(result).toEqual(0);
  });

  test("should return 1", () => {
    const result = minDepth({ val: 0, left: null, right: null });
    expect(result).toEqual(1);
  });

  test("should return 5", () => {
    /*
    Input: root = [2,null,3,null,4,null,5,null,6]
                  [2,null,3,null,4,null,5,null,6]
    Output: 5
*/
    const root = {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: { val: 6, left: null, right: null }
          }
        }
      }
    };
    const result = minDepth(root);
    expect(result).toEqual(5);
  });

  test("should return 2", () => {
    /*
    Input: root = [3,9,20,null,null,15,7]
    Output: 2
*/
    const root = {
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
      }
    };
    const result = minDepth(root);
    expect(result).toEqual(2);
  });

  test("should return 2", () => {
  // [1, 2, 3, 4, 5]
  const root = {
    val: 1,
    left: {
      val: 2,
      left: { val: 4, left: null, right: null },
      right: { val: 5, left: null, right: null }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  };
    const result = minDepth(root);
    expect(result).toEqual(2);
  });
});
