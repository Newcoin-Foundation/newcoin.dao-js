import { Pool, EosioActionObject, EosioAuthorizationObject } from "../types";

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string) {}

  async addWhiteList(
    authorization: EosioAuthorizationObject[],
    category: number,
    pools: Pool[]
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "addwhlst", {
      category,
      pools,
    });
  }

  async removeWhiteList(
    authorization: EosioAuthorizationObject[],
    category: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "rmvwhlst", {
      category,
    });
  }

  async createProposal(
    authorization: EosioAuthorizationObject[],
    category: number,
    proposer: string,
    new_contract: string,
    description: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtproposal", {
      category,
      proposer,
      new_contract,
      description,
      vote_start,
      vote_end,
    });
  }

  async approveProposal(
    authorization: EosioAuthorizationObject[],
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appcntprp", {
      proposal_id,
    });
  }

  async executeProposal(
    authorization: EosioAuthorizationObject[],
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execcntprp", {
      proposal_id,
    });
  }

  async vote(
    authorization: EosioAuthorizationObject[],
    voter: string,
    proposal_id: string,
    option: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "vote", {
      voter,
      proposal_id,
      option,
    });
  }

  async claimRewards(
    authorization: EosioAuthorizationObject[],
    category: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "claimrwds", {
      category,
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
