import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const router: Routes = [
    {
        path: 'auth',
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'graficas',
        loadChildren: ()=> import('./graficas/graficas.module').then(m=>m.GraficasModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(router)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule {}