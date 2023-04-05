import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PiChartComponent } from './components/dashboard/pi-chart/pi-chart.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { AreaChartComponent } from './components/dashboard/area-chart/area-chart.component';
import { GaugeChartComponent } from './components/dashboard/gauge-chart/gauge-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDialogBoxComponent } from './dialog/form-dialog-box/form-dialog-box.component';

import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//1st - angular
// 2nd -  material
// 3rd - 3rd party library
//PathMatch full
//Routing
//Module library
//html staructure


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeeManagementComponent,
    HomeComponent,
    PageNotFoundComponent,
    PiChartComponent,
    BarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    GaugeChartComponent,
    FormDialogBoxComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
