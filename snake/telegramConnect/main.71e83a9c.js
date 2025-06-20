/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1201:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1281:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2038:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - Your Fun Builds Your Fortune","Connect":"Connect","Home":"Home","Arena":"Arena","Marketplace":"Marketplace","Community":"Community","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"Clubs","Governance":"Governance","Farm":"Farm","IGO":"IGO","Lottery":"Lottery","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"Crypto Arena","Your Fun Builds Your Fortune":"Your Fun Builds Your Fortune","Your Fun Builds Your":"Your Fun Builds Your","Fortune":"Fortune","Your Fun Builds":"Your Fun Builds","Your Fortune":"Your Fortune","The world\'s first casual competitive":"The world\'s first casual competitive","Make every leisure moment create value":"Make every leisure moment create value","Relax first":"Relax first","Fair competition":"Fair competition","Selected a variety of easy and casual games":"Selected a variety of easy and casual games","Quick match, quick battle start":"Quick match, quick battle start","A balancing mechanism based on skills rather than krypton gold":"A balancing mechanism based on skills rather than krypton gold","Charm Rankings Combine Game Performance and Leisure Index":"Charm Rankings Combine Game Performance and Leisure Index","Earnings":"Earnings","&":"&","Achievements":"Achievements","Earnings & Achievements":"Earnings & Achievements","Cross-game asset interoperability system":"Cross-game asset interoperability system","Real Earnings, Withdraw Anytime":"Real Earnings, Withdraw Anytime","Massive Reward Pool, Surprises Anytime":"Massive Reward Pool, Surprises Anytime","On-Chain Records of Your Gaming Highlights":"On-Chain Records of Your Gaming Highlights","Popular Games":"Popular Games","Decentralized":"Decentralized","Operation":"Operation","Decentralized operation":"Decentralized operation","Club-based operation model":"Club-based operation model","Low threshold to support project parties to enter":"Low threshold to support project parties to enter","Custom":"Custom","Games":"Games","Custom Games":"Custom Games","Community enjoys the greatest benefits of the platform":"Community enjoys the greatest benefits of the platform","Partner":"Partner","Join Now":"Join Now","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points","Support":"Support","Whitepaper":"Whitepaper","Projects":"Projects","Advertising":"Advertising","Developer":"Developer","Contact":"Contact","Customer Service":"Customer Service","FAQs":"FAQs","Suggestions & Feedback":"Suggestions & Feedback","Platform":"Platform","Terms of Service":"Terms of Service","Privacy Policy":"Privacy Policy","Career":"Career","App Download":"App Download","Follow us":"Follow us","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"The World\'s First Blockchain-Based Casual Competitive Gaming Platform","Your Fun first":"Your Fun first","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!","Please install a digital wallet extension or use a crypto wallet app.":"Please install a digital wallet extension or use a crypto wallet app.","More":"More","Log on":"Log on","Language":"Language","Signature login failed, please refresh the page and try again":"Signature login failed, please refresh the page and try again","The user declined to sign, login failed.":"The user declined to sign, login failed.","":""}');

/***/ }),

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lF: () => (/* binding */ encode)
/* harmony export */ });
/* unused harmony exports signArray, signTelegramArray, decodeCharCode, decode */
// web3
const signArray = _code => {
  let codes = _code.split("&"); // 分割各个签名组件
  // 分解签名组件
  let time = parseFloat(codes[0]); // 时间戳
  let randomHex = codes[1]; // 随机哈希
  let r = codes[2]; // 签名r值
  let s = codes[3]; // 签名s值
  let v = codes[4]; // 签名v值
  const loginData = {
    time,
    randomHex,
    r,
    s,
    v
  };
  return loginData;
};

