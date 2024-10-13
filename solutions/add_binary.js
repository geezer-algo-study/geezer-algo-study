/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const dec_a = BigInt("0b" + a);
  const dec_b = BigInt("0b" + b);
  return (dec_a + dec_b).toString(2);
};

/**
parseInt를 사용하면 오버플로우 발생 -> 2진수를 BigInt로 변환 후 계산
 */
