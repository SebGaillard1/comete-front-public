import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UploadIaComponent } from './components/upload-ia/upload-ia.component';
import { GestionsComptesComponent } from './components/gestions-comptes/gestions-comptes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload-ia', component: UploadIaComponent },
  { path: 'account', component: GestionsComptesComponent },
];
