import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"


const makeSut = () => {

    const createFeedbackSpy = jest.fn()
    const sendMailSpy = jest.fn()
    
    const sut = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy},
        { sendMail: sendMailSpy }
    )

    return {
        sut,
        createFeedbackSpy,
        sendMailSpy
    }
}

describe('Submit feedback', () => {
    it('should be able to submit a feedback ', async () => {
        const { sut, createFeedbackSpy ,sendMailSpy } = makeSut()
        await expect(sut.execute({
            type:'BUG',
            comment: 'Comment exemplo',
            screenshot: 'data:image/png;base64,'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit feedback without type', async () => {
        const { sut } = makeSut()
        await expect(sut.execute({
            type:'',
            comment: 'Comment exemplo',
            screenshot: 'data:image/png;base64,'
        })).rejects.toThrow()
    })

    it('should not be able to submit feedback without comment', async () => {
        const { sut } = makeSut()
        await expect(sut.execute({
            type:'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,'
        })).rejects.toThrow()
    })

    it('should not be able to submit feedback with a invalid format screenshot', async () => {
        const { sut } = makeSut()
        await expect(sut.execute({
            type:'BUG',
            comment: 'Comment exemplo',
            screenshot: 'image.jpg'
        })).rejects.toThrow()
    })
})