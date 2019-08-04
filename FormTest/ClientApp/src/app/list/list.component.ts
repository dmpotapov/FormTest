import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormDataSearchResult } from '../model/form-data-search-result';
import { FormDataSearchParameters } from '../model/form-data-search-parameters';
import { DictionaryDataService } from '../services/dictionary-data.service';
import { Country } from '../model/country';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
/** list component*/
export class ListComponent {
    data: FormDataSearchResult;
    params: FormDataSearchParameters = new FormDataSearchParameters();
    countriesDict: Array<Country> = this.dictService.getCountries();

    /** list ctor */
    constructor(private apiService: ApiService,
                private dictService: DictionaryDataService) {
        this.refreshList();
    }

    refreshList() {
        this.apiService.searchFormData(this.params).subscribe(d => this.data = d);
    }

    onSelectedPageChanged(i: number) {
        this.params.offset = (i - 1) * this.params.count;
        this.refreshList();
    }
}
