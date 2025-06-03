/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7212:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4820:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4655:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7885:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6755:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1428:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7611:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(9655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 34 modules
var es = __webpack_require__(8987);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(886);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6801);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(3843);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 4 modules
var chunk_GISSYJN5 = __webpack_require__(9366);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9528);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(8306);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(1407);
;// CONCATENATED MODULE: ./src/utils/wagmi.ts









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

var _configureChains = (0,chunk_GISSYJN5/* configureChains */.QB)([chains_dist/* bsc */.eG
  //   bscTestnet,
  ], [(0,providers_public/* publicProvider */.I)()]
  // [alchemyProvider({ apiKey: AlchemyApiKey }), publicProvider()],
  ),
  provider = _configureChains.provider,
  chains = _configureChains.chains;

var CHAIN_IDS = chains.map(function (c) {
  return c.id;
});
var isChainSupported = memoize_default()(function (chainId) {
  return CHAIN_IDS.includes(chainId);
});
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(2724);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(8431);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(5078);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(6609);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(1072);
;// CONCATENATED MODULE: ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(4130),
  },
  zhCN: {
    translation: __webpack_require__(6361),
  },
  zhTW: {
    translation: __webpack_require__(3600),
  },
  ptBR: {
    translation: __webpack_require__(3501),
  },
  frFR: {
    translation: __webpack_require__(216),
  },
  jaJP: {
    translation: __webpack_require__(8491),
  },
  koKR: {
    translation: __webpack_require__(9233),
  },
  trTR: {
    translation: __webpack_require__(6522),
  },
  viVN: {
    translation: __webpack_require__(995),
  },
  mlNP: {
    translation: __webpack_require__(4473),
  },
  tgAP: {
    translation: __webpack_require__(264),
  },
}
i18next/* default.use */.ZP.use(dist_es/* initReactI18next */.Db).init({
  resources,
  // fallbackLng: 'en',
  lng: "en",
  // debug: true,
  // interpolation: {
  //   escapeValue: false,
  // },
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(9730);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(5286);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4043);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(2462);
;// CONCATENATED MODULE: ./src/hook/_isMobile.ts


function _isMobile() {
  var flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 113 modules
var message = __webpack_require__(3444);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(228);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(6265);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(8730);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(9307);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(3582);
;// CONCATENATED MODULE: ./src/hook/useSessionChainId.ts

var sessionChainIdAtom = (0,esm/* atom */.cn)(0);
var useSessionChainId = function useSessionChainId() {
  return useAtom(sessionChainIdAtom);
};
;// CONCATENATED MODULE: ./src/hook/useWallet.ts








// import { useRouter } from 'next/router'


function useConnectWallet() {
  var _useConnect = (0,wagmi_dist/* useConnect */.$4)({
      connector: new chunk_2VZS2JHJ/* InjectedConnector */._()
    }),
    connect = _useConnect.connect;
  return connect;
}
function useGetOwnAddress() {
  var _useAccount = (0,wagmi_dist/* useAccount */.mA)(),
    address = _useAccount.address,
    isConnected = _useAccount.isConnected;
  return {
    address,
    isConnected
  };
}
var queryChainIdAtom = (0,esm/* atom */.cn)(-1);
queryChainIdAtom.onMount = function (set) {
  var params = new URL(window.location.href).searchParams;
  var c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
;// CONCATENATED MODULE: ./public/images/logo.jpg
const logo_namespaceObject = __webpack_require__.p + "122cf6d736e85460e696.jpg";
;// CONCATENATED MODULE: ./public/images/logo_m.png
const logo_m_namespaceObject = __webpack_require__.p + "b3de387cda97596538f9.png";
;// CONCATENATED MODULE: ./public/images/lanu_1.png
const lanu_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgVJREFUSEu1lT9sT3EUxT9HIsKMlNG/YCJKIoSBSWkbm1gNLEIlujAxSEmkTCKMbC0aDEhIdFHF5m9smjYxk0g43pXva76+3q+/VNrv9t6977x7v+fec0SLY3spsEnSY9u9wLWUekzSkO29wBtJX5sgVL60vQQ4AxwHuoEpYBxYlHJ/AJ3AMuAecBU4J+lbjvUXsO01KXkDMCZpm+0RYH9RwENJ+2y/ALYCb6vqeyV9qPOmgRPoM2BlCp6oruIO8BlYUAAbWF11cgAYTLHobLek9/H8Bzi1/xKISuuzNlV6uQUNfam7T1n8HbAlrqUGvgD0ZwlTkjps30333IQ9Iqnb9kRF7IosYUBSv2wHKUNAkFafV5JO2b5VfJT/YLJq+5DtS1FlFvgOHPxnKlqN32zfR8U3ge3FhxeBpxXj99sAdgVhwOkibzSAv2STUMePpBEabQO8A1gP3CjyJgI4Bn5hETgMTAJP2gDvAZYDt4u8XwH8s2FO5wR43q7iOrCzaGUAiC38X/Kez+u4NS3Ia0l9toOUjhYEtl8Q23O/0pkIjQEbs+rWVdIZCzAbEQr57JwWoQQeWpzL5klgeAbZXJUEKpfNXbUmNwl9KFpUPi6ps4XQP5DUVQh9j6SPdcdN1rQYOJusqSdtYJM1hSeGu1wBzs9oTTn7yUw3S3pUmOlRScPtzPQ3LB7hChlMxbQAAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./public/images/lanu_2.png
const lanu_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_1.png
const men_1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_2.png
const men_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_3.png
const men_3_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_4.png
const men_4_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_5.png
const men_5_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_6.png
const men_6_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_7.png
const men_7_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/men_8.png
const men_8_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/jiantou_1.png
const jiantou_1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/jiantou_2.png
const jiantou_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/header/index.jsx

var _templateObject;
function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */





















var CustomStyle = styled_components_browser_esm/* default */.ZP.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t.header_container {\n\t\tdisplay: flex;\n\t\ttransition: all 0.3s ease 0s;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-size: cover;\n\t\tbackground-position: center center;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\twidth: 95%;\n\t\tmin-width: 1200px;\n\t\theight: 80px;\n\t\tz-index: 99;\n\t\tpadding: 30px 30px 38px;\n\t\tflex-direction: row;\n\t\t-webkit-box-pack: justify;\n\t\tjustify-content: space-between;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t}\n\t.header_left {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 80px;\n\t\ta {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.header_logo {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\timg {\n\t\t\twidth: 160px;\n\t\t}\n\t}\n\t.header_nav {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 55px;\n\t\t.on {\n\t\t\tcolor: #FBBD15 !important;\n\t\t}\n\t}\n\t.header_navLink {\n\t\tdisplay: flex;\n\t\tpadding: 8px;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tgap: 6px;\n\t\tuser-select: none;\n\t\tflex-direction: row;\n\t\twhite-space: nowrap;\n\t\tfont-size: 15px;\n\t\tcolor: #fff;\n\t\ttext-shadow: 2px 0px 0px #25317A;\n\t\tfont-weight: bold;\n\t\t&:hover {\n\t\t\tcolor: #ffb400;\n\t\t}\n\t}\n\t.header_gameLink {\n\t\t&:hover {\n\t\t\tcolor: #ffb400;\n\t\t}\n\t\tspan {\n\t\t\ta {\n\t\t\t\tcolor: #616161;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ta {\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.header_more {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\t}\n\t\tsvg {\n\t\t\twidth: 10px;\n\t\t\tpath {\n\t\t\t\tfill: rgb(240, 220, 192);\n\t\t\t}\n\t\t}\n\t}\n\t.header_more_down {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\ttransition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;\n\t\ttransform: rotate(180deg);\n\t}\n\t.header_out {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tbackground: rgb(199, 100, 61);\n\t\tbox-shadow: rgb(114, 64, 81) 0px 8px;\n\t\tposition: absolute;\n\t\tborder-radius: 0px 0px 16px 16px;\n\t\tz-index: 2;\n\t\ttop: 100%;\n\t\tleft: 0px;\n\t\tpadding: 16px;\n\t\tgap: 24px;\n\t}\n\t.header-right-flex {\n\t\tdisplay: flex;\n\t}\n\t.header-right-one {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin-left: 55px;\n\t\timg {\n\t\t\theight: 22px;\n\t\t}\n\t}\n\t.header-wallet {\n\t\twidth: 152px;\n\t\theight: 35px;\n\t\tline-height: 35px;\n\t\tbackground: #FBBD15;\n\t\tborder-radius: 6px;\n\t\tfont-size: 14px;\n\t\tfont-weight: bold;\n\t\tcolor: #631C1D;\n\t\ttext-align: center;\n\t\tmargin-left: 63px;\n\t\tcursor: pointer;\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.header_logo {\n\t\t\timg {\n\t\t\t\twidth: 150px;\n\t\t\t}\n\t\t}\n\t\t.header_nav {\n\t\t\tgap: 30px;\n\t\t}\n\t\t.header-right-one {\n\t\t\tmargin-left: 30px;\n\t\t}\n\t\t.header-wallet {\n\t\t\tmargin-left: 50px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t\n\t}\n"])));
function Header() {
  var _i18n$language, _i18n$language2, _i18n$language3, _i18n$language4, _i18n$language5, _i18n$language6;
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _message$useMessage = message/* default */.ZP.useMessage(),
    messageApi = _message$useMessage[0],
    contextHolder = _message$useMessage[1];
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var _useGetOwnAddress = useGetOwnAddress(),
    address = _useGetOwnAddress.address,
    isConnected = _useGetOwnAddress.isConnected;
  var connectWallet = useConnectWallet();
  var _useState = (0,react.useState)(false),
    menuMShow = _useState[0],
    setMenuMShow = _useState[1];
  var _useState2 = (0,react.useState)(false),
    moreShow = _useState2[0],
    setMoreShow = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    moreDeFiShow = _useState3[0],
    setMoreDeFiShow = _useState3[1];
  var _useState4 = (0,react.useState)(false),
    moreLanuShow = _useState4[0],
    setMoreLanuShow = _useState4[1];
  var _useState5 = (0,react.useState)("https://snake.cryptoarena.io?lang=en"),
    gamesUrl = _useState5[0],
    setGamesUrl = _useState5[1];
  var _useState6 = (0,react.useState)(false),
    walletInstalled = _useState6[0],
    setWalletInstalled = _useState6[1];
  (0,react.useEffect)(function () {
    setWalletInstalled(typeof window.ethereum !== 'undefined');
  }, []);
  var handMentShow = function handMentShow() {
    setMenuMShow(!menuMShow);
    setMoreShow(false);
    setMoreDeFiShow(false);
    setMoreLanuShow(false);
  };
  var handMouseEnter = function handMouseEnter() {
    setMoreShow(!moreShow);
    setMoreDeFiShow(false);
    setMoreLanuShow(false);
  };
  var handMouseDeFiEnter = function handMouseDeFiEnter() {
    setMoreDeFiShow(!moreDeFiShow);
    setMoreShow(false);
    setMoreLanuShow(false);
  };
  var handMouseLanuEnter = function handMouseLanuEnter() {
    setMoreLanuShow(!moreLanuShow);
    setMoreShow(false);
    setMoreDeFiShow(false);
  };
  (0,react.useEffect)(function () {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setGamesUrl("https://snake.cryptoarena.io?lang=zh-cn");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setGamesUrl("https://snake.cryptoarena.io?lang=zh");
    } else {
      setGamesUrl("https://snake.cryptoarena.io?lang=en");
    }
  }, [i18n.language]);
  var handGamesLink = function handGamesLink() {
    if (walletInstalled) {
      window.location.assign(gamesUrl);
    } else {
      messageApi.open({
        type: 'error',
        content: t('Please install a digital wallet extension or use a crypto wallet app.'),
        duration: 5
      });
    }
  };
  var handGamesMess = function handGamesMess() {
    messageApi.open({
      type: 'error',
      content: t('Please install a digital wallet extension or use a crypto wallet app.'),
      duration: 5
    });
  };
  return /*#__PURE__*/react.createElement(CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "cryptobit_nav_manu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_logo"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "header-right-flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_nav"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink on"
  }, t('Home'))), /*#__PURE__*/react.createElement("div", {
    className: "langu_conter header_gameLink"
  }, t('Arena'), /*#__PURE__*/react.createElement("img", {
    src: jiantou_1_namespaceObject,
    alt: "",
    className: "jiantou jtou1"
  }), /*#__PURE__*/react.createElement("img", {
    src: jiantou_2_namespaceObject,
    alt: "",
    className: "jiantou jtou2",
    style: {
      display: "none"
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang sub-menu-news"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("em", null, t('POPULAR')), walletInstalled ? /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/cryptoSnake"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake", /*#__PURE__*/react.createElement("i", null, "HOT"))) : /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    onClick: handGamesMess
  }, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake", /*#__PURE__*/react.createElement("i", null, "HOT"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_2_namespaceObject,
    alt: ""
  }), "Crypto Tetris", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_3_namespaceObject,
    alt: ""
  }), "Crypto Bomberman", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_6_namespaceObject,
    alt: ""
  }), "Crypto Bird", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_7_namespaceObject,
    alt: ""
  }), "Crypto Candy Crush", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING")))), /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu",
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/react.createElement("em", null, t('3RD PARTY')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/cryptoSnake"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_4_namespaceObject,
    alt: ""
  }), "Crypto Fishing", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_5_namespaceObject,
    alt: ""
  }), "Crypto Tank", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_8_namespaceObject,
    alt: ""
  }), "Crypto Mario World", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))))))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Community'))), /*#__PURE__*/react.createElement("div", {
    className: "langu_conter header_gameLink"
  }, t('DeFi'), /*#__PURE__*/react.createElement("img", {
    src: jiantou_1_namespaceObject,
    alt: "",
    className: "jiantou jtou1"
  }), /*#__PURE__*/react.createElement("img", {
    src: jiantou_2_namespaceObject,
    alt: "",
    className: "jiantou jtou2",
    style: {
      display: "none"
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Farm'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('IGO'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Lottery')))))))), /*#__PURE__*/react.createElement("div", {
    className: "header-right-one"
  }, /*#__PURE__*/react.createElement("div", {
    className: "langu_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: lanu_1_namespaceObject,
    alt: "",
    className: "langu_lun1"
  }), /*#__PURE__*/react.createElement("img", {
    src: lanu_2_namespaceObject,
    alt: "",
    className: "langu_lun2",
    style: {
      display: "none"
    }
  }), ((_i18n$language = i18n.language) == null ? void 0 : _i18n$language.toUpperCase()) === 'EN' && 'English', ((_i18n$language2 = i18n.language) == null ? void 0 : _i18n$language2.toUpperCase()) === 'ZHCN' && '简体中文', ((_i18n$language3 = i18n.language) == null ? void 0 : _i18n$language3.toUpperCase()) === 'ZHTW' && '繁體中文', /*#__PURE__*/react.createElement("div", {
    className: "sub-menu-lang"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587")))))), /*#__PURE__*/react.createElement("div", {
    className: "header-wallet"
  }, isConnected ? /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : '') : /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect')))))), /*#__PURE__*/react.createElement("div", {
    className: !menuMShow ? "d-md-block d-lg-none" : "d-md-block d-lg-none m_menu_model-bg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mobile-menu mean-container mean-conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean-bar",
    onClick: handMentShow
  }, !menuMShow ? /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal"
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)) : /*#__PURE__*/react.createElement("a", {
    className: "meanmenu-reveal meanclose"
  }, "X"))))), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_hides",
    onClick: handMentShow
  }), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_nav"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Home'))), /*#__PURE__*/react.createElement("span", {
    onClick: handMouseEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Arena'), !moreShow ? /*#__PURE__*/react.createElement("img", {
    src: jiantou_1_namespaceObject,
    alt: "",
    className: "jiantou_m"
  }) : /*#__PURE__*/react.createElement("img", {
    src: jiantou_2_namespaceObject,
    alt: "",
    className: "jiantou_m"
  })), moreShow && /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model m_menu_bop"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("em", null, t('POPULAR')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    onClick: handGamesLink
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake"), /*#__PURE__*/react.createElement("i", null, "HOT"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_2_namespaceObject,
    alt: ""
  }), "Crypto Tetris"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_3_namespaceObject,
    alt: ""
  }), "Crypto Bomberman"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_6_namespaceObject,
    alt: ""
  }), "Crypto Bird"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_7_namespaceObject,
    alt: ""
  }), "Crypto Candy Crush"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING")))), /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu",
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/react.createElement("em", null, t('3RD PARTY')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_4_namespaceObject,
    alt: ""
  }), "Crypto Fishing"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_5_namespaceObject,
    alt: ""
  }), "Crypto Tank"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_8_namespaceObject,
    alt: ""
  }), "Crypto Mario World"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))))))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Community'))), /*#__PURE__*/react.createElement("span", {
    onClick: handMouseDeFiEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('DeFi'), !moreDeFiShow ? /*#__PURE__*/react.createElement("img", {
    src: jiantou_1_namespaceObject,
    alt: "",
    className: "jiantou_m"
  }) : /*#__PURE__*/react.createElement("img", {
    src: jiantou_2_namespaceObject,
    alt: "",
    className: "jiantou_m"
  })), moreDeFiShow && /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Farm'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('IGO'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "/"
  }, t('Lottery'))))))), /*#__PURE__*/react.createElement("span", {
    className: "menu_m_lan"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handMouseLanuEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, null, /*#__PURE__*/react.createElement("img", {
    src: lanu_1_namespaceObject,
    alt: "",
    className: "nav_menu_lan"
  }), ((_i18n$language4 = i18n.language) == null ? void 0 : _i18n$language4.toUpperCase()) === 'EN' && 'English', ((_i18n$language5 = i18n.language) == null ? void 0 : _i18n$language5.toUpperCase()) === 'ZHCN' && '简体中文', ((_i18n$language6 = i18n.language) == null ? void 0 : _i18n$language6.toUpperCase()) === 'ZHTW' && '繁體中文', !moreLanuShow ? /*#__PURE__*/react.createElement("img", {
    src: jiantou_1_namespaceObject,
    alt: "",
    className: "jiantou_m"
  }) : /*#__PURE__*/react.createElement("img", {
    src: jiantou_2_namespaceObject,
    alt: "",
    className: "jiantou_m"
  })), moreLanuShow && /*#__PURE__*/react.createElement("div", {
    className: "m_menu_lanu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-menu"
  }, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
      setMenuMShow(false);
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
      setMenuMShow(false);
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
      setMenuMShow(false);
    }
  }, "\u7E41\u9AD4\u4E2D\u6587")))))), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet')))))));
}
/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/pages/index/FullPageScroller.css
var FullPageScroller = __webpack_require__(1428);
;// CONCATENATED MODULE: ./src/pages/index/FullPageScroller.jsx

