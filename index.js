require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const gitData = {
    "login": "trisHa-24",
    "id": 154320949,
    "node_id": "U_kgDOCTLANQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/154320949?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/trisHa-24",
    "html_url": "https://github.com/trisHa-24",
    "followers_url": "https://api.github.com/users/trisHa-24/followers",
    "following_url": "https://api.github.com/users/trisHa-24/following{/other_user}",
    "gists_url": "https://api.github.com/users/trisHa-24/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/trisHa-24/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/trisHa-24/subscriptions",
    "organizations_url": "https://api.github.com/users/trisHa-24/orgs",
    "repos_url": "https://api.github.com/users/trisHa-24/repos",
    "events_url": "https://api.github.com/users/trisHa-24/events{/privacy}",
    "received_events_url": "https://api.github.com/users/trisHa-24/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Trisha",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-12-19T09:27:55Z",
    "updated_at": "2024-10-17T13:15:39Z"
  }

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('trishadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at abc </h1>')
})

app.get('/github', (req, res) => {
    res.json(gitData)
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
