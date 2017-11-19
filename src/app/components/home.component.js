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
var http_service_1 = require("../services/http.service");
var blacklist_1 = require("../interfaces/blacklist");
var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.blacklistData = [];
        this.row = new blacklist_1.C_blacklist();
        this.currentList = '';
        this.newRow = {};
        this.rowKeys = Object.keys(this.row);
    }
    HomeComponent.prototype.insert = function () {
        var _this = this;
        //this.blacklistData.push(this.newRow);
        this.http.insertBlacklist(this.newRow).subscribe(function (res) {
            _this.newRow = {};
        });
    };
    HomeComponent.prototype.edit = function (i) {
        this.http.setBlacklist(this.blacklistData[i]).subscribe(function (res) {
            console.log(res);
        });
    };
    HomeComponent.prototype.delete = function (i) {
        var _this = this;
        this.http.deleteBlacklist(this.blacklistData[i]).subscribe(function (res) {
            if (res.status === 'success')
                _this.blacklistData.splice(i, 1);
        });
    };
    HomeComponent.prototype.get = function (route) {
        var _this = this;
        this.http.getBlacklist(route).subscribe(function (res) {
            _this.blacklistData = res.data;
            _this.currentList = route;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: './home.component.html',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map