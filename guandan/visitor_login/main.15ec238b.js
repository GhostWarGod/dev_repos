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
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Play Together, Grow Richer":"Play Together, Grow Richer","Visitor Login":"Visitor Login","Welcome to CryptoArena":"Welcome to CryptoArena","enerating your wallet":"enerating your wallet","Your wallet is ready! Let the game begin.":"Your wallet is ready! Let the game begin.","Your wallet is ready.":"Your wallet is ready.","Let the game begin.":"Let the game begin.","Welcome back.":"Welcome back.","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.","Backup":"Backup","Copy mnemonic":"Copy mnemonic","Enter Game":"Enter Game","Copy successful, please paste and save in a timely manner!":"Copy successful, please paste and save in a timely manner!","Click to download wallet":"Click to download wallet","Wallet address copied successfully!":"Wallet address copied successfully!","Wallet Address:":"Wallet Address:","Connect with CryptoArena":"Connect with CryptoArena","More Wallet Options":"More Wallet Options","By connecting your wallet and using CryptoArena, you agree to our":"By connecting your wallet and using CryptoArena, you agree to our","Terms of Service":"Terms of Service","and":"and","Privacy Agreement.":"Privacy Agreement.","":""}');

/***/ }),

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D4: () => (/* binding */ decode),
/* harmony export */   as: () => (/* binding */ signTelegramArray),
/* harmony export */   lF: () => (/* binding */ encode)
/* harmony export */ });
/* unused harmony exports signArray, decodeCharCode, signWeb3Array */
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
  let type = codes[6]; // web3 type=1, telegram type=2, telegram evm type=3

  if (type === "2") {
    // telegram Login
    let timestamp = parseFloat(codes[0]); // 时间戳
    let randomHex = codes[1]; // 随机哈希
    let signatureHex = codes[2]; // 签名值
    let domain = codes[3]; // 域名
    let publicKey = codes[4]; // 公钥
    let address = codes[5];
    const loginData = {
      timestamp,
      randomHex,
      signatureHex,
      domain,
      publicKey,
      address,
      type
    };
    return loginData;
  } else {
    // Visitor Login
    let time = parseFloat(codes[0]); // 时间戳
    let randomHex = codes[1]; // 随机哈希
    let r = codes[2]; // 签名r值
    let s = codes[3]; // 签名s值
    let v = codes[4]; // 签名v值
    let address = codes[5];
    const loginData = {
      time,
      randomHex,
      r,
      s,
      v,
      address,
      type
    };
    return loginData;
  }
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

// Telegram web3
const signWeb3Array = _code => {
  let codes = _code.split("&"); // 分割各个签名组件
  // 分解签名组件
  let time = parseFloat(codes[0]); // 时间戳
  let randomHex = codes[1]; // 随机哈希
  let r = codes[2]; // 签名r值
  let s = codes[3]; // 签名s值
  let v = codes[4]; // 签名v值
  let address = codes[5];
  let type = codes[6]; // 状态，是否保存token，1:登录后不把token保存本地
  const loginData = {
    time,
    randomHex,
    r,
    s,
    v,
    address,
    type
  };
  return loginData;
};

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Play Together, Grow Richer":"一起玩，致富","Visitor Login":"访客登录","Welcome to CryptoArena":"欢迎来到CryptoArena","enerating your wallet":"生成您的钱包","Your wallet is ready! Let the game begin.":"你的钱包准备好了！让游戏开始吧","Your wallet is ready.":"您的钱包准备好了.","Let the game begin.":"让游戏开始吧.","Welcome back.":"欢迎回来.","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"提醒：一定要备份您的助记符短语，以保护你的资产安全","Backup":"备份","Copy mnemonic":"复制助记词","Enter Game":"进入游戏","Copy successful, please paste and save in a timely manner!":"复制成功，请及时粘贴保存!","Click to download wallet":"点击下载钱包","Wallet address copied successfully!":"钱包地址复制成功!","Wallet Address:":"钱包地址：","Connect with CryptoArena":"与CryptoArena连接","More Wallet Options":"更多钱包选项","By connecting your wallet and using CryptoArena, you agree to our":"连接钱包并使用 CryptoArena，即表示您同意我们的","Terms of Service":"服务条款","and":"和","Privacy Agreement.":"隐私协议。","":""}');

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
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Play Together, Grow Richer":"一起玩，致富","Visitor Login":"訪客登入","Welcome to CryptoArena":"歡迎來到CryptoArena","enerating your wallet":"生成您的錢包","Your wallet is ready! Let the game begin.":"你的錢包準備好了！ 讓遊戲開始吧","Your wallet is ready.":"您的錢包準備好了.","Let the game begin.":"讓遊戲開始吧.","Welcome back.":"歡迎回來.","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"提醒：一定要備份您的助記符短語，以保護你的資產安全","Backup":"备份","Copy mnemonic":"複製助記詞","Enter Game":"進入遊戲","Copy successful, please paste and save in a timely manner!":"複製成功，請及時粘貼保存！","Click to download wallet":"點擊下載錢包","Wallet address copied successfully!":"錢包地址複製成功!","Wallet Address:":"錢包地址：","Connect with CryptoArena":"與CryptoArena連接","More Wallet Options":"更多錢包選項","By connecting your wallet and using CryptoArena, you agree to our":"連接錢包並使用CryptoArena，即表示您同意我們的","Terms of Service":"服務條款","and":"和","Privacy Agreement.":"隱私協定。","":""}');

