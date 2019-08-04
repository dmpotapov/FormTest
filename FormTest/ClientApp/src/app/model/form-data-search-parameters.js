"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormDataSearchParameters = /** @class */ (function () {
    function FormDataSearchParameters() {
        this.offset = 0;
        this.count = 5;
        this.fieldFilters = new FieldFilters();
    }
    return FormDataSearchParameters;
}());
exports.FormDataSearchParameters = FormDataSearchParameters;
var FieldFilters = /** @class */ (function () {
    function FieldFilters() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
    }
    return FieldFilters;
}());
exports.FieldFilters = FieldFilters;
//# sourceMappingURL=form-data-search-parameters.js.map