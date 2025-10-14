import { render } from '@react-email/render';
import { VerificationUserTemplate } from '@/shared/components/shared/email-templates/verification-user';

export async function renderVerificationUserTemplate(code: string): Promise<string> {
  return await render(<VerificationUserTemplate code={code} />);
}
