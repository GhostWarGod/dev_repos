/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 920:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1126:
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
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.esm.js
var index_esm = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 36 modules
var es = __webpack_require__(3701);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(706);
;// ./src/utils/wagmi.ts





const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(3376);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(2635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var dist_es = __webpack_require__(2389);
;// ./i18n.ts



const resources = {
  "en": {
    translation: __webpack_require__(2038),
  },
  "zhCN": {
    translation: __webpack_require__(5372),
  },
  "zh": {
    translation: __webpack_require__(8380),
  },
}

// 获取 URL 参数
const params = new URLSearchParams(window.location.search)
let lang = params.get("lang") || params.get("lan") || localStorage.getItem('language') || "en" // 默认 en

localStorage.setItem('language', lang === "zh-cn" || lang === "zhCN" ? "zhCN" : lang === "zh" ? "zh" : "en");

i18next/* default.use */.Ay.use(dist_es/* initReactI18next */.r9).init({
  resources,
  lng: lang.toLowerCase(),  // 转小写
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(7208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2837);
;// ./src/hook/useWallet.ts






// 连接钱包
function useWallet_useConnectWallet() {
  const {
    connect
  } = (0,wagmi_dist/* useConnect */.eF)({
    connector: new chunk_2VZS2JHJ/* InjectedConnector */.s()
  });
  return connect;
}

// 断开连接
function useDisconnectWallet() {
  const {
    disconnect
  } = useDisconnect();
  return disconnect;
}

// 获取当前账号信息
function useWallet_useGetOwnAddress() {
  const {
    address,
    isConnected
  } = (0,wagmi_dist/* useAccount */.F7)();
  return {
    address,
    isConnected
  };
}
const queryChainIdAtom = (0,esm/* atom */.eU)(-1);
queryChainIdAtom.onMount = set => {
  const params = new URL(window.location.href).searchParams;
  const c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
;// ./src/components/language/language.jsx
/* eslint-disable react-hooks/exhaustive-deps */



function language_Language(_ref) {
  let {
    visible,
    modalCancel,
    modalConfirm,
    language
  } = _ref;
  const {
    i18n,
    t
  } = useTranslation();
  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/React.createElement(Modal, {
    centered: true,
    open: visible,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "lan_title"
  }, t("Select Language")), /*#__PURE__*/React.createElement("div", {
    className: "lan_pass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("en");
    }
  }, /*#__PURE__*/React.createElement("em", null, /*#__PURE__*/React.createElement("div", {
    className: "lan_conzs"
  }, "English")), language === "en" && /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhCN");
    }
  }, /*#__PURE__*/React.createElement("em", null, /*#__PURE__*/React.createElement("div", {
    className: "lan_botmsa"
  }, "\u7B80\u4F53\u4E2D\u6587")), language === "zhCN" && /*#__PURE__*/React.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  })))));
}
/* harmony default export */ const language = ((/* unused pure expression or super */ null && (language_Language)));
;// ./src/assets/images/logo.png
const logo_namespaceObject = "data:image/png;base64,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";
;// ./src/assets/images/lan.png
const lan_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAMAAABZAGpeAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAHw8L5BX28eyQd6RWUWYH0cCee1ssk+je1cy7smxF+cIvKe7ZQSOngPuWhXJiTDgyEsVhqbMpExIAAAK9SURBVEjHnZbpYqowEIUjhgCClM0d97W1tXb53v/VLlIiiPa29vyII8nJLMyCuMab54z6Flj9keOZ4gc0P0KqeBy9PPzveMsuzrkQTclhx83vzrclWN12j/68AUZnhd3uWiDbt6+PwIoNMWJlihNBmANGwogtcG8oaQSwzXz0UAvxRRAbhSeEuYWgUT+/kagk+32QxEITRAt58jlRyE3tfol9PAkfKKMkNC1eRIajjbzQ0QzgKY9fwJMoCaJLIE56HQiqfkQA8tkUC5hXCQvoCGPcB3Ar8QQ/VjAdpQSiShBD0nQKau+DdzZIss2Cse8BqOF2N058SJLxzh0qgN4+C5+L1Ea1sMzc0knEDUSH3DtzSVwosLUk1qi176SzQIIMZqnjrxWT873LLxUvWKWud3Hpg5jR0pZb+LkQ0hUFXLp1glNGx2GW2wav+tGQcZ0wZqh3X+Hkq0dPaNhM6oQJS6HRI8kVfeoHD7CoExZwLqEtTraOcq/0MbNOeINzFrUIs7XPuT46IOoEAfMyI/rZatFuFDgwLaRXmBeiKvfbTDMCd+EvBIuJUWDNtJDm0ChExVrvT1D3OX1A/iWsDtvfvjiX7n2pIUl+Tj6/TL5jYfEM57fp/X5fAS3xdYm2yhI9enGUhgMIwjTaJcdqiVqGlpbmV4U43EB3LYomsCvbjJutzyuAx37qxONn8Mexk64eAfqxcfKvZ1QaWTK2gWF43cjCd8BqfVQa2YkNWPuN6ECnSsj/N/Y2wGe1GQ/AzU8M6s14oIfNoFlr9725jrEmlK1onm3XBsRCoryvgdK6GCgnettCdq5G1gCiNyES1KYyspIsXyNYNW4MRRfs56YYMSiHYphF2y6HYg2eBNs52Kw6euweHBuk9+1g39nAI0wj6OrBvtPX36T4My4w85viB5jeUygVKBk+XX+c/ANseo089XlBFwAAAABJRU5ErkJggg==";
;// ./src/components/header/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */








const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.header_container {
		display: flex;
		justify-content: space-between;
		position: fixed;
		height: 62px;
		background: #1F2330;
		padding: 0px 0px 0px 6px;
		align-items: center;
		left: 0;
		top: 0;
		transform: translateY(0);
		transition: transform .1s ease-in-out;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		width: 100%;
		z-index: 999;
	}
	.header_left {
		span {
			cursor: pointer;
			&:hover {
				opacity: .8;
			}
		}
		em {
		    margin-left: 15px;
			cursor: pointer;
		}
	}
	.header_right {
		display: flex;
		margin-right: 3%;
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			background: #fff;
			width: 128px;
			height: 51px;
			margin-top: -8px;
			margin-left: 5px;
    		margin-right: 5px;
			font-size: 14px;
			color: #141722;
			font-weight: bold;
			transition: transform .1s ease-in-out;
			cursor: pointer;
			&:hover {
				transform: translateY(-2px);
			}
		}
	}
	.header_login {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 128px;
		height: 41px;
		background: #2F3444;
		border-radius: 8px;
		margin: 0 10px;
		transition: transform .1s ease-in-out;
		i {
			width: 80px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: 500;
			padding-left: 5px;
		}
	}
	.header_lognn {
		display: flex;
    	align-items: center;
		cursor: pointer;
		img {
			width: 26px;
			height: 26px;
			border-radius: 50%;
		}
	}


	@media (max-width: 750px) {
		.header_right {
			align-items: center;
			span {
				width: 75px;
				height: 35px;
				margin-top: 0px;
			}
		}
		.header_login {
			height: 33px;
		}
		.header_lognn {
			img {
				width: 24px;
    			height: 24px;
			}
		}
	}
