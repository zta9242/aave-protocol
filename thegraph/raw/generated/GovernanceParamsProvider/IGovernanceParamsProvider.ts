// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AssetVotingWeightProviderSet extends ethereum.Event {
  get params(): AssetVotingWeightProviderSet__Params {
    return new AssetVotingWeightProviderSet__Params(this);
  }
}

export class AssetVotingWeightProviderSet__Params {
  _event: AssetVotingWeightProviderSet;

  constructor(event: AssetVotingWeightProviderSet) {
    this._event = event;
  }

  get setter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetVotingWeightProvider(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PropositionPowerSet extends ethereum.Event {
  get params(): PropositionPowerSet__Params {
    return new PropositionPowerSet__Params(this);
  }
}

export class PropositionPowerSet__Params {
  _event: PropositionPowerSet;

  constructor(event: PropositionPowerSet) {
    this._event = event;
  }

  get setter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propositionPower(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PropositionPowerThresholdSet extends ethereum.Event {
  get params(): PropositionPowerThresholdSet__Params {
    return new PropositionPowerThresholdSet__Params(this);
  }
}

export class PropositionPowerThresholdSet__Params {
  _event: PropositionPowerThresholdSet;

  constructor(event: PropositionPowerThresholdSet) {
    this._event = event;
  }

  get setter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propositionPowerThreshold(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class IGovernanceParamsProvider extends ethereum.SmartContract {
  static bind(address: Address): IGovernanceParamsProvider {
    return new IGovernanceParamsProvider("IGovernanceParamsProvider", address);
  }

  getAssetVotingWeightProvider(): Address {
    let result = super.call(
      "getAssetVotingWeightProvider",
      "getAssetVotingWeightProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getAssetVotingWeightProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetVotingWeightProvider",
      "getAssetVotingWeightProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPropositionPower(): Address {
    let result = super.call(
      "getPropositionPower",
      "getPropositionPower():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getPropositionPower(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPropositionPower",
      "getPropositionPower():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPropositionPowerThreshold(): BigInt {
    let result = super.call(
      "getPropositionPowerThreshold",
      "getPropositionPowerThreshold():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPropositionPowerThreshold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPropositionPowerThreshold",
      "getPropositionPowerThreshold():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _propositionPowerThreshold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _propositionPower(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _assetVotingWeightProvider(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetAssetVotingWeightProviderCall extends ethereum.Call {
  get inputs(): SetAssetVotingWeightProviderCall__Inputs {
    return new SetAssetVotingWeightProviderCall__Inputs(this);
  }

  get outputs(): SetAssetVotingWeightProviderCall__Outputs {
    return new SetAssetVotingWeightProviderCall__Outputs(this);
  }
}

export class SetAssetVotingWeightProviderCall__Inputs {
  _call: SetAssetVotingWeightProviderCall;

  constructor(call: SetAssetVotingWeightProviderCall) {
    this._call = call;
  }

  get _assetVotingWeightProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAssetVotingWeightProviderCall__Outputs {
  _call: SetAssetVotingWeightProviderCall;

  constructor(call: SetAssetVotingWeightProviderCall) {
    this._call = call;
  }
}

export class SetPropositionPowerCall extends ethereum.Call {
  get inputs(): SetPropositionPowerCall__Inputs {
    return new SetPropositionPowerCall__Inputs(this);
  }

  get outputs(): SetPropositionPowerCall__Outputs {
    return new SetPropositionPowerCall__Outputs(this);
  }
}

export class SetPropositionPowerCall__Inputs {
  _call: SetPropositionPowerCall;

  constructor(call: SetPropositionPowerCall) {
    this._call = call;
  }

  get _propositionPower(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPropositionPowerCall__Outputs {
  _call: SetPropositionPowerCall;

  constructor(call: SetPropositionPowerCall) {
    this._call = call;
  }
}

export class SetPropositionPowerThresholdCall extends ethereum.Call {
  get inputs(): SetPropositionPowerThresholdCall__Inputs {
    return new SetPropositionPowerThresholdCall__Inputs(this);
  }

  get outputs(): SetPropositionPowerThresholdCall__Outputs {
    return new SetPropositionPowerThresholdCall__Outputs(this);
  }
}

export class SetPropositionPowerThresholdCall__Inputs {
  _call: SetPropositionPowerThresholdCall;

  constructor(call: SetPropositionPowerThresholdCall) {
    this._call = call;
  }

  get _propositionPowerThreshold(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPropositionPowerThresholdCall__Outputs {
  _call: SetPropositionPowerThresholdCall;

  constructor(call: SetPropositionPowerThresholdCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}