// Telegram
const signTelegramArray = _code => {
  let codes = _code.split("&"); // 分割各个签名组件
  // 分解签名组件
  let timestamp = parseFloat(codes[0]); // 时间戳
  let randomHex = codes[1]; // 随机哈希
  let signatureHex = codes[2]; // 签名r值
  let domain = codes[3]; // 签名s值
  let publicKey = codes[4]; // 签名v值
  const loginData = {
    timestamp,
    randomHex,
    signatureHex,
    domain,
    publicKey
  };
  return loginData;
};
const decodeCharCode = params => {
  const b = eval("String.fromCharCode(" + params + ")");
  return b;
};

// 加密字符串
const encode = str => {
  //定义密钥，36个字母和数字
  const key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = key.length; //获取密钥的长度
  const a = key.split(""); //把密钥字符串转换为字符数组
  let s = "",
    b,
    b1,
    b2,
    b3; //定义临时变量

  for (let i = 0; i < str.length; i++) {
    //遍历字符串
    b = str.charCodeAt(i); //逐个提取每个字符，并获取Unicode编码值
    b1 = b % len; //求Unicode编码值得余数
    b = (b - b1) / len; //求最大倍数
    b2 = b % len; //求最大倍数的于是
    b = (b - b2) / len; //求最大倍数
    b3 = b % len; //求最大倍数的余数
    s += a[b3] + a[b2] + a[b1]; //根据余数值映射到密钥中对应下标位置的字符
  }
  return window.btoa(s); //返回这些映射的字符
};

// 解密字符串
const decode = str => {
  const strss = window.atob(str);
  //定义密钥，36个字母和数字
  const key = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = key.length; //获取密钥的长度
  let b,
    b1,
    b2,
    b3,
    d = 0,
    s; //定义临时变量
  s = new Array(Math.floor(strss.length / 3)); //计算加密字符串包含的字符数，并定义数组
  b = s.length; //获取数组的长度
  for (let i = 0; i < b; i++) {
    //以数组的长度循环次数，遍历加密字符串
    b1 = key.indexOf(strss.charAt(d)); //截取周期内第一个字符串，计算在密钥中的下标值
    d++;
    b2 = key.indexOf(strss.charAt(d)); //截取周期内第二个字符串，计算在密钥中的下标值
    d++;
    b3 = key.indexOf(strss.charAt(d)); //截取周期内第三个字符串，计算在密钥中的下标值
    d++;
    s[i] = b1 * len * len + b2 * len + b3; //利用下标值，反推被加密字符的Unicode编码值
  }
  b = decodeCharCode(s.join(","));
  return b; //返回被解密的字符串
};

/***/ }),

/***/ 4617:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 36 modules
var es = __webpack_require__(3701);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 4 modules
var chunk_GISSYJN5 = __webpack_require__(3166);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(706);
;// ./src/utils/wagmi.ts






// export const bsc = {
// 	id: 56,
// 	name: 'BSC',
// 	network: 'Bsc',
// 	// rpcUrls: {
// 	//   default: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	//   public: {
// 	// 	http: ['https://rpc.ankr.com/bsc'],
// 	//   },
// 	// },
// 	rpcUrls: {
// 		public: 'https://bsc-dataseed1.binance.org',
// 		default: 'https://bsc-dataseed1.binance.org',
// 	  },
// 	// rpcUrls: {
// 	// 	default: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	// 	public: {
// 	// 	  http: ['https://bsc-dataseed.binance.org/'],
// 	// 	},
// 	//   },
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'BNB',
// 	  decimals: 18,
// 	},
// }

// export const bscTest = {
// 	id: 97,
// 	name: 'BSCTest',
// 	network: 'BSCTest',
// 	rpcUrls: {
// 	  default: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	  public: {
// 		http: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
// 	  },
// 	},
// 	blockExplorers: {
// 	  default: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	  etherscan: {
// 		name: 'BscScan',
// 		url: 'https://testnet.bscscan.com',
// 	  },
// 	},
// 	nativeCurrency: {
// 	  name: 'BNB',
// 	  symbol: 'tBNB',
// 	  decimals: 18,
// 	},
// }

// const getNodeRealUrl = (networkName) => {
// 	let host = null

