import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLeadComponent } from './components/create-lead/create-lead.component';
import { EditLeadComponent } from './components/edit-lead/edit-lead.component';

const routes: Routes = [
  {path:'create',component:CreateLeadComponent},
  {path:'edit/:leadId',component: EditLeadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
