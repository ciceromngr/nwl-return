import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbackRepository } from "../repositories/FeedbackRepository";

export interface SubmitFeedbackUseCaseRequest {
    comment: string
    type: string
    screenshot?: string
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute({ comment, type, screenshot }: SubmitFeedbackUseCaseRequest) {
        
        if(!type){
            throw new Error('Type is required')
        }

        if(!comment){
            throw new Error('comment is required')
        }

        if(screenshot && !screenshot.startsWith('data:image/png;base64,')) {
            throw new Error('Format screenshot invalid.')
        }

        await this.feedbackRepository.create({
            comment,
            type,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`
            ].join('')
        })
    }

}