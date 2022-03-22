import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EditComponent} from "./components/edit/edit.component";
import { FilterComponent } from './components/filter/filter.component';
import{ListComponent} from './components/list/list.component';


const routes: Routes = [  
  {path: 'edit/:id', component:EditComponent},
  {path: 'search/:q', component:FilterComponent},
  { path: '', component:ListComponent },
  { path: '**',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
