import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

// Sync Version
/**
 * Checks that password and repeatPassword control values match
 *
 * @export
 * @class RegistrationValidator
 */
export class RegistrationValidator {
    static validatePassword(registerFormGroup: FormGroup) {
        const password = registerFormGroup.controls.password.value;
        const repeatPassword = registerFormGroup.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;

    }

}

// Async Version
// export class RegistrationValidator {
//     static validate(registerFormGroup: FormGroup):  Promise<any> | Observable<any> {
//         const password = registerFormGroup.controls.password.value;
//         const repeatPassword = registerFormGroup.controls.repeatPassword.value;
//         const promise = new Promise<any>((resolve, reject) => {
//             if (repeatPassword.length <= 0) {
//                 resolve(null);
//             }
//             if (repeatPassword !== password) {
//                 resolve({doesMatchPassword: true});
//             }

//             resolve(null);
//         });
//         return promise;
//     }

// }


