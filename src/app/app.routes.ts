import { EditComponent } from './scheduling/edit/edit.component';
import { CreateSchedulingComponent } from './scheduling/create/create-scheduling.component';
import { Routes } from '@angular/router';
import { ChecklistMenuComponent } from './checklist/checklistMenu/checklist-menu.component';
import { HomeComponent } from './home/home.component';
import { ChecklistoneComponent } from './checklist/checklistone/checklistone.component';
import { ChecklistthreeComponent } from './checklist/checklistthree/checklistthree.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SchedulingHomeComponent } from './scheduling/scheduling-home/scheduling-home.component';
import { UserListComponent } from './user';
import { CreateUserComponent } from './user';
import { UserEditComponent } from './user';
import { LoginComponent } from './user';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'checklist/1', component: ChecklistoneComponent},
  { path: 'checklist/menu', component: ChecklistMenuComponent},
  { path: 'checklist/3', component: ChecklistthreeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: SchedulingHomeComponent },
  { path: 'agendamento/criar', component: CreateSchedulingComponent},
  { path: 'agendamento/editar/:id', component: EditComponent },
  { path: 'usuarios', component: UserListComponent},
  { path: 'usuarios/todos', component: UserListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: CreateUserComponent },
  { path: 'usuarios/editar/:id', component: UserEditComponent },
];
