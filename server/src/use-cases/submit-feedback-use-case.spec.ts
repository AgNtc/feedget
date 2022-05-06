import exp from "constants";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//spies = formas de conseguir sabe dentro de um teste se foi chamado um método/função

const createFeedbackSpy= jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { send: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () =>{

    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "test",
        screenshot: "data:image/png;base64,58sadasdasdasd13",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without type', async () =>{
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "test",
        screenshot: "data:image/png;base64,58sadasdasdasd13",
      })
    ).rejects.toThrow();

  });

  it('should not be able to submit feedback without comment', async () =>{
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "",
        screenshot: "data:image/png;base64,58sadasdasdasd13",
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit feedback without an invalid screenshot', async () =>{
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "bugou",
        screenshot: "123",
      })
    ).rejects.toThrow();
  });
});