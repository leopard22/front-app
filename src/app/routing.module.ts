import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { SongsComponent } from './songs/songs.component';


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

const routes: Routes = [ 
    { path:'genre', component: TypeComponent },
    { path:'song', component: SongsComponent },
    { path:'song/:id', component: SongsComponent },
 ];

export class RoutingModule { }
