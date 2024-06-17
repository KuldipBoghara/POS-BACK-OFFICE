import React from 'react';
import { Form, Button, Panel, Stack, Divider, HeadingGroup } from 'rsuite';
import Brand from '../../../components/Brand';

const LogIn = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh'
      }}
    >
      <HeadingGroup>
        <Brand />
      </HeadingGroup>

      <Panel
        bordered
        style={{ background: '#fff', width: 400 }}
        header={<h3>Sign In</h3>}
      >
        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Username or email address</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>
              <span>Password</span>
              <a style={{ float: 'right' }}>Forgot password?</a>
            </Form.ControlLabel>
            <Form.Control name="name" type="password" />
          </Form.Group>
          <Form.Group>
            <Stack
              spacing={10}
              divider={<Divider vertical />}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Button appearance="primary">Sign in</Button>
            </Stack>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
};

export default LogIn;
