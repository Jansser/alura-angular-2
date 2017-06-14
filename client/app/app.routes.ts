import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from  './list/list.component';

const appRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: 'cadastro', component: FormComponent },
    { path: 'cadastro/:id', component: FormComponent },
    { path: '**', component: ListComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);