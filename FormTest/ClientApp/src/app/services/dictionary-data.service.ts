import { Injectable } from "@angular/core";
import { Country } from "../model/country";

@Injectable()
export class DictionaryDataService {
    /* These data are hardcoded as they don't matter much */
    getCountries(): Array<Country> {
        return [
            new Country("1", "Russia"),
            new Country("2", "USA"),
            new Country("3", "Great Britain")
        ];
    }
}
