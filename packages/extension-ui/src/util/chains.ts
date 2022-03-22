// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataDefBase } from '@polkadot/extension-inject/types';

import { selectableNetworks } from '@polkadot/networks';

// const hashes: MetadataDefBase[] =

// hashes.unshift({
//   chain: 'Selendra',
//   genesisHash: '0x8dbbe8a37d4c62d14835ba0f7e3baf70cf4b93a3e98c53d69544a7b9ea42d0df',
//   icon: 'substrate',
//   ss58Format: 204
// });

const hashes: MetadataDefBase[] = [
  {
    chain: 'Selendra',
    genesisHash: '0x8dbbe8a37d4c62d14835ba0f7e3baf70cf4b93a3e98c53d69544a7b9ea42d0df',
    icon: 'substrate',
    ss58Format: 204
  },
  ...selectableNetworks.filter(({ genesisHash }) => !!genesisHash.length).map((network) => ({
    chain: network.displayName,
    genesisHash: network.genesisHash[0],
    icon: network.icon,
    ss58Format: network.prefix
  }))
];

export default hashes;
