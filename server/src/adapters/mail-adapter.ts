export interface SendmailData{
  subject: string;
  body: string;
}

export interface MailAdapter{
  send(data: SendmailData): Promise<void>;
}