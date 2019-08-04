/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListItemComponent } from './list-item.component';

let component: ListItemComponent;
let fixture: ComponentFixture<ListItemComponent>;

describe('list-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});