`;
function Header() {
  const {
    i18n,
    t
  } = useTranslation();
  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  // 	if (!address) {
  // 		// 自动打开连接钱包
  // 		connectWallet();
  // 	}
  // }, [address])

  const handleNavigateClick = name => {
    navigate(name);
    window.scrollTo(0, 0);
  };
  const modalConfirm = lanu => {
    i18n.changeLanguage(lanu);
    localStorage.setItem('language', lanu);
    setVisible(false);
  };
  return /*#__PURE__*/React.createElement(CustomStyle, null, /*#__PURE__*/React.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/React.createElement("em", {
    onClick: () => {
      handleNavigateClick("/");
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "header_right"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setVisible(true)
  }, /*#__PURE__*/React.createElement("img", {
    src: lan,
    alt: ""
  })), isConnected ? /*#__PURE__*/React.createElement("div", {
    className: "header_login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header_lognn"
  }, /*#__PURE__*/React.createElement("i", null, address ? `${address.substring(0, 4)}...${address.substr(-2)}` : ''))) : /*#__PURE__*/React.createElement("span", {
    onClick: () => connectWallet()
  }, t('Connect')))), visible && /*#__PURE__*/React.createElement(Language, {
    visible: visible,
    modalCancel: () => setVisible(false),
    modalConfirm: modalConfirm,
    language: i18n.language
  }));
}
/* harmony default export */ const header = ((/* unused pure expression or super */ null && (Header)));
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 76 modules
var message = __webpack_require__(4755);
// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(4856);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(7965);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/hook/_isMobile.ts
function _isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(346);
;// ./src/config/const/address.ts
const addressUsdtToken = {
  56: '0x55d398326f99059fF775485246999027B3197955',
  97: '0x44004827f2F72566E12884A38f63f72F2a5143ea'
};
const addressDiceFactoryContract = {
  56: '',
  97: '0x2473d4C6298c9C1Ce625317a68942127948b43F7'
};
const addressDiceBetContract = {
  56: '',
  97: '0x85C048021ac3efA7d8AbF076f7867a2465791bd3'
};
;// ./src/config/abi/erc20.json
const erc20_namespaceObject = /*#__PURE__*/JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// ./src/config/abi/diceFactory_abi.json
const diceFactory_abi_namespaceObject = [];
;// ./src/config/abi/diceBet_abi.json
const diceBet_abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_betAmount","type":"uint256"},{"internalType":"uint256","name":"_maxKeepBalance","type":"uint256"},{"internalType":"address","name":"_creator","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"payout","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isWin","type":"bool"},{"indexed":false,"internalType":"uint256","name":"order","type":"uint256"}],"name":"DiceRolled","type":"event"},{"inputs":[],"name":"FEE_RECEIVER","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROLL_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecords30Last","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"bool","name":"isWin","type":"bool"}],"internalType":"struct Game_DicePool.Record[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecordsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getUserRecordByRange","outputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"bool","name":"isWin","type":"bool"}],"internalType":"struct Game_DicePool.Record[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUserRecordsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxKeepBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"orders","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"bool","name":"isWin","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"random","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"records","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"bool","name":"isWin","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum Game_DicePool.Choice","name":"choice","type":"uint8"},{"internalType":"uint256","name":"order","type":"uint256"}],"name":"rollDice","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userRecords","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8","name":"diceOutcome","type":"uint8"},{"internalType":"uint256","name":"payout","type":"uint256"},{"internalType":"bool","name":"isWin","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/const/index.ts



const abiErc20 = erc20_namespaceObject;
const abiDiceFactory = (/* unused pure expression or super */ null && (diceFactoryAbi));
const abiDiceBet = diceBet_abi_namespaceObject;
;// ./src/utils/common.ts
// 保留小数，不四舍五入
const toFixedFloor = function (num, decimal, withComma) {
  if (decimal === void 0) {
    decimal = 4;
  }
  if (withComma === void 0) {
    withComma = true;
  }
  const value = Number(num);
  if (isNaN(value)) return "0";

  // 向下截断，不四舍五入
  const factor = Math.pow(10, decimal);
  const floored = Math.floor(num * factor) / factor;

  // 转成字符串，拆分整数和小数部分
  let [intPart, decPart] = floored.toString().split(".");

  // 整数部分加千分位
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 去掉小数部分多余的 0
  if (decPart) {
    decPart = decPart.replace(/0+$/, ""); // 去掉结尾的0
  }

  // 如果没有小数部分则不加点
  return decPart ? `${intPart}.${decPart}` : intPart;
};
const parseNumber = (num, decimal) => {
  let newNum = "";
  let count = 0;
  let numStr = String(num); // 数字转为字符串;
  // 当字符串不含有小数点
  if (numStr.indexOf(".") == -1) {
    let i;
    for (i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    // numStr= newNum + ".00"; // 自动补小数点后两位
    numStr = newNum;
    return numStr;
  } else {
    var _numberArr$;
    // 当字符串含有小数点
    for (let i = numStr.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum; // 字符拼接
      }
      count++;
    }
    const reg = /^0+/;
    const numberArr = String(numStr).split('.');

    //  小数点后面 0 的个数
    const zeroArrCount = numberArr && ((_numberArr$ = numberArr[1]) == null ? void 0 : _numberArr$.match(reg));
    const zeroCount = zeroArrCount == null ? void 0 : zeroArrCount[0];
    const zeroCountLen = (zeroCount == null ? void 0 : zeroCount.length) || 0;
    // 保留几位小数
    const zeroDecimal = zeroCountLen !== 0 ? zeroCountLen + 2 : 0;
    const numDecimal = decimal ? decimal + 1 : 3 + 1;
    const decimalNewNum = zeroDecimal === 0 ? numDecimal : zeroDecimal + 1;
    numStr = newNum + (numStr + "00").substr((numStr + "00").indexOf("."), decimalNewNum);
    return numStr;
  }
};

// 时间戳转换时间(毫秒)
const formatTimestamp = function (timestamp, format) {
  if (format === void 0) {
    format = 'YYYY-MM-DD HH:mm:ss';
  }
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const pad = num => String(num).padStart(2, '0');
  const map = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match]);
};

/**
 * 验证以太坊地址格式
 * @param {string} address - 钱包地址
 * @returns {boolean}
 */
const isValidAddress = address => {
  if (typeof address !== 'string') return false;
  if (!address.match(/^0x[0-9a-fA-F]{40}$/)) return false;
  return true;
};

/**
 * 将十六进制字符串转换为BigInt
 * @param {string} hex - 十六进制字符串
 * @returns {bigint}
 */
const hexToBigInt = hex => {
  if (hex.startsWith('0x')) {
    hex = hex.slice(2);
  }
  return BigInt('0x' + hex);
};

/**
 * 将BigInt转换为十六进制字符串
 * @param {bigint} bigInt - BigInt值
 * @param {number} length - 输出的长度（字节数）
 * @returns {string}
 */
const bigIntToHex = function (bigInt, length) {
  if (length === void 0) {
    length = 32;
  }
  let hex = bigInt.toString(16);
  // 补齐到指定长度
  const targetLength = length * 2; // 每个字节2个十六进制字符
  hex = hex.padStart(targetLength, '0');
  return '0x' + hex;
};

/**
 * 将钱包地址和时间戳转换为uint256
 * @param {string} address - 钱包地址
 * @param {number} timestamp - 时间戳（可选，默认当前时间）
 * @returns {string} uint256格式的字符串
 */
const addressAndTimestampToUint256 = function (address, timestamp) {
  if (timestamp === void 0) {
    timestamp = Date.now();
  }
  if (!address) {
    throw new Error('钱包地址不能为空');
  }

  // 验证地址格式
  if (!isValidAddress(address)) {
    throw new Error('无效的钱包地址格式');
  }

  // 将地址转换为BigInt（去掉0x前缀）
  const addressBigInt = hexToBigInt(address);

  // 将时间戳转换为BigInt
  const timestampBigInt = BigInt(timestamp);

  // 地址占20字节（160位），左移96位为时间戳留出空间
  // 时间戳占8字节（64位），左移32位为填充留出空间
  // 最后4字节（32位）为填充，可以用于其他用途或保持为0

  const addressShifted = addressBigInt << 96n; // 160位左移96位 = 总共256位
  const timestampShifted = timestampBigInt << 32n; // 64位左移32位

  // 组合所有部分
  const combinedBigInt = addressShifted | timestampShifted;
  return combinedBigInt.toString();
};

/**
 * 从uint256解析回地址和时间戳
 * @param {string} uint256Value - uint256值
 * @returns {Object} 包含地址和时间戳的对象
 */
const uint256ToAddressAndTimestamp = uint256Value => {
  if (!uint256Value) {
    throw new Error('uint256值不能为空');
  }
  const bigNumber = BigInt(uint256Value);

  // 掩码定义
  const ADDRESS_MASK = (1n << 160n) - 1n; // 160位掩码
  const TIMESTAMP_MASK = (1n << 64n) - 1n; // 64位掩码

  // 提取地址（右移96位）
  const addressBigInt = bigNumber >> 96n & ADDRESS_MASK;

  // 提取时间戳（右移32位，然后取64位）
  const timestampBigInt = bigNumber >> 32n & TIMESTAMP_MASK;

  // 转换回十六进制地址
  const addressHex = bigIntToHex(addressBigInt, 20);
  return {
    address: addressHex,
    timestamp: Number(timestampBigInt)
  };
};

/**
 * 生成基于钱包地址和时间的唯一ID
 * @param {string} address - 钱包地址
 * @returns {string} uint256格式的唯一ID
 */
const generateUniqueId = address => {
  return addressAndTimestampToUint256(address);
};

/**
 * 获取当前时间的十六进制表示
 * @returns {string}
 */
const getCurrentTimestampHex = () => {
  return BigInt(Date.now()).toString(16);
};

/**
 * 验证uint256值是否有效
 * @param {string} value - uint256值
 * @returns {boolean}
 */
const isValidUint256 = value => {
  try {
    const bigInt = BigInt(value);
    return bigInt >= 0n && bigInt < 1n << 256n;
  } catch {
    return false;
  }
};
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
;// ./src/assets/images/dice/quanbg.png
const quanbg_namespaceObject = __webpack_require__.p + "5febb96858a5ca6fc2a3.png";
;// ./src/assets/images/dice/diceDefault.png
const diceDefault_namespaceObject = __webpack_require__.p + "4ad1c31f3d3360ec7f00.png";
;// ./src/assets/images/dice/dice1.png
const dice1_namespaceObject = __webpack_require__.p + "92306ae2a9c1356b08a7.png";
;// ./src/assets/images/dice/dice2.png
const dice2_namespaceObject = __webpack_require__.p + "320e5cfd0bc2b73a4322.png";
;// ./src/assets/images/dice/dice3.png
const dice3_namespaceObject = __webpack_require__.p + "7733430d889ed82b03a6.png";
;// ./src/assets/images/dice/dice4.png
const dice4_namespaceObject = __webpack_require__.p + "879905c73d15dfe8d251.png";
;// ./src/assets/images/dice/dice5.png
const dice5_namespaceObject = __webpack_require__.p + "3bc55335003722c40ff0.png";
;// ./src/assets/images/dice/dice6.png
const dice6_namespaceObject = __webpack_require__.p + "76f83961ffbabe3c25f8.png";
;// ./src/assets/images/dice/buttom.png
const buttom_namespaceObject = "data:image/png;base64,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";
;// ./src/pages/index/diceGame.jsx






















const diceGame_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.control_buttons {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			background: url(${buttom_namespaceObject}) no-repeat #1F2330;
			background-size: 100%;
			width: 306px;
			height: 94px;
			margin: auto;
			font-size: 18px;
			color: #000000;
			font-weight: bold;
			margin-top: 20px;
			border: none;
			cursor: pointer;
		}
	}


	@media (max-width: 750px) {
		.control_buttons {
			button {
				width: 244px;
    			height: 76px;
			}
		}
	}
`;
function DiceGame(_ref) {
  let {
    tokenSymbol,
    tokenContract,
    tokenBalance,
    allApprove,
    tokenNumber,
    feeNumber,
    onRollComplete,
    updateAllowance,
    updateRollCall
  } = _ref;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const {
    address,
    isConnected
  } = useWallet_useGetOwnAddress();
  const connectWallet = useWallet_useConnectWallet();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isBetLoading, setIsBetLoading] = (0,react.useState)(false);

  // 骰子点数图片路径
  const diceImages = [dice1_namespaceObject, dice2_namespaceObject, dice3_namespaceObject, dice4_namespaceObject, dice5_namespaceObject, dice6_namespaceObject];
  const defaultDiceImage = diceDefault_namespaceObject;

  // 状态管理
  const [currentDice, setCurrentDice] = (0,react.useState)(defaultDiceImage);
  const [isRolling, setIsRolling] = (0,react.useState)(false);
  const [bet, setBet] = (0,react.useState)(null); // 'big 大' 或 'small 小'
  const [result, setResult] = (0,react.useState)(null); // 结果
  const [diceValue, setDiceValue] = (0,react.useState)(null); // 点数

  // 骰子滚动动画引用
  const diceRef = (0,react.useRef)(null);

  // 压大压小处理
  const handleBet = type => {
    if (isRolling) return;
    setBet(type);
    setResult(null);
  };

  // 骰子结果
  const startDiceRolling = diceOutcome => {
    setIsRolling(true);
    setResult(null);

    // 骰子滚动动画
    if (diceRef.current) {
      diceRef.current.classList.add('rolling');
    }

    // 模拟骰子滚动效果
    let rollCount = 0;
    const maxRolls = 15;
    const rollInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentDice(diceImages[randomIndex]);
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);

        // 确定最终点数
        // const finalValue = Math.floor(Math.random() * 6) + 1;
        const finalValue = diceOutcome;
        setDiceValue(finalValue);
        setCurrentDice(diceImages[finalValue - 1]);

        // 停止动画
        setTimeout(() => {
          setIsRolling(false);
          if (diceRef.current) {
            diceRef.current.classList.remove('rolling');
          }

          // 判断胜负
          const isBig = finalValue >= 4;
          const isWin = bet === 'big' && isBig || bet === 'small' && !isBig;
          setResult(isWin ? 'win' : 'lose');

          // 创建新的历史记录项
          const newRoll = {
            value: finalValue,
            bet,
            result: isWin ? 'win' : 'lose',
            timestamp: new Date().getTime()
          };

          // 添加到历史记录
          if (onRollComplete) {
            onRollComplete(newRoll);
          }
          if (isWin) {
            messageApi.open({
              type: 'success',
              content: t('Congratulations, you hit the jackpot')
            });
          } else {
            messageApi.open({
              type: 'error',
              content: t("Unfortunately, you didn't make it")
            });
          }
          updateRollCall(); // 合约结果回调
        }, 300);
      }
    }, 100);
  };

  // 合约查询骰子结果
  const contractDiceRolling = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        const getUserLength = await contract.methods.getUserRecordsLength(address).call();
        const userRecords = await contract.methods.userRecords(address, getUserLength - 1).call();
        if (userRecords.diceOutcome) {
          // 骰子结果
          startDiceRolling(userRecords.diceOutcome);
        }
      } else {}
    } catch (error) {
      console.log('balance contract error===>', error);
    }
  };

  // 合约交互下注
  const handleContractBet = async () => {
    var _chain$id2;
    let value = bet === "big" ? 1 : 0;
    const addressUint256 = addressAndTimestampToUint256(address);
    setIsBetLoading(true);
    const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
    let gas = await web3.eth.getGasPrice();
    await contract.methods.rollDice(value, addressUint256).send({
      from: address,
      gasPrice: gas,
      value: feeNumber || 50000000000000
    }, (err, result) => {
      if (err) {
        setIsBetLoading(false);
        console.log('rollDice err===>', err);
      } else {
        console.log('rollDice result===>', result);
      }
    });
    setIsBetLoading(false);
    contractDiceRolling(); // 合约查询骰子结果
  };

  // 开始掷骰子
  const startRolling = () => {
    if (!bet || isRolling) {
      messageApi.open({
        type: 'error',
        content: t('Please select Big or Small first.')
      });
      return;
    }
    if (Number(tokenNumber) > Number(tokenBalance)) {
      messageApi.open({
        type: 'warning',
        content: t('Insufficient balance')
      });
      return;
    }

    // 合约交互下注
    handleContractBet();
  };

  // 授权
  const hadnleApprove = async () => {
    setIsApproveLoading(true);
    if (tokenContract) {
      var _chain$id3;
      const contract = new web3.eth.Contract(abiErc20, tokenContract);

      // 获取gas费
      let gas = await web3.eth.getGasPrice();
      const amount = "1000000000000000000000000000";
      const approveAmount = web3.utils.toWei(amount.toString(), 'ether');
      await contract.methods.approve(addressDiceBetContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56], approveAmount.toString()).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          setIsApproveLoading(false);
          console.log('Approve err===>', err);
        } else {
          console.log('Approve result===>', result);
        }
      });
      setIsApproveLoading(false);
      updateAllowance(); // 查询授权
    }
  };
  return /*#__PURE__*/react.createElement(diceGame_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "dice-section"
  }, /*#__PURE__*/react.createElement("div", {
    ref: diceRef,
    className: `dice ${isRolling ? 'rolling' : ''}`
  }, /*#__PURE__*/react.createElement("img", {
    src: currentDice,
    alt: "\u9AB0\u5B50"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "dice-quan"
  }, /*#__PURE__*/react.createElement("img", {
    src: quanbg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "bet-buttons"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bet-btn-big"
  }, /*#__PURE__*/react.createElement("button", {
    className: `bet-btn bet-button-big ${bet === 'big' ? 'active' : ''}`,
    onClick: () => handleBet('big'),
    disabled: isRolling
  }, t('Big'))), tokenNumber && tokenSymbol && /*#__PURE__*/react.createElement("div", null, t('Bet'), " ", tokenNumber, tokenSymbol), /*#__PURE__*/react.createElement("div", {
    className: "bet-btn-small"
  }, /*#__PURE__*/react.createElement("button", {
    className: `bet-btn bet-button-small ${bet === 'small' ? 'active' : ''}`,
    onClick: () => handleBet('small'),
    disabled: isRolling
  }, t('Small')))), /*#__PURE__*/react.createElement("div", {
    className: "control_buttons"
  }, address ? Number(allApprove) < Number(tokenNumber) ? /*#__PURE__*/react.createElement("button", {
    onClick: () => hadnleApprove()
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("button", {
    onClick: startRolling,
    disabled: !bet || isRolling
  }, isRolling ? /*#__PURE__*/react.createElement("span", null, t('Rolling the dice'), /*#__PURE__*/react.createElement(Loader_Dots, null)) : /*#__PURE__*/react.createElement("span", null, !isBetLoading && /*#__PURE__*/react.createElement("span", null, t('Roll The Dice')), isBetLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Roll The Dice'))))) : /*#__PURE__*/react.createElement("button", {
    onClick: connectWallet
  }, t('Connect'))), /*#__PURE__*/react.createElement("div", {
    className: "token_balance"
  }, /*#__PURE__*/react.createElement("span", null, t('Balance'), ":"), address ? /*#__PURE__*/react.createElement("em", null, toFixedFloor(tokenBalance), " ", tokenSymbol) : /*#__PURE__*/react.createElement("em", null, "-")));
}
/* harmony default export */ const diceGame = (DiceGame);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 7 modules
var spin = __webpack_require__(8886);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(3567);
;// ./src/pages/index/record.jsx







function Record(_ref) {
  let {
    tokenSymbol,
    tokenDecimals,
    tokenNumber,
    loading,
    rollHistory
  } = _ref;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement("div", {
    className: "dc_record_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dc_record_title"
  }, t('Record')), /*#__PURE__*/react.createElement("div", {
    className: "dc_record_list dc_record_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid1"
  }, t('Time')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid2"
  }, t('Wallet')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid3"
  }, t('Bet')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid4"
  }, t('Reward'), tokenSymbol && /*#__PURE__*/react.createElement("i", null, "(", tokenSymbol, ")"))), /*#__PURE__*/react.createElement("div", {
    className: "dc_list_overflow"
  }, !loading ? /*#__PURE__*/react.createElement("div", null, rollHistory.length > 0 ? /*#__PURE__*/react.createElement("div", null, rollHistory.map((item, index) => /*#__PURE__*/react.createElement("div", {
    className: "dc_record_list",
    key: index
  }, /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid1"
  }, !_isMobile() ? formatTimestamp(item.timestamp * 1000) : formatTimestamp(item.timestamp * 1000, "MM-DD HH:mm")), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid2"
  }, item.player ? `${item.player.substring(0, 4)}...${item.player.substr(-2)}` : ''), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid3"
  }, item.diceOutcome > 3 ? /*#__PURE__*/react.createElement("i", null, item.isWin ? /*#__PURE__*/react.createElement("i", null, t('Big')) : /*#__PURE__*/react.createElement("i", null, t('Small'))) : /*#__PURE__*/react.createElement("i", null, item.isWin ? /*#__PURE__*/react.createElement("i", null, t('Small')) : /*#__PURE__*/react.createElement("i", null, t('Big')))), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid4"
  }, item.isWin ? /*#__PURE__*/react.createElement("i", null, "+", toFixedFloor(new bignumber/* default */.A(item.payout.toString()).shiftedBy(-tokenDecimals || -18).toString())) : /*#__PURE__*/react.createElement("i", null, "-", tokenNumber))))) : /*#__PURE__*/react.createElement("div", {
    className: "dc_list_not"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "dc_list_not"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#9A9892"
      },
      spin: true
    })
  }))));
}
/* harmony default export */ const record = (Record);
;// ./src/assets/images/dice/dice_bg.png
const dice_bg_namespaceObject = __webpack_require__.p + "d4bf0f822259eee6559e.png";
;// ./src/assets/images/dice/ruls_ico.png
const ruls_ico_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAA1klEQVR4AYyRMQrCQBBFsxEUBBvB2s7Sc3gKizRioXgOTyCoiIUn8QhewMbGJpUkGnV9IxomuysY5jG7f+Yns5vYWtuHI2TQinjIBlLIHQ4x9QF0oQ46pNZA0PREvCP+G1YM32bDomCExBhjWcueVA1tKCjNYY1pS5Y9qRraIGeYfMpDchu80AavGBK0IadhBkmAMVoKkTY8ES5wDSAve9+mNjRpXMIuwAatA5UvZAhTCI00QvdGkru/UXj8oBypRoOEjLRgIf/AZYVejrRnc4bQYV3t9AIAAP//2H9a7gAAAAZJREFUAwC2v2evLKyAHAAAAABJRU5ErkJggg==";
;// ./src/pages/index/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */

















