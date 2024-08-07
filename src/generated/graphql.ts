/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type GraphQLError, print } from 'graphql';
import { type GraphQLClient, type RequestOptions } from 'graphql-request';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    ContractAddress: { input: any; output: any };
    Cursor: { input: any; output: any };
    DateTime: { input: any; output: any };
    Enum: { input: any; output: any };
    bool: { input: any; output: any };
    felt252: { input: any; output: any };
    u8: { input: any; output: any };
    u32: { input: any; output: any };
    u64: { input: any; output: any };
};

export type App = {
    __typename?: 'App';
    action?: Maybe<Scalars['felt252']['output']>;
    entity?: Maybe<World__Entity>;
    icon?: Maybe<Scalars['felt252']['output']>;
    manifest?: Maybe<Scalars['felt252']['output']>;
    name?: Maybe<Scalars['felt252']['output']>;
    system?: Maybe<Scalars['ContractAddress']['output']>;
};

export type AppConnection = {
    __typename?: 'AppConnection';
    edges?: Maybe<Array<Maybe<AppEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type AppEdge = {
    __typename?: 'AppEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<App>;
};

export type AppName = {
    __typename?: 'AppName';
    entity?: Maybe<World__Entity>;
    name?: Maybe<Scalars['felt252']['output']>;
    system?: Maybe<Scalars['ContractAddress']['output']>;
};

export type AppNameConnection = {
    __typename?: 'AppNameConnection';
    edges?: Maybe<Array<Maybe<AppNameEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type AppNameEdge = {
    __typename?: 'AppNameEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<AppName>;
};

export type AppNameOrder = {
    direction: OrderDirection;
    field: AppNameOrderField;
};

export enum AppNameOrderField {
    Name = 'NAME',
    System = 'SYSTEM',
}

export type AppNameWhereInput = {
    name?: InputMaybe<Scalars['felt252']['input']>;
    nameEQ?: InputMaybe<Scalars['felt252']['input']>;
    nameGT?: InputMaybe<Scalars['felt252']['input']>;
    nameGTE?: InputMaybe<Scalars['felt252']['input']>;
    nameLT?: InputMaybe<Scalars['felt252']['input']>;
    nameLTE?: InputMaybe<Scalars['felt252']['input']>;
    nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
    system?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type AppOrder = {
    direction: OrderDirection;
    field: AppOrderField;
};

export enum AppOrderField {
    Action = 'ACTION',
    Icon = 'ICON',
    Manifest = 'MANIFEST',
    Name = 'NAME',
    System = 'SYSTEM',
}

export type AppUser = {
    __typename?: 'AppUser';
    action?: Maybe<Scalars['felt252']['output']>;
    entity?: Maybe<World__Entity>;
    player?: Maybe<Scalars['ContractAddress']['output']>;
    system?: Maybe<Scalars['ContractAddress']['output']>;
};

export type AppUserConnection = {
    __typename?: 'AppUserConnection';
    edges?: Maybe<Array<Maybe<AppUserEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type AppUserEdge = {
    __typename?: 'AppUserEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<AppUser>;
};

export type AppUserOrder = {
    direction: OrderDirection;
    field: AppUserOrderField;
};

export enum AppUserOrderField {
    Action = 'ACTION',
    Player = 'PLAYER',
    System = 'SYSTEM',
}

export type AppUserWhereInput = {
    action?: InputMaybe<Scalars['felt252']['input']>;
    actionEQ?: InputMaybe<Scalars['felt252']['input']>;
    actionGT?: InputMaybe<Scalars['felt252']['input']>;
    actionGTE?: InputMaybe<Scalars['felt252']['input']>;
    actionLT?: InputMaybe<Scalars['felt252']['input']>;
    actionLTE?: InputMaybe<Scalars['felt252']['input']>;
    actionNEQ?: InputMaybe<Scalars['felt252']['input']>;
    player?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    playerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    system?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type AppWhereInput = {
    action?: InputMaybe<Scalars['felt252']['input']>;
    actionEQ?: InputMaybe<Scalars['felt252']['input']>;
    actionGT?: InputMaybe<Scalars['felt252']['input']>;
    actionGTE?: InputMaybe<Scalars['felt252']['input']>;
    actionLT?: InputMaybe<Scalars['felt252']['input']>;
    actionLTE?: InputMaybe<Scalars['felt252']['input']>;
    actionNEQ?: InputMaybe<Scalars['felt252']['input']>;
    icon?: InputMaybe<Scalars['felt252']['input']>;
    iconEQ?: InputMaybe<Scalars['felt252']['input']>;
    iconGT?: InputMaybe<Scalars['felt252']['input']>;
    iconGTE?: InputMaybe<Scalars['felt252']['input']>;
    iconLT?: InputMaybe<Scalars['felt252']['input']>;
    iconLTE?: InputMaybe<Scalars['felt252']['input']>;
    iconNEQ?: InputMaybe<Scalars['felt252']['input']>;
    manifest?: InputMaybe<Scalars['felt252']['input']>;
    manifestEQ?: InputMaybe<Scalars['felt252']['input']>;
    manifestGT?: InputMaybe<Scalars['felt252']['input']>;
    manifestGTE?: InputMaybe<Scalars['felt252']['input']>;
    manifestLT?: InputMaybe<Scalars['felt252']['input']>;
    manifestLTE?: InputMaybe<Scalars['felt252']['input']>;
    manifestNEQ?: InputMaybe<Scalars['felt252']['input']>;
    name?: InputMaybe<Scalars['felt252']['input']>;
    nameEQ?: InputMaybe<Scalars['felt252']['input']>;
    nameGT?: InputMaybe<Scalars['felt252']['input']>;
    nameGTE?: InputMaybe<Scalars['felt252']['input']>;
    nameLT?: InputMaybe<Scalars['felt252']['input']>;
    nameLTE?: InputMaybe<Scalars['felt252']['input']>;
    nameNEQ?: InputMaybe<Scalars['felt252']['input']>;
    system?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type CoreActionsAddress = {
    __typename?: 'CoreActionsAddress';
    entity?: Maybe<World__Entity>;
    key?: Maybe<Scalars['felt252']['output']>;
    value?: Maybe<Scalars['ContractAddress']['output']>;
};

export type CoreActionsAddressConnection = {
    __typename?: 'CoreActionsAddressConnection';
    edges?: Maybe<Array<Maybe<CoreActionsAddressEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type CoreActionsAddressEdge = {
    __typename?: 'CoreActionsAddressEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<CoreActionsAddress>;
};

export type CoreActionsAddressOrder = {
    direction: OrderDirection;
    field: CoreActionsAddressOrderField;
};

export enum CoreActionsAddressOrderField {
    Key = 'KEY',
    Value = 'VALUE',
}

export type CoreActionsAddressWhereInput = {
    key?: InputMaybe<Scalars['felt252']['input']>;
    keyEQ?: InputMaybe<Scalars['felt252']['input']>;
    keyGT?: InputMaybe<Scalars['felt252']['input']>;
    keyGTE?: InputMaybe<Scalars['felt252']['input']>;
    keyLT?: InputMaybe<Scalars['felt252']['input']>;
    keyLTE?: InputMaybe<Scalars['felt252']['input']>;
    keyNEQ?: InputMaybe<Scalars['felt252']['input']>;
    value?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    valueNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Instruction = {
    __typename?: 'Instruction';
    entity?: Maybe<World__Entity>;
    instruction?: Maybe<Scalars['felt252']['output']>;
    selector?: Maybe<Scalars['felt252']['output']>;
    system?: Maybe<Scalars['ContractAddress']['output']>;
};

export type InstructionConnection = {
    __typename?: 'InstructionConnection';
    edges?: Maybe<Array<Maybe<InstructionEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type InstructionEdge = {
    __typename?: 'InstructionEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<Instruction>;
};

export type InstructionOrder = {
    direction: OrderDirection;
    field: InstructionOrderField;
};

export enum InstructionOrderField {
    Instruction = 'INSTRUCTION',
    Selector = 'SELECTOR',
    System = 'SYSTEM',
}

export type InstructionWhereInput = {
    instruction?: InputMaybe<Scalars['felt252']['input']>;
    instructionEQ?: InputMaybe<Scalars['felt252']['input']>;
    instructionGT?: InputMaybe<Scalars['felt252']['input']>;
    instructionGTE?: InputMaybe<Scalars['felt252']['input']>;
    instructionLT?: InputMaybe<Scalars['felt252']['input']>;
    instructionLTE?: InputMaybe<Scalars['felt252']['input']>;
    instructionNEQ?: InputMaybe<Scalars['felt252']['input']>;
    selector?: InputMaybe<Scalars['felt252']['input']>;
    selectorEQ?: InputMaybe<Scalars['felt252']['input']>;
    selectorGT?: InputMaybe<Scalars['felt252']['input']>;
    selectorGTE?: InputMaybe<Scalars['felt252']['input']>;
    selectorLT?: InputMaybe<Scalars['felt252']['input']>;
    selectorLTE?: InputMaybe<Scalars['felt252']['input']>;
    selectorNEQ?: InputMaybe<Scalars['felt252']['input']>;
    system?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    systemNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type ModelUnion =
    | App
    | AppName
    | AppUser
    | CoreActionsAddress
    | Instruction
    | Permissions
    | Pixel
    | QueueItem
    | Snake
    | SnakeSegment;

export enum OrderDirection {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type Permissions = {
    __typename?: 'Permissions';
    allowed_app?: Maybe<Scalars['ContractAddress']['output']>;
    allowing_app?: Maybe<Scalars['ContractAddress']['output']>;
    entity?: Maybe<World__Entity>;
    permission?: Maybe<Permissions_Permission>;
};

export type PermissionsConnection = {
    __typename?: 'PermissionsConnection';
    edges?: Maybe<Array<Maybe<PermissionsEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type PermissionsEdge = {
    __typename?: 'PermissionsEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<Permissions>;
};

export type PermissionsOrder = {
    direction: OrderDirection;
    field: PermissionsOrderField;
};

export enum PermissionsOrderField {
    AllowedApp = 'ALLOWED_APP',
    AllowingApp = 'ALLOWING_APP',
    Permission = 'PERMISSION',
}

export type PermissionsWhereInput = {
    allowed_app?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowed_appNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_app?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    allowing_appNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
};

export type Permissions_Permission = {
    __typename?: 'Permissions_Permission';
    action?: Maybe<Scalars['bool']['output']>;
    app?: Maybe<Scalars['bool']['output']>;
    color?: Maybe<Scalars['bool']['output']>;
    owner?: Maybe<Scalars['bool']['output']>;
    text?: Maybe<Scalars['bool']['output']>;
    timestamp?: Maybe<Scalars['bool']['output']>;
};

export type Pixel = {
    __typename?: 'Pixel';
    action?: Maybe<Scalars['felt252']['output']>;
    app?: Maybe<Scalars['ContractAddress']['output']>;
    color?: Maybe<Scalars['u32']['output']>;
    created_at?: Maybe<Scalars['u64']['output']>;
    entity?: Maybe<World__Entity>;
    owner?: Maybe<Scalars['ContractAddress']['output']>;
    text?: Maybe<Scalars['felt252']['output']>;
    timestamp?: Maybe<Scalars['u64']['output']>;
    updated_at?: Maybe<Scalars['u64']['output']>;
    x?: Maybe<Scalars['u32']['output']>;
    y?: Maybe<Scalars['u32']['output']>;
};

export type PixelConnection = {
    __typename?: 'PixelConnection';
    edges?: Maybe<Array<Maybe<PixelEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type PixelEdge = {
    __typename?: 'PixelEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<Pixel>;
};

export type PixelOrder = {
    direction: OrderDirection;
    field: PixelOrderField;
};

export enum PixelOrderField {
    Action = 'ACTION',
    App = 'APP',
    Color = 'COLOR',
    CreatedAt = 'CREATED_AT',
    Owner = 'OWNER',
    Text = 'TEXT',
    Timestamp = 'TIMESTAMP',
    UpdatedAt = 'UPDATED_AT',
    X = 'X',
    Y = 'Y',
}

export type PixelWhereInput = {
    action?: InputMaybe<Scalars['felt252']['input']>;
    actionEQ?: InputMaybe<Scalars['felt252']['input']>;
    actionGT?: InputMaybe<Scalars['felt252']['input']>;
    actionGTE?: InputMaybe<Scalars['felt252']['input']>;
    actionLT?: InputMaybe<Scalars['felt252']['input']>;
    actionLTE?: InputMaybe<Scalars['felt252']['input']>;
    actionNEQ?: InputMaybe<Scalars['felt252']['input']>;
    app?: InputMaybe<Scalars['ContractAddress']['input']>;
    appEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    appGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    appGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    appLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    appLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    appNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    color?: InputMaybe<Scalars['u32']['input']>;
    colorEQ?: InputMaybe<Scalars['u32']['input']>;
    colorGT?: InputMaybe<Scalars['u32']['input']>;
    colorGTE?: InputMaybe<Scalars['u32']['input']>;
    colorLT?: InputMaybe<Scalars['u32']['input']>;
    colorLTE?: InputMaybe<Scalars['u32']['input']>;
    colorNEQ?: InputMaybe<Scalars['u32']['input']>;
    created_at?: InputMaybe<Scalars['u64']['input']>;
    created_atEQ?: InputMaybe<Scalars['u64']['input']>;
    created_atGT?: InputMaybe<Scalars['u64']['input']>;
    created_atGTE?: InputMaybe<Scalars['u64']['input']>;
    created_atLT?: InputMaybe<Scalars['u64']['input']>;
    created_atLTE?: InputMaybe<Scalars['u64']['input']>;
    created_atNEQ?: InputMaybe<Scalars['u64']['input']>;
    owner?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    text?: InputMaybe<Scalars['felt252']['input']>;
    textEQ?: InputMaybe<Scalars['felt252']['input']>;
    textGT?: InputMaybe<Scalars['felt252']['input']>;
    textGTE?: InputMaybe<Scalars['felt252']['input']>;
    textLT?: InputMaybe<Scalars['felt252']['input']>;
    textLTE?: InputMaybe<Scalars['felt252']['input']>;
    textNEQ?: InputMaybe<Scalars['felt252']['input']>;
    timestamp?: InputMaybe<Scalars['u64']['input']>;
    timestampEQ?: InputMaybe<Scalars['u64']['input']>;
    timestampGT?: InputMaybe<Scalars['u64']['input']>;
    timestampGTE?: InputMaybe<Scalars['u64']['input']>;
    timestampLT?: InputMaybe<Scalars['u64']['input']>;
    timestampLTE?: InputMaybe<Scalars['u64']['input']>;
    timestampNEQ?: InputMaybe<Scalars['u64']['input']>;
    updated_at?: InputMaybe<Scalars['u64']['input']>;
    updated_atEQ?: InputMaybe<Scalars['u64']['input']>;
    updated_atGT?: InputMaybe<Scalars['u64']['input']>;
    updated_atGTE?: InputMaybe<Scalars['u64']['input']>;
    updated_atLT?: InputMaybe<Scalars['u64']['input']>;
    updated_atLTE?: InputMaybe<Scalars['u64']['input']>;
    updated_atNEQ?: InputMaybe<Scalars['u64']['input']>;
    x?: InputMaybe<Scalars['u32']['input']>;
    xEQ?: InputMaybe<Scalars['u32']['input']>;
    xGT?: InputMaybe<Scalars['u32']['input']>;
    xGTE?: InputMaybe<Scalars['u32']['input']>;
    xLT?: InputMaybe<Scalars['u32']['input']>;
    xLTE?: InputMaybe<Scalars['u32']['input']>;
    xNEQ?: InputMaybe<Scalars['u32']['input']>;
    y?: InputMaybe<Scalars['u32']['input']>;
    yEQ?: InputMaybe<Scalars['u32']['input']>;
    yGT?: InputMaybe<Scalars['u32']['input']>;
    yGTE?: InputMaybe<Scalars['u32']['input']>;
    yLT?: InputMaybe<Scalars['u32']['input']>;
    yLTE?: InputMaybe<Scalars['u32']['input']>;
    yNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type QueueItem = {
    __typename?: 'QueueItem';
    entity?: Maybe<World__Entity>;
    id?: Maybe<Scalars['felt252']['output']>;
    valid?: Maybe<Scalars['bool']['output']>;
};

export type QueueItemConnection = {
    __typename?: 'QueueItemConnection';
    edges?: Maybe<Array<Maybe<QueueItemEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type QueueItemEdge = {
    __typename?: 'QueueItemEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<QueueItem>;
};

export type QueueItemOrder = {
    direction: OrderDirection;
    field: QueueItemOrderField;
};

export enum QueueItemOrderField {
    Id = 'ID',
    Valid = 'VALID',
}

export type QueueItemWhereInput = {
    id?: InputMaybe<Scalars['felt252']['input']>;
    idEQ?: InputMaybe<Scalars['felt252']['input']>;
    idGT?: InputMaybe<Scalars['felt252']['input']>;
    idGTE?: InputMaybe<Scalars['felt252']['input']>;
    idLT?: InputMaybe<Scalars['felt252']['input']>;
    idLTE?: InputMaybe<Scalars['felt252']['input']>;
    idNEQ?: InputMaybe<Scalars['felt252']['input']>;
    valid?: InputMaybe<Scalars['bool']['input']>;
};

export type Snake = {
    __typename?: 'Snake';
    color?: Maybe<Scalars['u32']['output']>;
    direction?: Maybe<Scalars['Enum']['output']>;
    entity?: Maybe<World__Entity>;
    first_segment_id?: Maybe<Scalars['u32']['output']>;
    is_dying?: Maybe<Scalars['bool']['output']>;
    last_segment_id?: Maybe<Scalars['u32']['output']>;
    length?: Maybe<Scalars['u8']['output']>;
    owner?: Maybe<Scalars['ContractAddress']['output']>;
    text?: Maybe<Scalars['felt252']['output']>;
};

export type SnakeConnection = {
    __typename?: 'SnakeConnection';
    edges?: Maybe<Array<Maybe<SnakeEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type SnakeEdge = {
    __typename?: 'SnakeEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<Snake>;
};

export type SnakeOrder = {
    direction: OrderDirection;
    field: SnakeOrderField;
};

export enum SnakeOrderField {
    Color = 'COLOR',
    Direction = 'DIRECTION',
    FirstSegmentId = 'FIRST_SEGMENT_ID',
    IsDying = 'IS_DYING',
    LastSegmentId = 'LAST_SEGMENT_ID',
    Length = 'LENGTH',
    Owner = 'OWNER',
    Text = 'TEXT',
}

export type SnakeSegment = {
    __typename?: 'SnakeSegment';
    entity?: Maybe<World__Entity>;
    id?: Maybe<Scalars['u32']['output']>;
    next_id?: Maybe<Scalars['u32']['output']>;
    pixel_original_app?: Maybe<Scalars['ContractAddress']['output']>;
    pixel_original_color?: Maybe<Scalars['u32']['output']>;
    pixel_original_text?: Maybe<Scalars['felt252']['output']>;
    previous_id?: Maybe<Scalars['u32']['output']>;
    x?: Maybe<Scalars['u32']['output']>;
    y?: Maybe<Scalars['u32']['output']>;
};

export type SnakeSegmentConnection = {
    __typename?: 'SnakeSegmentConnection';
    edges?: Maybe<Array<Maybe<SnakeSegmentEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type SnakeSegmentEdge = {
    __typename?: 'SnakeSegmentEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<SnakeSegment>;
};

export type SnakeSegmentOrder = {
    direction: OrderDirection;
    field: SnakeSegmentOrderField;
};

export enum SnakeSegmentOrderField {
    Id = 'ID',
    NextId = 'NEXT_ID',
    PixelOriginalApp = 'PIXEL_ORIGINAL_APP',
    PixelOriginalColor = 'PIXEL_ORIGINAL_COLOR',
    PixelOriginalText = 'PIXEL_ORIGINAL_TEXT',
    PreviousId = 'PREVIOUS_ID',
    X = 'X',
    Y = 'Y',
}

export type SnakeSegmentWhereInput = {
    id?: InputMaybe<Scalars['u32']['input']>;
    idEQ?: InputMaybe<Scalars['u32']['input']>;
    idGT?: InputMaybe<Scalars['u32']['input']>;
    idGTE?: InputMaybe<Scalars['u32']['input']>;
    idLT?: InputMaybe<Scalars['u32']['input']>;
    idLTE?: InputMaybe<Scalars['u32']['input']>;
    idNEQ?: InputMaybe<Scalars['u32']['input']>;
    next_id?: InputMaybe<Scalars['u32']['input']>;
    next_idEQ?: InputMaybe<Scalars['u32']['input']>;
    next_idGT?: InputMaybe<Scalars['u32']['input']>;
    next_idGTE?: InputMaybe<Scalars['u32']['input']>;
    next_idLT?: InputMaybe<Scalars['u32']['input']>;
    next_idLTE?: InputMaybe<Scalars['u32']['input']>;
    next_idNEQ?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_app?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_appNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    pixel_original_color?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorEQ?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorGT?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorGTE?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorLT?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorLTE?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_colorNEQ?: InputMaybe<Scalars['u32']['input']>;
    pixel_original_text?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textEQ?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textGT?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textGTE?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textLT?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textLTE?: InputMaybe<Scalars['felt252']['input']>;
    pixel_original_textNEQ?: InputMaybe<Scalars['felt252']['input']>;
    previous_id?: InputMaybe<Scalars['u32']['input']>;
    previous_idEQ?: InputMaybe<Scalars['u32']['input']>;
    previous_idGT?: InputMaybe<Scalars['u32']['input']>;
    previous_idGTE?: InputMaybe<Scalars['u32']['input']>;
    previous_idLT?: InputMaybe<Scalars['u32']['input']>;
    previous_idLTE?: InputMaybe<Scalars['u32']['input']>;
    previous_idNEQ?: InputMaybe<Scalars['u32']['input']>;
    x?: InputMaybe<Scalars['u32']['input']>;
    xEQ?: InputMaybe<Scalars['u32']['input']>;
    xGT?: InputMaybe<Scalars['u32']['input']>;
    xGTE?: InputMaybe<Scalars['u32']['input']>;
    xLT?: InputMaybe<Scalars['u32']['input']>;
    xLTE?: InputMaybe<Scalars['u32']['input']>;
    xNEQ?: InputMaybe<Scalars['u32']['input']>;
    y?: InputMaybe<Scalars['u32']['input']>;
    yEQ?: InputMaybe<Scalars['u32']['input']>;
    yGT?: InputMaybe<Scalars['u32']['input']>;
    yGTE?: InputMaybe<Scalars['u32']['input']>;
    yLT?: InputMaybe<Scalars['u32']['input']>;
    yLTE?: InputMaybe<Scalars['u32']['input']>;
    yNEQ?: InputMaybe<Scalars['u32']['input']>;
};

export type SnakeWhereInput = {
    color?: InputMaybe<Scalars['u32']['input']>;
    colorEQ?: InputMaybe<Scalars['u32']['input']>;
    colorGT?: InputMaybe<Scalars['u32']['input']>;
    colorGTE?: InputMaybe<Scalars['u32']['input']>;
    colorLT?: InputMaybe<Scalars['u32']['input']>;
    colorLTE?: InputMaybe<Scalars['u32']['input']>;
    colorNEQ?: InputMaybe<Scalars['u32']['input']>;
    direction?: InputMaybe<Scalars['Enum']['input']>;
    first_segment_id?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idEQ?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idGT?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idGTE?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idLT?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idLTE?: InputMaybe<Scalars['u32']['input']>;
    first_segment_idNEQ?: InputMaybe<Scalars['u32']['input']>;
    is_dying?: InputMaybe<Scalars['bool']['input']>;
    last_segment_id?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idEQ?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idGT?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idGTE?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idLT?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idLTE?: InputMaybe<Scalars['u32']['input']>;
    last_segment_idNEQ?: InputMaybe<Scalars['u32']['input']>;
    length?: InputMaybe<Scalars['u8']['input']>;
    lengthEQ?: InputMaybe<Scalars['u8']['input']>;
    lengthGT?: InputMaybe<Scalars['u8']['input']>;
    lengthGTE?: InputMaybe<Scalars['u8']['input']>;
    lengthLT?: InputMaybe<Scalars['u8']['input']>;
    lengthLTE?: InputMaybe<Scalars['u8']['input']>;
    lengthNEQ?: InputMaybe<Scalars['u8']['input']>;
    owner?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerGT?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerGTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerLT?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerLTE?: InputMaybe<Scalars['ContractAddress']['input']>;
    ownerNEQ?: InputMaybe<Scalars['ContractAddress']['input']>;
    text?: InputMaybe<Scalars['felt252']['input']>;
    textEQ?: InputMaybe<Scalars['felt252']['input']>;
    textGT?: InputMaybe<Scalars['felt252']['input']>;
    textGTE?: InputMaybe<Scalars['felt252']['input']>;
    textLT?: InputMaybe<Scalars['felt252']['input']>;
    textLTE?: InputMaybe<Scalars['felt252']['input']>;
    textNEQ?: InputMaybe<Scalars['felt252']['input']>;
};

export type World__Content = {
    __typename?: 'World__Content';
    coverUri?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    iconUri?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    socials?: Maybe<Array<Maybe<World__Social>>>;
    website?: Maybe<Scalars['String']['output']>;
};

export type World__Entity = {
    __typename?: 'World__Entity';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    eventId?: Maybe<Scalars['String']['output']>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    models?: Maybe<Array<Maybe<ModelUnion>>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EntityConnection = {
    __typename?: 'World__EntityConnection';
    edges?: Maybe<Array<Maybe<World__EntityEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__EntityEdge = {
    __typename?: 'World__EntityEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__Entity>;
};

export type World__Event = {
    __typename?: 'World__Event';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    data?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    transactionHash?: Maybe<Scalars['String']['output']>;
};

export type World__EventConnection = {
    __typename?: 'World__EventConnection';
    edges?: Maybe<Array<Maybe<World__EventEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__EventEdge = {
    __typename?: 'World__EventEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__Event>;
};

export type World__EventMessage = {
    __typename?: 'World__EventMessage';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    eventId?: Maybe<Scalars['String']['output']>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    keys?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    models?: Maybe<Array<Maybe<ModelUnion>>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type World__EventMessageConnection = {
    __typename?: 'World__EventMessageConnection';
    edges?: Maybe<Array<Maybe<World__EventMessageEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__EventMessageEdge = {
    __typename?: 'World__EventMessageEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__EventMessage>;
};

export type World__Metadata = {
    __typename?: 'World__Metadata';
    content?: Maybe<World__Content>;
    coverImg?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    iconImg?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    uri?: Maybe<Scalars['String']['output']>;
    worldAddress: Scalars['String']['output'];
};

export type World__MetadataConnection = {
    __typename?: 'World__MetadataConnection';
    edges?: Maybe<Array<Maybe<World__MetadataEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__MetadataEdge = {
    __typename?: 'World__MetadataEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__Metadata>;
};

export type World__Model = {
    __typename?: 'World__Model';
    classHash?: Maybe<Scalars['felt252']['output']>;
    contractAddress?: Maybe<Scalars['felt252']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__ModelConnection = {
    __typename?: 'World__ModelConnection';
    edges?: Maybe<Array<Maybe<World__ModelEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__ModelEdge = {
    __typename?: 'World__ModelEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__Model>;
};

export type World__ModelOrder = {
    direction: OrderDirection;
    field: World__ModelOrderField;
};

export enum World__ModelOrderField {
    ClassHash = 'CLASS_HASH',
    Name = 'NAME',
}

export type World__PageInfo = {
    __typename?: 'World__PageInfo';
    endCursor?: Maybe<Scalars['Cursor']['output']>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
    startCursor?: Maybe<Scalars['Cursor']['output']>;
};

export type World__Query = {
    __typename?: 'World__Query';
    appModels?: Maybe<AppConnection>;
    appNameModels?: Maybe<AppNameConnection>;
    appUserModels?: Maybe<AppUserConnection>;
    coreActionsAddressModels?: Maybe<CoreActionsAddressConnection>;
    entities?: Maybe<World__EntityConnection>;
    entity: World__Entity;
    eventMessage: World__EventMessage;
    eventMessages?: Maybe<World__EventMessageConnection>;
    events?: Maybe<World__EventConnection>;
    instructionModels?: Maybe<InstructionConnection>;
    metadatas?: Maybe<World__MetadataConnection>;
    model: World__Model;
    models?: Maybe<World__ModelConnection>;
    permissionsModels?: Maybe<PermissionsConnection>;
    pixelModels?: Maybe<PixelConnection>;
    queueItemModels?: Maybe<QueueItemConnection>;
    snakeModels?: Maybe<SnakeConnection>;
    snakeSegmentModels?: Maybe<SnakeSegmentConnection>;
    transaction: World__Transaction;
    transactions?: Maybe<World__TransactionConnection>;
};

export type World__QueryAppModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<AppOrder>;
    where?: InputMaybe<AppWhereInput>;
};

export type World__QueryAppNameModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<AppNameOrder>;
    where?: InputMaybe<AppNameWhereInput>;
};

export type World__QueryAppUserModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<AppUserOrder>;
    where?: InputMaybe<AppUserWhereInput>;
};

export type World__QueryCoreActionsAddressModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<CoreActionsAddressOrder>;
    where?: InputMaybe<CoreActionsAddressWhereInput>;
};

export type World__QueryEntitiesArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__QueryEntityArgs = {
    id: Scalars['ID']['input'];
};

export type World__QueryEventMessageArgs = {
    id: Scalars['ID']['input'];
};

export type World__QueryEventMessagesArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__QueryEventsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__QueryInstructionModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<InstructionOrder>;
    where?: InputMaybe<InstructionWhereInput>;
};

export type World__QueryMetadatasArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__QueryModelArgs = {
    id: Scalars['ID']['input'];
};

export type World__QueryModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<World__ModelOrder>;
};

export type World__QueryPermissionsModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<PermissionsOrder>;
    where?: InputMaybe<PermissionsWhereInput>;
};

export type World__QueryPixelModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<PixelOrder>;
    where?: InputMaybe<PixelWhereInput>;
};

export type World__QueryQueueItemModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<QueueItemOrder>;
    where?: InputMaybe<QueueItemWhereInput>;
};

export type World__QuerySnakeModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<SnakeOrder>;
    where?: InputMaybe<SnakeWhereInput>;
};

export type World__QuerySnakeSegmentModelsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    order?: InputMaybe<SnakeSegmentOrder>;
    where?: InputMaybe<SnakeSegmentWhereInput>;
};

export type World__QueryTransactionArgs = {
    transactionHash: Scalars['ID']['input'];
};

export type World__QueryTransactionsArgs = {
    after?: InputMaybe<Scalars['Cursor']['input']>;
    before?: InputMaybe<Scalars['Cursor']['input']>;
    first?: InputMaybe<Scalars['Int']['input']>;
    last?: InputMaybe<Scalars['Int']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};

export type World__Social = {
    __typename?: 'World__Social';
    name?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type World__Subscription = {
    __typename?: 'World__Subscription';
    entityUpdated: World__Entity;
    eventEmitted: World__Event;
    eventMessageUpdated: World__EventMessage;
    modelRegistered: World__Model;
};

export type World__SubscriptionEntityUpdatedArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__SubscriptionEventEmittedArgs = {
    keys?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type World__SubscriptionEventMessageUpdatedArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__SubscriptionModelRegisteredArgs = {
    id?: InputMaybe<Scalars['ID']['input']>;
};

export type World__Transaction = {
    __typename?: 'World__Transaction';
    calldata?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    executedAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['ID']['output']>;
    maxFee?: Maybe<Scalars['felt252']['output']>;
    nonce?: Maybe<Scalars['felt252']['output']>;
    senderAddress?: Maybe<Scalars['felt252']['output']>;
    signature?: Maybe<Array<Maybe<Scalars['felt252']['output']>>>;
    transactionHash?: Maybe<Scalars['felt252']['output']>;
};

export type World__TransactionConnection = {
    __typename?: 'World__TransactionConnection';
    edges?: Maybe<Array<Maybe<World__TransactionEdge>>>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int']['output'];
};

export type World__TransactionEdge = {
    __typename?: 'World__TransactionEdge';
    cursor?: Maybe<Scalars['Cursor']['output']>;
    node?: Maybe<World__Transaction>;
};

export type AlertsQueryVariables = Exact<{
    first?: InputMaybe<Scalars['Int']['input']>;
}>;

export type AlertsQuery = {
    __typename?: 'World__Query';
    events?: {
        __typename?: 'World__EventConnection';
        edges?: Array<{
            __typename?: 'World__EventEdge';
            node?: {
                __typename?: 'World__Event';
                id?: string | null;
                keys?: Array<string | null> | null;
                data?: Array<string | null> | null;
                createdAt?: any | null;
                transactionHash?: string | null;
            } | null;
        } | null> | null;
    } | null;
};

export type MetadatasQueryVariables = Exact<{ [key: string]: never }>;

export type MetadatasQuery = {
    __typename?: 'World__Query';
    metadatas?: {
        __typename?: 'World__MetadataConnection';
        edges?: Array<{
            __typename?: 'World__MetadataEdge';
            node?: {
                __typename?: 'World__Metadata';
                id?: string | null;
                uri?: string | null;
                worldAddress: string;
            } | null;
        } | null> | null;
    } | null;
};

export const AlertsDocument = gql`
    query alerts($first: Int) {
        events(
            first: $first
            keys: ["0x4f01980329bc5de8cd181e4fb67fefefe583bd41f04365fa472ba112e7e5ef"]
        ) {
            edges {
                node {
                    id
                    keys
                    data
                    createdAt
                    transactionHash
                }
            }
        }
    }
`;
export const MetadatasDocument = gql`
    query metadatas {
        metadatas {
            edges {
                node {
                    id
                    uri
                    worldAddress
                }
            }
        }
    }
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
    variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
    action();
const AlertsDocumentString = print(AlertsDocument);
const MetadatasDocumentString = print(MetadatasDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        alerts(
            variables?: AlertsQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: AlertsQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<AlertsQuery>(AlertsDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'alerts',
                'query',
                variables,
            );
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        metadatas(
            variables?: MetadatasQueryVariables,
            requestHeaders?: GraphQLClientRequestHeaders,
        ): Promise<{
            data: MetadatasQuery;
            errors?: GraphQLError[];
            extensions?: any;
            headers: Headers;
            status: number;
        }> {
            console.log('a');
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.rawRequest<MetadatasQuery>(MetadatasDocumentString, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'metadatas',
                'query',
                variables,
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