// 	switch (networkName) {
// 	  case 'homestead':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_ETH) {
// 		  host = `eth-mainnet.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_ETH}`
// 		}
// 		break
// 	  case 'rinkeby':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY) {
// 		  host = `eth-rinkeby.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_RINKEBY}`
// 		}
// 		break
// 	  case 'goerli':
// 		if (process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI) {
// 		  host = `eth-goerli.nodereal.io/v1/${process.env.NEXT_PUBLIC_NODE_REAL_API_GOERLI}`
// 		}
// 		break
// 	  default:
// 		host = null
// 	}

// 	if (!host) {
// 	  return null
// 	}

// 	const url = `https://${host}`
// 	return {
// 	  http: url,
// 	  webSocket: url.replace(/^http/i, 'wss').replace('.nodereal.io/v1', '.nodereal.io/ws/v1'),
// 	}
// }

// export const { provider, chains } = configureChains(CHAINS, [
// 	publicProvider()
// ])

// export const { chains, provider } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	// [publicProvider()],
// 	[
// 		jsonRpcProvider({
// 			rpc: (chain) => {
// 				// if (chain.id === bsc.id) {
// 				// 	console.log('kkkk')
// 				// 	return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 				// }
// 			//   if (!!process.env.NEXT_PUBLIC_NODE_PRODUCTION && chain.id === bsc.id) {
// 			// 	// return { http: process.env.NEXT_PUBLIC_NODE_PRODUCTION }
// 			//   }
// 			//   return getNodeRealUrl(chain.network) || { http: chain.rpcUrls.default }
// 			},
// 		}),
// 	],
// )

// const CHAINS = [
// 	bsc,
// ]

// export const { provider, chains } = configureChains(
// 	[
// 	  bsc,
// 	],
// 	[publicProvider()],
// )

