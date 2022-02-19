import { Network } from '../../types';
import EthereumService from './ethereum';
import FantomService from './fantom';
import ArbitrumService from './arbitrum';

import { checkNetworkSupported } from '../../utils/network';
import { VaultService } from '.';

export const getVaultService = (network: Network): VaultService => {
    checkNetworkSupported(network);

    switch (network) {
        case Network.mainnet:
            return new EthereumService();
        case Network.fantom:
            return new FantomService();
        case Network.arbitrum:
            return new ArbitrumService();
        default:
            throw new Error(`Network - ${network} is not supported`);
    }
};
