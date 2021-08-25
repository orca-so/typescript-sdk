import { Keypair, PublicKey, Signer } from "@solana/web3.js";

type _Owner = Keypair | PublicKey;

export class Owner {
  private readonly _owner: _Owner;

  constructor(owner: _Owner) {
    this._owner = owner;
  }

  getPublicKey(): PublicKey {
    if (Owner.isKeyPair(this._owner)) {
      return this._owner.publicKey;
    }

    return this._owner;
  }

  getSigner(): Keypair | PublicKey {
    return this._owner;
  }

  static isKeyPair(owner: _Owner): owner is Keypair {
    return (owner as Keypair).secretKey !== undefined;
  }

  static isPublicKey(owner: _Owner): owner is PublicKey {
    return !Owner.isPublicKey(owner);
  }
}

export function onlyKeyPairs(owners: _Owner[]): owners is Keypair[] {
  return !owners.some(Owner.isPublicKey);
}

export function onlyPublicKeys(owners: _Owner[]): owners is PublicKey[] {
  return !owners.some(Owner.isKeyPair);
}
