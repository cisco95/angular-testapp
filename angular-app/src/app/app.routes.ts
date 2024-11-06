import { Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { SpecificComponent } from './specific/specific.component';

export const routes: Routes = [
    {
        path: 'general',
        component: GeneralComponent,
        pathMatch: 'full',
    },
    {
        path: 'general/specific',
        component: SpecificComponent,
        pathMatch: 'full',
    }
];
