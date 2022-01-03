import React from 'react'

function Bio({data}) {
  const { repos_url, name, following, followers, public_repos, bio } = data;

    return (
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
            <ul>
              <li>
                {followers}
                <strong>Followers</strong>
              </li>
              <li>
                {following}
                <strong>Following</strong>
              </li>
              <li>
                {public_repos}
                <strong>Repos</strong>
              </li>
            </ul>
            <div id="repos">
            {repos_url}
            </div>
        </div>
    )
}

export default Bio
