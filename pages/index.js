import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  font-family: "Verdana";
  color: red;
`;

const Content = styled.div`
  font-family: "Verdana";
  color: black;
`;

const Index = () => (
  <>
    <Title>Hello World!</Title>

    <Content>
      Lore ipsum stuff.
      <Link href="/details">
        <a>Link to details</a>
      </Link>
    </Content>
  </>
);

export default Index;
