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
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Visitor Login":"Visitor Login","Welcome to CryptoArena":"Welcome to CryptoArena","enerating your wallet":"enerating your wallet","Your wallet is ready! Let the game begin.":"Your wallet is ready! Let the game begin.","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.","Backup":"Backup","Copy mnemonic":"Copy mnemonic","Enter Game":"Enter Game","Copy successful, please paste and save in a timely manner!":"Copy successful, please paste and save in a timely manner!","Click to download wallet":"Click to download wallet","":""}');

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
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Visitor Login":"访客登录","Welcome to CryptoArena":"欢迎来到CryptoArena","enerating your wallet":"生成您的钱包","Your wallet is ready! Let the game begin.":"你的钱包准备好了！让游戏开始吧","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"提醒：一定要备份您的助记符短语，以保护你的资产安全","Backup":"备份","Copy mnemonic":"复制助记词","Enter Game":"进入游戏","Copy successful, please paste and save in a timely manner!":"复制成功，请及时粘贴保存!","Click to download wallet":"点击下载钱包","":""}');

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
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Visitor Login":"訪客登入","Welcome to CryptoArena":"歡迎來到CryptoArena","enerating your wallet":"生成您的錢包","Your wallet is ready! Let the game begin.":"你的錢包準備好了！ 讓遊戲開始吧","Reminder: Be sure to back up your mnemonic phrase to keep your assets safe.":"提醒：一定要備份您的助記符短語，以保護你的資產安全","Backup":"备份","Copy mnemonic":"複製助記詞","Enter Game":"進入遊戲","Copy successful, please paste and save in a timely manner!":"複製成功，請及時粘貼保存！","Click to download wallet":"點擊下載錢包","":""}');

/***/ }),

/***/ 8388:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9847:
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
function TelegramSign() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib/* TonConnectUIProvider */.Nl, {
    manifestUrl: "https://cryptoarena.io/tonconnect-manifest.json"
  }, /*#__PURE__*/react.createElement(WalletComponent, null)));
}
function WalletComponent() {
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
        // if (wallet.device.appName.toLowerCase().includes("telegram")) {
        // 	setTimeout(() => {
        // 		window.location.href = wallet.universalLink;
        // 	}, 2000);
        // }

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
  }, []);
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "home_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_ico_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "home_title"
  }, "Play Together, Grow Richer"), /*#__PURE__*/react.createElement("div", {
    className: "home_button_flex"
  }, /*#__PURE__*/react.createElement(lib/* TonConnectButton */.MJ, null), createWallet ? /*#__PURE__*/react.createElement("div", {
    className: "home_login"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: `/createWallet` + queryString
  }, t("Visitor Login"))) : /*#__PURE__*/react.createElement("div", {
    className: "home_login"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: `/enterGame` + queryString
  }, t("Visitor Login")))));
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
const img_qianbao_namespaceObject = __webpack_require__.p + "407e2c6368fe771e8f3a.png";
;// ./src/pages/createWallet/createWallet.jsx
/* eslint-disable react-hooks/exhaustive-deps */










const createWallet_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: url(${home_pc_bg_namespaceObject}) no-repeat;
	background-size: cover;
	height: 100vh;
	img {
		width: 80px;
	}

	.wall_conter {
		font-size: 20px;
		font-weight: bold;
		margin-top: 30px;
		em {
			display: block;
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
    t
  } = (0,es/* useTranslation */.Bd)();
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
    setTimeout(() => {
      navigate(`/enterGame` + queryssString);
    }, 1000);
  };
  (0,react.useEffect)(() => {
    handleCreateWallet();
  }, []);
  return /*#__PURE__*/react.createElement(createWallet_CustomStyle, null, /*#__PURE__*/react.createElement("img", {
    src: img_qianbao_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "wall_conter"
  }, /*#__PURE__*/react.createElement("em", null, t("Welcome to CryptoArena")), /*#__PURE__*/react.createElement("em", null, t("enerating your wallet"), /*#__PURE__*/react.createElement(Loader_Dots, null))));
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
;// ./src/pages/createWallet/enterGame.jsx
/* eslint-disable react-hooks/exhaustive-deps */















