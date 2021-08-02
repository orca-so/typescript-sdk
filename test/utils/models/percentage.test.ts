import { Percentage } from "../../../src";

const oneOverThousand: Percentage = Percentage.fromFraction(1, 1000);
const tenOverTenThousand: Percentage = Percentage.fromFraction(1, 10000);

describe.each([
  {
    p1: Percentage.fromFraction(1, 1000),
    p2: Percentage.fromFraction(1, 10000),
    expected: Percentage.fromFraction(11, 10000),
  },
  {
    p1: Percentage.fromFraction(1, 3),
    p2: Percentage.fromFraction(1, 7),
    expected: Percentage.fromFraction(10, 21),
  },
  {
    p1: Percentage.fromFraction(5, 10000),
    p2: Percentage.fromFraction(7, 10000),
    expected: Percentage.fromFraction(12, 10000),
  },
  {
    p1: Percentage.fromFraction(0, 1000),
    p2: Percentage.fromFraction(0, 10000),
    expected: Percentage.fromFraction(0, 10000),
  },
  {
    p1: Percentage.fromFraction(30, 10000),
    p2: Percentage.fromFraction(5, 10000),
    expected: Percentage.fromFraction(35, 10000),
  },
])("Percentage.add", ({ p1, p2, expected }) => {
  test(`add(${p1.toString()}, ${p2.toString()}}) returns {${expected.toString()}}`, () => {
    expect(p1.add(p2).toString()).toEqual(expected.toString());
  });
});
