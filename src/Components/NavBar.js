import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header``;

const List = styled.ul``;

const Item = styled.li``;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Navbar>
    <List>
      <Item current={pathname === '/'}>
        <Slink></Slink>
      </Item>
      <Item>
        <Slink></Slink>
      </Item>
      <Item>
        <Slink></Slink>
      </Item>
      <Item>
        <Slink></Slink>
      </Item>
    </List>
  </Navbar>
));
