import got from 'got';

export default function({ githubToken, githubOwner }) {
  function getIssue(repo, issueNumber) {
    return got(`https://api.github.com/repos/${githubOwner}/${repo}/issues/${issueNumber}`, {
      headers: {
        accept: 'application/vnd.github.v3+json',
        'User-Agent': 'hubot-github-issue-pr-fetcher',
        Authorization: `token ${githubToken}`
      }
    });
  }

  return { getIssue };
}
