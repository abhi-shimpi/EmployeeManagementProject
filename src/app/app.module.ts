import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort'
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PiChartComponent } from './components/dashboard/pi-chart/pi-chart.component';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { AreaChartComponent } from './components/dashboard/area-chart/area-chart.component';
import { GaugeChartComponent } from './components/dashboard/gauge-chart/gauge-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './dialog/add-employee/add-employee.component';
import { EmployeeServiceService } from './services/employee-service.service';

import { HttpClientModule } from '@angular/common/http';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { PaginatorDirective } from './components/employee-management/paginator.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    EmployeeManagementComponent,
    PageNotFoundComponent,
    PiChartComponent,
    BarChartComponent,
    LineChartComponent,
    AreaChartComponent,
    GaugeChartComponent,
    DashboardComponent,
    AddEmployeeComponent,
    PaginatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSelectModule,
    MatTabsModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MomentDateModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {
  // ngDoBootstrap()
}
