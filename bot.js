"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telegraf_1 = require("telegraf");
var dotenv = require("dotenv");
dotenv.config();
//create new instance of the telegraf
var bot = new telegraf_1.Telegraf(process.env.TOKEN || '');
console.log(bot);
