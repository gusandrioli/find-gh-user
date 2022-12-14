# **find-gh-user**

This Action wrapps around the Github API and finds a user based on their username.

## Example usage
```yml
uses: gusandrioli/find-gh-user@v1.0.0
with:
  username: 'torvalds'
```

## Example workflow
```yml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: Find user on Github
    steps:
      - name: Find user
        id: find-gh-user
        uses: gusandrioli/find-gh-user@v1.0.0
        with:
          username: 'torvalds'

      - name: Get user
        run: |
          echo ${{ steps.find-gh-user.outputs.company }}
          echo ${{ steps.find-gh-user.outputs.username }}
```

## Inputs

- `username`

## Outputs
- `username`
- `id`
- `node_id`
- `avatar_url`
- `gravatar_id`
- `url`
- `html_url`
- `followers_url`
- `following_url`
- `gists_url`
- `starred_url`
- `subscriptions_url`
- `organizations_url`
- `repos_url`
- `events_url`
- `received_events_url`
- `type`
- `site_admin`
- `name`
- `company`
- `blog`
- `location`
- `email`
- `hireable`
- `bio`
- `twitter_username`
- `public_repos`
- `public_gists`
- `followers`
- `following`
- `created_at`
- `updated_at`
