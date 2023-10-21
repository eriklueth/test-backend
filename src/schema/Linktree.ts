import gql from "graphql-tag";

//Dashpoint Linktree
export const linktreeLinkFragment = `
{
  __typename
  id
  type
  name
  url
}
`;

export const linktreeFragment = `
{
  __typename
  id
  links ${linktreeLinkFragment}
}
`;

export const typeDefs = gql`
  type Linktree
    # @query(read: false, aggregate: false)
    # @mutation(operations: [])
    # @subscription(events: [])
     {
    id: ID! @id
    links: [Link!]! @relationship(type: "LINK_IN_LINKTREE", direction: IN)
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  enum LinktreeType {
    WEBSITE
    OTHER
  }

  type Link
    # @query(read: false, aggregate: false)
    # @mutation(operations: [])
    # @subscription(events: [])
     {
    id: ID! @id
    type: LinktreeType!
    name: String!
    url: String!
    linktree: Linktree! @relationship(type: "LINK_IN_LINKTREE", direction: OUT)

    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

`;