/***/ }),

/***/ 8388:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8740:
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
var es = __webpack_require__(2389);
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
i18next/* default.use */.Ay.use(es/* initReactI18next */.r9).init({
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
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 184 modules
var message = __webpack_require__(305);
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
/* harmony default export */ const http = (instance);
// EXTERNAL MODULE: ./src/utils/encryption.ts
var encryption = __webpack_require__(4572);
;// ./src/assets/images/home_pc_bg.png
const home_pc_bg_namespaceObject = __webpack_require__.p + "7e4188f163113d4e90f1.png";
;// ./src/assets/images/home_m_bg.png
const home_m_bg_namespaceObject = __webpack_require__.p + "7e4188f163113d4e90f1.png";
;// ./src/assets/images/home_ico.png
const home_ico_namespaceObject = __webpack_require__.p + "5d976772d6ba22fc61eb.png";
;// ./src/assets/images/wall_1.png
const wall_1_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/wall_2.png
const wall_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAKkUlEQVR4AeRZCXhU1RX+38wkkwwBgpAAFQKJCAgWBBRKUIiofFAoiyzBAm00AhVRRKgb9rMfSgsqVVqBtoAgRNkK0iqYIgiiGFa7sYrsWwyGQBKZTJZ5/c887ryXZGYSkvCFT/PNfffcc88975571vtiw/fk74chyIQJWVGdk4qTm7TWV8TGe4/WjdPzolro313vxvfkN4j3nmh6q76mTbfi0UmD9eiKDCeoRlp00FOX/j3m0L799hV5BUh2e7UEaIjSANf1bnxPnWKv1iLPgwePn7Av27sHhxu30SeFEqa8IEm6IzpBX5iZhYWaAzc7XYBNC8Xi+s1pfK8zgvztiM3Nx5tRcfqqLl107oi4Mr9ygtQ7ggUeD1LDnWUoa3nocABeL4bvO4+VgbZSSpCW7fQUTyFSZFEg4trG2e0Q6xjQKL5kStm92BTitdf0Otk5mBkeUHGKqvZ7OeS8AttLnfrpMdbd+AVZlY7BhR40tk7eqLAG1M0+h5HW/fkFOXcGQxxR1qkbFw4LB/JykWzdoV+QkiK9m42iWietsK5bR7UPlwBtrLvwC5JXrDWyTlhhbxHQpR1QLwxwXwY8l9jyGUVqUTi9BJHWPfoFYcwOqg+GPSR2A04dBg5/CWxcD7w6A+iXCDSNAvRioECEywMKKXRtaM8viFW6srDDCSxOA0qoz4R4oFcPYNJ4YPVyCrYPuPA1kPEpMO9NYNwooMePARc5+7X3HYW9ztrj68puO/D4Ik/8vbWB5yIiaHodgdQxwB9fBdI/BM4eAf63E/jbCmDGS8D9XYHGdQAxUw95eai9Ei9QU9qrtCDh3MS7SwMLEggryatta+BnfYGpE4H3VwNH9gNZFPCzTyjwbGDo/cCdrQEGIRQo37tSNeEqLQh9CFu2A4dpRoE2fjkXmLsA2PsfIPtiIAoD52LC7doZGJ8CLH0b2PIxcJ7CfUneYqrTpwFJnI8hXUkhjMBC7YmfhtJepQWRbTgYJxYtEah8q18P+MmdQPJwoMmtQCtGueEP8eT/CqzfCHzFA5DNlF8JhIUBt5N+YD/gWda4H7wPHD0AfPMVBeXa2TOBwb2Bzq0AB33NF1ioQSsvm3VQERxGp1+0zHB6RXsxR0FAl050+gw6exeeMvHpXwC/fgF4cATQnj4Sx8jf56dA6q+Ad94D/ktTK+SpmxxKQ1FRQCLXTRwLpPEAP91MvtTe7s+BVVxvpb4mQWRhPvPHCp6YwNJ27gVmzBLIaDENgc3pwKPUhji0sy7g5LUokhrLZWjO4OaXM3yPm0j/uBuIuQW4rQPwEAPFvEXABpra0WPB/cRJh+p4OzCIB2K80XhesyBhPKU0i9P3o8Mu4fixJ4BihmdhayfXOX8AXn8FKMgmxpKhxNccdsBJwSLqc8N2Rjj61wcM35OfAYYMB9rSRFu2BQYPAybTZ9JYuB84BBQxX5FbwB9fGRAfFCllzKbPgP1krIiengospOrvfYBR6VuFBZ6cAHzEUBxBTXhp2+ZMecjGnVi1l+OhZncD8xfTFB8DOnYHYhNooncAo37J9/HwrFy43DqsHCwJMo3JUFEPGwhE1gH+xcyfeA8gp6fm7usJfMHTjuPpSxRS+Mr0or1wmpJoL1LWc7enmYPWbQEen1yaA6dKIyozCmMCfFucnglN6GPoFwP6EKKZfOMG7k4C1tEPiPH9WtEPtm8DetJkigp8qGo9xHSdNHErkyoJIgwuMfyttDj9xCeBQsZ7cYdihulhdPYZDJtCK60BHf6jf/AkaRZSuvADg6BrrFVZkHBGoyWMMmoniTzt+BZXR/QH103AdGbv1HGA26KF1xnh5r/BEM6DuEpdpa7QwlMYVFkQOfktO1Aq0098nFphgSiMpTnpNyvo7D3vBc6cE4zRHmVWl4xej2+vKAgYKyxPvvgKI+GLT1lwBMmKzyr+HHTEZZbElDwEsGulmdlJc+A00J1BQBKgmu3KpClBoJk4cYikqOillxJF40GtYTh+8XnBmK1agojTL3iHuYCmJCxjGwEjBsOfTwQnze4ALjPHJPYCVq4RjNHimgN7WAn0Y2QrYpAwsIGfcoWQ6nn71vLJUFZUSxBhcImlyFqaj8DSUlIoCLO/wGWbjX416mHgty+bM1E0Pyn1J48HrpBXoCAgYbs9hd7GqllqMnO1CVVbkHBm6IWsehXLXolA85vVqExPzUkQmPUWNfdzIJ9moih+Nx1Y8hfAyyyvcCKUh4cyoj8g4ftHTfwzWMBEaY6Aaguikdsn24EjrI8I+n5PsYIttGzSh7Q8whie19NEetDUzpw1J0aPBLaxMKzPfCSm5GaV8DJ9YTEPKozmKZRSQU+awjD+tIzMVm1BhJWNL1m+SiCjidOLgMYo8FOCwNEs4K4ewC4WnoqqM0uQXTyYrm2AtbyMPcNNq7mzmcB9TLxvzQUiayohKubSywnPmQ8UsaaSsTj98EHw3fFlHKxJfSWKS2KNtthSOzWlCW3ZBN/tUq2VXLSKgWI8664dDBCZLOfVnPQ1ohFhlM+svoEvF1haCjN4EXECV9QcDMFjWRlMfS44ZSTLosnMUyOHUoudqBGOrdQ1Johk+gW8DSrmvZk3WrFaVeOQvQQBljDzWEEPHAbItTkkfYDJGhNEKtWPWd4fPWG+JfURIJTTm5QG5OAp/5POfpBXXANjPiUo7NjDyPYukDKWZf1d5pxANSaIjxmjzVJLph+TjGv+3KOzEmjDu7nwkzblWeCWdkA8b5G9eIkb/wSwmjfQ4xdk1mx+QSLtuqQjc6YKkDj9n1lIqptibAwwlFdS+X5VWXZNGwANok3qjfS7C/xEFMlkKldmuZvIpyZN03n1Mun8gjjt2KPTVs2pqkGX+CkoneahVqfQvIqtSU5NBOkbNTAnJJdkkp+JMSGHBkvmgpkQ68Zq6wopuUlaNUgy/Rx+OlWr+yQB8fFqFLqXc7wp2kfje5xj3sgJcAhFLDJdUTqDsY/M9/BrZNAArHWGgRdJVOtPnP5z3rVPsuJVjB7+BVBUiUMSDcRZhD5xCrCz2FR8VE+BPc1b2HhHVRiYGpn5vJYTE+2dXlEVai4NDukasJTffBXFGN4WZZNqHKwvYQXc4Q5z9jgFkXrLxBhJ1hWO2RkfapbiBqYgQnzsoP0NOlJ6ZV4q9MGa/B9yHgvAgqvuKMWelPcV8uXnnoQ4k+sxCeVOcyx1lrcYu3JOatNMrAH5TcsYAs0SMIKX+w2hviEp2lD9RTrpZn5wUDSjRwHFrGTVOFBPk4H/ukyCTPqI1HEEfeUOg1FGwzgwDgqmdCsnyOHtWl7eKa1/w3re35QUILfs3bj08uAjyfRz/2TO9+0NNG9mjgNBJfwGHMPLmZrLpJ/p9BEeqrtOhHdW/+645+wujRddRWH25QRRU2cP2l/p+wDaxrfE1AibnmG36d/yxNyVbbRt99adcJ8+A1q+0R5JgZs+GJSHKwLu6PoGLfeRnZWN3U2beF9ofxvaXvja/tzq1RrF4kyAX1BBhHZtmnb+0E5t9oXjtsRLx20x+Sc117U0d5bmimuuuTTNaNOmaq4C4oLyOKO5IpwGLdc0ytiqdT3xb/vv927SxO1lS0FbSEGCrroBJ743gvwfAAD//zCxyYgAAAAGSURBVAMA9rR9klOogQoAAAAASUVORK5CYII=";
;// ./src/assets/images/wall_3.png
const wall_3_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/wall_4.png
const wall_4_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/home_tou.png
const home_tou_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/home_buttom.png
const home_buttom_namespaceObject = "data:image/png;base64,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";
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

	.games_maxwidth {
	    width: 90%;
		max-width: 750px;
    	margin: auto;
	}
	.home_img {
		text-align: center;
		img {
		    width: 70px;
			margin-bottom: 20px;
		}
	}
	.games_conter {
	    width: 100%;
    	text-align: center;
		margin-bottom: 30px;
		span {
			display: block;
			font-size: 22px;
			font-weight: bold;
			line-height: 25px;
		}
	}
	.home_wall_conter {
		background: #242836;
		border-radius: 5px;
		margin-bottom: 10px;
		a {
			display: flex;
			align-items: center;
			width: 100%;
			height: 50px;
			padding: 0px 15px;
			color: #fff;
			text-decoration: none;
		}
		img {
		    width: 25px;
			margin-right: 10px;
		}
		span {
			display: inline-block;
			color: #fff;
			font-size: 14px;
			font-weight: bold;
		}
	}
	.home_visitor_conter {
		margin-top: 25px;
		a {
			justify-content: space-between;
    		padding: 0px 0px 0px 15px !important;
		}
		img{
			width: 70px !important;
    		margin-right: 0px !important;
		}
	}
	.home_sings {
		margin-top: 20px;
    	font-weight: bold;
	}
	.home_button_flex {
		position: relative;
		margin-bottom: 10px;
		span {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0px;
			left: 45px;
			height: 100%;
			font-size: 14px;
			font-weight: bold;
		}
	}
	#ton-connect-button {
		width: 100% !important;
		button {
			width: 100%;
			height: 50px;
			border-radius: 5px;
			padding: 0 15px;
			background-color: #242836;
			svg {
				margin-right: 5px;
			}
			div {
				visibility: hidden;
			}
		}
	}
	.home_login {
	    width: 165px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		border-radius: 33px;
		border: 2px solid #0098E8;
		color: #13AEFF;
		font-size: 15px;
		font-weight: bold;
		cursor: pointer;
		a {
			color: #13AEFF;
			text-decoration: none;
		}
	}
	.games_buttom {
		position: relative;
		margin-left: -5px;
    	margin-right: -5px;
		margin-top: 20px;
		cursor: pointer;
		img {
			width: 100%;
		}
		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: absolute;
			left: 0px;
			top: 0px;
			padding: 0 20px;
			width: 100%;
			height: 100%;
			color: #141722;
			font-size: 20px;
			font-weight: bold;
			img {
				width: 14px;
			}
		}
	}
	.home_footer {
		line-height: 15px;
		text-align: center;
		margin-top: 30px;
		span {
		    font-size: 12px;
    		font-weight: 500;
		}
		a {
		    font-size: 12px;
			font-weight: 500;
			color: #FFE81A;
			padding: 0 5px;
			opacity: .8;
		}
	}
`;
function TelegramSign() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib/* TonConnectUIProvider */.Nl, {
    manifestUrl: "https://cryptoarena.io/tonconnect-manifest.json"
  }, /*#__PURE__*/react.createElement(WalletComponent, null)));
}
function WalletComponent() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  const urlParams = new URLSearchParams(window.location.search);
  const lan = urlParams.get('lan');
  (0,react.useEffect)(() => {
    if (lan === "zh-cn") {
      i18n.changeLanguage("zhCN");
    } else if (lan === "zh") {
      i18n.changeLanguage("zhTW");
    } else {
      i18n.changeLanguage("en");
    }
  }, [lan]);
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [tonConnectUi] = (0,lib/* useTonConnectUI */.Lg)();
  const wallet = (0,lib/* useTonWallet */.c5)();
  const [randomHex] = (0,react.useState)(web3.utils.randomHex(32));
  const [queryString, setQueryString] = (0,react.useState)("");
  const [createWallet, setCreateWallet] = (0,react.useState)(false);
  const [buttonText, setButtonText] = (0,react.useState)("");
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
          const _code = (0,encryption/* encode */.lF)(res.timestamp + "&" + randomHex + "&" + res.signature + "&" + res.domain + "&" + publicKey + "&" + (account == null ? void 0 : account.address) + "&" + "2");
          localStorage.setItem("TOX-COOKIE-CODE_Telegram", _code);
          setTimeout(() => {
            if (document.referrer) {
              window.location.href = document.referrer;
            } else {
              window.location.href = "/";
            }
          }, 200);

          // setTimeout(() => {
          // 	if (queryString) {
          // 		window.location.href = "/" + queryString
          // 	} else {
          // 		window.location.href = "/"
          // 	}
          // }, 200);
        });
      }, 200);
    }
  };
  const detectWalletType = () => {
    if (typeof window.ton !== 'undefined' || typeof window.tonConnect !== 'undefined') {
      return 'telegram';
    }
    if (typeof window.ethereum !== 'undefined') {
      if (window.ethereum.isMetaMask) return 'metamask';
      return 'ethereum'; // 其他 EVM 钱包
    }
    return 'unknown';
  };
  (0,react.useEffect)(() => {
    signDataLogin(wallet && wallet.account);
  }, [wallet]);
  (0,react.useEffect)(() => {
    // 带问号，例如：?scene=startup&referral=xxx&lan=zh-cn
    const queryssString = window.location.search;
    setQueryString(queryssString);
    const evm_Wallet = localStorage.getItem("TOX_Telegram_Evm_Wallet");
    if (evm_Wallet) {
      setCreateWallet(false);
    } else {
      setCreateWallet(true);
    }
    // const walletType = detectWalletType();
  }, []);
  (0,react.useEffect)(() => {
    const timer = setTimeout(() => {
      setButtonText("Telegram Connect Wallet");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "games_maxwidth"
  }, /*#__PURE__*/react.createElement("div", {
    className: "home_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_ico_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Connect with CryptoArena'))), /*#__PURE__*/react.createElement("div", {
    className: "home_wall_conter"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://metamask.io/en-GB/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: wall_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, "MetaMask"))), /*#__PURE__*/react.createElement("div", {
    className: "home_wall_conter"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.tokenpocket.pro/en/download/app",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: wall_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, "TokenPocket"))), /*#__PURE__*/react.createElement("div", {
    className: "home_wall_conter"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.binance.com/en",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: wall_4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, "Binance"))), /*#__PURE__*/react.createElement("div", {
    className: "home_wall_conter"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.tronlink.org/",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: wall_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, "TronLink"))), /*#__PURE__*/react.createElement("div", {
    className: "home_button_flex"
  }, /*#__PURE__*/react.createElement(lib/* TonConnectButton */.MJ, null), buttonText && /*#__PURE__*/react.createElement("span", null, t(buttonText))), /*#__PURE__*/react.createElement("div", {
    className: "home_wall_conter"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://cryptoarena.io/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("span", null, t("More Wallet Options")))), createWallet ? /*#__PURE__*/react.createElement("div", {
    className: "games_buttom"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: `/createWallet` + queryString
  }, /*#__PURE__*/react.createElement("img", {
    src: home_buttom_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Visitor Login"), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: home_tou_namespaceObject,
    alt: ""
  }))))) : /*#__PURE__*/react.createElement("div", {
    className: "games_buttom"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: `/enterGame` + queryString
  }, /*#__PURE__*/react.createElement("img", {
    src: home_buttom_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Visitor Login"), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: home_tou_namespaceObject,
    alt: ""
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "home_footer"
  }, /*#__PURE__*/react.createElement("span", null, t("By connecting your wallet and using CryptoArena, you agree to our")), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1ktcZ2P7lMKEJDsymetdqUzvWKbF0VR2n/view?usp=drive_link",
    target: "_blank"
  }, t("Terms of Service")), /*#__PURE__*/react.createElement("span", null, t("and")), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1JHQmFHsoM2m4qynP0tT2rycXHIm8xX-G/view",
    target: "_blank"
  }, t("Privacy Agreement.")))));
}
/* harmony default export */ const telegramSign = (TelegramSign);
;// ./src/pages/index/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */


function Index() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(telegramSign, null));
}
/* harmony default export */ const index = (Index);
// EXTERNAL MODULE: ./node_modules/@ethersproject/wallet/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(8735);
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
/* harmony default export */ const Loader_Dots = (Dots);
;// ./src/assets/images/img_qianbao.png
const img_qianbao_namespaceObject = "data:image/png;base64,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";
;// ./src/pages/createWallet/createWallet.jsx
/* eslint-disable react-hooks/exhaustive-deps */











const createWallet_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_pc_bg_namespaceObject}) no-repeat;
	background-size: cover;
	height: 100vh;

	.games_maxwidth {
		max-width: 750px;
    	margin: auto;
	}
	.games_img2 {
		text-align: center;
		padding-top: 100px;
		img {
			width: 70px;
			margin-bottom: 10px;
		}
	}
	.games_conter {
	    width: 100%;
    	text-align: center;
		span {
			display: block;
			font-size: 22px;
			font-weight: bold;
			line-height: 25px;
		}
	}
	.games_addwaleet {
	    width: 90%;
		height: 240px;
		background: #242836;
		border-radius: 5px;
		margin: auto;
		margin-top: 60px;
		margin-bottom: 10px;
		text-align: center;
    	padding-top: 60px;
		img {
			width: 50px;
		}
		em {
			display: block;
			font-size: 16px;
			font-weight: bold;
			color: #9FA6BB;
			margin-top: 20px;
		}
	}


	@media (max-width: 700px) {
		background: url(${home_m_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		height: 100vh;
	}
`;
function CreateWallet() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  const urlParams = new URLSearchParams(window.location.search);
  const lan = urlParams.get('lan');
  (0,react.useEffect)(() => {
    if (lan === "zh-cn") {
      i18n.changeLanguage("zhCN");
    } else if (lan === "zh") {
      i18n.changeLanguage("zhTW");
    } else {
      i18n.changeLanguage("en");
    }
  }, [lan]);
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [walletInfo, setWalletInfo] = (0,react.useState)(null);
  const handleCreateWallet = async () => {
    // 带问号，例如：?scene=startup&referral=xxx&lan=zh-cn
    const queryssString = window.location.search;
    const wallet = lib_esm.Wallet.createRandom();
    setWalletInfo({
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic.phrase
    });
    const mnemonic = wallet.mnemonic.phrase;
    const mnemonic_encode = (0,encryption/* encode */.lF)(mnemonic);
    localStorage.setItem("TOX_Telegram_Evm_Wallet", mnemonic_encode);
    localStorage.setItem("TOX_Telegram_Evm_status", "1");
    setTimeout(() => {
      navigate(`/enterGame` + queryssString);
    }, 1000);
  };
  (0,react.useEffect)(() => {
    handleCreateWallet();
  }, []);
  return /*#__PURE__*/react.createElement(createWallet_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "games_maxwidth"
  }, /*#__PURE__*/react.createElement("div", {
    className: "games_img2"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_ico_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Welcome to CryptoArena"))), /*#__PURE__*/react.createElement("div", {
    className: "games_addwaleet"
  }, /*#__PURE__*/react.createElement("img", {
    src: img_qianbao_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t("enerating your wallet"), /*#__PURE__*/react.createElement(Loader_Dots, null)))));
}
/* harmony default export */ const createWallet = (CreateWallet);
;// ./src/pages/createWallet/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */


