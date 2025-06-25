"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let c = [true, false, false];
let d = { age: 20 };
let e = [3];
let f;
let g = [];
let user = [1, "Zlata"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: 'Zlata',
    retire: (date) => {
        console.log(date);
    }
};
//# sourceMappingURL=types.js.map