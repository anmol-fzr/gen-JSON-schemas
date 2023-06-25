"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genBreadcrumbListSchema = exports.genArticleSchema = exports.genFaqSchema = void 0;
const genArticleSchema_1 = __importDefault(require("./schemaGens/genArticleSchema"));
exports.genArticleSchema = genArticleSchema_1.default;
const genBeradcrumbListSchema_1 = __importDefault(require("./schemaGens/genBeradcrumbListSchema"));
exports.genBreadcrumbListSchema = genBeradcrumbListSchema_1.default;
const genFaqSchema_1 = __importDefault(require("./schemaGens/genFaqSchema"));
exports.genFaqSchema = genFaqSchema_1.default;
const generators = { genFaqSchema: genFaqSchema_1.default, genArticleSchema: genArticleSchema_1.default };
