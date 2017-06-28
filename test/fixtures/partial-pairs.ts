import { Pair } from "./helpers"

const pairs: Pair[] = [
  {
    s: "",
    col: [],
    nrs: [false],
  },
  {
    s: "abc",
    col: [true, "abc", 3],
    nrs: [false],
  },
  {
    s: "[ab|c]",
    col: [true, ["ab", "c"], 6],
    nrs: [false],
  },
  {
    s: ":",
    col: [false, ":", 1],
    nrs: [false],
  },
  {
    s: ":abc",
    col: [false, ":", 1, true, "abc", 4],
    nrs: [false, false],
  },
  {
    s: "abc:",
    col: [true, "abc", 3, false, ":", 4],
    nrs: [false, false],
  },
  {
    s: "abc:def",
    col: [true, "abc", 3, false, ":", 4, true, "def", 7],
    nrs: [false, false, false],
  },
  {
    s: "[ab:|c]",
    failPos: 3,
    nrs: [false],
  },
  {
    s: "[ab|c]",
    col: [true, ["ab", "c"], 6],
    nrs: [false],
  },
  {
    s: "[ab|c]",
    col: [false, "[", 1, true, "ab", 3, false, "|", 4, true, "c", 5, false, "]", 6],
    nrs: [true, false, true, false, true],
  },
  {
    s: "[[ab|c]]",
    col: [false, "[", 1, true, ["ab", "c"], 7, false, "]", 8],
    nrs: [true, false, true],
  },
  {
    s: "ab|c",
    col: [true, "ab", 2, true, "c", 4],
    nrs: [false, [false, 1]],
  },
  {
    s: "{a:#3|b:|1}",
    col: [true, {a: 3, b: [100]}, 11],
    nrs: [false],
    backrefCb(refNum) { return [[100], [101], [102]][refNum] },
  },
  {
    s: ":foo{bar:[x|y]|:baz:{u:vw}}",
    col: [
      false, ":", 1,
      true, "foo", 4,
      false, "{", 5,
      true, "bar", 8,
      false, ":", 9,
      true, ["x", "y"], 14,
      false, "|", 15,
      false, ":", 16,
      true, "baz", 19,
      false, ":", 20,
      true, {u: "vw"}, 26,
      false, "}", 27,
    ],
    nrs: [false, true, true, true, true, false, true, true, true, true, false, true],
  },
]

export default pairs
