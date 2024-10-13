var addBinary = function(a, b) {
    let len = Math.max(a.length, b.length);
    let carry = 0;
    let temp = 0;
    let result = "";

    if(a.length > b.length) {
        for(let i = 0; i < a.length - b.length; i++) result += "0";
        b = result + b;
    } else {
        for(let i = 0; i < b.length - a.length; i++) result += "0";
        a = result + a;
    }

    result = "";

    for(let i = 0; i < len; i++) {
        temp = Number(a[len - 1 - i]) + Number(b[len - 1 - i]) + carry;
        carry = 0;
        result = temp % 2 == 0 ? "0" + result : "1" + result;
        if(temp == 2 || temp == 3) {
            carry = 1;
        }
    }
    
    if(carry == 1) {
        result = "1" + result;
    }

    return result;
};