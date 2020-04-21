# starter-code-react

This is my starter code for react applications

Git clone the project

Surge settings:

Steps local

- change domain in .travis.yml

Steps on travis-ci.org(or travis-ci.com)
add env variable to travis settings

- name: SURGE_LOGIN
- value: the mail address you used on surge

- name: SURGE_TOKEN
- value: run "surge token" from cmd and copy

Sonarcloud settings:

Steps on sonarcloud.io

- create new project
- encrypt your token with travis(you can use docker for this if you don't want to install local. tip: pull ruby image) and add the token to travis.yml in project root
- Add your new repo to be analyzed.
- disable automatic analyze by sonarcloud.

steps in travis.

Steps local

- goto "sonar-project.properties"
- sonar.projectKey=your_project_key
- sonar.organization=the_organisation_you_imported_in_sonarcloud
- sonar.pullrequest.github.repository=your_git_repo