function createWallet_CreateWallet() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(createWallet, null));
}
/* harmony default export */ const pages_createWallet = (createWallet_CreateWallet);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(7965);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/assets/images/img_chenggong.png
const img_chenggong_namespaceObject = __webpack_require__.p + "469d7f511644cc81680e.png";
;// ./src/assets/images/copy.png
const copy_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABiUlEQVR4AeyYu0rEQBSGjSjYKAqWNr6Ab6CVjY2NlZV4Ae1sxAuIpZd2CxcUQXwDC+0s9kXEFxC8FC6IxG8gw04gmXXOcVTcCefbnGT3/Pz5k7C76e/740syqD1BKcHoCeZ5Pgp70FSwKjXqPcUYGkS4BYewoWCWWVF5DaI4DVPwa9XN4IjjbC6TL4uOTlDbzWCQWIwPiwxybWYwDzuwK2CbmZmvHJDIIMLncA3HcCTghJkWJrdYeyvYIKITKK7Ad9QBeplPKNggYuNgRffpJwU0mTE1zIt7I7JZLolBV+GRG/shFASewZY9WLtdWmsNlsRibCSD2lRTgilBbQLa+XQN9nyC7yTwVGB62qqKt897DfIdewNjBXfxbNQrew3Wj/3cO8mgNut/meCLk0qDn+xvoTBv/4u06V+htoIT5I6+R+0WTJknD0M0oQwwY+oUvQ/T1BFssBBaYL0JF3Ap4IyZJbBJ0laXyCBH3YYGrMGygHVmriCvttXZKzLYGY/fJYPajFOC2gQ/AQAA//+wxLx3AAAABklEQVQDAE24AmBr1Uf8AAAAAElFTkSuQmCC";
;// ./src/assets/images/back.png
const back_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/buttom.png
const buttom_namespaceObject = __webpack_require__.p + "493d65e122e8713dcd81.png";
;// ./src/pages/createWallet/enterGame.jsx
/* eslint-disable react-hooks/exhaustive-deps */




















