export class FormDataSearchParameters {
    offset: number = 0;
    count: number = 5;
    fieldFilters: FieldFilters = new FieldFilters();
}

export class FieldFilters {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
}
