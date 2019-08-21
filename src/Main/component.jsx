import React from 'react';
import { Input, Header, Button, Message } from 'semantic-ui-react';

export default function component({ onChange, onClick, err }) {
  return (
    <div>
      <Header as="h1">INPUT GITHUB USERNAME </Header>
      <Input
        focus
        name="username"
        placeholder="Github username"
        onChange={onChange}
      />
      <Button onClick={onClick}>SEND </Button> <br />
      <Message
        error
        hidden={err ? false : true}
        header="Github 404"
        content={`Username not found on Github`}
      />
    </div>
  );
}