/* eslint-disable react-hooks/exhaustive-deps */



var FullPageScroller_FullPageScroller = function FullPageScroller(_ref) {
  var children = _ref.children;
  var _useState = (0,react.useState)(0),
    currentIndex = _useState[0],
    setCurrentIndex = _useState[1];
  var startY = (0,react.useRef)(0);
  var isThrottled = (0,react.useRef)(false);
  var containerRef = (0,react.useRef)(null);
  var pageCount = children.length;
  var goUp = function goUp() {
    if (currentIndex < pageCount - 1) setCurrentIndex(function (i) {
      return i + 1;
    });
  };
  var goDown = function goDown() {
    if (currentIndex > 0) setCurrentIndex(function (i) {
      return i - 1;
    });
  };
  var handleWheel = function handleWheel(e) {
    if (isThrottled.current) return;
    isThrottled.current = true;
    e.deltaY > 0 ? goUp() : goDown();
    setTimeout(function () {
      return isThrottled.current = false;
    }, 1000);
  };
  var handleKey = function handleKey(e) {
    if (isThrottled.current) return;
    if (e.key === 'ArrowDown') {
      goUp();
    } else if (e.key === 'ArrowUp') {
      goDown();
    }
    isThrottled.current = true;
    setTimeout(function () {
      return isThrottled.current = false;
    }, 1000);
  };
  var handleTouchStart = function handleTouchStart(e) {
    startY.current = e.touches[0].clientY;
  };
  var handleTouchEnd = function handleTouchEnd(e) {
    var endY = e.changedTouches[0].clientY;
    var delta = endY - startY.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? goUp() : goDown();
    }
  };
  var goToNext = function goToNext() {
    if (currentIndex < pageCount - 1) setCurrentIndex(currentIndex + 1);
  };
  (0,react.useEffect)(function () {
    var container = containerRef.current;
    if (!container) return;
    container.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKey);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    return function () {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);
  return /*#__PURE__*/react.createElement("div", {
    className: "fullpage-container",
    ref: containerRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "fullpage-inner"
    // style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
    ,
    style: {
      transform: !_isMobile() ? pageCount !== currentIndex + 1 ? "translateY(-" + currentIndex * 100 + "vh)" : "translateY(calc(-" + (currentIndex - 1) * 100 + "vh - 360px))" : "translateY(-" + currentIndex * 100 + "vh)"
    } // 判断是否是最后一屏菜单，是的话把最后一屏和倒数第二屏一起显示
  }, children.map(function (child, index) {
    return /*#__PURE__*/react.createElement("div", {
      className: "fullpage-section " + (index === currentIndex ? 'active' : 'on'),
      key: index
    }, child);
  })), /*#__PURE__*/react.createElement("div", {
    className: "dots"
  }, children.map(function (_, index) {
    return /*#__PURE__*/react.createElement("span", {
      key: index,
      className: "dot " + (index === currentIndex ? 'active' : ''),
      onClick: function onClick() {
        return setCurrentIndex(index);
      }
    });
  })), currentIndex < pageCount - 1 && /*#__PURE__*/react.createElement("div", {
    className: "go-btn",
    onClick: goToNext
  }));
};
/* harmony default export */ const index_FullPageScroller = (FullPageScroller_FullPageScroller);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(2029);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 13 modules
var swiper_react = __webpack_require__(6610);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(4988);
;// CONCATENATED MODULE: ./public/images/home_banner1.jpg
const home_banner1_namespaceObject = __webpack_require__.p + "9a7bef7b33e6eb36b835.jpg";
;// CONCATENATED MODULE: ./public/images/home_banner2.jpg
const home_banner2_namespaceObject = __webpack_require__.p + "566d1c33d92e96b90958.jpg";
;// CONCATENATED MODULE: ./public/images/home_banner1_m.jpg
const home_banner1_m_namespaceObject = __webpack_require__.p + "21d228da75cb16e202b4.jpg";
;// CONCATENATED MODULE: ./public/images/home_banner2_m.jpg
const home_banner2_m_namespaceObject = __webpack_require__.p + "85e7cb3413867de59182.jpg";
;// CONCATENATED MODULE: ./public/images/comm1_1.png
const comm1_1_namespaceObject = __webpack_require__.p + "071ad54491e38aca6a8c.png";
;// CONCATENATED MODULE: ./public/images/comm1_2_m.png
const comm1_2_m_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/index/comm1.jsx

var comm1_templateObject;
function comm1_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }













var comm1_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm1_templateObject || (comm1_templateObject = comm1_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\theight: 100%;\n\n\t.comm1_conters {\n\t    position: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 440px;\n\t\tmargin-top: -220px;\n\t\ttext-align: center;\n\t\tz-index: 99;\n\t\tanimation: upDown 2s linear infinite;\n\t}\n\t.comm1_tit1 {\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 56px;\n\t\t\tcolor: #FBBD15;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 78px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 22px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t}\n\t\timg {\n\t\t    margin-top: 10px;\n\t\t}\n\t}\n\t.comm1_tit2 {\n\t    margin-top: 30px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 56px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 52px;\n\t\t\ttext-shadow: 0 0 5px rgb(255, 255, 255, 0.35);\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 22px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm1_conters {\n\t\t\theight: 400px;\n\t\t\tmargin-top: -200px;\n\t\t}\n\t\t.comm1_tit1 {\n\t\t\tspan {\n\t\t\t\tfont-size: 32px;\n\t\t\t\tline-height: 50px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t\timg {\n\t\t\t    margin-top: 20px;\n   \t\t\t\tmargin-bottom: 20px;\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm1_tit2 {\n\t\t    margin-top: 10px;\n\t\t\tspan {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 40px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\t.comm1_conters {\n\t\t\twidth: 86%;\n        \tleft: 7%;\n\t\t\tmargin-top: -220px;\n\t\t}\n\t\t.comm1_img {\n\t\t\timg {\n\t\t\t\twidth: 80px;\n\t\t\t}\n\t\t}\n\t\t.comm1_tit1 {\n\t\t\tspan {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 30px;\n    \t\t\tmargin-bottom: 20px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\timg {\n\t\t\t   \twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm1_tit2 {\n\t\t\tspan {\n\t\t\t\tfont-size: 28px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t}\n\t}\n"])));
function Comm1() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, {
    className: "comm1_swiper"
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.tq, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    modules: [swiper_esm/* Autoplay */.pt],
    pagination: {
      clickable: true
    }
  }, /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.o5, null, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: home_banner1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: home_banner1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.o5, null, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: home_banner2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: home_banner2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_conters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_tit1"
  }, /*#__PURE__*/react.createElement("span", null, "Crypto Arena"), /*#__PURE__*/react.createElement("em", null, t("The World's First Blockchain-Based Casual Competitive Gaming Platform")), /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_tit2"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds Your"), " ", /*#__PURE__*/react.createElement("br", null), " ", t("Fortune")) : /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds Your Fortune")), /*#__PURE__*/react.createElement("em", null, t("Make every leisure moment create value")))));
}
/* harmony default export */ const comm1 = (Comm1);
;// CONCATENATED MODULE: ./public/images/comm1_1_m.png
const comm1_1_m_namespaceObject = __webpack_require__.p + "f9599d7753719bb9960b.png";
;// CONCATENATED MODULE: ./public/images/anniu.png
const anniu_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAckAAABmCAYAAACgAmr+AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAgRSURBVHic7d1NbBxnHcfx77zsi3djx6R10qotTRsqpLQSoW9CRUJIlRBCAgnxUiTg3BM3Ki4IKiQEEjdOcOTCoYDEgQNCpRcoAtIqQAUcqrz0JRA3sWM79to7OzMPh1mH2PFu7BKybub7kaz1emZnnpUPP/2ft4nmn2O3GsCHgCeA48C9wBHgMNACukAMHNz1FW++HtCf4P0lqe5aQGeC918GSmCNKg/mhz/ngb8DJ4G/AYPdXCzdxTlPA88Cnwbae2/vLdVhsv8cSdJkbRZq7xu+HtvhnHXgV8CPgd+Ou1g85tjjwMvAi8AX2P8BKUnSbkxR5dqLVDn32KgTdwrJBPgO8Cfgqf9H6yRJ2ieeAv4MPM8Ombi9u7UJ/BT43PYToyQmvXOKdK5DeqhN3GmQdFKidkrcTKpzmjFE0c3+ApIk7U4IhKwEoMwKwkZO0cspewPyxQ3yiz3yS+uEorz2UzHwbar5Nl8Bss0D14ZkBPyEbQHZvG+GqeN30LxvhigxACVJ+1gUEbWqwi1pJTDdvK4aDEUge3OF9X8ukJ9fgQjKAqi6YDPgq0CArSH5deBLm28aR7pMf/Qe0jnnwUiSbh9REtF64CCtBw6Svb7A+qvnGayVlDkAXwb+CvwAIBouAXmQampsmyii+8RddE8cqWpLSZJuU8XFNdZfPU/ZG5BdzinzALABPAKc3hyk/CbQjuKIg584SvfDBqQkqT7iToPWkRZxNazYpspFYqp1hc8AzDx9P62jk9wLQJKkyYjSmPaxmc23nwemYuDjQKdz4jCtB2cn1DRJkvaB/oDOw3cCHAA+FgMfSWZadB+/a7INkyRpH2jMtUgOtgCejIHj3UePECXjNt+RJKkeiqV1uo8eAXgojprJ0dax2Qk3SZKk/SGsDWg9MEvUiI/FzXsO3BulVpGSJAGEQUHUiGneM31/3Djc7U66QZIk7RuheknnOtNxMttqTbY1kiTtP8lMcyqOu43GpBsiSdJ+k0w3ozhu7+a5y5Ik1UvcTtPUJ3tIkmptRAxGaUzszFZJkq4XNWLiaPjAZEmStJUDkpKkehvV3dpMsK9VkqQRrCQlSTU3egKrISlJqq8IojGLPOxulSRpBCtJSVK9jakkDUlJUo1FOCYpSdIojklKkrR3VpKSpPqKGDu91UpSkqQRDElJkkawu1WSVG9julsNSUlSrbnjjiRJ74KVpCSp3txxR5Kk64WiNCQlSdpJ2CgYl5KOSUqSaqtc7Y89biUpSaqnMlAsrdvdKknSdvk7q1AG10lKknStUJYM3loaW0WCISlJqqHB2SVCVnKjlDQkJUm1kl+4Qj5/5YZVJBiSkqQayf+1QnZuiV0lJIakJKkGwqBkcGaBfHH8bNbtDElJ0u2rDOTvrDJ4e5kwKPf8cUNSknR7KQPlaka+2KO41CPkRfX3PVSQm/YeksObl2t9yrUBhLD3u0qSdLOFQNjIKTfyLdk07lFYN7LrkCx7GfmFVcrFdUK595JVkqRb5n9JxmvcMCRDVjB4a4lioXdTbihJ0nvF2JAsV/pkpxcIeXnTUlmSpPeKkSFZLPTIzl2u+nXNR0lSDe0YkuXyxjAgwYSUJNXVdSEZspLs7GL1xnyUJNXYdSGZn1+CMjgEKUmqvS0hGbKC4vIGlpCSJG0LyWKxZz5KkjS0JSTL1cyQlCRpaGt3az83JCVJGtoakoWbBkiStCmedAMkSdqvtlSSkVWkJElXWUlKkjTC1s0ErCQlSbpqW0hOqBWSJO1DVpKSJI3gmKQkSSPY3SpJ0gjbloBMqhmSJO0/jklKkjSCY5KSJI3gmKQkSSNsDUlTUpKkq6wkJUkawYk7kiSNYCUpSdIIjklKkjSClaQkSSO4TlKSpBGsJCVJ2kHICuKQFZNuhyRJ+1Ia8pKomVTvXAIiSRIAYVCWaShCyebYpBkpSaq7YRaGoiQN/aJgugpJC0lJUu3FVd1YbhSDtOwNMphqVEdMSUlSvUXpMCRXsyzOl/srE26PJEn7RtyuFn4Uq4PLab6wfha4G7C/VZJUe1GnCUC+uP56nL2x8ruQlxNukiRJkxe3U6JmQhiUZOeW/5CWG/lv+qeXvtH+4CGHJCVJ9RVBPDsFQP/MEmW/eCkFXl47Nd9rfWC2Y3erJKmukoNtokZMKErWTs2vAi/HQL9Y7r+wdvLCpNsnSdJEJAeaxAeqsci1kxcolvs/AwbR/HMAPAS8Nv344VZ694HJtVKSpFssmWlfDciN00usvHhuA3gYOLO5wfnrwPNrpy5+r5vGNOY6E2qqJEm3RpQmxLPtq1uz9s8uc+WlNwC+BZwB2KwkoZq28wui6LPdE3O0758hFM56lSTdXqJGQtRtEk81quQLsHbqAmuvzEMIPwe+WP11a0gCtIAXgM80jnQ58OTdJNMNwqCAIhBCCUW41d9HkqR3J46I4rjaRaeVELVSouS/j1LOL/a48vu3GbzTA/gl8AyQbR7fHpIACfBd4Dkgbt43w9TxO2i+f4YodvarJOm9LRSB7M0V1v9xieztKwAl8H2qbtYtz4/cKSQ3PQX8EHgMIEpi0junSOc6pIfaxJ0GSSetUrmVEAFRIwaDVJI0KWUgDEoCEPoFoZ9T9HLK3oB8cYP8Yo/80vq1w4mvAF8D/rjT5caFJFS9tZ8EngU+BTRu1veQJGlC+sCvgR8NX0e6UUheawo4ATwJPALcRbXn6yFgdnjOLO7bI0manBJYHv6+BCwC/wYuAK8BJ4G/AOu7udh/ABKhF3i1O+obAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/components/index/comm1M.jsx

var comm1M_templateObject;
function comm1M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }












