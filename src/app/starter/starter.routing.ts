import { Routes } from '@angular/router';

import { GetComponent } from '../endpoint/get/get.component';
import { EndpointComponent } from '../endpoint/post/endpoint.component';
import { UpdateEndpointComponent } from '../endpoint/update/update-endpoint.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from '../user/user.component';


import { StarterComponent } from './starter.component';

export const StarterRoutes: Routes = [
    {
        path: '',
        component: StarterComponent,
        data: {
            title: 'Starter Page',
            urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Starter Page' }
            ]
        }
    },
    {
    path: 'endpoint',
    component: EndpointComponent
   },
   {
    path: 'getendpoint',
    component: GetComponent
   },
   {
    path: 'upd-endpoint',
    component: UpdateEndpointComponent
   },
   
   {
    path: 'user',
    component: UserComponent
   },

   {
    path: 'profile',
    component: ProfileComponent
   },
  
  
];
