import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DbComponent } from './pages/db/db.component';
import { MainTempDrComponent } from './pages/main-temp-dr/main-temp-dr.component';

const routes: Routes = [
  {path:'', component: MainFormComponent},
  {path:"form", component: MainFormComponent, pathMatch:'full'},
  {path:"formtd", component:MainTempDrComponent, pathMatch:'full'},
  {path: "db", component: DbComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