const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]
// [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()],
);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 18 modules
var wagmi_dist = __webpack_require__(7102);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(5283);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(2635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(2389);
;// ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(2038),
  },
  zhCN: {
    translation: __webpack_require__(5372),
  },
  zhTW: {
    translation: __webpack_require__(8380),
  },
}
i18next/* default.use */.Ay.use(dist_es/* initReactI18next */.r9).init({
  resources,
  // fallbackLng: 'en',
  lng: "en",
  // debug: true,
  // interpolation: {
  //   escapeValue: false,
  // },
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/.store/jssha@3.3.1/node_modules/jssha/dist/sha.mjs
var sha = __webpack_require__(653);
// EXTERNAL MODULE: ./node_modules/@tonconnect/ui-react/lib/index.mjs + 3 modules
var lib = __webpack_require__(5646);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var core_dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(2505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 135 modules
var message = __webpack_require__(4053);
;// ./src/http/index.js


const instance = axios_default().create({
  timeout: 30000,
  baseURL: "" /* eslint-disable-line*/,
  headers: {
    Accept: "application/json;version=3.0;compress=false",
    "content-type": "application/json"
  }
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在拦截器里添加请求头的token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(async response => {
  // console.log(response);

  const list = {
    310: {
      msg: "无session信息!",
      path: "/"
    },
    405: {
      msg: "无权限访问或在其他地方登陆!",
      path: `/login`
    },
    406: {
      msg: "帐号在异地登录，请重新登录",
      path: `/login`
    },
    788: {
      msg: "用户登录超时或在其他地方登录，请重新登录",
      path: `/login`
    }
  };
  if (response.data.errors) {
    const res = list[response.data.errors[0].code];
    message/* default */.Ay.error(res.msg);
  }
  // 对响应数据做点什么
  if (response.request.responseType === "blob") return response; // 对下载做兼容
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  console.log("error------>", error);
  message/* default */.Ay.error(error.message || error);
  return Promise.reject(error);
});
/* harmony default export */ const http = ((/* unused pure expression or super */ null && (instance)));
// EXTERNAL MODULE: ./src/utils/encryption.ts
var encryption = __webpack_require__(4572);
;// ./src/components/Loader/Dots.tsx

const Dots = styled_components_browser_esm/* default */.Ay.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const Loader_Dots = ((/* unused pure expression or super */ null && (Dots)));
;// ./src/assets/images/home_pc_bg.png
const home_pc_bg_namespaceObject = __webpack_require__.p + "7a332764704a4bfd0f32.png";
;// ./src/assets/images/home_m_bg.png
const home_m_bg_namespaceObject = __webpack_require__.p + "a2e9c5c6ee162722d6a3.png";
;// ./src/assets/images/home_ico.png
const home_ico_namespaceObject = __webpack_require__.p + "9070236cac70f5c4d401.png";
;// ./src/pages/index/telegramSign.jsx
/* eslint-disable react-hooks/exhaustive-deps */














const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	background: url(${home_pc_bg_namespaceObject}) no-repeat;
	background-size: cover;
	height: 100vh;

	.home_img {
		img {
		    width: 200px;
		}
	}
	.home_title {
	    font-weight: bold;
	    margin-top: -30px;
	}
	.home_button {
	    margin-top: 50px;
	}
	.home_sings {
		margin-top: 20px;
    	font-weight: bold;
	}


	@media (max-width: 700px) {
		background: url(${home_m_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		height: 100vh;

		.home_img {
			img {
				width: 150px;
			}
		}
		.home_title {
			margin-top: -10px;
		}
	}

`;
function TelegramSign() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib/* TonConnectUIProvider */.Nl, {
    manifestUrl: "https://cryptoarena.io/tonconnect-manifest.json"
  }, /*#__PURE__*/react.createElement(WalletComponent, null)));
}
function WalletComponent() {
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [tonConnectUi] = (0,lib/* useTonConnectUI */.Lg)();
  const wallet = (0,lib/* useTonWallet */.c5)();
  const [randomHex] = (0,react.useState)(web3.utils.randomHex(32));
  const [queryString, setQueryString] = (0,react.useState)("");
  const signDataLogin = async account => {
    if (account) {
      setTimeout(() => {
        // 获取公钥
        const publicKey = account == null ? void 0 : account.publicKey;

        // 拼接钱包地址、随机哈希
        let loginInfoStr = publicKey + randomHex;
        // 使用SHA-256对登录信息进行哈希处理
        const shaObj = new sha/* default */.A("SHA-256", "TEXT", {
          encoding: "UTF8"
        });
        shaObj.update(loginInfoStr);
        // 获取十六进制格式的哈希值
        const hash = shaObj.getHash("HEX");
        const payload = {
          type: 'text',
          text: hash
        };

        // 对于 Telegram Wallet，必须引导跳转
        if (wallet.device.appName.toLowerCase().includes("telegram")) {
          setTimeout(() => {
            window.location.href = wallet.universalLink;
          }, 2000);
        }
        tonConnectUi.signData(payload).then(res => {
          console.log("签名成功===>", res);
          const _code = (0,encryption/* encode */.lF)(res.timestamp + "&" + randomHex + "&" + res.signature + "&" + res.domain + "&" + publicKey + "&" + (account == null ? void 0 : account.address));
          localStorage.setItem("TOX-COOKIE-CODE_Telegram", _code);
          setTimeout(() => {
            if (queryString) {
              window.location.href = "/" + queryString;
            } else {
              window.location.href = "/";
            }
          }, 200);
        });
      }, 200);
    }
  };
  (0,react.useEffect)(() => {
    if (!wallet) {
      // 自动打开连接钱包UI
      tonConnectUi.connectWallet();
    }
  }, [wallet, tonConnectUi]);
  (0,react.useEffect)(() => {
    signDataLogin(wallet && wallet.account);
  }, [wallet]);
  (0,react.useEffect)(() => {
    // 带问号，例如：?scene=startup&referral=xxx&lan=zh-cn
    const queryssString = window.location.search;
    setQueryString(queryssString);
  }, []);
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "home_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_ico_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "home_title"
  }, "Play Together, Grow Richer"), /*#__PURE__*/react.createElement("div", {
    className: "home_button"
  }, /*#__PURE__*/react.createElement(lib/* TonConnectButton */.MJ, null)));
}
/* harmony default export */ const telegramSign = (TelegramSign);
;// ./src/pages/index/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */


function Index() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(telegramSign, null));
}
/* harmony default export */ const index = (Index);
;// ./src/pages/app.jsx









const metaMaskConnector = new metaMask/* MetaMaskConnector */.j({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */.s({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const app_client = (0,wagmi_dist/* createClient */.UU)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  const [ready, setReady] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.qZ, {
    client: app_client,
    className: `${"Index"}`
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.I9, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8388);
// EXTERNAL MODULE: ./public/css/common.css
var common = __webpack_require__(1201);
;// ./src/index.jsx






if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n); // Fallback to Number (inaccurate for big integers!)
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 乐趣铸就财富","Connect":"连接钱包","Home":"首页","Arena":"竞技场","Marketplace":"市场","Community":"社区","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱乐部","Governance":"社区治理","Farm":"农场","IGO":"IGO","Lottery":"抽奖","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首个休闲竞技区块链游戏平台","Your Fun Builds Your Fortune":"你的乐趣成就你的财富","Your Fun Builds Your":"你的乐趣成就你的","Fortune":"财富","Your Fun Builds":"你的乐趣成就","Your Fortune":"你的财富","The world\'s first casual competitive":"世界上第一个休闲竞技","Make every leisure moment create value":"让每一个休闲时刻都创造价值","Relax first":"休闲优先","Fair competition":"公平竞技","Selected a variety of easy and casual games":"精选多款轻松休闲游戏","Quick match, quick battle start":"快速匹配，快速启动战斗","A balancing mechanism based on skills rather than krypton gold":"基于技能而非氪金的平衡机制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜结合游戏表现和休闲指数","Earnings":"收益","&":"与","Achievements":"成就","Earnings & Achievements":"收益与成就","Cross-game asset interoperability system":"跨游戏资产互通系统","Real Earnings, Withdraw Anytime":"真实收益，随时提取","Massive Reward Pool, Surprises Anytime":"超高奖励池，惊喜随时到来","On-Chain Records of Your Gaming Highlights":"链上记录您的游戏高光时刻","Popular Games":"流行游戏","Decentralized":"去中心化","Operation":"运营","Decentralized operation":"去中心化运营","Club-based operation model":"以俱乐部为主的运营模式","Low threshold to support project parties to enter":"低门槛支持项目方入驻","Custom":"自定义","Games":"游戏","Custom Games":"自定义游戏","Community enjoys the greatest benefits of the platform":"社区享有平台最大的收益","Partner":"合作伙伴","Join Now":"现在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我们相信最好的收益来自于真正的游戏乐趣。连接钱包，开始您的轻松创收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用户注册即送‘休闲新手礼包’，包含：免费的小蛇 + 游戏积分","Support":"支持","Whitepaper":"白皮书","Projects":"项目","Advertising":"广告","Developer":"开发者","Contact":"联系","Customer Service":"客户服务","FAQs":"常见问题","Suggestions & Feedback":"建议与反馈","Platform":"平台","Terms of Service":"服务条款","Privacy Policy":"隐私协议","Career":"工作机会","App Download":"App下载","Follow us":"关注我们","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首个区块链休闲竞技游戏平台","Your Fun first":"乐趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"实时贪吃蛇大作战，吞噬对手，赚取加密奖励！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸弹人风暴：组队爆破！你的炸弹，就是最好的投资！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方块战争：消除赢积分，连击夺NFT，你的每个操作都值钱！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像素鸟生死竞速：全球实时排行榜，每秒链上结算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大乱斗：消除赚糖币，连击抢对手糖果，你的甜蜜就是你的财富！","Please install a digital wallet extension or use a crypto wallet app.":"请安装数字钱包插件或者使用加密钱包App","More":"更多","Log on":"登录","Language":"语言","Signature login failed, please refresh the page and try again":"签名登录失败，请刷新页面重试","The user declined to sign, login failed.":"用户拒绝签名，登录失败","":""}');

/***/ }),

/***/ 6443:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7790:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8380:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 樂趣鑄就財富","Connect":"連接錢包","Home":"首頁","Arena":"競技場","Marketplace":"市場","Community":"社區","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱樂部","Governance":"社區治理","Farm":"農場","IGO":"IGO","Lottery":"抽獎","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首個休閒競技區塊鏈遊戲平台","Your Fun Builds Your Fortune":"你的樂趣成就你的財富","Your Fun Builds Your":"你的樂趣成就你的","Fortune":"財富","Your Fun Builds":"你的樂趣成就","Your Fortune":"你的財富","The world\'s first casual competitive":"世界上第一個休閒競技","Make every leisure moment create value":"讓每一個休閒時刻都創造價值","Relax first":"休閒優先","Fair competition":"公平競技","Selected a variety of easy and casual games":"精選多款輕鬆休閒遊戲","Quick match, quick battle start":"快速匹配，快速啟動戰鬥","A balancing mechanism based on skills rather than krypton gold":"基於技能而非氪金的平衡機制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜結合遊戲表現和休閒指數","Earnings":"收益","&":"與","Achievements":"成就","Earnings & Achievements":"收益與成就","Cross-game asset interoperability system":"跨遊戲資產互通系統","Real Earnings, Withdraw Anytime":"真實收益，隨時提取","Massive Reward Pool, Surprises Anytime":"超高獎勵池，驚喜隨時到來","On-Chain Records of Your Gaming Highlights":"鏈上記錄您的遊戲高光時刻","Popular Games":"流行遊戲","Decentralized":"去中心化","Operation":"運營","Decentralized operation":"去中心化運營","Club-based operation model":"以俱樂部為主的運營模式","Low threshold to support project parties to enter":"低門檻支持項目方入駐","Custom":"自定義","Games":"遊戲","Custom Games":"自定義遊戲","Community enjoys the greatest benefits of the platform":"社區享有平台最大的收益","Partner":"合作夥伴","Join Now":"現在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我們相信最好的收益來自於真正的遊戲樂趣。連接錢包，開始您的輕鬆創收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用戶註冊即送『休閒新手禮包』，包含：免費的小蛇 + 遊戲積分","Support":"支持","Whitepaper":"白皮書","Projects":"項目","Advertising":"廣告","Developer":"開發者","Contact":"聯繫","Customer Service":"客戶服務","FAQs":"常見問題","Suggestions & Feedback":"建議與反饋","Platform":"平台","Terms of Service":"服務條款","Privacy Policy":"隱私協議","Career":"工作機會","App Download":"App下載","Follow us":"關注我們","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首個區塊鏈休閒競技遊戲平台","Your Fun first":"樂趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"實时貪吃蛇大作戰，吞噬對手，賺取加密獎勵！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸彈人風暴：組隊爆破！ 你的炸彈，就是最好的投資！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方塊戰爭：消除贏積分，連擊奪NFT，你的每個操作都值錢！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像數鳥生死競速：全球實时排行榜，每秒鏈上結算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大亂鬥：消除賺糖幣，連擊搶對手糖果，你的甜蜜就是你的財富！","Please install a digital wallet extension or use a crypto wallet app.":"請安裝數字錢包挿件或者使用加密錢包App","More":"更多","Log on":"登录","Language":"語言","Signature login failed, please refresh the page and try again":"簽名登入失敗，請刷新頁面重試","The user declined to sign, login failed.":"用戶拒絕簽名，登录失敗","":""}');

/***/ }),

/***/ 8388:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/telegramConnect/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgames"] = self["webpackChunkgames"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [140], () => (__webpack_require__(4617)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;