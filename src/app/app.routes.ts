import { Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ContactusComponent } from '../../components/contactus/contactus.component';
import { ServicesComponent } from '../../components/services/services.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
     {path:'about', component:AboutComponent},
     {path:'footer', component:FooterComponent},
     {path:'header', component:HeaderComponent},
     {path:'contactus', component:ContactusComponent},
     {path:'services', component:ServicesComponent},
     {path:'projects', component:ProjectsComponent},
];
