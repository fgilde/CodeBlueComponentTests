import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { InPlaceEditorComponent, RenderMode, EditableType } from '@syncfusion/ej2-angular-inplace-editor';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule, AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AddEditDoctorComponent } from './add-edit-doctor/add-edit-doctor.component';
import { AddEditPatientComponent } from './add-edit-patient/add-edit-patient.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorAvailabilityComponent } from './doctor-availability/doctor-availability.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PreferenceComponent } from './preference/preference.component';
import { MainComponent } from './main/main.component';
import { ControlsComponent } from './controls/controls.component';
import { SpreadsheetAllModule, SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddEditDoctorComponent,
    AddEditPatientComponent,
    CalendarComponent,
    DashboardComponent,
    DoctorDetailsComponent,
    DoctorAvailabilityComponent,
    DoctorsComponent,
    ControlsComponent,
    PatientsComponent,
    RecentActivityComponent,
    PreferenceComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    SpreadsheetAllModule,
    ScheduleModule,
    RecurrenceEditorModule,
    DropDownListModule,
    MultiSelectModule,
    ComboBoxModule,
    CheckBoxModule,
    ButtonModule,
    SwitchModule,
    SplitButtonModule,
    InPlaceEditorModule,
    RadioButtonModule,
    TreeViewModule,
    DatePickerModule,
    TimePickerModule,
    TextBoxModule,    
    MaskedTextBoxModule,
    ListViewModule,
    SidebarModule,
    ChartModule,
    GridModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [CalendarComponent, { provide: APP_BASE_HREF, useValue: '/' }, Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
