var addBinary = function (a, b) {
	let len = Math.max(a.length, b.length); // 두 문자열의 최고 길이(더 작은 문자열의 부족한 길이 만큼 작은 문자열을 0으로 채워주기 위해)
	let carry = 0; // 현재 자리의 덧셈이 1을 넘을 경우 다음 자리에 1을 더해주기 위한 변수
	let temp = 0; // 두 문자열의 현재 자리수를 더한 값 + carry 값을 저장하는 변수
	let result = ""; // 두 문자열의 각 자리를 더한 결과를 저장하는 변수

	if (a.length > b.length) {
		for (let i = 0; i < a.length - b.length; i++) result += "0"; // a가 클 경우 b의 부족한 길이 만큼 0으로 채우기
		b = result + b;
	} else {
		for (let i = 0; i < b.length - a.length; i++) result += "0"; // b가 클 경우 a의 부족한 길이 만큼 0으로 채우기
		a = result + a;
	}

	result = ""; // 0의 개수를 저장하기 위해 임시로 사용한 result 변수 초기화

	for (let i = 0; i < len; i++) {
		temp = Number(a[len - 1 - i]) + Number(b[len - 1 - i]) + carry; // a 및 b의 i 인덱스의 값을 정수로 변환하여 carry와 함께 더하기
		carry = 0; // 다음 계산을 위해서 초기화
		result = temp % 2 == 0 ? "0" + result : "1" + result; // temp가 짝수일 경우 0으로 채우기 / 홀수일 경우 1로 채우기
		if (temp == 2 || temp == 3) {
			// 만일 덧셈 결과가 2 이상이 되어 다음 자리수에 1을 더해야 할 경우
			carry = 1;
		}
		if (i == len - 1 && carry == 1) {
			// 마지막 인덱스일 경우 두 a, b의 덧셈 결과가 2 이상이 되어 자리수가 늘어날 경우
			result = "1" + result;
		}
	}

	return result;
};
