import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
   
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/About.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginPageComponent } from './login-page/login-page.component';
    
const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'About',
      component: AboutComponent
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent
},

{
  path: 'Login',
  component: LoginPageComponent
}
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }