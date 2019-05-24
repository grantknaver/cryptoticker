import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { RegisterComponent } from './register/register.component';

// Guards
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cryptolist', component: CryptoListComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent}
];

/**
 * App routing module for PetStore
 *
 * @export
 * @class AppRoutingModule
 */

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
