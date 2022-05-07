export {
  createClient,
  createClient as createWagmiClient,
  VueWagmiPlugin,
  VueWagmiPlugin as Plugin,
  useClient,
  useClient as useWagmiClient,
} from './plugin'
export type {
  ClientConfig,
  ClientConfig as WagmiClientConfig,
} from './plugin'

export {
  useAccount,
  useConnect,
  useDisconnect,
  useProvider,
  useSignMessage,
  useWebSocketProvider,
} from './composables'

export {
  Client,
  Connector,
  WagmiClient,
  alchemyRpcUrls,
  allChains,
  chain,
  chainId,
  createStorage,
  createWagmiStorage,
  defaultChains,
  defaultL2Chains,
  erc20ABI,
  erc721ABI,
  etherscanBlockExplorers,
  infuraRpcUrls,
} from '@wagmi/core'
export type {
  Chain,
  ConnectorData,
  ConnectorEvents,
  Storage,
  Unit,
  WagmiStorage,
} from '@wagmi/core'