import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { KomponenComponent } from './komponen/komponen.component';

const routes: Routes = [

  {path:'komponen',component:KomponenComponent},
  {path:'about',component:AboutComponent},
  {path:'komponenupdate/:id', component:KomponenComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