var comm1M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm1M_templateObject || (comm1M_templateObject = comm1M_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\tmin-height: 100vh;\n\n\t.comm1_conters {\n\t    position: absolute;\n\t\ttop: 50%;\n\t\twidth: 86%;\n\t\theight: 440px;\n\t\tleft: 7%;\n\t\tmargin-top: -240px;\n\t\tz-index: 99;\n\t\tanimation: upDown 2s linear infinite;\n\t}\n\t.comm1_tit1 {\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 28px;\n\t\t\tcolor: #FBBD15;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 30px;\n    \t\tmargin-bottom: 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 13px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t}\n\t\timg {\n\t\t\twidth: 80%;\n\t\t    margin: 30px 0;\n\t\t}\n\t}\n\t.comm1_tit2 {\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 25px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 30px;\n\t\t\ttext-shadow: 0 0 5px rgb(255, 255, 255, 0.35);\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t\tmargin-top: 15px;\n\t\t}\n\t}\n\t.comm1_img {\n\t    margin-bottom: 25px;\n\t\timg {\n\t\t\twidth: 60px;\n\t\t\tmargin-left: -10px;\n\t\t}\n\t}\n\t.comm1_wallet {\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\twidth: 228px;\n\t\theight: 51px;\n\t\tline-height: 51px;\n\t\tfont-size: 14px;\n\t\tcolor: #631C1D;\n\t\tfont-weight: bold;\n\t\tfont-family: \"swissek\";\n\t\ttext-align: center;\n\t\tmargin-top: 50px;\n\t}\n"])), anniu_namespaceObject);
function Comm1M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var _useGetOwnAddress = useGetOwnAddress(),
    address = _useGetOwnAddress.address,
    isConnected = _useGetOwnAddress.isConnected;
  var connectWallet = useConnectWallet();
  return /*#__PURE__*/react.createElement(comm1M_CustomStyle, {
    className: "comm1_swiper"
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.tq, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    modules: [swiper_esm/* Autoplay */.pt],
    pagination: {
      clickable: true
    }
  }, /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.o5, null, /*#__PURE__*/react.createElement("img", {
    src: home_banner1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.o5, null, /*#__PURE__*/react.createElement("img", {
    src: home_banner2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_conters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_tit1"
  }, /*#__PURE__*/react.createElement("span", null, "Crypto Arena"), /*#__PURE__*/react.createElement("em", null, t("The World's First Blockchain-Based Casual Competitive Gaming Platform")), /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm1_tit2"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds"), " ", /*#__PURE__*/react.createElement("br", null), " ", t("Your Fortune")) : /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds Your Fortune")), /*#__PURE__*/react.createElement("em", null, t("Make every leisure moment create value"))), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "comm1_wallet"
  }, /*#__PURE__*/react.createElement("span", null, address ? address.substring(0, 6) + "..." + address.substr(-4) : '')) : /*#__PURE__*/react.createElement("div", {
    className: "comm1_wallet",
    onClick: function onClick() {
      return connectWallet();
    }
  }, t('Connect Wallet'))));
}
/* harmony default export */ const comm1M = (Comm1M);
;// CONCATENATED MODULE: ./public/images/home_bg2.jpg
const home_bg2_namespaceObject = __webpack_require__.p + "cd39b79a0fc2ee7c9a69.jpg";
;// CONCATENATED MODULE: ./public/images/home_bg2_m.jpg
const home_bg2_m_namespaceObject = __webpack_require__.p + "a507c0c00adc93e9e616.jpg";
;// CONCATENATED MODULE: ./public/images/comm1_2.png
const comm1_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/comm2_1.png
const comm2_1_namespaceObject = __webpack_require__.p + "e578aa6158717a5359b9.png";
;// CONCATENATED MODULE: ./public/images/comm2_2.png
const comm2_2_namespaceObject = __webpack_require__.p + "84594f6acc2e18677dbf.png";
;// CONCATENATED MODULE: ./public/images/comm2_3.png
const comm2_3_namespaceObject = __webpack_require__.p + "03ff86d3912fe167ff9e.png";
;// CONCATENATED MODULE: ./public/images/comm2_4.png
const comm2_4_namespaceObject = __webpack_require__.p + "298ca61bdab91475a16a.png";
;// CONCATENATED MODULE: ./src/components/index/comm2.jsx

var comm2_templateObject;
function comm2_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }












var comm2_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm2_templateObject || (comm2_templateObject = comm2_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n    background-size: cover;\n\n\t.comm2_tit {\n\t\tmargin-top: 60px;\n\t}\n\t.comm2_xian {\n\t\tmargin-top: 20px;\n    \tmargin-bottom: 40px;\n\t}\n\t.comm2_list {\n\t    display: flex;\n\t\tgap: 25px;\n\t\tspan {\n\t\t\twidth: 339px;\n    \t\theight: 457px;\n\t\t}\n\t\tem {\n\t\t    display: block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 30px;\n\t\t\ttext-shadow: rgb(0, 0, 0, 0.26) 3px 0px 0px;\n\t\t\tmargin: auto;\n\t\t\tpadding-top: 300px;\n\t\t\ttext-align: left;\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\t.comm2_bg1 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg2 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg3 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg4 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n    \t\tmargin-bottom: 20px;\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm2_list {\n\t\t\tspan {\n\t\t\t\twidth: 223px;\n    \t\t\theight: 301px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tpadding-top: 160px;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: url(", ") top center no-repeat;\n\t\tbackground-size: cover;\n\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 10px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm2_tit {\n\t\t\tspan {\n\t\t\t\tfont-size: 22px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tline-height: 30px;\n\t\t\t}\n\t\t}\n\t\t.comm2_list {\n\t\t\tjustify-content: center;\n\t\t\tgap: 10px;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin: 0 20px;\n\t\t\tspan {\n\t\t\t\t// width: 160px;\n    \t\t\t// height: 216px;\n  \t\t\t\t// box-sizing: border-box;\n        \t\twidth: calc(50% - 5px);\n\t\t\t\theight: auto;\n        \t\taspect-ratio: 373 / 502;\n\t\t\t}\n\t\t\tem {\n\t\t\t    width: 85%;\n\t\t\t\tpadding-top: 70%;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 18px;\n\t\t\t}\n\t\t}\n\t}\n"])), home_bg2_namespaceObject, comm2_1_namespaceObject, comm2_2_namespaceObject, comm2_3_namespaceObject, comm2_4_namespaceObject, home_bg2_m_namespaceObject);
function Comm2() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm2_CustomStyle, {
    className: "comm_conterbg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit"
  }, /*#__PURE__*/react.createElement("span", null, t("Your Fun first")), /*#__PURE__*/react.createElement("em", null, t("Fair competition")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_xian"
  }, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: comm1_2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_list"
  }, /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg1 comm2_animation1"
  }, /*#__PURE__*/react.createElement("em", null, t("Selected a variety of easy and casual games"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg2 comm2_animation2"
  }, /*#__PURE__*/react.createElement("em", null, t("Quick match, quick battle start"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg3 comm2_animation3"
  }, /*#__PURE__*/react.createElement("em", null, t("A balancing mechanism based on skills rather than krypton gold"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg4 comm2_animation4"
  }, /*#__PURE__*/react.createElement("em", null, t("Charm Rankings Combine Game Performance and Leisure Index")))));
}
/* harmony default export */ const comm2 = (Comm2);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(7522);
;// CONCATENATED MODULE: ./src/components/index/comm2M.jsx

var comm2M_templateObject;


function comm2M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */









var comm2M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm2M_templateObject || (comm2M_templateObject = comm2M_taggedTemplateLiteralLoose(["\n\tmin-height: 100vh;\n\t.comm2_title {\n\t\tmargin-top: 110px;\n\t\tpadding: 0 20px;\n\t\tspan {\n\t\t\tfont-size: 22px;\n\t\t\tline-height: 30px;\n\t\t}\n\t\tem {\n\t\t\tfont-size: 20px;\n\t\t\tline-height: 30px;\n\t\t}\n\t}\n\t.comm2_list {\n\t    display: flex;\n\t\tjustify-content: center;\n\t\tgap: 10px;\n\t\tflex-wrap: wrap;\n\t\tmargin: 0 20px;\n\t\tspan {\n\t\t\twidth: calc(50% - 5px);\n\t\t\theight: auto;\n\t\t\taspect-ratio: 339 / 457;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\tem {\n\t\t    display: block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 13px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 18px;\n\t\t\ttext-shadow: rgb(0, 0, 0, 0.26) 3px 0px 0px;\n\t\t\tmargin: auto;\n\t\t\tpadding-top: 70%;\n\t\t\ttext-align: left;\n\t\t\twidth: 85%;\n\t\t}\n\t}\n\t.comm2_bg1 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg2 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg3 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n\t.comm2_bg4 {\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t}\n"])), comm2_1_namespaceObject, comm2_2_namespaceObject, comm2_3_namespaceObject, comm2_4_namespaceObject);
function Comm2M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef.current) {
      observer2.observe(conterRef.current);
    }
    return function () {
      if (conterRef.current) {
        observer2.unobserve(conterRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm2M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg2_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_title comm2_tit_animation",
    ref: titleRef
  }, /*#__PURE__*/react.createElement("span", null, t("Your Fun first")), /*#__PURE__*/react.createElement("em", null, t("Fair competition")), /*#__PURE__*/react.createElement("div", {
    className: "comm_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_list comm2_conter_animation",
    ref: conterRef
  }, /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg1 comm2_animation1"
  }, /*#__PURE__*/react.createElement("em", null, t("Selected a variety of easy and casual games"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg2 comm2_animation2"
  }, /*#__PURE__*/react.createElement("em", null, t("Quick match, quick battle start"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg3 comm2_animation3"
  }, /*#__PURE__*/react.createElement("em", null, t("A balancing mechanism based on skills rather than krypton gold"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg4 comm2_animation4"
  }, /*#__PURE__*/react.createElement("em", null, t("Charm Rankings Combine Game Performance and Leisure Index")))))));
}
/* harmony default export */ const comm2M = (Comm2M);
;// CONCATENATED MODULE: ./public/images/home_bg3.jpg
const home_bg3_namespaceObject = __webpack_require__.p + "630cfd4fa85c8ecc5312.jpg";
;// CONCATENATED MODULE: ./public/images/home_bg3_m.jpg
const home_bg3_m_namespaceObject = __webpack_require__.p + "bed9eeb5d87200915e7e.jpg";
;// CONCATENATED MODULE: ./public/images/comm3_1_en.png
const comm3_1_en_namespaceObject = __webpack_require__.p + "e2fd5217aed2ac05b0c0.png";
;// CONCATENATED MODULE: ./public/images/comm3_1_zh.png
const comm3_1_zh_namespaceObject = __webpack_require__.p + "e0ac865f6b3de375ab07.png";
;// CONCATENATED MODULE: ./public/images/comm3_2.png
const comm3_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/components/index/comm3.jsx

var comm3_templateObject;
function comm3_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/rules-of-hooks */








var comm3_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm3_templateObject || (comm3_templateObject = comm3_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n    background-size: cover;\n\n\t.comm3_conter {\n\t    display: flex;\n\t\talign-items: center;\n\t\twidth: 75%;\n\t}\n\t.comm3_right {\n\t\ttext-align: right;\n\t\tmargin-top: 40px;\n\t\tmargin-right: 6%;\n\t}\n\t.comm3_xian {\n\t    margin: 40px 0;\n\t}\n\t.comm3_des {\n\t\tfont-size: 18px;\n\t\tline-height: 30px;\n\t\ttext-shadow: 1px 2px 0px rgba(0, 0, 0, 0.16);\n\t\tfont-family: \"swissek\";\n\t\tfont-weight: bold;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\t.comm3_flex_tit {\n\t\tdisplay: flex;\n    \tjustify-content: right;\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm3_conter {\n\t\t\twidth: 90%;\n\t\t}\n\t\t.comm3_left {\n\t\t\twidth: 35%;\n\t\t\timg {\n\t\t\t\twidth: 600px;\n\t\t\t}\n\t\t}\n\t\t.comm3_right {\n\t\t\twidth: 65%;\n\t\t}\n\t\t.comm3_xian {\n\t\t\tmargin: 20px 0px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: url(", ") top center no-repeat;\n\t\tbackground-size: cover;\n\n\t\t.comm3_conter {\n\t\t    flex-direction: column-reverse;\n    \t\twidth: 90%;\n\t\t}\n\t\t.comm3_xian {\n\t\t    margin: 10px 0px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm3_left {\n\t\t    width: 100%;\n\t\t\tmargin-top: -50px;\n\t\t\timg {\n\t\t\t\twidth: 360px;\n\t\t\t}\n\t\t}\n\t\t.comm3_right {\n\t\t    width: 100%;\n\t\t\ttext-align: center;\n\t\t\tmargin-right: 0px;\n\t\t}\n\t\t.comm3_des {\n\t\t\tfont-size: 16px;\n    \t\tline-height: 20px;\n\t\t\tspan {\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t}\n\t\t}\n\t\t.comm3_flex_tit {\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n"])), home_bg3_namespaceObject, home_bg3_m_namespaceObject);
function Comm3() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm3_CustomStyle, {
    className: "comm_conterbg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm3_left"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("img", {
    src: comm3_1_en_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm3_1_zh_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_right"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("div", {
    className: "comm_tit"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      color: "#FBBD15"
    }
  }, t("Earnings"), " ", /*#__PURE__*/react.createElement("i", {
    style: {
      color: "#fff"
    }
  }, t("&"))), /*#__PURE__*/react.createElement("em", null, t("Achievements"))) : /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm3_flex_tit"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      color: "#FBBD15"
    }
  }, t("Earnings"), /*#__PURE__*/react.createElement("i", {
    style: {
      color: "#fff"
    }
  }, t("&"))), /*#__PURE__*/react.createElement("em", null, t("Achievements"))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm3_des"
  }, /*#__PURE__*/react.createElement("span", null, t("Cross-game asset interoperability system")), /*#__PURE__*/react.createElement("span", null, t("Real Earnings, Withdraw Anytime")), /*#__PURE__*/react.createElement("span", null, t("Massive Reward Pool, Surprises Anytime")), /*#__PURE__*/react.createElement("span", null, t("On-Chain Records of Your Gaming Highlights"))))));
}
/* harmony default export */ const comm3 = (Comm3);
;// CONCATENATED MODULE: ./public/images/comm3_m_bg.png
const comm3_m_bg_namespaceObject = __webpack_require__.p + "7fbaf07f1ea49682b8b1.png";
;// CONCATENATED MODULE: ./public/images/comm3_ico1.png
const comm3_ico1_namespaceObject = __webpack_require__.p + "f55a3114e027b6efe797.png";
;// CONCATENATED MODULE: ./public/images/comm3_ico2.png
const comm3_ico2_namespaceObject = __webpack_require__.p + "f0992e637a9244528ae0.png";
;// CONCATENATED MODULE: ./public/images/comm3_ico3.png
const comm3_ico3_namespaceObject = __webpack_require__.p + "b9f30c7cd0b0f45b1e19.png";
;// CONCATENATED MODULE: ./public/images/comm3_ico4.png
const comm3_ico4_namespaceObject = __webpack_require__.p + "f5b13c78cd619392d3db.png";
;// CONCATENATED MODULE: ./src/components/index/comm3M.jsx

var comm3M_templateObject;


function comm3M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */










var comm3M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm3M_templateObject || (comm3M_templateObject = comm3M_taggedTemplateLiteralLoose(["\n\tmin-height: 100vh;\n\t.comm3_tit {\n\t\tmargin-top: 110px;\n\t}\n\t.comm3_flex_tit {\n\t\tdisplay: flex;\n\t}\n\t.comm_m_conter {\n\t\tposition: relative;\n\t\tbackground: url(", ") center no-repeat;\n    \tbackground-size: cover;\n\t\twidth: 100%;\n\t\theight: auto;\n\t\taspect-ratio: 750 / 1134;\n\t\tpadding-top: 32%;\n\t}\n\t.comm_m_icos {\n\t    display: flex;\n    \talign-items: center;\n\t\twidth: 66%;\n    \tmargin: auto;\n\t\timg {\n\t\t    width: 65px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 13px;\n\t\t\tline-height: 18px;\n\t\t\ttext-shadow: 1px 2px 0px rgba(0,0,0,0.33);\n\t\t\tfont-family: \"swissek\";\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n\t.comm_m_conter1 {\n\t\tposition: absolute;\n\t\ttop: 22%;\n\t\tleft: 17%;\n\t}\n\t.comm_m_conter2 {\n\t\tposition: absolute;\n\t\ttop: 36%;\n\t\tleft: 17%;\n\t}\n\t.comm_m_conter3 {\n\t\tposition: absolute;\n\t\ttop:51%;\n\t\tleft: 17%;\n\t}\n\t.comm_m_conter4 {\n\t\tposition: absolute;\n\t\ttop: 65%;\n\t\tleft: 17%;\n\t}\n"])), comm3_m_bg_namespaceObject);
function Comm3M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef.current) {
      observer2.observe(conterRef.current);
    }
    return function () {
      if (conterRef.current) {
        observer2.unobserve(conterRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm3M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg3_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm2_tit_animation",
    ref: titleRef
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("div", {
    className: "comm_padding comm_tit comm3_tit"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      color: "#FBBD15"
    }
  }, t("Earnings"), " ", /*#__PURE__*/react.createElement("i", {
    style: {
      color: "#fff"
    }
  }, t("&"))), /*#__PURE__*/react.createElement("em", null, t("Achievements"))) : /*#__PURE__*/react.createElement("div", {
    className: "comm_padding comm_tit comm3_tit comm3_flex_tit"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      color: "#FBBD15"
    }
  }, t("Earnings"), /*#__PURE__*/react.createElement("i", {
    style: {
      color: "#fff"
    }
  }, t("&"))), /*#__PURE__*/react.createElement("em", null, t("Achievements"))), /*#__PURE__*/react.createElement("div", {
    className: "comm_padding comm_xian",
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm_m_conter comm3_conter_animation",
    ref: conterRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_m_icos comm_m_conter1 comm3_animation1"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Cross-game asset interoperability system"))), /*#__PURE__*/react.createElement("div", {
    className: "comm_m_icos comm_m_conter2 comm3_animation2"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Real Earnings, Withdraw Anytime"))), /*#__PURE__*/react.createElement("div", {
    className: "comm_m_icos comm_m_conter3 comm3_animation3"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("Massive Reward Pool, Surprises Anytime"))), /*#__PURE__*/react.createElement("div", {
    className: "comm_m_icos comm_m_conter4 comm3_animation4"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm3_ico4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("On-Chain Records of Your Gaming Highlights")))))));
}
/* harmony default export */ const comm3M = (Comm3M);
;// CONCATENATED MODULE: ./public/images/home_bg4.jpg
const home_bg4_namespaceObject = __webpack_require__.p + "9401435cc6a2c6872089.jpg";
;// CONCATENATED MODULE: ./public/images/comm4_m_ico1.jpg
const comm4_m_ico1_namespaceObject = __webpack_require__.p + "04132f5e2d43bdbf74bd.jpg";
;// CONCATENATED MODULE: ./public/images/comm4_m_ico2.jpg
const comm4_m_ico2_namespaceObject = __webpack_require__.p + "60be1150f004c0712e2d.jpg";
;// CONCATENATED MODULE: ./public/images/comm4_m_ico3.jpg
const comm4_m_ico3_namespaceObject = __webpack_require__.p + "4df7211ef8e2d3926f58.jpg";
;// CONCATENATED MODULE: ./public/images/comm4_m_ico4.jpg
const comm4_m_ico4_namespaceObject = __webpack_require__.p + "3dca17ff315a754a12fe.jpg";
;// CONCATENATED MODULE: ./public/images/comm4_m_ico5.jpg
const comm4_m_ico5_namespaceObject = __webpack_require__.p + "60ddd294963655449e8a.jpg";
;// CONCATENATED MODULE: ./src/components/index/comm4.jsx

var comm4_templateObject;

function comm4_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/rules-of-hooks */













var comm4_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm4_templateObject || (comm4_templateObject = comm4_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n\tbackground-size: cover;\n\n\t.comm2_xian {\n\t\tmargin-top: 20px;\n    \tmargin-bottom: 40px;\n\t}\n\t.comm4_conters {\n\t\theight: 210px;\n\t    text-align: left;\n\t\tpadding: 35px 20px;\n\t\tem {\n\t\t\tdisplay: block;\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-family: \"swisse\";\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 60px;\n\t\t\tfont-weight: 500;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n    \t\tmargin-bottom: 20px;\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm4_conters {\n\t\t\tpadding: 20px;\n\t\t\ti {\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t}\n\t\t}\n\t}\n"])), home_bg4_namespaceObject);
function Comm4() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var images = [{
    image: comm4_m_ico1_namespaceObject,
    title: "Crypto Snake",
    des: t("Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!")
  }, {
    image: comm4_m_ico2_namespaceObject,
    title: "Crypto Bomberman",
    des: t("Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!")
  }, {
    image: comm4_m_ico3_namespaceObject,
    title: "Crypto Tetris",
    des: t("Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!")
  }, {
    image: comm4_m_ico4_namespaceObject,
    title: "Crypto Bird",
    des: t("Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ")
  }, {
    image: comm4_m_ico5_namespaceObject,
    title: "Crypto Candy Crush",
    des: t("Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!")
  }, {
    image: comm4_m_ico1_namespaceObject,
    title: "Crypto Snake",
    des: t("Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!")
  }, {
    image: comm4_m_ico2_namespaceObject,
    title: "Crypto Bomberman",
    des: t("Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!")
  }, {
    image: comm4_m_ico3_namespaceObject,
    title: "Crypto Tetris",
    des: t("Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!")
  }, {
    image: comm4_m_ico4_namespaceObject,
    title: "Crypto Bird",
    des: t("Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ")
  }, {
    image: comm4_m_ico5_namespaceObject,
    title: "Crypto Candy Crush",
    des: t("Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!")
  }];
  var _useState = (0,react.useState)(null),
    swiperInstance = _useState[0],
    setSwiperInstance = _useState[1];

  // 点击左箭头
  var handlePrevClick = function handlePrevClick() {
    swiperInstance && swiperInstance.slidePrev(); // 滑动到上一张
  };

  // 点击右箭头
  var handleNextClick = function handleNextClick() {
    swiperInstance && swiperInstance.slideNext(); // 滑动到下一张
  };
  return /*#__PURE__*/react.createElement(comm4_CustomStyle, {
    className: "comm_conterbg comm4_swiper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit"
  }, /*#__PURE__*/react.createElement("span", null, t("Popular Games")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_animation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "swiper-container"
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.tq, {
    onSwiper: setSwiperInstance // 获取swiper实例
    ,
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: false // 关闭默认的导航按钮，使用自定义按钮
    ,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    modules: [swiper_esm/* Autoplay */.pt]
  }, images.map(function (item, index) {
    return /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.o5, {
      key: index
    }, /*#__PURE__*/react.createElement("img", {
      src: item.image,
      alt: "Slide " + (index + 1)
    }), /*#__PURE__*/react.createElement("div", {
      className: "comm4_conters"
    }, /*#__PURE__*/react.createElement("em", null, item.title), /*#__PURE__*/react.createElement("i", null, item.des)));
  })), /*#__PURE__*/react.createElement("div", {
    className: "swiper-button-prev",
    onClick: handlePrevClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "swiper-button-next",
    onClick: handleNextClick
  }))));
}
/* harmony default export */ const comm4 = (Comm4);
;// CONCATENATED MODULE: ./public/images/home_bg4_m.jpg
const home_bg4_m_namespaceObject = __webpack_require__.p + "fa2ee97ae047fc032cdd.jpg";
;// CONCATENATED MODULE: ./src/components/index/comm4M.jsx

var comm4M_templateObject;


function comm4M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */











var comm4M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm4M_templateObject || (comm4M_templateObject = comm4M_taggedTemplateLiteralLoose(["\n\t.comm4_tit {\n\t\tmargin-top: 60px;\n\t}\n\t.comm4_bgico {\n\t    background: linear-gradient(90deg, #451A90, #7D278A);\n\t\tbox-shadow: 6px 17px 51px 0px rgba(0, 0, 0, 0.63);\n\t\tborder-radius: 14px;\n\t\tmargin-bottom: 15px;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\tborder-radius: 14px 14px 0 0;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tpadding: 15px 15px 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-family: \"swissek\";\n\t\t}\n\t\ti {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 12px;\n\t\t\tfont-family: \"swisse\";\n\t\t\tline-height: 17px;\n\t\t\tmargin-top: 5px;\n\t\t}\n\t}\n"])));
function Comm4M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef1 = (0,react.useRef)(null);
  var conterRef2 = (0,react.useRef)(null);
  var conterRef3 = (0,react.useRef)(null);
  var conterRef4 = (0,react.useRef)(null);
  var conterRef5 = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef1.current) {
      observer2.observe(conterRef1.current);
    }
    return function () {
      if (conterRef1.current) {
        observer2.unobserve(conterRef1.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef2.current) {
      observer2.observe(conterRef2.current);
    }
    return function () {
      if (conterRef2.current) {
        observer2.unobserve(conterRef2.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef3.current) {
      observer2.observe(conterRef3.current);
    }
    return function () {
      if (conterRef3.current) {
        observer2.unobserve(conterRef3.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef4.current) {
      observer2.observe(conterRef4.current);
    }
    return function () {
      if (conterRef4.current) {
        observer2.unobserve(conterRef4.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef5.current) {
      observer2.observe(conterRef5.current);
    }
    return function () {
      if (conterRef5.current) {
        observer2.unobserve(conterRef5.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm4M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg4_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter comm_padding"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm4_tit comm2_tit_animation",
    ref: titleRef
  }, /*#__PURE__*/react.createElement("span", null, t("Popular Games")), /*#__PURE__*/react.createElement("div", {
    className: "comm_xian",
    style: {
      marginBottom: "10px"
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_bgico comm4_animation1",
    ref: conterRef1
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_m_ico1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, "Crypto Snake"), /*#__PURE__*/react.createElement("i", null, t("Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!")))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_bgico comm4_animation2",
    ref: conterRef2
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_m_ico2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, "Crypto Bomberman"), /*#__PURE__*/react.createElement("i", null, t("Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!")))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_bgico comm4_animation3",
    ref: conterRef3
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_m_ico3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Crypto Tetris")), /*#__PURE__*/react.createElement("i", null, t("Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!")))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_bgico comm4_animation4",
    ref: conterRef4
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_m_ico4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, t("Crypto Bird")), /*#__PURE__*/react.createElement("i", null, t("Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ")))), /*#__PURE__*/react.createElement("div", {
    className: "comm4_bgico comm4_animation5",
    ref: conterRef5
  }, /*#__PURE__*/react.createElement("img", {
    src: comm4_m_ico5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("em", null, "Crypto Candy Crush"), /*#__PURE__*/react.createElement("i", null, t("Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!")))))));
}
/* harmony default export */ const comm4M = (Comm4M);
;// CONCATENATED MODULE: ./public/images/home_bg5.jpg
const home_bg5_namespaceObject = __webpack_require__.p + "bfaa6ddc67eadf934538.jpg";
;// CONCATENATED MODULE: ./public/images/home_bg5_m.jpg
const home_bg5_m_namespaceObject = __webpack_require__.p + "8dbe453950ca792be749.jpg";
;// CONCATENATED MODULE: ./public/images/comm5_1.png
const comm5_1_namespaceObject = __webpack_require__.p + "3e589e37eb36f18e3fed.png";
;// CONCATENATED MODULE: ./public/images/comm5_2.png
const comm5_2_namespaceObject = __webpack_require__.p + "e586a0e18cad703d378b.png";
;// CONCATENATED MODULE: ./public/images/comm5_3.png
const comm5_3_namespaceObject = __webpack_require__.p + "32e453060332e3dfcb11.png";
;// CONCATENATED MODULE: ./public/images/comm5_4.png
const comm5_4_namespaceObject = __webpack_require__.p + "192467c68a7673c21f2f.png";
;// CONCATENATED MODULE: ./public/images/comm5_1_m.png
const comm5_1_m_namespaceObject = __webpack_require__.p + "814790e9017faec0c1fd.png";
;// CONCATENATED MODULE: ./public/images/comm5_2_m.png
const comm5_2_m_namespaceObject = __webpack_require__.p + "713f0887835d124a9b9d.png";
;// CONCATENATED MODULE: ./public/images/comm5_3_m.png
const comm5_3_m_namespaceObject = __webpack_require__.p + "a918aad339fce5aef29a.png";
;// CONCATENATED MODULE: ./public/images/comm5_4_m.png
const comm5_4_m_namespaceObject = __webpack_require__.p + "549f781e0affb99272d8.png";
;// CONCATENATED MODULE: ./src/components/index/comm5.jsx

var comm5_templateObject;
function comm5_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }














var comm5_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm5_templateObject || (comm5_templateObject = comm5_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n\tbackground-size: cover;\n\n\t.comm2_xian {\n\t\tmargin-top: 20px;\n\t}\n\t.comm2_list {\n\t\tdisplay: flex;\n\t\tgap: 60px;\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\twidth: 340px;\n\t\t\theight: 558px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 27px;\n\t\t\ttext-shadow: rgb(0, 0, 0, 0.26) 3px 0px 0px;\n\t\t\tmargin: auto;\n\t\t\tpadding-top: 100px;\n\t\t}\n\t}\n\t.comm2_bg1 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n\t.comm2_bg2 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\t.comm2_bg3 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t}\n\t.comm2_bg4 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm2_list {\n\t\t\tgap: 30px;\n\t\t\tspan {\n\t\t\t\twidth: 223px;\n    \t\t\theight: 366px;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tline-height: 25px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: url(", ") top center no-repeat;\n\t\tbackground-size: cover;\n\n\t\t.comm_tit {\n\t\t\tmargin-top: 40px;\n\t\t}\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm2_list {\n\t\t\tjustify-content: center;\n\t\t\tgap: 10px;\n\t\t\tflex-wrap: wrap;\n\t\t\tmargin: 30px 20px 0px;\n\t\t\tspan {\n\t\t\t\t// width: 160px;\n\t\t\t\t// height: 262px;\n\t\t\t\tmargin-top: -40px;\n\t\t\t\twidth: calc(50% - 5px);\n\t\t\t\theight: auto;\n        \t\taspect-ratio: 355 / 579;\n\t\t\t}\n\t\t\tem {\n\t\t\t\tpadding-top: 50px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 20px;\n\t\t\t}\n\t\t}\n\t\t.comm2_bg4 {\n\t\t\tem {\n\t\t\t\tpadding-top: 75px !important;\n\t\t\t}\n\t\t}\n\t\t.comm2_bg1 {\n\t\t\tbackground: url(", ") center no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\tem {\n\t\t\t\twidth: 70%;\n\t\t\t}\n\t\t}\n\t\t.comm2_bg2 {\n\t\t\tbackground: url(", ") center no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\tem {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm2_bg3 {\n\t\t\tbackground: url(", ") center no-repeat;\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t.comm2_bg4 {\n\t\t\tbackground: url(", ") center no-repeat;\n\t\t\tbackground-size: cover;\n\t\t\tem {\n\t\t\t\tpadding-top: 75px !important;\n\t\t\t}\n\t\t}\n\t}\n"])), home_bg5_namespaceObject, comm5_1_namespaceObject, comm5_2_namespaceObject, comm5_3_namespaceObject, comm5_4_namespaceObject, home_bg5_m_namespaceObject, comm5_1_m_namespaceObject, comm5_2_m_namespaceObject, comm5_3_m_namespaceObject, comm5_4_m_namespaceObject);
function Comm5() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm5_CustomStyle, {
    className: "comm_conterbg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
    className: "comm5_animation1"
  }, t("Decentralized")), /*#__PURE__*/react.createElement("em", {
    className: "comm5_animation2"
  }, t("Operation"))) : /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react.createElement("span", null, t("Decentralized")), /*#__PURE__*/react.createElement("em", null, t("Operation")))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_xian comm5_animation3"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm2_list"
  }, /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg1 comm2_animation1"
  }, /*#__PURE__*/react.createElement("em", null, t("Club-based operation model"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg2 comm2_animation2"
  }, /*#__PURE__*/react.createElement("em", null, t("Low threshold to support project parties to enter"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg3 comm2_animation3"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("em", null, t("Custom"), " ", /*#__PURE__*/react.createElement("br", null), " ", t("Games")) : /*#__PURE__*/react.createElement("em", null, t("Custom Games"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg4 comm2_animation4"
  }, /*#__PURE__*/react.createElement("em", null, t("Community enjoys the greatest benefits of the platform")))));
}
/* harmony default export */ const comm5 = (Comm5);
;// CONCATENATED MODULE: ./src/components/index/comm5M.jsx

var comm5M_templateObject;


function comm5M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */









var comm5M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm5M_templateObject || (comm5M_templateObject = comm5M_taggedTemplateLiteralLoose(["\n\t.comm2_list {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\t\tmargin: 30px 10px 0px;\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tmargin-top: -40px;\n\t\t\twidth: calc(50% - 5px);\n\t\t\theight: auto;\n\t\t\taspect-ratio: 355 / 579;\n\t\t\tmargin-bottom: 40px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 12px;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: #FFFFFF;\n\t\t\tline-height: 20px;\n\t\t\ttext-shadow: rgb(0, 0, 0, 0.26) 3px 0px 0px;\n\t\t\tmargin: auto;\n\t\t\tpadding-top: 50px;\n\t\t}\n\t}\n\t.comm2_bg1 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 70%;\n\t\t}\n\t}\n\t.comm2_bg2 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 80%;\n\t\t}\n\t}\n\t.comm2_bg3 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t}\n\t.comm2_bg4 {\n\t\tbackground: url(", ") center no-repeat;\n\t\tbackground-size: cover;\n\t\tem {\n\t\t\twidth: 80%;\n\t\t\tpadding-top: 75px;\n\t\t}\n\t}\n\t.comm_tit {\n\t\tmargin-top: 40px;\n\t}\n"])), comm5_1_m_namespaceObject, comm5_2_m_namespaceObject, comm5_3_m_namespaceObject, comm5_4_m_namespaceObject);
function Comm5M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef.current) {
      observer2.observe(conterRef.current);
    }
    return function () {
      if (conterRef.current) {
        observer2.unobserve(conterRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm5M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg5_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit comm_padding comm2_tit_animation",
    style: {
      marginTop: "120px"
    },
    ref: titleRef
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", null, t("Decentralized")), /*#__PURE__*/react.createElement("em", null, t("Operation"))) : /*#__PURE__*/react.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react.createElement("span", null, t("Decentralized")), /*#__PURE__*/react.createElement("em", null, t("Operation"))), /*#__PURE__*/react.createElement("div", {
    className: "comm_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_list comm2_conter_animation",
    ref: conterRef
  }, /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg1 comm2_animation1"
  }, /*#__PURE__*/react.createElement("em", null, t("Club-based operation model"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg2 comm2_animation2"
  }, /*#__PURE__*/react.createElement("em", null, t("Low threshold to support project parties to enter"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg3 comm2_animation3"
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("em", null, t("Custom"), " ", /*#__PURE__*/react.createElement("br", null), " ", t("Games")) : /*#__PURE__*/react.createElement("em", null, t("Custom Games"))), /*#__PURE__*/react.createElement("span", {
    className: "comm2_bg4 comm2_animation4"
  }, /*#__PURE__*/react.createElement("em", null, t("Community enjoys the greatest benefits of the platform")))))));
}
/* harmony default export */ const comm5M = (Comm5M);
;// CONCATENATED MODULE: ./public/images/home_bg6.jpg
const home_bg6_namespaceObject = __webpack_require__.p + "35df068b984e01f86be5.jpg";
;// CONCATENATED MODULE: ./public/images/home_bg6_m.jpg
const home_bg6_m_namespaceObject = __webpack_require__.p + "c707ebc59ad0f7df2602.jpg";
;// CONCATENATED MODULE: ./public/images/partner.png
const partner_namespaceObject = __webpack_require__.p + "51cf2afaf8ba667a3184.png";
;// CONCATENATED MODULE: ./public/images/partner_m.png
const partner_m_namespaceObject = __webpack_require__.p + "084a24bfe1a9dde9d5a6.png";
;// CONCATENATED MODULE: ./src/components/index/comm6.jsx

var comm6_templateObject;
function comm6_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/rules-of-hooks */










var comm6_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm6_templateObject || (comm6_templateObject = comm6_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n\tbackground-size: cover;\n\n\t.comm2_xian {\n\t\tmargin-top: 20px;\n    \tmargin-bottom: 40px;\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n    \t\tmargin-bottom: 20px;\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t\t.comm6_part {\n\t\t\timg {\n\t\t\t\twidth: 850px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: url(", ") top center no-repeat;\n\t\tbackground-size: cover;\n\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 30px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm6_part {\n\t\t\timg {\n\t\t\t\twidth: 90%;\n\t\t\t}\n\t\t}\n\t}\n"])), home_bg6_namespaceObject, home_bg6_m_namespaceObject);
function Comm6() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm6_CustomStyle, {
    className: "comm_conterbg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit"
  }, /*#__PURE__*/react.createElement("span", null, t("Partner")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_xian"
  }, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: comm1_2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_animation"
  }, !_isMobile() ? /*#__PURE__*/react.createElement("div", {
    className: "comm6_part"
  }, /*#__PURE__*/react.createElement("img", {
    src: partner_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "comm6_part"
  }, /*#__PURE__*/react.createElement("img", {
    src: partner_m_namespaceObject,
    alt: ""
  }))));
}
/* harmony default export */ const comm6 = (Comm6);
;// CONCATENATED MODULE: ./src/components/index/comm6M.jsx

var comm6M_templateObject;


function comm6M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */






var comm6M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm6M_templateObject || (comm6M_templateObject = comm6M_taggedTemplateLiteralLoose(["\n\t.comm6_part {\n\t    margin: 0 20px;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"])));
function Comm6M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef.current) {
      observer2.observe(conterRef.current);
    }
    return function () {
      if (conterRef.current) {
        observer2.unobserve(conterRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm6M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg6_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit comm_padding comm2_tit_animation",
    style: {
      marginTop: "120px"
    },
    ref: titleRef
  }, /*#__PURE__*/react.createElement("span", null, t("Partner")), /*#__PURE__*/react.createElement("div", {
    className: "comm_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_conter_animation",
    ref: conterRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm6_part comm2_animation1"
  }, /*#__PURE__*/react.createElement("img", {
    src: partner_m_namespaceObject,
    alt: ""
  }))))));
}
/* harmony default export */ const comm6M = (Comm6M);
;// CONCATENATED MODULE: ./public/images/home_bg7.jpg
const home_bg7_namespaceObject = __webpack_require__.p + "450a3761a7cc4b5f9480.jpg";
;// CONCATENATED MODULE: ./public/images/home_bg7_m.jpg
const home_bg7_m_namespaceObject = __webpack_require__.p + "7a670500176c0d892457.jpg";
;// CONCATENATED MODULE: ./public/images/comm7_1.png
const comm7_1_namespaceObject = __webpack_require__.p + "ce6d43b703343ff23662.png";
;// CONCATENATED MODULE: ./public/images/comm7_2.png
const comm7_2_namespaceObject = __webpack_require__.p + "cb96c0dfdc565b5c3819.png";
;// CONCATENATED MODULE: ./src/components/index/comm7.jsx

var comm7_templateObject;
function comm7_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/rules-of-hooks */










var comm7_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm7_templateObject || (comm7_templateObject = comm7_taggedTemplateLiteralLoose(["\n\tbackground: url(", ") top center no-repeat;\n\tbackground-size: cover;\n\n\t.comm2_xian {\n\t\tmargin-top: 20px;\n    \tmargin-bottom: 40px;\n\t}\n\t.comm7_flex {\n\t    display: flex;\n\t\twidth: 1150px;\n\t\tmargin: auto;\n\t\tgap: 40px;\n\t}\n\t.comm7_conter {\n\t\tdisplay: flex;\n    \talign-items: center;\n\t\twidth: 50%;\n\t\tspan {\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 30px;\n\t\t\ttext-shadow: 1px 2px 0px rgba(0,0,0,0.16);\n\t\t\ttext-align: left;\n    \t\tmargin-left: -20px;\n\t\t}\n\t}\n\n\n\t@media (max-width: 1600px) {\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n    \t\tmargin-bottom: 20px;\n\t\t\timg {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tbackground: url(", ") top center no-repeat;\n\t\tbackground-size: cover;\n\n\t\t.comm2_xian {\n\t\t\tmargin-top: 10px;\n\t\t\tmargin-bottom: 0px;\n\t\t\timg {\n\t\t\t\twidth: 80%;\n\t\t\t}\n\t\t}\n\t\t.comm7_flex {\n\t\t\tdisplay: block;\n    \t\twidth: 100%;\n\t\t}\n\t\t.comm7_conter {\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 80%;\n\t\t\t\tmargin: auto;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 20px;\n\t\t\t\tmargin-top: -30px;\n\t\t\t}\n\t\t}\n\t}\n"])), home_bg7_namespaceObject, home_bg7_m_namespaceObject);
function Comm7() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(comm7_CustomStyle, {
    className: "comm_conterbg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit"
  }, /*#__PURE__*/react.createElement("span", null, t("Join Now")), /*#__PURE__*/react.createElement("div", {
    className: "comm2_xian"
  }, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: comm1_2_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm2_animation"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!"))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("span", null, t("New users will receive a 'Casual Newbie Gift Pack' when they register, including: free little snake + game points"))))));
}
/* harmony default export */ const comm7 = (Comm7);
;// CONCATENATED MODULE: ./public/images/comm7_m_1.png
const comm7_m_1_namespaceObject = __webpack_require__.p + "0b68adacd479f08a32be.png";
;// CONCATENATED MODULE: ./public/images/comm7_m_2.png
const comm7_m_2_namespaceObject = __webpack_require__.p + "1d7afda72a01f9bf724b.png";
;// CONCATENATED MODULE: ./src/components/index/comm7M.jsx

var comm7M_templateObject;


function comm7M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */







var comm7M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm7M_templateObject || (comm7M_templateObject = comm7M_taggedTemplateLiteralLoose(["\n\t.comm7_flex {\n\t\tdisplay: block;\n    \twidth: 100%;\n\t}\n\t.comm7_conter {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\timg {\n\t\t\twidth: 80px;\n\t\t\tmargin-left: -15px;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\twidth: 80%;\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 20px;\n\t\t\ttext-shadow: 1px 2px 0px rgba(0,0,0,0.16);\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t}\n"])));
function Comm7M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  (0,react.useEffect)(function () {
    var language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  var titleRef = (0,react.useRef)(null);
  var conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var observer2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer2.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (conterRef.current) {
      observer2.observe(conterRef.current);
    }
    return function () {
      if (conterRef.current) {
        observer2.unobserve(conterRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm7M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg7_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter comm_padding"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_tit comm2_tit comm2_tit_animation",
    style: {
      marginTop: "120px"
    },
    ref: titleRef
  }, /*#__PURE__*/react.createElement("span", null, t("Join Now")), /*#__PURE__*/react.createElement("div", {
    className: "comm_xian"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm1_2_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "comm3_conter_animation",
    ref: conterRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_m_1_namespaceObject,
    alt: "",
    className: "comm3_animation1"
  }), /*#__PURE__*/react.createElement("span", {
    className: "comm3_animation2"
  }, t("At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!"))), /*#__PURE__*/react.createElement("div", {
    className: "comm7_conter"
  }, /*#__PURE__*/react.createElement("img", {
    src: comm7_m_2_namespaceObject,
    alt: "",
    className: "comm3_animation3"
  }), /*#__PURE__*/react.createElement("span", {
    className: "comm3_animation4"
  }, t("New users will receive a 'Casual Newbie Gift Pack' when they register, including: free little snake + game points"))))))));
}
/* harmony default export */ const comm7M = (Comm7M);
;// CONCATENATED MODULE: ./public/images/footer_1.png
const footer_1_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/footer_2.png
const footer_2_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./public/images/footer_3.png
const footer_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAAAXNSR0IArs4c6QAABQpJREFUWEfVmXtM1mUUxz+nqMAQlIvRjD+arqu2MsVS45ICqSAm07mIEl2bbdbWxbVqU0thNksrl84L6cw2W7aasVmWplFWaKTTSlNEEkM2pYFNJC5P76H3R69v7+X5veBa508433M+v9/vec55nvMK/wOTSBmNMdcAWUAGMAy4GUgC+gNtwHngNPAj8C3wqYiciCSfa0hjzHBgHjADGOAiqQGqgLeBTSJy0VZrDWmMuQlYChQAV9gmCOLXACwB1ohIZ7hYYSGNMQo03xNokQcyOlxAl//fDxSLyJFQupCQxph4YItnTT3gMrkb9z+AWSLyQTBRUEhjTDLwOXCHm4wR+nbpOheR1YH0ASGNMbpDdwMjIkwaiUxBS0Rkk7/4X5DeNVgBTIwkUy81fwI5IrLHN04gyOe8u7iX+SKW/wYMF5EmJ8IlkN4yc/Ay7GK3xBtEZHYwyA+BqTYRd++ppKHhDNkT7icpKTGk5MKFVnbu+oLW1ovMmD7NJryuzzQR+V6de96kMeZOoNr3b6GiTcqbxr791URHR/P0U/NISEjgxIlamptb6Orqon9sLKmpNxAbey2lZcs4e+4c/WJiqDl2mKioK21APxKRB/0h1wNzbNTqM3J0OnV1v9q69/j9cuQAAwdYdVPtRENF5GT3mzTGaCdpBOJss858aBY7d2mVsrdBg5I5fLAKkbCNzgn6ooiUOZC5wCe26fQNjk3Ppq1NDzvubPOm9eTmTLAVVYnIaAeyzHO8et5Wubj0Fd5cGbA5hA2RmXEf77/3Tlg/r0MHMNCB3O6mPxdOL+LLyq9tE13iFx8fz/GjWuWsbYwDeUwXqa0sd2IB1T+4StQTWnd2Q32NbSr1K3Ygm91smqJH5rBjx043iXp8U1Ku49CB79xon3Eg2z2H0Chb5Vur1rLoZV3G7m1K/iTK161yI1zgQOp9JNZW2dT0O2n3ZtLcrB/A3rT0VGzbStqou+1FMN+B1KZ+vRtl5Vd7KZk9l+aWFitZVFQUpYsXMruk2Mrfx2muA7lPm4iNetFLZWSkjyMrK50zZxpZV74R7eMna+toOa8f5B+LiYkhNXUw96SNoqSkmGG332aTwt8n34HcCDxqE6GmppYpU2ewYvlScrLH90gm5xdSta/7PNBjiYkJVH2zm7g460YWCGGIA/k4YL2aN7+7hQULl/DG68vIzZ3A8eM1ZGQFvga57DD+kI0ikuJADgG0Vlo11c7OTiblF1JdfSDsy99Qvpq8yREf8jeLyN91Us0Yo9dL623X3t7eXSt/PnKU9o4Olq9YGRC4l5AFIrLNF3IuEFFDrq8/zV0jx/Y1ZD1wo4h0+EL287Qg7VcpYb+hn8OpU/WMGDUuoEwLtxbwCOxZEXlNdf53HFcbyEn8ccX27s8eyAYlJ/Fw0Uy0TrowPU3fIiKtgSD1XL9X7xcuAl4O1+616AQOdKXVEZ4Wdx0Q/Be2XkQe800cbIKhN8atgNWNqQ+fRL/ieP+xYKhZkD7NGtva2QeghzyjnUzfoUDQz+2bzBgzC1gLXNUHEKFC6AEzT0TOBnIK22GMMWO847/UywCq099y4IlQk9+wkN5ulOA5b77qPYT0dsrrPGsd8KTvLg72EqwgHbF3yvECoLOSSDfVKWAZsM52bu4K0gd2sOdAUgTke2vq1WGWgrY4vRTp1Pgzmzl52BLkZu0ZY7Sd3ur9iUQnV/4/kfwkIrVuYvr7/gX246H3yUmFuwAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/components/index/comm8.jsx

var comm8_templateObject;
function comm8_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/rules-of-hooks */








var comm8_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm8_templateObject || (comm8_templateObject = comm8_taggedTemplateLiteralLoose(["\n    background: #14171F;\n\n\t.comm8_flex {\n\t\tdisplay: flex;\n\t\twidth: 1100px;\n\t\tmargin: auto;\n\t\tpadding: 35px 0 35px 100px;\n\t}\n\t.comm8_conter {\n\t\twidth: 25%;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tcolor: #FFCC00;\n\t\t\tline-height: 20px;\n\t\t\tfont-weight: bold;\n\t\t\tmargin-bottom: 30px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 12px;\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 500;\n\t\t\tline-height: 16px;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 12px;\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 500;\n\t\t\tline-height: 16px;\n\t\t\tmargin-bottom: 20px;\n\t\t\t&:hover {\n\t\t\t\tcolor: #FFCC00;\n\t\t\t}\n\t\t}\n\t\ti {\n\t\t\tdisplay: flex;\n\t\t}\n\t\timg {\n\t\t\tmargin-right: 20px;\n\t\t}\n\t}\n\t.comm8_reserved {\n\t\theight: 60px;\n\t\tline-height: 60px;\n\t\tborder-top: 1px solid #343945;\n\t\ttext-align: center;\n\t\tfont-size: 12px;\n\t}\n\n\n\t@media (max-width: 750px) {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttext-align: center;\n\n\t\t.comm8_flex {\n\t\t    display: block;\n\t\t\twidth: 100%;\n\t\t\tpadding: 0px;\n\t\t\tmargin: 0px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.comm8_conter {\n\t\t\twidth: 100%;\n\t\t\tmargin-bottom: 40px;\n\t\t\tspan {\n\t\t\t    margin-bottom: 10px;\n\t\t\t}\n\t\t\tem {\n\t\t\t    margin-bottom: 5px;\n\t\t\t}\n\t\t\ta {\n\t\t\t    margin-bottom: 5px;\n\t\t\t}\n\t\t\timg {\n\t\t\t\twidth: 30px;\n\t\t\t}\n\t\t\t:last-child {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t}\n\t\t.comm8_reserved {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n"])));
function Comm8() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  var _useState = (0,react.useState)("https://docs.cryptoarena.io"),
    whitepaperUrl = _useState[0],
    setWhitepaperUrl = _useState[1];
  (0,react.useEffect)(function () {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-CN");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-TW");
    } else {
      setWhitepaperUrl("https://docs.cryptoarena.io");
    }
  }, [i18n.language]);
  return /*#__PURE__*/react.createElement(comm8_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm8_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Support")), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: whitepaperUrl,
    target: "_blank"
  }, t("Whitepaper")), /*#__PURE__*/react.createElement("em", null, t("Projects")), /*#__PURE__*/react.createElement("em", null, t("Advertising")), /*#__PURE__*/react.createElement("em", null, t("Community")), /*#__PURE__*/react.createElement("em", null, t("Developer"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Contact")), /*#__PURE__*/react.createElement("em", null, t("Customer Service")), /*#__PURE__*/react.createElement("em", null, t("FAQs")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://forms.gle/m7AMiQLZQdMq2xyh6",
    target: "_blank"
  }, t("Suggestions & Feedback")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Platform")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://drive.google.com/file/d/1ktcZ2P7lMKEJDsymetdqUzvWKbF0VR2n/view?usp=drive_link",
    target: "_blank"
  }, t("Terms of Service"))), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://drive.google.com/file/d/1JHQmFHsoM2m4qynP0tT2rycXHIm8xX-G/view",
    target: "_blank"
  }, t("Privacy Policy"))), /*#__PURE__*/react.createElement("em", null, t("Career")), /*#__PURE__*/react.createElement("em", null, t("App Download"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Follow us")), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://t.me/cryptoarenaio",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://x.com/cryptoarenax",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://github.com/CryptoArenaIO",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_3_namespaceObject,
    alt: ""
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_reserved"
  }, "\xA9 2025 CryptoArena. All rights reserved."));
}
/* harmony default export */ const comm8 = (Comm8);
;// CONCATENATED MODULE: ./public/images/home_bg8_m.jpg
const home_bg8_m_namespaceObject = __webpack_require__.p + "104a6fc86a90fd8cf7d7.jpg";
;// CONCATENATED MODULE: ./src/components/index/comm8M.jsx

