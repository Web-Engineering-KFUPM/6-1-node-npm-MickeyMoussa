import _ from "lodash"
export function parseNumbers(input) {
  const nums = _.map(input, s => Number(s));
  return _.filter(nums, n => Number.isFinite(n));
}

export function isValidOperation(operation) {
  const ops = ["add", "subtract", "multiply", "divide"];
  return _.includes(ops, String(operation).toLowerCase());
}