hubot-github-issue-pr-fetcher
========================
> Hubot script that detects GitHub issues / PRs in messages, fetch corresponding details and display them


[![Build Status](https://travis-ci.org/AirVantage/hubot-github-issue-pr-fetcher.svg?branch=master)](https://travis-ci.org/AirVantage/hubot-github-issue-pr-fetcher)

## Usage
Requires the following environment variables to be set:

- `GITHUB_OWNER`
- `GITHUB_PROJECTS_KEYS`
    + e.g: `hubot-jira-issue-fetcher,node-tech-mail`
- `GITHUB_TOKEN`

## Features

### Light display

When invited in a channel, hubot detects GitHub issues / PRs mentions using `project#issueNumber` syntax (for instance `hubot-jira-issue-fetcher#2`), fetch corresponding details and display a minimal version of the details:

- Key (link)
- Status
- Summary

### Detailed display

When talking directly to or mentioning hubot in message channel, will result in hubot providing more information regarding the issue(s):

- Assignee (name + avatar)
- Key + Summary (link)
- Description
- Status

## Development

Written in ES7 it uses babeljs and requires to be built using `npm run build` before getting started.