var comm8M_templateObject;


function comm8M_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */








var comm8M_CustomStyle = styled_components_browser_esm/* default */.ZP.div(comm8M_templateObject || (comm8M_templateObject = comm8M_taggedTemplateLiteralLoose(["\n\t.comm8_flex {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: 0px;\n\t\tmargin: 0px;\n\t}\n\t.comm8_conter {\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\tspan {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 16px;\n\t\t\tcolor: #FFCC00;\n\t\t\tline-height: 20px;\n\t\t\tfont-weight: bold;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\tem {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 500;\n\t\t\tline-height: 16px;\n\t\t\tmargin-bottom: 15px;\n\t\t\topacity: .8;\n\t\t}\n\t\ta {\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: #fff;\n\t\t\tfont-weight: 500;\n\t\t\tline-height: 16px;\n\t\t\tmargin-bottom: 5px;\n\t\t\t&:hover {\n\t\t\t\tcolor: #FFCC00;\n\t\t\t}\n\t\t}\n\t\ti {\n\t\t\tdisplay: flex;\n\t\t}\n\t\timg {\n\t\t\twidth: 30px;\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\t:last-child {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n\t.comm8_reserved {\n\t\theight: 60px;\n\t\tline-height: 60px;\n\t\tborder-top: 1px solid #343945;\n\t\tfont-size: 12px;\n\t}\n"])));
function Comm8M() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n,
    t = _useTranslation.t;
  var _useState = (0,react.useState)("https://docs.cryptoarena.io"),
    whitepaperUrl = _useState[0],
    setWhitepaperUrl = _useState[1];
  (0,react.useEffect)(function () {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-CN");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-TW");
    } else {
      setWhitepaperUrl("https://docs.cryptoarena.io");
    }
  }, [i18n.language]);
  var titleRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
        if (isReallyVisible) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 动画执行一次后停止观察
        }
      });
    }, {
      threshold: [0, 0.1, 0.2, 0.3],
      // 多级阈值
      rootMargin: '0px 0px -50px 0px' // 底部50px不视为进入
    });
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return function () {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  return /*#__PURE__*/react.createElement(comm8M_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "comm_conterPosit comm2_tit_animation",
    ref: titleRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm_imgbg"
  }, /*#__PURE__*/react.createElement("img", {
    src: home_bg8_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "comm_conterCenter comm_padding",
    style: {
      marginTop: '100px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm8_flex"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Support")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: whitepaperUrl,
    target: "_blank"
  }, t("Whitepaper"))), /*#__PURE__*/react.createElement("em", null, t("Projects")), /*#__PURE__*/react.createElement("em", null, t("Advertising")), /*#__PURE__*/react.createElement("em", null, t("Community")), /*#__PURE__*/react.createElement("em", null, t("Developer"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Contact")), /*#__PURE__*/react.createElement("em", null, t("Customer Service")), /*#__PURE__*/react.createElement("em", null, t("FAQs")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://forms.gle/m7AMiQLZQdMq2xyh6",
    target: "_blank"
  }, t("Suggestions & Feedback")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Platform")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://drive.google.com/file/d/1ktcZ2P7lMKEJDsymetdqUzvWKbF0VR2n/view?usp=drive_link",
    target: "_blank"
  }, t("Terms of Service"))), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://drive.google.com/file/d/1JHQmFHsoM2m4qynP0tT2rycXHIm8xX-G/view",
    target: "_blank"
  }, t("Privacy Policy"))), /*#__PURE__*/react.createElement("em", null, t("Career")), /*#__PURE__*/react.createElement("em", null, t("App Download"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Follow us")), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://t.me/cryptoarenaio",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://x.com/cryptoarenax",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.OL, {
    to: "https://github.com/CryptoArenaIO",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_3_namespaceObject,
    alt: ""
  })))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_reserved"
  }, "\xA9 2025 CryptoArena. All rights reserved.")))));
}
/* harmony default export */ const comm8M = (Comm8M);
;// CONCATENATED MODULE: ./src/pages/index/index.jsx

var index_templateObject;
function index_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */






















var index_CustomStyle = styled_components_browser_esm/* default */.ZP.div(index_templateObject || (index_templateObject = index_taggedTemplateLiteralLoose(["\n\tposition: relative;\n\theight: 100%;\n"])));
function Index() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  (0,react.useEffect)(function () {
    document.title = t("Crypto Arena - Your Fun Builds Your Fortune");
  }, [i18n.language]);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(header, null), !_isMobile() ? /*#__PURE__*/react.createElement(index_FullPageScroller, null, /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm1, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm2, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm3, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm4, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm5, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm6, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm7, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm8, null))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(comm1M, null), /*#__PURE__*/react.createElement(comm2M, null), /*#__PURE__*/react.createElement(comm3M, null), /*#__PURE__*/react.createElement(comm4M, null), /*#__PURE__*/react.createElement(comm5M, null), /*#__PURE__*/react.createElement(comm6M, null), /*#__PURE__*/react.createElement(comm7M, null), /*#__PURE__*/react.createElement(comm8M, null)));
}
/* harmony default export */ const index = (Index);
;// CONCATENATED MODULE: ./public/images/game_bj.png
const game_bj_namespaceObject = __webpack_require__.p + "5b4aae2f37a8ece80ce6.png";
;// CONCATENATED MODULE: ./public/images/games_kuang.png
const games_kuang_namespaceObject = __webpack_require__.p + "b908fff1c23822e377f0.png";
;// CONCATENATED MODULE: ./src/components/game/main.jsx

var main_templateObject;
function main_taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }
/* eslint-disable react-hooks/exhaustive-deps */





var main_CustomStyle = styled_components_browser_esm/* default */.ZP.div(main_templateObject || (main_templateObject = main_taggedTemplateLiteralLoose(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\tbackground: url(", ") no-repeat;\n\tbackground-size: cover;\n\n\t.games_pro {\n\t\twidth: 1256px;\n\t\theight: 728px;\n\t\tbackground: url(", ") no-repeat;\n\t\tbackground-size: 100%;\n\t\tmargin: auto;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\ttop: 50%;\n\t\tmargin-left: -628px;\n\t\tmargin-top: -364px;\n\t}\n\n\n\t@media (max-width: 1400px) {\n\t\t.header_left {\n\t\t\tgap: 0px;\n\t\t}\n\t}\n\n"])), game_bj_namespaceObject, games_kuang_namespaceObject);
function Game() {
  var _useTranslation = (0,dist_es/* useTranslation */.$G)(),
    i18n = _useTranslation.i18n;
  var _useState = (0,react.useState)("https://snake.cryptoarena.io?lang=en"),
    gamesUrl = _useState[0],
    setGamesUrl = _useState[1];
  (0,react.useEffect)(function () {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setGamesUrl("https://snake.cryptoarena.io?lang=zh-cn");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setGamesUrl("https://snake.cryptoarena.io?lang=zh");
    } else {
      setGamesUrl("https://snake.cryptoarena.io?lang=en");
    }
  }, [i18n.language]);

  // 使用鼠标移动事件触发函数
  var handleMouseOver = function handleMouseOver() {
    document.getElementById('myIframe').contentWindow.focus();
  };
  return /*#__PURE__*/react.createElement(main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "games_pro"
  }, /*#__PURE__*/react.createElement("iframe", {
    src: gamesUrl,
    width: "1223px",
    height: "694px",
    scrolling: "no",
    style: {
      borderRadius: '20px',
      marginTop: '13px'
    },
    id: "myIframe",
    onMouseOver: handleMouseOver
  })));
}
/* harmony default export */ const main = (Game);
;// CONCATENATED MODULE: ./src/pages/games/index.jsx



function Games() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const games = (Games);
;// CONCATENATED MODULE: ./src/pages/app.jsx











var metaMaskConnector = new metaMask/* MetaMaskConnector */.i({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */._({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
var app_client = (0,wagmi_dist/* createClient */.eI)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  var _useState = (0,react.useState)(false),
    ready = _useState[0],
    setReady = _useState[1];
  (0,react.useEffect)(function () {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.eM, {
    client: app_client,
    className: "Index"
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.AW, {
    exact: true,
    path: "/cryptoSnake",
    element: /*#__PURE__*/react.createElement(games, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(3852);
// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__(7885);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(7212);
// EXTERNAL MODULE: ./public/css/meanmenu.min.css
var meanmenu_min = __webpack_require__(4820);
// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__(4655);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(6755);
;// CONCATENATED MODULE: ./src/index.jsx









var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 6601:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4130:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - Your Fun Builds Your Fortune","Connect":"Connect","Home":"Home","Arena":"Arena","Marketplace":"Marketplace","Community":"Community","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"Clubs","Governance":"Governance","Farm":"Farm","IGO":"IGO","Lottery":"Lottery","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"Crypto Arena","Your Fun Builds Your Fortune":"Your Fun Builds Your Fortune","Your Fun Builds Your":"Your Fun Builds Your","Fortune":"Fortune","Your Fun Builds":"Your Fun Builds","Your Fortune":"Your Fortune","The world\'s first casual competitive":"The world\'s first casual competitive","Make every leisure moment create value":"Make every leisure moment create value","Relax first":"Relax first","Fair competition":"Fair competition","Selected a variety of easy and casual games":"Selected a variety of easy and casual games","Quick match, quick battle start":"Quick match, quick battle start","A balancing mechanism based on skills rather than krypton gold":"A balancing mechanism based on skills rather than krypton gold","Charm Rankings Combine Game Performance and Leisure Index":"Charm Rankings Combine Game Performance and Leisure Index","Earnings":"Earnings","&":"&","Achievements":"Achievements","Earnings & Achievements":"Earnings & Achievements","Cross-game asset interoperability system":"Cross-game asset interoperability system","Real Earnings, Withdraw Anytime":"Real Earnings, Withdraw Anytime","Massive Reward Pool, Surprises Anytime":"Massive Reward Pool, Surprises Anytime","On-Chain Records of Your Gaming Highlights":"On-Chain Records of Your Gaming Highlights","Popular Games":"Popular Games","Decentralized":"Decentralized","Operation":"Operation","Decentralized operation":"Decentralized operation","Club-based operation model":"Club-based operation model","Low threshold to support project parties to enter":"Low threshold to support project parties to enter","Custom":"Custom","Games":"Games","Custom Games":"Custom Games","Community enjoys the greatest benefits of the platform":"Community enjoys the greatest benefits of the platform","Partner":"Partner","Join Now":"Join Now","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points","Support":"Support","Whitepaper":"Whitepaper","Projects":"Projects","Advertising":"Advertising","Developer":"Developer","Contact":"Contact","Customer Service":"Customer Service","FAQs":"FAQs","Suggestions & Feedback":"Suggestions & Feedback","Platform":"Platform","Terms of Service":"Terms of Service","Privacy Policy":"Privacy Policy","Career":"Career","App Download":"App Download","Follow us":"Follow us","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"The World\'s First Blockchain-Based Casual Competitive Gaming Platform","Your Fun first":"Your Fun first","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!","Please install a digital wallet extension or use a crypto wallet app.":"Please install a digital wallet extension or use a crypto wallet app.","":""}');

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Connecter le portefeuille","HOME":"Accueil","Marketplace":"Le marché","Games":"Jeux","LORE":"Connaissance","AXS":"AXS","News":"Message","More":"Plus de","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bienvenue dans l\'arène des dieux de la guerre des fantômes, où seuls les puissants peuvent être invaincus. Êtes - vous prêt pour une bataille féroce?","The Road of Strategy":"La voie stratégique","Hone your skills, master strategy, and you will become the ruler.":"Aiguisez vos compétences, maîtrisez la stratégie et vous deviendrez le dirigeant.","Journey of the Competition":"Voyage de compétition","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Chaque match est une occasion de progresser vers la gloire et chaque bataille décisive est un pas vers la conquête du monde.","The Road to the Peak":"Le chemin du Sommet","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Vous seul pouvez vous tenir au sommet dans ce jeu rempli de richesses et d\'honneurs. On commence ？ Lutte pour l\'honneur et la richesse.","This is an exhilarating blockchain PvP game.":"C\'est un jeu de PVP de blockchain de mémoire exaltant","This is an exhilarating":"C\'est un jeu de PVP de","blockchain PvP game.":"blockchain de mémoire exaltant","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Il offre à jusqu\'à 50 joueurs la possibilité de se battre en temps réel dans des arènes marquées. Les joueurs se disputent les positions les plus élevées pour obtenir le classement le plus élevé et gagner des récompenses attrayantes.","Unique Skill Arena: NFT Adventure Journey":"Hippodrome: NFT Adventure tour","Unique Skill Arena:":"Hippodrome:","NFT Adventure Journey":"NFT Adventure tour","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Pour entrer dans ce jeu, les joueurs doivent obtenir des personnages NFT avec des compétences uniques et des billets d\'arène. Chaque match dure 3 minutes et les 15 meilleurs joueurs ont une chance de gagner de belles récompenses.","The duration of each game is 3 minutes.":"Chaque match dure 3 minutes.","The top 15 players have the chance to win generous rewards.":"Les joueurs dans le Top 15 ont une chance de gagner de belles récompenses.","NFT Exhibition":"Exposition NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Catégorie - fantômes morts - vivants, animaux fantômes, créatures fantômes, fantômes mignons. Tous les prix sont l\'équivalent de 200 USD en BTC, ETH et paiement Tox fixe (600 jetons).","NFT Trading Marketplace":"Le marché du Trading NFT","Ghost Creatures":"Créatures fantômes","Ghost Animals":"Animaux fantômes","Ghost Bandit":"Gangster fantôme","Cute Ghosts":"Le fantôme mignon","Arena Showcase":"Présentation de l\'arène","BTC Special Event":"Événements spéciaux BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Démystifiez bitcoin, Grimpez de nouveaux sommets et prenez la gloire sans fin! Découvrez par vous - même le charme du BTC et gagnez la victoire qui vous appartient!","ETH Special Event":"Événements spéciaux ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Assistez à la lumière éblouissante d\'ethereum, repoussez les limites et saisissez l\'occasion de réclamer de superbes récompenses! Embarquez pour le voyage ETH aujourd\'hui et créez votre propre légende!","TOX Special Event":"Événements spéciaux Tox","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Un événement spécial Tox rempli d\'éléments uniques attend votre participation! Devenez un pionnier, rivalisez pour des récompenses exclusives et embarquez dans une toute nouvelle aventure Tox!","Game Guild Showcase":"Affichage de guilde de jeu","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Les investisseurs ont la possibilité de travailler avec la Guilde du jeu. Ces guildes offrent aux joueurs professionnels de représenter les propriétaires de NFT dans les tournois, ajoutant ainsi leurs chances de gagner des récompenses. Les joueurs atteignent le Sommet de la richesse et de la gloire à travers la course. Les investisseurs qui travaillent avec des guildes peuvent faire des profits sans effort.","":""}');

/***/ }),

/***/ 8491:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"ウォレットの接続","HOME":"トップページ","Marketplace":"市場","Games":"ゲーム","LORE":"知識","AXS":"AXS","News":"メッセージ","More":"より多くの","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"鬼戦神競技場へようこそ。ここには強者だけが負けない。激しい戦いに参加する準備はできていますか。","The Road of Strategy":"戦略の道","Hone your skills, master strategy, and you will become the ruler.":"あなたのスキルを磨き、戦略を身につければ、あなたは支配者になります。","Journey of the Competition":"レースの旅","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"どの試合も輝かしいチャンスであり、どの決戦も世界征服の一歩である。","The Road to the Peak":"頂上への道","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"富と栄誉に満ちたこのゲームでは、あなただけが頂点に立つことができます。始めましょう！栄誉と富のために戦う。","This is an exhilarating blockchain PvP game.":"これはエキサイティングなメモリブロックチェーンPvPゲームです","This is an exhilarating":"これはエキサイティングなメモ","blockchain PvP game.":"リブロックチェーンPvPゲームです","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"50人までのプレイヤーに、競技場内でリアルタイムで戦う機会を提供しています。プレイヤーは最高の位置を争って最高の順位を獲得し、魅力的な奨励金を獲得する。","Unique Skill Arena: NFT Adventure Journey":"スタント・アリーナ：NFTアドベンチャー・ツアー","Unique Skill Arena:":"スタント・アリーナ：","NFT Adventure Journey":"NFTアドベンチャー・ツアー","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"このゲームに入るには、プレイヤーは独自のスキルを持つNFTキャラクターと競技場のチケットを手に入れる必要があります。各試合の持続時間は3分で、上位15選手は手厚い奨励金を獲得する機会がある。","The duration of each game is 3 minutes.":"1試合あたりの持続時間は3分。","The top 15 players have the chance to win generous rewards.":"上位15人のプレイヤーは、手厚い報酬を得ることができます。","NFT Exhibition":"NFT展示","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"カテゴリ-幽霊、鬼動物、鬼生物、かわいい鬼。すべての価格は200ドル相当のBTC、ETH、固定TOX支払い（600トークン）です。","NFT Trading Marketplace":"NFT取引市場","Ghost Creatures":"幽霊生物","Ghost Animals":"ゆうれい動物","Ghost Bandit":"幽霊匪賊","Cute Ghosts":"かわいい幽霊","Arena Showcase":"競技場の展示","BTC Special Event":"BTCスペシャルイベント","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ビットコインの神秘のベールをはがし、新たな高さに登り、果てしない栄光を奪う！BTCの魅力を身をもって体験して、あなたの勝利を勝ち取ります！","ETH Special Event":"ETHスペシャルイベント","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"エーテル坊のまぶしい光を見て、限界に挑戦して、チャンスをつかんで手厚い奨励金を受け取る！すぐにETHの旅に出て、自分だけの伝奇をつくろう！","TOX Special Event":"TOXスペシャルイベント","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"ユニークな要素満載のTOXスペシャルイベントにご参加お待ちしております！パイオニアとなり、独占特典を奪い合い、新たなTOXアドベンチャーをスタート！","Game Guild Showcase":"ゲームギルド展示","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"投資家はゲーム組合と協力する機会がある。これらのギルドは、NFT所有者を代表して試合中にプロゲーマーに報酬を与える機会を新たに提供します。プレイヤーたちは試合を通じて富と栄光の頂点に登った。組合と協力している投資家は、簡単に利益を得ることができます。","":""}');

/***/ }),

/***/ 9233:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"지갑 연결","HOME":"첫 페이지","Marketplace":"시장","Games":"게임","LORE":"지식","AXS":"AXS","News":"메시지","More":"더 많은","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"귀전신 경기장에 오신 것을 환영합니다. 이곳은 강자만이 패하지 않을 수 있습니다.당신은 격렬한 전투에 참가할 준비가 되었습니까?","The Road of Strategy":"전략의 길","Hone your skills, master strategy, and you will become the ruler.":"기술을 연마하고 전략을 익히면 통치자가 될 것이다.","Journey of the Competition":"경기 여행","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"매 경기는 모두 휘황한 기회로 나아가고 매 결전은 모두 세계를 정복하는 한걸음이다.","The Road to the Peak":"정상길","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"부와 명예로 가득 찬 이 게임에서 오직 너만이 정상에 설 수 있다.갑시다!명예와 부를 위해 싸우다.","This is an exhilarating blockchain PvP game.":"메모리 블록 체인 PvP 게임입니다.","This is an exhilarating":"메모리 블록 체인","blockchain PvP game.":"PvP 게임입니다.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"최대 50명의 플레이어에게 표시된 경기장 내에서 실시간 전투를 할 수 있는 기회를 제공한다.유저는 최고 위치를 쟁탈하여 최고 랭킹을 획득하고 매혹적인 보상을 획득합니다.","Unique Skill Arena: NFT Adventure Journey":"묘기 경기장: NFT 모험 여행","Unique Skill Arena:":"묘기 경기장:","NFT Adventure Journey":"NFT 모험 여행","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"이 게임에 들어가려면 독특한 스킬을 가진 NFT 캐릭터와 경기장 입장권을 획득해야 한다.매 경기 지속 시간은 3분이며, 상위 15명의 선수는 푸짐한 보상을 받을 기회가 있다.","The duration of each game is 3 minutes.":"매 경기 지속 시간은 3분이다.","The top 15 players have the chance to win generous rewards.":"상위 15위 유저는 풍부한 보상을 획득할 기회가 있습니다.","NFT Exhibition":"NFT 전시회","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"카테고리 - 귀신 망혼, 귀신 동물, 귀신 생물, 귀여운 귀신.모든 가격은 200달러와 같은 BTC, ETH 및 고정 TOX 지불 (600토큰) 입니다.","NFT Trading Marketplace":"NFT 거래 시장","Ghost Creatures":"유령 생물","Ghost Animals":"유령동물","Ghost Bandit":"유령도적","Cute Ghosts":"귀여운 유령","Arena Showcase":"경기장 전시","BTC Special Event":"BTC 스페셜 이벤트","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"비트코인의 신비한 베일을 벗고 새로운 높이에 올라 끝없는 영광을 쟁취하자!BTC의 매력을 직접 체험하고 당신만의 승리를 쟁취하세요!","ETH Special Event":"ETH 특별 이벤트","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"이더리움의 눈부신 빛을 목격하고, 극한에 도전하고, 기회를 포착하여 풍부한 보상을 수령하세요!지금 ETH 여행에 올라 나만의 전설을 만들어라!","TOX Special Event":"TOX 특별 이벤트","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"유니크한 요소가 가득한 TOX 특별 이벤트 참여를 기다리고 있습니다!선봉이 되어 독점 보상을 쟁탈하고 새로운 TOX 모험을 시작합니다!","Game Guild Showcase":"게임 길드 전시","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"투자자는 게임 길드와 합작할 기회가 있다.이들 길드는 프로게이머가 경기에서 NFT 소유자를 대표해 보상을 받을 수 있는 기회를 추가한다.플레이어들은 경기를 통해 부와 영광의 정상에 올랐다.길드와 합작한 투자자는 조금도 힘들이지 않고 이윤을 얻을 수 있다.","":""}');

/***/ }),

