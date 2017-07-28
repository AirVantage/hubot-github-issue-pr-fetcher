import _ from 'lodash';

const ALL_GITHUB_KEY_MATCHER = /[A-Za-z0-9\-\_]*#\d+/g;

export default configuration => {
  return {
    extractIssueKeys: message => {
      let keys = message.text.match(ALL_GITHUB_KEY_MATCHER);
      keys = _.filter(keys, issueKey => _.includes(configuration.projectsKeys, issueKey.split('#')[0]));
      message.issueKeys = _.map(keys, key => {
        const splittedKey = key.split('#');
        return {
          project: splittedKey[0],
          issue: splittedKey[1]
        };
      });

      return message;
    }
  };
};
