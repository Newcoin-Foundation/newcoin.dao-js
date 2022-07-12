import {
  GetTableRowsPayload,
  ProposalPayload,
  TopPoolPayload,
  SlicePayload,
  VotePayload,
  RewardPayload,
  WhiteListPayload,
} from "./../interfaces";

export default class ChainApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getProposalByID(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "proposals",
      table_key: opts.id,
      lower_bound: opts.id,
      upper_bound: opts.id,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getProposalByContract(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "proposals",
      table_key: opts.contract,
      lower_bound: opts.contract,
      upper_bound: opts.contract,
      key_type: "name",
      index_position: "2",
    });
  }

  async getReward(opts: RewardPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "rewards",
      table_key: opts.category,
      lower_bound: opts.category,
      upper_bound: opts.category,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getSlice(opts: SlicePayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "slice",
      table_key: opts.date,
      lower_bound: opts.date,
      upper_bound: opts.date,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getTopPool(opts: TopPoolPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "toppools",
      table_key: opts.category,
      lower_bound: opts.category,
      upper_bound: opts.category,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getVote(opts: VotePayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.proposal_id,
      table: "votes",
      table_key: opts.voter,
      lower_bound: opts.voter,
      upper_bound: opts.voter,
      key_type: "name",
      index_position: "1",
    });
  }

  async getContractWhiteList(opts: WhiteListPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "cntwhitelist",
      table_key: opts.account,
      lower_bound: opts.account,
      upper_bound: opts.account,
      key_type: "name",
      index_position: "1",
    });
  }
}
