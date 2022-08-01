const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("node-fetch");

const GithubAPIBaseURL = "https://api.github.com/";
const GithubAPIUsersURL = GithubAPIBaseURL + "users/";

try {
  const username = core.getInput("username");
  console.log(`Looking for ${username}...`);

  user = findGithubUser(username);
  user.then((u) => {
    core.info(u.username + " was found");
    core.setOutput("username", u.login);
    core.setOutput("github_id", u.id);
    core.setOutput("node_id", u.node_id);
    core.setOutput("avatar_url", u.avatar_url);
    core.setOutput("gravatar_id", u.gravatar_id);
    core.setOutput("url", u.url);
    core.setOutput("html_url", u.html_url);
    core.setOutput("followers_url", u.followers_url);
    core.setOutput("following_url", u.following_url);
    core.setOutput("gists_url", u.gists_url);
    core.setOutput("starred_url", u.starred_url);
    core.setOutput("subscriptions_url", u.subscriptions_url);
    core.setOutput("organizations_url", u.organizations_url);
    core.setOutput("repos_url", u.repos_url);
    core.setOutput("events_url", u.events_url);
    core.setOutput("received_events_url", u.received_events_url);
    core.setOutput("type", u.type);
    core.setOutput("site_admin", u.site_admin);
    core.setOutput("name", u.name);
    core.setOutput("company", u.company);
    core.setOutput("blog", u.blog);
    core.setOutput("location", u.location);
    core.setOutput("email", u.email);
    core.setOutput("hireable", u.hireable);
    core.setOutput("bio", u.bio);
    core.setOutput("twitter_username", u.twitter_username);
    core.setOutput("public_repos", u.public_repos);
    core.setOutput("public_gists", u.public_gists);
    core.setOutput("followers", u.followers);
    core.setOutput("following", u.following);
    core.setOutput("created_at", u.created_at);
    core.setOutput("updated_at", u.updated_at);
  });
} catch (error) {
  core.setFailed(error.message);
}

function findGithubUser(username) {
  return fetch(GithubAPIUsersURL + username)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
