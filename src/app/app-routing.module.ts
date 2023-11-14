import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HeroComponent},
  {path: 'featured', component: FeaturedComponent},
  {path: 'earn', component: SignupComponent},
  { path: 'contact', component: FooterComponent },
  {path:'**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
