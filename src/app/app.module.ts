import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { AgGridModule } from 'ag-grid-angular';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { DataformsComponent } from './pages/dataforms/dataforms.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { VisualizationComponent } from './pages/visualization/visualization.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LocationComponent } from './pages/home/location/location.component';
import { RatedPipe } from './pipes/rated.pipe';
import { ProductivityPipe } from './pipes/productivity.pipe';
import { ProjectformComponent } from './pages/projects/projectform/projectform.component';
import { CrudmenuComponent } from './common/crudmenu/crudmenu.component';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { FirstchartComponent } from './pages/visualization/firstchart/firstchart.component';
import { ProductchartComponent } from './pages/visualization/productchart/productchart.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    DataformsComponent,
    ReportsComponent,
    VisualizationComponent,
    ProjectsComponent,
    LocationComponent,
    RatedPipe,
    ProductivityPipe,
    ProjectformComponent,
    CrudmenuComponent,
    FirstchartComponent,
    ProductchartComponent,
    HighlightDirective,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    ChartModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  providers: [HttpClient,CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
