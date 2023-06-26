import bnb_coin_icon from '~/assets/icons/out_advantages/binance_icon.svg';
import ada_coin_icon from '~/assets/icons/out_advantages/ada_icon.svg';
import cosmos_coin_icon from '~/assets/icons/out_advantages/cosmos_icon.svg';
import eth_coin_icon from '~/assets/icons/out_advantages/eth_icon.svg';
import mkp_coin_icon from '~/assets/icons/out_advantages/mkr_icon.svg';
import dot_coin_icon from '~/assets/icons/out_advantages/dot_icon.svg';
import sol_coin_icon from '~/assets/icons/out_advantages/sol_icon.svg';

export const dynamicColumnsInTable = {
    0: ['Available', 'Depends on Binance Chain', 'High', 'Moderate', 'Web3.js/ethers.js', 'Growing', 'BNB (170.5M)', 'Required', 'Strong', 'Proof of Staked Authority (PoSA)', 
    'EVM-compatible', 'Solidity, Vyper', 'Solidity, Vyper', 'High throughput, low fees, active ecosystem', 'Centralization concerns, potential security risks'],
    1: ['Available', 'Independent, High', 'Low', 'Cardano-wallet,cardano-graphql', 'Fully launched', 'ADA (45B) ', 'Required', 'Strong', 'Ouroboros', 'IELE', 'Plutus (Marlow)', 'Haskell, Plutus, Marlowe', 'Scalability,security, sustainability', 'Scalability challenges, slower development', 'Scalability challenges, slower development'],
    2: ['Available', 'Interoperability', 'High', 'Moderate', 'Tendermint WebSocket JSON-RPC', 'Mature', 'ATOM (Inflationary)', 'Required', 'Strong', 'Tendermint', '-', '-', '-', 'Interoperability, scalability, flexibility', 'Dependency on hub validators, potential security risks'],
    3: ['Available', 'Interoperability', 'Moderate', 'Moderate', 'Web3.js/ethers.js  ', 'Most mature', 'ETH (Unlimited)', 'Required', 'Strong', 'Proof of Stake (PoS)', 'EVM-compatible', 'Solidity, Vyper', 'Solidity, Vyper', 'Largest smart contract platform, active ecosystem', 'Scalability challenges, high fees, environmental impact'],
    4: ['Available', 'Built on Ethereum', 'Inherits Ethereum', 'Inherits Ethereum', 'Inherits Ethereum', 'Mature', 'MKR(Governance token)', 'Required', 'Strong', '-', '-', '-', '-', 'Decentralized autonomous organization (DAO) platform', 'Complexity and learning curve, potential security risks'],
    5: ['Available', 'Independent', 'High', 'Moderate', 'Polkadot.js', 'Growing', 'DOT (1B)', 'Required', 'Strong', 'Nominated Proof of Stake (NPoS)', 'EVM-compatible', 'Ink, Rust', 'Rust, C++, Substrate', 'Interoperability, scalability, governance', 'Complexity and learning curve, potential security risks'],
    6: ['Available', 'Independent', 'High', 'Moderate', 'WebSocket JSON-RPC', 'Growing', 'SOL (Inflationary)', 'Required', 'Strong', 'Proof of History (PoH)', 'WebAssembly (Wasm)', 'IRust,C, C++, AssemblyScript', 'IRust,C, C++, AssemblyScript', 'High throughput, low fees, scalability', 'Complexity and learning curve,potential security risks'],
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