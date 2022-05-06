import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRespository } from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRespository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
     await prisma.feedback.create({
       data: {
         type,
         comment,
         screenshot,
       },
     });
  }
}