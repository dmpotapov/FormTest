import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ErrorTextComponent } from './form/error-text/error-text.component';
import { DictionaryDataService } from './services/dictionary-data.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ApiService } from './services/api.service';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FormComponent,
        ListComponent,
        ErrorTextComponent,
        ListItemComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        SweetAlert2Module.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'form', component: FormComponent },
            { path: 'list', component: ListComponent }
        ])
    ],
    providers: [
        DictionaryDataService,
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
