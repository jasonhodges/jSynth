"use strict";
var router_1 = require("@angular/router");
var sound_component_1 = require("./sound/sound.component");
var homeRoutes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    }
];
var soundRoutes = [
    {
        path: 'sound',
        component: sound_component_1.SoundComponent
    }
];
var appRoutes = homeRoutes.concat(soundRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map