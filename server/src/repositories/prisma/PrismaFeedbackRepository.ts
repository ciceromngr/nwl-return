import { prisma } from "../../prisma";
import { FeedbackRepository, IFeedbackRepositoryBody } from "../FeedbackRepository";

export class PrismaFeedbackRepository implements FeedbackRepository {
    async create({ comment, type, screenshot }: IFeedbackRepositoryBody) {
        await prisma.feedback.create({
            data: {
                comment,
                type,
                screenshot
            }
        })
    };
}