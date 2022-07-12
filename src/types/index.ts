export type EosioAuthorizationObject = {
  actor: string;
  permission: string;
};

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

export type Pool = {
  owner: string;
  weight: number;
};