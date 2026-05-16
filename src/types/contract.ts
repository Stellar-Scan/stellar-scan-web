export type ContractFunction = {
  name: string;
  doc?: string;
  inputs: { name: string; type: string }[];
  outputs: { type: string }[];
};

export type Contract = {
  contract_id: string;
  deployer: string;
  wasm_hash: string;
  deploy_ledger: number;
  network: string;
  verified: boolean;
  tags: string[];
  functions?: ContractFunction[];
};
