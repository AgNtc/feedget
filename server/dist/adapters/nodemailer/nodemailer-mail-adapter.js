"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "18a9654d76e38c",
        pass: "908b0f4a1c9115",
    },
});
class NodemailerMailAdapter {
    async send({ subject, body }) {
        await transport.sendMail({
            from: "Ag Feedget <oi@feedget.com>",
            to: "Ag <aguido.rx@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
