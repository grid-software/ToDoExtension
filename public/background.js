/*! msal v1.4.4 2020-11-11 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("Msal", [], factory);
    else if (typeof exports === 'object')
        exports["Msal"] = factory();
    else
        root["Msal"] = factory();
})(window, function () {
    return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
                /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
                /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
            /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
                /******/
}
            /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
            /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
            /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
        /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            Object.defineProperty(exports, "__esModule", { value: true });
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) {
                        for (var p in b)
                            if (b.hasOwnProperty(p))
                                d[p] = b[p];
                    };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            exports.__extends = __extends;
            exports.__assign = function () {
                exports.__assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return exports.__assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            exports.__rest = __rest;
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            exports.__decorate = __decorate;
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            exports.__param = __param;
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            exports.__metadata = __metadata;
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            exports.__awaiter = __awaiter;
            function __generator(thisArg, body) {
                var _ = {
                    label: 0, sent: function () {
                        if (t[0] & 1)
                            throw t[1]; return t[1];
                    }, trys: [], ops: []
                }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            exports.__generator = __generator;
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            exports.__exportStar = __exportStar;
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            exports.__values = __values;
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            exports.__read = __read;
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            exports.__spread = __spread;
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            exports.__spreadArrays = __spreadArrays;
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            exports.__await = __await;
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) {
                    if (g[n])
                        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); };
                }
                function resume(n, v) {
                    try {
                        step(g[n](v));
                    }
                    catch (e) {
                        settle(q[0][3], e);
                    }
                }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) {
                    if (f(v), q.shift(), q.length)
                        resume(q[0][0], q[0][1]);
                }
            }
            exports.__asyncGenerator = __asyncGenerator;
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            exports.__asyncDelegator = __asyncDelegator;
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            exports.__asyncValues = __asyncValues;
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            exports.__makeTemplateObject = __makeTemplateObject;
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            exports.__importStar = __importStar;
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            exports.__importDefault = __importDefault;


            /***/
}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             * Constants
             */
            var Constants = /** @class */ (function () {
                function Constants() {
                }
                Object.defineProperty(Constants, "libraryName", {
                    get: function () { return "Msal.js"; } // used in telemetry sdkName
                    ,
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "claims", {
                    get: function () { return "claims"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "clientId", {
                    get: function () { return "clientId"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "adalIdToken", {
                    get: function () { return "adal.idtoken"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "cachePrefix", {
                    get: function () { return "msal"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "scopes", {
                    get: function () { return "scopes"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "no_account", {
                    get: function () { return "NO_ACCOUNT"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "upn", {
                    get: function () { return "upn"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "domain_hint", {
                    get: function () { return "domain_hint"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "prompt_select_account", {
                    get: function () { return "&prompt=select_account"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "prompt_none", {
                    get: function () { return "&prompt=none"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "prompt", {
                    get: function () { return "prompt"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "response_mode_fragment", {
                    get: function () { return "&response_mode=fragment"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "resourceDelimiter", {
                    get: function () { return "|"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "cacheDelimiter", {
                    get: function () { return "."; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "popUpWidth", {
                    get: function () { return this._popUpWidth; },
                    set: function (width) {
                        this._popUpWidth = width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "popUpHeight", {
                    get: function () { return this._popUpHeight; },
                    set: function (height) {
                        this._popUpHeight = height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "login", {
                    get: function () { return "LOGIN"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "renewToken", {
                    get: function () { return "RENEW_TOKEN"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "unknown", {
                    get: function () { return "UNKNOWN"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "ADFS", {
                    get: function () { return "adfs"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "homeAccountIdentifier", {
                    get: function () { return "homeAccountIdentifier"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "common", {
                    get: function () { return "common"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "openidScope", {
                    get: function () { return "openid"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "profileScope", {
                    get: function () { return "profile"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "oidcScopes", {
                    get: function () { return [this.openidScope, this.profileScope]; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "interactionTypeRedirect", {
                    get: function () { return "redirectInteraction"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "interactionTypePopup", {
                    get: function () { return "popupInteraction"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "interactionTypeSilent", {
                    get: function () { return "silentInteraction"; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Constants, "inProgress", {
                    get: function () { return "inProgress"; },
                    enumerable: true,
                    configurable: true
                });
                Constants._popUpWidth = 483;
                Constants._popUpHeight = 600;
                return Constants;
            }());
            exports.Constants = Constants;
            /**
             * Keys in the hashParams
             */
            var ServerHashParamKeys;
            (function (ServerHashParamKeys) {
                ServerHashParamKeys["SCOPE"] = "scope";
                ServerHashParamKeys["STATE"] = "state";
                ServerHashParamKeys["ERROR"] = "error";
                ServerHashParamKeys["ERROR_DESCRIPTION"] = "error_description";
                ServerHashParamKeys["ACCESS_TOKEN"] = "access_token";
                ServerHashParamKeys["ID_TOKEN"] = "id_token";
                ServerHashParamKeys["EXPIRES_IN"] = "expires_in";
                ServerHashParamKeys["SESSION_STATE"] = "session_state";
                ServerHashParamKeys["CLIENT_INFO"] = "client_info";
            })(ServerHashParamKeys = exports.ServerHashParamKeys || (exports.ServerHashParamKeys = {}));
            /**
             * @hidden
             * @ignore
             * response_type from OpenIDConnect
             * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
             *
             */
            exports.ResponseTypes = {
                id_token: "id_token",
                token: "token",
                id_token_token: "id_token token"
            };
            /**
             * @hidden
             * CacheKeys for MSAL
             */
            var TemporaryCacheKeys;
            (function (TemporaryCacheKeys) {
                TemporaryCacheKeys["AUTHORITY"] = "authority";
                TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireTokenAccount";
                TemporaryCacheKeys["SESSION_STATE"] = "session.state";
                TemporaryCacheKeys["STATE_LOGIN"] = "state.login";
                TemporaryCacheKeys["STATE_ACQ_TOKEN"] = "state.acquireToken";
                TemporaryCacheKeys["STATE_RENEW"] = "state.renew";
                TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.idtoken";
                TemporaryCacheKeys["LOGIN_REQUEST"] = "login.request";
                TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
                TemporaryCacheKeys["URL_HASH"] = "urlHash";
                TemporaryCacheKeys["INTERACTION_STATUS"] = "interaction_status";
                TemporaryCacheKeys["REDIRECT_REQUEST"] = "redirect_request";
            })(TemporaryCacheKeys = exports.TemporaryCacheKeys || (exports.TemporaryCacheKeys = {}));
            var PersistentCacheKeys;
            (function (PersistentCacheKeys) {
                PersistentCacheKeys["IDTOKEN"] = "idtoken";
                PersistentCacheKeys["CLIENT_INFO"] = "client.info";
            })(PersistentCacheKeys = exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
            var ErrorCacheKeys;
            (function (ErrorCacheKeys) {
                ErrorCacheKeys["LOGIN_ERROR"] = "login.error";
                ErrorCacheKeys["ERROR"] = "error";
                ErrorCacheKeys["ERROR_DESC"] = "error.description";
            })(ErrorCacheKeys = exports.ErrorCacheKeys || (exports.ErrorCacheKeys = {}));
            exports.DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common/";
            exports.AAD_INSTANCE_DISCOVERY_ENDPOINT = exports.DEFAULT_AUTHORITY + "/discovery/instance?api-version=1.1&authorization_endpoint=";
            exports.WELL_KNOWN_SUFFIX = ".well-known/openid-configuration";
            /**
             * @hidden
             * SSO Types - generated to populate hints
             */
            var SSOTypes;
            (function (SSOTypes) {
                SSOTypes["ACCOUNT"] = "account";
                SSOTypes["SID"] = "sid";
                SSOTypes["LOGIN_HINT"] = "login_hint";
                SSOTypes["ORGANIZATIONS"] = "organizations";
                SSOTypes["ID_TOKEN"] = "id_token";
                SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
                SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
            })(SSOTypes = exports.SSOTypes || (exports.SSOTypes = {}));
            /**
             * @hidden
             */
            exports.BlacklistedEQParams = [
                SSOTypes.SID,
                SSOTypes.LOGIN_HINT
            ];
            exports.NetworkRequestType = {
                GET: "GET",
                POST: "POST"
            };
            /**
             * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
             * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
             * internal partners too, hence the choice of generic "string" type instead of the "enum"
             * @hidden
             */
            exports.PromptState = {
                LOGIN: "login",
                SELECT_ACCOUNT: "select_account",
                CONSENT: "consent",
                NONE: "none"
            };
            /**
             * Frame name prefixes for the hidden iframe created in silent frames
             */
            exports.FramePrefix = {
                ID_TOKEN_FRAME: "msalIdTokenFrame",
                TOKEN_FRAME: "msalRenewFrame"
            };
            /**
             * MSAL JS Library Version
             */
            function libraryVersion() {
                return "1.4.4";
            }
            exports.libraryVersion = libraryVersion;


            /***/
}),
/* 2 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             */
            var StringUtils = /** @class */ (function () {
                function StringUtils() {
                }
                /**
                 * Check if a string is empty
                 *
                 * @param str
                 */
                StringUtils.isEmpty = function (str) {
                    return (typeof str === "undefined" || !str || 0 === str.length);
                };
                /**
                 * Check if a string's value is a valid JSON object
                 *
                 * @param str
                 */
                StringUtils.validateAndParseJsonCacheKey = function (str) {
                    try {
                        var parsedKey = JSON.parse(str);
                        /**
                         * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
                         * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
                         * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
                         *
                         */
                        return (parsedKey && typeof parsedKey === "object") ? parsedKey : null;
                    }
                    catch (error) {
                        return null;
                    }
                };
                return StringUtils;
            }());
            exports.StringUtils = StringUtils;


            /***/
}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             */
            var CryptoUtils = /** @class */ (function () {
                function CryptoUtils() {
                }
                /**
                 * Creates a new random GUID
                 * @returns string (GUID)
                 */
                CryptoUtils.createNewGuid = function () {
                    /*
                     * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
                     * pseudo-random numbers.
                     * The algorithm is as follows:
                     *     Set the two most significant bits (bits 6 and 7) of the
                     *        clock_seq_hi_and_reserved to zero and one, respectively.
                     *     Set the four most significant bits (bits 12 through 15) of the
                     *        time_hi_and_version field to the 4-bit version number from
                     *        Section 4.1.3. Version4
                     *     Set all the other bits to randomly (or pseudo-randomly) chosen
                     *     values.
                     * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
                     * time-low               = 4hexOctet
                     * time-mid               = 2hexOctet
                     * time-high-and-version  = 2hexOctet
                     * clock-seq-and-reserved = hexOctet:
                     * clock-seq-low          = hexOctet
                     * node                   = 6hexOctet
                     * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
                     * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
                     * y values are 8, 9, A, B
                     */
                    var cryptoObj = window.crypto; // for IE 11
                    if (cryptoObj && cryptoObj.getRandomValues) {
                        var buffer = new Uint8Array(16);
                        cryptoObj.getRandomValues(buffer);
                        // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                        buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
                        buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                        // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                        buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
                        buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
                        return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                            + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                            + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                            + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                            + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                            + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                            + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                            + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
                    }
                    else {
                        var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                        var hex = "0123456789abcdef";
                        var r = 0;
                        var guidResponse = "";
                        for (var i = 0; i < 36; i++) {
                            if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                                // each x and y needs to be random
                                r = Math.random() * 16 | 0;
                            }
                            if (guidHolder[i] === "x") {
                                guidResponse += hex[r];
                            }
                            else if (guidHolder[i] === "y") {
                                // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                                r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                                r |= 0x8; // set pos 3 to 1 as 1???
                                guidResponse += hex[r];
                            }
                            else {
                                guidResponse += guidHolder[i];
                            }
                        }
                        return guidResponse;
                    }
                };
                /**
                 * verifies if a string is  GUID
                 * @param guid
                 */
                CryptoUtils.isGuid = function (guid) {
                    var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                    return regexGuid.test(guid);
                };
                /**
                 * Decimal to Hex
                 *
                 * @param num
                 */
                CryptoUtils.decimalToHex = function (num) {
                    var hex = num.toString(16);
                    while (hex.length < 2) {
                        hex = "0" + hex;
                    }
                    return hex;
                };
                // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
                /**
                 * encoding string to base64 - platform specific check
                 *
                 * @param input
                 */
                CryptoUtils.base64Encode = function (input) {
                    return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
                        return String.fromCharCode(Number("0x" + p1));
                    }));
                };
                /**
                 * Decodes a base64 encoded string.
                 *
                 * @param input
                 */
                CryptoUtils.base64Decode = function (input) {
                    var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
                    switch (encodedString.length % 4) {
                        case 0:
                            break;
                        case 2:
                            encodedString += "==";
                            break;
                        case 3:
                            encodedString += "=";
                            break;
                        default:
                            throw new Error("Invalid base64 string");
                    }
                    return decodeURIComponent(atob(encodedString).split("").map(function (c) {
                        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                    }).join(""));
                };
                /**
                 * deserialize a string
                 *
                 * @param query
                 */
                CryptoUtils.deserialize = function (query) {
                    var match; // Regex for replacing addition symbol with a space
                    var pl = /\+/g;
                    var search = /([^&=]+)=([^&]*)/g;
                    var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
                    var obj = {};
                    match = search.exec(query);
                    while (match) {
                        obj[decode(match[1])] = decode(match[2]);
                        match = search.exec(query);
                    }
                    return obj;
                };
                return CryptoUtils;
            }());
            exports.CryptoUtils = CryptoUtils;


            /***/
}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var Constants_1 = __webpack_require__(1);
            var ScopeSet_1 = __webpack_require__(7);
            var StringUtils_1 = __webpack_require__(2);
            var CryptoUtils_1 = __webpack_require__(3);
            /**
             * @hidden
             */
            var UrlUtils = /** @class */ (function () {
                function UrlUtils() {
                }
                /**
                 * generates the URL with QueryString Parameters
                 * @param scopes
                 */
                UrlUtils.createNavigateUrl = function (serverRequestParams) {
                    var str = this.createNavigationUrlString(serverRequestParams);
                    var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
                    // if the endpoint already has queryparams, lets add to it, otherwise add the first one
                    if (authEndpoint.indexOf("?") < 0) {
                        authEndpoint += "?";
                    }
                    else {
                        authEndpoint += "&";
                    }
                    var requestUrl = "" + authEndpoint + str.join("&");
                    return requestUrl;
                };
                /**
                 * Generate the array of all QueryStringParams to be sent to the server
                 * @param scopes
                 */
                UrlUtils.createNavigationUrlString = function (serverRequestParams) {
                    var scopes = ScopeSet_1.ScopeSet.appendDefaultScopes(serverRequestParams.scopes);
                    var str = [];
                    str.push("response_type=" + serverRequestParams.responseType);
                    str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
                    str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
                    str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
                    str.push("state=" + encodeURIComponent(serverRequestParams.state));
                    str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
                    str.push("client_info=1");
                    str.push("x-client-SKU=" + serverRequestParams.xClientSku);
                    str.push("x-client-Ver=" + serverRequestParams.xClientVer);
                    if (serverRequestParams.promptValue) {
                        str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
                    }
                    if (serverRequestParams.claimsValue) {
                        str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
                    }
                    if (serverRequestParams.queryParameters) {
                        str.push(serverRequestParams.queryParameters);
                    }
                    if (serverRequestParams.extraQueryParameters) {
                        str.push(serverRequestParams.extraQueryParameters);
                    }
                    str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
                    return str;
                };
                /**
                 * Returns current window URL as redirect uri
                 */
                UrlUtils.getCurrentUrl = function () {
                    return window.location.href.split("?")[0].split("#")[0];
                };
                /**
                 * Returns given URL with query string removed
                 */
                UrlUtils.removeHashFromUrl = function (url) {
                    return url.split("#")[0];
                };
                /**
                 * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
                 * @param href The url
                 * @param tenantId The tenant id to replace
                 */
                UrlUtils.replaceTenantPath = function (url, tenantId) {
                    var lowerCaseUrl = url.toLowerCase();
                    var urlObject = this.GetUrlComponents(lowerCaseUrl);
                    var pathArray = urlObject.PathSegments;
                    if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
                        pathArray[0] = tenantId;
                    }
                    return this.constructAuthorityUriFromObject(urlObject, pathArray);
                };
                UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
                    return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
                };
                /**
                 * Checks if an authority is common (ex. https://a:b/common/)
                 * @param url The url
                 * @returns true if authority is common and false otherwise
                 */
                UrlUtils.isCommonAuthority = function (url) {
                    var authority = this.CanonicalizeUri(url);
                    var pathArray = this.GetUrlComponents(authority).PathSegments;
                    return (pathArray.length !== 0 && pathArray[0] === Constants_1.Constants.common);
                };
                /**
                 * Checks if an authority is for organizations (ex. https://a:b/organizations/)
                 * @param url The url
                 * @returns true if authority is for  and false otherwise
                 */
                UrlUtils.isOrganizationsAuthority = function (url) {
                    var authority = this.CanonicalizeUri(url);
                    var pathArray = this.GetUrlComponents(authority).PathSegments;
                    return (pathArray.length !== 0 && pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS);
                };
                /**
                 * Parses out the components from a url string.
                 * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
                 */
                UrlUtils.GetUrlComponents = function (url) {
                    if (!url) {
                        throw "Url required";
                    }
                    // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
                    var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
                    var match = url.match(regEx);
                    if (!match || match.length < 6) {
                        throw "Valid url required";
                    }
                    var urlComponents = {
                        Protocol: match[1],
                        HostNameAndPort: match[4],
                        AbsolutePath: match[5]
                    };
                    var pathSegments = urlComponents.AbsolutePath.split("/");
                    pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
                    urlComponents.PathSegments = pathSegments;
                    if (match[6]) {
                        urlComponents.Search = match[6];
                    }
                    if (match[8]) {
                        urlComponents.Hash = match[8];
                    }
                    return urlComponents;
                };
                /**
                 * Given a url or path, append a trailing slash if one doesnt exist
                 *
                 * @param url
                 */
                UrlUtils.CanonicalizeUri = function (url) {
                    if (url) {
                        url = url.toLowerCase();
                    }
                    if (url && !UrlUtils.endsWith(url, "/")) {
                        url += "/";
                    }
                    return url;
                };
                /**
                 * Checks to see if the url ends with the suffix
                 * Required because we are compiling for es5 instead of es6
                 * @param url
                 * @param str
                 */
                // TODO: Rename this, not clear what it is supposed to do
                UrlUtils.endsWith = function (url, suffix) {
                    if (!url || !suffix) {
                        return false;
                    }
                    return url.indexOf(suffix, url.length - suffix.length) !== -1;
                };
                /**
                 * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
                 * @param url
                 * @param name
                 */
                UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
                    if (StringUtils_1.StringUtils.isEmpty(url)) {
                        return url;
                    }
                    var regex = new RegExp("(\\&" + name + "=)[^\&]+");
                    url = url.replace(regex, "");
                    // name=value&
                    regex = new RegExp("(" + name + "=)[^\&]+&");
                    url = url.replace(regex, "");
                    // name=value
                    regex = new RegExp("(" + name + "=)[^\&]+");
                    url = url.replace(regex, "");
                    return url;
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * Returns the anchor part(#) of the URL
                 */
                UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
                    var hashIndex1 = urlStringOrFragment.indexOf("#");
                    var hashIndex2 = urlStringOrFragment.indexOf("#/");
                    if (hashIndex2 > -1) {
                        return urlStringOrFragment.substring(hashIndex2 + 2);
                    }
                    else if (hashIndex1 > -1) {
                        return urlStringOrFragment.substring(hashIndex1 + 1);
                    }
                    return urlStringOrFragment;
                };
                /**
                 * @hidden
                 * Check if the url contains a hash with known properties
                 * @ignore
                 */
                UrlUtils.urlContainsHash = function (urlString) {
                    var parameters = UrlUtils.deserializeHash(urlString);
                    return (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) ||
                        parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR) ||
                        parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN) ||
                        parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN));
                };
                /**
                 * @hidden
                 * Returns deserialized portion of URL hash
                 * @ignore
                 */
                UrlUtils.deserializeHash = function (urlFragment) {
                    var hash = UrlUtils.getHashFromUrl(urlFragment);
                    return CryptoUtils_1.CryptoUtils.deserialize(hash);
                };
                /**
                 * @ignore
                 * @param {string} URI
                 * @returns {string} host from the URI
                 *
                 * extract URI from the host
                 */
                UrlUtils.getHostFromUri = function (uri) {
                    // remove http:// or https:// from uri
                    var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
                    extractedUri = extractedUri.split("/")[0];
                    return extractedUri;
                };
                return UrlUtils;
            }());
            exports.UrlUtils = UrlUtils;


            /***/
}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var ClientAuthError_1 = __webpack_require__(6);
            exports.ClientConfigurationErrorMessage = {
                configurationNotSet: {
                    code: "no_config_set",
                    desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
                },
                storageNotSupported: {
                    code: "storage_not_supported",
                    desc: "The value for the cacheLocation is not supported."
                },
                noRedirectCallbacksSet: {
                    code: "no_redirect_callbacks",
                    desc: "No redirect callbacks have been set. Please call handleRedirectCallback() with the appropriate function arguments before continuing. " +
                        "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
                },
                invalidCallbackObject: {
                    code: "invalid_callback_object",
                    desc: "The object passed for the callback was invalid. " +
                        "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
                },
                scopesRequired: {
                    code: "scopes_required",
                    desc: "Scopes are required to obtain an access token."
                },
                emptyScopes: {
                    code: "empty_input_scopes_error",
                    desc: "Scopes cannot be passed as empty array."
                },
                nonArrayScopes: {
                    code: "nonarray_input_scopes_error",
                    desc: "Scopes cannot be passed as non-array."
                },
                invalidPrompt: {
                    code: "invalid_prompt_value",
                    desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
                },
                invalidAuthorityType: {
                    code: "invalid_authority_type",
                    desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
                },
                authorityUriInsecure: {
                    code: "authority_uri_insecure",
                    desc: "Authority URIs must use https."
                },
                authorityUriInvalidPath: {
                    code: "authority_uri_invalid_path",
                    desc: "Given authority URI is invalid."
                },
                unsupportedAuthorityValidation: {
                    code: "unsupported_authority_validation",
                    desc: "The authority validation is not supported for this authority type."
                },
                untrustedAuthority: {
                    code: "untrusted_authority",
                    desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter or set validateAuthority=false."
                },
                b2cAuthorityUriInvalidPath: {
                    code: "b2c_authority_uri_invalid_path",
                    desc: "The given URI for the B2C authority is invalid."
                },
                b2cKnownAuthoritiesNotSet: {
                    code: "b2c_known_authorities_not_set",
                    desc: "Must set known authorities when validateAuthority is set to True and using B2C"
                },
                claimsRequestParsingError: {
                    code: "claims_request_parsing_error",
                    desc: "Could not parse the given claims request object."
                },
                emptyRequestError: {
                    code: "empty_request_error",
                    desc: "Request object is required."
                },
                invalidCorrelationIdError: {
                    code: "invalid_guid_sent_as_correlationId",
                    desc: "Please set the correlationId as a valid guid"
                },
                telemetryConfigError: {
                    code: "telemetry_config_error",
                    desc: "Telemetry config is not configured with required values"
                },
                ssoSilentError: {
                    code: "sso_silent_error",
                    desc: "request must contain either sid or login_hint"
                },
                invalidAuthorityMetadataError: {
                    code: "authority_metadata_error",
                    desc: "Invalid authorityMetadata. Must be a JSON object containing authorization_endpoint, end_session_endpoint, and issuer fields."
                }
            };
            /**
             * Error thrown when there is an error in configuration of the .js library.
             */
            var ClientConfigurationError = /** @class */ (function (_super) {
                tslib_1.__extends(ClientConfigurationError, _super);
                function ClientConfigurationError(errorCode, errorMessage) {
                    var _this = _super.call(this, errorCode, errorMessage) || this;
                    _this.name = "ClientConfigurationError";
                    Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
                    return _this;
                }
                ClientConfigurationError.createNoSetConfigurationError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
                };
                ClientConfigurationError.createStorageNotSupportedError = function (givenCacheLocation) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.storageNotSupported.code, exports.ClientConfigurationErrorMessage.storageNotSupported.desc + " Given location: " + givenCacheLocation);
                };
                ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
                };
                ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
                };
                ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
                };
                ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
                };
                ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
                };
                ClientConfigurationError.createInvalidPromptError = function (promptValue) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
                };
                ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
                };
                ClientConfigurationError.createEmptyRequestError = function () {
                    var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
                    return new ClientConfigurationError(code, desc);
                };
                ClientConfigurationError.createInvalidCorrelationIdError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.code, exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.desc);
                };
                ClientConfigurationError.createKnownAuthoritiesNotSetError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.code, exports.ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.desc);
                };
                ClientConfigurationError.createInvalidAuthorityTypeError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidAuthorityType.code, exports.ClientConfigurationErrorMessage.invalidAuthorityType.desc);
                };
                ClientConfigurationError.createUntrustedAuthorityError = function (host) {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.untrustedAuthority.code, exports.ClientConfigurationErrorMessage.untrustedAuthority.desc + " Provided Authority: " + host);
                };
                ClientConfigurationError.createTelemetryConfigError = function (config) {
                    var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
                    var requiredKeys = {
                        applicationName: "string",
                        applicationVersion: "string",
                        telemetryEmitter: "function"
                    };
                    var missingKeys = Object.keys(requiredKeys)
                        .reduce(function (keys, key) {
                            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
                        }, []);
                    return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
                };
                ClientConfigurationError.createSsoSilentError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.ssoSilentError.code, exports.ClientConfigurationErrorMessage.ssoSilentError.desc);
                };
                ClientConfigurationError.createInvalidAuthorityMetadataError = function () {
                    return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidAuthorityMetadataError.code, exports.ClientConfigurationErrorMessage.invalidAuthorityMetadataError.desc);
                };
                return ClientConfigurationError;
            }(ClientAuthError_1.ClientAuthError));
            exports.ClientConfigurationError = ClientConfigurationError;


            /***/
}),
/* 6 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var AuthError_1 = __webpack_require__(8);
            var StringUtils_1 = __webpack_require__(2);
            exports.ClientAuthErrorMessage = {
                multipleCacheAuthorities: {
                    code: "multiple_authorities",
                    desc: "Multiple authorities found in the cache. Pass authority in the API overload."
                },
                endpointResolutionError: {
                    code: "endpoints_resolution_error",
                    desc: "Error: could not resolve endpoints. Please check network and try again."
                },
                popUpWindowError: {
                    code: "popup_window_error",
                    desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
                },
                tokenRenewalError: {
                    code: "token_renewal_error",
                    desc: "Token renewal operation failed due to timeout."
                },
                invalidIdToken: {
                    code: "invalid_id_token",
                    desc: "Invalid ID token format."
                },
                invalidStateError: {
                    code: "invalid_state_error",
                    desc: "Invalid state."
                },
                nonceMismatchError: {
                    code: "nonce_mismatch_error",
                    desc: "Nonce is not matching, Nonce received: "
                },
                loginProgressError: {
                    code: "login_progress_error",
                    desc: "Login_In_Progress: Error during login call - login is already in progress."
                },
                acquireTokenProgressError: {
                    code: "acquiretoken_progress_error",
                    desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
                },
                userCancelledError: {
                    code: "user_cancelled",
                    desc: "User cancelled the flow."
                },
                callbackError: {
                    code: "callback_error",
                    desc: "Error occurred in token received callback function."
                },
                userLoginRequiredError: {
                    code: "user_login_error",
                    desc: "User login is required. For silent calls, request must contain either sid or login_hint"
                },
                userDoesNotExistError: {
                    code: "user_non_existent",
                    desc: "User object does not exist. Please call a login API."
                },
                clientInfoDecodingError: {
                    code: "client_info_decoding_error",
                    desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
                },
                clientInfoNotPopulatedError: {
                    code: "client_info_not_populated_error",
                    desc: "The service did not populate client_info in the response, Please verify with the service team"
                },
                nullOrEmptyIdToken: {
                    code: "null_or_empty_id_token",
                    desc: "The idToken is null or empty. Please review the trace to determine the root cause."
                },
                idTokenNotParsed: {
                    code: "id_token_parsing_error",
                    desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
                },
                tokenEncodingError: {
                    code: "token_encoding_error",
                    desc: "The token to be decoded is not encoded correctly."
                },
                invalidInteractionType: {
                    code: "invalid_interaction_type",
                    desc: "The interaction type passed to the handler was incorrect or unknown"
                },
                cacheParseError: {
                    code: "cannot_parse_cache",
                    desc: "The cached token key is not a valid JSON and cannot be parsed"
                },
                blockTokenRequestsInHiddenIframe: {
                    code: "block_token_requests",
                    desc: "Token calls are blocked in hidden iframes"
                }
            };
            /**
             * Error thrown when there is an error in the client code running on the browser.
             */
            var ClientAuthError = /** @class */ (function (_super) {
                tslib_1.__extends(ClientAuthError, _super);
                function ClientAuthError(errorCode, errorMessage) {
                    var _this = _super.call(this, errorCode, errorMessage) || this;
                    _this.name = "ClientAuthError";
                    Object.setPrototypeOf(_this, ClientAuthError.prototype);
                    return _this;
                }
                ClientAuthError.createEndpointResolutionError = function (errDetail) {
                    var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
                    if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
                        errorMessage += " Details: " + errDetail;
                    }
                    return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
                };
                ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
                };
                ClientAuthError.createPopupWindowError = function (errDetail) {
                    var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
                    if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
                        errorMessage += " Details: " + errDetail;
                    }
                    return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
                };
                ClientAuthError.createTokenRenewalTimeoutError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
                };
                ClientAuthError.createInvalidIdTokenError = function (idToken) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
                };
                // TODO: Is this not a security flaw to send the user the state expected??
                ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
                };
                // TODO: Is this not a security flaw to send the user the Nonce expected??
                ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
                };
                ClientAuthError.createLoginInProgressError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
                };
                ClientAuthError.createAcquireTokenInProgressError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
                };
                ClientAuthError.createUserCancelledError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
                };
                ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
                };
                ClientAuthError.createUserLoginRequiredError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
                };
                ClientAuthError.createUserDoesNotExistError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
                };
                ClientAuthError.createClientInfoDecodingError = function (caughtError) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
                };
                ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
                };
                ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
                };
                ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
                };
                ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
                };
                ClientAuthError.createInvalidInteractionTypeError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
                };
                ClientAuthError.createCacheParseError = function (key) {
                    var errorMessage = "invalid key: " + key + ", " + exports.ClientAuthErrorMessage.cacheParseError.desc;
                    return new ClientAuthError(exports.ClientAuthErrorMessage.cacheParseError.code, errorMessage);
                };
                ClientAuthError.createBlockTokenRequestsInHiddenIframeError = function () {
                    return new ClientAuthError(exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.code, exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.desc);
                };
                return ClientAuthError;
            }(AuthError_1.AuthError));
            exports.ClientAuthError = ClientAuthError;


            /***/
}),
/* 7 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ClientConfigurationError_1 = __webpack_require__(5);
            var Constants_1 = __webpack_require__(1);
            var ScopeSet = /** @class */ (function () {
                function ScopeSet() {
                }
                /**
                 * Check if there are dup scopes in a given request
                 *
                 * @param cachedScopes
                 * @param scopes
                 */
                // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
                ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
                    var convertedCachedScopes = this.trimAndConvertArrayToLowerCase(cachedScopes.slice());
                    var requestScopes = this.trimAndConvertArrayToLowerCase(scopes.slice());
                    for (var i = 0; i < requestScopes.length; i++) {
                        if (convertedCachedScopes.indexOf(requestScopes[i].toLowerCase()) > -1) {
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * Check if a given scope is present in the request
                 *
                 * @param cachedScopes
                 * @param scopes
                 */
                ScopeSet.containsScope = function (cachedScopes, scopes) {
                    var convertedCachedScopes = this.trimAndConvertArrayToLowerCase(cachedScopes.slice());
                    var requestScopes = this.trimAndConvertArrayToLowerCase(scopes.slice());
                    return requestScopes.every(function (value) { return convertedCachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
                };
                /**
                 *  Trims and converts string to lower case
                 *
                 * @param scopes
                 */
                // TODO: Rename this, too generic name for a function that only deals with scopes
                ScopeSet.trimAndConvertToLowerCase = function (scope) {
                    return scope.trim().toLowerCase();
                };
                /**
                 * Performs trimAndConvertToLowerCase on string array
                 * @param scopes
                 */
                ScopeSet.trimAndConvertArrayToLowerCase = function (scopes) {
                    var _this = this;
                    return scopes.map(function (scope) { return _this.trimAndConvertToLowerCase(scope); });
                };
                /**
                 * Trims each scope in scopes array
                 * @param scopes
                 */
                ScopeSet.trimScopes = function (scopes) {
                    return scopes.map(function (scope) { return scope.trim(); });
                };
                /**
                 * Remove one element from a scope array
                 *
                 * @param scopes
                 * @param scope
                 */
                // TODO: Rename this, too generic name for a function that only deals with scopes
                ScopeSet.removeElement = function (scopes, scope) {
                    var scopeVal = this.trimAndConvertToLowerCase(scope);
                    return scopes.filter(function (value) { return value !== scopeVal; });
                };
                /**
                 * Parse the scopes into a formatted scopeList
                 * @param scopes
                 */
                ScopeSet.parseScope = function (scopes) {
                    var scopeList = "";
                    if (scopes) {
                        for (var i = 0; i < scopes.length; ++i) {
                            scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
                        }
                    }
                    return scopeList;
                };
                /**
                 * @hidden
                 *
                 * Used to validate the scopes input parameter requested  by the developer.
                 * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
                 * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
                 * @ignore
                 */
                ScopeSet.validateInputScope = function (scopes, scopesRequired) {
                    if (!scopes) {
                        if (scopesRequired) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
                        }
                        else {
                            return;
                        }
                    }
                    // Check that scopes is an array object (also throws error if scopes == null)
                    if (!Array.isArray(scopes)) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
                    }
                    // Check that scopes is not an empty array
                    if (scopes.length < 1 && scopesRequired) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
                    }
                };
                /**
                 * @hidden
                 *
                 * Extracts scope value from the state sent with the authentication request.
                 * @param {string} state
                 * @returns {string} scope.
                 * @ignore
                 */
                ScopeSet.getScopeFromState = function (state) {
                    if (state) {
                        var splitIndex = state.indexOf(Constants_1.Constants.resourceDelimiter);
                        if (splitIndex > -1 && splitIndex + 1 < state.length) {
                            return state.substring(splitIndex + 1);
                        }
                    }
                    return "";
                };
                /**
                 * @ignore
                 * Appends extraScopesToConsent if passed
                 * @param {@link AuthenticationParameters}
                 */
                ScopeSet.appendScopes = function (reqScopes, reqExtraScopesToConsent) {
                    if (reqScopes) {
                        var convertedExtraScopes = reqExtraScopesToConsent ? this.trimAndConvertArrayToLowerCase(reqExtraScopesToConsent.slice()) : null;
                        var convertedReqScopes = this.trimAndConvertArrayToLowerCase(reqScopes.slice());
                        return convertedExtraScopes ? convertedReqScopes.concat(convertedExtraScopes) : convertedReqScopes;
                    }
                    return null;
                };
                // #endregion
                /**
                 * @ignore
                 * Returns true if the scopes array only contains openid and/or profile
                 */
                ScopeSet.onlyContainsOidcScopes = function (scopes) {
                    var scopesCount = scopes.length;
                    var oidcScopesFound = 0;
                    if (scopes.indexOf(Constants_1.Constants.openidScope) > -1) {
                        oidcScopesFound += 1;
                    }
                    if (scopes.indexOf(Constants_1.Constants.profileScope) > -1) {
                        oidcScopesFound += 1;
                    }
                    return (scopesCount > 0 && scopesCount === oidcScopesFound);
                };
                /**
                 * @ignore
                 * Returns true if the scopes array only contains openid and/or profile
                 */
                ScopeSet.containsAnyOidcScopes = function (scopes) {
                    var containsOpenIdScope = scopes.indexOf(Constants_1.Constants.openidScope) > -1;
                    var containsProfileScope = scopes.indexOf(Constants_1.Constants.profileScope) > -1;
                    return (containsOpenIdScope || containsProfileScope);
                };
                /**
                 * @ignore
                 * Returns true if the clientId is the only scope in the array
                 */
                ScopeSet.onlyContainsClientId = function (scopes, clientId) {
                    // Double negation to force false value returned in case scopes is null
                    return !!scopes && (scopes.indexOf(clientId) > -1 && scopes.length === 1);
                };
                /**
                 * @ignore
                 * Adds missing OIDC scopes to scopes array without duplication. Since STS requires OIDC scopes for
                 * all implicit flow requests, 'openid' and 'profile' should always be included in the final request
                 */
                ScopeSet.appendDefaultScopes = function (scopes) {
                    var extendedScopes = scopes;
                    if (extendedScopes.indexOf(Constants_1.Constants.openidScope) === -1) {
                        extendedScopes.push(Constants_1.Constants.openidScope);
                    }
                    if (extendedScopes.indexOf(Constants_1.Constants.profileScope) === -1) {
                        extendedScopes.push(Constants_1.Constants.profileScope);
                    }
                    return extendedScopes;
                };
                /**
                 * @ignore
                 * Removes present OIDC scopes from scopes array.
                 */
                ScopeSet.removeDefaultScopes = function (scopes) {
                    return scopes.filter(function (scope) {
                        return (scope !== Constants_1.Constants.openidScope && scope !== Constants_1.Constants.profileScope);
                    });
                };
                /**
                 * @ignore
                 * Removes clientId from scopes array if included as only scope. If it's not the only scope, it is treated as a resource scope.
                 * @param scopes Array<string>: Pre-normalized scopes array
                 * @param clientId string: The application's clientId that is searched for in the scopes array
                 */
                ScopeSet.translateClientIdIfSingleScope = function (scopes, clientId) {
                    return this.onlyContainsClientId(scopes, clientId) ? Constants_1.Constants.oidcScopes : scopes;
                };
                return ScopeSet;
            }());
            exports.ScopeSet = ScopeSet;


            /***/
}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            exports.AuthErrorMessage = {
                unexpectedError: {
                    code: "unexpected_error",
                    desc: "Unexpected error in authentication."
                },
                noWindowObjectError: {
                    code: "no_window_object",
                    desc: "No window object available. Details:"
                }
            };
            /**
             * General error class thrown by the MSAL.js library.
             */
            var AuthError = /** @class */ (function (_super) {
                tslib_1.__extends(AuthError, _super);
                function AuthError(errorCode, errorMessage) {
                    var _this = _super.call(this, errorMessage) || this;
                    Object.setPrototypeOf(_this, AuthError.prototype);
                    _this.errorCode = errorCode;
                    _this.errorMessage = errorMessage;
                    _this.name = "AuthError";
                    return _this;
                }
                AuthError.createUnexpectedError = function (errDesc) {
                    return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
                };
                AuthError.createNoWindowObjectError = function (errDesc) {
                    return new AuthError(exports.AuthErrorMessage.noWindowObjectError.code, exports.AuthErrorMessage.noWindowObjectError.desc + " " + errDesc);
                };
                return AuthError;
            }(Error));
            exports.AuthError = AuthError;


            /***/
}),
/* 9 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var ClientConfigurationError_1 = __webpack_require__(5);
            var XHRClient_1 = __webpack_require__(18);
            var UrlUtils_1 = __webpack_require__(4);
            var TrustedAuthority_1 = __webpack_require__(19);
            var Constants_1 = __webpack_require__(1);
            /**
             * @hidden
             */
            var AuthorityType;
            (function (AuthorityType) {
                AuthorityType[AuthorityType["Default"] = 0] = "Default";
                AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
            })(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
            /**
             * @hidden
             */
            var Authority = /** @class */ (function () {
                function Authority(authority, validateAuthority, authorityMetadata) {
                    this.IsValidationEnabled = validateAuthority;
                    this.CanonicalAuthority = authority;
                    this.validateAsUri();
                    this.tenantDiscoveryResponse = authorityMetadata;
                }
                Authority.isAdfs = function (authorityUrl) {
                    var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
                    var pathSegments = components.PathSegments;
                    return (pathSegments.length && pathSegments[0].toLowerCase() === Constants_1.Constants.ADFS);
                };
                Object.defineProperty(Authority.prototype, "AuthorityType", {
                    get: function () {
                        return Authority.isAdfs(this.canonicalAuthority) ? AuthorityType.Adfs : AuthorityType.Default;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "Tenant", {
                    get: function () {
                        return this.CanonicalAuthorityUrlComponents.PathSegments[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
                    get: function () {
                        this.validateResolved();
                        return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace(/{tenant}|{tenantid}/g, this.Tenant);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
                    get: function () {
                        this.validateResolved();
                        return this.tenantDiscoveryResponse.EndSessionEndpoint.replace(/{tenant}|{tenantid}/g, this.Tenant);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
                    get: function () {
                        this.validateResolved();
                        return this.tenantDiscoveryResponse.Issuer.replace(/{tenant}|{tenantid}/g, this.Tenant);
                    },
                    enumerable: true,
                    configurable: true
                });
                Authority.prototype.validateResolved = function () {
                    if (!this.hasCachedMetadata()) {
                        throw "Please call ResolveEndpointsAsync first";
                    }
                };
                Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
                    /**
                     * A URL that is the authority set by the developer
                     */
                    get: function () {
                        return this.canonicalAuthority;
                    },
                    set: function (url) {
                        this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
                        this.canonicalAuthorityUrlComponents = null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
                    get: function () {
                        if (!this.canonicalAuthorityUrlComponents) {
                            this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
                        }
                        return this.canonicalAuthorityUrlComponents;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
                    // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
                    get: function () {
                        return (this.AuthorityType === AuthorityType.Adfs) ? "" + this.CanonicalAuthority + Constants_1.WELL_KNOWN_SUFFIX : this.CanonicalAuthority + "v2.0/" + Constants_1.WELL_KNOWN_SUFFIX;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Given a string, validate that it is of the form https://domain/path
                 */
                Authority.prototype.validateAsUri = function () {
                    var components;
                    try {
                        components = this.CanonicalAuthorityUrlComponents;
                    }
                    catch (e) {
                        throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
                    }
                    if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                        throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
                    }
                    if (!components.PathSegments || components.PathSegments.length < 1) {
                        throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
                    }
                };
                /**
                 * Calls the OIDC endpoint and returns the response
                 */
                Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint, telemetryManager, correlationId) {
                    var client = new XHRClient_1.XhrClient();
                    var httpMethod = Constants_1.NetworkRequestType.GET;
                    var httpEvent = telemetryManager.createAndStartHttpEvent(correlationId, httpMethod, openIdConfigurationEndpoint, "openIdConfigurationEndpoint");
                    return client.sendRequestAsync(openIdConfigurationEndpoint, httpMethod, /* enableCaching: */ true)
                        .then(function (response) {
                            httpEvent.httpResponseStatus = response.statusCode;
                            telemetryManager.stopEvent(httpEvent);
                            return {
                                AuthorizationEndpoint: response.body.authorization_endpoint,
                                EndSessionEndpoint: response.body.end_session_endpoint,
                                Issuer: response.body.issuer
                            };
                        })
                        .catch(function (err) {
                            httpEvent.serverErrorCode = err;
                            telemetryManager.stopEvent(httpEvent);
                            throw err;
                        });
                };
                /**
                 * Returns a promise.
                 * Checks to see if the authority is in the cache
                 * Discover endpoints via openid-configuration
                 * If successful, caches the endpoint for later use in OIDC
                 */
                Authority.prototype.resolveEndpointsAsync = function (telemetryManager, correlationId) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var host, openIdConfigurationEndpointResponse, _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!this.IsValidationEnabled) return [3 /*break*/, 3];
                                    host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                                    if (!(TrustedAuthority_1.TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, TrustedAuthority_1.TrustedAuthority.setTrustedAuthoritiesFromNetwork(this.canonicalAuthority, telemetryManager, correlationId)];
                                case 1:
                                    _b.sent();
                                    _b.label = 2;
                                case 2:
                                    if (!TrustedAuthority_1.TrustedAuthority.IsInTrustedHostList(host)) {
                                        throw ClientConfigurationError_1.ClientConfigurationError.createUntrustedAuthorityError(host);
                                    }
                                    _b.label = 3;
                                case 3:
                                    openIdConfigurationEndpointResponse = this.GetOpenIdConfigurationEndpoint();
                                    _a = this;
                                    return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse, telemetryManager, correlationId)];
                                case 4:
                                    _a.tenantDiscoveryResponse = _b.sent();
                                    return [2 /*return*/, this.tenantDiscoveryResponse];
                            }
                        });
                    });
                };
                /**
                 * Checks if there is a cached tenant discovery response with required fields.
                 */
                Authority.prototype.hasCachedMetadata = function () {
                    return !!(this.tenantDiscoveryResponse &&
                        this.tenantDiscoveryResponse.AuthorizationEndpoint &&
                        this.tenantDiscoveryResponse.EndSessionEndpoint &&
                        this.tenantDiscoveryResponse.Issuer);
                };
                /**
                 * Returns a promise which resolves to the OIDC endpoint
                 * Only responds with the endpoint
                 */
                Authority.prototype.GetOpenIdConfigurationEndpoint = function () {
                    return this.DefaultOpenIdConfigurationEndpoint;
                };
                return Authority;
            }());
            exports.Authority = Authority;


            /***/
}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             */
            var TimeUtils = /** @class */ (function () {
                function TimeUtils() {
                }
                /**
                 * Returns time in seconds for expiration based on string value passed in.
                 *
                 * @param expiresIn
                 */
                TimeUtils.parseExpiresIn = function (expiresIn) {
                    // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
                    if (!expiresIn) {
                        expiresIn = "3599";
                    }
                    return parseInt(expiresIn, 10);
                };
                /**
                 * Return the current time in Unix time (seconds). Date.getTime() returns in milliseconds.
                 */
                TimeUtils.now = function () {
                    return Math.round(new Date().getTime() / 1000.0);
                };
                /**
                 * Returns the amount of time in milliseconds since the page loaded.
                 */
                TimeUtils.relativeNowMs = function () {
                    return window.performance.now();
                };
                return TimeUtils;
            }());
            exports.TimeUtils = TimeUtils;


            /***/
}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.EVENT_NAME_PREFIX = "msal.";
            exports.EVENT_NAME_KEY = "event_name";
            exports.START_TIME_KEY = "start_time";
            exports.ELAPSED_TIME_KEY = "elapsed_time";
            exports.TELEMETRY_BLOB_EVENT_NAMES = {
                MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
                ApiTelemIdConstStrKey: "msal.api_telem_id",
                ApiIdConstStrKey: "msal.api_id",
                BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
                CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
                HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
                IdpConstStrKey: "Microsoft_MSAL_idp",
                IsSilentTelemetryBatchKey: "",
                IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
                ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
                TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
                UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
            };
            // This is used to replace the real tenant in telemetry info
            exports.TENANT_PLACEHOLDER = "<tenant>";


            /***/
}),
/* 12 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var TelemetryConstants_1 = __webpack_require__(11);
            var CryptoUtils_1 = __webpack_require__(3);
            var UrlUtils_1 = __webpack_require__(4);
            var Authority_1 = __webpack_require__(9);
            exports.scrubTenantFromUri = function (uri) {
                var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
                // validate trusted host
                if (Authority_1.Authority.isAdfs(uri)) {
                    /**
                     * returning what was passed because the library needs to work with uris that are non
                     * AAD trusted but passed by users such as B2C or others.
                     * HTTP Events for instance can take a url to the open id config endpoint
                     */
                    return uri;
                }
                var pathParams = url.PathSegments;
                if (pathParams && pathParams.length >= 2) {
                    var tenantPosition = pathParams[1] === "tfp" ? 2 : 1;
                    if (tenantPosition < pathParams.length) {
                        pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
                    }
                }
                return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
            };
            exports.hashPersonalIdentifier = function (valueToHash) {
                /*
                 * TODO sha256 this
                 * Current test runner is being funny with node libs that are webpacked anyway
                 * need a different solution
                 */
                return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
            };
            exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };
            exports.supportsBrowserPerformance = function () {
                return !!(typeof window !== "undefined" &&
                    "performance" in window &&
                    window.performance.mark &&
                    window.performance.measure);
            };
            exports.endBrowserPerformanceMeasurement = function (measureName, startMark, endMark) {
                if (exports.supportsBrowserPerformance()) {
                    window.performance.mark(endMark);
                    window.performance.measure(measureName, startMark, endMark);
                    window.performance.clearMeasures(measureName);
                    window.performance.clearMarks(startMark);
                    window.performance.clearMarks(endMark);
                }
            };
            exports.startBrowserPerformanceMeasurement = function (startMark) {
                if (exports.supportsBrowserPerformance()) {
                    window.performance.mark(startMark);
                }
            };


            /***/
}),
/* 13 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var StringUtils_1 = __webpack_require__(2);
            var Constants_1 = __webpack_require__(1);
            var LogLevel;
            (function (LogLevel) {
                LogLevel[LogLevel["Error"] = 0] = "Error";
                LogLevel[LogLevel["Warning"] = 1] = "Warning";
                LogLevel[LogLevel["Info"] = 2] = "Info";
                LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
            })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
            var Logger = /** @class */ (function () {
                function Logger(localCallback, options) {
                    if (options === void 0) { options = {}; }
                    /**
                     * @hidden
                     */
                    this.level = LogLevel.Info;
                    var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
                    this.localCallback = localCallback;
                    this.correlationId = correlationId;
                    this.level = level;
                    this.piiLoggingEnabled = piiLoggingEnabled;
                }
                /**
                 * @hidden
                 */
                Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
                    if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
                        return;
                    }
                    var timestamp = new Date().toUTCString();
                    var log;
                    if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
                        log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + (containsPii ? "-pii" : "") + " " + logMessage;
                    }
                    else {
                        log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + (containsPii ? "-pii" : "") + " " + logMessage;
                    }
                    this.executeCallback(logLevel, log, containsPii);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.executeCallback = function (level, message, containsPii) {
                    if (this.localCallback) {
                        this.localCallback(level, message, containsPii);
                    }
                };
                /**
                 * @hidden
                 */
                Logger.prototype.error = function (message) {
                    this.logMessage(LogLevel.Error, message, false);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.errorPii = function (message) {
                    this.logMessage(LogLevel.Error, message, true);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.warning = function (message) {
                    this.logMessage(LogLevel.Warning, message, false);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.warningPii = function (message) {
                    this.logMessage(LogLevel.Warning, message, true);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.info = function (message) {
                    this.logMessage(LogLevel.Info, message, false);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.infoPii = function (message) {
                    this.logMessage(LogLevel.Info, message, true);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.verbose = function (message) {
                    this.logMessage(LogLevel.Verbose, message, false);
                };
                /**
                 * @hidden
                 */
                Logger.prototype.verbosePii = function (message) {
                    this.logMessage(LogLevel.Verbose, message, true);
                };
                Logger.prototype.isPiiLoggingEnabled = function () {
                    return this.piiLoggingEnabled;
                };
                return Logger;
            }());
            exports.Logger = Logger;


            /***/
}),
/* 14 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var AuthError_1 = __webpack_require__(8);
            exports.ServerErrorMessage = {
                serverUnavailable: {
                    code: "server_unavailable",
                    desc: "Server is temporarily unavailable."
                },
                unknownServerError: {
                    code: "unknown_server_error"
                },
            };
            /**
             * Error thrown when there is an error with the server code, for example, unavailability.
             */
            var ServerError = /** @class */ (function (_super) {
                tslib_1.__extends(ServerError, _super);
                function ServerError(errorCode, errorMessage) {
                    var _this = _super.call(this, errorCode, errorMessage) || this;
                    _this.name = "ServerError";
                    Object.setPrototypeOf(_this, ServerError.prototype);
                    return _this;
                }
                ServerError.createServerUnavailableError = function () {
                    return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
                };
                ServerError.createUnknownServerError = function (errorDesc) {
                    return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
                };
                return ServerError;
            }(AuthError_1.AuthError));
            exports.ServerError = ServerError;


            /***/
}),
/* 15 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var TelemetryConstants_1 = __webpack_require__(11);
            var TelemetryUtils_1 = __webpack_require__(12);
            var CryptoUtils_1 = __webpack_require__(3);
            var TelemetryEvent = /** @class */ (function () {
                function TelemetryEvent(eventName, correlationId, eventLabel) {
                    var _a;
                    this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
                    this.label = eventLabel;
                    this.event = (_a = {},
                        _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.EVENT_NAME_KEY)] = eventName,
                        _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.ELAPSED_TIME_KEY)] = -1,
                        _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
                        _a);
                }
                TelemetryEvent.prototype.setElapsedTime = function (time) {
                    this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.ELAPSED_TIME_KEY)] = time;
                };
                TelemetryEvent.prototype.stop = function () {
                    // Set duration of event
                    this.setElapsedTime(+Date.now() - +this.startTimestamp);
                    TelemetryUtils_1.endBrowserPerformanceMeasurement(this.displayName, this.perfStartMark, this.perfEndMark);
                };
                TelemetryEvent.prototype.start = function () {
                    this.startTimestamp = Date.now();
                    this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.START_TIME_KEY)] = this.startTimestamp;
                    TelemetryUtils_1.startBrowserPerformanceMeasurement(this.perfStartMark);
                };
                Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
                    get: function () {
                        return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
                    },
                    set: function (value) {
                        this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TelemetryEvent.prototype, "eventName", {
                    get: function () {
                        return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.EVENT_NAME_KEY)];
                    },
                    enumerable: true,
                    configurable: true
                });
                TelemetryEvent.prototype.get = function () {
                    return tslib_1.__assign({}, this.event, { eventId: this.eventId });
                };
                Object.defineProperty(TelemetryEvent.prototype, "key", {
                    get: function () {
                        return this.telemetryCorrelationId + "_" + this.eventId + "-" + this.eventName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TelemetryEvent.prototype, "displayName", {
                    get: function () {
                        return "Msal-" + this.label + "-" + this.telemetryCorrelationId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TelemetryEvent.prototype, "perfStartMark", {
                    get: function () {
                        return "start-" + this.key;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TelemetryEvent.prototype, "perfEndMark", {
                    get: function () {
                        return "end-" + this.key;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TelemetryEvent;
            }());
            exports.default = TelemetryEvent;


            /***/
}),
/* 16 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var AccessTokenKey_1 = __webpack_require__(30);
            var AccessTokenValue_1 = __webpack_require__(31);
            var ServerRequestParameters_1 = __webpack_require__(17);
            var Authority_1 = __webpack_require__(9);
            var ClientInfo_1 = __webpack_require__(32);
            var IdToken_1 = __webpack_require__(33);
            var AuthCache_1 = __webpack_require__(34);
            var Account_1 = __webpack_require__(22);
            var ScopeSet_1 = __webpack_require__(7);
            var StringUtils_1 = __webpack_require__(2);
            var WindowUtils_1 = __webpack_require__(23);
            var TokenUtils_1 = __webpack_require__(20);
            var TimeUtils_1 = __webpack_require__(10);
            var UrlUtils_1 = __webpack_require__(4);
            var RequestUtils_1 = __webpack_require__(21);
            var ResponseUtils_1 = __webpack_require__(37);
            var AuthorityFactory_1 = __webpack_require__(38);
            var Configuration_1 = __webpack_require__(24);
            var ClientConfigurationError_1 = __webpack_require__(5);
            var AuthError_1 = __webpack_require__(8);
            var ClientAuthError_1 = __webpack_require__(6);
            var ServerError_1 = __webpack_require__(14);
            var InteractionRequiredAuthError_1 = __webpack_require__(25);
            var AuthResponse_1 = __webpack_require__(26);
            var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(39));
            var ApiEvent_1 = __webpack_require__(27);
            var Constants_1 = __webpack_require__(1);
            var CryptoUtils_1 = __webpack_require__(3);
            var TrustedAuthority_1 = __webpack_require__(19);
            var AuthCacheUtils_1 = __webpack_require__(42);
            // default authority
            var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
            /**
             * UserAgentApplication class
             *
             * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
             */
            var UserAgentApplication = /** @class */ (function () {
                /**
                 * @constructor
                 * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
                 *
                 * Important attributes in the Configuration object for auth are:
                 * - clientID: the application ID of your application.
                 * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
                 * - authority: the authority URL for your application.
                 *
                 * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
                 * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
                 * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
                 * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
                 * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
                 * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
                 *
                 *
                 * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
                 *
                 * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
                 */
                function UserAgentApplication(configuration) {
                    // callbacks for token/error
                    this.authResponseCallback = null;
                    this.tokenReceivedCallback = null;
                    this.errorReceivedCallback = null;
                    // Set the Configuration
                    this.config = Configuration_1.buildConfiguration(configuration);
                    this.logger = this.config.system.logger;
                    this.clientId = this.config.auth.clientId;
                    this.inCookie = this.config.cache.storeAuthStateInCookie;
                    this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
                    TrustedAuthority_1.TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.auth.validateAuthority, this.config.auth.knownAuthorities);
                    AuthorityFactory_1.AuthorityFactory.saveMetadataFromConfig(this.config.auth.authority, this.config.auth.authorityMetadata);
                    // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
                    this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
                    // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
                    this.cacheStorage = new AuthCache_1.AuthCache(this.clientId, this.config.cache.cacheLocation, this.inCookie);
                    // Initialize window handling code
                    window.activeRenewals = {};
                    window.renewStates = [];
                    window.callbackMappedToRenewStates = {};
                    window.promiseMappedToRenewStates = {};
                    window.msal = this;
                    var urlHash = window.location.hash;
                    var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
                    // check if back button is pressed
                    WindowUtils_1.WindowUtils.checkIfBackButtonIsPressed(this.cacheStorage);
                    // On the server 302 - Redirect, handle this
                    if (urlContainsHash) {
                        var stateInfo = this.getResponseState(urlHash);
                        if (stateInfo.method === Constants_1.Constants.interactionTypeRedirect) {
                            this.handleRedirectAuthenticationResponse(urlHash);
                        }
                    }
                }
                Object.defineProperty(UserAgentApplication.prototype, "authority", {
                    /**
                     * Method to manage the authority URL.
                     *
                     * @returns {string} authority
                     */
                    get: function () {
                        return this.authorityInstance.CanonicalAuthority;
                    },
                    /**
                     * setter for the authority URL
                     * @param {string} authority
                     */
                    // If the developer passes an authority, create an instance
                    set: function (val) {
                        this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Get the current authority instance from the MSAL configuration object
                 *
                 * @returns {@link Authority} authority instance
                 */
                UserAgentApplication.prototype.getAuthorityInstance = function () {
                    return this.authorityInstance;
                };
                UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
                    if (!authOrTokenCallback) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
                    }
                    // Set callbacks
                    if (errorReceivedCallback) {
                        this.tokenReceivedCallback = authOrTokenCallback;
                        this.errorReceivedCallback = errorReceivedCallback;
                        this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
                    }
                    else {
                        this.authResponseCallback = authOrTokenCallback;
                    }
                    if (this.redirectError) {
                        this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, this.redirectError, this.redirectResponse);
                    }
                    else if (this.redirectResponse) {
                        this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, this.redirectResponse);
                    }
                };
                /**
                 * Public API to verify if the URL contains the hash with known properties
                 * @param hash
                 */
                UserAgentApplication.prototype.urlContainsHash = function (hash) {
                    this.logger.verbose("UrlContainsHash has been called");
                    return UrlUtils_1.UrlUtils.urlContainsHash(hash);
                };
                UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
                    this.logger.verbose("AuthResponseHandler has been called");
                    if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                        this.logger.verbose("Interaction type is redirect");
                        if (this.errorReceivedCallback) {
                            this.logger.verbose("Two callbacks were provided to handleRedirectCallback, calling success callback with response");
                            this.tokenReceivedCallback(response);
                        }
                        else if (this.authResponseCallback) {
                            this.logger.verbose("One callback was provided to handleRedirectCallback, calling authResponseCallback with response");
                            this.authResponseCallback(null, response);
                        }
                    }
                    else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                        this.logger.verbose("Interaction type is popup, resolving");
                        resolve(response);
                    }
                    else {
                        throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                    }
                };
                UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
                    this.logger.verbose("AuthErrorHandler has been called");
                    // set interaction_status to complete
                    this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                    if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                        this.logger.verbose("Interaction type is redirect");
                        if (this.errorReceivedCallback) {
                            this.logger.verbose("Two callbacks were provided to handleRedirectCallback, calling error callback");
                            this.errorReceivedCallback(authErr, response.accountState);
                        }
                        else if (this.authResponseCallback) {
                            this.logger.verbose("One callback was provided to handleRedirectCallback, calling authResponseCallback with error");
                            this.authResponseCallback(authErr, response);
                        }
                        else {
                            this.logger.verbose("handleRedirectCallback has not been called and no callbacks are registered, throwing error");
                            throw authErr;
                        }
                    }
                    else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                        this.logger.verbose("Interaction type is popup, rejecting");
                        reject(authErr);
                    }
                    else {
                        throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                    }
                };
                // #endregion
                /**
                 * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
                 * @param {@link (AuthenticationParameters:type)}
                 */
                UserAgentApplication.prototype.loginRedirect = function (userRequest) {
                    this.logger.verbose("LoginRedirect has been called");
                    // validate request
                    var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypeRedirect);
                    this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request, null, null);
                };
                /**
                 * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
                 * @param {@link (AuthenticationParameters:type)}
                 *
                 * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                 */
                UserAgentApplication.prototype.acquireTokenRedirect = function (userRequest) {
                    this.logger.verbose("AcquireTokenRedirect has been called");
                    // validate request
                    var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypeRedirect);
                    this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request, null, null);
                };
                /**
                 * Use when initiating the login process via opening a popup window in the user's browser
                 *
                 * @param {@link (AuthenticationParameters:type)}
                 *
                 * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                 */
                UserAgentApplication.prototype.loginPopup = function (userRequest) {
                    var _this = this;
                    this.logger.verbose("LoginPopup has been called");
                    // validate request
                    var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypePopup);
                    var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.LoginPopup);
                    return new Promise(function (resolve, reject) {
                        _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
                    })
                        .then(function (resp) {
                            _this.logger.verbose("Successfully logged in");
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
                            return resp;
                        })
                        .catch(function (error) {
                            _this.cacheStorage.resetTempCacheItems(request.state);
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
                            throw error;
                        });
                };
                /**
                 * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
                 * @param {@link AuthenticationParameters}
                 *
                 * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                 * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                 */
                UserAgentApplication.prototype.acquireTokenPopup = function (userRequest) {
                    var _this = this;
                    this.logger.verbose("AcquireTokenPopup has been called");
                    // validate request
                    var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypePopup);
                    var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.AcquireTokenPopup);
                    return new Promise(function (resolve, reject) {
                        _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
                    })
                        .then(function (resp) {
                            _this.logger.verbose("Successfully acquired token");
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
                            return resp;
                        })
                        .catch(function (error) {
                            _this.cacheStorage.resetTempCacheItems(request.state);
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
                            throw error;
                        });
                };
                // #region Acquire Token
                /**
                 * Use when initiating the login process or when you want to obtain an access_token for your API,
                 * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
                 * @param {@link (AuthenticationParameters:type)}
                 *
                 * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                 */
                UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
                    var _this = this;
                    this.logger.verbose("AcquireTokenInteractive has been called");
                    // block the request if made from the hidden iframe
                    WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
                    var interactionProgress = this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                    if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST, "" + Constants_1.Constants.inProgress + Constants_1.Constants.resourceDelimiter + request.state);
                    }
                    // If already in progress, do not proceed
                    if (interactionProgress === Constants_1.Constants.inProgress) {
                        var thrownError = isLoginCall ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
                        var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
                        this.cacheStorage.resetTempCacheItems(request.state);
                        this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
                        return;
                    }
                    // Get the account object if a session exists
                    var account;
                    if (request && request.account && !isLoginCall) {
                        account = request.account;
                        this.logger.verbose("Account set from request");
                    }
                    else {
                        account = this.getAccount();
                        this.logger.verbose("Account set from MSAL Cache");
                    }
                    // If no session exists, prompt the user to login.
                    if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
                        if (isLoginCall) {
                            // extract ADAL id_token if exists
                            var adalIdToken = this.extractADALIdToken();
                            // silent login if ADAL id_token is retrieved successfully - SSO
                            if (adalIdToken && !request.scopes) {
                                this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken");
                                var tokenRequest = this.buildIDTokenRequest(request);
                                this.silentLogin = true;
                                this.acquireTokenSilent(tokenRequest).then(function (response) {
                                    _this.silentLogin = false;
                                    _this.logger.info("Unified cache call is successful");
                                    _this.authResponseHandler(interactionType, response, resolve);
                                    return;
                                }, function (error) {
                                    _this.silentLogin = false;
                                    _this.logger.error("Error occurred during unified cache ATS: " + error);
                                    // proceed to login since ATS failed
                                    _this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                                });
                            }
                            // No ADAL token found, proceed to login
                            else {
                                this.logger.verbose("Login call but no token found, proceed to login");
                                this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                            }
                        }
                        // AcquireToken call, but no account or context given, so throw error
                        else {
                            this.logger.verbose("AcquireToken call, no context or account given");
                            this.logger.info("User login is required");
                            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
                            this.cacheStorage.resetTempCacheItems(request.state);
                            this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createUserLoginRequiredError(), stateOnlyResponse, reject);
                            return;
                        }
                    }
                    // User session exists
                    else {
                        this.logger.verbose("User session exists, login not required");
                        this.acquireTokenHelper(account, interactionType, isLoginCall, request, resolve, reject);
                    }
                };
                /**
                 * @hidden
                 * @ignore
                 * Helper function to acquireToken
                 *
                 */
                UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, resolve, reject) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var requestSignature, serverAuthenticationRequest, acquireTokenAuthority, popUpWindow, responseType, loginStartPage, urlNavigate, hash, error_1, navigate, err_1;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.logger.verbose("AcquireTokenHelper has been called");
                                    this.logger.verbose("Interaction type: " + interactionType + ". isLoginCall: " + isLoginCall);
                                    // Track the acquireToken progress
                                    this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, Constants_1.Constants.inProgress);
                                    requestSignature = request.scopes ? request.scopes.join(" ").toLowerCase() : Constants_1.Constants.oidcScopes.join(" ");
                                    this.logger.verbosePii("Request signature: " + requestSignature);
                                    acquireTokenAuthority = (request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata) : this.authorityInstance;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 11, , 12]);
                                    if (!!acquireTokenAuthority.hasCachedMetadata()) return [3 /*break*/, 3];
                                    this.logger.verbose("No cached metadata for authority");
                                    return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(acquireTokenAuthority, this.telemetryManager, request.correlationId)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    this.logger.verbose("Cached metadata found for authority");
                                    _a.label = 4;
                                case 4:
                                    responseType = isLoginCall ? Constants_1.ResponseTypes.id_token : this.getTokenType(account, request.scopes);
                                    loginStartPage = request.redirectStartPage || window.location.href;
                                    serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, responseType, this.getRedirectUri(request && request.redirectUri), request.scopes, request.state, request.correlationId);
                                    this.logger.verbose("Finished building server authentication request");
                                    this.updateCacheEntries(serverAuthenticationRequest, account, isLoginCall, loginStartPage);
                                    this.logger.verbose("Updating cache entries");
                                    // populate QueryParameters (sid/login_hint) and any other extraQueryParameters set by the developer
                                    serverAuthenticationRequest.populateQueryParams(account, request);
                                    this.logger.verbose("Query parameters populated from account");
                                    urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                                    // set state in cache
                                    if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                                        if (!isLoginCall) {
                                            this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, request.state), serverAuthenticationRequest.state, this.inCookie);
                                            this.logger.verbose("State cached for redirect");
                                            this.logger.verbosePii("State cached: " + serverAuthenticationRequest.state);
                                        }
                                        else {
                                            this.logger.verbose("Interaction type redirect but login call is true. State not cached");
                                        }
                                    }
                                    else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                                        window.renewStates.push(serverAuthenticationRequest.state);
                                        window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                                        this.logger.verbose("State saved to window");
                                        this.logger.verbosePii("State saved: " + serverAuthenticationRequest.state);
                                        // Register callback to capture results from server
                                        this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
                                    }
                                    else {
                                        this.logger.verbose("Invalid interaction error. State not cached");
                                        throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                                    }
                                    if (!(interactionType === Constants_1.Constants.interactionTypePopup)) return [3 /*break*/, 9];
                                    this.logger.verbose("Interaction type is popup. Generating popup window");
                                    // Generate a popup window
                                    try {
                                        popUpWindow = this.openPopup(urlNavigate, "msal", Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
                                        // Push popup window handle onto stack for tracking
                                        WindowUtils_1.WindowUtils.trackPopup(popUpWindow);
                                    }
                                    catch (e) {
                                        this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
                                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                                        if (reject) {
                                            reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
                                            return [2 /*return*/];
                                        }
                                    }
                                    if (!popUpWindow) return [3 /*break*/, 8];
                                    _a.label = 5;
                                case 5:
                                    _a.trys.push([5, 7, , 8]);
                                    return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorPopupForHash(popUpWindow, this.config.system.loadFrameTimeout, urlNavigate, this.logger)];
                                case 6:
                                    hash = _a.sent();
                                    this.handleAuthenticationResponse(hash);
                                    // Request completed successfully, set to completed
                                    this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                                    this.logger.info("Closing popup window");
                                    // TODO: Check how this can be extracted for any framework specific code?
                                    if (this.config.framework.isAngular) {
                                        this.broadcast("msal:popUpHashChanged", hash);
                                    }
                                    WindowUtils_1.WindowUtils.closePopups();
                                    return [3 /*break*/, 8];
                                case 7:
                                    error_1 = _a.sent();
                                    if (reject) {
                                        reject(error_1);
                                    }
                                    if (this.config.framework.isAngular) {
                                        this.broadcast("msal:popUpClosed", error_1.errorCode + Constants_1.Constants.resourceDelimiter + error_1.errorMessage);
                                    }
                                    else {
                                        // Request failed, set to canceled
                                        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                                        popUpWindow.close();
                                    }
                                    return [3 /*break*/, 8];
                                case 8: return [3 /*break*/, 10];
                                case 9:
                                    // If onRedirectNavigate is implemented, invoke it and provide urlNavigate
                                    if (request.onRedirectNavigate) {
                                        this.logger.verbose("Invoking onRedirectNavigate callback");
                                        navigate = request.onRedirectNavigate(urlNavigate);
                                        // Returning false from onRedirectNavigate will stop navigation
                                        if (navigate !== false) {
                                            this.logger.verbose("onRedirectNavigate did not return false, navigating");
                                            this.navigateWindow(urlNavigate);
                                        }
                                        else {
                                            this.logger.verbose("onRedirectNavigate returned false, stopping navigation");
                                        }
                                    }
                                    else {
                                        // Otherwise, perform navigation
                                        this.logger.verbose("Navigating window to urlNavigate");
                                        this.navigateWindow(urlNavigate);
                                    }
                                    _a.label = 10;
                                case 10: return [3 /*break*/, 12];
                                case 11:
                                    err_1 = _a.sent();
                                    this.logger.error(err_1);
                                    this.cacheStorage.resetTempCacheItems(request.state);
                                    this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err_1.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
                                    if (popUpWindow) {
                                        popUpWindow.close();
                                    }
                                    return [3 /*break*/, 12];
                                case 12: return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * API interfacing idToken request when applications already have a session/hint acquired by authorization client applications
                 * @param request
                 */
                UserAgentApplication.prototype.ssoSilent = function (request) {
                    this.logger.verbose("ssoSilent has been called");
                    // throw an error on an empty request
                    if (!request) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
                    }
                    // throw an error on no hints passed
                    if (!request.sid && !request.loginHint) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createSsoSilentError();
                    }
                    return this.acquireTokenSilent(tslib_1.__assign({}, request, { scopes: Constants_1.Constants.oidcScopes }));
                };
                /**
                 * Use this function to obtain a token before every call to the API / resource provider
                 *
                 * MSAL return's a cached token when available
                 * Or it send's a request to the STS to obtain a new token using a hidden iframe.
                 *
                 * @param {@link AuthenticationParameters}
                 *
                 * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
                 * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
                 *
                 */
                UserAgentApplication.prototype.acquireTokenSilent = function (userRequest) {
                    var _this = this;
                    this.logger.verbose("AcquireTokenSilent has been called");
                    // validate the request
                    var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypeSilent);
                    var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.AcquireTokenSilent);
                    var requestSignature = RequestUtils_1.RequestUtils.createRequestSignature(request);
                    return new Promise(function (resolve, reject) {
                        return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var scope, account, adalIdToken, responseType, serverAuthenticationRequest, adalIdTokenObject, userContainedClaims, authErr, cacheResultResponse, logMessage, err_2;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // block the request if made from the hidden iframe
                                        WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
                                        scope = request.scopes.join(" ").toLowerCase();
                                        this.logger.verbosePii("Serialized scopes: " + scope);
                                        if (request.account) {
                                            account = request.account;
                                            this.logger.verbose("Account set from request");
                                        }
                                        else {
                                            account = this.getAccount();
                                            this.logger.verbose("Account set from MSAL Cache");
                                        }
                                        adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
                                        // In the event of no account being passed in the config, no session id, and no pre-existing adalIdToken, user will need to log in
                                        if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                                            this.logger.info("User login is required");
                                            // The promise rejects with a UserLoginRequiredError, which should be caught and user should be prompted to log in interactively
                                            return [2 /*return*/, reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError())];
                                        }
                                        responseType = this.getTokenType(account, request.scopes);
                                        this.logger.verbose("Response type: " + responseType);
                                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata), this.clientId, responseType, this.getRedirectUri(request.redirectUri), request.scopes, request.state, request.correlationId);
                                        this.logger.verbose("Finished building server authentication request");
                                        // populate QueryParameters (sid/login_hint) and any other extraQueryParameters set by the developer
                                        if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                                            serverAuthenticationRequest.populateQueryParams(account, request, null, true);
                                            this.logger.verbose("Query parameters populated from existing SSO or account");
                                        }
                                        // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
                                        else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                                            adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                                            this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken to populate query parameters");
                                            serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject, true);
                                        }
                                        else {
                                            this.logger.verbose("No additional query parameters added");
                                        }
                                        userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
                                        // If request.forceRefresh is set to true, force a request for a new token instead of getting it from the cache
                                        if (!userContainedClaims && !request.forceRefresh) {
                                            try {
                                                cacheResultResponse = this.getCachedToken(serverAuthenticationRequest, account);
                                            }
                                            catch (e) {
                                                authErr = e;
                                            }
                                        }
                                        if (!cacheResultResponse) return [3 /*break*/, 1];
                                        this.logger.verbose("Token found in cache lookup");
                                        this.logger.verbosePii("Scopes found: " + JSON.stringify(cacheResultResponse.scopes));
                                        resolve(cacheResultResponse);
                                        return [2 /*return*/, null];
                                    case 1:
                                        if (!authErr) return [3 /*break*/, 2];
                                        this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                                        reject(authErr);
                                        return [2 /*return*/, null];
                                    case 2:
                                        logMessage = void 0;
                                        if (userContainedClaims) {
                                            logMessage = "Skipped cache lookup since claims were given";
                                        }
                                        else if (request.forceRefresh) {
                                            logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                                        }
                                        else {
                                            logMessage = "No valid token found in cache lookup";
                                        }
                                        this.logger.verbose(logMessage);
                                        // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the API.
                                        if (!serverAuthenticationRequest.authorityInstance) {
                                            serverAuthenticationRequest.authorityInstance = request.authority ?
                                                AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata)
                                                : this.authorityInstance;
                                        }
                                        this.logger.verbosePii("Authority instance: " + serverAuthenticationRequest.authority);
                                        _a.label = 3;
                                    case 3:
                                        _a.trys.push([3, 7, , 8]);
                                        if (!!serverAuthenticationRequest.authorityInstance.hasCachedMetadata()) return [3 /*break*/, 5];
                                        this.logger.verbose("No cached metadata for authority");
                                        return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(serverAuthenticationRequest.authorityInstance, this.telemetryManager, request.correlationId)];
                                    case 4:
                                        _a.sent();
                                        this.logger.verbose("Authority has been updated with endpoint discovery response");
                                        return [3 /*break*/, 6];
                                    case 5:
                                        this.logger.verbose("Cached metadata found for authority");
                                        _a.label = 6;
                                    case 6:
                                        /*
                                         * refresh attempt with iframe
                                         * Already renewing for this scope, callback when we get the token.
                                         */
                                        if (window.activeRenewals[requestSignature]) {
                                            this.logger.verbose("Renewing token in progress. Registering callback");
                                            // Active renewals contains the state for each renewal.
                                            this.registerCallback(window.activeRenewals[requestSignature], requestSignature, resolve, reject);
                                        }
                                        else {
                                            if (request.scopes && ScopeSet_1.ScopeSet.onlyContainsOidcScopes(request.scopes)) {
                                                /*
                                                 * App uses idToken to send to api endpoints
                                                 * Default scope is tracked as OIDC scopes to store this token
                                                 */
                                                this.logger.verbose("OpenID Connect scopes only, renewing idToken");
                                                this.silentLogin = true;
                                                this.renewIdToken(requestSignature, resolve, reject, account, serverAuthenticationRequest);
                                            }
                                            else {
                                                // renew access token
                                                this.logger.verbose("Renewing access token");
                                                this.renewToken(requestSignature, resolve, reject, account, serverAuthenticationRequest);
                                            }
                                        }
                                        return [3 /*break*/, 8];
                                    case 7:
                                        err_2 = _a.sent();
                                        this.logger.error(err_2);
                                        reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err_2.toString()));
                                        return [2 /*return*/, null];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        });
                    })
                        .then(function (res) {
                            _this.logger.verbose("Successfully acquired token");
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
                            return res;
                        })
                        .catch(function (error) {
                            _this.cacheStorage.resetTempCacheItems(request.state);
                            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
                            throw error;
                        });
                };
                // #endregion
                // #region Popup Window Creation
                /**
                 * @hidden
                 *
                 * Configures popup window for login.
                 *
                 * @param urlNavigate
                 * @param title
                 * @param popUpWidth
                 * @param popUpHeight
                 * @ignore
                 * @hidden
                 */
                UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
                    this.logger.verbose("OpenPopup has been called");
                    try {
                        /**
                         * adding winLeft and winTop to account for dual monitor
                         * using screenLeft and screenTop for IE8 and earlier
                         */
                        var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
                        var winTop = window.screenTop ? window.screenTop : window.screenY;
                        /**
                         * window.innerWidth displays browser window"s height and width excluding toolbars
                         * using document.documentElement.clientWidth for IE8 and earlier
                         */
                        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
                        var top = ((height / 2) - (popUpHeight / 2)) + winTop;
                        // open the window
                        var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left + ", scrollbars=yes");
                        if (!popupWindow) {
                            throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
                        }
                        if (popupWindow.focus) {
                            popupWindow.focus();
                        }
                        return popupWindow;
                    }
                    catch (e) {
                        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                        throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
                    }
                };
                // #endregion
                // #region Iframe Management
                /**
                 * @hidden
                 * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
                 * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
                 * @ignore
                 */
                UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, requestSignature) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var expectedState, iframe, _a, hash, error_2;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    expectedState = window.activeRenewals[requestSignature];
                                    this.logger.verbosePii("Set loading state to pending for: " + requestSignature + ":" + expectedState);
                                    this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState), Constants_1.Constants.inProgress);
                                    if (!this.config.system.navigateFrameWait) return [3 /*break*/, 2];
                                    return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                                case 1:
                                    _a = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = WindowUtils_1.WindowUtils.loadFrameSync(urlNavigate, frameName, this.logger);
                                    _b.label = 3;
                                case 3:
                                    iframe = _a;
                                    _b.label = 4;
                                case 4:
                                    _b.trys.push([4, 6, , 7]);
                                    return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorIframeForHash(iframe.contentWindow, this.config.system.loadFrameTimeout, urlNavigate, this.logger)];
                                case 5:
                                    hash = _b.sent();
                                    if (hash) {
                                        this.handleAuthenticationResponse(hash);
                                    }
                                    return [3 /*break*/, 7];
                                case 6:
                                    error_2 = _b.sent();
                                    if (this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState)) === Constants_1.Constants.inProgress) {
                                        // fail the iframe session if it's in pending state
                                        this.logger.verbose("Loading frame has timed out after: " + (this.config.system.loadFrameTimeout / 1000) + " seconds for scope/authority " + requestSignature + ":" + expectedState);
                                        // Error after timeout
                                        if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                            window.callbackMappedToRenewStates[expectedState](null, error_2);
                                        }
                                        this.cacheStorage.removeItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState));
                                    }
                                    WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                                    throw error_2;
                                case 7:
                                    WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                // #endregion
                // #region General Helpers
                /**
                 * @hidden
                 * Used to redirect the browser to the STS authorization endpoint
                 * @param {string} urlNavigate - URL of the authorization endpoint
                 */
                UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
                    // Navigate if valid URL
                    if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
                        var navigateWindow = popupWindow ? popupWindow : window;
                        var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
                        this.logger.infoPii(logMessage);
                        navigateWindow.location.assign(urlNavigate);
                    }
                    else {
                        this.logger.info("Navigate url is empty");
                        throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
                    }
                };
                /**
                 * @hidden
                 * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
                 * @param {string} expectedState - Unique state identifier (guid).
                 * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
                 * @param {Function} resolve - The resolve function of the promise object.
                 * @param {Function} reject - The reject function of the promise object.
                 * @ignore
                 */
                UserAgentApplication.prototype.registerCallback = function (expectedState, requestSignature, resolve, reject) {
                    var _this = this;
                    // track active renewals
                    window.activeRenewals[requestSignature] = expectedState;
                    // initialize callbacks mapped array
                    if (!window.promiseMappedToRenewStates[expectedState]) {
                        window.promiseMappedToRenewStates[expectedState] = [];
                    }
                    // indexing on the current state, push the callback params to callbacks mapped
                    window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
                    // Store the server response in the current window??
                    if (!window.callbackMappedToRenewStates[expectedState]) {
                        window.callbackMappedToRenewStates[expectedState] = function (response, error) {
                            // reset active renewals
                            window.activeRenewals[requestSignature] = null;
                            // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                            for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                                try {
                                    if (error) {
                                        window.promiseMappedToRenewStates[expectedState][i].reject(error);
                                    }
                                    else if (response) {
                                        window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                                    }
                                    else {
                                        _this.cacheStorage.resetTempCacheItems(expectedState);
                                        throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                                    }
                                }
                                catch (e) {
                                    _this.logger.warning(e);
                                }
                            }
                            // reset
                            window.promiseMappedToRenewStates[expectedState] = null;
                            window.callbackMappedToRenewStates[expectedState] = null;
                        };
                    }
                };
                // #endregion
                // #region Logout
                /**
                 * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
                 * Default behaviour is to redirect the user to `window.location.href`.
                 */
                UserAgentApplication.prototype.logout = function (correlationId) {
                    this.logger.verbose("Logout has been called");
                    this.logoutAsync(correlationId);
                };
                /**
                 * Async version of logout(). Use to log out the current user.
                 * @param correlationId Request correlationId
                 */
                UserAgentApplication.prototype.logoutAsync = function (correlationId) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var requestCorrelationId, apiEvent, correlationIdParam, postLogoutQueryParam, urlNavigate, error_3;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    requestCorrelationId = correlationId || CryptoUtils_1.CryptoUtils.createNewGuid();
                                    apiEvent = this.telemetryManager.createAndStartApiEvent(requestCorrelationId, ApiEvent_1.API_EVENT_IDENTIFIER.Logout);
                                    this.clearCache();
                                    this.account = null;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 5, , 6]);
                                    if (!!this.authorityInstance.hasCachedMetadata()) return [3 /*break*/, 3];
                                    this.logger.verbose("No cached metadata for authority");
                                    return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(this.authorityInstance, this.telemetryManager, correlationId)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    this.logger.verbose("Cached metadata found for authority");
                                    _a.label = 4;
                                case 4:
                                    correlationIdParam = "client-request-id=" + requestCorrelationId;
                                    postLogoutQueryParam = void 0;
                                    if (this.getPostLogoutRedirectUri()) {
                                        postLogoutQueryParam = "&post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
                                        this.logger.verbose("redirectUri found and set");
                                    }
                                    else {
                                        postLogoutQueryParam = "";
                                        this.logger.verbose("No redirectUri set for app. postLogoutQueryParam is empty");
                                    }
                                    urlNavigate = void 0;
                                    if (this.authorityInstance.EndSessionEndpoint) {
                                        urlNavigate = this.authorityInstance.EndSessionEndpoint + "?" + correlationIdParam + postLogoutQueryParam;
                                        this.logger.verbose("EndSessionEndpoint found and urlNavigate set");
                                        this.logger.verbosePii("urlNavigate set to: " + this.authorityInstance.EndSessionEndpoint);
                                    }
                                    else {
                                        urlNavigate = this.authority + "oauth2/v2.0/logout?" + correlationIdParam + postLogoutQueryParam;
                                        this.logger.verbose("No endpoint, urlNavigate set to default");
                                    }
                                    this.telemetryManager.stopAndFlushApiEvent(requestCorrelationId, apiEvent, true);
                                    this.logger.verbose("Navigating window to urlNavigate");
                                    this.navigateWindow(urlNavigate);
                                    return [3 /*break*/, 6];
                                case 5:
                                    error_3 = _a.sent();
                                    this.telemetryManager.stopAndFlushApiEvent(requestCorrelationId, apiEvent, false, error_3.errorCode);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                };
                /**
                 * @hidden
                 * Clear all access tokens and ID tokens in the cache.
                 * @ignore
                 */
                UserAgentApplication.prototype.clearCache = function () {
                    this.logger.verbose("Clearing cache");
                    window.renewStates = [];
                    var tokenCacheItems = this.cacheStorage.getAllTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
                    for (var i = 0; i < tokenCacheItems.length; i++) {
                        this.cacheStorage.removeItem(JSON.stringify(tokenCacheItems[i].key));
                    }
                    this.cacheStorage.resetCacheItems();
                    this.cacheStorage.clearMsalCookie();
                    this.logger.verbose("Cache cleared");
                };
                /**
                 * @hidden
                 * Clear a given access token from the cache.
                 *
                 * @param accessToken
                 */
                UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
                    this.logger.verbose("Clearing access token from cache");
                    var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
                    for (var i = 0; i < accessTokenItems.length; i++) {
                        var token = accessTokenItems[i];
                        if (token.value.accessToken === accessToken) {
                            this.cacheStorage.removeItem(JSON.stringify(token.key));
                            this.logger.verbosePii("Access token removed: " + token.key);
                        }
                    }
                };
                // #endregion
                // #region Response
                /**
                 * @hidden
                 * @ignore
                 * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
                 * @param {string} hash - Hash passed from redirect page.
                 * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
                 */
                UserAgentApplication.prototype.isCallback = function (hash) {
                    this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
                    this.logger.verbose("isCallback has been called");
                    return UrlUtils_1.UrlUtils.urlContainsHash(hash);
                };
                /**
                 * @hidden
                 * Used to call the constructor callback with the token/error
                 * @param {string} [hash=window.location.hash] - Hash fragment of Url.
                 */
                UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
                    this.logger.info("ProcessCallBack has been called. Processing callback from redirect response");
                    // get the state info from the hash
                    if (!stateInfo) {
                        this.logger.verbose("StateInfo is null, getting stateInfo from hash");
                        stateInfo = this.getResponseState(hash);
                    }
                    var response;
                    var authErr;
                    // Save the token info from the hash
                    try {
                        response = this.saveTokenFromHash(hash, stateInfo);
                    }
                    catch (err) {
                        authErr = err;
                    }
                    try {
                        // Clear the cookie in the hash
                        this.cacheStorage.clearMsalCookie(stateInfo.state);
                        var accountState = this.getAccountState(stateInfo.state);
                        if (response) {
                            if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                                if (window.parent !== window) {
                                    this.logger.verbose("Window is in iframe, acquiring token silently");
                                }
                                else {
                                    this.logger.verbose("Acquiring token interactive in progress");
                                }
                                this.logger.verbose("Response tokenType set to " + Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
                                response.tokenType = Constants_1.ServerHashParamKeys.ACCESS_TOKEN;
                            }
                            else if (stateInfo.requestType === Constants_1.Constants.login) {
                                this.logger.verbose("Response tokenType set to " + Constants_1.ServerHashParamKeys.ID_TOKEN);
                                response.tokenType = Constants_1.ServerHashParamKeys.ID_TOKEN;
                            }
                            if (!parentCallback) {
                                this.logger.verbose("Setting redirectResponse");
                                this.redirectResponse = response;
                                return;
                            }
                        }
                        else if (!parentCallback) {
                            this.logger.verbose("Response is null, setting redirectResponse with state");
                            this.redirectResponse = AuthResponse_1.buildResponseStateOnly(accountState);
                            this.redirectError = authErr;
                            this.cacheStorage.resetTempCacheItems(stateInfo.state);
                            return;
                        }
                        this.logger.verbose("Calling callback provided to processCallback");
                        parentCallback(response, authErr);
                    }
                    catch (err) {
                        this.logger.error("Error occurred in token received callback function: " + err);
                        throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
                    }
                };
                /**
                 * @hidden
                 * This method must be called for processing the response received from the STS if using popups or iframes. It extracts the hash, processes the token or error
                 * information and saves it in the cache. It then resolves the promises with the result.
                 * @param {string} [hash=window.location.hash] - Hash fragment of Url.
                 */
                UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
                    this.logger.verbose("HandleAuthenticationResponse has been called");
                    // retrieve the hash
                    var locationHash = hash || window.location.hash;
                    // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
                    var stateInfo = this.getResponseState(locationHash);
                    this.logger.verbose("Obtained state from response");
                    var tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
                    this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
                };
                /**
                 * @hidden
                 * This method must be called for processing the response received from the STS when using redirect flows. It extracts the hash, processes the token or error
                 * information and saves it in the cache. The result can then be accessed by user registered callbacks.
                 * @param {string} [hash=window.location.hash] - Hash fragment of Url.
                 */
                UserAgentApplication.prototype.handleRedirectAuthenticationResponse = function (hash) {
                    this.logger.info("Returned from redirect url");
                    this.logger.verbose("HandleRedirectAuthenticationResponse has been called");
                    // clear hash from window
                    WindowUtils_1.WindowUtils.clearUrlFragment();
                    this.logger.verbose("Window.location.hash cleared");
                    // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
                    var stateInfo = this.getResponseState(hash);
                    // if set to navigate to loginRequest page post login
                    if (this.config.auth.navigateToLoginRequestUrl && window.parent === window) {
                        this.logger.verbose("Window.parent is equal to window, not in popup or iframe. Navigation to login request url after login turned on");
                        var loginRequestUrl = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, stateInfo.state), this.inCookie);
                        // Redirect to home page if login request url is null (real null or the string null)
                        if (!loginRequestUrl || loginRequestUrl === "null") {
                            this.logger.error("Unable to get valid login request url from cache, redirecting to home page");
                            window.location.assign("/");
                            return;
                        }
                        else {
                            this.logger.verbose("Valid login request url obtained from cache");
                            var currentUrl = UrlUtils_1.UrlUtils.removeHashFromUrl(window.location.href);
                            var finalRedirectUrl = UrlUtils_1.UrlUtils.removeHashFromUrl(loginRequestUrl);
                            if (currentUrl !== finalRedirectUrl) {
                                this.logger.verbose("Current url is not login request url, navigating");
                                this.logger.verbosePii("CurrentUrl: " + currentUrl + ", finalRedirectUrl: " + finalRedirectUrl);
                                window.location.assign("" + finalRedirectUrl + hash);
                                return;
                            }
                            else {
                                this.logger.verbose("Current url matches login request url");
                                var loginRequestUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(loginRequestUrl);
                                if (loginRequestUrlComponents.Hash) {
                                    this.logger.verbose("Login request url contains hash, resetting non-msal hash");
                                    window.location.hash = loginRequestUrlComponents.Hash;
                                }
                            }
                        }
                    }
                    else if (!this.config.auth.navigateToLoginRequestUrl) {
                        this.logger.verbose("Default navigation to start page after login turned off");
                    }
                    this.processCallBack(hash, stateInfo, null);
                };
                /**
                 * @hidden
                 * Creates a stateInfo object from the URL fragment and returns it.
                 * @param {string} hash  -  Hash passed from redirect page
                 * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
                 * @ignore
                 */
                UserAgentApplication.prototype.getResponseState = function (hash) {
                    this.logger.verbose("GetResponseState has been called");
                    var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
                    var stateResponse;
                    if (!parameters) {
                        throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
                    }
                    if (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.STATE)) {
                        this.logger.verbose("Hash contains state. Creating stateInfo object");
                        var parsedState = RequestUtils_1.RequestUtils.parseLibraryState(parameters.state);
                        stateResponse = {
                            requestType: Constants_1.Constants.unknown,
                            state: parameters.state,
                            timestamp: parsedState.ts,
                            method: parsedState.method,
                            stateMatch: false
                        };
                    }
                    else {
                        throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
                    }
                    /*
                     * async calls can fire iframe and login request at the same time if developer does not use the API as expected
                     * incoming callback needs to be looked up to find the request type
                     */
                    // loginRedirect
                    if (stateResponse.state === this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, stateResponse.state), this.inCookie) || stateResponse.state === this.silentAuthenticationState) {
                        this.logger.verbose("State matches cached state, setting requestType to login");
                        stateResponse.requestType = Constants_1.Constants.login;
                        stateResponse.stateMatch = true;
                        return stateResponse;
                    }
                    // acquireTokenRedirect
                    else if (stateResponse.state === this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, stateResponse.state), this.inCookie)) {
                        this.logger.verbose("State matches cached state, setting requestType to renewToken");
                        stateResponse.requestType = Constants_1.Constants.renewToken;
                        stateResponse.stateMatch = true;
                        return stateResponse;
                    }
                    // external api requests may have many renewtoken requests for different resource
                    if (!stateResponse.stateMatch) {
                        this.logger.verbose("State does not match cached state, setting requestType to type from window");
                        stateResponse.requestType = window.requestType;
                        var statesInParentContext = window.renewStates;
                        for (var i = 0; i < statesInParentContext.length; i++) {
                            if (statesInParentContext[i] === stateResponse.state) {
                                this.logger.verbose("Matching state found for request");
                                stateResponse.stateMatch = true;
                                break;
                            }
                        }
                        if (!stateResponse.stateMatch) {
                            this.logger.verbose("Matching state not found for request");
                        }
                    }
                    return stateResponse;
                };
                // #endregion
                // #region Token Processing (Extract to TokenProcessing.ts)
                /**
                 * @hidden
                 * Used to get token for the specified set of scopes from the cache
                 * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
                 * @param {Account} account - Account for which the scopes were requested
                 */
                UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
                    this.logger.verbose("GetCachedToken has been called");
                    var scopes = serverAuthenticationRequest.scopes;
                    /**
                     * Id Token should be returned in every acquireTokenSilent call. The only exception is a response_type = token
                     * request when a valid ID Token is not present in the cache.
                     */
                    var idToken = this.getCachedIdToken(serverAuthenticationRequest, account);
                    var authResponse = this.getCachedAccessToken(serverAuthenticationRequest, account, scopes);
                    var accountState = this.getAccountState(serverAuthenticationRequest.state);
                    return ResponseUtils_1.ResponseUtils.buildAuthResponse(idToken, authResponse, serverAuthenticationRequest, account, scopes, accountState);
                };
                /**
                 * @hidden
                 *
                 * Uses passed in authority to further filter an array of tokenCacheItems until only the token being searched for remains, then returns that tokenCacheItem.
                 * This method will throw if authority filtering still yields multiple matching tokens and will return null if not tokens match the authority passed in.
                 *
                 * @param authority
                 * @param tokenCacheItems
                 * @param request
                 * @param requestScopes
                 * @param tokenType
                 */
                UserAgentApplication.prototype.getTokenCacheItemByAuthority = function (authority, tokenCacheItems, requestScopes, tokenType) {
                    var _this = this;
                    var filteredAuthorityItems;
                    if (UrlUtils_1.UrlUtils.isCommonAuthority(authority) || UrlUtils_1.UrlUtils.isOrganizationsAuthority(authority)) {
                        filteredAuthorityItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByDomain(tokenCacheItems, UrlUtils_1.UrlUtils.GetUrlComponents(authority).HostNameAndPort);
                    }
                    else {
                        filteredAuthorityItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByAuthority(tokenCacheItems, authority);
                    }
                    if (filteredAuthorityItems.length === 1) {
                        return filteredAuthorityItems[0];
                    }
                    else if (filteredAuthorityItems.length > 1) {
                        this.logger.warning("Multiple matching tokens found. Cleaning cache and requesting a new token.");
                        filteredAuthorityItems.forEach(function (accessTokenCacheItem) {
                            _this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                        });
                        return null;
                    }
                    else {
                        this.logger.verbose("No matching tokens of type " + tokenType + " found");
                        return null;
                    }
                };
                /**
                 *
                 * @hidden
                 *
                 * Searches the token cache for an ID Token that matches the request parameter and returns it as an IdToken object.
                 *
                 * @param serverAuthenticationRequest
                 * @param account
                 */
                UserAgentApplication.prototype.getCachedIdToken = function (serverAuthenticationRequest, account) {
                    this.logger.verbose("Getting all cached tokens of type ID Token");
                    var idTokenCacheItems = this.cacheStorage.getAllIdTokens(this.clientId, account ? account.homeAccountIdentifier : null);
                    var matchAuthority = serverAuthenticationRequest.authority || this.authority;
                    var idTokenCacheItem = this.getTokenCacheItemByAuthority(matchAuthority, idTokenCacheItems, null, Constants_1.ServerHashParamKeys.ID_TOKEN);
                    if (idTokenCacheItem) {
                        this.logger.verbose("Evaluating ID token found");
                        var idTokenIsStillValid = this.evaluateTokenExpiration(idTokenCacheItem);
                        if (idTokenIsStillValid) {
                            this.logger.verbose("ID token expiration is within offset, using ID token found in cache");
                            var idTokenValue = idTokenCacheItem.value;
                            if (idTokenValue) {
                                this.logger.verbose("ID Token found in cache is valid and unexpired");
                            }
                            else {
                                this.logger.verbose("ID Token found in cache is invalid");
                            }
                            return (idTokenValue) ? new IdToken_1.IdToken(idTokenValue.idToken) : null;
                        }
                        else {
                            this.logger.verbose("Cached ID token is expired, removing from cache");
                            this.cacheStorage.removeItem(JSON.stringify(idTokenCacheItem.key));
                            return null;
                        }
                    }
                    else {
                        this.logger.verbose("No tokens found");
                        return null;
                    }
                };
                /**
                 *
                 * @hidden
                 *
                 * Searches the token cache for an access token that matches the request parameters and returns it as an AuthResponse.
                 *
                 * @param serverAuthenticationRequest
                 * @param account
                 * @param scopes
                 */
                UserAgentApplication.prototype.getCachedAccessToken = function (serverAuthenticationRequest, account, scopes) {
                    this.logger.verbose("Getting all cached tokens of type Access Token");
                    var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
                    var scopeFilteredTokenCacheItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByScope(tokenCacheItems, scopes);
                    var matchAuthority = serverAuthenticationRequest.authority || this.authority;
                    // serverAuthenticationRequest.authority can only be common or organizations if not null
                    var accessTokenCacheItem = this.getTokenCacheItemByAuthority(matchAuthority, scopeFilteredTokenCacheItems, scopes, Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
                    if (!accessTokenCacheItem) {
                        this.logger.verbose("No matching token found when filtering by scope and authority");
                        var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                        if (authorityList.length > 1) {
                            throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                        }
                        this.logger.verbose("Single authority used, setting authorityInstance");
                        serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
                        return null;
                    }
                    else {
                        serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
                        this.logger.verbose("Evaluating access token found");
                        var tokenIsStillValid = this.evaluateTokenExpiration(accessTokenCacheItem);
                        // The response value will stay null if token retrieved from the cache is expired, otherwise it will be populated with said token's data
                        if (tokenIsStillValid) {
                            this.logger.verbose("Access token expiration is within offset, using access token found in cache");
                            if (!account) {
                                account = this.getAccount();
                                if (!account) {
                                    throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                                }
                            }
                            var aState = this.getAccountState(serverAuthenticationRequest.state);
                            var response = {
                                uniqueId: "",
                                tenantId: "",
                                tokenType: Constants_1.ServerHashParamKeys.ACCESS_TOKEN,
                                idToken: null,
                                idTokenClaims: null,
                                accessToken: accessTokenCacheItem.value.accessToken,
                                scopes: accessTokenCacheItem.key.scopes.split(" "),
                                expiresOn: new Date(Number(accessTokenCacheItem.value.expiresIn) * 1000),
                                account: account,
                                accountState: aState,
                                fromCache: true
                            };
                            return response;
                        }
                        else {
                            this.logger.verbose("Access token expired, removing from cache");
                            this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                            return null;
                        }
                    }
                };
                /**
                 * Returns true if the token passed in is within the acceptable expiration time offset, false if it is expired.
                 * @param tokenCacheItem
                 * @param serverAuthenticationRequest
                 */
                UserAgentApplication.prototype.evaluateTokenExpiration = function (tokenCacheItem) {
                    var expiration = Number(tokenCacheItem.value.expiresIn);
                    return TokenUtils_1.TokenUtils.validateExpirationIsWithinOffset(expiration, this.config.system.tokenRenewalOffsetSeconds);
                };
                /**
                 * @hidden
                 * Used to get a unique list of authorities from the cache
                 * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
                 * @ignore
                 */
                UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
                    this.logger.verbose("GetUniqueAuthority has been called");
                    var authorityList = [];
                    var flags = [];
                    accessTokenCacheItems.forEach(function (element) {
                        if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                            flags.push(element.key[property]);
                            authorityList.push(element.key[property]);
                        }
                    });
                    return authorityList;
                };
                /**
                 * @hidden
                 * Check if ADAL id_token exists and return if exists.
                 *
                 */
                UserAgentApplication.prototype.extractADALIdToken = function () {
                    this.logger.verbose("ExtractADALIdToken has been called");
                    var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
                    return (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) ? TokenUtils_1.TokenUtils.extractIdToken(adalIdToken) : null;
                };
                /**
                 * @hidden
                 * Acquires access token using a hidden iframe.
                 * @ignore
                 */
                UserAgentApplication.prototype.renewToken = function (requestSignature, resolve, reject, account, serverAuthenticationRequest) {
                    this.logger.verbose("RenewToken has been called");
                    this.logger.verbosePii("RenewToken scope and authority: " + requestSignature);
                    var frameName = WindowUtils_1.WindowUtils.generateFrameName(Constants_1.FramePrefix.TOKEN_FRAME, requestSignature);
                    WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
                    this.updateCacheEntries(serverAuthenticationRequest, account, false);
                    this.logger.verbosePii("RenewToken expected state: " + serverAuthenticationRequest.state);
                    // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
                    var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
                    window.renewStates.push(serverAuthenticationRequest.state);
                    window.requestType = Constants_1.Constants.renewToken;
                    this.logger.verbose("Set window.renewState and requestType");
                    this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
                    this.logger.infoPii("Navigate to: " + urlNavigate);
                    this.loadIframeTimeout(urlNavigate, frameName, requestSignature).catch(function (error) { return reject(error); });
                };
                /**
                 * @hidden
                 * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
                 * @ignore
                 */
                UserAgentApplication.prototype.renewIdToken = function (requestSignature, resolve, reject, account, serverAuthenticationRequest) {
                    this.logger.info("RenewIdToken has been called");
                    var frameName = WindowUtils_1.WindowUtils.generateFrameName(Constants_1.FramePrefix.ID_TOKEN_FRAME, requestSignature);
                    WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
                    this.updateCacheEntries(serverAuthenticationRequest, account, false);
                    this.logger.verbose("RenewIdToken expected state: " + serverAuthenticationRequest.state);
                    // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
                    var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
                    if (this.silentLogin) {
                        this.logger.verbose("Silent login is true, set silentAuthenticationState");
                        window.requestType = Constants_1.Constants.login;
                        this.silentAuthenticationState = serverAuthenticationRequest.state;
                    }
                    else {
                        this.logger.verbose("Not silent login, set window.renewState and requestType");
                        window.requestType = Constants_1.Constants.renewToken;
                        window.renewStates.push(serverAuthenticationRequest.state);
                    }
                    // note: scope here is clientId
                    this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
                    this.logger.infoPii("Navigate to:\" " + urlNavigate);
                    this.loadIframeTimeout(urlNavigate, frameName, requestSignature).catch(function (error) { return reject(error); });
                };
                /**
                 * @hidden
                 *
                 * This method builds an Access Token Cache item and saves it to the cache, returning the original
                 * AuthResponse augmented with a parsed expiresOn attribute.
                 *
                 * @param response The AuthResponse object that contains the token to be saved
                 * @param authority The authority under which the ID token will be cached
                 * @param scopes The scopes to be added to the cache item key (undefined for ID token cache items)
                 * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
                 * @param expiration Token expiration timestamp
                 */
                UserAgentApplication.prototype.saveToken = function (response, authority, scopes, clientInfo, expiration) {
                    var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scopes, clientInfo.uid, clientInfo.utid);
                    var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(response.accessToken, response.idToken.rawIdToken, expiration.toString(), clientInfo.encodeClientInfo());
                    this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
                    if (expiration) {
                        this.logger.verbose("New expiration set for token");
                        response.expiresOn = new Date(expiration * 1000);
                    }
                    else {
                        this.logger.error("Could not parse expiresIn parameter for access token");
                    }
                    return response;
                };
                /**
                 * @hidden
                 *
                 * This method sets up the elements of an ID Token cache item and calls saveToken to save it in
                 * Access Token Cache item format for the client application to use.
                 *
                 * @param response The AuthResponse object that will be used to build the cache item
                 * @param authority The authority under which the ID token will be cached
                 * @param parameters The response's Hash Params, which contain the ID token returned from the server
                 * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
                 * @param idTokenObj ID Token object from which the ID token's expiration is extracted
                 */
                /* tslint:disable:no-string-literal */
                UserAgentApplication.prototype.saveIdToken = function (response, authority, parameters, clientInfo, idTokenObj) {
                    this.logger.verbose("SaveIdToken has been called");
                    var idTokenResponse = tslib_1.__assign({}, response);
                    // Scopes are undefined so they don't show up in ID token cache key
                    var scopes;
                    idTokenResponse.scopes = Constants_1.Constants.oidcScopes;
                    idTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ID_TOKEN];
                    var expiration = Number(idTokenObj.expiration);
                    // Set ID Token item in cache
                    this.logger.verbose("Saving ID token to cache");
                    return this.saveToken(idTokenResponse, authority, scopes, clientInfo, expiration);
                };
                /**
                 * @hidden
                 *
                 * This method sets up the elements of an Access Token cache item and calls saveToken to save it to the cache
                 *
                 * @param response The AuthResponse object that will be used to build the cache item
                 * @param authority The authority under which the access token will be cached
                 * @param parameters The response's Hash Params, which contain the access token returned from the server
                 * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
                 */
                /* tslint:disable:no-string-literal */
                UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo) {
                    this.logger.verbose("SaveAccessToken has been called");
                    var accessTokenResponse = tslib_1.__assign({}, response);
                    // read the scopes
                    var scope = parameters[Constants_1.ServerHashParamKeys.SCOPE];
                    var consentedScopes = scope.split(" ");
                    // retrieve all access tokens from the cache, remove the dup scopes
                    var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
                    this.logger.verbose("Retrieving all access tokens from cache and removing duplicates");
                    for (var i = 0; i < accessTokenCacheItems.length; i++) {
                        var accessTokenCacheItem = accessTokenCacheItems[i];
                        if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                            var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                            if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                                this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                            }
                        }
                    }
                    accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
                    accessTokenResponse.scopes = consentedScopes;
                    var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.ServerHashParamKeys.EXPIRES_IN]);
                    var parsedState = RequestUtils_1.RequestUtils.parseLibraryState(parameters[Constants_1.ServerHashParamKeys.STATE]);
                    var expiration = parsedState.ts + expiresIn;
                    this.logger.verbose("Saving access token to cache");
                    return this.saveToken(accessTokenResponse, authority, scope, clientInfo, expiration);
                };
                /**
                 * @hidden
                 * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
                 * @ignore
                 */
                UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
                    this.logger.verbose("SaveTokenFromHash has been called");
                    this.logger.info("State status: " + stateInfo.stateMatch + "; Request type: " + stateInfo.requestType);
                    var response = {
                        uniqueId: "",
                        tenantId: "",
                        tokenType: "",
                        idToken: null,
                        idTokenClaims: null,
                        accessToken: null,
                        scopes: [],
                        expiresOn: null,
                        account: null,
                        accountState: "",
                        fromCache: false
                    };
                    var error;
                    var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
                    var authorityKey = "";
                    var acquireTokenAccountKey = "";
                    var idTokenObj = null;
                    // If server returns an error
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) || hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR)) {
                        this.logger.verbose("Server returned an error");
                        this.logger.infoPii("Error : " + hashParams[Constants_1.ServerHashParamKeys.ERROR] + "; Error description: " + hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR]);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
                        // login
                        if (stateInfo.requestType === Constants_1.Constants.login) {
                            this.logger.verbose("RequestType is login, caching login error, generating authorityKey");
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION] + ":" + hashParams[Constants_1.ServerHashParamKeys.ERROR]);
                            authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
                        }
                        // acquireToken
                        if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                            this.logger.verbose("RequestType is renewToken, generating acquireTokenAccountKey");
                            authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
                            var account = this.getAccount();
                            var accountId = void 0;
                            if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                                accountId = account.homeAccountIdentifier;
                                this.logger.verbose("AccountId is set");
                            }
                            else {
                                accountId = Constants_1.Constants.no_account;
                                this.logger.verbose("AccountId is set as no_account");
                            }
                            acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, stateInfo.state);
                        }
                        var _a = Constants_1.ServerHashParamKeys.ERROR, hashErr = hashParams[_a], _b = Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION, hashErrDesc = hashParams[_b];
                        if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                            InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                            error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
                        }
                        else {
                            error = new ServerError_1.ServerError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
                        }
                    }
                    // If the server returns "Success"
                    else {
                        this.logger.verbose("Server returns success");
                        // Verify the state from redirect and record tokens to storage if exists
                        if (stateInfo.stateMatch) {
                            this.logger.info("State is right");
                            if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SESSION_STATE)) {
                                this.logger.verbose("Fragment has session state, caching");
                                this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.SESSION_STATE, stateInfo.state), hashParams[Constants_1.ServerHashParamKeys.SESSION_STATE]);
                            }
                            response.accountState = this.getAccountState(stateInfo.state);
                            var clientInfo = void 0;
                            // Process access_token
                            if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN)) {
                                this.logger.info("Fragment has access token");
                                response.accessToken = hashParams[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
                                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SCOPE)) {
                                    response.scopes = hashParams[Constants_1.ServerHashParamKeys.SCOPE].split(" ");
                                }
                                // retrieve the id_token from response if present
                                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                                    this.logger.verbose("Fragment has id_token");
                                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                                }
                                else {
                                    this.logger.verbose("No idToken on fragment, getting idToken from cache");
                                    idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN));
                                }
                                response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                                // set authority
                                var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                                this.logger.verbose("Got authority from cache");
                                // retrieve client_info - if it is not found, generate the uid and utid from idToken
                                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                                    this.logger.verbose("Fragment has clientInfo");
                                    clientInfo = new ClientInfo_1.ClientInfo(hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO], authority);
                                }
                                else if (this.authorityInstance.AuthorityType === Authority_1.AuthorityType.Adfs) {
                                    clientInfo = ClientInfo_1.ClientInfo.createClientInfoFromIdToken(idTokenObj, authority);
                                }
                                else {
                                    this.logger.warning("ClientInfo not received in the response from AAD");
                                }
                                response.account = Account_1.Account.createAccount(idTokenObj, clientInfo);
                                this.logger.verbose("Account object created from response");
                                var accountKey = void 0;
                                if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                                    this.logger.verbose("AccountKey set");
                                    accountKey = response.account.homeAccountIdentifier;
                                }
                                else {
                                    this.logger.verbose("AccountKey set as no_account");
                                    accountKey = Constants_1.Constants.no_account;
                                }
                                acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                                var acquireTokenAccountKey_noaccount = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                                this.logger.verbose("AcquireTokenAccountKey generated");
                                var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                                var acquireTokenAccount = void 0;
                                // Check with the account in the Cache
                                if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                                    acquireTokenAccount = JSON.parse(cachedAccount);
                                    this.logger.verbose("AcquireToken request account retrieved from cache");
                                    if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                                        response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                                        this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                                    }
                                    else {
                                        this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                                    }
                                }
                                else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                                    this.logger.verbose("No acquireToken account retrieved from cache");
                                    response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                                }
                            }
                            // Process id_token
                            if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                                this.logger.info("Fragment has idToken");
                                // set the idToken
                                idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                                // set authority
                                var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                                response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                                    this.logger.verbose("Fragment has clientInfo");
                                    clientInfo = new ClientInfo_1.ClientInfo(hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO], authority);
                                }
                                else if (this.authorityInstance.AuthorityType === Authority_1.AuthorityType.Adfs) {
                                    clientInfo = ClientInfo_1.ClientInfo.createClientInfoFromIdToken(idTokenObj, authority);
                                }
                                else {
                                    this.logger.warning("ClientInfo not received in the response from AAD");
                                }
                                this.account = Account_1.Account.createAccount(idTokenObj, clientInfo);
                                response.account = this.account;
                                this.logger.verbose("Account object created from response");
                                if (idTokenObj && idTokenObj.nonce) {
                                    this.logger.verbose("IdToken has nonce");
                                    // check nonce integrity if idToken has nonce - throw an error if not matched
                                    var cachedNonce = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, stateInfo.state), this.inCookie);
                                    if (idTokenObj.nonce !== cachedNonce) {
                                        this.account = null;
                                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, "Nonce Mismatch. Expected Nonce: " + cachedNonce + "," + "Actual Nonce: " + idTokenObj.nonce);
                                        this.logger.error("Nonce Mismatch. Expected Nonce: " + cachedNonce + ", Actual Nonce: " + idTokenObj.nonce);
                                        error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(cachedNonce, idTokenObj.nonce);
                                    }
                                    // Save the token
                                    else {
                                        this.logger.verbose("Nonce matches, saving idToken to cache");
                                        this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.IDTOKEN, hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN], this.inCookie);
                                        this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, clientInfo.encodeClientInfo(), this.inCookie);
                                        // Save idToken as access token item for app itself
                                        this.saveIdToken(response, authority, hashParams, clientInfo, idTokenObj);
                                    }
                                }
                                else {
                                    this.logger.verbose("No idToken or no nonce. Cache key for Authority set as state");
                                    authorityKey = stateInfo.state;
                                    acquireTokenAccountKey = stateInfo.state;
                                    this.logger.error("Invalid id_token received in the response");
                                    error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                                    this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                                    this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
                                }
                            }
                        }
                        // State mismatch - unexpected/invalid state
                        else {
                            this.logger.verbose("State mismatch");
                            authorityKey = stateInfo.state;
                            acquireTokenAccountKey = stateInfo.state;
                            var expectedState = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, stateInfo.state), this.inCookie);
                            this.logger.error("State Mismatch. Expected State: " + expectedState + ", Actual State: " + stateInfo.state);
                            error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
                        }
                    }
                    // Set status to completed
                    this.cacheStorage.removeItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, stateInfo.state));
                    this.cacheStorage.resetTempCacheItems(stateInfo.state);
                    this.logger.verbose("Status set to complete, temporary cache cleared");
                    // this is required if navigateToLoginRequestUrl=false
                    if (this.inCookie) {
                        this.logger.verbose("InCookie is true, setting authorityKey in cookie");
                        this.cacheStorage.setItemCookie(authorityKey, "", -1);
                        this.cacheStorage.clearMsalCookie(stateInfo.state);
                    }
                    if (error) {
                        // Error case, set status to cancelled
                        throw error;
                    }
                    if (!response) {
                        throw AuthError_1.AuthError.createUnexpectedError("Response is null");
                    }
                    return response;
                };
                /**
                 * Set Authority when saving Token from the hash
                 * @param state
                 * @param inCookie
                 * @param cacheStorage
                 * @param idTokenObj
                 * @param response
                 */
                UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
                    this.logger.verbose("PopulateAuthority has been called");
                    var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
                    var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
                    // retrieve the authority from cache and replace with tenantID
                    return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
                };
                /* tslint:enable:no-string-literal */
                // #endregion
                // #region Account
                /**
                 * Returns the signed in account
                 * (the account object is created at the time of successful login)
                 * or null when no state is found
                 * @returns {@link Account} - the account object stored in MSAL
                 */
                UserAgentApplication.prototype.getAccount = function () {
                    // if a session already exists, get the account from the session
                    if (this.account) {
                        return this.account;
                    }
                    // frame is used to get idToken and populate the account for the given session
                    var rawIdToken = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN, this.inCookie);
                    var rawClientInfo = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, this.inCookie);
                    if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
                        var idToken = new IdToken_1.IdToken(rawIdToken);
                        var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo, "");
                        this.account = Account_1.Account.createAccount(idToken, clientInfo);
                        return this.account;
                    }
                    // if login not yet done, return null
                    return null;
                };
                /**
                 * @hidden
                 *
                 * Extracts state value from the accountState sent with the authentication request.
                 * @returns {string} scope.
                 * @ignore
                 */
                UserAgentApplication.prototype.getAccountState = function (state) {
                    if (state) {
                        var splitIndex = state.indexOf(Constants_1.Constants.resourceDelimiter);
                        if (splitIndex > -1 && splitIndex + 1 < state.length) {
                            return state.substring(splitIndex + 1);
                        }
                    }
                    return state;
                };
                /**
                 * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
                 *
                 * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
                 */
                UserAgentApplication.prototype.getAllAccounts = function () {
                    var accounts = [];
                    var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
                    for (var i = 0; i < accessTokenCacheItems.length; i++) {
                        var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
                        var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier, "");
                        var account = Account_1.Account.createAccount(idToken, clientInfo);
                        accounts.push(account);
                    }
                    return this.getUniqueAccounts(accounts);
                };
                /**
                 * @hidden
                 *
                 * Used to filter accounts based on homeAccountIdentifier
                 * @param {Array<Account>}  Accounts - accounts saved in the cache
                 * @ignore
                 */
                UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
                    if (!accounts || accounts.length <= 1) {
                        return accounts;
                    }
                    var flags = [];
                    var uniqueAccounts = [];
                    for (var index = 0; index < accounts.length; ++index) {
                        if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                            flags.push(accounts[index].homeAccountIdentifier);
                            uniqueAccounts.push(accounts[index]);
                        }
                    }
                    return uniqueAccounts;
                };
                // #endregion
                // #region Angular
                /**
                 * @hidden
                 *
                 * Broadcast messages - Used only for Angular?  *
                 * @param eventName
                 * @param data
                 */
                UserAgentApplication.prototype.broadcast = function (eventName, data) {
                    var evt = new CustomEvent(eventName, { detail: data });
                    window.dispatchEvent(evt);
                };
                /**
                 * @hidden
                 *
                 * Helper function to retrieve the cached token
                 *
                 * @param scopes
                 * @param {@link Account} account
                 * @param state
                 * @return {@link AuthResponse} AuthResponse
                 */
                UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state, correlationId) {
                    // Get the current session's account object
                    var accountObject = account || this.getAccount();
                    if (!accountObject) {
                        return null;
                    }
                    // Construct AuthenticationRequest based on response type; set "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
                    var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
                    var responseType = this.getTokenType(accountObject, scopes);
                    var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, responseType, this.getRedirectUri(), scopes, state, correlationId);
                    // get cached token
                    return this.getCachedToken(serverAuthenticationRequest, account);
                };
                /**
                 * @hidden
                 *
                 * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
                 * Note: Please check if we need to set the "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
                 *
                 * @param endpoint
                 */
                UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
                    // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
                    if (this.config.framework.unprotectedResources.length > 0) {
                        for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                            if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                                return null;
                            }
                        }
                    }
                    // process all protected resources and send the matched one
                    if (this.config.framework.protectedResourceMap.size > 0) {
                        for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                            var key = _a[_i];
                            // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                            if (endpoint.indexOf(key) > -1) {
                                return this.config.framework.protectedResourceMap.get(key);
                            }
                        }
                    }
                    /*
                     * default resource will be clientid if nothing specified
                     * App will use idtoken for calls to itself
                     * check if it's staring from http or https, needs to match with app host
                     */
                    if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
                        if (UrlUtils_1.UrlUtils.getHostFromUri(endpoint) === UrlUtils_1.UrlUtils.getHostFromUri(this.getRedirectUri())) {
                            return new Array(this.clientId);
                        }
                    }
                    else {
                        /*
                         * in angular level, the url for $http interceptor call could be relative url,
                         * if it's relative call, we'll treat it as app backend call.
                         */
                        return new Array(this.clientId);
                    }
                    // if not the app's own backend or not a domain listed in the endpoints structure
                    return null;
                };
                /**
                 * Return boolean flag to developer to help inform if login is in progress
                 * @returns {boolean} true/false
                 */
                UserAgentApplication.prototype.getLoginInProgress = function () {
                    return this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS) === Constants_1.Constants.inProgress;
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * @param loginInProgress
                 */
                UserAgentApplication.prototype.setInteractionInProgress = function (inProgress) {
                    if (inProgress) {
                        this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, Constants_1.Constants.inProgress);
                    }
                    else {
                        this.cacheStorage.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                    }
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * @param loginInProgress
                 */
                UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
                    this.setInteractionInProgress(loginInProgress);
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * returns the status of acquireTokenInProgress
                 */
                UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
                    return this.cacheStorage.getItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS) === Constants_1.Constants.inProgress;
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * @param acquireTokenInProgress
                 */
                UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
                    this.setInteractionInProgress(acquireTokenInProgress);
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * returns the logger handle
                 */
                UserAgentApplication.prototype.getLogger = function () {
                    return this.logger;
                };
                /**
                 * Sets the logger callback.
                 * @param logger Logger callback
                 */
                UserAgentApplication.prototype.setLogger = function (logger) {
                    this.logger = logger;
                };
                // #endregion
                // #region Getters and Setters
                /**
                 * Use to get the redirect uri configured in MSAL or null.
                 * Evaluates redirectUri if its a function, otherwise simply returns its value.
                 *
                 * @returns {string} redirect URL
                 */
                UserAgentApplication.prototype.getRedirectUri = function (reqRedirectUri) {
                    if (reqRedirectUri) {
                        return reqRedirectUri;
                    }
                    else if (typeof this.config.auth.redirectUri === "function") {
                        return this.config.auth.redirectUri();
                    }
                    return this.config.auth.redirectUri;
                };
                /**
                 * Use to get the post logout redirect uri configured in MSAL or null.
                 * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
                 *
                 * @returns {string} post logout redirect URL
                 */
                UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
                    if (typeof this.config.auth.postLogoutRedirectUri === "function") {
                        return this.config.auth.postLogoutRedirectUri();
                    }
                    return this.config.auth.postLogoutRedirectUri;
                };
                /**
                 * Use to get the current {@link Configuration} object in MSAL
                 *
                 * @returns {@link Configuration}
                 */
                UserAgentApplication.prototype.getCurrentConfiguration = function () {
                    if (!this.config) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
                    }
                    return this.config;
                };
                /**
                 * @ignore
                 *
                 * Utils function to create the Authentication
                 * @param {@link account} account object
                 * @param scopes
                 *
                 * @returns {string} token type: token, id_token or id_token token
                 *
                 */
                UserAgentApplication.prototype.getTokenType = function (accountObject, scopes) {
                    var accountsMatch = Account_1.Account.compareAccounts(accountObject, this.getAccount());
                    return ServerRequestParameters_1.ServerRequestParameters.determineResponseType(accountsMatch, scopes);
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * Sets the cachekeys for and stores the account information in cache
                 * @param account
                 * @param state
                 * @hidden
                 */
                UserAgentApplication.prototype.setAccountCache = function (account, state) {
                    // Cache acquireTokenAccountKey
                    var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
                    var acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, state);
                    this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
                };
                /**
                 * @hidden
                 * @ignore
                 *
                 * Sets the cacheKey for and stores the authority information in cache
                 * @param state
                 * @param authority
                 * @hidden
                 */
                UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
                    // Cache authorityKey
                    var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
                    this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
                };
                /**
                 * Updates account, authority, and nonce in cache
                 * @param serverAuthenticationRequest
                 * @param account
                 * @hidden
                 * @ignore
                 */
                UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, isLoginCall, loginStartPage) {
                    // Cache Request Originator Page
                    if (loginStartPage) {
                        this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, serverAuthenticationRequest.state), loginStartPage, this.inCookie);
                    }
                    // Cache account and authority
                    if (isLoginCall) {
                        // Cache the state
                        this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, serverAuthenticationRequest.state), serverAuthenticationRequest.state, this.inCookie);
                    }
                    else {
                        this.setAccountCache(account, serverAuthenticationRequest.state);
                    }
                    // Cache authorityKey
                    this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
                    // Cache nonce
                    this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, serverAuthenticationRequest.state), serverAuthenticationRequest.nonce, this.inCookie);
                };
                /**
                 * Returns the unique identifier for the logged in account
                 * @param account
                 * @hidden
                 * @ignore
                 */
                UserAgentApplication.prototype.getAccountId = function (account) {
                    // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
                    var accountId;
                    if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                        accountId = account.homeAccountIdentifier;
                    }
                    else {
                        accountId = Constants_1.Constants.no_account;
                    }
                    return accountId;
                };
                /**
                 * @ignore
                 * @param extraQueryParameters
                 *
                 * Construct 'tokenRequest' from the available data in adalIdToken
                 */
                UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
                    var tokenRequest = {
                        scopes: Constants_1.Constants.oidcScopes,
                        authority: this.authority,
                        account: this.getAccount(),
                        extraQueryParameters: request.extraQueryParameters,
                        correlationId: request.correlationId
                    };
                    return tokenRequest;
                };
                /**
                 * @ignore
                 * @param config
                 * @param clientId
                 *
                 * Construct TelemetryManager from Configuration
                 */
                UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
                    if (!config) { // if unset
                        return TelemetryManager_1.default.getTelemetrymanagerStub(clientId, this.logger);
                    }
                    // if set then validate
                    var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
                    if (!applicationName || !applicationVersion || !telemetryEmitter) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
                    }
                    // if valid then construct
                    var telemetryPlatform = {
                        applicationName: applicationName,
                        applicationVersion: applicationVersion
                    };
                    var telemetryManagerConfig = {
                        platform: telemetryPlatform,
                        clientId: clientId
                    };
                    return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter, this.logger);
                };
                return UserAgentApplication;
            }());
            exports.UserAgentApplication = UserAgentApplication;


            /***/
}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var CryptoUtils_1 = __webpack_require__(3);
            var Constants_1 = __webpack_require__(1);
            var StringUtils_1 = __webpack_require__(2);
            var ScopeSet_1 = __webpack_require__(7);
            /**
             * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
             * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
             * @hidden
             */
            var ServerRequestParameters = /** @class */ (function () {
                /**
                 * Constructor
                 * @param authority
                 * @param clientId
                 * @param scope
                 * @param responseType
                 * @param redirectUri
                 * @param state
                 */
                function ServerRequestParameters(authority, clientId, responseType, redirectUri, scopes, state, correlationId) {
                    this.authorityInstance = authority;
                    this.clientId = clientId;
                    this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
                    // set scope to clientId if null
                    this.scopes = scopes ? scopes.slice() : Constants_1.Constants.oidcScopes;
                    this.scopes = ScopeSet_1.ScopeSet.trimScopes(this.scopes);
                    // set state (already set at top level)
                    this.state = state;
                    // set correlationId
                    this.correlationId = correlationId;
                    // telemetry information
                    this.xClientSku = "MSAL.JS";
                    this.xClientVer = Constants_1.libraryVersion();
                    this.responseType = responseType;
                    this.redirectUri = redirectUri;
                }
                Object.defineProperty(ServerRequestParameters.prototype, "authority", {
                    get: function () {
                        return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @hidden
                 * @ignore
                 *
                 * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
                 * @param request
                 * @param serverAuthenticationRequest
                 */
                ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject, silentCall) {
                    var queryParameters = {};
                    if (request) {
                        // add the prompt parameter to serverRequestParameters if passed
                        if (request.prompt) {
                            this.promptValue = request.prompt;
                        }
                        // Add claims challenge to serverRequestParameters if passed
                        if (request.claimsRequest) {
                            this.claimsValue = request.claimsRequest;
                        }
                        // if the developer provides one of these, give preference to developer choice
                        if (ServerRequestParameters.isSSOParam(request)) {
                            queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
                        }
                    }
                    if (adalIdTokenObject) {
                        queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
                    }
                    /*
                     * adds sid/login_hint if not populated
                     * this.logger.verbose("Calling addHint parameters");
                     */
                    queryParameters = this.addHintParameters(account, queryParameters);
                    // sanity check for developer passed extraQueryParameters
                    var eQParams = request ? request.extraQueryParameters : null;
                    // Populate the extraQueryParameters to be sent to the server
                    this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
                    this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams, silentCall);
                };
                // #region QueryParam helpers
                /**
                 * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
                 * in any login() or acquireToken() calls
                 * @param idTokenObject
                 * @param extraQueryParameters
                 * @param sid
                 * @param loginHint
                 */
                // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
                ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
                    // preference order: account > sid > login_hint
                    var ssoType;
                    var ssoData;
                    var serverReqParam = {};
                    // if account info is passed, account.sid > account.login_hint
                    if (request) {
                        if (request.account) {
                            var account = request.account;
                            if (account.sid) {
                                ssoType = Constants_1.SSOTypes.SID;
                                ssoData = account.sid;
                            }
                            else if (account.userName) {
                                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                                ssoData = account.userName;
                            }
                        }
                        // sid from request
                        else if (request.sid) {
                            ssoType = Constants_1.SSOTypes.SID;
                            ssoData = request.sid;
                        }
                        // loginHint from request
                        else if (request.loginHint) {
                            ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                            ssoData = request.loginHint;
                        }
                    }
                    // adalIdToken retrieved from cache
                    else if (idTokenObject) {
                        if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                            ssoType = Constants_1.SSOTypes.ID_TOKEN;
                            ssoData = idTokenObject.upn;
                        }
                    }
                    serverReqParam = this.addSSOParameter(ssoType, ssoData);
                    return serverReqParam;
                };
                /**
                 * @hidden
                 *
                 * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
                 * domain_hint if added skips the email based discovery process of the user - only supported for interactive calls in implicit_flow
                 * domain_req utid received as part of the clientInfo
                 * login_req uid received as part of clientInfo
                 * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
                 *
                 * @param {@link Account} account - Account for which the token is requested
                 * @param queryparams
                 * @param {@link ServerRequestParameters}
                 * @ignore
                 */
                ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
                    /*
                     * This is a final check for all queryParams added so far; preference order: sid > login_hint
                     * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
                     */
                    if (account && !qParams[Constants_1.SSOTypes.SID]) {
                        // sid - populate only if login_hint is not already populated and the account has sid
                        var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
                        if (populateSID) {
                            qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
                        }
                        // login_hint - account.userName
                        else {
                            var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                            if (populateLoginHint) {
                                qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                            }
                        }
                    }
                    return qParams;
                };
                /**
                 * Add SID to extraQueryParameters
                 * @param sid
                 */
                ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
                    if (!ssoParam) {
                        ssoParam = {};
                    }
                    if (!ssoData) {
                        return ssoParam;
                    }
                    switch (ssoType) {
                        case Constants_1.SSOTypes.SID: {
                            ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                            break;
                        }
                        case Constants_1.SSOTypes.ID_TOKEN: {
                            ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                            break;
                        }
                        case Constants_1.SSOTypes.LOGIN_HINT: {
                            ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                            break;
                        }
                    }
                    return ssoParam;
                };
                /**
                 * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
                 * @param extraQueryParameters
                 */
                ServerRequestParameters.generateQueryParametersString = function (queryParameters, silentCall) {
                    var paramsString = null;
                    if (queryParameters) {
                        Object.keys(queryParameters).forEach(function (key) {
                            // sid cannot be passed along with login_hint or domain_hint
                            if (key === Constants_1.Constants.domain_hint && (silentCall || queryParameters[Constants_1.SSOTypes.SID])) {
                                return;
                            }
                            if (paramsString == null) {
                                paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                            }
                            else {
                                paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                            }
                        });
                    }
                    return paramsString;
                };
                // #endregion
                /**
                 * Check to see if there are SSO params set in the Request
                 * @param request
                 */
                ServerRequestParameters.isSSOParam = function (request) {
                    return request && (request.account || request.sid || request.loginHint);
                };
                /**
                 * Returns the correct response_type string attribute for an acquireToken request configuration
                 * @param accountsMatch boolean: Determines whether the account in the request matches the cached account
                 * @param scopes Array<string>: AuthenticationRequest scopes configuration
                 * @param loginScopesOnly boolean: True if the scopes array ONLY contains the clientId or any combination of OIDC scopes, without resource scopes
                 */
                ServerRequestParameters.determineResponseType = function (accountsMatch, scopes) {
                    // Supports getting an id_token by sending in clientId as only scope or OIDC scopes as only scopes
                    if (ScopeSet_1.ScopeSet.onlyContainsOidcScopes(scopes)) {
                        return Constants_1.ResponseTypes.id_token;
                    }
                    // If accounts match, check if OIDC scopes are included, otherwise return id_token_token
                    return (accountsMatch) ? this.responseTypeForMatchingAccounts(scopes) : Constants_1.ResponseTypes.id_token_token;
                };
                /**
                 * Returns the correct response_type string attribute for an acquireToken request configuration that contains an
                 * account that matches the account in the MSAL cache.
                 * @param scopes Array<string>: AuthenticationRequest scopes configuration
                 */
                ServerRequestParameters.responseTypeForMatchingAccounts = function (scopes) {
                    // Opt-into also requesting an ID token by sending in 'openid', 'profile' or both along with resource scopes when login is not necessary.
                    return (ScopeSet_1.ScopeSet.containsAnyOidcScopes(scopes)) ? Constants_1.ResponseTypes.id_token_token : Constants_1.ResponseTypes.token;
                };
                return ServerRequestParameters;
            }());
            exports.ServerRequestParameters = ServerRequestParameters;


            /***/
}),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var Constants_1 = __webpack_require__(1);
            /**
             * XHR client for JSON endpoints
             * https://www.npmjs.com/package/async-promise
             * @hidden
             */
            var XhrClient = /** @class */ (function () {
                function XhrClient() {
                }
                XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.open(method, url, /* async: */ true);
                        if (enableCaching) {
                            /*
                             * TODO: (shivb) ensure that this can be cached
                             * xhr.setRequestHeader("Cache-Control", "Public");
                             */
                        }
                        xhr.onload = function () {
                            if (xhr.status < 200 || xhr.status >= 300) {
                                reject(_this.handleError(xhr.responseText));
                            }
                            var jsonResponse;
                            try {
                                jsonResponse = JSON.parse(xhr.responseText);
                            }
                            catch (e) {
                                reject(_this.handleError(xhr.responseText));
                            }
                            var response = {
                                statusCode: xhr.status,
                                body: jsonResponse
                            };
                            resolve(response);
                        };
                        xhr.onerror = function () {
                            reject(xhr.status);
                        };
                        if (method === Constants_1.NetworkRequestType.GET) {
                            xhr.send();
                        }
                        else {
                            throw "not implemented";
                        }
                    });
                };
                XhrClient.prototype.handleError = function (responseText) {
                    var jsonResponse;
                    try {
                        jsonResponse = JSON.parse(responseText);
                        if (jsonResponse.error) {
                            return jsonResponse.error;
                        }
                        else {
                            throw responseText;
                        }
                    }
                    catch (e) {
                        return responseText;
                    }
                };
                return XhrClient;
            }());
            exports.XhrClient = XhrClient;


            /***/
}),
/* 19 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var XHRClient_1 = __webpack_require__(18);
            var Constants_1 = __webpack_require__(1);
            var UrlUtils_1 = __webpack_require__(4);
            var TrustedAuthority = /** @class */ (function () {
                function TrustedAuthority() {
                }
                /**
                 *
                 * @param validateAuthority
                 * @param knownAuthorities
                 */
                TrustedAuthority.setTrustedAuthoritiesFromConfig = function (validateAuthority, knownAuthorities) {
                    if (validateAuthority && !this.getTrustedHostList().length) {
                        knownAuthorities.forEach(function (authority) {
                            TrustedAuthority.TrustedHostList.push(authority.toLowerCase());
                        });
                    }
                };
                /**
                 *
                 * @param telemetryManager
                 * @param correlationId
                 */
                TrustedAuthority.getAliases = function (authorityToVerify, telemetryManager, correlationId) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var client, httpMethod, instanceDiscoveryEndpoint, httpEvent;
                        return tslib_1.__generator(this, function (_a) {
                            client = new XHRClient_1.XhrClient();
                            httpMethod = Constants_1.NetworkRequestType.GET;
                            instanceDiscoveryEndpoint = "" + Constants_1.AAD_INSTANCE_DISCOVERY_ENDPOINT + authorityToVerify + "oauth2/v2.0/authorize";
                            httpEvent = telemetryManager.createAndStartHttpEvent(correlationId, httpMethod, instanceDiscoveryEndpoint, "getAliases");
                            return [2 /*return*/, client.sendRequestAsync(instanceDiscoveryEndpoint, httpMethod, true)
                                .then(function (response) {
                                    httpEvent.httpResponseStatus = response.statusCode;
                                    telemetryManager.stopEvent(httpEvent);
                                    return response.body.metadata;
                                })
                                .catch(function (err) {
                                    httpEvent.serverErrorCode = err;
                                    telemetryManager.stopEvent(httpEvent);
                                    throw err;
                                })];
                        });
                    });
                };
                /**
                 *
                 * @param telemetryManager
                 * @param correlationId
                 */
                TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, telemetryManager, correlationId) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var metadata, host;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.getAliases(authorityToVerify, telemetryManager, correlationId)];
                                case 1:
                                    metadata = _a.sent();
                                    metadata.forEach(function (entry) {
                                        var authorities = entry.aliases;
                                        authorities.forEach(function (authority) {
                                            TrustedAuthority.TrustedHostList.push(authority.toLowerCase());
                                        });
                                    });
                                    host = UrlUtils_1.UrlUtils.GetUrlComponents(authorityToVerify).HostNameAndPort;
                                    if (TrustedAuthority.getTrustedHostList().length && !TrustedAuthority.IsInTrustedHostList(host)) {
                                        // Custom Domain scenario, host is trusted because Instance Discovery call succeeded
                                        TrustedAuthority.TrustedHostList.push(host.toLowerCase());
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                TrustedAuthority.getTrustedHostList = function () {
                    return this.TrustedHostList;
                };
                /**
                 * Checks to see if the host is in a list of trusted hosts
                 * @param host
                 */
                TrustedAuthority.IsInTrustedHostList = function (host) {
                    return this.TrustedHostList.indexOf(host.toLowerCase()) > -1;
                };
                TrustedAuthority.TrustedHostList = [];
                return TrustedAuthority;
            }());
            exports.TrustedAuthority = TrustedAuthority;


            /***/
}),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var CryptoUtils_1 = __webpack_require__(3);
            var StringUtils_1 = __webpack_require__(2);
            var TimeUtils_1 = __webpack_require__(10);
            /**
             * @hidden
             */
            var TokenUtils = /** @class */ (function () {
                function TokenUtils() {
                }
                /**
                 * decode a JWT
                 *
                 * @param jwtToken
                 */
                TokenUtils.decodeJwt = function (jwtToken) {
                    if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
                        return null;
                    }
                    var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
                    var matches = idTokenPartsRegex.exec(jwtToken);
                    if (!matches || matches.length < 4) {
                        // this._requestContext.logger.warn("The returned id_token is not parseable.");
                        return null;
                    }
                    var crackedToken = {
                        header: matches[1],
                        JWSPayload: matches[2],
                        JWSSig: matches[3]
                    };
                    return crackedToken;
                };
                /**
                 * Evaluates whether token cache item expiration is within expiration offset range
                 * @param tokenCacheItem
                 */
                TokenUtils.validateExpirationIsWithinOffset = function (expiration, tokenRenewalOffsetSeconds) {
                    var offset = tokenRenewalOffsetSeconds || 300;
                    return expiration && (expiration > TimeUtils_1.TimeUtils.now() + offset);
                };
                /**
                 * Extract IdToken by decoding the RAWIdToken
                 *
                 * @param encodedIdToken
                 */
                TokenUtils.extractIdToken = function (encodedIdToken) {
                    // id token will be decoded to get the username
                    var decodedToken = this.decodeJwt(encodedIdToken);
                    if (!decodedToken) {
                        return null;
                    }
                    try {
                        var base64IdToken = decodedToken.JWSPayload;
                        var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
                        if (!base64Decoded) {
                            // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                            return null;
                        }
                        // ECMA script has JSON built-in support
                        return JSON.parse(base64Decoded);
                    }
                    catch (err) {
                        // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
                    }
                    return null;
                };
                return TokenUtils;
            }());
            exports.TokenUtils = TokenUtils;


            /***/
}),
/* 21 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var Constants_1 = __webpack_require__(1);
            var ClientConfigurationError_1 = __webpack_require__(5);
            var ScopeSet_1 = __webpack_require__(7);
            var StringUtils_1 = __webpack_require__(2);
            var CryptoUtils_1 = __webpack_require__(3);
            var TimeUtils_1 = __webpack_require__(10);
            var ClientAuthError_1 = __webpack_require__(6);
            /**
             * @hidden
             */
            var RequestUtils = /** @class */ (function () {
                function RequestUtils() {
                }
                /**
                 * @ignore
                 *
                 * @param request
                 * @param isLoginCall
                 * @param cacheStorage
                 * @param clientId
                 *
                 * validates all request parameters and generates a consumable request object
                 */
                RequestUtils.validateRequest = function (request, isLoginCall, clientId, interactionType) {
                    // Throw error if request is empty for acquire * calls
                    if (!isLoginCall && !request) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
                    }
                    var scopes;
                    var extraQueryParameters;
                    if (request) {
                        // if extraScopesToConsent is passed in loginCall, append them to the login request; Validate and filter scopes (the validate function will throw if validation fails)
                        scopes = isLoginCall ? ScopeSet_1.ScopeSet.appendScopes(request.scopes, request.extraScopesToConsent) : request.scopes;
                        ScopeSet_1.ScopeSet.validateInputScope(scopes, !isLoginCall);
                        scopes = ScopeSet_1.ScopeSet.translateClientIdIfSingleScope(scopes, clientId);
                        // validate prompt parameter
                        this.validatePromptParameter(request.prompt);
                        // validate extraQueryParameters
                        extraQueryParameters = this.validateEQParameters(request.extraQueryParameters, request.claimsRequest);
                        // validate claimsRequest
                        this.validateClaimsRequest(request.claimsRequest);
                    }
                    // validate and generate state and correlationId
                    var state = this.validateAndGenerateState(request && request.state, interactionType);
                    var correlationId = this.validateAndGenerateCorrelationId(request && request.correlationId);
                    var validatedRequest = tslib_1.__assign({}, request, {
                        extraQueryParameters: extraQueryParameters,
                        scopes: scopes,
                        state: state,
                        correlationId: correlationId
                    });
                    return validatedRequest;
                };
                /**
                 * @ignore
                 *
                 * Utility to test if valid prompt value is passed in the request
                 * @param request
                 */
                RequestUtils.validatePromptParameter = function (prompt) {
                    if (prompt) {
                        if ([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) < 0) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
                        }
                    }
                };
                /**
                 * @ignore
                 *
                 * Removes unnecessary or duplicate query parameters from extraQueryParameters
                 * @param request
                 */
                RequestUtils.validateEQParameters = function (extraQueryParameters, claimsRequest) {
                    var eQParams = tslib_1.__assign({}, extraQueryParameters);
                    if (!eQParams) {
                        return null;
                    }
                    if (claimsRequest) {
                        // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
                        delete eQParams[Constants_1.Constants.claims];
                    }
                    Constants_1.BlacklistedEQParams.forEach(function (param) {
                        if (eQParams[param]) {
                            // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                            delete eQParams[param];
                        }
                    });
                    return eQParams;
                };
                /**
                 * @ignore
                 *
                 * Validates the claims passed in request is a JSON
                 * TODO: More validation will be added when the server team tells us how they have actually implemented claims
                 * @param claimsRequest
                 */
                RequestUtils.validateClaimsRequest = function (claimsRequest) {
                    if (!claimsRequest) {
                        return;
                    }
                    try {
                        JSON.parse(claimsRequest);
                    }
                    catch (e) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
                    }
                };
                /**
                 * @ignore
                 *
                 * generate unique state per request
                 * @param userState User-provided state value
                 * @returns State string include library state and user state
                 */
                RequestUtils.validateAndGenerateState = function (userState, interactionType) {
                    return !StringUtils_1.StringUtils.isEmpty(userState) ? "" + RequestUtils.generateLibraryState(interactionType) + Constants_1.Constants.resourceDelimiter + userState : RequestUtils.generateLibraryState(interactionType);
                };
                /**
                 * Generates the state value used by the library.
                 *
                 * @returns Base64 encoded string representing the state
                 */
                RequestUtils.generateLibraryState = function (interactionType) {
                    var stateObject = {
                        id: CryptoUtils_1.CryptoUtils.createNewGuid(),
                        ts: TimeUtils_1.TimeUtils.now(),
                        method: interactionType
                    };
                    var stateString = JSON.stringify(stateObject);
                    return CryptoUtils_1.CryptoUtils.base64Encode(stateString);
                };
                /**
                 * Decodes the state value into a StateObject
                 *
                 * @param state State value returned in the request
                 * @returns Parsed values from the encoded state value
                 */
                RequestUtils.parseLibraryState = function (state) {
                    var libraryState = decodeURIComponent(state).split(Constants_1.Constants.resourceDelimiter)[0];
                    if (CryptoUtils_1.CryptoUtils.isGuid(libraryState)) {
                        // If state is guid, assume timestamp is now and is redirect, as redirect should be only method where this can happen.
                        return {
                            id: libraryState,
                            ts: TimeUtils_1.TimeUtils.now(),
                            method: Constants_1.Constants.interactionTypeRedirect
                        };
                    }
                    try {
                        var stateString = CryptoUtils_1.CryptoUtils.base64Decode(libraryState);
                        var stateObject = JSON.parse(stateString);
                        return stateObject;
                    }
                    catch (e) {
                        throw ClientAuthError_1.ClientAuthError.createInvalidStateError(state, null);
                    }
                };
                /**
                 * @ignore
                 *
                 * validate correlationId and generate if not valid or not set by the user
                 * @param correlationId
                 */
                RequestUtils.validateAndGenerateCorrelationId = function (correlationId) {
                    // validate user set correlationId or set one for the user if null
                    if (correlationId && !CryptoUtils_1.CryptoUtils.isGuid(correlationId)) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCorrelationIdError();
                    }
                    return CryptoUtils_1.CryptoUtils.isGuid(correlationId) ? correlationId : CryptoUtils_1.CryptoUtils.createNewGuid();
                };
                /**
                 * Create a request signature
                 * @param request
                 */
                RequestUtils.createRequestSignature = function (request) {
                    return "" + request.scopes.join(" ").toLowerCase() + Constants_1.Constants.resourceDelimiter + request.authority;
                };
                return RequestUtils;
            }());
            exports.RequestUtils = RequestUtils;


            /***/
}),
/* 22 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var CryptoUtils_1 = __webpack_require__(3);
            var StringUtils_1 = __webpack_require__(2);
            /**
             * accountIdentifier       combination of idToken.uid and idToken.utid
             * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
             * userName                idToken.preferred_username
             * name                    idToken.name
             * idToken                 idToken
             * sid                     idToken.sid - session identifier
             * environment             idtoken.issuer (the authority that issues the token)
             */
            var Account = /** @class */ (function () {
                /**
                 * Creates an Account Object
                 * @praram accountIdentifier
                 * @param homeAccountIdentifier
                 * @param userName
                 * @param name
                 * @param idToken
                 * @param sid
                 * @param environment
                 */
                function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
                    this.accountIdentifier = accountIdentifier;
                    this.homeAccountIdentifier = homeAccountIdentifier;
                    this.userName = userName;
                    this.name = name;
                    // will be deprecated soon
                    this.idToken = idTokenClaims;
                    this.idTokenClaims = idTokenClaims;
                    this.sid = sid;
                    this.environment = environment;
                }
                /**
                 * @hidden
                 * @param idToken
                 * @param clientInfo
                 */
                Account.createAccount = function (idToken, clientInfo) {
                    // create accountIdentifier
                    var accountIdentifier = idToken.objectId || idToken.subject;
                    // create homeAccountIdentifier
                    var uid = clientInfo ? clientInfo.uid : "";
                    var utid = clientInfo ? clientInfo.utid : "";
                    var homeAccountIdentifier;
                    if (!StringUtils_1.StringUtils.isEmpty(uid)) {
                        homeAccountIdentifier = StringUtils_1.StringUtils.isEmpty(utid) ? CryptoUtils_1.CryptoUtils.base64Encode(uid) : CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
                    }
                    return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
                };
                /**
                 * Utils function to compare two Account objects - used to check if the same user account is logged in
                 *
                 * @param a1: Account object
                 * @param a2: Account object
                 */
                Account.compareAccounts = function (a1, a2) {
                    if (!a1 || !a2) {
                        return false;
                    }
                    if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
                        if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                            return true;
                        }
                    }
                    return false;
                };
                return Account;
            }());
            exports.Account = Account;


            /***/
}),
/* 23 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ClientAuthError_1 = __webpack_require__(6);
            var UrlUtils_1 = __webpack_require__(4);
            var Constants_1 = __webpack_require__(1);
            var TimeUtils_1 = __webpack_require__(10);
            var WindowUtils = /** @class */ (function () {
                function WindowUtils() {
                }
                /**
                 * @hidden
                 * Checks if the current page is running in an iframe.
                 * @ignore
                 */
                WindowUtils.isInIframe = function () {
                    return window.parent !== window;
                };
                /**
                 * @hidden
                 * Check if the current page is running in a popup.
                 * @ignore
                 */
                WindowUtils.isInPopup = function () {
                    return !!(window.opener && window.opener !== window);
                };
                /**
                 * @hidden
                 * @param prefix
                 * @param scopes
                 * @param authority
                 */
                WindowUtils.generateFrameName = function (prefix, requestSignature) {
                    return "" + prefix + Constants_1.Constants.resourceDelimiter + requestSignature;
                };
                /**
                 * @hidden
                 * Polls an iframe until it loads a url with a hash
                 * @ignore
                 */
                WindowUtils.monitorIframeForHash = function (contentWindow, timeout, urlNavigate, logger) {
                    return new Promise(function (resolve, reject) {
                        /*
                         * Polling for iframes can be purely timing based,
                         * since we don't need to account for interaction.
                         */
                        var nowMark = TimeUtils_1.TimeUtils.relativeNowMs();
                        var timeoutMark = nowMark + timeout;
                        logger.verbose("monitorWindowForIframe polling started");
                        var intervalId = setInterval(function () {
                            if (TimeUtils_1.TimeUtils.relativeNowMs() > timeoutMark) {
                                logger.error("monitorIframeForHash unable to find hash in url, timing out");
                                logger.errorPii("monitorIframeForHash polling timed out for url: " + urlNavigate);
                                clearInterval(intervalId);
                                reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                                return;
                            }
                            var href;
                            try {
                                /*
                                 * Will throw if cross origin,
                                 * which should be caught and ignored
                                 * since we need the interval to keep running while on STS UI.
                                 */
                                href = contentWindow.location.href;
                            }
                            catch (e) { }
                            if (href && UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                                logger.verbose("monitorIframeForHash found url in hash");
                                clearInterval(intervalId);
                                resolve(contentWindow.location.hash);
                            }
                        }, WindowUtils.POLLING_INTERVAL_MS);
                    });
                };
                /**
                 * @hidden
                 * Polls a popup until it loads a url with a hash
                 * @ignore
                 */
                WindowUtils.monitorPopupForHash = function (contentWindow, timeout, urlNavigate, logger) {
                    return new Promise(function (resolve, reject) {
                        /*
                         * Polling for popups needs to be tick-based,
                         * since a non-trivial amount of time can be spent on interaction (which should not count against the timeout).
                         */
                        var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
                        var ticks = 0;
                        logger.verbose("monitorWindowForHash polling started");
                        var intervalId = setInterval(function () {
                            if (contentWindow.closed) {
                                logger.error("monitorWindowForHash window closed");
                                clearInterval(intervalId);
                                reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                                return;
                            }
                            var href;
                            try {
                                /*
                                 * Will throw if cross origin,
                                 * which should be caught and ignored
                                 * since we need the interval to keep running while on STS UI.
                                 */
                                href = contentWindow.location.href;
                            }
                            catch (e) { }
                            // Don't process blank pages or cross domain
                            if (!href || href === "about:blank") {
                                return;
                            }
                            /*
                             * Only run clock when we are on same domain for popups
                             * as popup operations can take a long time.
                             */
                            ticks++;
                            if (href && UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                                logger.verbose("monitorPopupForHash found url in hash");
                                clearInterval(intervalId);
                                resolve(contentWindow.location.hash);
                            }
                            else if (ticks > maxTicks) {
                                logger.error("monitorPopupForHash unable to find hash in url, timing out");
                                logger.errorPii("monitorPopupForHash polling timed out for url: " + urlNavigate);
                                clearInterval(intervalId);
                                reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                            }
                        }, WindowUtils.POLLING_INTERVAL_MS);
                    });
                };
                /**
                 * @hidden
                 * Loads iframe with authorization endpoint URL
                 * @ignore
                 */
                WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
                    var _this = this;
                    /*
                     * This trick overcomes iframe navigation in IE
                     * IE does not load the page consistently in iframe
                     */
                    logger.infoPii("LoadFrame: " + frameName);
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            var frameHandle = _this.loadFrameSync(urlNavigate, frameName, logger);
                            if (!frameHandle) {
                                reject("Unable to load iframe with name: " + frameName);
                                return;
                            }
                            resolve(frameHandle);
                        }, timeoutMs);
                    });
                };
                /**
                 * @hidden
                 * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
                 * @param urlNavigate
                 * @param frameName
                 * @param logger
                 */
                WindowUtils.loadFrameSync = function (urlNavigate, frameName, logger) {
                    var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
                    // returning to handle null in loadFrame, also to avoid null object access errors
                    if (!frameHandle) {
                        return null;
                    }
                    else if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                        frameHandle.src = urlNavigate;
                        logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
                    }
                    return frameHandle;
                };
                /**
                 * @hidden
                 * Adds the hidden iframe for silent token renewal.
                 * @ignore
                 */
                WindowUtils.addHiddenIFrame = function (iframeId, logger) {
                    if (typeof iframeId === "undefined") {
                        return null;
                    }
                    logger.infoPii("Add msal frame to document:" + iframeId);
                    var adalFrame = document.getElementById(iframeId);
                    if (!adalFrame) {
                        if (document.createElement &&
                            document.documentElement &&
                            (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                            var ifr = document.createElement("iframe");
                            ifr.setAttribute("id", iframeId);
                            ifr.setAttribute("aria-hidden", "true");
                            ifr.style.visibility = "hidden";
                            ifr.style.position = "absolute";
                            ifr.style.width = ifr.style.height = "0";
                            ifr.style.border = "0";
                            ifr.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
                            adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
                        }
                        else if (document.body && document.body.insertAdjacentHTML) {
                            document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
                        }
                        if (window.frames && window.frames[iframeId]) {
                            adalFrame = window.frames[iframeId];
                        }
                    }
                    return adalFrame;
                };
                /**
                 * @hidden
                 * Removes a hidden iframe from the page.
                 * @ignore
                 */
                WindowUtils.removeHiddenIframe = function (iframe) {
                    if (document.body === iframe.parentNode) {
                        document.body.removeChild(iframe);
                    }
                };
                /**
                 * @hidden
                 * Find and return the iframe element with the given hash
                 * @ignore
                 */
                WindowUtils.getIframeWithHash = function (hash) {
                    var iframes = document.getElementsByTagName("iframe");
                    var iframeArray = Array.apply(null, Array(iframes.length)).map(function (iframe, index) { return iframes.item(index); }); // eslint-disable-line prefer-spread
                    return iframeArray.filter(function (iframe) {
                        try {
                            return iframe.contentWindow.location.hash === hash;
                        }
                        catch (e) {
                            return false;
                        }
                    })[0];
                };
                /**
                 * @hidden
                 * Returns an array of all the popups opened by MSAL
                 * @ignore
                 */
                WindowUtils.getPopups = function () {
                    if (!window.openedWindows) {
                        window.openedWindows = [];
                    }
                    return window.openedWindows;
                };
                /**
                 * @hidden
                 * Find and return the popup with the given hash
                 * @ignore
                 */
                WindowUtils.getPopUpWithHash = function (hash) {
                    return WindowUtils.getPopups().filter(function (popup) {
                        try {
                            return popup.location.hash === hash;
                        }
                        catch (e) {
                            return false;
                        }
                    })[0];
                };
                /**
                 * @hidden
                 * Add the popup to the known list of popups
                 * @ignore
                 */
                WindowUtils.trackPopup = function (popup) {
                    WindowUtils.getPopups().push(popup);
                };
                /**
                 * @hidden
                 * Close all popups
                 * @ignore
                 */
                WindowUtils.closePopups = function () {
                    WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
                };
                /**
                 * @ignore
                 *
                 * blocks any login/acquireToken calls to reload from within a hidden iframe (generated for silent calls)
                 */
                WindowUtils.blockReloadInHiddenIframes = function () {
                    // return an error if called from the hidden iframe created by the msal js silent calls
                    if (UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash) && WindowUtils.isInIframe()) {
                        throw ClientAuthError_1.ClientAuthError.createBlockTokenRequestsInHiddenIframeError();
                    }
                };
                /**
                 *
                 * @param cacheStorage
                 */
                WindowUtils.checkIfBackButtonIsPressed = function (cacheStorage) {
                    var redirectCache = cacheStorage.getItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
                    // if redirect request is set and there is no hash
                    if (redirectCache && !UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash)) {
                        var splitCache = redirectCache.split(Constants_1.Constants.resourceDelimiter);
                        splitCache.shift();
                        var state = splitCache.length > 0 ? splitCache.join(Constants_1.Constants.resourceDelimiter) : null;
                        cacheStorage.resetTempCacheItems(state);
                    }
                };
                /**
                 * Removes url fragment from browser url
                 */
                WindowUtils.clearUrlFragment = function () {
                    // Office.js sets history.replaceState to null
                    if (typeof history.replaceState === "function") {
                        // Full removes "#" from url
                        history.replaceState(null, null, "" + window.location.pathname + window.location.search);
                    }
                    else {
                        window.location.hash = "";
                    }
                };
                /**
                 * @hidden
                 * Interval in milliseconds that we poll a window
                 * @ignore
                 */
                WindowUtils.POLLING_INTERVAL_MS = 50;
                return WindowUtils;
            }());
            exports.WindowUtils = WindowUtils;


            /***/
}),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var Logger_1 = __webpack_require__(13);
            var UrlUtils_1 = __webpack_require__(4);
            /**
             * Defaults for the Configuration Options
             */
            var FRAME_TIMEOUT = 6000;
            var OFFSET = 300;
            var NAVIGATE_FRAME_WAIT = 500;
            var DEFAULT_AUTH_OPTIONS = {
                clientId: "",
                authority: null,
                validateAuthority: true,
                authorityMetadata: "",
                knownAuthorities: [],
                redirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUrl(); },
                postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUrl(); },
                navigateToLoginRequestUrl: true
            };
            var DEFAULT_CACHE_OPTIONS = {
                cacheLocation: "sessionStorage",
                storeAuthStateInCookie: false
            };
            var DEFAULT_SYSTEM_OPTIONS = {
                logger: new Logger_1.Logger(null),
                loadFrameTimeout: FRAME_TIMEOUT,
                tokenRenewalOffsetSeconds: OFFSET,
                navigateFrameWait: NAVIGATE_FRAME_WAIT
            };
            var DEFAULT_FRAMEWORK_OPTIONS = {
                isAngular: false,
                unprotectedResources: new Array(),
                protectedResourceMap: new Map()
            };
            /**
             * MSAL function that sets the default options when not explicitly configured from app developer
             *
             * @param TAuthOptions
             * @param TCacheOptions
             * @param TSystemOptions
             * @param TFrameworkOptions
             * @param TAuthorityDataOptions
             *
             * @returns TConfiguration object
             */
            function buildConfiguration(_a) {
                var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
                var overlayedConfig = {
                    auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
                    cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
                    system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
                    framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
                };
                return overlayedConfig;
            }
            exports.buildConfiguration = buildConfiguration;


            /***/
}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var ServerError_1 = __webpack_require__(14);
            exports.InteractionRequiredAuthErrorMessage = {
                interactionRequired: {
                    code: "interaction_required"
                },
                consentRequired: {
                    code: "consent_required"
                },
                loginRequired: {
                    code: "login_required"
                },
            };
            /**
             * Error thrown when the user is required to perform an interactive token request.
             */
            var InteractionRequiredAuthError = /** @class */ (function (_super) {
                tslib_1.__extends(InteractionRequiredAuthError, _super);
                function InteractionRequiredAuthError(errorCode, errorMessage) {
                    var _this = _super.call(this, errorCode, errorMessage) || this;
                    _this.name = "InteractionRequiredAuthError";
                    Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
                    return _this;
                }
                InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
                    var interactionRequiredCodes = [
                        exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
                        exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
                        exports.InteractionRequiredAuthErrorMessage.loginRequired.code
                    ];
                    return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
                };
                InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
                    return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
                };
                InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
                    return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
                };
                InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
                    return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
                };
                return InteractionRequiredAuthError;
            }(ServerError_1.ServerError));
            exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


            /***/
}),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            function buildResponseStateOnly(state) {
                return {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: "",
                    idToken: null,
                    idTokenClaims: null,
                    accessToken: "",
                    scopes: null,
                    expiresOn: null,
                    account: null,
                    accountState: state,
                    fromCache: false
                };
            }
            exports.buildResponseStateOnly = buildResponseStateOnly;


            /***/
}),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            var _a;
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(15));
            var TelemetryConstants_1 = __webpack_require__(11);
            var TelemetryUtils_1 = __webpack_require__(12);
            exports.EVENT_KEYS = {
                AUTHORITY: TelemetryUtils_1.prependEventNamePrefix("authority"),
                AUTHORITY_TYPE: TelemetryUtils_1.prependEventNamePrefix("authority_type"),
                PROMPT: TelemetryUtils_1.prependEventNamePrefix("ui_behavior"),
                TENANT_ID: TelemetryUtils_1.prependEventNamePrefix("tenant_id"),
                USER_ID: TelemetryUtils_1.prependEventNamePrefix("user_id"),
                WAS_SUCESSFUL: TelemetryUtils_1.prependEventNamePrefix("was_successful"),
                API_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("api_error_code"),
                LOGIN_HINT: TelemetryUtils_1.prependEventNamePrefix("login_hint")
            };
            var API_CODE;
            (function (API_CODE) {
                API_CODE[API_CODE["AcquireTokenRedirect"] = 2001] = "AcquireTokenRedirect";
                API_CODE[API_CODE["AcquireTokenSilent"] = 2002] = "AcquireTokenSilent";
                API_CODE[API_CODE["AcquireTokenPopup"] = 2003] = "AcquireTokenPopup";
                API_CODE[API_CODE["LoginRedirect"] = 2004] = "LoginRedirect";
                API_CODE[API_CODE["LoginPopup"] = 2005] = "LoginPopup";
                API_CODE[API_CODE["Logout"] = 2006] = "Logout";
            })(API_CODE = exports.API_CODE || (exports.API_CODE = {}));
            var API_EVENT_IDENTIFIER;
            (function (API_EVENT_IDENTIFIER) {
                API_EVENT_IDENTIFIER["AcquireTokenRedirect"] = "AcquireTokenRedirect";
                API_EVENT_IDENTIFIER["AcquireTokenSilent"] = "AcquireTokenSilent";
                API_EVENT_IDENTIFIER["AcquireTokenPopup"] = "AcquireTokenPopup";
                API_EVENT_IDENTIFIER["LoginRedirect"] = "LoginRedirect";
                API_EVENT_IDENTIFIER["LoginPopup"] = "LoginPopup";
                API_EVENT_IDENTIFIER["Logout"] = "Logout";
            })(API_EVENT_IDENTIFIER = exports.API_EVENT_IDENTIFIER || (exports.API_EVENT_IDENTIFIER = {}));
            var mapEventIdentiferToCode = (_a = {},
                _a[API_EVENT_IDENTIFIER.AcquireTokenSilent] = API_CODE.AcquireTokenSilent,
                _a[API_EVENT_IDENTIFIER.AcquireTokenPopup] = API_CODE.AcquireTokenPopup,
                _a[API_EVENT_IDENTIFIER.AcquireTokenRedirect] = API_CODE.AcquireTokenRedirect,
                _a[API_EVENT_IDENTIFIER.LoginPopup] = API_CODE.LoginPopup,
                _a[API_EVENT_IDENTIFIER.LoginRedirect] = API_CODE.LoginRedirect,
                _a[API_EVENT_IDENTIFIER.Logout] = API_CODE.Logout,
                _a);
            var ApiEvent = /** @class */ (function (_super) {
                tslib_1.__extends(ApiEvent, _super);
                function ApiEvent(correlationId, piiEnabled, apiEventIdentifier) {
                    var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("api_event"), correlationId, apiEventIdentifier) || this;
                    if (apiEventIdentifier) {
                        _this.apiCode = mapEventIdentiferToCode[apiEventIdentifier];
                        _this.apiEventIdentifier = apiEventIdentifier;
                    }
                    _this.piiEnabled = piiEnabled;
                    return _this;
                }
                Object.defineProperty(ApiEvent.prototype, "apiEventIdentifier", {
                    set: function (apiEventIdentifier) {
                        this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiTelemIdConstStrKey] = apiEventIdentifier;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "apiCode", {
                    set: function (apiCode) {
                        this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiIdConstStrKey] = apiCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "authority", {
                    set: function (uri) {
                        this.event[exports.EVENT_KEYS.AUTHORITY] = TelemetryUtils_1.scrubTenantFromUri(uri).toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "apiErrorCode", {
                    set: function (errorCode) {
                        this.event[exports.EVENT_KEYS.API_ERROR_CODE] = errorCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "tenantId", {
                    set: function (tenantId) {
                        this.event[exports.EVENT_KEYS.TENANT_ID] = this.piiEnabled && tenantId ?
                            TelemetryUtils_1.hashPersonalIdentifier(tenantId)
                            : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "accountId", {
                    set: function (accountId) {
                        this.event[exports.EVENT_KEYS.USER_ID] = this.piiEnabled && accountId ?
                            TelemetryUtils_1.hashPersonalIdentifier(accountId)
                            : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "wasSuccessful", {
                    get: function () {
                        return this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] === true;
                    },
                    set: function (wasSuccessful) {
                        this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] = wasSuccessful;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "loginHint", {
                    set: function (loginHint) {
                        this.event[exports.EVENT_KEYS.LOGIN_HINT] = this.piiEnabled && loginHint ?
                            TelemetryUtils_1.hashPersonalIdentifier(loginHint)
                            : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "authorityType", {
                    set: function (authorityType) {
                        this.event[exports.EVENT_KEYS.AUTHORITY_TYPE] = authorityType.toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApiEvent.prototype, "promptType", {
                    set: function (promptType) {
                        this.event[exports.EVENT_KEYS.PROMPT] = promptType.toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                return ApiEvent;
            }(TelemetryEvent_1.default));
            exports.default = ApiEvent;


            /***/
}),
/* 28 */
/***/ (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(29);


            /***/
}),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var UserAgentApplication_1 = __webpack_require__(16);
            exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
            exports.authResponseCallback = UserAgentApplication_1.authResponseCallback;
            exports.errorReceivedCallback = UserAgentApplication_1.errorReceivedCallback;
            exports.tokenReceivedCallback = UserAgentApplication_1.tokenReceivedCallback;
            var Logger_1 = __webpack_require__(13);
            exports.Logger = Logger_1.Logger;
            var Logger_2 = __webpack_require__(13);
            exports.LogLevel = Logger_2.LogLevel;
            var Account_1 = __webpack_require__(22);
            exports.Account = Account_1.Account;
            var Constants_1 = __webpack_require__(1);
            exports.Constants = Constants_1.Constants;
            exports.ServerHashParamKeys = Constants_1.ServerHashParamKeys;
            var Authority_1 = __webpack_require__(9);
            exports.Authority = Authority_1.Authority;
            var UserAgentApplication_2 = __webpack_require__(16);
            exports.CacheResult = UserAgentApplication_2.CacheResult;
            var Configuration_1 = __webpack_require__(24);
            exports.CacheLocation = Configuration_1.CacheLocation;
            exports.Configuration = Configuration_1.Configuration;
            var AuthenticationParameters_1 = __webpack_require__(43);
            exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
            var AuthResponse_1 = __webpack_require__(26);
            exports.AuthResponse = AuthResponse_1.AuthResponse;
            var CryptoUtils_1 = __webpack_require__(3);
            exports.CryptoUtils = CryptoUtils_1.CryptoUtils;
            var UrlUtils_1 = __webpack_require__(4);
            exports.UrlUtils = UrlUtils_1.UrlUtils;
            var WindowUtils_1 = __webpack_require__(23);
            exports.WindowUtils = WindowUtils_1.WindowUtils;
            // Errors
            var AuthError_1 = __webpack_require__(8);
            exports.AuthError = AuthError_1.AuthError;
            var ClientAuthError_1 = __webpack_require__(6);
            exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
            var ServerError_1 = __webpack_require__(14);
            exports.ServerError = ServerError_1.ServerError;
            var ClientConfigurationError_1 = __webpack_require__(5);
            exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
            var InteractionRequiredAuthError_1 = __webpack_require__(25);
            exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


            /***/
}),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var CryptoUtils_1 = __webpack_require__(3);
            var UrlUtils_1 = __webpack_require__(4);
            /**
             * @hidden
             */
            var AccessTokenKey = /** @class */ (function () {
                function AccessTokenKey(authority, clientId, scopes, uid, utid) {
                    this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
                    this.clientId = clientId;
                    this.scopes = scopes;
                    this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
                }
                return AccessTokenKey;
            }());
            exports.AccessTokenKey = AccessTokenKey;


            /***/
}),
/* 31 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             */
            var AccessTokenValue = /** @class */ (function () {
                function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
                    this.accessToken = accessToken;
                    this.idToken = idToken;
                    this.expiresIn = expiresIn;
                    this.homeAccountIdentifier = homeAccountIdentifier;
                }
                return AccessTokenValue;
            }());
            exports.AccessTokenValue = AccessTokenValue;


            /***/
}),
/* 32 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var CryptoUtils_1 = __webpack_require__(3);
            var ClientAuthError_1 = __webpack_require__(6);
            var StringUtils_1 = __webpack_require__(2);
            /**
             * @hidden
             */
            var ClientInfo = /** @class */ (function () {
                function ClientInfo(rawClientInfo, authority) {
                    if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
                        this.uid = "";
                        this.utid = "";
                        return;
                    }
                    try {
                        var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
                        var clientInfo = JSON.parse(decodedClientInfo);
                        if (clientInfo) {
                            if (clientInfo.hasOwnProperty("uid")) {
                                this.uid = authority ? ClientInfo.stripPolicyFromUid(clientInfo.uid, authority) : clientInfo.uid;
                            }
                            if (clientInfo.hasOwnProperty("utid")) {
                                this.utid = clientInfo.utid;
                            }
                        }
                    }
                    catch (e) {
                        throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
                    }
                }
                Object.defineProperty(ClientInfo.prototype, "uid", {
                    get: function () {
                        return this._uid ? this._uid : "";
                    },
                    set: function (uid) {
                        this._uid = uid;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ClientInfo.prototype, "utid", {
                    get: function () {
                        return this._utid ? this._utid : "";
                    },
                    set: function (utid) {
                        this._utid = utid;
                    },
                    enumerable: true,
                    configurable: true
                });
                ClientInfo.createClientInfoFromIdToken = function (idToken, authority) {
                    var clientInfo = {
                        uid: idToken.subject,
                        utid: ""
                    };
                    return new ClientInfo(CryptoUtils_1.CryptoUtils.base64Encode(JSON.stringify(clientInfo)), authority);
                };
                ClientInfo.stripPolicyFromUid = function (uid, authority) {
                    var uidSegments = uid.split("-");
                    // Reverse the url segments so the last one is more easily accessible
                    var urlSegments = authority.split("/").reverse();
                    var policy = "";
                    if (!StringUtils_1.StringUtils.isEmpty(urlSegments[0])) {
                        policy = urlSegments[0];
                    }
                    else if (urlSegments.length > 1) {
                        // If the original url had a trailing slash, urlSegments[0] would be "" so take the next element
                        policy = urlSegments[1];
                    }
                    if (uidSegments[uidSegments.length - 1] === policy) {
                        // If the last segment of uid matches the last segment of authority url, remove the last segment of uid
                        return uidSegments.slice(0, uidSegments.length - 1).join("-");
                    }
                    return uid;
                };
                ClientInfo.prototype.encodeClientInfo = function () {
                    var clientInfo = JSON.stringify({ uid: this.uid, utid: this.utid });
                    return CryptoUtils_1.CryptoUtils.base64Encode(clientInfo);
                };
                return ClientInfo;
            }());
            exports.ClientInfo = ClientInfo;


            /***/
}),
/* 33 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ClientAuthError_1 = __webpack_require__(6);
            var TokenUtils_1 = __webpack_require__(20);
            var StringUtils_1 = __webpack_require__(2);
            /**
             * @hidden
             */
            var IdToken = /** @class */ (function () {
                /* tslint:disable:no-string-literal */
                function IdToken(rawIdToken) {
                    if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
                        throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
                    }
                    try {
                        this.rawIdToken = rawIdToken;
                        this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
                        if (this.claims) {
                            if (this.claims.hasOwnProperty("iss")) {
                                this.issuer = this.claims["iss"];
                            }
                            if (this.claims.hasOwnProperty("oid")) {
                                this.objectId = this.claims["oid"];
                            }
                            if (this.claims.hasOwnProperty("sub")) {
                                this.subject = this.claims["sub"];
                            }
                            if (this.claims.hasOwnProperty("tid")) {
                                this.tenantId = this.claims["tid"];
                            }
                            if (this.claims.hasOwnProperty("ver")) {
                                this.version = this.claims["ver"];
                            }
                            if (this.claims.hasOwnProperty("preferred_username")) {
                                this.preferredName = this.claims["preferred_username"];
                            }
                            else if (this.claims.hasOwnProperty("upn")) {
                                this.preferredName = this.claims["upn"];
                            }
                            if (this.claims.hasOwnProperty("name")) {
                                this.name = this.claims["name"];
                            }
                            if (this.claims.hasOwnProperty("nonce")) {
                                this.nonce = this.claims["nonce"];
                            }
                            if (this.claims.hasOwnProperty("exp")) {
                                this.expiration = this.claims["exp"];
                            }
                            if (this.claims.hasOwnProperty("home_oid")) {
                                this.homeObjectId = this.claims["home_oid"];
                            }
                            if (this.claims.hasOwnProperty("sid")) {
                                this.sid = this.claims["sid"];
                            }
                            if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                                this.cloudInstance = this.claims["cloud_instance_host_name"];
                            }
                            /* tslint:enable:no-string-literal */
                        }
                    }
                    catch (e) {
                        /*
                         * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
                         * Need to add better error handling here to account for being unable to decode jwts.
                         */
                        throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
                    }
                }
                return IdToken;
            }());
            exports.IdToken = IdToken;


            /***/
}),
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var Constants_1 = __webpack_require__(1);
            var AccessTokenCacheItem_1 = __webpack_require__(35);
            var BrowserStorage_1 = __webpack_require__(36);
            var RequestUtils_1 = __webpack_require__(21);
            var StringUtils_1 = __webpack_require__(2);
            /**
             * @hidden
             */
            var AuthCache = /** @class */ (function (_super) {
                tslib_1.__extends(AuthCache, _super);
                function AuthCache(clientId, cacheLocation, storeAuthStateInCookie) {
                    var _this = _super.call(this, cacheLocation) || this;
                    _this.clientId = clientId;
                    // This is hardcoded to true for now. We may make this configurable in the future
                    _this.rollbackEnabled = true;
                    _this.migrateCacheEntries(storeAuthStateInCookie);
                    return _this;
                }
                /**
                 * Support roll back to old cache schema until the next major release: true by default now
                 * @param storeAuthStateInCookie
                 */
                AuthCache.prototype.migrateCacheEntries = function (storeAuthStateInCookie) {
                    var _this = this;
                    var idTokenKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.IDTOKEN;
                    var clientInfoKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.CLIENT_INFO;
                    var errorKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR;
                    var errorDescKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR_DESC;
                    var idTokenValue = _super.prototype.getItem.call(this, idTokenKey);
                    var clientInfoValue = _super.prototype.getItem.call(this, clientInfoKey);
                    var errorValue = _super.prototype.getItem.call(this, errorKey);
                    var errorDescValue = _super.prototype.getItem.call(this, errorDescKey);
                    var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
                    var keysToMigrate = [Constants_1.PersistentCacheKeys.IDTOKEN, Constants_1.PersistentCacheKeys.CLIENT_INFO, Constants_1.ErrorCacheKeys.ERROR, Constants_1.ErrorCacheKeys.ERROR_DESC];
                    keysToMigrate.forEach(function (cacheKey, index) { return _this.duplicateCacheEntry(cacheKey, values[index], storeAuthStateInCookie); });
                };
                /**
                 * Utility function to help with roll back keys
                 * @param newKey
                 * @param value
                 * @param storeAuthStateInCookie
                 */
                AuthCache.prototype.duplicateCacheEntry = function (newKey, value, storeAuthStateInCookie) {
                    if (value) {
                        this.setItem(newKey, value, storeAuthStateInCookie);
                    }
                };
                /**
                 * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
                 * @param key
                 * @param addInstanceId
                 */
                AuthCache.prototype.generateCacheKey = function (key, addInstanceId) {
                    try {
                        // Defined schemas do not need the key appended
                        JSON.parse(key);
                        return key;
                    }
                    catch (e) {
                        if (key.indexOf("" + Constants_1.Constants.cachePrefix) === 0 || key.indexOf(Constants_1.Constants.adalIdToken) === 0) {
                            return key;
                        }
                        return addInstanceId ? Constants_1.Constants.cachePrefix + "." + this.clientId + "." + key : Constants_1.Constants.cachePrefix + "." + key;
                    }
                };
                /**
                 * Validates that the input cache key contains the account search terms (clientId and homeAccountIdentifier) and
                 * then whether or not it contains the "scopes", depending on the token type being searched for. With matching account
                 * search terms, Access Token search tries to match the "scopes" keyword, while Id Token search expects "scopes" to not be included.
                 * @param key
                 * @param clientId
                 * @param homeAccountIdentifier
                 * @param tokenType
                 */
                AuthCache.prototype.matchKeyForType = function (key, clientId, homeAccountIdentifier, tokenType) {
                    // All valid token cache item keys are valid JSON objects, ignore keys that aren't
                    var parsedKey = StringUtils_1.StringUtils.validateAndParseJsonCacheKey(key);
                    if (!parsedKey) {
                        return null;
                    }
                    // Does the cache item match the request account
                    var accountMatches = key.match(clientId) && key.match(homeAccountIdentifier);
                    // Does the cache item match the requested token type
                    var tokenTypeMatches = false;
                    switch (tokenType) {
                        case Constants_1.ServerHashParamKeys.ACCESS_TOKEN:
                            // Cache item is an access token if scopes are included in the cache item key
                            tokenTypeMatches = !!key.match(Constants_1.Constants.scopes);
                            break;
                        case Constants_1.ServerHashParamKeys.ID_TOKEN:
                            // Cache may be an ID token if scopes are NOT included in the cache item key
                            tokenTypeMatches = !key.match(Constants_1.Constants.scopes);
                            break;
                    }
                    return (accountMatches && tokenTypeMatches) ? parsedKey : null;
                };
                /**
                 * add value to storage
                 * @param key
                 * @param value
                 * @param enableCookieStorage
                 */
                AuthCache.prototype.setItem = function (key, value, enableCookieStorage) {
                    _super.prototype.setItem.call(this, this.generateCacheKey(key, true), value, enableCookieStorage);
                    // Values stored in cookies will have rollback disabled to minimize cookie length
                    if (this.rollbackEnabled && !enableCookieStorage) {
                        _super.prototype.setItem.call(this, this.generateCacheKey(key, false), value, enableCookieStorage);
                    }
                };
                /**
                 * get one item by key from storage
                 * @param key
                 * @param enableCookieStorage
                 */
                AuthCache.prototype.getItem = function (key, enableCookieStorage) {
                    return _super.prototype.getItem.call(this, this.generateCacheKey(key, true), enableCookieStorage);
                };
                /**
                 * remove value from storage
                 * @param key
                 */
                AuthCache.prototype.removeItem = function (key) {
                    _super.prototype.removeItem.call(this, this.generateCacheKey(key, true));
                    if (this.rollbackEnabled) {
                        _super.prototype.removeItem.call(this, this.generateCacheKey(key, false));
                    }
                };
                /**
                 * Reset the cache items
                 */
                AuthCache.prototype.resetCacheItems = function () {
                    var storage = window[this.cacheLocation];
                    var key;
                    for (key in storage) {
                        // Check if key contains msal prefix; For now, we are clearing all cache items created by MSAL.js
                        if (storage.hasOwnProperty(key) && (key.indexOf(Constants_1.Constants.cachePrefix) !== -1)) {
                            _super.prototype.removeItem.call(this, key);
                            // TODO: Clear cache based on client id (clarify use cases where this is needed)
                        }
                    }
                };
                /**
                 * Reset all temporary cache items
                 */
                AuthCache.prototype.resetTempCacheItems = function (state) {
                    var _this = this;
                    var stateId = state && RequestUtils_1.RequestUtils.parseLibraryState(state).id;
                    var isTokenRenewalInProgress = this.tokenRenewalInProgress(state);
                    var storage = window[this.cacheLocation];
                    // check state and remove associated cache
                    if (stateId && !isTokenRenewalInProgress) {
                        Object.keys(storage).forEach(function (key) {
                            if (key.indexOf(stateId) !== -1) {
                                _this.removeItem(key);
                                _super.prototype.clearItemCookie.call(_this, key);
                            }
                        });
                    }
                    // delete the interaction status cache
                    this.removeItem(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS);
                    this.removeItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
                };
                /**
                 * Set cookies for IE
                 * @param cName
                 * @param cValue
                 * @param expires
                 */
                AuthCache.prototype.setItemCookie = function (cName, cValue, expires) {
                    _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, true), cValue, expires);
                    if (this.rollbackEnabled) {
                        _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, false), cValue, expires);
                    }
                };
                AuthCache.prototype.clearItemCookie = function (cName) {
                    _super.prototype.clearItemCookie.call(this, this.generateCacheKey(cName, true));
                    if (this.rollbackEnabled) {
                        _super.prototype.clearItemCookie.call(this, this.generateCacheKey(cName, false));
                    }
                };
                /**
                 * get one item by key from cookies
                 * @param cName
                 */
                AuthCache.prototype.getItemCookie = function (cName) {
                    return _super.prototype.getItemCookie.call(this, this.generateCacheKey(cName, true));
                };
                /**
                 * Get all tokens of a certain type from the cache
                 * @param clientId
                 * @param homeAccountIdentifier
                 * @param tokenType
                 */
                AuthCache.prototype.getAllTokensByType = function (clientId, homeAccountIdentifier, tokenType) {
                    var _this = this;
                    var results = Object.keys(window[this.cacheLocation]).reduce(function (tokens, key) {
                        var matchedTokenKey = _this.matchKeyForType(key, clientId, homeAccountIdentifier, tokenType);
                        if (matchedTokenKey) {
                            var value = _this.getItem(key);
                            if (value) {
                                try {
                                    var newAccessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(matchedTokenKey, JSON.parse(value));
                                    return tokens.concat([newAccessTokenCacheItem]);
                                }
                                catch (err) {
                                    // Skip cache items with non-valid JSON values
                                    return tokens;
                                }
                            }
                        }
                        return tokens;
                    }, []);
                    return results;
                };
                /**
                 * Get all access tokens in the cache
                 * @param clientId
                 * @param homeAccountIdentifier
                 */
                AuthCache.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
                    return this.getAllTokensByType(clientId, homeAccountIdentifier, Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
                };
                /**
                 * Get all id tokens in the cache in the form of AccessTokenCacheItem objects so they are
                 * in a normalized format and can make use of the existing cached access token validation logic
                 */
                AuthCache.prototype.getAllIdTokens = function (clientId, homeAccountIdentifier) {
                    return this.getAllTokensByType(clientId, homeAccountIdentifier, Constants_1.ServerHashParamKeys.ID_TOKEN);
                };
                /**
                 * Get all access and ID tokens in the cache
                 * @param clientId
                 * @param homeAccountIdentifier
                 */
                AuthCache.prototype.getAllTokens = function (clientId, homeAccountIdentifier) {
                    var accessTokens = this.getAllAccessTokens(clientId, homeAccountIdentifier);
                    var idTokens = this.getAllIdTokens(clientId, homeAccountIdentifier);
                    return accessTokens.concat(idTokens);
                };
                /**
                 * Return if the token renewal is still in progress
                 *
                 * @param stateValue
                 */
                AuthCache.prototype.tokenRenewalInProgress = function (stateValue) {
                    var renewStatus = this.getItem(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, stateValue));
                    return !!(renewStatus && renewStatus === Constants_1.Constants.inProgress);
                };
                /**
                 * Clear all cookies
                 */
                AuthCache.prototype.clearMsalCookie = function (state) {
                    var _this = this;
                    /*
                     * If state is truthy, remove values associated with that request.
                     * Otherwise, remove all MSAL cookies.
                     */
                    if (state) {
                        this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, state));
                        this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, state));
                        this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, state));
                        this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, state));
                    }
                    else {
                        var cookies = document.cookie.split(";");
                        cookies.forEach(function (cookieString) {
                            var cookieName = cookieString.trim().split("=")[0];
                            if (cookieName.indexOf(Constants_1.Constants.cachePrefix) > -1) {
                                _super.prototype.clearItemCookie.call(_this, cookieName);
                            }
                        });
                    }
                };
                /**
                 * Create acquireTokenAccountKey to cache account object
                 * @param accountId
                 * @param state
                 */
                AuthCache.generateAcquireTokenAccountKey = function (accountId, state) {
                    var stateId = RequestUtils_1.RequestUtils.parseLibraryState(state).id;
                    return "" + Constants_1.TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter + accountId + Constants_1.Constants.resourceDelimiter + stateId;
                };
                /**
                 * Create authorityKey to cache authority
                 * @param state
                 */
                AuthCache.generateAuthorityKey = function (state) {
                    return AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.AUTHORITY, state);
                };
                /**
                 * Generates the cache key for temporary cache items, using request state
                 * @param tempCacheKey Cache key prefix
                 * @param state Request state value
                 */
                AuthCache.generateTemporaryCacheKey = function (tempCacheKey, state) {
                    // Use the state id (a guid), in the interest of shorter key names, which is important for cookies.
                    var stateId = RequestUtils_1.RequestUtils.parseLibraryState(state).id;
                    return "" + tempCacheKey + Constants_1.Constants.resourceDelimiter + stateId;
                };
                return AuthCache;
            }(BrowserStorage_1.BrowserStorage));
            exports.AuthCache = AuthCache;


            /***/
}),
/* 35 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            /**
             * @hidden
             */
            var AccessTokenCacheItem = /** @class */ (function () {
                function AccessTokenCacheItem(key, value) {
                    this.key = key;
                    this.value = value;
                }
                return AccessTokenCacheItem;
            }());
            exports.AccessTokenCacheItem = AccessTokenCacheItem;


            /***/
}),
/* 36 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ClientConfigurationError_1 = __webpack_require__(5);
            var AuthError_1 = __webpack_require__(8);
            /**
             * @hidden
             */
            var BrowserStorage = /** @class */ (function () {
                function BrowserStorage(cacheLocation) {
                    if (!window) {
                        throw AuthError_1.AuthError.createNoWindowObjectError("Browser storage class could not find window object");
                    }
                    var storageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
                    if (!storageSupported) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createStorageNotSupportedError(cacheLocation);
                    }
                    this.cacheLocation = cacheLocation;
                }
                /**
                 * add value to storage
                 * @param key
                 * @param value
                 * @param enableCookieStorage
                 */
                BrowserStorage.prototype.setItem = function (key, value, enableCookieStorage) {
                    window[this.cacheLocation].setItem(key, value);
                    if (enableCookieStorage) {
                        this.setItemCookie(key, value);
                    }
                };
                /**
                 * get one item by key from storage
                 * @param key
                 * @param enableCookieStorage
                 */
                BrowserStorage.prototype.getItem = function (key, enableCookieStorage) {
                    if (enableCookieStorage && this.getItemCookie(key)) {
                        return this.getItemCookie(key);
                    }
                    return window[this.cacheLocation].getItem(key);
                };
                /**
                 * remove value from storage
                 * @param key
                 */
                BrowserStorage.prototype.removeItem = function (key) {
                    return window[this.cacheLocation].removeItem(key);
                };
                /**
                 * clear storage (remove all items from it)
                 */
                BrowserStorage.prototype.clear = function () {
                    return window[this.cacheLocation].clear();
                };
                /**
                 * add value to cookies
                 * @param cName
                 * @param cValue
                 * @param expires
                 */
                BrowserStorage.prototype.setItemCookie = function (cName, cValue, expires) {
                    var cookieStr = cName + "=" + cValue + ";path=/;";
                    if (expires) {
                        var expireTime = this.getCookieExpirationTime(expires);
                        cookieStr += "expires=" + expireTime + ";";
                    }
                    document.cookie = cookieStr;
                };
                /**
                 * get one item by key from cookies
                 * @param cName
                 */
                BrowserStorage.prototype.getItemCookie = function (cName) {
                    var name = cName + "=";
                    var ca = document.cookie.split(";");
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) === " ") {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) === 0) {
                            return c.substring(name.length, c.length);
                        }
                    }
                    return "";
                };
                /**
                 * Clear an item in the cookies by key
                 * @param cName
                 */
                BrowserStorage.prototype.clearItemCookie = function (cName) {
                    this.setItemCookie(cName, "", -1);
                };
                /**
                 * Get cookie expiration time
                 * @param cookieLifeDays
                 */
                BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
                    var today = new Date();
                    var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
                    return expr.toUTCString();
                };
                return BrowserStorage;
            }());
            exports.BrowserStorage = BrowserStorage;


            /***/
}),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var Constants_1 = __webpack_require__(1);
            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            /**
             * @hidden
             */
            var ResponseUtils = /** @class */ (function () {
                function ResponseUtils() {
                }
                ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
                    if (!originalResponse) {
                        return null;
                    }
                    else if (!idTokenObj) {
                        return originalResponse;
                    }
                    var exp = Number(idTokenObj.expiration);
                    if (exp && !originalResponse.expiresOn) {
                        originalResponse.expiresOn = new Date(exp * 1000);
                    }
                    return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
                };
                ResponseUtils.buildAuthResponse = function (idToken, authResponse, serverAuthenticationRequest, account, scopes, accountState) {
                    switch (serverAuthenticationRequest.responseType) {
                        case Constants_1.ResponseTypes.id_token:
                            authResponse = tslib_1.__assign({}, authResponse, { tokenType: Constants_1.ServerHashParamKeys.ID_TOKEN, account: account, scopes: scopes, accountState: accountState });
                            authResponse = ResponseUtils.setResponseIdToken(authResponse, idToken);
                            return (authResponse.idToken) ? authResponse : null;
                        case Constants_1.ResponseTypes.id_token_token:
                            authResponse = ResponseUtils.setResponseIdToken(authResponse, idToken);
                            return (authResponse && authResponse.accessToken && authResponse.idToken) ? authResponse : null;
                        case Constants_1.ResponseTypes.token:
                            authResponse = ResponseUtils.setResponseIdToken(authResponse, idToken);
                            return authResponse;
                        default:
                            return null;
                    }
                };
                return ResponseUtils;
            }());
            exports.ResponseUtils = ResponseUtils;


            /***/
}),
/* 38 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            /**
             * @hidden
             */
            var Authority_1 = __webpack_require__(9);
            var StringUtils_1 = __webpack_require__(2);
            var ClientConfigurationError_1 = __webpack_require__(5);
            var AuthorityFactory = /** @class */ (function () {
                function AuthorityFactory() {
                }
                AuthorityFactory.saveMetadataFromNetwork = function (authorityInstance, telemetryManager, correlationId) {
                    return tslib_1.__awaiter(this, void 0, Promise, function () {
                        var metadata;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, authorityInstance.resolveEndpointsAsync(telemetryManager, correlationId)];
                                case 1:
                                    metadata = _a.sent();
                                    this.metadataMap.set(authorityInstance.CanonicalAuthority, metadata);
                                    return [2 /*return*/, metadata];
                            }
                        });
                    });
                };
                AuthorityFactory.getMetadata = function (authorityUrl) {
                    return this.metadataMap.get(authorityUrl);
                };
                AuthorityFactory.saveMetadataFromConfig = function (authorityUrl, authorityMetadataJson) {
                    try {
                        if (authorityMetadataJson) {
                            var parsedMetadata = JSON.parse(authorityMetadataJson);
                            if (!parsedMetadata.authorization_endpoint || !parsedMetadata.end_session_endpoint || !parsedMetadata.issuer) {
                                throw ClientConfigurationError_1.ClientConfigurationError.createInvalidAuthorityMetadataError();
                            }
                            this.metadataMap.set(authorityUrl, {
                                AuthorizationEndpoint: parsedMetadata.authorization_endpoint,
                                EndSessionEndpoint: parsedMetadata.end_session_endpoint,
                                Issuer: parsedMetadata.issuer
                            });
                        }
                    }
                    catch (e) {
                        throw ClientConfigurationError_1.ClientConfigurationError.createInvalidAuthorityMetadataError();
                    }
                };
                /**
                 * Create an authority object of the correct type based on the url
                 * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
                 */
                AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority, authorityMetadata) {
                    if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
                        return null;
                    }
                    if (authorityMetadata) {
                        // todo: log statements
                        this.saveMetadataFromConfig(authorityUrl, authorityMetadata);
                    }
                    return new Authority_1.Authority(authorityUrl, validateAuthority, this.metadataMap.get(authorityUrl));
                };
                AuthorityFactory.metadataMap = new Map();
                return AuthorityFactory;
            }());
            exports.AuthorityFactory = AuthorityFactory;


            /***/
}),
/* 39 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(40));
            var Constants_1 = __webpack_require__(1);
            var ApiEvent_1 = tslib_1.__importDefault(__webpack_require__(27));
            var HttpEvent_1 = tslib_1.__importDefault(__webpack_require__(41));
            var TelemetryManager = /** @class */ (function () {
                function TelemetryManager(config, telemetryEmitter, logger) {
                    // correlation Id to list of events
                    this.completedEvents = {};
                    // event key to event
                    this.inProgressEvents = {};
                    // correlation id to map of eventname to count
                    this.eventCountByCorrelationId = {};
                    // Implement after API EVENT
                    this.onlySendFailureTelemetry = false;
                    // TODO THROW if bad options
                    this.telemetryPlatform = tslib_1.__assign({
                        sdk: Constants_1.Constants.libraryName, sdkVersion: Constants_1.libraryVersion(), networkInformation: {
                            // @ts-ignore
                            connectionSpeed: typeof navigator !== "undefined" && navigator.connection && navigator.connection.effectiveType
                        }
                    }, config.platform);
                    this.clientId = config.clientId;
                    this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
                    /*
                     * TODO, when i get to wiring this through, think about what it means if
                     * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
                     * optional?
                     */
                    this.telemetryEmitter = telemetryEmitter;
                    this.logger = logger;
                }
                TelemetryManager.getTelemetrymanagerStub = function (clientId, logger) {
                    var applicationName = "UnSetStub";
                    var applicationVersion = "0.0";
                    var telemetryEmitter = function () { };
                    var telemetryPlatform = {
                        applicationName: applicationName,
                        applicationVersion: applicationVersion
                    };
                    var telemetryManagerConfig = {
                        platform: telemetryPlatform,
                        clientId: clientId
                    };
                    return new this(telemetryManagerConfig, telemetryEmitter, logger);
                };
                TelemetryManager.prototype.startEvent = function (event) {
                    this.logger.verbose("Telemetry Event started: " + event.key);
                    if (!this.telemetryEmitter) {
                        return;
                    }
                    event.start();
                    this.inProgressEvents[event.key] = event;
                };
                TelemetryManager.prototype.stopEvent = function (event) {
                    this.logger.verbose("Telemetry Event stopped: " + event.key);
                    if (!this.telemetryEmitter || !this.inProgressEvents[event.key]) {
                        return;
                    }
                    event.stop();
                    this.incrementEventCount(event);
                    var completedEvents = this.completedEvents[event.telemetryCorrelationId];
                    this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
                    delete this.inProgressEvents[event.key];
                };
                TelemetryManager.prototype.flush = function (correlationId) {
                    var _this = this;
                    this.logger.verbose("Flushing telemetry events: " + correlationId);
                    // If there is only unfinished events should this still return them?
                    if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
                        return;
                    }
                    var orphanedEvents = this.getOrphanedEvents(correlationId);
                    orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
                    var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
                    delete this.completedEvents[correlationId];
                    var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
                    delete this.eventCountByCorrelationId[correlationId];
                    // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
                    if (!eventsToFlush || !eventsToFlush.length) {
                        return;
                    }
                    var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
                    var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
                    this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
                };
                TelemetryManager.prototype.createAndStartApiEvent = function (correlationId, apiEventIdentifier) {
                    var apiEvent = new ApiEvent_1.default(correlationId, this.logger.isPiiLoggingEnabled(), apiEventIdentifier);
                    this.startEvent(apiEvent);
                    return apiEvent;
                };
                TelemetryManager.prototype.stopAndFlushApiEvent = function (correlationId, apiEvent, wasSuccessful, errorCode) {
                    apiEvent.wasSuccessful = wasSuccessful;
                    if (errorCode) {
                        apiEvent.apiErrorCode = errorCode;
                    }
                    this.stopEvent(apiEvent);
                    this.flush(correlationId);
                };
                TelemetryManager.prototype.createAndStartHttpEvent = function (correlation, httpMethod, url, eventLabel) {
                    var httpEvent = new HttpEvent_1.default(correlation, eventLabel);
                    httpEvent.url = url;
                    httpEvent.httpMethod = httpMethod;
                    this.startEvent(httpEvent);
                    return httpEvent;
                };
                TelemetryManager.prototype.incrementEventCount = function (event) {
                    var _a;
                    /*
                     * TODO, name cache event different?
                     * if type is cache event, change name
                     */
                    var eventName = event.eventName;
                    var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
                    if (!eventCount) {
                        this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                            _a[eventName] = 1,
                            _a);
                    }
                    else {
                        eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
                    }
                };
                TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
                    var _this = this;
                    return Object.keys(this.inProgressEvents)
                        .reduce(function (memo, eventKey) {
                            if (eventKey.indexOf(correlationId) !== -1) {
                                var event = _this.inProgressEvents[eventKey];
                                delete _this.inProgressEvents[eventKey];
                                return memo.concat([event]);
                            }
                            return memo;
                        }, []);
                };
                return TelemetryManager;
            }());
            exports.default = TelemetryManager;


            /***/
}),
/* 40 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var TelemetryConstants_1 = __webpack_require__(11);
            var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(15));
            var TelemetryUtils_1 = __webpack_require__(12);
            var DefaultEvent = /** @class */ (function (_super) {
                tslib_1.__extends(DefaultEvent, _super);
                // TODO Platform Type
                function DefaultEvent(platform, correlationId, clientId, eventCount) {
                    var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId, "DefaultEvent") || this;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
                    _this.event[TelemetryUtils_1.prependEventNamePrefix("effective_connection_speed")] = platform.networkInformation && platform.networkInformation.connectionSpeed;
                    _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
                    _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
                    _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
                    return _this;
                    // / Device id?
                }
                DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
                    if (!eventCount[eventName]) {
                        return 0;
                    }
                    return eventCount[eventName];
                };
                return DefaultEvent;
            }(TelemetryEvent_1.default));
            exports.default = DefaultEvent;


            /***/
}),
/* 41 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(0);
            var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(15));
            var TelemetryUtils_1 = __webpack_require__(12);
            var ServerRequestParameters_1 = __webpack_require__(17);
            exports.EVENT_KEYS = {
                HTTP_PATH: TelemetryUtils_1.prependEventNamePrefix("http_path"),
                USER_AGENT: TelemetryUtils_1.prependEventNamePrefix("user_agent"),
                QUERY_PARAMETERS: TelemetryUtils_1.prependEventNamePrefix("query_parameters"),
                API_VERSION: TelemetryUtils_1.prependEventNamePrefix("api_version"),
                RESPONSE_CODE: TelemetryUtils_1.prependEventNamePrefix("response_code"),
                O_AUTH_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("oauth_error_code"),
                HTTP_METHOD: TelemetryUtils_1.prependEventNamePrefix("http_method"),
                REQUEST_ID_HEADER: TelemetryUtils_1.prependEventNamePrefix("request_id_header"),
                SPE_INFO: TelemetryUtils_1.prependEventNamePrefix("spe_info"),
                SERVER_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("server_error_code"),
                SERVER_SUB_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("server_sub_error_code"),
                URL: TelemetryUtils_1.prependEventNamePrefix("url")
            };
            var HttpEvent = /** @class */ (function (_super) {
                tslib_1.__extends(HttpEvent, _super);
                function HttpEvent(correlationId, eventLabel) {
                    return _super.call(this, TelemetryUtils_1.prependEventNamePrefix("http_event"), correlationId, eventLabel) || this;
                }
                Object.defineProperty(HttpEvent.prototype, "url", {
                    set: function (url) {
                        var scrubbedUri = TelemetryUtils_1.scrubTenantFromUri(url);
                        this.event[exports.EVENT_KEYS.URL] = scrubbedUri && scrubbedUri.toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "httpPath", {
                    set: function (httpPath) {
                        this.event[exports.EVENT_KEYS.HTTP_PATH] = TelemetryUtils_1.scrubTenantFromUri(httpPath).toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "userAgent", {
                    set: function (userAgent) {
                        this.event[exports.EVENT_KEYS.USER_AGENT] = userAgent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "queryParams", {
                    set: function (queryParams) {
                        this.event[exports.EVENT_KEYS.QUERY_PARAMETERS] = ServerRequestParameters_1.ServerRequestParameters.generateQueryParametersString(queryParams);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "apiVersion", {
                    set: function (apiVersion) {
                        this.event[exports.EVENT_KEYS.API_VERSION] = apiVersion.toLowerCase();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "httpResponseStatus", {
                    set: function (statusCode) {
                        this.event[exports.EVENT_KEYS.RESPONSE_CODE] = statusCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "oAuthErrorCode", {
                    set: function (errorCode) {
                        this.event[exports.EVENT_KEYS.O_AUTH_ERROR_CODE] = errorCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "httpMethod", {
                    set: function (httpMethod) {
                        this.event[exports.EVENT_KEYS.HTTP_METHOD] = httpMethod;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "requestIdHeader", {
                    set: function (requestIdHeader) {
                        this.event[exports.EVENT_KEYS.REQUEST_ID_HEADER] = requestIdHeader;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "speInfo", {
                    /**
                     * Indicates whether the request was executed on a ring serving SPE traffic.
                     * An empty string indicates this occurred on an outer ring, and the string "I"
                     * indicates the request occurred on the inner ring
                     */
                    set: function (speInfo) {
                        this.event[exports.EVENT_KEYS.SPE_INFO] = speInfo;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "serverErrorCode", {
                    set: function (errorCode) {
                        this.event[exports.EVENT_KEYS.SERVER_ERROR_CODE] = errorCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HttpEvent.prototype, "serverSubErrorCode", {
                    set: function (subErrorCode) {
                        this.event[exports.EVENT_KEYS.SERVER_SUB_ERROR_CODE] = subErrorCode;
                    },
                    enumerable: true,
                    configurable: true
                });
                return HttpEvent;
            }(TelemetryEvent_1.default));
            exports.default = HttpEvent;


            /***/
}),
/* 42 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ScopeSet_1 = __webpack_require__(7);
            var UrlUtils_1 = __webpack_require__(4);
            /**
             * @hidden
             */
            var AuthCacheUtils = /** @class */ (function () {
                function AuthCacheUtils() {
                }
                AuthCacheUtils.filterTokenCacheItemsByScope = function (tokenCacheItems, requestScopes) {
                    return tokenCacheItems.filter(function (cacheItem) {
                        var cachedScopes = cacheItem.key.scopes.split(" ");
                        var searchScopes = ScopeSet_1.ScopeSet.removeDefaultScopes(requestScopes);
                        // If requestScopes contain only default scopes search for default scopes otherwise search for everything but default scopes
                        return searchScopes.length === 0 ? ScopeSet_1.ScopeSet.containsScope(cachedScopes, requestScopes) : ScopeSet_1.ScopeSet.containsScope(cachedScopes, searchScopes);
                    });
                };
                AuthCacheUtils.filterTokenCacheItemsByAuthority = function (tokenCacheItems, authority) {
                    return tokenCacheItems.filter(function (cacheItem) { return UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === authority; });
                };
                AuthCacheUtils.filterTokenCacheItemsByDomain = function (tokenCacheItems, requestDomain) {
                    return tokenCacheItems.filter(function (cacheItem) {
                        var cacheItemDomain = UrlUtils_1.UrlUtils.GetUrlComponents(cacheItem.key.authority).HostNameAndPort;
                        return cacheItemDomain === requestDomain;
                    });
                };
                return AuthCacheUtils;
            }());
            exports.AuthCacheUtils = AuthCacheUtils;


            /***/
}),
/* 43 */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";

            /*
             * Copyright (c) Microsoft Corporation. All rights reserved.
             * Licensed under the MIT License.
             */
            Object.defineProperty(exports, "__esModule", { value: true });
            var ClientConfigurationError_1 = __webpack_require__(5);
            function validateClaimsRequest(request) {
                if (!request.claimsRequest) {
                    return;
                }
                try {
                    JSON.parse(request.claimsRequest);
                }
                catch (e) {
                    throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
                }
                // TODO: More validation will be added when the server team tells us how they have actually implemented claims
            }
            exports.validateClaimsRequest = validateClaimsRequest;


            /***/
})
/******/]);
});
//# sourceMappingURL=msal.js.map



/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(g,e){"use strict";var t=[],v=g.document,r=Object.getPrototypeOf,s=t.slice,y=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,m=n.hasOwnProperty,a=m.toString,l=a.call(Object),b={},x=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},w=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function C(e,t,n){var r,i,o=(n=n||v).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",E=function(e,t){return new E.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!x(e)&&!w(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||x(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=m.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){C(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return y.apply([],a)},guid:1,support:b}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,p,x,o,i,h,f,g,w,u,l,C,T,a,E,v,s,c,y,N="sizzle"+1*new Date,m=n.document,A=0,r=0,d=ue(),b=ue(),k=ue(),S=ue(),D=function(e,t){return e===t&&(l=!0),0},L={}.hasOwnProperty,t=[],j=t.pop,q=t.push,O=t.push,P=t.slice,H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+R+"*("+B+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",$=new RegExp(R+"+","g"),F=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),_=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp(R+"|>"),V=new RegExp(W),X=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,G=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){C()},ae=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{O.apply(t=P.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){O={apply:t.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,d=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return n;if(!r&&((e?e.ownerDocument||e:m)!==T&&C(e),e=e||T,E)){if(11!==d&&(u=Z.exec(t)))if(i=u[1]){if(9===d){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return O.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&p.getElementsByClassName&&e.getElementsByClassName)return O.apply(n,e.getElementsByClassName(i)),n}if(p.qsa&&!S[t+" "]&&(!v||!v.test(t))&&(1!==d||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===d&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=N),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+be(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return O.apply(n,f.querySelectorAll(c)),n}catch(e){S(t,!0)}finally{s===N&&e.removeAttribute("id")}}}return g(t.replace(F,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>x.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[N]=!0,e}function ce(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)x.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in p=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},C=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==T&&9===r.nodeType&&r.documentElement&&(a=(T=r).documentElement,E=!i(T),m!==T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),p.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=ce(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=J.test(T.getElementsByClassName),p.getById=ce(function(e){return a.appendChild(e).id=N,!T.getElementsByName||!T.getElementsByName(N).length}),p.getById?(x.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=p.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=p.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(p.qsa=J.test(T.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+N+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+N+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(p.matchesSelector=J.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){p.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=J.test(a.compareDocumentPosition),y=t||J.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument===m&&y(m,e)?-1:t===T||t.ownerDocument===m&&y(m,t)?1:u?H(u,e)-H(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===T?-1:t===T?1:i?-1:o?1:u?H(u,e)-H(u,t):0;if(i===o)return de(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?de(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),T},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&C(e),p.matchesSelector&&E&&!S[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){S(t,!0)}return 0<se(t,T,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==T&&C(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==T&&C(e);var n=x.attrHandle[t.toLowerCase()],r=n&&L.call(x.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:p.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!p.detectDuplicates,u=!p.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(x=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=d[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&d(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&d){p=(s=(r=(i=(o=(a=c)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if(1===a.nodeType&&++p&&a===e){i[h]=[A,s,p];break}}else if(d&&(p=s=(r=(i=(o=(a=e)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1]),!1===p)while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if((b?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++p&&(d&&((i=(o=a[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[A,p]),a===e))break;return(p-=v)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[N]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=H(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(F,"$1"));return s[N]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return X.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=pe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=he(e);function me(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,d=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[A,d];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[N]||(e[N]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===A&&r[1]===d)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Ce(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(p,h,g,v,y,e){return v&&!v[N]&&(v=Te(v)),y&&!y[N]&&(y=Te(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?c:Ce(c,s,p,n,r),d=g?y||(e?p:l||v)?[]:t:f;if(g&&g(f,d,n,r),v){i=Ce(d,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(d[u[o]]=!(f[u[o]]=a))}if(e){if(y||p){if(y){i=[],o=d.length;while(o--)(a=d[o])&&i.push(f[o]=a);y(null,d=[],i,r)}o=d.length;while(o--)(a=d[o])&&-1<(i=y?H(e,a):s[o])&&(e[i]=!(t[i]=a))}}else d=Ce(d===t?d.splice(l,d.length):d),y?y(null,t,d,r):O.apply(t,d)})}function Ee(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=xe(function(e){return e===i},a,!0),l=xe(function(e){return-1<H(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])c=[xe(we(c),t)];else{if((t=x.filter[e[s].type].apply(null,e[s].matches))[N]){for(n=++s;n<r;n++)if(x.relative[e[n].type])break;return Te(1<s&&we(c),1<s&&be(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(F,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&be(e))}c.push(t)}return we(c)}return me.prototype=x.filters=x.pseudos,x.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=b[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=x.preFilter;while(a){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),x.filter)!(r=Q[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):b(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,b,r,i=[],o=[],a=k[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[N]?i.push(a):o.push(a);(a=k(e,(v=o,m=0<(y=i).length,b=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],d=w,p=e||b&&x.find.TAG("*",i),h=A+=null==d?1:Math.random()||.1,g=p.length;for(i&&(w=t===T||t||i);l!==g&&null!=(o=p[l]);l++){if(b&&o){a=0,t||o.ownerDocument===T||(C(o),n=!E);while(s=v[a++])if(s(o,t||T,n)){r.push(o);break}i&&(A=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=j.call(r));f=Ce(f)}O.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(A=h,w=d),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=Q.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],x.relative[s=a.type])break;if((u=x.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&be(o)))return O.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},p.sortStable=N.split("").sort(D).join("")===N,p.detectDuplicates=!!l,C(),p.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(I,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(g);E.find=h,E.expr=h.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=h.uniqueSort,E.text=h.getText,E.isXMLDoc=h.isXML,E.contains=h.contains,E.escapeSelector=h.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,n,r){return x(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),D.test(r[1])&&E.isPlainObject(t))for(r in t)x(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=v.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):x(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,j=E(v);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(S(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(P[r]||E.uniqueSort(n),O.test(r)&&n.reverse()),this.pushStack(n)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){return e}function B(e){throw e}function M(e,t,n,r){var i;try{e&&x(i=e.promise)?i.call(e).done(t).fail(n):e&&x(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(I)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){x(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==T(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=x(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&x(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,x(t)?s?t.call(e,l(u,o,R,s),l(u,o,B,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,B,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==B&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),g.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,x(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,x(t)?t:R)),o[2][3].add(l(0,e,x(n)?n:B))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(M(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||x(i[t]&&i[t].then)))return o.then();while(t--)M(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){g.console&&g.console.warn&&e&&W.test(e.name)&&g.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){g.setTimeout(function(){throw e})};var $=E.Deferred();function F(){v.removeEventListener("DOMContentLoaded",F),g.removeEventListener("load",F),E.ready()}E.fn.ready=function(e){return $.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||$.resolveWith(v,[E])}}),E.ready.then=$.then,"complete"===v.readyState||"loading"!==v.readyState&&!v.documentElement.doScroll?g.setTimeout(E.ready):(v.addEventListener("DOMContentLoaded",F),g.addEventListener("load",F));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===T(n))for(s in i=!0,n)z(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,x(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(U,V)}var Q=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=E.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var G=new Y,K=new Y,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}K.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return K.hasData(e)||G.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=K.get(o),1===o.nodeType&&!G.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),ee(o,r,i[r]));G.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){K.set(this,n)}):z(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=K.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){K.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=G.get(e,t),n&&(!r||Array.isArray(n)?r=G.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:E.Callbacks("once memory").add(function(){G.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=G.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=v.documentElement,oe=function(e){return E.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===E.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};var le={};function ce(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=G.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=le[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),le[s]=u)))):"none"!==n&&(l[c]="none",G.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return ce(this,!0)},hide:function(){return ce(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?E(this).show():E(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,he={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}he.optgroup=he.option,he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td;var ye,me,be=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===T(o))E.merge(d,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=he[s]||he._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ge(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])pe.test(o.type||"")&&n.push(o)}return f}ye=v.createDocumentFragment().appendChild(v.createElement("div")),(me=v.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),ye.appendChild(me),b.checkClone=ye.cloneNode(!0).cloneNode(!0).lastChild.checked,ye.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!ye.cloneNode(!0).lastChild.defaultValue;var we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function Ae(e,t){return e===function(){try{return v.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(G.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=G.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),G.set(this,i,r),t=o(this,i),this[i](),r!==(n=G.get(this,i))||t?G.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(G.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===G.get(e,i)&&E.event.add(e,i,Ee)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ie,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(I)||[""]).length;while(l--)p=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(f=E.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=E.event.special[p]||{},c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||((d=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.hasData(e)&&G.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(p=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){f=E.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,p,v.handle),delete u[p])}else for(p in u)E.event.remove(e,p+t[l],n,r,!0);E.isEmptyObject(u)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=E.event.fix(e),u=new Array(arguments.length),l=(G.get(this,"events")||{})[s.type]||[],c=E.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=E.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:x(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&S(t,"input")&&G.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Se(this,e,Ae),!1},trigger:function(){return Se(this,e),!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){E.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Le=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(G.hasData(e)&&(o=G.access(e),a=G.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)E.event.add(t,i,l[i][n]);K.hasData(e)&&(s=K.access(e),u=E.extend({},s),K.set(t,u))}}function Re(n,r,i,o){r=y.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,d=f-1,p=r[0],h=x(p);if(h||1<f&&"string"==typeof p&&!b.checkClone&&je.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),Re(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ge(e,"script"),Pe)).length;c<f;c++)u=e,c!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,ge(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,He),c=0;c<s;c++)u=a[c],pe.test(u.type||"")&&!G.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):C(u.textContent.replace(qe,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ge(r)),r.parentNode&&(n&&oe(r)&&ve(ge(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(b.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ge(c),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&fe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(c),r=0,i=o.length;r<i;r++)Ie(o[r],a[r]);else Ie(e,c);return 0<(a=ge(c,"script")).length&&ve(a,!f&&ge(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[G.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[G.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return z(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!he[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Re(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ge(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=g),t.getComputedStyle(e)},$e=new RegExp(re.join("|"),"i");function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=E.style(e,t)),!b.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=g.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=v.createElement("div"),u=v.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===u.style.backgroundClip,E.extend(b,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var _e=["Webkit","Moz","ms"],Ue=v.createElement("div").style,Ve={};function Xe(e){var t=E.cssProps[e]||Ve[e];return t||(e in Ue?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in Ue)return e}(e)||e)}var Qe,Ye,Ge=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"};function et(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tt(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+re[a]+"Width",!0,i))):(u+=E.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=E.css(e,"border"+re[a]+"Width",!0,i):s+=E.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function nt(e,t,n){var r=We(e),i=(!b.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Fe(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!b.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+tt(e,t,n||(i?"border":"content"),o,r,a)+"px"}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ke.test(t),l=e.style;if(u||(t=Xe(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=function(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&ne.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),b.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ke.test(t)||(t=Xe(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ze&&(i=Ze[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?nt(e,u,n):ue(e,Je,function(){return nt(e,u,n)})},set:function(e,t,n){var r,i=We(e),o=!b.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?tt(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-tt(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),et(0,t,s)}}}),E.cssHooks.marginLeft=ze(b.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=et)}),E.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=g.setTimeout(e,r);t.stop=function(){g.clearTimeout(n)}})},Qe=v.createElement("input"),Ye=v.createElement("select").appendChild(v.createElement("option")),Qe.type="checkbox",b.checkOn=""!==Qe.value,b.optSelected=Ye.selected,(Qe=v.createElement("input")).value="t",Qe.type="radio",b.radioValue="t"===Qe.value;var rt,it=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return z(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?rt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!b.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),rt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=it[t]||E.find.attr;it[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=it[o],it[o]=r,r=null!=a(e,t,n)?o:null,it[o]=i),r}});var ot=/^(?:input|select|textarea|button)$/i,at=/^(?:a|area)$/i;function st(e){return(e.match(I)||[]).join(" ")}function ut(e){return e.getAttribute&&e.getAttribute("class")||""}function lt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}E.fn.extend({prop:function(e,t){return z(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ot.test(e.nodeName)||at.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),b.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).addClass(t.call(this,e,ut(this)))});if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).removeClass(t.call(this,e,ut(this)))});if(!arguments.length)return this.attr("class","");if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):x(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,ut(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=E(this),r=lt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=ut(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":G.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+st(ut(n))+" ").indexOf(t))return!0;return!1}});var ct=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=x(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(ct,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:st(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},b.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),b.focusin="onfocusin"in g;var ft=/^(?:focusinfocus|focusoutblur)$/,dt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,d=[n||v],p=m.call(e,"type")?e.type:e,h=m.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||v,3!==n.nodeType&&8!==n.nodeType&&!ft.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(h=p.split(".")).shift(),h.sort()),u=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[p]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!w(n)){for(s=c.delegateType||p,ft.test(s+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;a===(n.ownerDocument||v)&&d.push(a.defaultView||a.parentWindow||g)}i=0;while((o=d[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||p,(l=(G.get(o,"events")||{})[e.type]&&G.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&Q(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!Q(n)||u&&x(n[p])&&!w(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=p,e.isPropagationStopped()&&f.addEventListener(p,dt),n[p](),e.isPropagationStopped()&&f.removeEventListener(p,dt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),b.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=G.access(e,r);t||e.addEventListener(n,i,!0),G.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=G.access(e,r)-1;t?G.access(e,r,t):(e.removeEventListener(n,i,!0),G.remove(e,r))}}});var pt,ht=/\[\]$/,gt=/\r?\n/g,vt=/^(?:submit|button|image|reset|file)$/i,yt=/^(?:input|select|textarea|keygen)/i;function mt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||ht.test(n)?i(n,t):mt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==T(e))i(n,e);else for(t in e)mt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=x(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)mt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&yt.test(this.nodeName)&&!vt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(gt,"\r\n")}}):{name:t.name,value:n.replace(gt,"\r\n")}}).get()}}),E.fn.extend({wrapAll:function(e){var t;return this[0]&&(x(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return x(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=x(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.createHTMLDocument=((pt=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===pt.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(b.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(r)):t=v),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),x(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||ie})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return z(this,function(e,t,n){var r;if(w(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=ze(b.pixelPosition,function(e,t){if(t)return t=Fe(e,n),Me.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return z(this,function(e,t,n){var r;return w(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),x(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=S,E.isFunction=x,E.isWindow=w,E.camelCase=X,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var bt=g.jQuery,xt=g.$;return E.noConflict=function(e){return g.$===E&&(g.$=xt),e&&g.jQuery===E&&(g.jQuery=bt),E},e||(g.jQuery=g.$=E),E});
/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */






/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map


/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map




const Listendiv = document.getElementById("Listendiv");
const h1 = document.getElementsByClassName("h1")[0];
const sigbtn = document.getElementsByClassName("sigbtn")[0];
let globalList;
let globalTasksList;
const listenid = [{}];
const taskid = [{}];
let currentListid = "";
let currentTaskid = "";
let updateTasksjs = [{}];
let addtaskjs = [{}];
let addlstjs = [{}];
let updatelistjs = [{}];
let uncheckTasksjs = [{}];
let checkTasksjs = [{}];


async function addlists() {
  let elements = document.querySelectorAll(".sigbtn");
      elements.forEach(element => {
      element.parentNode.removeChild(element);
      });

  await getLists();
  let anzahllisten = globalList.value.length;
  listenid.length = 0; //cleart das arrays
  
  h1.textContent = "Listen";



  for (let i = 0; i < anzahllisten; i++) {
    const Listenbutton = document.createElement("button");
    

    
    Listenbutton.classList.add("Lstbtn");

    
    Listenbutton.setAttribute('id', i);
    Listenbutton.textContent = globalList.value[i].displayName;


      //div für actions
      var actiondiv = document.createElement("div");
      actiondiv.style = "float: right";
      actiondiv.classList.add("actiondiv");

      //divs für listenbuttons
      var lstbtndiv = document.createElement("div");
      lstbtndiv.style = "display: flex";
      lstbtndiv.classList.add("lstbtndiv");
      lstbtndiv.style= "align-items : center";
      lstbtndiv.style = "width: 80%";

      //div für beiede zusammen
      var fulllistact = document.createElement("div");
      fulllistact.style = "display : flex";


      //delete image
      var deleteimg = document.createElement('img');
      deleteimg.src = "delete.png";
      deleteimg.width = 20;
      deleteimg.height = 20;
      deleteimg.alt = "löschen";
     // deleteimg.style = 'float: left';
      deleteimg.classList.add('deleteimg');
      deleteimg.setAttribute('id', i);


      //edit image
      var editimage = document.createElement("img");
      editimage.src = "edit.png";
      editimage.width = 25;
      editimage.height = 25;
      editimage.classList.add('invert');
      editimage.alt = "editieren";
     // editimage.style ="float: left";
      editimage.classList.add("editimg");
      editimage.setAttribute("id", i);
      

      Listendiv.sytle = "display: flex"

      lstbtndiv.style.marginLeft = 56 + "px";

      lstbtndiv.appendChild(Listenbutton);
      actiondiv.appendChild(editimage);
      actiondiv.appendChild(deleteimg);
      fulllistact.appendChild(lstbtndiv);
      fulllistact.appendChild(actiondiv);
      Listendiv.appendChild(fulllistact);
      
      
      listenid.push(globalList.value[i].id);
      
      editimage.addEventListener("click", async function(){

      const parentButtonId = event.target.parentNode.id;
      currentListid = (listenid[((parseInt(event.target.id)) )]);
      
      
      //Löscht alle elemente aus der Ansicht
      let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
      elements.forEach(element => {
      element.parentNode.removeChild(element);
      });

      //erstellt die zu bearbeitende ansicht
      
      const header = document.createElement("h3");
      const headerbox = document.createElement("p");
      const savebutton = document.createElement("button");
      const backbutton = document.createElement("button");
      const savespan = document.createElement("span");
      const backspan = document.createElement("span");

      headerbox.contentEditable = "true";
      header.textContent = "Titel";
      savespan.textContent = "Speichern";
      backspan.textContent = "Zurück";

      savebutton.appendChild(savespan);
      backbutton.appendChild(backspan);

      headerbox.classList.add("header-box");
      savebutton.classList.add("addlstbtn");
      backbutton.classList.add("backbtn");

      header.classList.add("TskchgSite");
      headerbox.classList.add("TskchgSite");
      savebutton.classList.add("TskchgSite");
      backbutton.classList.add("TskchgSite");

      console.log(listenid);
      console.log(globalList);
      headerbox.textContent = globalList.value[(parseInt(event.target.id)) ].displayName;

      Listendiv.appendChild(header);
      Listendiv.appendChild(headerbox);
      Listendiv.appendChild(savebutton);
      Listendiv.appendChild(backbutton);


      savebutton.addEventListener("click", async function(){

        updatelistjs = {

          "displayName": headerbox.textContent

        }
        await editLists(currentListid,updatelistjs);
        reloadLists();
       });


       backbutton.addEventListener("click", function(){
        reloadLists();
       })
      
      
      })





    deleteimg.addEventListener("click", async function () {

        
        const parentButtonId = event.target.parentNode.id;
        currentListid = (listenid[((parseInt(event.target.id)) )]);
        console.log(event.target.id);
        console.log(currentListid);

        await deleteLists(currentListid);
        reloadLists();
        
      }
    );
        


    // Den Eventlistener an den Button anhängen
    Listenbutton.addEventListener("click", async function () {
      currentListid = (listenid[((parseInt(event.target.id)) )]);
      console.log(currentListid);
      await getTasks(); //notwenidige berechnung da arrays bei 1 anfangen und json nicht
      addTasks();
    });
  }

  //hinzufügen
  const addlst = document.createElement("button");
  const addspan = document.createElement("span");
  addspan.textContent = "neue Liste hinzufügen";
  addlst.appendChild(addspan);
  addlst.classList.add("addlstbtn");
  Listendiv.appendChild(addlst);

  addlst.addEventListener("click", async function() {
    let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
  
    const header = document.createElement("h3");
    const headerbox = document.createElement("p");
    const savebutton = document.createElement("button");
    const backbutton = document.createElement("button");
    const savespan = document.createElement("span");
    const backspan = document.createElement("span");
  
    headerbox.contentEditable = "true";
    header.textContent = "Titel";
    savespan.textContent = "Speichern";
    backspan.textContent = "Zurück";

    savebutton.appendChild(savespan);
    backbutton.appendChild(backspan);
  
    headerbox.classList.add("header-box");
    savebutton.classList.add("addlstbtn");
    backbutton.classList.add("backbtn");
    backbutton.classList.add("TskchgSite");
  
    header.classList.add("TskchgSite");
    headerbox.classList.add("TskchgSite");
    savebutton.classList.add("TskchgSite");
  
    Listendiv.appendChild(header);
    Listendiv.appendChild(headerbox);
    Listendiv.appendChild(savebutton);
    Listendiv.appendChild(backbutton);
  
    savebutton.addEventListener("click", async function() {
      addlstjs = {
        displayName: headerbox.textContent 
      };
  
      await postLists(addlstjs);
  
      let elements = document.querySelectorAll(".TskchgSite");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
  
      await addlists();
    });
  
    backbutton.addEventListener("click", async function() {
      let elements = document.querySelectorAll(".TskchgSite");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
      await addlists();
    });
  });
  
  console.log(listenid);
  console.log(listenid[1]);

};

async function addTasks() {
  let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
  let anzahltasks = globalTasksList.value.length;
  console.log(anzahltasks);

  h1.textContent = "Aufgaben";

  if (anzahltasks === 0) {                                        //falls keine Aufgaben in der Liste vorhanden sind
    const NoTaskbutton = document.createElement("button");
    NoTaskbutton.classList.add("Tskbtn");

    NoTaskbutton.textContent = "keine Aufgaben vorhanden";

    Listendiv.appendChild(NoTaskbutton);
    NoTaskbutton.addEventListener("click",function(){
          let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
          elements.forEach(element => {
            element.parentNode.removeChild(element);
          });

          const header = document.createElement("h3");
          const headerbox = document.createElement("p");
          const contents = document.createElement("h3");
          const contentbox = document.createElement("p");
          const savebutton = document.createElement("button");
          const backbutton = document.createElement("button");
          const savespan = document.createElement("span");
          const backspan = document.createElement("span");


          headerbox.contentEditable = "true";
          contentbox.contentEditable = "true";

          header.textContent = "Titel";
          contents.textContent = "Inhalt";

          savespan.textContent = "Speichern";
          savebutton.appendChild(savespan);
          backspan.textContent = "Zurück";
          backbutton.appendChild(backspan);


          headerbox.classList.add("header-box");
          contentbox.classList.add("content-box");
          savebutton.classList.add("addlstbtn");
          backbutton.classList.add("backbtn");

          header.classList.add("TskchgSite");
          headerbox.classList.add("TskchgSite");
          contents.classList.add("TskchgSite");
          contentbox.classList.add("TskchgSite");
          savebutton.classList.add("TskchgSite");
          backbutton.classList.add("TskchgSite");

          Listendiv.appendChild(header);
          Listendiv.appendChild(headerbox);
          Listendiv.appendChild(contents);
          Listendiv.appendChild(contentbox);
          Listendiv.appendChild(savebutton);
          Listendiv.appendChild(backbutton);

          savebutton.addEventListener("click", async function() {

            addtaskjs = {
            
              body: {
                content: contentbox.textContent
                ,
                contentType: "text"
              },
              title: headerbox.textContent
            };

            await postTasks(addtaskjs);

            let elements = document.getElementsByClassName("TskchgSite");
          while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
          }

          await getTasks();
          await addTasks();


        });});
  }

  taskid.length = (0);                          //reset der Taskid liste
  
  for (let i = 0; i < anzahltasks; i++) {                       //Aufzählung der tasks
    const Taskbutton = document.createElement("button");

    //Löschbutton
    var deleteimg = document.createElement('img');
    deleteimg.src = "delete.png";
    deleteimg.width = 20;
    deleteimg.height = 20;
    deleteimg.alt = "löschen";
    deleteimg.classList.add('deleteimg');
    deleteimg.setAttribute('id', i);
    //Löschbutton



    //inspect button
    var eyebutton = document.createElement("img");
    eyebutton.src = "eye.png"
    eyebutton.width = 20;
    eyebutton.height = 20;
    eyebutton.style.marginRight = 20+"px";
    eyebutton.alt = "ansehen";
    eyebutton.classList.add("inspect");
    eyebutton.setAttribute('id', i);
    //inspect button


    Taskbutton.classList.add("Tskbtn");
    Taskbutton.setAttribute('id', i);
    Taskbutton.textContent = globalTasksList.value[i].title;

    //check ob aufgabe erledigt ist oder nicht
    if (globalTasksList.value[i].status === "completed"){
      Taskbutton.classList.add("fertig");
    };
    //


    //divs für alle Elemente
    const actiondiv = document.createElement("div");
    const Taskdiv = document.createElement("div");
    const gesamtdiv = document.createElement("div");

    Taskdiv.style.display = "flex";
    Taskdiv.style.width = "80%";
    Taskdiv.style.marginLeft = 56 + "px";
    Taskdiv.style.paddingRight = 0;
    gesamtdiv.style.display = "flex";
    gesamtdiv.style.alignItems = "center";
    gesamtdiv.style.justifyContent ="flex-start";




    actiondiv.appendChild(eyebutton);
    actiondiv.appendChild(deleteimg);
    Taskdiv.appendChild(Taskbutton);
    gesamtdiv.appendChild(Taskdiv);
    gesamtdiv.appendChild(actiondiv);
    Listendiv.appendChild(gesamtdiv);
    taskid.push(i);

    deleteimg.addEventListener("click", async function () {
      
    let taskidfin = [];
    let currentTaskid = [];
    taskidfin.length = (0);
    currentTaskid.length = (0);

    taskidfin = [(taskid[((parseInt(event.target.id))  )])];
    currentTaskid = globalTasksList.value[taskidfin].id; 
      
    
      console.log(event.target.id);
      console.log(currentTaskid);
      console.log(currentListid);

      await deleteTask(currentListid,currentTaskid);

      let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      })          //Löschen der Vorherigen HTML Elemente
  
      await getTasks();
      await addTasks();
    });
  
    
      
    };



  


  // hinzufügen button
  const addbutton = document.createElement("button");
  const addspan = document.createElement("span");
  addspan.textContent = "neue Aufgabe hinzufügen";
  addbutton.classList.add("addtskbtn");
  addbutton.appendChild(addspan);
  Listendiv.appendChild(addbutton);

  //zurück button
  const backbutton = document.createElement("button");
  const backspan = document.createElement("span");
  backspan.textContent = "Zurück";
  backbutton.classList.add("backbtn")
  backbutton.appendChild(backspan);
  Listendiv.appendChild(backbutton);



  const Taskknopf = document.getElementsByClassName("Tskbtn");
  const Eyes = document.getElementsByClassName("inspect");

  for (let i = 0; i < Taskknopf.length; i++) {
    Eyes[i].addEventListener("click", async function (event) {

      chgTasks(event);
    });

    Taskknopf[i].addEventListener("click", async function(event){
      await checkTask(event);
    })
  }


 


  backbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    })          //Löschen der Vorherigen HTML Elemente

    await getLists();
    await addlists();
  });



  addbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });

    const header = document.createElement("h3");
    const headerbox = document.createElement("p");
    const contents = document.createElement("h3");
    const contentbox = document.createElement("p");
    const savebutton = document.createElement("button");
    const backbutton = document.createElement("button");
    const savespan = document.createElement("span");
    const backspan = document.createElement("span");

    headerbox.contentEditable = "true";
    contentbox.contentEditable = "true";

    header.textContent = "Titel";
    contents.textContent = "Inhalt";

    savespan.textContent = "Speichern";
    savebutton.appendChild(savespan);
    backspan.textContent = "Zurück";
    backbutton.appendChild(backspan);

    headerbox.classList.add("header-box");
    contentbox.classList.add("content-box");
    savebutton.classList.add("addlstbtn");
    backbutton.classList.add("backbtn");

    header.classList.add("TskchgSite");
    headerbox.classList.add("TskchgSite");
    contents.classList.add("TskchgSite");
    contentbox.classList.add("TskchgSite");
    savebutton.classList.add("TskchgSite");
    backbutton.classList.add("TskchgSite");

    Listendiv.appendChild(header);
    Listendiv.appendChild(headerbox);
    Listendiv.appendChild(contents);
    Listendiv.appendChild(contentbox);
    Listendiv.appendChild(savebutton);
    Listendiv.appendChild(backbutton);

    savebutton.addEventListener("click", async function() {

      addtaskjs = {
      
        body: {
          content: contentbox.textContent
          ,
          contentType: "text"
        },
        title: headerbox.textContent
      };

      await postTasks(addtaskjs);

      let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }

    await getTasks();
    await addTasks();



    });

    backbutton.addEventListener("click", async function(){
    
      let elements = document.querySelectorAll(".TskchgSite");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    })          //Löschen der Vorherigen HTML Elemente

    await getTasks();
    await addTasks();
    })
  
  
  
  });
}






async function chgTasks(event) {
  let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });

  const header = document.createElement("h3");
  const headerbox = document.createElement("p");
  const contents = document.createElement("h3");
  const contentbox = document.createElement("p");
  const savebutton = document.createElement("button");
  const backbutton = document.createElement("button");
  const savespan = document.createElement("span");
  const backspan = document.createElement("span");

  headerbox.contentEditable = "true";
  contentbox.contentEditable = "true";

  header.textContent = "Titel";
  contents.textContent = "Inhalt";

  savespan.textContent = "Speichern";
  savebutton.appendChild(savespan);
  backspan.textContent = "Zurück";
  backbutton.appendChild(backspan);

  //Inhalt der Tasks

  await getTasks();
  console.log(globalTasksList);

  let taskidfin = [];
  let currentTaskid = [];
  taskidfin.length = (0);
  currentTaskid.length = (0);

  taskidfin = [(taskid[((parseInt(event.target.id))  )])];
  currentTaskid = globalTasksList.value[taskidfin].id;               //zieht sich die Id der Task um damit den Patch zu machen
  console.log(currentTaskid);
  console.log(event.target.id)
  console.log("die taskid ist" + taskidfin);

  headerbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].title;
  contentbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].body.content;

  


  headerbox.classList.add("header-box");
  contentbox.classList.add("content-box");
  savebutton.classList.add("addlstbtn");
  backbutton.classList.add("backbtn");

  header.classList.add("TskchgSite");
  headerbox.classList.add("TskchgSite");
  contents.classList.add("TskchgSite");
  contentbox.classList.add("TskchgSite");
  savebutton.classList.add("TskchgSite");
  backbutton.classList.add("TskchgSite");

  Listendiv.appendChild(header);
  Listendiv.appendChild(headerbox);
  Listendiv.appendChild(contents);
  Listendiv.appendChild(contentbox);
  Listendiv.appendChild(savebutton);
  Listendiv.appendChild(backbutton);


  savebutton.addEventListener("click", async function () {
    console.log("gedrückt");


    updateTasksjs = {
      id: "'" + currentTaskid + "'" ,
      body: {
        content: contentbox.textContent
        ,
        contentType: "text"
      },
      title: headerbox.textContent
    };

    await updateTasks(updateTasksjs, currentTaskid);
    console.log("fertig");

    let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }

    await getTasks();
    await addTasks();

  }
  
  );


  backbutton.addEventListener("click", async function () {
    console.log("hey ich drpck doch")
    let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }
    await getTasks();
    await addTasks();
  })

}

async function reloadLists(){
  let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .TskchgSite, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
    await addlists();


}

async function checkTask(event){
  const checktaskid = (globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].id);
  if(globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].status === "notStarted"){

    checkTasksjs = {
      status : "completed"
    };
    await updateTasks(checkTasksjs, checktaskid);

    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
    
    await getTasks();
    await addTasks();
    return;

  };
  if (globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].status === "completed"){
    console.log(globalTasksList.value[(taskid[((parseInt(event.target.id)) )])]);
    uncheckTasksjs = {
      status : "notStarted"
    };
    await updateTasks( uncheckTasksjs, checktaskid);

    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
    
    await getTasks();
    await addTasks();
    return;
  };
  
  

}



 
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
    auth: {
      clientId: "0d5bffb8-1943-420d-84b9-63686cd4434a",
      authority: "https://login.microsoftonline.com/common",
      redirectUri: "moz-extension://f38d99c9-d066-43ee-adcb-463d5b0c9d38/index.html",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };  
    
  // Add here the scopes to request when obtaining an access token for MS Graph API
  // for more, visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/docs/scopes.md
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
  };
  
  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };





  // Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages",
    graphListEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists",
    
  };



  // Select DOM elements to work with
const welcomeDiv = document.getElementById("welcomeMessage");
const signInButton = document.getElementById("signIn");
const signOutButton = document.getElementById('signOut');
const cardDiv = document.getElementById("card-div");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");


function showWelcomeMessage(account) {

    // Reconfiguring DOM elements
    cardDiv.classList.remove('d-none');
    welcomeDiv.innerHTML = `Welcome ${account.name}`;
    signInButton.classList.add('d-none');
    signOutButton.classList.remove('d-none');
}

function updateUI(data, endpoint) {
  console.log('Graph API responded at: ' + new Date().toString());

  if (endpoint === graphConfig.graphMeEndpoint) {
    profileDiv.innerHTML = '';
    const title = document.createElement('p');
    title.innerHTML = "<strong>Title: </strong>" + data.jobTitle;
    const email = document.createElement('p');
    email.innerHTML = "<strong>Mail: </strong>" + data.mail;
    const phone = document.createElement('p');
    phone.innerHTML = "<strong>Phone: </strong>" + data.businessPhones[0];
    const address = document.createElement('p');
    address.innerHTML = "<strong>Location: </strong>" + data.officeLocation;
    profileDiv.appendChild(title);
    profileDiv.appendChild(email);
    profileDiv.appendChild(phone);
    profileDiv.appendChild(address);
    
  } else if (endpoint === graphConfig.graphMailEndpoint) {
      if (data.value.length < 1) {
        alert("Your mailbox is empty!")
      } else {
        const tabList = document.getElementById("list-tab");
        tabList.innerHTML = ''; // clear tabList at each readMail call
        const tabContent = document.getElementById("nav-tabContent");

        data.value.map((d, i) => {
          // Keeping it simple
          if (i < 10) {
            const listItem = document.createElement("a");
            listItem.setAttribute("class", "list-group-item list-group-item-action")
            listItem.setAttribute("id", "list" + i + "list")
            listItem.setAttribute("data-toggle", "list")
            listItem.setAttribute("href", "#list" + i)
            listItem.setAttribute("role", "tab")
            listItem.setAttribute("aria-controls", i)
            listItem.innerHTML = d.subject;
            tabList.appendChild(listItem)
    
            const contentItem = document.createElement("div");
            contentItem.setAttribute("class", "tab-pane fade")
            contentItem.setAttribute("id", "list" + i)
            contentItem.setAttribute("role", "tabpanel")
            contentItem.setAttribute("aria-labelledby", "list" + i + "list")
            contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
            tabContent.appendChild(contentItem);
          }
        });
      }
  }
}




// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
      console.log("id_token acquired at: " + new Date().toString());
      console.log(loginResponse);
      
      if (myMSALObj.getAccount()) {
        addlists();
      }
    }).catch(error => {
      console.log(error);
    });
}

function signOut() {
  myMSALObj.logout();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log(error);
      console.log("silent token acquisition fails. acquiring token using popup");
          
      // fallback to interaction when silent call fails
        return myMSALObj.acquireTokenPopup(request)
          .then(tokenResponse => {
            return tokenResponse;
          }).catch(error => {
            console.log(error);
          });
    });
}

function seeProfile() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(loginRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
      }).catch(error => {
        console.log(error);
      });
  }
}

function readMail() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(tokenRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
      }).catch(error => {
        console.log(error);
      });
  }
}

async function getLists() {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      await callMSGraph(graphConfig.graphListEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function getTasks() {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      await callMSGraphTasks(graphConfig.graphTasksEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function updateTasks(updatetaskjs, currentTaskid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks/"+currentTaskid+"/";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksUpdateEndpoint, response.accessToken, updatetaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postTasks(addtaskjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphTasksUpdateEndpoint, response.accessToken, addtaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postLists(addlstjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists";
      console.log(graphConfig.graphListsUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphListsUpdateEndpoint, response.accessToken, addlstjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function deleteLists(currentListid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid;
      console.log(graphConfig.graphListsDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphListsDeleteEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function deleteTask(currentListid,currentTaskid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid +'/tasks/'+ currentTaskid ;
      console.log(graphConfig.graphTasksDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphTasksDeleteEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function editLists(currentListid,updatelistjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksPatchEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid ;
      console.log(graphConfig.graphTasksPatchEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksPatchEndpoint, response.accessToken,updatelistjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}




// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
async function callMSGraph(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
    };
  
    console.log('request made to Graph API at: ' + new Date().toString());
    console.log(endpoint);
   await fetch(endpoint, options)
      .then(response => response.json())
      .then(ListinJson =>{globalList = ListinJson;;})
      .then(response => callback(globalList, endpoint))
      .catch(error => console.log(error))
  }
  
  ////
  // dier Teil ist für die Patch Http Requests zuständig
  
  async function callMSGraphPatch(endpoint, token, data, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
      headers.append("Content-Type", "application/json");
    
      const options = {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify(data)
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalList = ListinJson;;})
        .then(response => callback(globalList, endpoint))
        .catch(error => console.log(error))
    }
    
    // Helper function to call MS Graph API endpoint 
  // using authorization bearer token scheme
  async function callMSGraphTasks(endpoint, token, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
    
      const options = {
          method: "GET",
          headers: headers
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalTasksList = ListinJson;;})
        .then(response => callback(globalTasksList, endpoint))
        .catch(error => console.log(error))
    }
  
  
    //funktion um neue Task zu erstellen
  
    async function callMSGraphPost(endpoint, token, data, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
      headers.append("Content-Type", "application/json");
    
      const options = {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data)
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalList = ListinJson;;})
        .then(response => callback(globalList, endpoint))
        .catch(error => console.log(error))
    }
    
  
  
    async function callMSGraphPatch(endpoint, token, data, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
      headers.append("Content-Type", "application/json");
    
      const options = {
          method: "PATCH",
          headers: headers,
          body: JSON.stringify(data)
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalList = ListinJson;;})
        .then(response => callback(globalList, endpoint))
        .catch(error => console.log(error))
    }
    
    // Helper function to call MS Graph API endpoint 
  // using authorization bearer token scheme
  async function callMSGraphTasks(endpoint, token, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
    
      const options = {
          method: "GET",
          headers: headers
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalTasksList = ListinJson;;})
        .then(response => callback(globalTasksList, endpoint))
        .catch(error => console.log(error))
    }
  
  
    //funktion um Listen zu löschen
  
    async function callMSGraphDelete(endpoint, token, callback) {
      const headers = new Headers();
      const bearer = `Bearer ${token}`;
    
      headers.append("Authorization", bearer);
      headers.append("Content-Type", "application/json");
    
      const options = {
          method: "DELETE",
          headers: headers
         
      };
    
      console.log('request made to Graph API at: ' + new Date().toString());
      console.log(endpoint);
     await fetch(endpoint, options)
        .then(response => response.json())
        .then(ListinJson =>{globalList = ListinJson;;})
        .then(response => callback(globalList, endpoint))
        .catch(error => console.log(error))
    }














