import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestDocumentComponent } from './components/request-document/request-document.component';
import { RequestLogsComponent } from './components/request-logs/request-logs.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewMessagesComponent } from './admin/view-messages/view-messages.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { BarangayClearanceComponent } from './admin/barangay-clearance/barangay-clearance.component';
import { PrintBrgyCertComponent } from './admin/print-brgy-cert/print-brgy-cert.component';
import { ZoneClearanceComponent } from './admin/zone-clearance/zone-clearance.component';
import { CertificateOfIndigencyComponent } from './admin/certificate-of-indigency/certificate-of-indigency.component';
import { CertificateOfResidencyComponent } from './admin/certificate-of-residency/certificate-of-residency.component';


//Define Routes
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'registration', component: RegistrationComponent},
    {path:'login', component: LoginComponent},
    {path:'forgot-password', component: ForgotPasswordComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'request-document', component: RequestDocumentComponent},
    {path:'request-logs', component: RequestLogsComponent},
    {path:'admin-dashboard', component: AdminDashboardComponent},
    {path:'view-messages', component: ViewMessagesComponent},
    {path:'main-header', component: MainHeaderComponent},
    {path:'barangay-clearance', component: BarangayClearanceComponent},
    {path:'barangay-clearance-print', component: PrintBrgyCertComponent},
    {path:'zone-clearance', component: ZoneClearanceComponent},
    {path:'certificate-of-indigency', component: CertificateOfIndigencyComponent},
    {path:'certificate-of-residency', component: CertificateOfResidencyComponent},
    {path:'**', component: NotFoundComponent}
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ]
    })
export class AppRoutingModule {}

