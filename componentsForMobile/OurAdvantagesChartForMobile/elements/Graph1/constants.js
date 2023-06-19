import bnb_coin_icon from '~/assets/icons/out_advantages/binance_icon.svg';
import ada_coin_icon from '~/assets/icons/out_advantages/ada_icon.svg';
import cosmos_coin_icon from '~/assets/images/Advantages/logo_cosmos.png';
import eth_coin_icon from '~/assets/icons/out_advantages/eth_icon.svg';
import mkp_coin_icon from '~/assets/icons/out_advantages/mkr_icon.svg';
import dot_coin_icon from '~/assets/icons/out_advantages/dot_icon.svg';
import sol_coin_icon from '~/assets/icons/out_advantages/sol_icon.svg';

export const dynamicColumnsInTable = {
    0: ['Available', 'Uses a specific Haskell programming language', 'Funded by Binance', 'Moderate', 'Low', 'Moderate risk', 'Significant', 'Solidity', 'Strong'],
    1: ['Available', 'Academic research, partnerships', 'ICOin 2016-2017', 'Moderate', 'Low', 'Low risk', 'High', 'Plutus (Haskell)', 'Strong'],
    2: ['Available', 'Interoperability', 'ICO in 2017', 'Moderate', 'Low', 'Low risk', 'Notable', 'Go (Cosmos SDK)', 'Strong'],
    3: ['Available', 'Community-driven', 'ICO in 2014', 'Moderate', 'High', 'Low risk', 'Largest', 'Solidity', 'Strong'],
    4: ['Available', 'DeFi-focused', 'ICO in 2017 (BNB)', 'Inherits Ethereum', 'Inherits Ethereum', 'Inherits Ethereum', 'Significant', 'Solidity (Ethereum)', 'Strong'],
    5: ['Available', 'Interoperability, cross-chain', 'ICO in 2017', 'Moderate', 'Potentially low', 'Low risk', 'Notable', 'Rust, C++, etc.', 'Strong'],
    6: ['Available', 'High-performance', 'ICO in 2020', 'Moderate', 'Low', 'Moderate risk', 'Significant', 'Rust', 'Strong'],
};

export const generateTextCoinInSwitch = (coin)  => {
    switch (coin) {
        case 0:
            return 'BNB';
        case 1:
            return 'ADA';
        case 2:
            return 'Cosmos';
        case 3:
            return 'ETH';
        case 4:
            return 'MKP';
        case 5:
            return 'DOT';
        case 6:
            return 'SOL';
    }
};

export const generateIconInSwitch = (coin)  => {
    switch (coin) {
        case 0:
            return bnb_coin_icon;
        case 1:
            return ada_coin_icon;
        case 2:
            return cosmos_coin_icon;
        case 3:
            return eth_coin_icon;
        case 4:
            return mkp_coin_icon;
        case 5:
            return dot_coin_icon;
        case 6:
            return sol_coin_icon;
    }
};