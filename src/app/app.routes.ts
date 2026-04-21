import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Convert } from './convert/convert';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'convert', component: Convert },
    { path: 'about', component: About }
];
