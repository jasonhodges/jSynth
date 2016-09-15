"use strict";
var router_1 = require("@angular/router");
var sound_component_1 = require("./sound/sound.component");
var note_service_1 = require("./sound/services/note.service");
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
    },
    {
        path: 'sound/note/notes.json',
        component: note_service_1.NoteService,
        pathMatch: 'full'
    }
];
var appRoutes = homeRoutes.concat(soundRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map