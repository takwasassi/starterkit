import { Routes } from '@angular/router';
import { EndpointComponent } from '../endpoint/endpoint.component';
import { GetComponent } from '../endpoint/get/get.component';
import { UserComponent } from '../user/user.component';




export const MaterialRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'endpoint',
                component: EndpointComponent,
                data: {
                    title: 'POST EndPoint',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'POST EndPoint' }
                    ]
                }
            },
            {
                path: 'getendpoint',
                component: GetComponent,
                data: {
                    title: 'GET EndPoint',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'GET EndPoint' }
                    ]
                }
            },
            {
                path: 'user',
                component: UserComponent,
                data: {
                    title: 'List User',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'List User' }
                    ]
                }
            },
           
           
        ]
    }
];
