import React from "react";
import { Header, Image, Table } from "semantic-ui-react";

function FollowingFollower({ pageTitle, users }) {
  console.log(users);

  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Header as="h1"> {pageTitle}</Header>{" "}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map(user => {
          return (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={user.avatar_url} rounded size="small" />
                  <Header.Content>{user.login}</Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default FollowingFollower;
