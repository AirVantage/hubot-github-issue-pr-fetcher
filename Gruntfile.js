module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-release');

  grunt.initConfig({
    release: {
      options: {
        github: {
          repo: 'AirVantage/hubot-github-issue-pr-fetcher',
          accessTokenVar: 'GITHUB_ACCESS_TOKEN'
        }
      }
    }
  });
};