const enterGame_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: url(${home_pc_bg_namespaceObject}) no-repeat;
	background-size: cover;
	height: 100vh;
	img {
		width: 65px;
	}

	.games_conter {
	    width: 90%;
    	text-align: center;
		span {
			display: block;
			font-size: 24px;
			font-weight: bold;
			line-height: 30px;
			margin-top: 30px;
		}
		em {
			display: block;
			color: red;
			font-size: 17px;
			font-weight: bold;
			line-height: 20px;
			margin-top: 10px;
		}
	}
	.games_buttom {
		display: flex;
		gap: 20px;
		margin-top: 40px;
		span {
			display: inline-block;
			width: 160px;
			height: 40px;
			line-height: 40px;
			background: #0098E8;
			border-radius: 33px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			cursor: pointer;
		}
		em {
		    display: inline-block;
			width: 160px;
			height: 40px;
			line-height: 35px;
			border: 2px solid #0098E8;
			border-radius: 33px;
			text-align: center;
			font-size: 16px;
			font-weight: bold;
			color: #13AEFF;
			cursor: pointer;
		}
	}
	.games_download {
	    position: fixed;
    	bottom: 50px;
		a {
			font-size: 16px;
			color: #13AEFF;
			font-weight: bold;
		}
	}
	

	@media (max-width: 700px) {
		background: url(${home_m_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		height: 100vh;
	}
`;
function EnterGame() {
  const {
    t
  } = (0,es/* useTranslation */.Bd)();
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [queryString, setQueryString] = (0,react.useState)("");
  const [walletMnemonic, setWalletMnemonic] = (0,react.useState)(null);
  const [walletInfo, setWalletInfo] = (0,react.useState)(null);
  const [toxCopyMnemonic, setTOXCopyMnemonic] = (0,react.useState)("");

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
    console.log("签名完成===>", loginForm);
    // handleLogin()
  };
  (0,react.useEffect)(() => {
    // 带问号，例如：?scene=startup&referral=xxx&lan=zh-cn
    const queryssString = window.location.search;
    setQueryString(queryssString);
    handleWallet();
  }, []);
  (0,react.useEffect)(() => {
    if (walletInfo) {
      signDataLogin();
    }
  }, [walletInfo]);
  (0,react.useEffect)(() => {
    setTOXCopyMnemonic(localStorage.getItem("TOX_Copy_Mnemonic"));
  }, []);

  // 复制助记词
  const handleCopyBackup = () => {
    if (walletMnemonic) {
      if (copy_to_clipboard_default()(walletMnemonic)) {
        localStorage.setItem("TOX_Copy_Mnemonic", "1");
        messageApi.open({
          type: 'success',
          content: t("Copy successful, please paste and save in a timely manner!"),
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
  console.log("walletInfo===>", walletInfo);
  console.log("toxCopyMnemonic===>", toxCopyMnemonic);
  return /*#__PURE__*/react.createElement(enterGame_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("img", {
    src: img_chenggong_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("div", {
    className: "games_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Your wallet is ready! Let the game begin.")), /*#__PURE__*/react.createElement("em", null, t("Reminder: Be sure to back up your mnemonic phrase to keep your assets safe."))), /*#__PURE__*/react.createElement("div", {
    className: "games_buttom"
  }, !toxCopyMnemonic && /*#__PURE__*/react.createElement("span", {
    onClick: handleCopyBackup
  }, t("Copy mnemonic")), /*#__PURE__*/react.createElement("em", {
    onClick: handleGame
  }, t("Enter Game"))), /*#__PURE__*/react.createElement("div", {
    className: "games_download"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://cryptoarena.io/#/download",
    target: "_blank"
  }, t("Click to download wallet"))));
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
        loginEvmData: loginForm
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [648], () => (__webpack_require__(9847)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;