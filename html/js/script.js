/*
 *  Copyright 2016 Google Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License")
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

/*
 * This is the starting point for the application
 * Configures all the window events, and starts the
 * application.
 * */

// Application starts
window.onload = function() {
    console.log("version: 0.2");
    UI.fillVertically();
    UI.init();
    Session.init();
    Chat.init();
    Cam.init();
    Game.init();
};

// Manage layout on resize
window.onresize = function() {
    UI.fillVertically();
};