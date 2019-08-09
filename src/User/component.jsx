import React from "react";
import { Card, Icon, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function UserPage({ userData, onClick }) {
  return (
    <Card>
      <Image src={`${userData.avatar_url}`} wrapped ui={false} />
      <Card.Content>
        <Header size="huge">{userData.name}</Header>
        <Header size="medium">{userData.login}</Header>

        <Card.Meta>
          <span className="date">{userData.created_at.split("T")[0]}</span>
        </Card.Meta>
        <Card.Description>{userData.bio}</Card.Description>
        <Card.Content>
          <Link
            to={
              userData.followers === 0
                ? `/${userData.login}/#`
                : `/${userData.login}/followers`
            }
            onClick={() => onClick("Followers", userData.followers)}
          >
            <Icon name="user" />
            {`Followers ${userData.followers}`} <br />
          </Link>
          <Link
            to={
              userData.following === 0
                ? `/${userData.login}/#`
                : `/${userData.login}/following`
            }
            onClick={() => onClick("Following", userData.following)}
          >
            <Icon name="user" />
            {`Following ${userData.following} `} <br />
          </Link>
          <Link
            to={
              userData.public_repos === 0
                ? `/${userData.login}/#`
                : `/${userData.login}/repository`
            }
            onClick={() => onClick("Repository", userData.public_repos)}
          >
            <Icon name="folder" />
            {`Repository ${userData.public_repos} `} <br />
          </Link>
        </Card.Content>
      </Card.Content>
      <Card.Content>
        <Icon name="user" />
        {userData.company} <br />
        <Icon name="location arrow" /> {userData.location}
      </Card.Content>
    </Card>
  );
}
