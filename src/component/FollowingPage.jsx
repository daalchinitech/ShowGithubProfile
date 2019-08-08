import React from "react";
import { Header, Image, Table } from "semantic-ui-react";

export default function Following({ following }) {
  console.log(following);

  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Header as="h1">Following</Header>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {following.map(user => {
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
