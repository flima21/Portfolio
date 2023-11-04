import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'loading',component:LoadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router) {
    this.showLoadingScreen();
  }

  showLoadingScreen() {
    this.router.navigate(['/loading']);

    setTimeout(() => {
      this.router.navigate(['/']);
    },3000); 
  }
}
