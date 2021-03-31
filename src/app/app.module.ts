import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HaccpHeaderComponent } from './common/haccp-header/haccp-header.component';
import { HaccpFooterComponent } from './common/haccp-footer/haccp-footer.component';
import { DashboardModuleComponent } from './modules/dashboard-module/dashboard-module.component';
import { HaccpManagementModuleComponent } from './modules/haccp-management-module/haccp-management-module.component';
import { HaccpContactUsFormComponent } from './common/haccp-contact-us-form/haccp-contact-us-form.component';
import { HaccpTestimonialsComponent } from './common/haccp-testimonials/haccp-testimonials.component';
import { HaccpModulesBannerComponent } from './common/haccp-modules-banner/haccp-modules-banner.component';
import { DocumentManagementComponent } from './modules/document-management/document-management.component';
import { ActionManagementComponent } from './modules/action-management/action-management.component';
import { WorkflowManagementComponent } from './modules/workflow-management/workflow-management.component';
import { SupplierManagementComponent } from './modules/supplier-management/supplier-management.component';
import { RawMaterialControlComponent } from './modules/raw-material-control/raw-material-control.component';
import { TraceabilityComponent } from './modules/traceability/traceability.component';
import { ProductSpecificationComponent } from './modules/product-specification/product-specification.component';
import { AuditManagementComponent } from './modules/audit-management/audit-management.component';
import { ElectronicDataCaptureComponent } from './modules/electronic-data-capture/electronic-data-capture.component';
import { TrainingELearningComponent } from './modules/training-e-learning/training-e-learning.component';
import { TaskSchedulingComponent } from './modules/task-scheduling/task-scheduling.component';
import { CleaningManagementComponent } from './modules/cleaning-management/cleaning-management.component';
import { RiskManagementComponent } from './modules/risk-management/risk-management.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { HaccpModuleInternalListComponent } from './common/haccp-module-internal-list/haccp-module-internal-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HaccpHeaderComponent,
    HaccpFooterComponent,
    DashboardModuleComponent,
    HaccpManagementModuleComponent,
    HaccpContactUsFormComponent,
    HaccpTestimonialsComponent,
    HaccpModulesBannerComponent,
    DocumentManagementComponent,
    ActionManagementComponent,
    WorkflowManagementComponent,
    SupplierManagementComponent,
    RawMaterialControlComponent,
    TraceabilityComponent,
    ProductSpecificationComponent,
    AuditManagementComponent,
    ElectronicDataCaptureComponent,
    TrainingELearningComponent,
    TaskSchedulingComponent,
    CleaningManagementComponent,
    RiskManagementComponent,
    ReportsComponent,
    HaccpModuleInternalListComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'dashboard-food-safety', component: DashboardModuleComponent
      },
      {
        path: 'haccp-management', component: HaccpManagementModuleComponent
      },
      {
        path: 'document-management', component: DocumentManagementComponent
      },
      {
        path: 'action-management', component: ActionManagementComponent
      },
      {
        path: 'workflow-management', component: WorkflowManagementComponent
      },
      {
        path: 'supplier-management', component: SupplierManagementComponent
      },
      {
        path: 'raw-material-control', component: RawMaterialControlComponent
      },
      {
        path: 'traceability', component: TraceabilityComponent
      },
      {
        path: 'product-specification', component: ProductSpecificationComponent
      },
      {
        path: 'audit-management', component: AuditManagementComponent
      },
      {
        path: 'electronic-data-capture', component: ElectronicDataCaptureComponent
      },
      {
        path: 'training-e-learning', component: TrainingELearningComponent
      },
      {
        path: 'task-scheduling', component: TaskSchedulingComponent 
      },
      {
        path: 'cleaning-management', component: CleaningManagementComponent
      },
      {
        path: 'risk-management', component: RiskManagementComponent
      },
      {
        path: 'reports', component: ReportsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
