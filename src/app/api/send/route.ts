// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import ConfirmEmail from '@/components/Templates/ConfirmEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Ayodeji <ayodejiayodele350@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      text: '',
      react: ConfirmEmail({ username: 'the_bobo' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