/***/ 4473:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Sambungkan dompet","HOME":"halaman rumah","Marketplace":"pasar","Games":"permainan","LORE":"pengetahuan","AXS":"AXS","News":"berita","More":"Lebih","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Selamat datang ke Arena Roh Tuhan, di mana hanya orang kuat yang boleh kekal tidak dipenuhi. Adakah anda bersedia untuk berpartisipasi dalam pertempuran yang kejam?","The Road of Strategy":"Jalan strategik","Hone your skills, master strategy, and you will become the ruler.":"Menghormati kemampuan and a, strategi master, dan anda akan menjadi pemerintah.","Journey of the Competition":"Perlawanan","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Setiap permainan adalah peluang untuk bergerak ke arah kemuliaan, dan setiap pertempuran yang menentukan adalah langkah ke arah mengalahkan dunia.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Dalam permainan ini penuh kekayaan dan kehormatan, hanya anda boleh berdiri di atas. Mari kita mulakan! Berjuang untuk kehormatan dan kekayaan.","This is an exhilarating blockchain PvP game.":"Ini adalah permainan PvP blockchain ingatan yang menarik","This is an exhilarating":"Ini adalah permainan PvP","blockchain PvP game.":"blockchain ingatan yang menarik","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ia menyediakan sehingga 50 pemain peluang untuk terlibat dalam pertempuran masa sebenar dalam arena yang ditentukan. Pemain bersaing untuk kedudukan tertinggi untuk mencapai peringkat tertinggi dan menang hadiah menarik.","Unique Skill Arena: NFT Adventure Journey":"Arena Stunt: Perjalanan Adventure NFT","Unique Skill Arena:":"Arena Stunt:","NFT Adventure Journey":"Perjalanan Adventure NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Untuk memasuki permainan ini, pemain perlu mendapatkan aksara NFT dengan kemahiran unik dan tiket arena. Selama setiap permainan adalah 3 minit, dan 15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","The duration of each game is 3 minutes.":"Waktu setiap permainan ialah 3 minit.","The top 15 players have the chance to win generous rewards.":"15 pemain terbaik mempunyai peluang untuk menang hadiah yang murah hati.","NFT Exhibition":"Eksport NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Kategori - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Semua harga sama dengan $200 dalam BTC, ETH, dan pembayaran TOX tetap (600 token).","NFT Trading Marketplace":"Pasar perdagangan NFT","Ghost Creatures":"Cipta Spektral","Ghost Animals":"Hewan hantu","Ghost Bandit":"Ghost Bandit","Cute Ghosts":"Hantu Manis","Arena Showcase":"Paparan Arena","BTC Special Event":"Peristiwa Khas BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Buka tutup misteri Bitcoin, mendaki tinggi baru, dan menuntut kemuliaan yang tak berakhir! Mengalami sihir BTC tangan pertama dan memenangkan kemenangan anda sendiri!","ETH Special Event":"Peristiwa istimewa ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Saksikanlah cahaya Ethereum yang terang, cabarlah batas-batas kamu, dan ambillah peluang untuk menerima pahala yang mulia! Masuklah ke dalam perjalanan ETH segera dan ciptakan legenda anda sendiri!","TOX Special Event":"Peristiwa Khas TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Peristiwa istimewa TOX penuh dengan unsur unik menunggu ketertarikan anda! Jadilah pemimpin, bersaing untuk hadiah eksklusif, dan mulakan petualangan baru TOX!","Game Guild Showcase":"Paparan Guild Permainan","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Pelayan mempunyai peluang untuk bekerja sama dengan gol permainan. Gild ini memberikan pemain profesional peluang untuk mewakili pemilik NFT dalam pertandingan dan meningkatkan peluang mereka untuk menang hadiah. Pemain mencapai puncak kekayaan dan kemuliaan melalui pertandingan. Para pelabur yang bekerja sama dengan tipu daya boleh mendapatkan keuntungan tanpa usaha.","":""}');

/***/ }),

/***/ 3501:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ligar à Carteira","HOME":"Página inicial","Marketplace":"mercado","Games":"jogo","LORE":"conhecimento","AXS":"AXS","News":"notícias","More":"Mais","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Bem-vindo à Ghost God Arena, onde apenas os fortes podem permanecer invictos. Você está pronto para participar da batalha feroz?","The Road of Strategy":"A via estratégica","Hone your skills, master strategy, and you will become the ruler.":"Aprimore suas habilidades, domine estratégias e você se tornará um governante.","Journey of the Competition":"Tour de Competição","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Cada jogo é uma oportunidade para avançar em direção à glória, e cada batalha decisiva é um passo para conquistar o mundo.","The Road to the Peak":"O Caminho para o Pico","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Neste jogo cheio de riqueza e honra, só você pode ficar no topo. Vamos começar! Lutar por honra e riqueza.","This is an exhilarating blockchain PvP game.":"Este é um emocionante jogo PvP blockchain de memória","This is an exhilarating":"Este é um emocionante jogo ","blockchain PvP game.":"PvP blockchain de memória","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Ele oferece a até 50 jogadores a oportunidade de se envolver em batalhas em tempo real dentro de arenas designadas. Os jogadores competem pela posição mais alta para alcançar a classificação mais alta e ganhar recompensas atraentes.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Adventure Journey","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Adventure Journey","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Para entrar neste jogo, os jogadores precisam obter personagens NFT com habilidades únicas e ingressos de arena. A duração de cada jogo é de 3 minutos, e os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","The duration of each game is 3 minutes.":"A duração de cada jogo é de 3 minutos.","The top 15 players have the chance to win generous rewards.":"Os 15 melhores jogadores têm a chance de ganhar recompensas generosas.","NFT Exhibition":"Exposição NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Categoria - Fantasma Morto-vivo, Animais Fantasmas, Criaturas Fantasmas, Fantasmas Bonitos. Todos os preços são equivalentes a $200 em BTC, ETH e pagamentos TOX fixos (600 tokens).","NFT Trading Marketplace":"Mercado de negociação NFT","Ghost Creatures":"Criatura Espectral","Ghost Animals":"Animais fantasmas","Ghost Bandit":"Bandido Fantasma","Cute Ghosts":"Fantasma Bonito","Arena Showcase":"Exposição da Arena","BTC Special Event":"Evento Especial BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Descubra o misterioso véu do Bitcoin, suba novas alturas e reclame glória infinita! Experimente o charme do BTC em primeira mão e ganhe sua própria vitória!","ETH Special Event":"Evento Especial ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Testemunhe a luz deslumbrante do Ethereum, desafie seus limites e aproveite a oportunidade de receber recompensas generosas! Embarque na jornada ETH imediatamente e crie sua própria lenda!","TOX Special Event":"Evento Especial TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"O evento especial TOX cheio de elementos únicos aguarda sua participação! Seja um pioneiro, compita por recompensas exclusivas e embarque em uma nova aventura TOX!","Game Guild Showcase":"Exposição da Guilda do Jogo","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Os investidores têm a oportunidade de colaborar com guildas de jogos. Essas guildas oferecem aos jogadores profissionais a oportunidade de representar os proprietários de NFT em competições e aumentar suas chances de ganhar recompensas. Os jogadores alcançam o auge da riqueza e glória através de competições. Investidores que colaboram com guildas podem facilmente ganhar lucros.","":""}');

/***/ }),

/***/ 264:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"เชื่อมต่อกระเป๋าสตางค์","HOME":"หน้าหลัก","Marketplace":"ตลาด","Games":"เกม","LORE":"ความรู้","AXS":"AXS","News":"ข้อความ","More":"มากกว่า","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"ขอต้อนรับเข้าสู่สนาม Ghost Wars Arena ซึ่งมีเพียงผู้แข็งแกร่งเท่านั้นที่จะไร้พ่าย คุณพร้อมหรือยังสำหรับการต่อสู้ที่รุนแรง?","The Road of Strategy":"เส้นทางยุทธศาสตร์","Hone your skills, master strategy, and you will become the ruler.":"ฝึกฝนทักษะ ฝึกฝนกลยุทธ์ แล้วคุณจะเป็นผู้ปกครอง","Journey of the Competition":"ทัวร์นาเมนต์","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"ทุกการแข่งขันเป็นโอกาสที่จะก้าวไปสู่ความรุ่งโรจน์ และทุกการต่อสู้ที่เด็ดขาดคือก้าวสู่การพิชิตโลก","The Road to the Peak":"เส้นทางสู่จุดสูงสุด","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"ในเกมที่เต็มไปด้วยความมั่งคั่งและเกียรติยศมีเพียงคุณเท่านั้นที่สามารถยืนอยู่บนจุดสูงสุด เริ่มกันเลย! สู้เพื่อเกียรติยศและโชคลาภ","This is an exhilarating blockchain PvP game.":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก Chain PvP เกม","This is an exhilarating":"นี้เป็นที่น่าตื่นเต้นหน่วยความจำบล็อก","blockchain PvP game.":"Chain PvP เกม","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"โดยจะเปิดโอกาสให้ผู้เล่นมากถึง 50 คนได้ทำการต่อสู้แบบเรียลไทม์ภายในสังเวียนที่ทำเครื่องหมายไว้ ผู้เล่นแข่งขันเพื่อชิงตำแหน่งสูงสุดเพื่อให้ได้อันดับสูงสุดและได้รับรางวัลที่น่าสนใจ","Unique Skill Arena: NFT Adventure Journey":"สนามกีฬาผาดโผน: การผจญภัย NFT","Unique Skill Arena:":"สนามกีฬาผาดโผน:","NFT Adventure Journey":"การผจญภัย NFT","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"ในการเข้าสู่เกมนี้ผู้เล่นจะต้องได้รับตัวละคร NFT ที่มีทักษะเฉพาะตัวและตั๋วลานประลอง โดยแต่ละแมตช์ใช้เวลา 3 นาที,สำหรับผู้เล่น 15 อันดับแรก มีโอกาสลุ้นรางวัลมากมาย","The duration of each game is 3 minutes.":"โดยแต่ละเกมใช้เวลาแข่งขัน 3 นาที","The top 15 players have the chance to win generous rewards.":"ผู้เล่น 15 อันดับแรกมีโอกาสลุ้นรางวัลมากมาย","NFT Exhibition":"นิทรรศการ NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"หมวดหมู่ - ผีผี, สัตว์ผี, สัตว์ผี, ผีน่ารัก ราคาทั้งหมดอยู่ใน BTC, ETH และ Fixed TOX Payment (600 Token) เท่ากับ $ 200","NFT Trading Marketplace":"ตลาดเทรด NFT","Ghost Creatures":"สัตว์ผี","Ghost Animals":"สัตว์ผี","Ghost Bandit":"โจรผี","Cute Ghosts":"ผีน่ารัก","Arena Showcase":"อารีน่า ดิสเพลย์","BTC Special Event":"BTC กิจกรรมพิเศษ","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"ค้นพบความลึกลับของ Bitcoin และปีนขึ้นไปสู่ความสูงใหม่และคว้าเกียรติยศไม่รู้จบ! สัมผัสเสน่ห์ของ BTC ด้วยตัวคุณเองและชนะที่เป็นของคุณ!","ETH Special Event":"กิจกรรมพิเศษ ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"ร่วมเป็นสักขีพยานประกายของ Ethereum ท้าทายขีด จำกัด และคว้าโอกาสในการรับรางวัลมากมาย! เริ่มต้นการเดินทาง ETH วันนี้และสร้างตำนานของคุณเอง!","TOX Special Event":"กิจกรรมพิเศษของ TOX","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"กิจกรรมพิเศษของ TOX ที่เต็มไปด้วยองค์ประกอบที่เป็นเอกลักษณ์รอคุณอยู่! ร่วมเป็นผู้บุกเบิกเพื่อชิงรางวัลพิเศษและเริ่มต้นการผจญภัยใหม่ของ TOX!","Game Guild Showcase":"แสดงกิลด์เกม","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"นักลงทุนมีโอกาสร่วมงานกับกิลด์เกม กิลด์เหล่านี้เสนอให้ผู้เล่นมืออาชีพเป็นตัวแทนของเจ้าของ NFT ในการแข่งขันและเพิ่มโอกาสในการได้รับรางวัลของพวกเขา ผู้เล่นก้าวขึ้นสู่จุดสูงสุดของความมั่งคั่งและความรุ่งเรืองผ่านการแข่งขัน นักลงทุนที่ร่วมงานกับกิลด์จะได้รับผลกำไรอย่างง่ายดาย","":""}');

