"use strict";
var router_1 = require("@angular/router");
var index_component_1 = require("./components/index.component");
var home_component_1 = require("./components/home.component");
var appRoutes = [
    {
        path: '',
        component: index_component_1.IndexComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map