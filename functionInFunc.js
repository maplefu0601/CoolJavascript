function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
add(1)(2)(3)(); //6
add(1)(1)(1)(1)(1)(1)(); //6

