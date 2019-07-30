/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ErrorTextComponent } from './error-text.component';

let component: ErrorTextComponent;
let fixture: ComponentFixture<ErrorTextComponent>;

describe('error-text component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ErrorTextComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ErrorTextComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});