const index_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	width: 832px;
	margin: 0 auto;

	.dc_conter {
		width: 832px;
		height: 664px;
		background: url(${dice_bg_namespaceObject}) no-repeat #1F2330;
		background-size: 100%;
		border-radius: 7px;
		padding-top: 40px;
    	text-align: center;
	}


	@media (max-width: 750px) {
		width: 100%;

		.dc_conter {
			width: 100%;
    		height: 100%;
			padding-top: 50px;
			padding-bottom: 30px;
		}
	}
`;
function Dice() {
  var _chain$id7, _chain$id8, _chain$id9, _chain$id0;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address,
    isConnected
  } = useWallet_useGetOwnAddress();
  const connectWallet = useWallet_useConnectWallet();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const [poolBalance, setPoolBalance] = (0,react.useState)("0");
  const [prevAssets, setPrevAssets] = (0,react.useState)(poolBalance);
  const [tokenSymbol, setTokenSymbol] = (0,react.useState)("");
  const [tokenDecimals, setTokenDecimals] = (0,react.useState)("");
  const [tokenContract, setTokenContract] = (0,react.useState)("");
  const [tokenBalance, setTokenBalance] = (0,react.useState)("0.0000");
  const [allApprove, setAllApprove] = (0,react.useState)("1000");
  const [tokenNumber, setTokenNumber] = (0,react.useState)(""); // 下注需要扣除Token数量
  const [feeNumber, setFeeNumber] = (0,react.useState)(""); // 下注需要BNB手续费数量
  const [loading, setLoading] = (0,react.useState)(true);
  const [rollHistory, setRollHistory] = (0,react.useState)([]);
  const [ruleShow, setRuleShow] = (0,react.useState)(false);

  // 查询余额
  const handleBalance = async () => {
    try {
      const contract = new web3.eth.Contract(abiErc20, tokenContract);
      if (address && contract) {
        const balance = await contract.methods.balanceOf(address).call();
        const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setTokenBalance(balanceBig);
        // console.log("balanceBig===>", balanceBig)
      } else {
        setTokenBalance("0");
      }
    } catch (error) {
      console.log('balance contract error===>', error);
      setTokenBalance("0");
    }
  };

  // 查询授权
  const handleAllowance = async () => {
    try {
      const contract = new web3.eth.Contract(abiErc20, tokenContract);
      if (address && contract) {
        var _chain$id;
        let allowance = await contract.methods.allowance(address, addressDiceBetContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]).call();
        const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setAllApprove(allowanceBig);
        // console.log("allowanceBig===>", allowanceBig)
      } else {
        setAllApprove("0");
      }
    } catch (error) {
      console.log('contract error===>', error);
      setAllApprove("0");
    }
  };

  // 查询下注Token信息、奖金池余额
  const handleTokenData = async () => {
    try {
      var _chain$id2;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
      if (address && contract) {
        let token = await contract.methods.token().call();
        if (token) {
          var _chain$id3;
          const tokenContract = new web3.eth.Contract(abiErc20, token);
          let symbol = await tokenContract.methods.symbol().call();
          let decimals = await tokenContract.methods.decimals().call();
          setTokenSymbol(symbol);
          setTokenDecimals(decimals);
          setTokenContract(token);

          // 奖金池余额
          const balance = await tokenContract.methods.balanceOf(addressDiceBetContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56]).call();
          const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-tokenDecimals || -18).toString();
          setPoolBalance(balanceBig);
        }
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询下注需要扣除Token数量、扣除BNB手续费数量
  const handleTokenNumber = async () => {
    try {
      var _chain$id4;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id4 = chain == null ? void 0 : chain.id) != null ? _chain$id4 : 56]);
      if (address && contract) {
        // 下注需要扣除Token数量
        let betAmount = await contract.methods.betAmount().call();
        const betAmountBig = new bignumber/* default */.A(betAmount.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setTokenNumber(betAmountBig);

        // 扣除BNB手续费数量
        let fee = await contract.methods.ROLL_FEE().call();
        setFeeNumber(fee);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询记录
  const handleListRecord = async () => {
    try {
      var _chain$id5;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id5 = chain == null ? void 0 : chain.id) != null ? _chain$id5 : 56]);
      if (address && contract) {
        let getRecords30Last = await contract.methods.getRecords30Last().call();
        const reversedRecords = [...getRecords30Last].reverse();
        // console.log('reversedRecords===>', reversedRecords)
        setRollHistory(reversedRecords);
        setLoading(false);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    if (address) {
      handleTokenData(); // 查询下注Token信息、奖金池余额
      handleListRecord(); // 查询记录
    }
    if (address && tokenContract && tokenDecimals) {
      handleBalance(); // 查询余额
      handleAllowance(); // 查询授权
      handleTokenNumber(); // 查询下注需要扣除Token数量、扣除BNB手续费数量
    }
  }, [address, tokenContract, tokenDecimals]);

  // 合约结果回调
  const updateRollCall = () => {
    handleTokenData(); // 查询下注Token信息、奖金池余额
    handleBalance(); // 查询余额
    handleAllowance(); // 查询授权
  };

  // 更新历史记录的回调函数
  const updateRollHistory = newRoll => {
    // setRollHistory(prev => [
    // 	newRoll,
    // 	...prev.slice(0, 9) // 只保留最近10条记录
    // ]);
    handleListRecord(); // 查询记录
  };
  const handleCopy = () => {
    var _chain$id6;
    if (copy_to_clipboard_default()(addressDiceFactoryContract[(_chain$id6 = chain == null ? void 0 : chain.id) != null ? _chain$id6 : 56])) {
      messageApi.open({
        type: 'success',
        content: t('Copy successful')
      });
    }
  };
  (0,react.useEffect)(() => {
    // 当 myAssets 改变时更新上一次的值
    setPrevAssets(prev => prev !== poolBalance ? prev : prevAssets);
  }, [poolBalance]);

  // console.log("abiDiceFactory===>", abiDiceFactory)
  // console.log("abiDiceBet===>", abiDiceBet)

  return /*#__PURE__*/react.createElement(index_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "dc_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dc_pool"
  }, /*#__PURE__*/react.createElement("em", null, t('Prize Pool')), poolBalance !== "0" ? /*#__PURE__*/react.createElement(build/* default */.Ay, {
    start: prevAssets,
    end: poolBalance,
    duration: 2.0,
    separator: ",",
    decimals: 2,
    decimal: ".",
    prefix: "",
    preserveValue: true
  }) : /*#__PURE__*/react.createElement("span", null, "--"), /*#__PURE__*/react.createElement("i", null, tokenSymbol)), /*#__PURE__*/react.createElement("div", {
    className: "dc_rule",
    onClick: () => {
      setRuleShow(!ruleShow);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: ruls_ico_namespaceObject,
    alt: ""
  }), t('Rules')), ruleShow && /*#__PURE__*/react.createElement("div", {
    className: "dc_rule_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Rules')), /*#__PURE__*/react.createElement("span", null, t('1. Players can freely create game pools.')), /*#__PURE__*/react.createElement("span", null, t('2. The game is automatically executed by smart contracts to ensure fairness.')), /*#__PURE__*/react.createElement("span", null, t('3. The betting amount for each game is fixed.'))), /*#__PURE__*/react.createElement("div", {
    className: "dc_contract"
  }, /*#__PURE__*/react.createElement("span", null, t('Contract'), ":"), !_isMobile() ? /*#__PURE__*/react.createElement("em", null, addressDiceBetContract[(_chain$id7 = chain == null ? void 0 : chain.id) != null ? _chain$id7 : 56]) : /*#__PURE__*/react.createElement("em", {
    onClick: handleCopy
  }, addressDiceBetContract[(_chain$id8 = chain == null ? void 0 : chain.id) != null ? _chain$id8 : 56] ? `${addressDiceBetContract[(_chain$id9 = chain == null ? void 0 : chain.id) != null ? _chain$id9 : 56].substring(0, 6)}...${addressDiceBetContract[(_chain$id0 = chain == null ? void 0 : chain.id) != null ? _chain$id0 : 56].substr(-6)}` : '')), /*#__PURE__*/react.createElement(diceGame, {
    tokenSymbol: tokenSymbol,
    tokenContract: tokenContract,
    tokenBalance: tokenBalance,
    allApprove: allApprove,
    tokenNumber: tokenNumber,
    feeNumber: feeNumber,
    onRollComplete: updateRollHistory,
    updateAllowance: handleAllowance,
    updateRollCall: updateRollCall
  })), /*#__PURE__*/react.createElement(record, {
    tokenSymbol: tokenSymbol,
    tokenDecimals: tokenDecimals,
    tokenNumber: tokenNumber,
    loading: loading,
    rollHistory: rollHistory
  }));
}
/* harmony default export */ const index = (Dice);
;// ./src/pages/dice/diceGame.jsx






















const dice_diceGame_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.control_buttons {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			background: url(${buttom_namespaceObject}) no-repeat #1F2330;
			background-size: 100%;
			width: 306px;
			height: 94px;
			margin: auto;
			font-size: 18px;
			color: #000000;
			font-weight: bold;
			margin-top: 20px;
			border: none;
			cursor: pointer;
		}
	}


	@media (max-width: 750px) {
		.control_buttons {
			button {
				width: 244px;
    			height: 76px;
			}
		}
	}
`;
function diceGame_DiceGame(_ref) {
  let {
    tokenSymbol,
    tokenContract,
    tokenBalance,
    allApprove,
    tokenNumber,
    feeNumber,
    onRollComplete,
    updateAllowance,
    updateRollCall
  } = _ref;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const {
    address,
    isConnected
  } = useWallet_useGetOwnAddress();
  const connectWallet = useWallet_useConnectWallet();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isBetLoading, setIsBetLoading] = (0,react.useState)(false);

  // 骰子点数图片路径
  const diceImages = [dice1_namespaceObject, dice2_namespaceObject, dice3_namespaceObject, dice4_namespaceObject, dice5_namespaceObject, dice6_namespaceObject];
  const defaultDiceImage = diceDefault_namespaceObject;

  // 状态管理
  const [currentDice, setCurrentDice] = (0,react.useState)(defaultDiceImage);
  const [isRolling, setIsRolling] = (0,react.useState)(false);
  const [bet, setBet] = (0,react.useState)(null); // 'big 大' 或 'small 小'
  const [result, setResult] = (0,react.useState)(null); // 结果
  const [diceValue, setDiceValue] = (0,react.useState)(null); // 点数

  // 骰子滚动动画引用
  const diceRef = (0,react.useRef)(null);

  // 压大压小处理
  const handleBet = type => {
    if (isRolling) return;
    setBet(type);
    setResult(null);
  };

  // 骰子结果
  const startDiceRolling = diceOutcome => {
    setIsRolling(true);
    setResult(null);

    // 骰子滚动动画
    if (diceRef.current) {
      diceRef.current.classList.add('rolling');
    }

    // 模拟骰子滚动效果
    let rollCount = 0;
    const maxRolls = 15;
    const rollInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setCurrentDice(diceImages[randomIndex]);
      rollCount++;
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);

        // 确定最终点数
        // const finalValue = Math.floor(Math.random() * 6) + 1;
        const finalValue = diceOutcome;
        setDiceValue(finalValue);
        setCurrentDice(diceImages[finalValue - 1]);

        // 停止动画
        setTimeout(() => {
          setIsRolling(false);
          if (diceRef.current) {
            diceRef.current.classList.remove('rolling');
          }

          // 判断胜负
          const isBig = finalValue >= 4;
          const isWin = bet === 'big' && isBig || bet === 'small' && !isBig;
          setResult(isWin ? 'win' : 'lose');

          // 创建新的历史记录项
          const newRoll = {
            value: finalValue,
            bet,
            result: isWin ? 'win' : 'lose',
            timestamp: new Date().getTime()
          };

          // 添加到历史记录
          if (onRollComplete) {
            onRollComplete(newRoll);
          }
          if (isWin) {
            messageApi.open({
              type: 'success',
              content: t('Congratulations, you hit the jackpot')
            });
          } else {
            messageApi.open({
              type: 'error',
              content: t("Unfortunately, you didn't make it")
            });
          }
          updateRollCall(); // 合约结果回调
        }, 300);
      }
    }, 100);
  };

  // 合约查询骰子结果
  const contractDiceRolling = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        const getUserLength = await contract.methods.getUserRecordsLength(address).call();
        const userRecords = await contract.methods.userRecords(address, getUserLength - 1).call();
        if (userRecords.diceOutcome) {
          // 骰子结果
          startDiceRolling(userRecords.diceOutcome);
        }
      } else {}
    } catch (error) {
      console.log('balance contract error===>', error);
    }
  };

  // 合约交互下注
  const handleContractBet = async () => {
    var _chain$id2;
    let value = bet === "big" ? 1 : 0;
    const addressUint256 = addressAndTimestampToUint256(address);
    setIsBetLoading(true);
    const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
    let gas = await web3.eth.getGasPrice();
    await contract.methods.rollDice(value, addressUint256).send({
      from: address,
      gasPrice: gas,
      value: feeNumber || 50000000000000
    }, (err, result) => {
      if (err) {
        setIsBetLoading(false);
        console.log('rollDice err===>', err);
      } else {
        console.log('rollDice result===>', result);
      }
    });
    setIsBetLoading(false);
    contractDiceRolling(); // 合约查询骰子结果
  };

  // 开始掷骰子
  const startRolling = () => {
    if (!bet || isRolling) {
      messageApi.open({
        type: 'error',
        content: t('Please select Big or Small first.')
      });
      return;
    }
    if (Number(tokenNumber) > Number(tokenBalance)) {
      messageApi.open({
        type: 'warning',
        content: t('Insufficient balance')
      });
      return;
    }

    // 合约交互下注
    handleContractBet();
  };

  // 授权
  const hadnleApprove = async () => {
    setIsApproveLoading(true);
    if (tokenContract) {
      var _chain$id3;
      const contract = new web3.eth.Contract(abiErc20, tokenContract);

      // 获取gas费
      let gas = await web3.eth.getGasPrice();
      const amount = "1000000000000000000000000000";
      const approveAmount = web3.utils.toWei(amount.toString(), 'ether');
      await contract.methods.approve(addressDiceBetContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56], approveAmount.toString()).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          setIsApproveLoading(false);
          console.log('Approve err===>', err);
        } else {
          console.log('Approve result===>', result);
        }
      });
      setIsApproveLoading(false);
      updateAllowance(); // 查询授权
    }
  };
  return /*#__PURE__*/react.createElement(dice_diceGame_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "dice-section"
  }, /*#__PURE__*/react.createElement("div", {
    ref: diceRef,
    className: `dice ${isRolling ? 'rolling' : ''}`
  }, /*#__PURE__*/react.createElement("img", {
    src: currentDice,
    alt: "\u9AB0\u5B50"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "dice-quan"
  }, /*#__PURE__*/react.createElement("img", {
    src: quanbg_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "bet-buttons"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bet-btn-big"
  }, /*#__PURE__*/react.createElement("button", {
    className: `bet-btn bet-button-big ${bet === 'big' ? 'active' : ''}`,
    onClick: () => handleBet('big'),
    disabled: isRolling
  }, t('Big'))), tokenNumber && tokenSymbol && /*#__PURE__*/react.createElement("div", null, t('Bet'), " ", tokenNumber, tokenSymbol), /*#__PURE__*/react.createElement("div", {
    className: "bet-btn-small"
  }, /*#__PURE__*/react.createElement("button", {
    className: `bet-btn bet-button-small ${bet === 'small' ? 'active' : ''}`,
    onClick: () => handleBet('small'),
    disabled: isRolling
  }, t('Small')))), /*#__PURE__*/react.createElement("div", {
    className: "control_buttons"
  }, address ? Number(allApprove) < Number(tokenNumber) ? /*#__PURE__*/react.createElement("button", {
    onClick: () => hadnleApprove()
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("button", {
    onClick: startRolling,
    disabled: !bet || isRolling
  }, isRolling ? /*#__PURE__*/react.createElement("span", null, t('Rolling the dice'), /*#__PURE__*/react.createElement(Loader_Dots, null)) : /*#__PURE__*/react.createElement("span", null, !isBetLoading && /*#__PURE__*/react.createElement("span", null, t('Roll The Dice')), isBetLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Roll The Dice'))))) : /*#__PURE__*/react.createElement("button", {
    onClick: connectWallet
  }, t('Connect'))), /*#__PURE__*/react.createElement("div", {
    className: "token_balance"
  }, /*#__PURE__*/react.createElement("span", null, t('Balance'), ":"), address ? /*#__PURE__*/react.createElement("em", null, toFixedFloor(tokenBalance), " ", tokenSymbol) : /*#__PURE__*/react.createElement("em", null, "-")));
}
/* harmony default export */ const dice_diceGame = (diceGame_DiceGame);
;// ./src/pages/dice/record.jsx







function record_Record(_ref) {
  let {
    tokenSymbol,
    tokenDecimals,
    tokenNumber,
    loading,
    rollHistory
  } = _ref;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement("div", {
    className: "dc_record_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dc_record_title"
  }, t('Record')), /*#__PURE__*/react.createElement("div", {
    className: "dc_record_list dc_record_table"
  }, /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid1"
  }, t('Time')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid2"
  }, t('Wallet')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid3"
  }, t('Bet')), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid4"
  }, t('Reward'), tokenSymbol && /*#__PURE__*/react.createElement("i", null, "(", tokenSymbol, ")"))), /*#__PURE__*/react.createElement("div", {
    className: "dc_list_overflow"
  }, !loading ? /*#__PURE__*/react.createElement("div", null, rollHistory.length > 0 ? /*#__PURE__*/react.createElement("div", null, rollHistory.map((item, index) => /*#__PURE__*/react.createElement("div", {
    className: "dc_record_list",
    key: index
  }, /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid1"
  }, !_isMobile() ? formatTimestamp(item.timestamp * 1000) : formatTimestamp(item.timestamp * 1000, "MM-DD HH:mm")), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid2"
  }, item.player ? `${item.player.substring(0, 4)}...${item.player.substr(-2)}` : ''), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid3"
  }, item.diceOutcome > 3 ? /*#__PURE__*/react.createElement("i", null, item.isWin ? /*#__PURE__*/react.createElement("i", null, t('Big')) : /*#__PURE__*/react.createElement("i", null, t('Small'))) : /*#__PURE__*/react.createElement("i", null, item.isWin ? /*#__PURE__*/react.createElement("i", null, t('Small')) : /*#__PURE__*/react.createElement("i", null, t('Big')))), /*#__PURE__*/react.createElement("span", {
    className: "dc_record_wid4"
  }, item.isWin ? /*#__PURE__*/react.createElement("i", null, "+", toFixedFloor(new bignumber/* default */.A(item.payout.toString()).shiftedBy(-tokenDecimals || -18).toString())) : /*#__PURE__*/react.createElement("i", null, "-", tokenNumber))))) : /*#__PURE__*/react.createElement("div", {
    className: "dc_list_not"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "dc_list_not"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#9A9892"
      },
      spin: true
    })
  }))));
}
/* harmony default export */ const dice_record = (record_Record);
;// ./src/pages/dice/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */

















