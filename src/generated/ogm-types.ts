import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  findTicket: Ticket;
  linktrees: Array<Linktree>;
  linktreesConnection: LinktreesConnection;
  linktreesAggregate: LinktreeAggregateSelection;
  links: Array<Link>;
  linksConnection: LinksConnection;
  linksAggregate: LinkAggregateSelection;
  tickets: Array<Ticket>;
  ticketsConnection: TicketsConnection;
  ticketsAggregate: TicketAggregateSelection;
};

export type QueryFindTicketArgs = {
  barcode: Scalars["ID"]["input"];
  eventID: Scalars["ID"]["input"];
};

export type QueryLinktreesArgs = {
  where?: InputMaybe<LinktreeWhere>;
  options?: InputMaybe<LinktreeOptions>;
};

export type QueryLinktreesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<LinktreeWhere>;
  sort?: InputMaybe<Array<InputMaybe<LinktreeSort>>>;
};

export type QueryLinktreesAggregateArgs = {
  where?: InputMaybe<LinktreeWhere>;
};

export type QueryLinksArgs = {
  where?: InputMaybe<LinkWhere>;
  options?: InputMaybe<LinkOptions>;
};

export type QueryLinksConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<LinkWhere>;
  sort?: InputMaybe<Array<InputMaybe<LinkSort>>>;
};

export type QueryLinksAggregateArgs = {
  where?: InputMaybe<LinkWhere>;
};

export type QueryTicketsArgs = {
  where?: InputMaybe<TicketWhere>;
  options?: InputMaybe<TicketOptions>;
};

export type QueryTicketsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<TicketWhere>;
  sort?: InputMaybe<Array<InputMaybe<TicketSort>>>;
};

export type QueryTicketsAggregateArgs = {
  where?: InputMaybe<TicketWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createTicket: Ticket;
  createLinktrees: CreateLinktreesMutationResponse;
  deleteLinktrees: DeleteInfo;
  updateLinktrees: UpdateLinktreesMutationResponse;
  createLinks: CreateLinksMutationResponse;
  deleteLinks: DeleteInfo;
  updateLinks: UpdateLinksMutationResponse;
  createTickets: CreateTicketsMutationResponse;
  deleteTickets: DeleteInfo;
  updateTickets: UpdateTicketsMutationResponse;
};

export type MutationCreateTicketArgs = {
  barcode: Scalars["ID"]["input"];
  eventID: Scalars["ID"]["input"];
};

export type MutationCreateLinktreesArgs = {
  input: Array<LinktreeCreateInput>;
};

export type MutationDeleteLinktreesArgs = {
  where?: InputMaybe<LinktreeWhere>;
  delete?: InputMaybe<LinktreeDeleteInput>;
};

export type MutationUpdateLinktreesArgs = {
  where?: InputMaybe<LinktreeWhere>;
  update?: InputMaybe<LinktreeUpdateInput>;
  connect?: InputMaybe<LinktreeConnectInput>;
  disconnect?: InputMaybe<LinktreeDisconnectInput>;
  create?: InputMaybe<LinktreeRelationInput>;
  delete?: InputMaybe<LinktreeDeleteInput>;
};

export type MutationCreateLinksArgs = {
  input: Array<LinkCreateInput>;
};

export type MutationDeleteLinksArgs = {
  where?: InputMaybe<LinkWhere>;
  delete?: InputMaybe<LinkDeleteInput>;
};

export type MutationUpdateLinksArgs = {
  where?: InputMaybe<LinkWhere>;
  update?: InputMaybe<LinkUpdateInput>;
  connect?: InputMaybe<LinkConnectInput>;
  disconnect?: InputMaybe<LinkDisconnectInput>;
  create?: InputMaybe<LinkRelationInput>;
  delete?: InputMaybe<LinkDeleteInput>;
};

export type MutationCreateTicketsArgs = {
  input: Array<TicketCreateInput>;
};

