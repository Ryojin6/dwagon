const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API);

exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);

  const From = process.env.FROM_ADDRESS;
  const To = process.env.TO_ADDRESS;
  const Subject = 'Form Submission';

  const date = new Date();
  let TextBody = `
Form Submitted at ${date}
--------------------------------
`;

  Object.keys(payload.data).forEach((key) => {
    TextBody += `
${key}: ${payload.data[key]}
`;
  });

  const message = {
    From,
    To,
    Subject,
    TextBody,
    ReplyTo: payload.data.email,
  };

  await client.sendEmail(message);

  return { statusCode: 200 };
};
