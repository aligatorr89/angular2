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
var core_1 = require("@angular/core");
var http_service_1 = require("./services/http.service");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.loginData = {
            email: '',
            password: ''
        };
        this.registerData = {
            name: '',
            lastname: '',
            email: '',
            password: ''
        };
    }
    /*ngOnInit() {
        this.loginData = this.httpService.getLoginModel();
    }*/
    AppComponent.prototype.login = function () {
        this.httpService.postLogin(this.loginData).subscribe(function (statusText) {
            if (statusText === 'OK')
                console.log('OK');
        });
    };
    AppComponent.prototype.register = function () {
        this.httpService.postRegister(this.registerData).subscribe(function (statusText) {
            if (statusText === 'OK')
                console.log('OK');
        });
    };
    // test :3001/test api
    AppComponent.prototype.test = function () {
        this.httpService.test().subscribe(function (data) {
            console.log(data);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <p>This is the main API page. Please use one of the following URLs to access all information:</p>\n  <h1>User management</h1>\n\t<ul>\n\t\n\t\t<li>\n\t\t\t<a class=\"link\" href=\"login\">POST api/login</a>\n\t\t\t<p class=\"description\">Post fields:<br>email, password</p>\n\t\t\t\n\t\t\t<form>\n\t\t\t\t<input name=\"email\" type=\"text\" [(ngModel)]=\"loginData.email\" />\n\t\t\t\t<input name=\"password\" type=\"password\" [(ngModel)]=\"loginData.password\" />\t\n\t\t\t\t<button (click)=\"login()\">LOGIN</button>\n\t\t\t</form>\n\t\t</li>\n\t\t\n\t\t<li>\n\t\t\t<a class=\"link\" href=\"logout\">POST api/logout</a>\n\t\t\t<p class=\"description\">Post fields:<br>id</p>\n\t\t</li>\n\t\t\n\t\t<li>\n\t\t\t<a class=\"link\" href=\"register\">POST api/register</a>\n\t\t\t<p class=\"description\">Post fields:<br>name, lastname, email, password</p>\n\t\t\t\n\t\t\t<form method=\"post\" action=\"register\">\n\t\t\t\t<input name=\"name\" type=\"text\" [(ngModel)]=\"registerData.name\" />\n\t\t\t\t<input name=\"lastname\" type=\"text\" [(ngModel)]=\"registerData.lastname\" />\n\t\t\t\t<input name=\"email\" type=\"text\" [(ngModel)]=\"registerData.email\" />\n\t\t\t\t<input name=\"password\" type=\"password\" [(ngModel)]=\"registerData.password\" />\n\t\t\t\t<button type=\"submit\" (click)=\"register()\">REGISTER</button>\n\t\t\t</form>\n\t\t</li>\n\t\t\n\t</ul>\n  ",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map