/***/ }),

/***/ 6522:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Cüzdanı bağla","HOME":"ev sayfası","Marketplace":"pazar","Games":"oyun","LORE":"Bilim","AXS":"AXS","News":"haberler","More":"Daha fazla","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Ruh Tanrı Arena\'ya hoş geldiniz. Sadece güçlü olanlar yenmez kalabilir. Acı savaşta katılmaya hazır mısın?","The Road of Strategy":"Stratejik yol","Hone your skills, master strategy, and you will become the ruler.":"Yeteneklerini tatlın, efendi stratejilerini ve sen bir hükümdar olacaksın.","Journey of the Competition":"Competition Tour","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Her oyun büyüklüğüne doğru ilerleme fırsatıdır, ve her kararlı savaş dünyayı kazanmaya doğru bir adım.","The Road to the Peak":"The Road to the Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Bu oyunda zengin ve onurla dolu, sadece üstünde durabilirsin. Başlayalım! Onur ve zengin için savaş.","This is an exhilarating blockchain PvP game.":"Bu heyecanlı bir hafıza blok zinciri PvP oyunu.","This is an exhilarating":"Bu heyecanlı bir hafıza","blockchain PvP game.":"blok zinciri PvP oyunu.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Bu, belirlenmiş alanlarda gerçek zamanlı savaşlara katılmak için 50 oyuncu fırsatı sağlıyor. Oyuncular en yüksek pozisyon için en yüksek derece ulaşmak ve ödülleri tamamlamak için yarışıyorlar.","Unique Skill Arena: NFT Adventure Journey":"Stunt Arena: NFT Macera Yolculuğu","Unique Skill Arena:":"Stunt Arena:","NFT Adventure Journey":"NFT Macera Yolculuğu","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Bu oyuna girmek için oyuncuları eşsiz yetenekler ve arena biletleri ile NFT karakterlerini almalılar. Her oyunun uzunluğu 3 dakika ve en üst 15 oyuncusu cömertli ödüllendirme şansı var.","The duration of each game is 3 minutes.":"Her oyunun uzunluğu 3 dakika.","The top 15 players have the chance to win generous rewards.":"En üst 15 oyuncusu cömertli ödülleri kazanma şansı var.","NFT Exhibition":"NFT İzleme","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Category - Ghost Undead, Ghost Animals, Ghost Creatures, Cute Ghosts. Tüm fiyatlar BTC, ETH ve düzenli TOX ödemeleri (600 token) için 200 dolara eşit.","NFT Trading Marketplace":"NFT ticaret pazarı","Ghost Creatures":"Spektral Oluşturucu","Ghost Animals":"Hayalet hayvanları","Ghost Bandit":"Hayalet BandiName","Cute Ghosts":"Cute Ghost","Arena Showcase":"Arena Görüntüsü","BTC Special Event":"BTC Özel Olay","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Bitcoin\'in gizemli örtünü kapatın, yeni yükseklere tırmanın ve sonsuz şerefi iddia edin! BTC\'in ilk elini deneyin ve kendi zaferini kazanın!","ETH Special Event":"ETH özel olay","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Ethereum\'un parlak ışığına tanık olun, sınırlarınızı dövün ve cömertli ödülleri almak için fırsatı alın! ETH yolculuğuna hemen götürün ve kendi efsanesini yaratın!","TOX Special Event":"Özel olay","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"TOX özel olay eşsiz elementlerle dolu sizin katılmanızı bekliyor! Piyoner ol, özel ödüller için yarışın ve yeni bir TOX macerasına başla!","Game Guild Showcase":"Oyun Guild Gösterisi","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Yatırımcıların oyun oyunları ile işbirliği yapabileceği fırsatı var. Bu yönetimler, profesyonel oyuncuları, NFT sahiplerini yarışmalarda temsil etmek ve kazanma şanslarını arttırmak için fırsat sağlıyor. Oyuncular yarışmalar üzerinden zenginlik ve büyüklüğün çevresine ulaşır. Gildlerle işbirliği yapan yatırımcılar zararları çaresiz kazanabilir.","":""}');

/***/ }),

/***/ 995:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Connect Wallet":"Ví kết nối","HOME":"Trang chủ","Marketplace":"Thị trường","Games":"Trò chơi","LORE":"Kiến thức","AXS":"AXS","News":"Thông điệp","More":"Thêm","Welcome to the Ghost War God Arena, where only the strongest can stand undefeated. Are you ready for intense battles?":"Hoan nghênh đi vào đấu trường Quỷ Chiến Thần, nơi này chỉ có cường giả mới có thể bất bại. Bạn đã sẵn sàng cho một trận chiến khốc liệt?","The Road of Strategy":"Con đường chiến lược","Hone your skills, master strategy, and you will become the ruler.":"Rèn luyện kỹ năng của bạn, làm chủ chiến lược và bạn sẽ trở thành người cai trị.","Journey of the Competition":"Tour du lịch","Every match is an opportunity to march towards glory, every showdown is a step towards conquering the world.":"Mỗi trận đấu là một cơ hội để tiến tới vinh quang và mỗi trận đấu quyết định là một bước để chinh phục thế giới.","The Road to the Peak":"Đường đến Peak","In this game filled with wealth and honor, only you can stand at the pinnacle. Let\'s begin! Fight for glory and fortune.":"Trong trò chơi giàu có và danh dự này, chỉ có bạn mới có thể đứng trên đỉnh. Bắt đầu! Chiến đấu vì danh dự và sự giàu có.","This is an exhilarating blockchain PvP game.":"Đây là một trò chơi PvP blockchain bộ nhớ thú vị","This is an exhilarating":"Đây là một loại phấn khích.","blockchain PvP game.":"Trò chơi PvP blockchain bộ nhớ.","It provides up to 50 players with the opportunity to engage in real-time battles within the selected arena. Players compete for the supreme position to achieve top rankings and win enticing rewards.":"Nó cung cấp cho tối đa 50 người chơi cơ hội chiến đấu trong thời gian thực trong một đấu trường được đánh dấu. Người chơi cạnh tranh cho vị trí cao nhất để có được thứ hạng cao nhất và giành được phần thưởng hấp dẫn.","Unique Skill Arena: NFT Adventure Journey":"Trò chơi trực tuyến: NFT Adventure","Unique Skill Arena:":"Trò chơi trực tuyến:","NFT Adventure Journey":"NFT Adventure","To enter this game, players need to acquire NFT characters with unique skills and arena tickets. Each match has a duration of 3 minutes, with the top 15 players having the opportunity to win lucrative rewards.":"Để tham gia trò chơi này, người chơi cần có được các nhân vật NFT và vé vào đấu trường với các kỹ năng độc đáo. Mỗi trận đấu kéo dài 3 phút và 15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","The duration of each game is 3 minutes.":"Mỗi trận đấu kéo dài 3 phút.","The top 15 players have the chance to win generous rewards.":"15 người chơi hàng đầu có cơ hội giành được phần thưởng lớn.","NFT Exhibition":"Triển lãm NFT","Category - Ghost Outlaws, Ghost Animals, Ghost Creatures, Cute Ghosts. All priced at 200 USD equivalent in BTC, ETH, and fixed TOX payment (600 tokens).":"Thể loại - Hồn ma, Động vật ma, Sinh vật ma, Bóng ma dễ thương. Tất cả các khoản thanh toán BTC, ETH và TOX cố định (600 token) với giá tương đương 200 USD.","NFT Trading Marketplace":"Thị trường giao dịch NFT","Ghost Creatures":"Sinh vật ma","Ghost Animals":"Động vật ma","Ghost Bandit":"Băng đảng ma","Cute Ghosts":"Bóng ma dễ thương","Arena Showcase":"Hiển thị Arena","BTC Special Event":"Sự kiện đặc biệt BTC","Unveil the mysteries of Bitcoin, climb to new heights, and seize endless glory! Experience the charm of BTC firsthand and win a victory that belongs to you!":"Khám phá những bí ẩn của Bitcoin và leo lên những tầm cao mới để giành lấy vinh quang vô tận! Trải nghiệm sự quyến rũ của BTC và giành chiến thắng thuộc về bạn!","ETH Special Event":"Sự kiện đặc biệt ETH","Witness the dazzling brilliance of Ethereum, challenge your limits, and seize the opportunity to claim abundant rewards! Embark on the journey of ETH now and create your own legend!":"Chứng kiến ánh sáng rực rỡ của Ethereum, thách thức giới hạn và nắm bắt cơ hội để nhận phần thưởng lớn! Bắt tay vào hành trình ETH ngay bây giờ và tạo ra huyền thoại của riêng bạn!","TOX Special Event":"TOX Sự kiện đặc biệt","Infused with unique elements, the TOX special event awaits your participation! Be a pioneer, vie for exclusive rewards, and embark on a brand new TOX adventure!":"Sự kiện đặc biệt của TOX với đầy đủ các yếu tố độc đáo đang chờ bạn tham gia! Trở thành người tiên phong, cạnh tranh cho phần thưởng độc quyền và bắt đầu một cuộc phiêu lưu TOX hoàn toàn mới!","Game Guild Showcase":"Giới thiệu game Guild","Investors have the opportunity to collaborate with game guilds. These guilds provide professional players to represent NFT owners in competitions, increasing their chances of winning rewards. Players climb to the pinnacle of wealth and glory through competitions. Investors partnering with guilds can effortlessly gain profits.":"Các nhà đầu tư có cơ hội hợp tác với guild game. Các guild này cung cấp cho người chơi chuyên nghiệp đại diện cho các chủ sở hữu NFT trong các giải đấu, thêm cơ hội giành phần thưởng của họ. Người chơi đạt đến đỉnh cao của sự giàu có và vinh quang thông qua các trò chơi. Các nhà đầu tư làm việc với guild có thể kiếm được lợi nhuận mà không gặp khó khăn.","":""}');

/***/ }),

/***/ 6361:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 乐趣铸就财富","Connect":"连接钱包","Home":"首页","Arena":"竞技场","Marketplace":"市场","Community":"社区","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱乐部","Governance":"社区治理","Farm":"农场","IGO":"IGO","Lottery":"抽奖","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首个休闲竞技区块链游戏平台","Your Fun Builds Your Fortune":"你的乐趣成就你的财富","Your Fun Builds Your":"你的乐趣成就你的","Fortune":"财富","Your Fun Builds":"你的乐趣成就","Your Fortune":"你的财富","The world\'s first casual competitive":"世界上第一个休闲竞技","Make every leisure moment create value":"让每一个休闲时刻都创造价值","Relax first":"休闲优先","Fair competition":"公平竞技","Selected a variety of easy and casual games":"精选多款轻松休闲游戏","Quick match, quick battle start":"快速匹配，快速启动战斗","A balancing mechanism based on skills rather than krypton gold":"基于技能而非氪金的平衡机制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜结合游戏表现和休闲指数","Earnings":"收益","&":"与","Achievements":"成就","Earnings & Achievements":"收益与成就","Cross-game asset interoperability system":"跨游戏资产互通系统","Real Earnings, Withdraw Anytime":"真实收益，随时提取","Massive Reward Pool, Surprises Anytime":"超高奖励池，惊喜随时到来","On-Chain Records of Your Gaming Highlights":"链上记录您的游戏高光时刻","Popular Games":"流行游戏","Decentralized":"去中心化","Operation":"运营","Decentralized operation":"去中心化运营","Club-based operation model":"以俱乐部为主的运营模式","Low threshold to support project parties to enter":"低门槛支持项目方入驻","Custom":"自定义","Games":"游戏","Custom Games":"自定义游戏","Community enjoys the greatest benefits of the platform":"社区享有平台最大的收益","Partner":"合作伙伴","Join Now":"现在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我们相信最好的收益来自于真正的游戏乐趣。连接钱包，开始您的轻松创收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用户注册即送‘休闲新手礼包’，包含：免费的小蛇 + 游戏积分","Support":"支持","Whitepaper":"白皮书","Projects":"项目","Advertising":"广告","Developer":"开发者","Contact":"联系","Customer Service":"客户服务","FAQs":"常见问题","Suggestions & Feedback":"建议与反馈","Platform":"平台","Terms of Service":"服务条款","Privacy Policy":"隐私协议","Career":"工作机会","App Download":"App下载","Follow us":"关注我们","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首个区块链休闲竞技游戏平台","Your Fun first":"乐趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"实时贪吃蛇大作战，吞噬对手，赚取加密奖励！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸弹人风暴：组队爆破！你的炸弹，就是最好的投资！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方块战争：消除赢积分，连击夺NFT，你的每个操作都值钱！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像素鸟生死竞速：全球实时排行榜，每秒链上结算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大乱斗：消除赚糖币，连击抢对手糖果，你的甜蜜就是你的财富！","Please install a digital wallet extension or use a crypto wallet app.":"请安装数字钱包插件或者使用加密钱包App","":""}');

/***/ }),

/***/ 3600:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 樂趣鑄就財富","Connect":"連接錢包","Home":"首頁","Arena":"競技場","Marketplace":"市場","Community":"社區","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱樂部","Governance":"社區治理","Farm":"農場","IGO":"IGO","Lottery":"抽獎","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首個休閒競技區塊鏈遊戲平台","Your Fun Builds Your Fortune":"你的樂趣成就你的財富","Your Fun Builds Your":"你的樂趣成就你的","Fortune":"財富","Your Fun Builds":"你的樂趣成就","Your Fortune":"你的財富","The world\'s first casual competitive":"世界上第一個休閒競技","Make every leisure moment create value":"讓每一個休閒時刻都創造價值","Relax first":"休閒優先","Fair competition":"公平競技","Selected a variety of easy and casual games":"精選多款輕鬆休閒遊戲","Quick match, quick battle start":"快速匹配，快速啟動戰鬥","A balancing mechanism based on skills rather than krypton gold":"基於技能而非氪金的平衡機制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜結合遊戲表現和休閒指數","Earnings":"收益","&":"與","Achievements":"成就","Earnings & Achievements":"收益與成就","Cross-game asset interoperability system":"跨遊戲資產互通系統","Real Earnings, Withdraw Anytime":"真實收益，隨時提取","Massive Reward Pool, Surprises Anytime":"超高獎勵池，驚喜隨時到來","On-Chain Records of Your Gaming Highlights":"鏈上記錄您的遊戲高光時刻","Popular Games":"流行遊戲","Decentralized":"去中心化","Operation":"運營","Decentralized operation":"去中心化運營","Club-based operation model":"以俱樂部為主的運營模式","Low threshold to support project parties to enter":"低門檻支持項目方入駐","Custom":"自定義","Games":"遊戲","Custom Games":"自定義遊戲","Community enjoys the greatest benefits of the platform":"社區享有平台最大的收益","Partner":"合作夥伴","Join Now":"現在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我們相信最好的收益來自於真正的遊戲樂趣。連接錢包，開始您的輕鬆創收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用戶註冊即送『休閒新手禮包』，包含：免費的小蛇 + 遊戲積分","Support":"支持","Whitepaper":"白皮書","Projects":"項目","Advertising":"廣告","Developer":"開發者","Contact":"聯繫","Customer Service":"客戶服務","FAQs":"常見問題","Suggestions & Feedback":"建議與反饋","Platform":"平台","Terms of Service":"服務條款","Privacy Policy":"隱私協議","Career":"工作機會","App Download":"App下載","Follow us":"關注我們","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首個區塊鏈休閒競技遊戲平台","Your Fun first":"樂趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"實时貪吃蛇大作戰，吞噬對手，賺取加密獎勵！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸彈人風暴：組隊爆破！ 你的炸彈，就是最好的投資！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方塊戰爭：消除贏積分，連擊奪NFT，你的每個操作都值錢！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像數鳥生死競速：全球實时排行榜，每秒鏈上結算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大亂鬥：消除賺糖幣，連擊搶對手糖果，你的甜蜜就是你的財富！","Please install a digital wallet extension or use a crypto wallet app.":"請安裝數字錢包挿件或者使用加密錢包App","":""}');

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
/******/ 		__webpack_require__.p = "/";
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
/******/ 			179: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [158], () => (__webpack_require__(7611)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;