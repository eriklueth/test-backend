import * as Ticket from "./Ticket";

export const typeDefs = [Ticket.typeDefs];

export const resolvers = {
  ...Ticket.resolvers,
};

export const mutationResolvers = {
  ...Ticket.mutationResolvers,
};

export const queryResolvers = {
  ...Ticket.queryResolvers,
};
