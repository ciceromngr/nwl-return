export interface IFeedbackRepositoryBody {
    comment: string
    type: string
    screenshot?: string
}

export interface FeedbackRepository {
    create: (data: IFeedbackRepositoryBody) => Promise<void>
}