import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.scss']
})
/** pager component*/
export class PagerComponent implements OnChanges {
    @Input() offset: number;
    @Input() count: number;
    @Input() total: number;

    @Output() selectedPageChanged = new EventEmitter();

    pages: Array<number>;
    pagesCount: number = 1;
    selectedPage: number = 1;

    /** pager ctor */
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes['total']) {
            this.changePages();
            this.setSelectedPage(1);
        }
    }

    changePages() {
        let newPagesArray = [];
        for (let i = 0, p = 1; i < this.total; i += this.count, p++) {
            newPagesArray.push(p);
        }
        this.pages = newPagesArray;
        this.pagesCount = newPagesArray.length;
    }

    onSelectedPageChange(i: number) {
        if (i > 0 && i <= this.pagesCount && i != this.selectedPage) {
            this.setSelectedPage(i);
            this.selectedPageChanged.emit(i);
        }
    }

    setSelectedPage(i: number) {
        this.selectedPage = i;
    }
}
