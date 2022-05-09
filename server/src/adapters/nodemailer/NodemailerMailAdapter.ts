import { MailAdapter, MailAdapterData } from "../MailAdapter";
import { mailTransport } from "./mailTransport";

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ body, subject }: MailAdapterData) {
        await mailTransport.sendMail({
            from: 'Equipe Feedget <empresa@empresa.com>',
            to: 'Cicero Romao <cicerotransformice@gmail.com>',
            subject,
            html: body
        })
    };
}