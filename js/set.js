function isValidSet(quantities, shapes, colours, patterns) {
    function isValidShapes(shapes) {
        if (shapes[0] === shapes[1] && shapes[0] !== shapes[2] ||
            shapes[0] !== shapes[1] && shapes[1] === shapes[2] ||
            shapes[1] === shapes[2] && shapes[1] !== shapes[0]) {
            return false;
        }
    }
    function isValidColours(colours) {
        if (colours[0] === colours[1] && colours[0] !== colours[2] ||
            colours[0] !== colours[1] && colours[1] === colours[2] ||
            colours[1] === colours[2] && colours[1] !== colours[0]) {
            return false;
        } else {
            return true;
        }
    }
    function isValidPatterns(patterns) {
        if (patterns[0] === patterns[1] && patterns[0] !== patterns[2] ||
            patterns[0] !== patterns[1] && patterns[1] === patterns[2] ||
            patterns[1] === patterns[2] && patterns[1] !== patterns[0]) {
            return false;
        } else {
            return true;
        }
    }
    function isValidQuantities(quantities) {
        if (quantities[0] === quantities[1] && quantities[0] !== quantities[2] ||
            quantities[1] === quantities[2] && quantities[0] !== quantities[1] ||
            quantities[0] === quantities[2] && quantities[0] !== quantities[1]) {
            return false;
        } else {
            return true;
        }
    }
   
    // console.log(isValidColours(colours));
    // console.log(isValidPatterns(patterns));
    // console.log(isValidShapes(shapes));
    // console.log(isValidQuantities(quantities));

    if (isValidQuantities(quantities) || isValidColours(colours) || isValidPatterns(patterns) || isValidShapes(shapes)) {
        return true;
    } else {
        return false;
    }

}

console.log(isValidSet([1, 2, 3], ['diamond', 'snake', 'capsule'], ['green', 'blue', 'red'], ['blank', 'stripped', 'solid']));
console.log(isValidSet([1, 1, 1], ['capsule', 'diamond', 'snake'], ['red', 'red', 'red'], ['stripped', 'blank', 'solid']));
console.log(isValidSet([3, 2, 1], ['diamond', 'capsule', 'snake'], ['blue', 'green', 'red'], ['solid', 'solid', 'solid']));
console.log(isValidSet([1, 2, 1], ['diamond', 'diamond', 'snake'], ['blue', 'red', 'red'], ['blank', 'blank', 'stripped']));
console.log(isValidSet([1, 1, 3], ['diamond', 'snake', 'capsule'], ['green', 'blue', 'red'], ['blank', 'stripped', 'solid']));