export type MutationDeleteTicketsArgs = {
  where?: InputMaybe<TicketWhere>;
};

export type MutationUpdateTicketsArgs = {
  where?: InputMaybe<TicketWhere>;
  update?: InputMaybe<TicketUpdateInput>;
};

export type Subscription = {
  __typename?: "Subscription";
  linktreeCreated: LinktreeCreatedEvent;
  linktreeUpdated: LinktreeUpdatedEvent;
  linktreeDeleted: LinktreeDeletedEvent;
  linktreeRelationshipCreated: LinktreeRelationshipCreatedEvent;
  linktreeRelationshipDeleted: LinktreeRelationshipDeletedEvent;
  linkCreated: LinkCreatedEvent;
  linkUpdated: LinkUpdatedEvent;
  linkDeleted: LinkDeletedEvent;
  linkRelationshipCreated: LinkRelationshipCreatedEvent;
  linkRelationshipDeleted: LinkRelationshipDeletedEvent;
  ticketCreated: TicketCreatedEvent;
  ticketUpdated: TicketUpdatedEvent;
  ticketDeleted: TicketDeletedEvent;
};

export type SubscriptionLinktreeCreatedArgs = {
  where?: InputMaybe<LinktreeSubscriptionWhere>;
};

export type SubscriptionLinktreeUpdatedArgs = {
  where?: InputMaybe<LinktreeSubscriptionWhere>;
};

export type SubscriptionLinktreeDeletedArgs = {
  where?: InputMaybe<LinktreeSubscriptionWhere>;
};

export type SubscriptionLinktreeRelationshipCreatedArgs = {
  where?: InputMaybe<LinktreeRelationshipCreatedSubscriptionWhere>;
};

export type SubscriptionLinktreeRelationshipDeletedArgs = {
  where?: InputMaybe<LinktreeRelationshipDeletedSubscriptionWhere>;
};

export type SubscriptionLinkCreatedArgs = {
  where?: InputMaybe<LinkSubscriptionWhere>;
};

export type SubscriptionLinkUpdatedArgs = {
  where?: InputMaybe<LinkSubscriptionWhere>;
};

export type SubscriptionLinkDeletedArgs = {
  where?: InputMaybe<LinkSubscriptionWhere>;
};

export type SubscriptionLinkRelationshipCreatedArgs = {
  where?: InputMaybe<LinkRelationshipCreatedSubscriptionWhere>;
};

export type SubscriptionLinkRelationshipDeletedArgs = {
  where?: InputMaybe<LinkRelationshipDeletedSubscriptionWhere>;
};

export type SubscriptionTicketCreatedArgs = {
  where?: InputMaybe<TicketSubscriptionWhere>;
};

export type SubscriptionTicketUpdatedArgs = {
  where?: InputMaybe<TicketSubscriptionWhere>;
};

export type SubscriptionTicketDeletedArgs = {
  where?: InputMaybe<TicketSubscriptionWhere>;
};

export enum EventType {
  Create = "CREATE",
  Delete = "DELETE",
  Update = "UPDATE",
  CreateRelationship = "CREATE_RELATIONSHIP",
  DeleteRelationship = "DELETE_RELATIONSHIP",
}

