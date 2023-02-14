import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';

//import { ProductModule } from './products/product.module';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([

            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'products', loadChildren: () => import('./products/product.module').then(x => x.ProductModule)},
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ]),
        //ProductModule
    ]

})
export class AppModule { }