const dice_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	width: 832px;
	margin: 0 auto;

	.dc_conter {
		width: 832px;
		height: 664px;
		background: url(${dice_bg_namespaceObject}) no-repeat #1F2330;
		background-size: 100%;
		border-radius: 7px;
		padding-top: 40px;
    	text-align: center;
	}


	@media (max-width: 750px) {
		width: 100%;

		.dc_conter {
			width: 100%;
    		height: 100%;
			padding-top: 50px;
			padding-bottom: 30px;
		}
	}
`;
function dice_Dice() {
  var _chain$id7, _chain$id8, _chain$id9, _chain$id0;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    address,
    isConnected
  } = useWallet_useGetOwnAddress();
  const connectWallet = useWallet_useConnectWallet();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const [poolBalance, setPoolBalance] = (0,react.useState)("0");
  const [prevAssets, setPrevAssets] = (0,react.useState)(poolBalance);
  const [tokenSymbol, setTokenSymbol] = (0,react.useState)("");
  const [tokenDecimals, setTokenDecimals] = (0,react.useState)("");
  const [tokenContract, setTokenContract] = (0,react.useState)("");
  const [tokenBalance, setTokenBalance] = (0,react.useState)("0.0000");
  const [allApprove, setAllApprove] = (0,react.useState)("1000");
  const [tokenNumber, setTokenNumber] = (0,react.useState)(""); // 下注需要扣除Token数量
  const [feeNumber, setFeeNumber] = (0,react.useState)(""); // 下注需要BNB手续费数量
  const [loading, setLoading] = (0,react.useState)(true);
  const [rollHistory, setRollHistory] = (0,react.useState)([]);
  const [ruleShow, setRuleShow] = (0,react.useState)(false);

  // 查询余额
  const handleBalance = async () => {
    try {
      const contract = new web3.eth.Contract(abiErc20, tokenContract);
      if (address && contract) {
        const balance = await contract.methods.balanceOf(address).call();
        const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setTokenBalance(balanceBig);
        // console.log("balanceBig===>", balanceBig)
      } else {
        setTokenBalance("0");
      }
    } catch (error) {
      console.log('balance contract error===>', error);
      setTokenBalance("0");
    }
  };

  // 查询授权
  const handleAllowance = async () => {
    try {
      const contract = new web3.eth.Contract(abiErc20, tokenContract);
      if (address && contract) {
        var _chain$id;
        let allowance = await contract.methods.allowance(address, addressDiceBetContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]).call();
        const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setAllApprove(allowanceBig);
        // console.log("allowanceBig===>", allowanceBig)
      } else {
        setAllApprove("0");
      }
    } catch (error) {
      console.log('contract error===>', error);
      setAllApprove("0");
    }
  };

  // 查询下注Token信息、奖金池余额
  const handleTokenData = async () => {
    try {
      var _chain$id2;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
      if (address && contract) {
        let token = await contract.methods.token().call();
        if (token) {
          var _chain$id3;
          const tokenContract = new web3.eth.Contract(abiErc20, token);
          let symbol = await tokenContract.methods.symbol().call();
          let decimals = await tokenContract.methods.decimals().call();
          setTokenSymbol(symbol);
          setTokenDecimals(decimals);
          setTokenContract(token);

          // 奖金池余额
          const balance = await tokenContract.methods.balanceOf(addressDiceBetContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56]).call();
          const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-tokenDecimals || -18).toString();
          setPoolBalance(balanceBig);
        }
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询下注需要扣除Token数量、扣除BNB手续费数量
  const handleTokenNumber = async () => {
    try {
      var _chain$id4;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id4 = chain == null ? void 0 : chain.id) != null ? _chain$id4 : 56]);
      if (address && contract) {
        // 下注需要扣除Token数量
        let betAmount = await contract.methods.betAmount().call();
        const betAmountBig = new bignumber/* default */.A(betAmount.toString()).shiftedBy(-tokenDecimals || -18).toString();
        setTokenNumber(betAmountBig);

        // 扣除BNB手续费数量
        let fee = await contract.methods.ROLL_FEE().call();
        setFeeNumber(fee);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询记录
  const handleListRecord = async () => {
    try {
      var _chain$id5;
      const contract = new web3.eth.Contract(abiDiceBet, addressDiceBetContract[(_chain$id5 = chain == null ? void 0 : chain.id) != null ? _chain$id5 : 56]);
      if (address && contract) {
        let getRecords30Last = await contract.methods.getRecords30Last().call();
        const reversedRecords = [...getRecords30Last].reverse();
        // console.log('reversedRecords===>', reversedRecords)
        setRollHistory(reversedRecords);
        setLoading(false);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    if (address) {
      handleTokenData(); // 查询下注Token信息、奖金池余额
      handleListRecord(); // 查询记录
    }
    if (address && tokenContract && tokenDecimals) {
      handleBalance(); // 查询余额
      handleAllowance(); // 查询授权
      handleTokenNumber(); // 查询下注需要扣除Token数量、扣除BNB手续费数量
    }
  }, [address, tokenContract, tokenDecimals]);

  // 合约结果回调
  const updateRollCall = () => {
    handleTokenData(); // 查询下注Token信息、奖金池余额
    handleBalance(); // 查询余额
    handleAllowance(); // 查询授权
  };

  // 更新历史记录的回调函数
  const updateRollHistory = newRoll => {
    // setRollHistory(prev => [
    // 	newRoll,
    // 	...prev.slice(0, 9) // 只保留最近10条记录
    // ]);
    handleListRecord(); // 查询记录
  };
  const handleCopy = () => {
    var _chain$id6;
    if (copy_to_clipboard_default()(addressDiceFactoryContract[(_chain$id6 = chain == null ? void 0 : chain.id) != null ? _chain$id6 : 56])) {
      messageApi.open({
        type: 'success',
        content: t('Copy successful')
      });
    }
  };
  (0,react.useEffect)(() => {
    // 当 myAssets 改变时更新上一次的值
    setPrevAssets(prev => prev !== poolBalance ? prev : prevAssets);
  }, [poolBalance]);

  // console.log("abiDiceFactory===>", abiDiceFactory)
  // console.log("abiDiceBet===>", abiDiceBet)

  return /*#__PURE__*/react.createElement(dice_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "dc_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dc_pool"
  }, /*#__PURE__*/react.createElement("em", null, t('Prize Pool')), poolBalance !== "0" ? /*#__PURE__*/react.createElement(build/* default */.Ay, {
    start: prevAssets,
    end: poolBalance,
    duration: 2.0,
    separator: ",",
    decimals: 2,
    decimal: ".",
    prefix: "",
    preserveValue: true
  }) : /*#__PURE__*/react.createElement("span", null, "--"), /*#__PURE__*/react.createElement("i", null, tokenSymbol)), /*#__PURE__*/react.createElement("div", {
    className: "dc_rule",
    onClick: () => {
      setRuleShow(!ruleShow);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: ruls_ico_namespaceObject,
    alt: ""
  }), t('Rules'), "."), ruleShow && /*#__PURE__*/react.createElement("div", {
    className: "dc_rule_conter"
  }, /*#__PURE__*/react.createElement("span", null, t('Rules')), /*#__PURE__*/react.createElement("span", null, t('1. Players can freely create game pools.')), /*#__PURE__*/react.createElement("span", null, t('2. The game is automatically executed by smart contracts to ensure fairness.')), /*#__PURE__*/react.createElement("span", null, t('3. The betting amount for each game is fixed.'))), /*#__PURE__*/react.createElement("div", {
    className: "dc_contract"
  }, /*#__PURE__*/react.createElement("span", null, t('Contract'), ":"), !_isMobile() ? /*#__PURE__*/react.createElement("em", null, addressDiceBetContract[(_chain$id7 = chain == null ? void 0 : chain.id) != null ? _chain$id7 : 56]) : /*#__PURE__*/react.createElement("em", {
    onClick: handleCopy
  }, addressDiceBetContract[(_chain$id8 = chain == null ? void 0 : chain.id) != null ? _chain$id8 : 56] ? `${addressDiceBetContract[(_chain$id9 = chain == null ? void 0 : chain.id) != null ? _chain$id9 : 56].substring(0, 6)}...${addressDiceBetContract[(_chain$id0 = chain == null ? void 0 : chain.id) != null ? _chain$id0 : 56].substr(-6)}` : '')), /*#__PURE__*/react.createElement(dice_diceGame, {
    tokenSymbol: tokenSymbol,
    tokenContract: tokenContract,
    tokenBalance: tokenBalance,
    allApprove: allApprove,
    tokenNumber: tokenNumber,
    feeNumber: feeNumber,
    onRollComplete: updateRollHistory,
    updateAllowance: handleAllowance,
    updateRollCall: updateRollCall
  })), /*#__PURE__*/react.createElement(dice_record, {
    tokenSymbol: tokenSymbol,
    tokenDecimals: tokenDecimals,
    tokenNumber: tokenNumber,
    loading: loading,
    rollHistory: rollHistory
  }));
}
/* harmony default export */ const dice = (dice_Dice);
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
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/dice",
    element: /*#__PURE__*/react.createElement(dice, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  }))))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(7566);
// EXTERNAL MODULE: ./src/assets/css/dice.css
var css_dice = __webpack_require__(920);
;// ./src/index.jsx






if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n);
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 2038:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Home":"Home","Select Language":"Select Language","Prize Pool":"Prize Pool","Rules":"Rules","Contract":"Contract","Big":"Big","Small":"Small","Bet":"Bet","Record":"Record","Time":"Time","Wallet":"Wallet","Reward":"Reward","No more available at the moment~":"No more available at the moment~","Please select Big or Small first.":"Please select Big or Small first.","Rolling the dice":"Rolling the dice","No data available":"No data available~","Balance":"Balance","Copy successful":"Copy successful","Approve":"Approve","1. Players can freely create game pools.":"1. Players can freely create game pools.","2. The game is automatically executed by smart contracts to ensure fairness.":"2. The game is automatically executed by smart contracts to ensure fairness.","3. The betting amount for each game is fixed.":"3. The betting amount for each game is fixed.","Congratulations, you hit the jackpot":"Congratulations, you hit the jackpot","Unfortunately, you didn\'t make it":"Unfortunately, you didn\'t make it","Insufficient balance":"Insufficient balance","Roll The Dice":"Roll The Dice","":""}');

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Home":"首页","Select Language":"选择语言","Prize Pool":"奖金池","Rules":"规则","Contract":"合约地址","Big":"大","Small":"小","Bet":"下注","Record":"记录","Time":"时间","Wallet":"钱包地址","Reward":"奖励","No more available at the moment~":"暂无更多~","Please select Big or Small first.":"请先选择压大压小","Rolling the dice":"掷骰中","No data available":"暂无数据~","Balance":"余额","Copy successful":"复制成功","Approve":"授权","1. Players can freely create game pools.":"1. 玩家可以自由创建游戏池。","2. The game is automatically executed by smart contracts to ensure fairness.":"2. 游戏由智能合约自动执行，确保公平。","3. The betting amount for each game is fixed.":"3. 每局游戏下注金额固定。","Congratulations, you hit the jackpot":"恭喜您，压中了","Unfortunately, you didn\'t make it":"很遗憾，您没有压中","Insufficient balance":"余额不足","Roll The Dice":"摇骰子","":""}');

/***/ }),

/***/ 7566:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7790:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8380:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"連接錢包","Home":"首頁","Select Language":"選擇語言","Prize Pool":"獎金池","Rules":"規則","Contract":"合約地址","Big":"大","Small":"小","Bet":"下注","Record":"記錄","Time":"時間","Wallet":"錢包地址","Reward":"獎勵","No more available at the moment~":"暫無更多~","Please select Big or Small first.":"請先選擇壓大壓小","Rolling the dice":"擲骰中","No data available":"暫無數據~","Balance":"餘額","Copy successful":"複製成功","Approve":"授权","1. Players can freely create game pools.":"1. 玩家可以自由創建遊戲池。","2. The game is automatically executed by smart contracts to ensure fairness.":"2. 遊戲由智慧合約自動執行，確保公平。","3. The betting amount for each game is fixed.":"3. 每局遊戲下注金額固定。","Congratulations, you hit the jackpot":"恭喜您，壓中了","Unfortunately, you didn\'t make it":"很遺憾，您沒有壓中","Insufficient balance":"餘額不足","Roll The Dice":"搖骰子","":""}');

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
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunktoken"] = self["webpackChunktoken"] || [];
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [354], () => (__webpack_require__(1126)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;