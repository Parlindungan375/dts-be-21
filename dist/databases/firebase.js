"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseClient = void 0;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var serviceAccountKey_1 = require("../serviceAccountKey");
var serviceAccount = serviceAccountKey_1.serviceAccountCredentials;
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: 'https://dts-be-21.firebaseio.com',
});
var db = firebase_admin_1.default.firestore();
var accountRef = db.collection('accounts');
var FirebaseClient = /** @class */ (function () {
    function FirebaseClient() {
        this.db = db;
        this.accountRef = accountRef;
    }
    FirebaseClient.prototype.addData = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, accountRef.add(account)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.accountRef.get()];
                    case 1:
                        snapshot = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3:
                        console.log(snapshot);
                        return [2 /*return*/, snapshot.docs.map(function (doc) { return doc.data(); })];
                }
            });
        });
    };
    FirebaseClient.prototype.getDataById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, accountRef.doc(id).get()];
                    case 1:
                        snapshot = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/, snapshot.data()];
                }
            });
        });
    };
    FirebaseClient.prototype.updateData = function (id, update) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, accountRef.doc(id).update(__assign({}, update))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, accountRef.doc(id).get()];
                    case 2:
                        snapshot = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/, snapshot.data()];
                }
            });
        });
    };
    FirebaseClient.prototype.deleteData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, accountRef.doc(id).delete()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FirebaseClient.prototype.getDataByState = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, accountRef.where('state', '==', state).get()];
                    case 1:
                        snapshot = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2 /*return*/, snapshot.docs.map(function (doc) { return doc.data(); })];
                }
            });
        });
    };
    FirebaseClient.prototype.getDataByAge = function (age) {
        return __awaiter(this, void 0, void 0, function () {
            var snapshot, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, accountRef.where('age', '>=', age).get()];
                    case 1:
                        snapshot = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        throw error_7;
                    case 3: return [2 /*return*/, snapshot.docs.map(function (doc) { return doc.data(); })];
                }
            });
        });
    };
    return FirebaseClient;
}());
exports.FirebaseClient = FirebaseClient;