export enum LinktreeType {
  Website = "WEBSITE",
  Facebook = "FACEBOOK",
  Instagram = "INSTAGRAM",
  Linkedin = "LINKEDIN",
  Spotify = "SPOTIFY",
  Soundcloud = "SOUNDCLOUD",
  Youtube = "YOUTUBE",
  Twitch = "TWITCH",
  Twitter = "TWITTER",
  Shopify = "SHOPIFY",
  Discord = "DISCORD",
  Reddit = "REDDIT",
  Store = "STORE",
  Other = "OTHER",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateLinksMutationResponse = {
  __typename?: "CreateLinksMutationResponse";
  info: CreateInfo;
  links: Array<Link>;
};

export type CreateLinktreesMutationResponse = {
  __typename?: "CreateLinktreesMutationResponse";
  info: CreateInfo;
  linktrees: Array<Linktree>;
};

export type CreateTicketsMutationResponse = {
  __typename?: "CreateTicketsMutationResponse";
  info: CreateInfo;
  tickets: Array<Ticket>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"]["output"];
  longest: Scalars["ID"]["output"];
};

export type Link = {
  __typename?: "Link";
  id: Scalars["ID"]["output"];
  type: LinktreeType;
  name: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  linktreeAggregate?: Maybe<LinkLinktreeLinktreeAggregationSelection>;
  linktree: Linktree;
  linktreeConnection: LinkLinktreeConnection;
};

export type LinkLinktreeAggregateArgs = {
  where?: InputMaybe<LinktreeWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LinkLinktreeArgs = {
  where?: InputMaybe<LinktreeWhere>;
  options?: InputMaybe<LinktreeOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LinkLinktreeConnectionArgs = {
  where?: InputMaybe<LinkLinktreeConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LinkLinktreeConnectionSort>>;
};

export type LinkAggregateSelection = {
  __typename?: "LinkAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type LinkConnectedRelationships = {
  __typename?: "LinkConnectedRelationships";
  linktree?: Maybe<LinkLinktreeConnectedRelationship>;
};

export type LinkCreatedEvent = {
  __typename?: "LinkCreatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  createdLink: LinkEventPayload;
};

export type LinkDeletedEvent = {
  __typename?: "LinkDeletedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  deletedLink: LinkEventPayload;
};

export type LinkEdge = {
  __typename?: "LinkEdge";
  cursor: Scalars["String"]["output"];
  node: Link;
};

export type LinkEventPayload = {
  __typename?: "LinkEventPayload";
  id: Scalars["ID"]["output"];
  type: LinktreeType;
  name: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LinkLinktreeConnectedRelationship = {
  __typename?: "LinkLinktreeConnectedRelationship";
  node: LinktreeEventPayload;
};

export type LinkLinktreeConnection = {
  __typename?: "LinkLinktreeConnection";
  edges: Array<LinkLinktreeRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LinkLinktreeLinktreeAggregationSelection = {
  __typename?: "LinkLinktreeLinktreeAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LinkLinktreeLinktreeNodeAggregateSelection>;
};

export type LinkLinktreeLinktreeNodeAggregateSelection = {
  __typename?: "LinkLinktreeLinktreeNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type LinkLinktreeRelationship = {
  __typename?: "LinkLinktreeRelationship";
  cursor: Scalars["String"]["output"];
  node: Linktree;
};

export type LinkRelationshipCreatedEvent = {
  __typename?: "LinkRelationshipCreatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  link: LinkEventPayload;
  relationshipFieldName: Scalars["String"]["output"];
  createdRelationship: LinkConnectedRelationships;
};

export type LinkRelationshipDeletedEvent = {
  __typename?: "LinkRelationshipDeletedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  link: LinkEventPayload;
  relationshipFieldName: Scalars["String"]["output"];
  deletedRelationship: LinkConnectedRelationships;
};

export type LinksConnection = {
  __typename?: "LinksConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<LinkEdge>;
};

export type Linktree = {
  __typename?: "Linktree";
  id: Scalars["ID"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  linksAggregate?: Maybe<LinktreeLinkLinksAggregationSelection>;
  links: Array<Link>;
  linksConnection: LinktreeLinksConnection;
};

export type LinktreeLinksAggregateArgs = {
  where?: InputMaybe<LinkWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LinktreeLinksArgs = {
  where?: InputMaybe<LinkWhere>;
  options?: InputMaybe<LinkOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type LinktreeLinksConnectionArgs = {
  where?: InputMaybe<LinktreeLinksConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<LinktreeLinksConnectionSort>>;
};

export type LinktreeAggregateSelection = {
  __typename?: "LinktreeAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type LinktreeConnectedRelationships = {
  __typename?: "LinktreeConnectedRelationships";
  links?: Maybe<LinktreeLinksConnectedRelationship>;
};

export type LinktreeCreatedEvent = {
  __typename?: "LinktreeCreatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  createdLinktree: LinktreeEventPayload;
};

export type LinktreeDeletedEvent = {
  __typename?: "LinktreeDeletedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  deletedLinktree: LinktreeEventPayload;
};

export type LinktreeEdge = {
  __typename?: "LinktreeEdge";
  cursor: Scalars["String"]["output"];
  node: Linktree;
};

export type LinktreeEventPayload = {
  __typename?: "LinktreeEventPayload";
  id: Scalars["ID"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LinktreeLinkLinksAggregationSelection = {
  __typename?: "LinktreeLinkLinksAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LinktreeLinkLinksNodeAggregateSelection>;
};

export type LinktreeLinkLinksNodeAggregateSelection = {
  __typename?: "LinktreeLinkLinksNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  url: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type LinktreeLinksConnectedRelationship = {
  __typename?: "LinktreeLinksConnectedRelationship";
  node: LinkEventPayload;
};

export type LinktreeLinksConnection = {
  __typename?: "LinktreeLinksConnection";
  edges: Array<LinktreeLinksRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type LinktreeLinksRelationship = {
  __typename?: "LinktreeLinksRelationship";
  cursor: Scalars["String"]["output"];
  node: Link;
};

export type LinktreeRelationshipCreatedEvent = {
  __typename?: "LinktreeRelationshipCreatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  linktree: LinktreeEventPayload;
  relationshipFieldName: Scalars["String"]["output"];
  createdRelationship: LinktreeConnectedRelationships;
};

export type LinktreeRelationshipDeletedEvent = {
  __typename?: "LinktreeRelationshipDeletedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  linktree: LinktreeEventPayload;
  relationshipFieldName: Scalars["String"]["output"];
  deletedRelationship: LinktreeConnectedRelationships;
};

export type LinktreesConnection = {
  __typename?: "LinktreesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<LinktreeEdge>;
};

export type LinktreeUpdatedEvent = {
  __typename?: "LinktreeUpdatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  previousState: LinktreeEventPayload;
  updatedLinktree: LinktreeEventPayload;
};

export type LinkUpdatedEvent = {
  __typename?: "LinkUpdatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  previousState: LinkEventPayload;
  updatedLink: LinkEventPayload;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"]["output"];
  longest: Scalars["String"]["output"];
};

export type Ticket = {
  __typename?: "Ticket";
  id: Scalars["ID"]["output"];
  barcode: Scalars["ID"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TicketAggregateSelection = {
  __typename?: "TicketAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  barcode: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TicketCreatedEvent = {
  __typename?: "TicketCreatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  createdTicket: TicketEventPayload;
};

export type TicketDeletedEvent = {
  __typename?: "TicketDeletedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  deletedTicket: TicketEventPayload;
};

export type TicketEdge = {
  __typename?: "TicketEdge";
  cursor: Scalars["String"]["output"];
  node: Ticket;
};

export type TicketEventPayload = {
  __typename?: "TicketEventPayload";
  id: Scalars["ID"]["output"];
  barcode: Scalars["ID"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TicketsConnection = {
  __typename?: "TicketsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<TicketEdge>;
};

export type TicketUpdatedEvent = {
  __typename?: "TicketUpdatedEvent";
  event: EventType;
  timestamp: Scalars["Float"]["output"];
  previousState: TicketEventPayload;
  updatedTicket: TicketEventPayload;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateLinksMutationResponse = {
  __typename?: "UpdateLinksMutationResponse";
  info: UpdateInfo;
  links: Array<Link>;
};

export type UpdateLinktreesMutationResponse = {
  __typename?: "UpdateLinktreesMutationResponse";
  info: UpdateInfo;
  linktrees: Array<Linktree>;
};

export type UpdateTicketsMutationResponse = {
  __typename?: "UpdateTicketsMutationResponse";
  info: UpdateInfo;
  tickets: Array<Ticket>;
};

export type LinkConnectInput = {
  linktree?: InputMaybe<LinkLinktreeConnectFieldInput>;
};

export type LinkConnectWhere = {
  node: LinkWhere;
};

export type LinkCreateInput = {
  type: LinktreeType;
  name: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
  linktree?: InputMaybe<LinkLinktreeFieldInput>;
};

export type LinkDeleteInput = {
  linktree?: InputMaybe<LinkLinktreeDeleteFieldInput>;
};

export type LinkDisconnectInput = {
  linktree?: InputMaybe<LinkLinktreeDisconnectFieldInput>;
};

export type LinkLinktreeAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LinkLinktreeAggregateInput>>;
  OR?: InputMaybe<Array<LinkLinktreeAggregateInput>>;
  NOT?: InputMaybe<LinkLinktreeAggregateInput>;
  node?: InputMaybe<LinkLinktreeNodeAggregationWhereInput>;
};

export type LinkLinktreeConnectFieldInput = {
  where?: InputMaybe<LinktreeConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<LinktreeConnectInput>;
};

export type LinkLinktreeConnectionSort = {
  node?: InputMaybe<LinktreeSort>;
};

export type LinkLinktreeConnectionWhere = {
  OR?: InputMaybe<Array<LinkLinktreeConnectionWhere>>;
  AND?: InputMaybe<Array<LinkLinktreeConnectionWhere>>;
  NOT?: InputMaybe<LinkLinktreeConnectionWhere>;
  node?: InputMaybe<LinktreeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LinktreeWhere>;
};

export type LinkLinktreeCreateFieldInput = {
  node: LinktreeCreateInput;
};

export type LinkLinktreeDeleteFieldInput = {
  where?: InputMaybe<LinkLinktreeConnectionWhere>;
  delete?: InputMaybe<LinktreeDeleteInput>;
};

export type LinkLinktreeDisconnectFieldInput = {
  where?: InputMaybe<LinkLinktreeConnectionWhere>;
  disconnect?: InputMaybe<LinktreeDisconnectInput>;
};

export type LinkLinktreeFieldInput = {
  connect?: InputMaybe<LinkLinktreeConnectFieldInput>;
  create?: InputMaybe<LinkLinktreeCreateFieldInput>;
};

export type LinkLinktreeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LinkLinktreeNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LinkLinktreeNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LinkLinktreeNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type LinkLinktreeRelationshipSubscriptionWhere = {
  node?: InputMaybe<LinktreeSubscriptionWhere>;
};

export type LinkLinktreeUpdateConnectionInput = {
  node?: InputMaybe<LinktreeUpdateInput>;
};

export type LinkLinktreeUpdateFieldInput = {
  where?: InputMaybe<LinkLinktreeConnectionWhere>;
  connect?: InputMaybe<LinkLinktreeConnectFieldInput>;
  disconnect?: InputMaybe<LinkLinktreeDisconnectFieldInput>;
  create?: InputMaybe<LinkLinktreeCreateFieldInput>;
  update?: InputMaybe<LinkLinktreeUpdateConnectionInput>;
  delete?: InputMaybe<LinkLinktreeDeleteFieldInput>;
};

export type LinkOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more LinkSort objects to sort Links by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LinkSort>>;
};

export type LinkRelationInput = {
  linktree?: InputMaybe<LinkLinktreeCreateFieldInput>;
};

export type LinkRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<LinkRelationshipCreatedSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinkRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<LinkRelationshipCreatedSubscriptionWhere>;
  link?: InputMaybe<LinkSubscriptionWhere>;
  createdRelationship?: InputMaybe<LinkRelationshipsSubscriptionWhere>;
};

export type LinkRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<LinkRelationshipDeletedSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinkRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<LinkRelationshipDeletedSubscriptionWhere>;
  link?: InputMaybe<LinkSubscriptionWhere>;
  deletedRelationship?: InputMaybe<LinkRelationshipsSubscriptionWhere>;
};

export type LinkRelationshipsSubscriptionWhere = {
  linktree?: InputMaybe<LinkLinktreeRelationshipSubscriptionWhere>;
};

/** Fields to sort Links by. The order in which sorts are applied is not guaranteed when specifying many fields in one LinkSort object. */
export type LinkSort = {
  id?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type LinkSubscriptionWhere = {
  AND?: InputMaybe<Array<LinkSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinkSubscriptionWhere>>;
  NOT?: InputMaybe<LinkSubscriptionWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  type?: InputMaybe<LinktreeType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<LinktreeType>;
  type_IN?: InputMaybe<Array<InputMaybe<LinktreeType>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<InputMaybe<LinktreeType>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]["input"]>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export type LinktreeConnectInput = {
  links?: InputMaybe<Array<LinktreeLinksConnectFieldInput>>;
};

export type LinktreeConnectWhere = {
  node: LinktreeWhere;
};

export type LinktreeCreateInput = {
  links?: InputMaybe<LinktreeLinksFieldInput>;
};

export type LinktreeDeleteInput = {
  links?: InputMaybe<Array<LinktreeLinksDeleteFieldInput>>;
};

export type LinktreeDisconnectInput = {
  links?: InputMaybe<Array<LinktreeLinksDisconnectFieldInput>>;
};

export type LinktreeLinksAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<LinktreeLinksAggregateInput>>;
  OR?: InputMaybe<Array<LinktreeLinksAggregateInput>>;
  NOT?: InputMaybe<LinktreeLinksAggregateInput>;
  node?: InputMaybe<LinktreeLinksNodeAggregationWhereInput>;
};

export type LinktreeLinksConnectFieldInput = {
  where?: InputMaybe<LinkConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<LinkConnectInput>>;
};

export type LinktreeLinksConnectionSort = {
  node?: InputMaybe<LinkSort>;
};

export type LinktreeLinksConnectionWhere = {
  OR?: InputMaybe<Array<LinktreeLinksConnectionWhere>>;
  AND?: InputMaybe<Array<LinktreeLinksConnectionWhere>>;
  NOT?: InputMaybe<LinktreeLinksConnectionWhere>;
  node?: InputMaybe<LinkWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LinkWhere>;
};

export type LinktreeLinksCreateFieldInput = {
  node: LinkCreateInput;
};

export type LinktreeLinksDeleteFieldInput = {
  where?: InputMaybe<LinktreeLinksConnectionWhere>;
  delete?: InputMaybe<LinkDeleteInput>;
};

export type LinktreeLinksDisconnectFieldInput = {
  where?: InputMaybe<LinktreeLinksConnectionWhere>;
  disconnect?: InputMaybe<LinkDisconnectInput>;
};

export type LinktreeLinksFieldInput = {
  connect?: InputMaybe<Array<LinktreeLinksConnectFieldInput>>;
  create?: InputMaybe<Array<LinktreeLinksCreateFieldInput>>;
};

export type LinktreeLinksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LinktreeLinksNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<LinktreeLinksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LinktreeLinksNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  url_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  url_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  url_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  url_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type LinktreeLinksRelationshipSubscriptionWhere = {
  node?: InputMaybe<LinkSubscriptionWhere>;
};

export type LinktreeLinksUpdateConnectionInput = {
  node?: InputMaybe<LinkUpdateInput>;
};

export type LinktreeLinksUpdateFieldInput = {
  where?: InputMaybe<LinktreeLinksConnectionWhere>;
  connect?: InputMaybe<Array<LinktreeLinksConnectFieldInput>>;
  disconnect?: InputMaybe<Array<LinktreeLinksDisconnectFieldInput>>;
  create?: InputMaybe<Array<LinktreeLinksCreateFieldInput>>;
  update?: InputMaybe<LinktreeLinksUpdateConnectionInput>;
  delete?: InputMaybe<Array<LinktreeLinksDeleteFieldInput>>;
};

export type LinktreeOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more LinktreeSort objects to sort Linktrees by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LinktreeSort>>;
};

export type LinktreeRelationInput = {
  links?: InputMaybe<Array<LinktreeLinksCreateFieldInput>>;
};

export type LinktreeRelationshipCreatedSubscriptionWhere = {
  AND?: InputMaybe<Array<LinktreeRelationshipCreatedSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinktreeRelationshipCreatedSubscriptionWhere>>;
  NOT?: InputMaybe<LinktreeRelationshipCreatedSubscriptionWhere>;
  linktree?: InputMaybe<LinktreeSubscriptionWhere>;
  createdRelationship?: InputMaybe<LinktreeRelationshipsSubscriptionWhere>;
};

export type LinktreeRelationshipDeletedSubscriptionWhere = {
  AND?: InputMaybe<Array<LinktreeRelationshipDeletedSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinktreeRelationshipDeletedSubscriptionWhere>>;
  NOT?: InputMaybe<LinktreeRelationshipDeletedSubscriptionWhere>;
  linktree?: InputMaybe<LinktreeSubscriptionWhere>;
  deletedRelationship?: InputMaybe<LinktreeRelationshipsSubscriptionWhere>;
};

export type LinktreeRelationshipsSubscriptionWhere = {
  links?: InputMaybe<LinktreeLinksRelationshipSubscriptionWhere>;
};

/** Fields to sort Linktrees by. The order in which sorts are applied is not guaranteed when specifying many fields in one LinktreeSort object. */
export type LinktreeSort = {
  id?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type LinktreeSubscriptionWhere = {
  AND?: InputMaybe<Array<LinktreeSubscriptionWhere>>;
  OR?: InputMaybe<Array<LinktreeSubscriptionWhere>>;
  NOT?: InputMaybe<LinktreeSubscriptionWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export type LinktreeUpdateInput = {
  links?: InputMaybe<Array<LinktreeLinksUpdateFieldInput>>;
};

export type LinktreeWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<LinktreeWhere>>;
  AND?: InputMaybe<Array<LinktreeWhere>>;
  NOT?: InputMaybe<LinktreeWhere>;
  /** @deprecated Use `links_SOME` instead. */
  links?: InputMaybe<LinkWhere>;
  /** @deprecated Use `links_NONE` instead. */
  links_NOT?: InputMaybe<LinkWhere>;
  /** Return Linktrees where all of the related Links match this filter */
  links_ALL?: InputMaybe<LinkWhere>;
  /** Return Linktrees where none of the related Links match this filter */
  links_NONE?: InputMaybe<LinkWhere>;
  /** Return Linktrees where one of the related Links match this filter */
  links_SINGLE?: InputMaybe<LinkWhere>;
  /** Return Linktrees where some of the related Links match this filter */
  links_SOME?: InputMaybe<LinkWhere>;
  linksAggregate?: InputMaybe<LinktreeLinksAggregateInput>;
  /** @deprecated Use `linksConnection_SOME` instead. */
  linksConnection?: InputMaybe<LinktreeLinksConnectionWhere>;
  /** @deprecated Use `linksConnection_NONE` instead. */
  linksConnection_NOT?: InputMaybe<LinktreeLinksConnectionWhere>;
  /** Return Linktrees where all of the related LinktreeLinksConnections match this filter */
  linksConnection_ALL?: InputMaybe<LinktreeLinksConnectionWhere>;
  /** Return Linktrees where none of the related LinktreeLinksConnections match this filter */
  linksConnection_NONE?: InputMaybe<LinktreeLinksConnectionWhere>;
  /** Return Linktrees where one of the related LinktreeLinksConnections match this filter */
  linksConnection_SINGLE?: InputMaybe<LinktreeLinksConnectionWhere>;
  /** Return Linktrees where some of the related LinktreeLinksConnections match this filter */
  linksConnection_SOME?: InputMaybe<LinktreeLinksConnectionWhere>;
};

export type LinkUpdateInput = {
  type?: InputMaybe<LinktreeType>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  linktree?: InputMaybe<LinkLinktreeUpdateFieldInput>;
};

export type LinkWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  type?: InputMaybe<LinktreeType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<LinktreeType>;
  type_IN?: InputMaybe<Array<LinktreeType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<LinktreeType>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT?: InputMaybe<Scalars["String"]["input"]>;
  url_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  url_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  url_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  url_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  url_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<LinkWhere>>;
  AND?: InputMaybe<Array<LinkWhere>>;
  NOT?: InputMaybe<LinkWhere>;
  linktree?: InputMaybe<LinktreeWhere>;
  linktree_NOT?: InputMaybe<LinktreeWhere>;
  linktreeAggregate?: InputMaybe<LinkLinktreeAggregateInput>;
  linktreeConnection?: InputMaybe<LinkLinktreeConnectionWhere>;
  linktreeConnection_NOT?: InputMaybe<LinkLinktreeConnectionWhere>;
};

export type TicketCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TicketOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more TicketSort objects to sort Tickets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TicketSort>>;
};

/** Fields to sort Tickets by. The order in which sorts are applied is not guaranteed when specifying many fields in one TicketSort object. */
export type TicketSort = {
  id?: InputMaybe<SortDirection>;
  barcode?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type TicketSubscriptionWhere = {
  AND?: InputMaybe<Array<TicketSubscriptionWhere>>;
  OR?: InputMaybe<Array<TicketSubscriptionWhere>>;
  NOT?: InputMaybe<TicketSubscriptionWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  barcode?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  barcode_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export type TicketUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TicketWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  barcode?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  barcode_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  barcode_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  barcode_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  OR?: InputMaybe<Array<TicketWhere>>;
  AND?: InputMaybe<Array<TicketWhere>>;
  NOT?: InputMaybe<TicketWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface LinktreeAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class LinktreeModel {
  public find(args?: {
    where?: LinktreeWhere;

    options?: LinktreeOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Linktree[]>;
  public create(args: {
    input: LinktreeCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLinktreesMutationResponse>;
  public update(args: {
    where?: LinktreeWhere;
    update?: LinktreeUpdateInput;
    connect?: LinktreeConnectInput;
    disconnect?: LinktreeDisconnectInput;
    create?: LinktreeCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLinktreesMutationResponse>;
  public delete(args: {
    where?: LinktreeWhere;
    delete?: LinktreeDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LinktreeWhere;

    aggregate: LinktreeAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LinktreeAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface LinkAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  url?: StringAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class LinkModel {
  public find(args?: {
    where?: LinkWhere;

    options?: LinkOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Link[]>;
  public create(args: {
    input: LinkCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateLinksMutationResponse>;
  public update(args: {
    where?: LinkWhere;
    update?: LinkUpdateInput;
    connect?: LinkConnectInput;
    disconnect?: LinkDisconnectInput;
    create?: LinkCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateLinksMutationResponse>;
  public delete(args: {
    where?: LinkWhere;
    delete?: LinkDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: LinkWhere;

    aggregate: LinkAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<LinkAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface TicketAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  barcode?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class TicketModel {
  public find(args?: {
    where?: TicketWhere;

    options?: TicketOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Ticket[]>;
  public create(args: {
    input: TicketCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateTicketsMutationResponse>;
  public update(args: {
    where?: TicketWhere;
    update?: TicketUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateTicketsMutationResponse>;
  public delete(args: {
    where?: TicketWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: TicketWhere;

    aggregate: TicketAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<TicketAggregateSelection>;
}

export interface ModelMap {
  Linktree: LinktreeModel;
  Link: LinkModel;
  Ticket: TicketModel;
}
