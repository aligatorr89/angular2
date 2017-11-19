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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var core_2 = require("angular2-cookie/core");
var HttpService = (function () {
    function HttpService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.url = 'http://localhost:3001/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ 'headers': this.headers, withCredentials: true });
        console.log("HttpService on...");
    }
    HttpService.prototype.insertBlacklist = function (row) {
        var params = new http_1.URLSearchParams();
        for (var key in row)
            params.set(key, row[key]);
        return this.http.post(this.url + 'insert', params.toString(), this.options)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.getBlacklist = function (route) {
        return this.http.get(this.url + route, this.options)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.setBlacklist = function (row) {
        var params = new http_1.URLSearchParams();
        for (var key in row)
            params.set(key, row[key]);
        return this.http.post(this.url + 'edit', params.toString(), this.options)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.deleteBlacklist = function (row) {
        var params = new http_1.URLSearchParams();
        params.set('id', row.id.toString());
        return this.http.post(this.url + 'delete', params.toString(), this.options)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.postLogin = function (data) {
        var params = new http_1.URLSearchParams();
        for (var key in data)
            params.set(key, data[key]);
        return this.http.post(this.url + 'login', params.toString(), this.options)
            .map(function (res) { return res.statusText; });
    };
    HttpService.prototype.logout = function () {
        return this.http.post(this.url + 'logout', '', this.options)
            .map(function (res) { return res.statusText; });
    };
    HttpService.prototype.postRegister = function (data) {
        var params = new http_1.URLSearchParams();
        for (var key in data)
            params.set(key, data[key]);
        return this.http.post(this.url + 'register', params.toString(), this.options)
            .map(function (res) { return res.statusText; });
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_2.CookieService])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map