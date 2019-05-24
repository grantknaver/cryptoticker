import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// 3rd Party
import * as firebase from 'firebase';



@Injectable()
export class AuthService {
    user: string;
    token: string;

    constructor(private router: Router) { }

    /**
     * Signup for Firebase SDK
     *
     * @param {string} email
     * @param {string} password
     * @memberof AuthService
     */
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(`signing up user ${email}`, response);
            }).catch((e) => { console.log(`error found signing up ${email}`, e); });
    }

    /**
     * Signs in to Firebase SDK
     *
     * @param {string} email
     * @param {string} password
     * @memberof AuthService
     */
    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log(`signing in user ${email}`, response);
                this.router.navigate(['cryptolist']);
                this.user = email;
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => {
                        this.token = token;
                    });
            }).catch((e) => { console.log(`error found signing in ${email}`, e); });
    }

    /**
     * Signs out of Firebase SDK
     *
     * @memberof AuthService
     */
    signoutUser() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['']);
    }

    /**
     * Gets auth token
     *
     * @returns
     * @memberof AuthService
     */
    getToken() {
        firebase.auth().currentUser.getIdToken()
        .then((token: string) => {
            this.token = token;
        });
        return this.token;
    }

    /**
     * Checks if user is authenticated
     *
     * @returns
     * @memberof AuthService
     */
    isAuthenticated() {
        return this.token != null;
    }
}