const enterGame_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_m_bg_namespaceObject}) no-repeat;
	background-size: cover;
	height: 100vh;

	.games_maxwidth {
		max-width: 750px;
    	margin: auto;
	}
	.games_img1 {
		text-align: center;
		padding-top: 100px;
		img {
			width: 70px;
			margin-bottom: 10px;
		}
	}
	.games_img2 {
		text-align: center;
		padding-top: 100px;
		img {
			width: 70px;
			margin-bottom: 10px;
		}
	}
	.games_conter {
	    width: 100%;
    	text-align: center;
		span {
			display: block;
			font-size: 22px;
			font-weight: bold;
			line-height: 25px;
		}
		em {
			display: block;
			color: red;
			font-size: 17px;
			font-weight: bold;
			line-height: 20px;
		}
	}
	.games_widn {
		width: 90%;
		margin: auto;
	}
	.games_addwaleet {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		background: #242836;
		border-radius: 5px;
		margin: auto;
		margin-top: 60px;
		margin-bottom: 10px;
		padding: 0 15px;
		font-size: 14px;
		font-weight: bold;
		opacity: .8;
		cursor: pointer;
		span {
			margin-left: 6px;
		}
		img {
			width: 20px;
			cursor: pointer;
		}
	}
	.games_tip_conter {
		display: flex;
		align-items: center;
    	justify-content: space-between;
		background: #242836;
		border-radius: 5px;
		padding: 10px 15px;
		span {
			width: calc(100% - 100px);
			color: #FFE81A;
			font-weight: 500;
			line-height: 18px;
    		font-size: 14px;
		}
		em {
			position: relative;
			display: block;
			width: 80px;
			height: 52px;
			margin-right: -10px;
			color: #141722;
			font-weight: bold;
			cursor: pointer;
			img {
				width: 80px;
    			height: 52px;
			}
		}
		i {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0px;
			top: 0px;
			font-size: 13px;
		}
	}
	.games_buttom {
	    display: flex;
    	justify-content: center;
		position: relative;
		margin-left: -15px;
    	margin-right: -15px;
		margin-top: 10px;
		cursor: pointer;
		img {
			width: 100%;
			max-width: 400px;
		}
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 0px;
			top: 0px;
			width: 100%;
			height: 100%;
			color: #141722;
			font-size: 18px;
			font-weight: bold;
		}
	}
	.games_download {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 750px;
	    position: fixed;
		left: 0px;
    	bottom: 50px;
		a {
			font-size: 16px;
			color: #fff;
			font-weight: bold;
		}
	}
