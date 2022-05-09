/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
  BigNumberish,
} from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import type { RandomNumberConsumer, RandomNumberConsumerInterface } from "../RandomNumberConsumer"

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "randomResult",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162000c0338038062000c03833981810160405281019062000037919062000106565b83838173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505081600181905550806002819055505050505062000213565b600081519050620000d281620001c5565b92915050565b600081519050620000e981620001df565b92915050565b6000815190506200010081620001f9565b92915050565b60008060008060808587031215620001235762000122620001c0565b5b60006200013387828801620000c1565b94505060206200014687828801620000c1565b93505060406200015987828801620000d8565b92505060606200016c87828801620000ef565b91505092959194509250565b6000620001858262000196565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b620001d08162000178565b8114620001dc57600080fd5b50565b620001ea816200018c565b8114620001f657600080fd5b50565b6200020481620001b6565b81146200021057600080fd5b50565b60805160601c60a05160601c6109b76200024c6000396000818160bd01526102a401526000818161015e015261026801526109b76000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806342619f66146100515780638dc654a21461006f57806394985ddd14610079578063dbdff2c114610095575b600080fd5b6100596100b3565b6040516100669190610748565b60405180910390f35b6100776100b9565b005b610093600480360381019061008e91906104b3565b6100bb565b005b61009d610157565b6040516100aa919061067f565b60405180910390f35b60035481565b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610149576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014090610728565b60405180910390fd5b6101538282610259565b5050565b60006002547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101b59190610626565b60206040518083038186803b1580156101cd57600080fd5b505afa1580156101e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020591906104f3565b1015610246576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023d90610708565b60405180910390fd5b610254600154600254610264565b905090565b806003819055505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f0000000000000000000000000000000000000000000000000000000000000000848660006040516020016102d892919061069a565b6040516020818303038152906040526040518463ffffffff1660e01b815260040161030593929190610641565b602060405180830381600087803b15801561031f57600080fd5b505af1158015610333573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103579190610486565b50600061037984600030600080898152602001908152602001600020546103c3565b905060016000808681526020019081526020016000205461039a9190610790565b600080868152602001908152602001600020819055506103ba84826103ff565b91505092915050565b6000848484846040516020016103dc94939291906106c3565b6040516020818303038152906040528051906020012060001c9050949350505050565b600082826040516020016104149291906105fa565b60405160208183030381529060405280519060200120905092915050565b6000815190506104418161093c565b92915050565b60008135905061045681610953565b92915050565b60008135905061046b8161096a565b92915050565b6000815190506104808161096a565b92915050565b60006020828403121561049c5761049b6108ae565b5b60006104aa84828501610432565b91505092915050565b600080604083850312156104ca576104c96108ae565b5b60006104d885828601610447565b92505060206104e98582860161045c565b9150509250929050565b600060208284031215610509576105086108ae565b5b600061051784828501610471565b91505092915050565b610529816107e6565b82525050565b61053881610804565b82525050565b61054f61054a82610804565b61086b565b82525050565b600061056082610763565b61056a818561076e565b935061057a818560208601610838565b610583816108b3565b840191505092915050565b600061059b602b8361077f565b91506105a6826108c4565b604082019050919050565b60006105be601f8361077f565b91506105c982610913565b602082019050919050565b6105dd8161082e565b82525050565b6105f46105ef8261082e565b610875565b82525050565b6000610606828561053e565b60208201915061061682846105e3565b6020820191508190509392505050565b600060208201905061063b6000830184610520565b92915050565b60006060820190506106566000830186610520565b61066360208301856105d4565b81810360408301526106758184610555565b9050949350505050565b6000602082019050610694600083018461052f565b92915050565b60006040820190506106af600083018561052f565b6106bc60208301846105d4565b9392505050565b60006080820190506106d8600083018761052f565b6106e560208301866105d4565b6106f26040830185610520565b6106ff60608301846105d4565b95945050505050565b600060208201905081810360008301526107218161058e565b9050919050565b60006020820190508181036000830152610741816105b1565b9050919050565b600060208201905061075d60008301846105d4565b92915050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061079b8261082e565b91506107a68361082e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107db576107da61087f565b5b828201905092915050565b60006107f18261080e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561085657808201518184015260208101905061083b565b83811115610865576000848401525b50505050565b6000819050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f4e6f7420656e6f756768204c494e4b202d2066696c6c20636f6e74726163742060008201527f7769746820666175636574000000000000000000000000000000000000000000602082015250565b7f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c00600082015250565b610945816107f8565b811461095057600080fd5b50565b61095c81610804565b811461096757600080fd5b50565b6109738161082e565b811461097e57600080fd5b5056fea264697066735822122024b6242424db4b7d085da8db35c1b6d1b989b0eac3918dbc172e1b39ed77db3a64736f6c63430008070033"

type RandomNumberConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: RandomNumberConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class RandomNumberConsumer__factory extends ContractFactory {
  constructor(...args: RandomNumberConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = "RandomNumberConsumer"
  }

  deploy(
    _vrfCoordinator: string,
    _link: string,
    _keyHash: BytesLike,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomNumberConsumer> {
    return super.deploy(
      _vrfCoordinator,
      _link,
      _keyHash,
      _fee,
      overrides || {}
    ) as Promise<RandomNumberConsumer>
  }
  getDeployTransaction(
    _vrfCoordinator: string,
    _link: string,
    _keyHash: BytesLike,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vrfCoordinator, _link, _keyHash, _fee, overrides || {})
  }
  attach(address: string): RandomNumberConsumer {
    return super.attach(address) as RandomNumberConsumer
  }
  connect(signer: Signer): RandomNumberConsumer__factory {
    return super.connect(signer) as RandomNumberConsumer__factory
  }
  static readonly contractName: "RandomNumberConsumer"
  public readonly contractName: "RandomNumberConsumer"
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): RandomNumberConsumerInterface {
    return new utils.Interface(_abi) as RandomNumberConsumerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RandomNumberConsumer {
    return new Contract(address, _abi, signerOrProvider) as RandomNumberConsumer
  }
}
