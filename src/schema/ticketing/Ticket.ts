import { GraphQLError } from "graphql";
import gql from "graphql-tag";
import { Context } from "../../types";
import { ogm } from "../index";
var QRCode = require("qrcode");

export const typeDefs = gql`
  type Ticket
    # @query(read: false, aggregate: false)
    # @mutation(operations: [])
    # @subscription(events: []) 
    {
    id: ID! @id
    # The barcode of the ticket --> QR Generated from it
    barcode: ID! @id

    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  extend schema
      @query(read: false, aggregate: false)
      @mutation(operations: [])

  type Query {
    findTicket(barcode: ID!, eventID: ID!): Ticket!
  }
  type Mutation {
    createTicket(barcode: ID!, eventID: ID!): Ticket!
  }
`;

export const resolvers = {};

export const queryResolvers = {
  findTicket,
};

export const mutationResolvers = {
  createTicket,
};

export interface FindTicketsArgs {
  barcode: string;
  eventID: string;
}

export async function findTicket(
  _root: any,
  args: FindTicketsArgs,
  context: Context
) {
  return await ogm
    .model("Ticket")
    .find({
      where: {
        barcode: args.barcode,
      },
    })
    .then((resp: any) => {
      console.log(resp);
      return resp;
    })
    .catch(async (e: any) => console.log(e));
}

export async function createTicket(
  _root: any,
  args: FindTicketsArgs,
  context: Context
) {
  return null;
}
