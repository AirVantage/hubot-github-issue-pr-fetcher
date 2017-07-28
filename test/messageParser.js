import test from 'ava';
import messageParser from '../lib/messageParser';

const configuration = {
  projectsKeys: 'hubot-jira-issue-fetcher,node6-tech-mail'.split(',')
};

const parser = messageParser(configuration);

test('parse simple key', t => {
  let message = parser.extractIssueKeys({
    text: 'Working on hubot-jira-issue-fetcher#333. And hubot-jira-issue-fetcher#4567, node6-tech-mail#3333! '
  });
  t.is(message.issueKeys.length, 3);
});

test('only returns known issues', t => {
  let message = parser.extractIssueKeys({
    text: 'Working on node6-tech-mail#3456 and TOTO-25'
  });
  t.is(message.issueKeys.length, 1);
});

test('returns empty array when no issue found', t => {
  let message = parser.extractIssueKeys({
    text: 'Working TOTO-25'
  });
  t.is(message.issueKeys.length, 0);
});
