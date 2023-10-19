import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValuewComponent } from './valuew/valuew.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarAddComponent } from './car/car-add/car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { LoginGuard } from './login/login.guard';

import { PhotosComponent } from './photos/photos.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CategoryFilterPipe } from './car/categoryFilter.pipe';
import { ModelFilterPipe } from './car/filters/modelFilter.pipe';
import { MinPricePipe } from './car/filters/minPrice.pipe';
import { MaxPriceFilterPipe } from './car/filters/maxPriceFilter.pipe';
import { MinYearFilterPipe } from './car/filters/minYearFilter.pipe';
import { MaxYearFilterPipe } from './car/filters/maxYearFilter.pipe';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminLoginGuard } from './adminlogin/adminlogin.guard';
import { AgGridModule } from 'ag-grid-angular';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [													
    AppComponent,
      ValuewComponent,
      NavComponent,
      CarComponent,
      CarDetailComponent,
      CarAddComponent,
      LoginComponent,
      RegisterComponent,
      PhotosComponent,
      CategoryFilterPipe,
      ModelFilterPipe,
      MinPricePipe,
      MaxPriceFilterPipe,
      MinYearFilterPipe,
      MaxYearFilterPipe,
      AdminComponent,
      AdminloginComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxGalleryModule,BrowserAnimationsModule,
   RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule,FileUploadModule,
   AgGridModule
  ],
  providers: [AlertifyService,AuthService,LoginGuard,AdminLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
