import 'angular2/bundles/angular2-polyfills.js';
import 'zone.js';
import 'reflect-metadata';
import {Component, ApplicationRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import './app.css!';

import {LearnAngular} from "src/learnAngular/learnAngular";
import {Redux} from "src/redux/redux";
import {Material} from "src/material/material";
import {Cos} from "src/cos/cos";

@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [MATERIAL_DIRECTIVES, LearnAngular, Redux, Material, Cos],
    providers: [SidenavService]
})
export default class App {
    slogan: string;


    constructor(public sidenav: SidenavService){
        this.slogan = 'Angular 2';
        setTimeout(() => {
            this.slogan += ' learned';
        }, 2000);
        setTimeout(() => {
            this.slogan += ' properly';
        }, 4000);
    }

    hasMedia(breakSize: string): boolean {
        return Media.hasMedia(breakSize);
    }
    open(name: string) {
        this.sidenav.show(name);
    }
    close(name: string) {
        this.sidenav.hide(name);
    }

    onMenuClicked(){
        this.open('left');
    }
    onFavClicked(){
        alert('Heart');
    }
    onMoreClicked(){
        alert('More');
    }
}

bootstrap(App);
