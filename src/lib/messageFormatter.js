import _ from 'lodash';

export default {
  buildDetailedMessages: issues => _.map(issues, buildDetailedMessage),
  buildMessages: issues => _.map(issues, buildMessage),
  buildErrorMessage: error => buildErrorMessage(error)
};

function buildDetailedMessage(issue) {
  return {
    fallback: issue.title,
    color: getColor(issue),
    author_name: issue.assignee ? issue.assignee.login : 'Unassigned',
    author_icon: issue.assignee ? issue.assignee.avatar_url : null,
    title: `${issue.number}: ${issue.title}`,
    title_link: issue.html_url,
    text: issue.body,
    fields: [
      {
        title: 'Status',
        value: issue.state
      }
    ]
  };
}

function buildMessage(issue) {
  return {
    fallback: issue.title,
    color: getColor(issue),
    author_name: issue.assignee ? issue.assignee.login : 'Unassigned',
    author_icon: issue.assignee ? issue.assignee.avatar_url : null,
    text: `<${issue.html_url}|${issue.number}> \`${issue.state}\` ${issue.title}`,
    mrkdwn_in: ['text']
  };
}

function getColor(issue) {
  switch (issue.state) {
    case 'open':
      return '#00AEAF';
    case 'closed':
      return 'good';
  }
}

function isUnknownKeyError(errorMessage) {
  return errorMessage && (errorMessage.indexOf('does not exist') !== -1 || errorMessage.indexOf('is invalid') !== -1);
}

function buildErrorMessage(error) {
  let message = 'Hmmm... something went wrong :thinking_face:',
    errorMessage = _.get(error, 'errorMessages[0]');

  if (isUnknownKeyError(errorMessage)) {
    const chunks = errorMessage.split("'");
    message = `:exclamation: \`${chunks[1]}\` cannot be found`;
  }

  return message;
}