`;
function EnterGame() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  const urlParams = new URLSearchParams(window.location.search);
  const lan = urlParams.get('lan');
  (0,react.useEffect)(() => {
    if (lan === "zh-cn") {
      i18n.changeLanguage("zhCN");
    } else if (lan === "zh") {
      i18n.changeLanguage("zhTW");
    } else {
      i18n.changeLanguage("en");
    }
  }, [lan]);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [queryString, setQueryString] = (0,react.useState)("");
  const [walletMnemonic, setWalletMnemonic] = (0,react.useState)(null);
  const [walletInfo, setWalletInfo] = (0,react.useState)(null);
  const [creatStatus, setCreatStatus] = (0,react.useState)("");

  // 登录
  // const handleLogin = async () => {
  // 	const toxStorageTelegram = localStorage.getItem("TOX-COOKIE-CODE_Telegram")
  // 	const str = decode(toxStorageTelegram);
  // 	let loginForm = signWeb3Array(str);

  // 	// const toxCopyMnemonic = localStorage.getItem("TOX_Copy_Mnemonic")
  // 	// if (loginForm.status && loginForm.status === "1" && toxCopyMnemonic !== "1") {
  // 	// 	// 不保存token
  // 	// 	alert('不保存token')
  // 	// } else {
  // 	// 	// 保存token
  // 	// 	alert('保存token')
  // 	// }

  // 	const data = {
  // 		type: 1,
  // 		loginEvmData: loginForm,
  // 	}

  // 	instance.post(`${axiosUrl}/auth/login`, data)
  // 	.then(function (res) {
  // 		if (res.code === 200) {
  // 			console.log("登录成功===>")
  // 		} else {
  // 			console.log("登录失败===>")
  // 		}
  // 	})
  // 	.catch(function (error) {
  // 		console.log("web3 sign login error===>", error);
  // 	});
  // }

  const handleWallet = async () => {
    const mnemonic_encode = localStorage.getItem("TOX_Telegram_Evm_Wallet");
    const mnemonic = (0,encryption/* decode */.D4)(mnemonic_encode);
    setWalletMnemonic(mnemonic);
    try {
      const wallet = lib_esm.Wallet.fromMnemonic(mnemonic.trim());
      setWalletInfo({
        address: wallet.address,
        privateKey: wallet.privateKey
      });
    } catch (error) {
      console.error(error);
      messageApi.open({
        type: 'error',
        content: "Failed to obtain mnemonic words"
      });
    }
  };

  // 签名
  const signDataLogin = async () => {
    const time = new Date().getTime();
    let loginForm = {
      address: walletInfo == null ? void 0 : walletInfo.address,
      randomHex: '',
      time,
      r: '',
      s: '',
      v: ''
    };
    const randomHex = web3.utils.randomHex(32);
    const account = web3.eth.accounts.privateKeyToAccount(walletInfo == null ? void 0 : walletInfo.privateKey);
    const address = account.address;

    // 拼接钱包地址、随机哈希和时间戳
    const loginInfoStr = address + randomHex + time;
    // 使用 SHA-256 对登录信息进行哈希处理
    const shaObj = new sha/* default */.A("SHA-256", "TEXT", {
      encoding: "UTF8"
    });
    shaObj.update(loginInfoStr);
    const hash = shaObj.getHash("HEX");

    // 用私钥签名
    const signatureObj = account.sign(hash);

    // 拆分 r,s,v
    const {
      r,
      s,
      v
    } = signatureObj;
    loginForm = {
      ...loginForm,
      address,
      randomHex,
      r,
      s,
      v
    };
    const _code = (0,encryption/* encode */.lF)(time + "&" + randomHex + "&" + r + "&" + s + "&" + v + "&" + (walletInfo == null ? void 0 : walletInfo.address) + "&" + "1");
    localStorage.setItem("TOX-COOKIE-CODE_Telegram", _code);

    // console.log("签名完成===>", loginForm);
    // handleLogin()
  };
  (0,react.useEffect)(() => {
    // 带问号，例如：?scene=startup&referral=xxx&lan=zh-cn
    const queryssString = window.location.search;
    setQueryString(queryssString);
    const evm_status = localStorage.getItem("TOX_Telegram_Evm_status");
    if (evm_status) {
      setCreatStatus(evm_status);
    } else {
      setCreatStatus("");
    }
    setTimeout(() => {
      localStorage.removeItem("TOX_Telegram_Evm_status");
    }, 1000);
    handleWallet();
  }, []);
  (0,react.useEffect)(() => {
    if (walletInfo) {
      signDataLogin();
    }
  }, [walletInfo]);

  // 复制助记词
  const handleCopyBackup = () => {
    if (walletMnemonic) {
      if (copy_to_clipboard_default()(walletMnemonic)) {
        messageApi.open({
          type: 'success',
          content: t("Copy successful, please paste and save in a timely manner!"),
          duration: 6
        });
      }
    }
  };

  // 复制钱包地址
  const handleCopyAddress = () => {
    if (walletInfo && walletInfo != null && walletInfo.address) {
      if (copy_to_clipboard_default()(walletInfo == null ? void 0 : walletInfo.address)) {
        messageApi.open({
          type: 'success',
          content: t("Wallet address copied successfully!"),
          duration: 6
        });
      }
    }
  };

  // 进入游戏
  const handleGame = () => {
    if (walletInfo) {
      window.location.href = "/" + queryString;
    } else {
      messageApi.open({
        type: 'error',
        content: "Enter Game Fail"
      });
    }
  };

  // console.log("walletInfo===>", walletInfo)

  return /*#__PURE__*/react.createElement(enterGame_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "games_maxwidth"
  }, contextHolder, walletMnemonic ? /*#__PURE__*/react.createElement("div", {
    className: "games_img2"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_ico_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "games_img1"
  }, /*#__PURE__*/react.createElement("img", {
    src: img_chenggong_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, creatStatus ? /*#__PURE__*/react.createElement("span", null, t("Your wallet is ready.")) : /*#__PURE__*/react.createElement("span", null, t("Welcome back.")), /*#__PURE__*/react.createElement("span", null, t("Let the game begin."))), /*#__PURE__*/react.createElement("div", {
    className: "games_widn"
  }, walletInfo && walletInfo != null && walletInfo.address ? /*#__PURE__*/react.createElement("div", {
    className: "games_addwaleet",
    onClick: handleCopyAddress
  }, /*#__PURE__*/react.createElement("em", null, t("Wallet Address:"), /*#__PURE__*/react.createElement("span", null, walletInfo == null ? void 0 : walletInfo.address.substring(0, 6), "...", walletInfo == null ? void 0 : walletInfo.address.substr(-4))), /*#__PURE__*/react.createElement("img", {
    src: copy_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "games_addwaleet"
  }), /*#__PURE__*/react.createElement("div", {
    className: "games_tip_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.")), /*#__PURE__*/react.createElement("em", {
    onClick: handleCopyBackup
  }, /*#__PURE__*/react.createElement("img", {
    src: back_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("i", null, t("Backup")))), /*#__PURE__*/react.createElement("div", {
    className: "games_buttom",
    onClick: handleGame
  }, /*#__PURE__*/react.createElement("img", {
    src: buttom_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Enter Game"))), /*#__PURE__*/react.createElement("div", {
    className: "games_download"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://cryptoarena.io/download",
    target: "_blank"
  }, t("Click to download wallet"))))));
}
/* harmony default export */ const enterGame = (EnterGame);
;// ./src/utils/index.ts
// export const axiosUrl = "http://192.168.90.68:8080"

// 测试环境
const axiosUrl = "https://sso.queengame.io";

// 正式环境
// export const axiosUrl = "https://sso.cryptoarena.io"
;// ./src/pages/index/login.jsx
/* eslint-disable react-hooks/exhaustive-deps */














const login_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
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
	.home_sings {
		margin-top: 20px;
    	font-weight: bold;
	}
	.home_button_flex {
		display: flex;
	    margin-top: 50px;
	}
	.home_login {
		display: flex;
		align-items: center;
		height: 40px;
		border-radius: 33px;
		border: 2px solid #0098E8;
		color: #13AEFF;
		font-size: 15px;
		font-weight: bold;
		padding: 0 20px;
		margin-left: 20px;
		cursor: pointer;
		a {
			color: #13AEFF;
			text-decoration: none;
		}
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
function login_TelegramSign() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib/* TonConnectUIProvider */.Nl, {
    manifestUrl: "https://cryptoarena.io/tonconnect-manifest.json"
  }, /*#__PURE__*/react.createElement(login_WalletComponent, null)));
}
function login_WalletComponent() {
  const {
    t
  } = (0,es/* useTranslation */.Bd)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [tonConnectUi] = (0,lib/* useTonConnectUI */.Lg)();
  const wallet = (0,lib/* useTonWallet */.c5)();
  const [randomHex] = (0,react.useState)(web3.utils.randomHex(32));
  const [queryString, setQueryString] = (0,react.useState)("");
  const [createWallet, setCreateWallet] = (0,react.useState)(false);
  const handleLogin = async () => {
    const toxStorageTelegram = localStorage.getItem("TOX-COOKIE-CODE_Telegram");
    const str = (0,encryption/* decode */.D4)(toxStorageTelegram);
    const array = (0,encryption/* signTelegramArray */.as)(str);
    let loginForm = {};
    let data = {};
    if (array.type === "2") {
      loginForm = {
        domain: array.domain,
        publicKey: array.publicKey,
        signatureHex: array.signatureHex,
        randomHex: array.randomHex,
        timestamp: array.timestamp,
        nonBounceableAddress: wallet.account.address
      };
      data = {
        type: parseInt(array.type),
        loginTonData: loginForm
      };
    } else {
      loginForm = {
        address: array.address,
        r: array.r,
        s: array.s,
        v: array.v,
        randomHex: array.randomHex,
        time: array.time
      };
      data = {
        type: parseInt(array.type),
        loginEvmData: loginForm,
        tourist: true
      };
    }
    http.post(`${axiosUrl}/auth/login`, data).then(function (res) {
      console.log("res===>", res);
      if (res.code === 200) {
        alert("登录成功");
      }
    }).catch(function (error) {
      console.log("sign login error===>", error);
    });
  };
  return /*#__PURE__*/react.createElement(login_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "home_button_flex",
    onClick: handleLogin
  }, "login"));
}
/* harmony default export */ const login = (login_TelegramSign);
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
  }, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/createWallet",
    element: /*#__PURE__*/react.createElement(pages_createWallet, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/enterGame",
    element: /*#__PURE__*/react.createElement(enterGame, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/login",
    element: /*#__PURE__*/react.createElement(login, null)
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
/******/ 		__webpack_require__.p = "/visitor_login/";
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [648], () => (__webpack_require__(8740)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;