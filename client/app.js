"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var app_routes_1 = require('./imports/app.routes');
var header_1 = require('./includes/header/header');
var footer_1 = require('./includes/footer/footer');
var router_1 = require('@angular/router');
var App = (function () {
    function App() {
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!',
            'And another choice for you.', 'but wait! A third!'];
        this.title = 'Meteor-Angular 2';
    }
    App.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    App.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/client/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES, header_1.PageHeader, footer_1.PageFooter]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
platform_browser_dynamic_1.bootstrap(App, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=app.js.map