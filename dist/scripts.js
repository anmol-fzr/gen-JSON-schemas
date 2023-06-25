"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scriptGen = exports.scriptInsert = void 0;
function scriptInsert(script, body) {
    body.appendChild(script);
}
exports.scriptInsert = scriptInsert;
function scriptGen(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.appendChild(JSON.parse(data));
    script.onload = () => {
        console.log('Script loaded successfuly');
    };
    script.onerror = () => {
        console.log('Error occurred while loading script');
    };
    return script;
}
exports.scriptGen = scriptGen;
