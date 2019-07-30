"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    /* checks if input part matches regex passed */
    CustomValidators.containsPattern = function (pattern, errorKey) {
        if (errorKey === void 0) { errorKey = "containsPattern"; }
        return function (control) {
            if (!control.value) {
                return null;
            }
            var res = null;
            if (!pattern.test(control.value)) {
                res = {};
                res[errorKey] = true;
            }
            return res;
        };
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map