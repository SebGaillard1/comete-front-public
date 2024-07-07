import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadIaComponent } from './upload-ia/upload-ia.component';
import { GestionsComptesComponent } from './gestions-comptes/gestions-comptes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload-ia', component: UploadIaComponent },
  { path: 'account', component: GestionsComptesComponent },
];
