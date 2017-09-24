import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { fakeBackendProvider } from './fakeBackend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { AuthGuard } from './guard/index';
import { AuthenticationService, UserService } from './service/index';
import { LoginComponent } from './componentLogin/index';
import { HomeComponent } from './componentHome/index';

import { AppComponent2 }  from './sportList/sport.component';

 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AppComponent2
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }
