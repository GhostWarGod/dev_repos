/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1281:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1903:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2038:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - Your Fun Builds Your Fortune","Connect":"Connect","Home":"Home","Arena":"Arena","Marketplace":"Marketplace","Community":"Community","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"Clubs","Governance":"Governance","Farm":"Farm","IGO":"IGO","Lottery":"Lottery","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"Crypto Arena","Your Fun Builds Your Fortune":"Your Fun Builds Your Fortune","Your Fun Builds Your":"Your Fun Builds Your","Fortune":"Fortune","Your Fun Builds":"Your Fun Builds","Your Fortune":"Your Fortune","The world\'s first casual competitive":"The world\'s first casual competitive","Make every leisure moment create value":"Make every leisure moment create value","Relax first":"Relax first","Fair competition":"Fair competition","Selected a variety of easy and casual games":"Selected a variety of easy and casual games","Quick match, quick battle start":"Quick match, quick battle start","A balancing mechanism based on skills rather than krypton gold":"A balancing mechanism based on skills rather than krypton gold","Charm Rankings Combine Game Performance and Leisure Index":"Charm Rankings Combine Game Performance and Leisure Index","Earnings":"Earnings","&":"&","Achievements":"Achievements","Earnings & Achievements":"Earnings & Achievements","Cross-game asset interoperability system":"Cross-game asset interoperability system","Real Earnings, Withdraw Anytime":"Real Earnings, Withdraw Anytime","Massive Reward Pool, Surprises Anytime":"Massive Reward Pool, Surprises Anytime","On-Chain Records of Your Gaming Highlights":"On-Chain Records of Your Gaming Highlights","Popular Games":"Popular Games","Decentralized":"Decentralized","Operation":"Operation","Decentralized operation":"Decentralized operation","Club-based operation model":"Club-based operation model","Low threshold to support project parties to enter":"Low threshold to support project parties to enter","Custom":"Custom","Games":"Games","Custom Games":"Custom Games","Community enjoys the greatest benefits of the platform":"Community enjoys the greatest benefits of the platform","Partner":"Partner","Join Now":"Join Now","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points","Support":"Support","Whitepaper":"Document","Projects":"Projects","Advertising":"Advertising","Developer":"Developer","Contact":"Contact","Customer Service":"Customer Service","FAQs":"FAQs","Suggestions & Feedback":"Suggestions & Feedback","Platform":"Platform","Terms of Service":"Terms of Service","Privacy Policy":"Privacy Policy","Career":"Career","App Download":"Download","Follow us":"Follow us","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"The World\'s First Blockchain-Based Casual Competitive Gaming Platform","Your Fun first":"Your Fun first","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!","Please install a digital wallet extension or use a crypto wallet app.":"Please install a digital wallet extension or use a crypto wallet app.","More":"More","Log on":"Log on","Language":"Language","Signature login failed, please refresh the page and try again":"Signature login failed, please refresh the page and try again","The user declined to sign, login failed.":"The user declined to sign, login failed.","Diamand Swap":"Diamand Swap","Market":"Market","My Ads":"My Ads","Pending":"Pending","History":"History","Your secure crypto wallet to explore blockchain":"Your secure crypto wallet to explore blockchain","Faster, better, stronger than your average crypto exchange":"Faster, better, stronger than your average crypto exchange","USERS TRUST US":"USERS TRUST US","True crypto ownership. Powerful Web3 experiences":"True crypto ownership. Powerful Web3 experiences","imToken — A secure, reliable, and easy-to-use digital wallet trusted by over 10 million users.":"imToken — A secure, reliable, and easy-to-use digital wallet trusted by over 10 million users.","Behind Bitget is a group of early adopters who believe in a blockchain-based future.":"Behind Bitget is a group of early adopters who believe in a blockchain-based future.","The Leading Crypto Wallet Platform, Blockchain Wallet":"The Leading Crypto Wallet Platform, Blockchain Wallet","Trusted by over 10,000,000 users worldwide":"Trusted by over 10,000,000 users worldwide","Bitpie – A Global Leader in Multi-Chain Wallets | Bitpie":"Bitpie – A Global Leader in Multi-Chain Wallets | Bitpie","The app supports all popular features, including a Web3 wallet, community functions, and more — greatly expanding your social circle and information network":"The app supports all popular features, including a Web3 wallet","Club":"Club","Governances":"Governance","":""}');

/***/ }),

/***/ 3234:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3859:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4394:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D4: () => (/* binding */ decode),
/* harmony export */   lF: () => (/* binding */ encode),
/* harmony export */   tu: () => (/* binding */ signArray)
/* harmony export */ });
/* unused harmony export decodeCharCode */
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

/***/ 5144:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 乐趣铸就财富","Connect":"连接钱包","Home":"首页","Arena":"竞技场","Marketplace":"市场","Community":"社区","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱乐部","Governance":"社区治理","Farm":"农场","IGO":"IGO","Lottery":"抽奖","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首个休闲竞技区块链游戏平台","Your Fun Builds Your Fortune":"你的乐趣成就你的财富","Your Fun Builds Your":"你的乐趣成就你的","Fortune":"财富","Your Fun Builds":"你的乐趣成就","Your Fortune":"你的财富","The world\'s first casual competitive":"世界上第一个休闲竞技","Make every leisure moment create value":"让每一个休闲时刻都创造价值","Relax first":"休闲优先","Fair competition":"公平竞技","Selected a variety of easy and casual games":"精选多款轻松休闲游戏","Quick match, quick battle start":"快速匹配，快速启动战斗","A balancing mechanism based on skills rather than krypton gold":"基于技能而非氪金的平衡机制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜结合游戏表现和休闲指数","Earnings":"收益","&":"与","Achievements":"成就","Earnings & Achievements":"收益与成就","Cross-game asset interoperability system":"跨游戏资产互通系统","Real Earnings, Withdraw Anytime":"真实收益，随时提取","Massive Reward Pool, Surprises Anytime":"超高奖励池，惊喜随时到来","On-Chain Records of Your Gaming Highlights":"链上记录您的游戏高光时刻","Popular Games":"流行游戏","Decentralized":"去中心化","Operation":"运营","Decentralized operation":"去中心化运营","Club-based operation model":"以俱乐部为主的运营模式","Low threshold to support project parties to enter":"低门槛支持项目方入驻","Custom":"自定义","Games":"游戏","Custom Games":"自定义游戏","Community enjoys the greatest benefits of the platform":"社区享有平台最大的收益","Partner":"合作伙伴","Join Now":"现在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我们相信最好的收益来自于真正的游戏乐趣。连接钱包，开始您的轻松创收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用户注册即送‘休闲新手礼包’，包含：免费的小蛇 + 游戏积分","Support":"支持","Whitepaper":"文档","Projects":"项目","Advertising":"广告","Developer":"开发者","Contact":"联系","Customer Service":"客户服务","FAQs":"常见问题","Suggestions & Feedback":"建议与反馈","Platform":"平台","Terms of Service":"服务条款","Privacy Policy":"隐私协议","Career":"工作机会","App Download":"下载","Follow us":"关注我们","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首个区块链休闲竞技游戏平台","Your Fun first":"乐趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"实时贪吃蛇大作战，吞噬对手，赚取加密奖励！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸弹人风暴：组队爆破！你的炸弹，就是最好的投资！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方块战争：消除赢积分，连击夺NFT，你的每个操作都值钱！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像素鸟生死竞速：全球实时排行榜，每秒链上结算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大乱斗：消除赚糖币，连击抢对手糖果，你的甜蜜就是你的财富！","Please install a digital wallet extension or use a crypto wallet app.":"请安装数字钱包插件或者使用加密钱包App","More":"更多","Log on":"登录","Language":"语言","Signature login failed, please refresh the page and try again":"签名登录失败，请刷新页面重试","The user declined to sign, login failed.":"用户拒绝签名，登录失败","Diamand Swap":"钻石交易","Market":"市场","My Ads":"我的广告","Pending":"进行中","History":"交易记录","Your secure crypto wallet to explore blockchain":"探索区块链的安全加密钱包","Faster, better, stronger than your average crypto exchange":"比普通加密货币交易所更快、更好、更强","USERS TRUST US":"用户信任我们","True crypto ownership. Powerful Web3 experiences":"真正的加密货币。强大的Web3体验","imToken — A secure, reliable, and easy-to-use digital wallet trusted by over 10 million users.":"imToken——一个安全、可靠、易于使用的数字钱包，受到1000多万用户的信任。","Behind Bitget is a group of early adopters who believe in a blockchain-based future.":"Bitget背后是一群相信区块链未来的早期采用者。","The Leading Crypto Wallet Platform, Blockchain Wallet":"领先的加密货币钱包平台，区块链钱包","Trusted by over 10,000,000 users worldwide":"受到全球1000多万用户的信赖","Bitpie – A Global Leader in Multi-Chain Wallets | Bitpie":"比特派——多链钱包的全球领导者|比特派","The app supports all popular features, including a Web3 wallet, community functions, and more — greatly expanding your social circle and information network":"APP内支持所有热门功能","Club":"俱乐部","Governances":"治理","":""}');

/***/ }),

/***/ 6443:
/***/ (() => {

/* (ignored) */

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
module.exports = /*#__PURE__*/JSON.parse('{"Crypto Arena - Your Fun Builds Your Fortune":"Crypto Arena - 樂趣鑄就財富","Connect":"連接錢包","Home":"首頁","Arena":"競技場","Marketplace":"市場","Community":"社區","DeFi":"DeFi","CRYPTOSNAKE":"CRYPTOSNAKE","CRYPTOBOMBMAN":"CRYPTOBOMBMAN","Clubs":"俱樂部","Governance":"社區治理","Farm":"農場","IGO":"IGO","Lottery":"抽獎","POPULAR":"POPULAR","3RD PARTY":"3RD PARTY","Crypto Arena":"全球首個休閒競技區塊鏈遊戲平台","Your Fun Builds Your Fortune":"你的樂趣成就你的財富","Your Fun Builds Your":"你的樂趣成就你的","Fortune":"財富","Your Fun Builds":"你的樂趣成就","Your Fortune":"你的財富","The world\'s first casual competitive":"世界上第一個休閒競技","Make every leisure moment create value":"讓每一個休閒時刻都創造價值","Relax first":"休閒優先","Fair competition":"公平競技","Selected a variety of easy and casual games":"精選多款輕鬆休閒遊戲","Quick match, quick battle start":"快速匹配，快速啟動戰鬥","A balancing mechanism based on skills rather than krypton gold":"基於技能而非氪金的平衡機制","Charm Rankings Combine Game Performance and Leisure Index":"魅力排行榜結合遊戲表現和休閒指數","Earnings":"收益","&":"與","Achievements":"成就","Earnings & Achievements":"收益與成就","Cross-game asset interoperability system":"跨遊戲資產互通系統","Real Earnings, Withdraw Anytime":"真實收益，隨時提取","Massive Reward Pool, Surprises Anytime":"超高獎勵池，驚喜隨時到來","On-Chain Records of Your Gaming Highlights":"鏈上記錄您的遊戲高光時刻","Popular Games":"流行遊戲","Decentralized":"去中心化","Operation":"運營","Decentralized operation":"去中心化運營","Club-based operation model":"以俱樂部為主的運營模式","Low threshold to support project parties to enter":"低門檻支持項目方入駐","Custom":"自定義","Games":"遊戲","Custom Games":"自定義遊戲","Community enjoys the greatest benefits of the platform":"社區享有平台最大的收益","Partner":"合作夥伴","Join Now":"現在就加入","At CryptoArena, we believe the best earnings come from real gaming fun. Connect your wallet and start your easy income journey!":"在Crypto Arena，我們相信最好的收益來自於真正的遊戲樂趣。連接錢包，開始您的輕鬆創收之旅！","New users will receive a \'Casual Newbie Gift Pack\' when they register, including: free little snake + game points":"新用戶註冊即送『休閒新手禮包』，包含：免費的小蛇 + 遊戲積分","Support":"支持","Whitepaper":"檔案","Projects":"項目","Advertising":"廣告","Developer":"開發者","Contact":"聯繫","Customer Service":"客戶服務","FAQs":"常見問題","Suggestions & Feedback":"建議與反饋","Platform":"平台","Terms of Service":"服務條款","Privacy Policy":"隱私協議","Career":"工作機會","App Download":"下載","Follow us":"關注我們","The World\'s First Blockchain-Based Casual Competitive Gaming Platform":"全球首個區塊鏈休閒競技遊戲平台","Your Fun first":"樂趣至上","Snake Frenzy: Devour & Earn in Real-Time Crypto Battles!":"實时貪吃蛇大作戰，吞噬對手，賺取加密獎勵！","Bomb Arena: Squad Detonation, Your Bombs Are the Best Investment!":"炸彈人風暴：組隊爆破！ 你的炸彈，就是最好的投資！","Blocktrix Battle: Clear Lines, Earn Crypto, and Steal NFTs with Epic Combos!":"方塊戰爭：消除贏積分，連擊奪NFT，你的每個操作都值錢！","Flappy Death Race: Real-Time Global Leaderboard with On-Chain Payouts! ":"像數鳥生死競速：全球實时排行榜，每秒鏈上結算！","Candy Clash: Swap to Earn, Combo to Steal, and Turn Sweet Moves into Crypto Wealth!":"糖果大亂鬥：消除賺糖幣，連擊搶對手糖果，你的甜蜜就是你的財富！","Please install a digital wallet extension or use a crypto wallet app.":"請安裝數字錢包挿件或者使用加密錢包App","More":"更多","Log on":"登录","Language":"語言","Signature login failed, please refresh the page and try again":"簽名登入失敗，請刷新頁面重試","The user declined to sign, login failed.":"用戶拒絕簽名，登录失敗","Diamand Swap":"钻石交易","Market":"市場","My Ads":"我的廣告","Pending":"進行中","History":"交易記錄","Your secure crypto wallet to explore blockchain":"探索區塊鏈的安全加密錢包","Faster, better, stronger than your average crypto exchange":"比普通加密貨幣交易所更快、更好、更强","USERS TRUST US":"用戶信任我們","True crypto ownership. Powerful Web3 experiences":"真正的加密貨幣。 强大的Web3體驗","imToken — A secure, reliable, and easy-to-use digital wallet trusted by over 10 million users.":"imToken——一個安全、可靠、易於使用的數字錢包，受到1000多萬用戶的信任。","Behind Bitget is a group of early adopters who believe in a blockchain-based future.":"Bitget背後是一群相信區塊鏈未來的早期採用者。","The Leading Crypto Wallet Platform, Blockchain Wallet":"領先的加密貨幣錢包平臺，區塊鏈錢包","Trusted by over 10,000,000 users worldwide":"受到全球1000多萬用戶的信賴","Bitpie – A Global Leader in Multi-Chain Wallets | Bitpie":"比特派——多鏈錢包的全球領導者|比特派","The app supports all popular features, including a Web3 wallet, community functions, and more — greatly expanding your social circle and information network":"APP內支持所有熱門功能","Club":"俱樂部","Governances":"治理","":""}');

/***/ }),

/***/ 8388:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8737:
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
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(3376);
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
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 78 modules
var message = __webpack_require__(530);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(7208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2837);
;// ./src/hook/useSessionChainId.ts

const sessionChainIdAtom = (0,esm/* atom */.eU)(0);
const useSessionChainId = () => {
  return useAtom(sessionChainIdAtom);
};
;// ./src/hook/useWallet.ts




// import { useRouter } from 'next/router'


function useConnectWallet() {
  const {
    connect
  } = (0,wagmi_dist/* useConnect */.eF)({
    connector: new chunk_2VZS2JHJ/* InjectedConnector */.s()
  });
  return connect;
}
function useGetOwnAddress() {
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
;// ./public/images/logo.jpg
const logo_namespaceObject = __webpack_require__.p + "122cf6d736e85460e696.jpg";
;// ./public/images/logo_m.png
const logo_m_namespaceObject = __webpack_require__.p + "b3de387cda97596538f9.png";
;// ./public/images/lanu_1.png
const lanu_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAgVJREFUSEu1lT9sT3EUxT9HIsKMlNG/YCJKIoSBSWkbm1gNLEIlujAxSEmkTCKMbC0aDEhIdFHF5m9smjYxk0g43pXva76+3q+/VNrv9t6977x7v+fec0SLY3spsEnSY9u9wLWUekzSkO29wBtJX5sgVL60vQQ4AxwHuoEpYBxYlHJ/AJ3AMuAecBU4J+lbjvUXsO01KXkDMCZpm+0RYH9RwENJ+2y/ALYCb6vqeyV9qPOmgRPoM2BlCp6oruIO8BlYUAAbWF11cgAYTLHobLek9/H8Bzi1/xKISuuzNlV6uQUNfam7T1n8HbAlrqUGvgD0ZwlTkjps30333IQ9Iqnb9kRF7IosYUBSv2wHKUNAkFafV5JO2b5VfJT/YLJq+5DtS1FlFvgOHPxnKlqN32zfR8U3ge3FhxeBpxXj99sAdgVhwOkibzSAv2STUMePpBEabQO8A1gP3CjyJgI4Bn5hETgMTAJP2gDvAZYDt4u8XwH8s2FO5wR43q7iOrCzaGUAiC38X/Kez+u4NS3Ia0l9toOUjhYEtl8Q23O/0pkIjQEbs+rWVdIZCzAbEQr57JwWoQQeWpzL5klgeAbZXJUEKpfNXbUmNwl9KFpUPi6ps4XQP5DUVQh9j6SPdcdN1rQYOJusqSdtYJM1hSeGu1wBzs9oTTn7yUw3S3pUmOlRScPtzPQ3LB7hChlMxbQAAAAASUVORK5CYII=";
;// ./public/images/lanu_2.png
const lanu_2_namespaceObject = "data:image/png;base64,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";
;// ./public/images/men_1.png
const men_1_namespaceObject = __webpack_require__.p + "d47b389fe0194545b6b5.png";
;// ./public/images/men_2.png
const men_2_namespaceObject = __webpack_require__.p + "35282b49950c9262ab87.png";
;// ./public/images/men_3.png
const men_3_namespaceObject = __webpack_require__.p + "f480013059022ace2cdf.png";
;// ./public/images/men_4.png
const men_4_namespaceObject = __webpack_require__.p + "78031ada006323747e2a.png";
;// ./public/images/men_5.png
const men_5_namespaceObject = __webpack_require__.p + "8cf80d01bbc51c8c1f14.png";
;// ./public/images/men_6.png
const men_6_namespaceObject = __webpack_require__.p + "fea7976c09d27e0489ae.png";
;// ./public/images/men_7.png
const men_7_namespaceObject = __webpack_require__.p + "b659a5a5c4733f319f17.png";
;// ./public/images/men_8.png
const men_8_namespaceObject = __webpack_require__.p + "2a5cdba46d9d2721a941.png";
;// ./public/images/jiantou_1.png
const jiantou_1_namespaceObject = "data:image/png;base64,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";
;// ./public/images/jiantou_2.png
const jiantou_2_namespaceObject = "data:image/png;base64,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";
;// ./public/images/logon.png
const logon_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABHCAYAAACK0uJFAAAHBklEQVR4nO3dW4ijZx3H8e97SN5JsnPodidbu9tl2y3IWilRV2tF9EIUQUEKomLF23hhvXJFUCqFQhV7o3fTW6GIrBcVXLwQr4pgt9udLZRC3R62ne7OZHZ2Dpkk8ybvQZ4nk+mckslMMuB2fx8YZjLzJps8mx//5/DmeZ258/QrAzwKfAH4FHASOA4UgQAoAA4w0fcjivx/WgJSYBVoAnNABZgB3gAuAa8DrX6evd/HMV8DysC3gZzeFHIX6BSKe9a/n9nlJTeAvwEvAP/q1SROeq206x8qU9PngD8AX9K7SqSnfwM/K5ZLl3c7aEfIKlPTHvAb4FeAq7YV6UsCPAs8UyyXks132AjZ8ovThFWywJ+BJ7Y/quO5+Mdy+JN5/KMjuPkMXt7HCXzcwGsfk3HBdfRfIne2JCVttXOShDFpGBHXI5J6i+h2g2i+QXSrThqnu73MC8CTxXKp2fnFxpgsrNpJiz9tD1j2gTFyZ+8le2oMx1OA5C7gOjjrhcOz37M7Ji9MwJrXl2m8uUB0o2qn/JLY/um7ZrKkMjX9o2K5ZFO4+b4/B77XuZEp5hn98klbuURkK1Nwgocm7Ff41gJrr31Iq5aQRPawHwJXgOfpdBcrU9MPrU9NjuA4FM7dR+Ezx9sT8iLSUzxfo3H5Q9udbC5GJJEtYGb28dPFcumdzsTGr03AHNdh/BunKXxWARPp2/rQzMxTBMcD3Pawyix3PW1+MIvRhfWFtvz410/b8ici/YturLD2+uxHxwcZ6m8tm59qwKSpZF81AcuXigqYyDCELfKPHGP9LKivmJA97o0FdhwmIsORmQwwuQIeMyE7a8ZgZh1MRIYjXmxQ+Jw5tZeHXSfrnQ7OqJsoMkxpvWWHX07GfdjNnjhy0vFVxUSGKW3FmFxlT4ye8jPFQkGtKzIAh65LXv5kftT1JoJA7StyOLyxbM53C5mM2ldkQF0qmTeadX13pJ/PbYpId937i+6I7/k6s15kQA7mlN9dmckPXzOLIkPQLWQZE7KspyYWGVj3HqEGZCLD0K2SZT2FTGRgdt6jeyXTgEzkkKmSiQwqNYVMYzKRQ5M2o547CShkIgNKqk2FTOTQJCnx0lrPiQ+FTGQA0VwVkkSVTOQwpHFC84PlnlUMhUzk4FrvLkIr3nP7RIVM5ACim1WiyuqeVQyFTGT/zD6LzfeWep6vuJlCJtInc6WX1tu3iBbX9rXDtkImsgczwRHNrRLNVu0GOfs9GVEhE9lNkpKsNu3+ifGtmg0a9D59qpv9h8z+46F9AslaZG+LfGwkCWkYt9/b6XDe232HLKk3bclMFtdIk6SPe4jcwfb4+Mp+7BmytJnQmlmyZfOjJ6B9QUT61TNkSTWk9c6CvXSnciVyMF1DFt+u03p/qX2BMyVM5MB2DVmyskbrg6X2DeVLZCA7QmYX3N5fXt9MTo0rMqgdIYturrRnDxUwkaHYErK0GZMsrx1owU1EdrclZMken/AUkf3bErK4FqqbKDJkW8dk9gNoSpnIMG0NmRadRYZua8gUMJGh2xoyVykTGbZt62QKmciwbesuKmQiw6Yxmchh2JQljclEDoGzKUu6PpnIIehcJjqNksRPwzhyAq9d0VTIRIbCGWlHKo3T2A9nqtdHzkycsb/RxIfIULhHAvswrZnqNb9+tXIxeHD8KdOHVMZEBufmMra7mCYptStzF/1ovv5S+N/Fp0Y+eVSVTGQI3Im8fZDw2iLRQuPvZuLj5dprc/XO5o0icnDePTmcrGs3Q61dnqubfPnFcimsTE1fqF2a/XFwoqDmFTkgbzTAHW2PxWqXZolXwr8Uy6VWZ53s2frVyvc9vxj49yloIvvljY9sBGzt7SXqVytrJlfmtpNeK9k/VKamf+l6znOFc8fxJ/NqZJE+OBkXbyK3sS4WvrvMyj/fM5MevyiWS79n2xkfv0vi9IvVV+a+U3h0kpEHR+2mpiKyk+O7OEeyuLlse305hdqVWWqvzpk99P8KPN+500bIglHSsMoPSNMLtauVbzVvrnLksfvxRjPty8VEKWma2A92itxVzPKW69qqReDhZH0bso5Wpc7qyzO05s08By8BTxbLpY2gbHQXl1+cbpe7qg2e6UueNw+ffWCM3Nl7yZ4aw/E0xS9C+0wOmteXaby5QHOman5lpud/CzxdLJfizY20I2QdYZXHgT8C5+yBnot/LGfHa/7REdx8Bjfv4wY+jkn3ev9UJxnLHS9J7Sa/aZraC64kYURSN18totsNovkG0a365uHUq8BPi+XSf3Z76Rsh66YyNf1N4CeA+R7oHSRihcBF4IViufSPXk3izJ3vu8VygEnk54FHgPuBTwBHgYn1Y8Z1Zr98DJiun9mr3jAXhVgAZoEbwBvAK4Dp+plp+t6A/wFC0Dn93uapewAAAABJRU5ErkJggg==";
;// ./public/images/profile.jpg
const profile_namespaceObject = "data:image/jpeg;base64,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";
;// ./src/components/header/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */























const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.header_container {
		display: flex;
		transition: all 0.3s ease 0s;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		width: 95%;
		min-width: 1200px;
		height: 80px;
		z-index: 99;
		padding: 30px 30px 38px;
		flex-direction: row;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		align-items: center;
	}
	.header_left {
		display: flex;
		flex-direction: row;
		-webkit-box-align: center;
		align-items: center;
		gap: 80px;
		a {
			color: #fff;
		}
	}
	.header_logo {
		display: flex;
		flex-direction: column;
		img {
			width: 160px;
		}
	}
	.header_nav {
		display: flex;
		flex-direction: row;
		-webkit-box-align: center;
		align-items: center;
		gap: 55px;
		.on {
			color: #FBBD15 !important;
		}
	}
	.header_navLink {
		display: flex;
		padding: 8px;
		-webkit-box-align: center;
		align-items: center;
		gap: 6px;
		user-select: none;
		flex-direction: row;
		white-space: nowrap;
		font-size: 15px;
		color: #fff;
		text-shadow: 2px 0px 0px #25317A;
		font-weight: bold;
		&:hover {
			color: #ffb400;
		}
	}
	.header_gameLink {
		&:hover {
			color: #ffb400;
		}
		span {
			a {
				color: #616161;
			}
			&:hover {
				a {
					color: #fff;
				}
			}
		}
	}
	.header_more {
		display: flex;
		flex-direction: column;
		position: relative;
		cursor: pointer;
		span {
			display: flex;
			flex-direction: column;
			transition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;
		}
		svg {
			width: 10px;
			path {
				fill: rgb(240, 220, 192);
			}
		}
	}
	.header_more_down {
		display: flex;
		flex-direction: column;
		transition: transform 0.15s cubic-bezier(0.4, 0, 0, 1.02) 0s;
		transform: rotate(180deg);
	}
	.header_out {
		display: flex;
		flex-direction: column;
		background: rgb(199, 100, 61);
		box-shadow: rgb(114, 64, 81) 0px 8px;
		position: absolute;
		border-radius: 0px 0px 16px 16px;
		z-index: 2;
		top: 100%;
		left: 0px;
		padding: 16px;
		gap: 24px;
	}
	.header-right-flex {
		display: flex;
	}
	.header-right-one {
		display: flex;
		align-items: center;
		margin-left: 55px;
		img {
			height: 22px;
		}
	}
	.header-wallet {
		width: 152px;
		height: 35px;
		line-height: 35px;
		background: #FBBD15;
		border-radius: 6px;
		font-size: 14px;
		font-weight: bold;
		color: #631C1D;
		text-align: center;
		margin-left: 63px;
		cursor: pointer;
	}


	@media (max-width: 1600px) {
		.header_logo {
			img {
				width: 150px;
			}
		}
		.header_nav {
			gap: 30px;
		}
		.header-right-one {
			margin-left: 30px;
		}
		.header-wallet {
			margin-left: 50px;
		}
	}


	@media (max-width: 750px) {
		.mobile-wallet {
			background: url(${logon_namespaceObject}) no-repeat;
			background-size: 100%;
			width: 108px;
			height: 35px;
			line-height: 35px;
			text-align: center;
			color: #631C1D;
			font-size: 15px;
			font-weight: 500;
		}
		.mobile-address {
		    position: relative;
		    height: 35px;
			line-height: 35px;
			background: rgb(255, 255, 255, 0.1);
			border-radius: 18px;
			font-size: 12px;
			color: #D4DDEF;
			padding-left: 13px;
    		padding-right: 38px;
			img {
			    position: absolute;
				width: 35px;
				right: -5px;
			}
		}
	}
`;
function Header() {
  var _i18n$language, _i18n$language2, _i18n$language3, _i18n$language4, _i18n$language5, _i18n$language6;
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
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const location = (0,react_router_dist/* useLocation */.zy)();
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const hostname = window.location.hostname;
  const domain = hostname.split('.').slice(-2).join('.');
  const gameurl = "https://snake." + domain;
  const [menuMShow, setMenuMShow] = (0,react.useState)(false);
  const [moreShow, setMoreShow] = (0,react.useState)(false);
  const [moreDeFiShow, setMoreDeFiShow] = (0,react.useState)(false);
  const [moreLanuShow, setMoreLanuShow] = (0,react.useState)(false);
  const [gamesUrl, setGamesUrl] = (0,react.useState)(gameurl + "?lang=en");
  const [walletInstalled, setWalletInstalled] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setWalletInstalled(typeof window.ethereum !== 'undefined');
  }, []);
  const handMentShow = () => {
    setMenuMShow(!menuMShow);
    setMoreShow(false);
    setMoreDeFiShow(false);
    setMoreLanuShow(false);
  };
  const handMouseEnter = () => {
    setMoreShow(!moreShow);
    setMoreDeFiShow(false);
    setMoreLanuShow(false);
  };
  const handMouseDeFiEnter = () => {
    setMoreDeFiShow(!moreDeFiShow);
    setMoreShow(false);
    setMoreLanuShow(false);
  };
  const handMouseLanuEnter = () => {
    setMoreLanuShow(!moreLanuShow);
    setMoreShow(false);
    setMoreDeFiShow(false);
  };
  (0,react.useEffect)(() => {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setGamesUrl(gameurl + "?lang=zh-cn");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setGamesUrl(gameurl + "?lang=zh");
    } else {
      setGamesUrl(gameurl + "?lang=en");
    }
  }, [i18n.language]);
  const handGamesLink = () => {
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
  const handGamesMess = () => {
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
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: location.pathname === "/" ? "header_navLink on" : "header_navLink"
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
  }, /*#__PURE__*/react.createElement("em", null, t('POPULAR')), walletInstalled ? /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/cryptoSnake"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake", /*#__PURE__*/react.createElement("i", null, "HOT"))) : /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    onClick: handGamesMess
  }, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake", /*#__PURE__*/react.createElement("i", null, "HOT"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_2_namespaceObject,
    alt: ""
  }), "Crypto Tetris", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_3_namespaceObject,
    alt: ""
  }), "Crypto Bomberman", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_6_namespaceObject,
    alt: ""
  }), "Crypto Bird", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
  }, /*#__PURE__*/react.createElement("em", null, t('3RD PARTY')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_4_namespaceObject,
    alt: ""
  }), "Crypto Fishing", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_5_namespaceObject,
    alt: ""
  }), "Crypto Tank", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: men_8_namespaceObject,
    alt: ""
  }), "Crypto Mario World", /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))))))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_navLink"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement("div", {
    className: "langu_conter header_gameLink"
  }, t('Community'), /*#__PURE__*/react.createElement("img", {
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
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Club'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Governances'))))))), /*#__PURE__*/react.createElement("div", {
    className: location.pathname === "/diamondswap" ? "langu_conter header_gameLink on" : "langu_conter header_gameLink"
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
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/diamondswap"
  }, t('Diamand Swap'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Farm'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
    onClick: () => {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    }
  }, "\u7E41\u9AD4\u4E2D\u6587")))))), /*#__PURE__*/react.createElement("div", {
    className: "header-wallet"
  }, isConnected ? /*#__PURE__*/react.createElement("em", null, address ? `${address.substring(0, 6)}...${address.substr(-4)}` : '') : /*#__PURE__*/react.createElement("em", {
    onClick: () => connectWallet()
  }, t('Connect')))))), /*#__PURE__*/react.createElement("div", {
    className: !menuMShow ? "d-md-block d-lg-none" : "d-md-block d-lg-none m_menu_model-bg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mean_conter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "menu_logo"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_m_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "mobile-right"
  }, isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "mobile-address"
  }, address ? `${address.substring(0, 4)}...${address.substr(-4)}` : '', /*#__PURE__*/react.createElement("img", {
    src: profile_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("div", {
    className: "mobile-wallet",
    onClick: () => connectWallet()
  }, t("Connect")))), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_hides",
    onClick: handMentShow
  }), menuMShow && /*#__PURE__*/react.createElement("div", {
    className: "menu_nav"
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Home'))), /*#__PURE__*/react.createElement("span", {
    onClick: handMouseEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
  }, /*#__PURE__*/react.createElement("em", null, t('POPULAR')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    onClick: handGamesLink
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake"), /*#__PURE__*/react.createElement("i", null, "HOT"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_2_namespaceObject,
    alt: ""
  }), "Crypto Tetris"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_3_namespaceObject,
    alt: ""
  }), "Crypto Bomberman"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_6_namespaceObject,
    alt: ""
  }), "Crypto Bird"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
  }, /*#__PURE__*/react.createElement("em", null, t('3RD PARTY')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_4_namespaceObject,
    alt: ""
  }), "Crypto Fishing"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_5_namespaceObject,
    alt: ""
  }), "Crypto Tank"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_8_namespaceObject,
    alt: ""
  }), "Crypto Mario World"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))))))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Marketplace'))), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      setMenuMShow(!menuMShow);
    }
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Community'))), /*#__PURE__*/react.createElement("span", {
    onClick: handMouseDeFiEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Farm'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('IGO'))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, t('Lottery'))))))), /*#__PURE__*/react.createElement("span", {
    className: "menu_m_lan"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handMouseLanuEnter
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, null, /*#__PURE__*/react.createElement("img", {
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
    onClick: () => {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
      setMenuMShow(false);
    }
  }, "English"), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
      setMenuMShow(false);
    }
  }, "\u7B80\u4F53\u4E2D\u6587"), /*#__PURE__*/react.createElement("span", {
    onClick: () => {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
      setMenuMShow(false);
    }
  }, "\u7E41\u9AD4\u4E2D\u6587")))))), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", null, address ? `${address.substring(0, 6)}...${address.substr(-4)}` : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header-switch-m"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header-button chain-name chain-m"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: () => connectWallet()
  }, t('Connect Wallet')))))));
}
/* harmony default export */ const header = (Header);
;// ./src/hook/_isMobile.ts
function _isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
}
// EXTERNAL MODULE: ./src/pages/index/FullPageScroller.css
var FullPageScroller = __webpack_require__(3859);
;// ./src/pages/index/FullPageScroller.jsx
/* eslint-disable react-hooks/exhaustive-deps */



const FullPageScroller_FullPageScroller = _ref => {
  let {
    children
  } = _ref;
  const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
  const startY = (0,react.useRef)(0);
  const isThrottled = (0,react.useRef)(false);
  const containerRef = (0,react.useRef)(null);
  const pageCount = children.length;
  const goUp = () => {
    if (currentIndex < pageCount - 1) setCurrentIndex(i => i + 1);
  };
  const goDown = () => {
    if (currentIndex > 0) setCurrentIndex(i => i - 1);
  };
  const handleWheel = e => {
    if (isThrottled.current) return;
    isThrottled.current = true;
    e.deltaY > 0 ? goUp() : goDown();
    setTimeout(() => isThrottled.current = false, 1000);
  };
  const handleKey = e => {
    if (isThrottled.current) return;
    if (e.key === 'ArrowDown') {
      goUp();
    } else if (e.key === 'ArrowUp') {
      goDown();
    }
    isThrottled.current = true;
    setTimeout(() => isThrottled.current = false, 1000);
  };
  const handleTouchStart = e => {
    startY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = e => {
    const endY = e.changedTouches[0].clientY;
    const delta = endY - startY.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? goUp() : goDown();
    }
  };
  const goToNext = () => {
    if (currentIndex < pageCount - 1) setCurrentIndex(currentIndex + 1);
  };
  (0,react.useEffect)(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKey);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    return () => {
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
      transform: !_isMobile() ? pageCount !== currentIndex + 1 ? `translateY(-${currentIndex * 100}vh)` : `translateY(calc(-${(currentIndex - 1) * 100}vh - 360px))` : `translateY(-${currentIndex * 100}vh)`
    } // 判断是否是最后一屏菜单，是的话把最后一屏和倒数第二屏一起显示
  }, children.map((child, index) => /*#__PURE__*/react.createElement("div", {
    className: `fullpage-section ${index === currentIndex ? 'active' : 'on'}`,
    key: index
  }, child))), /*#__PURE__*/react.createElement("div", {
    className: "dots"
  }, children.map((_, index) => /*#__PURE__*/react.createElement("span", {
    key: index,
    className: `dot ${index === currentIndex ? 'active' : ''}`,
    onClick: () => setCurrentIndex(index)
  }))), currentIndex < pageCount - 1 && /*#__PURE__*/react.createElement("div", {
    className: "go-btn",
    onClick: goToNext
  }));
};
/* harmony default export */ const index_FullPageScroller = (FullPageScroller_FullPageScroller);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(5862);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 13 modules
var swiper_react = __webpack_require__(4417);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(7348);
;// ./public/images/home_banner1.jpg
const home_banner1_namespaceObject = __webpack_require__.p + "9a7bef7b33e6eb36b835.jpg";
;// ./public/images/home_banner2.jpg
const home_banner2_namespaceObject = __webpack_require__.p + "566d1c33d92e96b90958.jpg";
;// ./public/images/home_banner1_m.jpg
const home_banner1_m_namespaceObject = __webpack_require__.p + "21d228da75cb16e202b4.jpg";
;// ./public/images/home_banner2_m.jpg
const home_banner2_m_namespaceObject = __webpack_require__.p + "85e7cb3413867de59182.jpg";
;// ./public/images/comm1_1.png
const comm1_1_namespaceObject = __webpack_require__.p + "071ad54491e38aca6a8c.png";
;// ./public/images/comm1_2_m.png
const comm1_2_m_namespaceObject = "data:image/png;base64,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";
;// ./src/components/index/comm1.jsx













const comm1_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	height: 100%;

	.comm1_conters {
	    position: absolute;
		top: 50%;
		width: 100%;
		height: 440px;
		margin-top: -220px;
		text-align: center;
		z-index: 99;
		animation: upDown 2s linear infinite;
	}
	.comm1_tit1 {
		span {
			display: block;
			font-size: 56px;
			color: #FBBD15;
			font-family: "swissek";
			font-weight: bold;
			line-height: 78px;
		}
		em {
			display: block;
			font-size: 22px;
			font-family: "swissek";
			font-weight: bold;
		}
		img {
		    margin-top: 10px;
		}
	}
	.comm1_tit2 {
	    margin-top: 30px;
		span {
			display: block;
			font-size: 56px;
			font-family: "swissek";
			font-weight: bold;
			line-height: 52px;
			text-shadow: 0 0 5px rgb(255, 255, 255, 0.35);
		}
		em {
			display: block;
			font-size: 22px;
			font-family: "swissek";
			font-weight: bold;
			margin-top: 15px;
		}
	}


	@media (max-width: 1600px) {
		.comm1_conters {
			height: 400px;
			margin-top: -200px;
		}
		.comm1_tit1 {
			span {
				font-size: 32px;
				line-height: 50px;
			}
			em {
				font-size: 18px;
			}
			img {
			    margin-top: 20px;
   				margin-bottom: 20px;
				width: 500px;
			}
		}
		.comm1_tit2 {
		    margin-top: 10px;
			span {
				font-size: 28px;
				line-height: 40px;
			}
			em {
				font-size: 18px;
			}
		}
	}


	@media (max-width: 750px) {
		.comm1_conters {
			width: 86%;
        	left: 7%;
			margin-top: -220px;
		}
		.comm1_img {
			img {
				width: 80px;
			}
		}
		.comm1_tit1 {
			span {
				font-size: 28px;
				line-height: 30px;
    			margin-bottom: 20px;
			}
			em {
				font-size: 14px;
			}
			img {
			   	width: 80%;
			}
		}
		.comm1_tit2 {
			span {
				font-size: 28px;
				line-height: 30px;
			}
			em {
				font-size: 14px;
			}
		}
	}
`;
function Comm1() {
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
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, {
    className: "comm1_swiper"
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.RC, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    modules: [swiper_esm/* Autoplay */.Ij],
    pagination: {
      clickable: true
    }
  }, /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, null, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: home_banner1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: home_banner1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, null, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
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
;// ./public/images/comm1_1_m.png
const comm1_1_m_namespaceObject = __webpack_require__.p + "f9599d7753719bb9960b.png";
;// ./public/images/anniu.png
const anniu_namespaceObject = "data:image/png;base64,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";
;// ./src/components/index/comm1M.jsx












const comm1M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	min-height: 100vh;

	.comm1_conters {
	    position: absolute;
		top: 50%;
		width: 86%;
		height: 440px;
		left: 7%;
		margin-top: -260px;
		z-index: 99;
		animation: upDown 2s linear infinite;
	}
	.comm1_tit1 {
		span {
			display: block;
			font-size: 28px;
			color: #FBBD15;
			font-family: "swissek";
			font-weight: bold;
			line-height: 30px;
    		margin-bottom: 20px;
		}
		em {
			display: block;
			font-size: 13px;
			font-family: "swissek";
			font-weight: bold;
		}
		img {
			width: 80%;
		    margin: 30px 0;
		}
	}
	.comm1_tit2 {
		span {
			display: block;
			font-size: 25px;
			font-family: "swissek";
			font-weight: bold;
			line-height: 30px;
			text-shadow: 0 0 5px rgb(255, 255, 255, 0.35);
		}
		em {
			display: block;
			font-size: 14px;
			font-family: "swissek";
			font-weight: bold;
			margin-top: 15px;
		}
	}
	.comm1_img {
	    margin-bottom: 25px;
		img {
			width: 60px;
			margin-left: -10px;
		}
	}
	.comm1_wallet {
		background: url(${anniu_namespaceObject}) no-repeat;
		background-size: 100%;
		width: 228px;
		height: 51px;
		line-height: 51px;
		font-size: 14px;
		color: #631C1D;
		font-weight: bold;
		font-family: "swissek";
		text-align: center;
		margin-top: 50px;
	}
`;
function Comm1M() {
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
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  return /*#__PURE__*/react.createElement(comm1M_CustomStyle, {
    className: "comm1_swiper"
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.RC, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    modules: [swiper_esm/* Autoplay */.Ij],
    pagination: {
      clickable: true
    }
  }, /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, null, /*#__PURE__*/react.createElement("img", {
    src: home_banner1_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, null, /*#__PURE__*/react.createElement("img", {
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
  }, (i18n == null ? void 0 : i18n.language) === "en" ? /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds"), " ", /*#__PURE__*/react.createElement("br", null), " ", t("Your Fortune")) : /*#__PURE__*/react.createElement("span", null, t("Your Fun Builds Your Fortune")), /*#__PURE__*/react.createElement("em", null, t("Make every leisure moment create value")))));
}
/* harmony default export */ const comm1M = (Comm1M);
;// ./public/images/home_bg2.jpg
const home_bg2_namespaceObject = __webpack_require__.p + "cd39b79a0fc2ee7c9a69.jpg";
;// ./public/images/home_bg2_m.jpg
const home_bg2_m_namespaceObject = __webpack_require__.p + "a507c0c00adc93e9e616.jpg";
;// ./public/images/comm1_2.png
const comm1_2_namespaceObject = "data:image/png;base64,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";
;// ./public/images/comm2_1.png
const comm2_1_namespaceObject = __webpack_require__.p + "e578aa6158717a5359b9.png";
;// ./public/images/comm2_2.png
const comm2_2_namespaceObject = __webpack_require__.p + "84594f6acc2e18677dbf.png";
;// ./public/images/comm2_3.png
const comm2_3_namespaceObject = __webpack_require__.p + "03ff86d3912fe167ff9e.png";
;// ./public/images/comm2_4.png
const comm2_4_namespaceObject = __webpack_require__.p + "298ca61bdab91475a16a.png";
;// ./src/components/index/comm2.jsx












const comm2_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg2_namespaceObject}) top center no-repeat;
    background-size: cover;

	.comm2_tit {
		margin-top: 60px;
	}
	.comm2_xian {
		margin-top: 20px;
    	margin-bottom: 40px;
	}
	.comm2_list {
	    display: flex;
		gap: 25px;
		span {
			width: 339px;
    		height: 457px;
		}
		em {
		    display: block;
			text-align: center;
			font-size: 24px;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 30px;
			text-shadow: rgb(0, 0, 0, 0.26) 2px 0px 0px;
			margin: auto;
			padding-top: 300px;
			text-align: left;
			width: 80%;
		}
	}
	.comm2_bg1 {
		background: url(${comm2_1_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg2 {
		background: url(${comm2_2_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg3 {
		background: url(${comm2_3_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg4 {
		background: url(${comm2_4_namespaceObject}) center no-repeat;
    	background-size: cover;
	}


	@media (max-width: 1600px) {
		.comm2_xian {
			margin-top: 10px;
    		margin-bottom: 20px;
			img {
				width: 500px;
			}
		}
		.comm2_list {
			span {
				width: 223px;
    			height: 301px;
			}
			em {
				padding-top: 160px;
				font-size: 16px;
				line-height: 25px;
			}
		}
	}


	@media (max-width: 750px) {
		background: url(${home_bg2_m_namespaceObject}) top center no-repeat;
		background-size: cover;

		.comm2_xian {
			margin-top: 10px;
			margin-bottom: 10px;
			img {
				width: 80%;
			}
		}
		.comm2_tit {
			span {
				font-size: 22px;
				line-height: 30px;
			}
			em {
				font-size: 20px;
				line-height: 30px;
			}
		}
		.comm2_list {
			justify-content: center;
			gap: 10px;
			flex-wrap: wrap;
			margin: 0 20px;
			span {
				// width: 160px;
    			// height: 216px;
  				// box-sizing: border-box;
        		width: calc(50% - 5px);
				height: auto;
        		aspect-ratio: 373 / 502;
			}
			em {
			    width: 85%;
				padding-top: 70%;
				font-size: 13px;
				line-height: 18px;
			}
		}
	}
`;
function Comm2() {
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
;// ./src/components/index/comm2M.jsx
/* eslint-disable react-hooks/exhaustive-deps */









const comm2M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	min-height: 100vh;
	.comm2_title {
		margin-top: 110px;
		padding: 0 20px;
		span {
			font-size: 22px;
			line-height: 30px;
		}
		em {
			font-size: 20px;
			line-height: 30px;
		}
	}
	.comm2_list {
	    display: flex;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
		margin: 0 20px;
		span {
			width: calc(50% - 5px);
			height: auto;
			aspect-ratio: 339 / 457;
			margin-bottom: 20px;
		}
		em {
		    display: block;
			text-align: center;
			font-size: 13px;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 18px;
			text-shadow: rgb(0, 0, 0, 0.26) 2px 0px 0px;
			margin: auto;
			padding-top: 70%;
			text-align: left;
			width: 85%;
		}
	}
	.comm2_bg1 {
		background: url(${comm2_1_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg2 {
		background: url(${comm2_2_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg3 {
		background: url(${comm2_3_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
	.comm2_bg4 {
		background: url(${comm2_4_namespaceObject}) center no-repeat;
    	background-size: cover;
	}
`;
function Comm2M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
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
    return () => {
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
;// ./public/images/home_bg3.jpg
const home_bg3_namespaceObject = __webpack_require__.p + "630cfd4fa85c8ecc5312.jpg";
;// ./public/images/home_bg3_m.jpg
const home_bg3_m_namespaceObject = __webpack_require__.p + "bed9eeb5d87200915e7e.jpg";
;// ./public/images/comm3_1_en.png
const comm3_1_en_namespaceObject = __webpack_require__.p + "e2fd5217aed2ac05b0c0.png";
;// ./public/images/comm3_1_zh.png
const comm3_1_zh_namespaceObject = __webpack_require__.p + "e0ac865f6b3de375ab07.png";
;// ./public/images/comm3_2.png
const comm3_2_namespaceObject = "data:image/png;base64,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";
;// ./src/components/index/comm3.jsx
/* eslint-disable react-hooks/rules-of-hooks */








const comm3_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg3_namespaceObject}) top center no-repeat;
    background-size: cover;

	.comm3_conter {
	    display: flex;
		align-items: center;
		width: 75%;
	}
	.comm3_right {
		text-align: right;
		margin-top: 40px;
		margin-right: 6%;
	}
	.comm3_xian {
	    margin: 40px 0;
	}
	.comm3_des {
		font-size: 18px;
		line-height: 30px;
		text-shadow: 1px 2px 0px rgba(0, 0, 0, 0.16);
		font-family: "swissek";
		font-weight: bold;
		span {
			display: block;
		}
	}
	.comm3_flex_tit {
		display: flex;
    	justify-content: right;
	}


	@media (max-width: 1600px) {
		.comm3_conter {
			width: 90%;
		}
		.comm3_left {
			width: 35%;
			img {
				width: 600px;
			}
		}
		.comm3_right {
			width: 65%;
		}
		.comm3_xian {
			margin: 20px 0px;
		}
	}


	@media (max-width: 750px) {
		background: url(${home_bg3_m_namespaceObject}) top center no-repeat;
		background-size: cover;

		.comm3_conter {
		    flex-direction: column-reverse;
    		width: 90%;
		}
		.comm3_xian {
		    margin: 10px 0px;
			img {
				width: 80%;
			}
		}
		.comm3_left {
		    width: 100%;
			margin-top: -50px;
			img {
				width: 360px;
			}
		}
		.comm3_right {
		    width: 100%;
			text-align: center;
			margin-right: 0px;
		}
		.comm3_des {
			font-size: 16px;
    		line-height: 20px;
			span {
				margin-bottom: 10px;
			}
		}
		.comm3_flex_tit {
			justify-content: center;
		}
	}
`;
function Comm3() {
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
;// ./public/images/comm3_m_bg.png
const comm3_m_bg_namespaceObject = __webpack_require__.p + "7fbaf07f1ea49682b8b1.png";
;// ./public/images/comm3_ico1.png
const comm3_ico1_namespaceObject = __webpack_require__.p + "f55a3114e027b6efe797.png";
;// ./public/images/comm3_ico2.png
const comm3_ico2_namespaceObject = __webpack_require__.p + "f0992e637a9244528ae0.png";
;// ./public/images/comm3_ico3.png
const comm3_ico3_namespaceObject = __webpack_require__.p + "b9f30c7cd0b0f45b1e19.png";
;// ./public/images/comm3_ico4.png
const comm3_ico4_namespaceObject = __webpack_require__.p + "f5b13c78cd619392d3db.png";
;// ./src/components/index/comm3M.jsx
/* eslint-disable react-hooks/exhaustive-deps */










const comm3M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	min-height: 100vh;
	.comm3_tit {
		margin-top: 110px;
	}
	.comm3_flex_tit {
		display: flex;
	}
	.comm_m_conter {
		position: relative;
		background: url(${comm3_m_bg_namespaceObject}) center no-repeat;
    	background-size: cover;
		width: 100%;
		height: auto;
		aspect-ratio: 750 / 1134;
		padding-top: 32%;
	}
	.comm_m_icos {
	    display: flex;
    	align-items: center;
		width: 66%;
    	margin: auto;
		img {
		    width: 65px;
		}
		span {
			display: block;
			font-size: 13px;
			line-height: 18px;
			text-shadow: 1px 2px 0px rgba(0,0,0,0.33);
			font-family: "swissek";
			font-weight: bold;
		}
	}
	.comm_m_conter1 {
		position: absolute;
		top: 22%;
		left: 17%;
	}
	.comm_m_conter2 {
		position: absolute;
		top: 36%;
		left: 17%;
	}
	.comm_m_conter3 {
		position: absolute;
		top:51%;
		left: 17%;
	}
	.comm_m_conter4 {
		position: absolute;
		top: 65%;
		left: 17%;
	}
`;
function Comm3M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
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
    return () => {
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
;// ./public/images/home_bg4.jpg
const home_bg4_namespaceObject = __webpack_require__.p + "9401435cc6a2c6872089.jpg";
;// ./public/images/comm4_m_ico1.jpg
const comm4_m_ico1_namespaceObject = __webpack_require__.p + "04132f5e2d43bdbf74bd.jpg";
;// ./public/images/comm4_m_ico2.jpg
const comm4_m_ico2_namespaceObject = __webpack_require__.p + "60be1150f004c0712e2d.jpg";
;// ./public/images/comm4_m_ico3.jpg
const comm4_m_ico3_namespaceObject = __webpack_require__.p + "4df7211ef8e2d3926f58.jpg";
;// ./public/images/comm4_m_ico4.jpg
const comm4_m_ico4_namespaceObject = __webpack_require__.p + "3dca17ff315a754a12fe.jpg";
;// ./public/images/comm4_m_ico5.jpg
const comm4_m_ico5_namespaceObject = __webpack_require__.p + "60ddd294963655449e8a.jpg";
;// ./src/components/index/comm4.jsx
/* eslint-disable react-hooks/rules-of-hooks */













const comm4_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg4_namespaceObject}) top center no-repeat;
	background-size: cover;

	.comm2_xian {
		margin-top: 20px;
    	margin-bottom: 40px;
	}
	.comm4_conters {
		height: 210px;
	    text-align: left;
		padding: 35px 20px;
		em {
			display: block;
		}
		i {
			display: block;
			font-family: "swisse";
			margin-top: 10px;
			margin-bottom: 60px;
			font-weight: 500;
		}
	}


	@media (max-width: 1600px) {
		.comm2_xian {
			margin-top: 10px;
    		margin-bottom: 20px;
			img {
				width: 500px;
			}
		}
		.comm4_conters {
			padding: 20px;
			i {
				margin-bottom: 20px;
			}
		}
	}
`;
function Comm4() {
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
  const images = [{
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
  const [swiperInstance, setSwiperInstance] = (0,react.useState)(null);

  // 点击左箭头
  const handlePrevClick = () => {
    swiperInstance && swiperInstance.slidePrev(); // 滑动到上一张
  };

  // 点击右箭头
  const handleNextClick = () => {
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
  }, /*#__PURE__*/react.createElement(swiper_react/* Swiper */.RC, {
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
    modules: [swiper_esm/* Autoplay */.Ij]
  }, images.map((item, index) => /*#__PURE__*/react.createElement(swiper_react/* SwiperSlide */.qr, {
    key: index
  }, /*#__PURE__*/react.createElement("img", {
    src: item.image,
    alt: `Slide ${index + 1}`
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm4_conters"
  }, /*#__PURE__*/react.createElement("em", null, item.title), /*#__PURE__*/react.createElement("i", null, item.des))))), /*#__PURE__*/react.createElement("div", {
    className: "swiper-button-prev",
    onClick: handlePrevClick
  }), /*#__PURE__*/react.createElement("div", {
    className: "swiper-button-next",
    onClick: handleNextClick
  }))));
}
/* harmony default export */ const comm4 = (Comm4);
;// ./public/images/home_bg4_m.jpg
const home_bg4_m_namespaceObject = __webpack_require__.p + "fa2ee97ae047fc032cdd.jpg";
;// ./src/components/index/comm4M.jsx
/* eslint-disable react-hooks/exhaustive-deps */











const comm4M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm4_tit {
		margin-top: 60px;
	}
	.comm4_bgico {
	    background: linear-gradient(90deg, #451A90, #7D278A);
		box-shadow: 6px 17px 51px 0px rgba(0, 0, 0, 0.63);
		border-radius: 14px;
		margin-bottom: 15px;
		img {
			width: 100%;
			border-radius: 14px 14px 0 0;
		}
		span {
			display: block;
			padding: 15px 15px 20px;
		}
		em {
			display: block;
			font-family: "swissek";
		}
		i {
			display: block;
			font-size: 12px;
			font-family: "swisse";
			line-height: 17px;
			margin-top: 5px;
		}
	}
`;
function Comm4M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef1 = (0,react.useRef)(null);
  const conterRef2 = (0,react.useRef)(null);
  const conterRef3 = (0,react.useRef)(null);
  const conterRef4 = (0,react.useRef)(null);
  const conterRef5 = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (conterRef1.current) {
        observer2.unobserve(conterRef1.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (conterRef2.current) {
        observer2.unobserve(conterRef2.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (conterRef3.current) {
        observer2.unobserve(conterRef3.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (conterRef4.current) {
        observer2.unobserve(conterRef4.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 0;
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
    return () => {
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
;// ./public/images/home_bg5.jpg
const home_bg5_namespaceObject = __webpack_require__.p + "bfaa6ddc67eadf934538.jpg";
;// ./public/images/home_bg5_m.jpg
const home_bg5_m_namespaceObject = __webpack_require__.p + "8dbe453950ca792be749.jpg";
;// ./public/images/comm5_1.png
const comm5_1_namespaceObject = __webpack_require__.p + "3e589e37eb36f18e3fed.png";
;// ./public/images/comm5_2.png
const comm5_2_namespaceObject = __webpack_require__.p + "e586a0e18cad703d378b.png";
;// ./public/images/comm5_3.png
const comm5_3_namespaceObject = __webpack_require__.p + "32e453060332e3dfcb11.png";
;// ./public/images/comm5_4.png
const comm5_4_namespaceObject = __webpack_require__.p + "192467c68a7673c21f2f.png";
;// ./public/images/comm5_1_m.png
const comm5_1_m_namespaceObject = __webpack_require__.p + "814790e9017faec0c1fd.png";
;// ./public/images/comm5_2_m.png
const comm5_2_m_namespaceObject = __webpack_require__.p + "713f0887835d124a9b9d.png";
;// ./public/images/comm5_3_m.png
const comm5_3_m_namespaceObject = __webpack_require__.p + "a918aad339fce5aef29a.png";
;// ./public/images/comm5_4_m.png
const comm5_4_m_namespaceObject = __webpack_require__.p + "549f781e0affb99272d8.png";
;// ./src/components/index/comm5.jsx














const comm5_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg5_namespaceObject}) top center no-repeat;
	background-size: cover;

	.comm2_xian {
		margin-top: 20px;
	}
	.comm2_list {
		display: flex;
		gap: 60px;
		span {
			display: flex;
			align-items: center;
			width: 340px;
			height: 558px;
		}
		em {
			display: block;
			text-align: center;
			font-size: 24px;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 27px;
			text-shadow: rgb(0, 0, 0, 0.26) 2px 0px 0px;
			margin: auto;
			padding-top: 100px;
		}
	}
	.comm2_bg1 {
		background: url(${comm5_1_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 50%;
		}
	}
	.comm2_bg2 {
		background: url(${comm5_2_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 80%;
		}
	}
	.comm2_bg3 {
		background: url(${comm5_3_namespaceObject}) center no-repeat;
		background-size: cover;
	}
	.comm2_bg4 {
		background: url(${comm5_4_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 80%;
		}
	}


	@media (max-width: 1600px) {
		.comm2_xian {
			margin-top: 10px;
			img {
				width: 500px;
			}
		}
		.comm2_list {
			gap: 30px;
			span {
				width: 223px;
    			height: 366px;
			}
			em {
				font-size: 16px;
				line-height: 25px;
			}
		}
	}


	@media (max-width: 750px) {
		background: url(${home_bg5_m_namespaceObject}) top center no-repeat;
		background-size: cover;

		.comm_tit {
			margin-top: 40px;
		}
		.comm2_xian {
			margin-top: 10px;
			img {
				width: 80%;
			}
		}
		.comm2_list {
			justify-content: center;
			gap: 10px;
			flex-wrap: wrap;
			margin: 30px 20px 0px;
			span {
				// width: 160px;
				// height: 262px;
				margin-top: -40px;
				width: calc(50% - 5px);
				height: auto;
        		aspect-ratio: 355 / 579;
			}
			em {
				padding-top: 50px;
				font-size: 12px;
				line-height: 20px;
			}
		}
		.comm2_bg4 {
			em {
				padding-top: 75px !important;
			}
		}
		.comm2_bg1 {
			background: url(${comm5_1_m_namespaceObject}) center no-repeat;
			background-size: cover;
			em {
				width: 70%;
			}
		}
		.comm2_bg2 {
			background: url(${comm5_2_m_namespaceObject}) center no-repeat;
			background-size: cover;
			em {
				width: 80%;
			}
		}
		.comm2_bg3 {
			background: url(${comm5_3_m_namespaceObject}) center no-repeat;
			background-size: cover;
		}
		.comm2_bg4 {
			background: url(${comm5_4_m_namespaceObject}) center no-repeat;
			background-size: cover;
			em {
				padding-top: 75px !important;
			}
		}
	}
`;
function Comm5() {
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
;// ./src/components/index/comm5M.jsx
/* eslint-disable react-hooks/exhaustive-deps */









const comm5M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm2_list {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 30px 10px 0px;
		span {
			display: flex;
			align-items: center;
			margin-top: -40px;
			width: calc(50% - 5px);
			height: auto;
			aspect-ratio: 355 / 579;
			margin-bottom: 40px;
		}
		em {
			display: block;
			text-align: center;
			font-size: 12px;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 20px;
			text-shadow: rgb(0, 0, 0, 0.26) 2px 0px 0px;
			margin: auto;
			padding-top: 50px;
		}
	}
	.comm2_bg1 {
		background: url(${comm5_1_m_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 70%;
		}
	}
	.comm2_bg2 {
		background: url(${comm5_2_m_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 80%;
		}
	}
	.comm2_bg3 {
		background: url(${comm5_3_m_namespaceObject}) center no-repeat;
		background-size: cover;
	}
	.comm2_bg4 {
		background: url(${comm5_4_m_namespaceObject}) center no-repeat;
		background-size: cover;
		em {
			width: 80%;
			padding-top: 75px;
		}
	}
	.comm_tit {
		margin-top: 40px;
	}
`;
function Comm5M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
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
    return () => {
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
;// ./public/images/home_bg6.jpg
const home_bg6_namespaceObject = __webpack_require__.p + "35df068b984e01f86be5.jpg";
;// ./public/images/home_bg6_m.jpg
const home_bg6_m_namespaceObject = __webpack_require__.p + "c707ebc59ad0f7df2602.jpg";
;// ./public/images/partner.png
const partner_namespaceObject = __webpack_require__.p + "611a438f762e374a4d55.png";
;// ./public/images/partner_m.png
const partner_m_namespaceObject = __webpack_require__.p + "9dc3ae34b676f2acf85e.png";
;// ./src/components/index/comm6.jsx
/* eslint-disable react-hooks/rules-of-hooks */










const comm6_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg6_namespaceObject}) top center no-repeat;
	background-size: cover;

	.comm2_xian {
		margin-top: 20px;
    	margin-bottom: 40px;
	}


	@media (max-width: 1600px) {
		.comm2_xian {
			margin-top: 10px;
    		margin-bottom: 20px;
			img {
				width: 500px;
			}
		}
		.comm6_part {
			img {
				width: 850px;
			}
		}
	}


	@media (max-width: 750px) {
		background: url(${home_bg6_m_namespaceObject}) top center no-repeat;
		background-size: cover;

		.comm2_xian {
			margin-top: 10px;
			margin-bottom: 30px;
			img {
				width: 80%;
			}
		}
		.comm6_part {
			img {
				width: 90%;
			}
		}
	}
`;
function Comm6() {
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
;// ./src/components/index/comm6M.jsx
/* eslint-disable react-hooks/exhaustive-deps */






const comm6M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm6_part {
	    margin: 0 20px;
		img {
			width: 100%;
		}
	}
`;
function Comm6M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
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
    return () => {
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
;// ./public/images/home_bg7.jpg
const home_bg7_namespaceObject = __webpack_require__.p + "450a3761a7cc4b5f9480.jpg";
;// ./public/images/home_bg7_m.jpg
const home_bg7_m_namespaceObject = __webpack_require__.p + "7a670500176c0d892457.jpg";
;// ./public/images/comm7_1.png
const comm7_1_namespaceObject = __webpack_require__.p + "ce6d43b703343ff23662.png";
;// ./public/images/comm7_2.png
const comm7_2_namespaceObject = __webpack_require__.p + "cb96c0dfdc565b5c3819.png";
;// ./src/components/index/comm7.jsx
/* eslint-disable react-hooks/rules-of-hooks */










const comm7_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	background: url(${home_bg7_namespaceObject}) top center no-repeat;
	background-size: cover;

	.comm2_xian {
		margin-top: 20px;
    	margin-bottom: 40px;
	}
	.comm7_flex {
	    display: flex;
		width: 1150px;
		margin: auto;
		gap: 40px;
	}
	.comm7_conter {
		display: flex;
    	align-items: center;
		width: 50%;
		span {
			font-size: 14px;
			font-weight: bold;
			line-height: 30px;
			text-shadow: 1px 2px 0px rgba(0,0,0,0.16);
			text-align: left;
    		margin-left: -20px;
		}
	}


	@media (max-width: 1600px) {
		.comm2_xian {
			margin-top: 10px;
    		margin-bottom: 20px;
			img {
				width: 500px;
			}
		}
	}


	@media (max-width: 750px) {
		background: url(${home_bg7_m_namespaceObject}) top center no-repeat;
		background-size: cover;

		.comm2_xian {
			margin-top: 10px;
			margin-bottom: 0px;
			img {
				width: 80%;
			}
		}
		.comm7_flex {
			display: block;
    		width: 100%;
		}
		.comm7_conter {
			display: block;
			width: 100%;
			span {
				display: block;
				width: 80%;
				margin: auto;
				text-align: center;
				line-height: 20px;
				margin-top: -30px;
			}
		}
	}
`;
function Comm7() {
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
;// ./public/images/comm7_m_1.png
const comm7_m_1_namespaceObject = __webpack_require__.p + "0b68adacd479f08a32be.png";
;// ./public/images/comm7_m_2.png
const comm7_m_2_namespaceObject = __webpack_require__.p + "1d7afda72a01f9bf724b.png";
;// ./src/components/index/comm7M.jsx
/* eslint-disable react-hooks/exhaustive-deps */







const comm7M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm7_flex {
		display: block;
    	width: 100%;
	}
	.comm7_conter {
		display: block;
		width: 100%;
		img {
			width: 80px;
			margin-left: -15px;
		}
		span {
			display: block;
			width: 80%;
			font-size: 14px;
			font-weight: bold;
			line-height: 20px;
			text-shadow: 1px 2px 0px rgba(0,0,0,0.16);
			margin-bottom: 30px;
		}
	}
`;
function Comm7M() {
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
  const titleRef = (0,react.useRef)(null);
  const conterRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  (0,react.useEffect)(() => {
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0 && entry.boundingClientRect.top > 100;
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
    return () => {
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
;// ./public/images/footer_1.png
const footer_1_namespaceObject = "data:image/png;base64,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";
;// ./public/images/footer_2.png
const footer_2_namespaceObject = "data:image/png;base64,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";
;// ./public/images/footer_3.png
const footer_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAAAXNSR0IArs4c6QAABQpJREFUWEfVmXtM1mUUxz+nqMAQlIvRjD+arqu2MsVS45ICqSAm07mIEl2bbdbWxbVqU0thNksrl84L6cw2W7aasVmWplFWaKTTSlNEEkM2pYFNJC5P76H3R69v7+X5veBa508433M+v9/vec55nvMK/wOTSBmNMdcAWUAGMAy4GUgC+gNtwHngNPAj8C3wqYiciCSfa0hjzHBgHjADGOAiqQGqgLeBTSJy0VZrDWmMuQlYChQAV9gmCOLXACwB1ohIZ7hYYSGNMQo03xNokQcyOlxAl//fDxSLyJFQupCQxph4YItnTT3gMrkb9z+AWSLyQTBRUEhjTDLwOXCHm4wR+nbpOheR1YH0ASGNMbpDdwMjIkwaiUxBS0Rkk7/4X5DeNVgBTIwkUy81fwI5IrLHN04gyOe8u7iX+SKW/wYMF5EmJ8IlkN4yc/Ay7GK3xBtEZHYwyA+BqTYRd++ppKHhDNkT7icpKTGk5MKFVnbu+oLW1ovMmD7NJryuzzQR+V6de96kMeZOoNr3b6GiTcqbxr791URHR/P0U/NISEjgxIlamptb6Orqon9sLKmpNxAbey2lZcs4e+4c/WJiqDl2mKioK21APxKRB/0h1wNzbNTqM3J0OnV1v9q69/j9cuQAAwdYdVPtRENF5GT3mzTGaCdpBOJss858aBY7d2mVsrdBg5I5fLAKkbCNzgn6ooiUOZC5wCe26fQNjk3Ppq1NDzvubPOm9eTmTLAVVYnIaAeyzHO8et5Wubj0Fd5cGbA5hA2RmXEf77/3Tlg/r0MHMNCB3O6mPxdOL+LLyq9tE13iFx8fz/GjWuWsbYwDeUwXqa0sd2IB1T+4StQTWnd2Q32NbSr1K3Ygm91smqJH5rBjx043iXp8U1Ku49CB79xon3Eg2z2H0Chb5Vur1rLoZV3G7m1K/iTK161yI1zgQOp9JNZW2dT0O2n3ZtLcrB/A3rT0VGzbStqou+1FMN+B1KZ+vRtl5Vd7KZk9l+aWFitZVFQUpYsXMruk2Mrfx2muA7lPm4iNetFLZWSkjyMrK50zZxpZV74R7eMna+toOa8f5B+LiYkhNXUw96SNoqSkmGG332aTwt8n34HcCDxqE6GmppYpU2ewYvlScrLH90gm5xdSta/7PNBjiYkJVH2zm7g460YWCGGIA/k4YL2aN7+7hQULl/DG68vIzZ3A8eM1ZGQFvga57DD+kI0ikuJADgG0Vlo11c7OTiblF1JdfSDsy99Qvpq8yREf8jeLyN91Us0Yo9dL623X3t7eXSt/PnKU9o4Olq9YGRC4l5AFIrLNF3IuEFFDrq8/zV0jx/Y1ZD1wo4h0+EL287Qg7VcpYb+hn8OpU/WMGDUuoEwLtxbwCOxZEXlNdf53HFcbyEn8ccX27s8eyAYlJ/Fw0Uy0TrowPU3fIiKtgSD1XL9X7xcuAl4O1+616AQOdKXVEZ4Wdx0Q/Be2XkQe800cbIKhN8atgNWNqQ+fRL/ieP+xYKhZkD7NGtva2QeghzyjnUzfoUDQz+2bzBgzC1gLXNUHEKFC6AEzT0TOBnIK22GMMWO847/UywCq099y4IlQk9+wkN5ulOA5b77qPYT0dsrrPGsd8KTvLg72EqwgHbF3yvECoLOSSDfVKWAZsM52bu4K0gd2sOdAUgTke2vq1WGWgrY4vRTp1Pgzmzl52BLkZu0ZY7Sd3ur9iUQnV/4/kfwkIrVuYvr7/gX246H3yUmFuwAAAABJRU5ErkJggg==";
;// ./src/components/index/comm8.jsx
/* eslint-disable react-hooks/rules-of-hooks */








const comm8_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    background: #14171F;

	.comm8_flex {
		display: flex;
		width: 1100px;
		margin: auto;
		padding: 35px 0 35px 100px;
	}
	.comm8_conter {
		width: 25%;
		span {
			display: block;
			font-size: 16px;
			color: #FFCC00;
			line-height: 20px;
			font-weight: bold;
			margin-bottom: 30px;
		}
		em {
			display: block;
			font-size: 12px;
			color: #fff;
			font-weight: 500;
			line-height: 16px;
			margin-bottom: 20px;
		}
		a {
			display: block;
			font-size: 12px;
			color: #fff;
			font-weight: 500;
			line-height: 16px;
			margin-bottom: 20px;
			&:hover {
				color: #FFCC00;
			}
		}
		i {
			display: flex;
		}
		img {
			margin-right: 20px;
		}
	}
	.comm8_reserved {
		height: 60px;
		line-height: 60px;
		border-top: 1px solid #343945;
		text-align: center;
		font-size: 12px;
	}


	@media (max-width: 750px) {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		.comm8_flex {
		    display: block;
			width: 100%;
			padding: 0px;
			margin: 0px;
			text-align: center;
		}
		.comm8_conter {
			width: 100%;
			margin-bottom: 40px;
			span {
			    margin-bottom: 10px;
			}
			em {
			    margin-bottom: 5px;
			}
			a {
			    margin-bottom: 5px;
			}
			img {
				width: 30px;
			}
			:last-child {
				margin-bottom: 0;
			}
		}
		.comm8_reserved {
			display: none;
		}
	}
`;
function Comm8() {
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  const [whitepaperUrl, setWhitepaperUrl] = (0,react.useState)("https://docs.cryptoarena.io");
  (0,react.useEffect)(() => {
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
  }, /*#__PURE__*/react.createElement("span", null, t("Support")), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: whitepaperUrl,
    target: "_blank"
  }, t("Whitepaper")), /*#__PURE__*/react.createElement("em", null, t("Projects")), /*#__PURE__*/react.createElement("em", null, t("Advertising")), /*#__PURE__*/react.createElement("em", null, t("Community")), /*#__PURE__*/react.createElement("em", null, t("Developer"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Contact")), /*#__PURE__*/react.createElement("em", null, t("Customer Service")), /*#__PURE__*/react.createElement("em", null, t("FAQs")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://forms.gle/m7AMiQLZQdMq2xyh6",
    target: "_blank"
  }, t("Suggestions & Feedback")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Platform")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1ktcZ2P7lMKEJDsymetdqUzvWKbF0VR2n/view?usp=drive_link",
    target: "_blank"
  }, t("Terms of Service"))), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1JHQmFHsoM2m4qynP0tT2rycXHIm8xX-G/view",
    target: "_blank"
  }, t("Privacy Policy"))), /*#__PURE__*/react.createElement("em", null, t("Career")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/download"
  }, t("App Download")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Follow us")), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://t.me/cryptoarenaio",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://x.com/cryptoarenax",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
;// ./public/images/home_bg8_m.jpg
const home_bg8_m_namespaceObject = __webpack_require__.p + "104a6fc86a90fd8cf7d7.jpg";
;// ./src/components/index/comm8M.jsx
/* eslint-disable react-hooks/exhaustive-deps */








const comm8M_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.comm8_flex {
		display: block;
		width: 100%;
		padding: 0px;
		margin: 0px;
		padding-bottom: 80px;
	}
	.comm8_conter {
		width: 100%;
		margin-bottom: 40px;
		span {
			display: block;
			font-size: 16px;
			color: #FFCC00;
			line-height: 20px;
			font-weight: bold;
			margin-bottom: 20px;
		}
		em {
			display: block;
			font-size: 14px;
			color: #fff;
			font-weight: 500;
			line-height: 16px;
			margin-bottom: 15px;
			opacity: .8;
		}
		a {
			display: block;
			font-size: 14px;
			color: #fff;
			font-weight: 500;
			line-height: 16px;
			margin-bottom: 5px;
			&:hover {
				color: #FFCC00;
			}
		}
		i {
			display: flex;
		}
		img {
			width: 30px;
			margin-right: 20px;
		}
		:last-child {
			margin-bottom: 0;
		}
	}
	.comm8_reserved {
		height: 60px;
		line-height: 60px;
		border-top: 1px solid #343945;
		font-size: 12px;
		text-align: center;
	}
`;
function Comm8M() {
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  const [whitepaperUrl, setWhitepaperUrl] = (0,react.useState)("https://docs.cryptoarena.io");
  (0,react.useEffect)(() => {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-CN");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setWhitepaperUrl("https://docs.cryptoarena.io/zh-TW");
    } else {
      setWhitepaperUrl("https://docs.cryptoarena.io");
    }
  }, [i18n.language]);
  const titleRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const isReallyVisible = entry.intersectionRatio > 0.2 && entry.boundingClientRect.top > 0;
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
    return () => {
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
  }, /*#__PURE__*/react.createElement("span", null, t("Support")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: whitepaperUrl,
    target: "_blank"
  }, t("Whitepaper"))), /*#__PURE__*/react.createElement("em", null, t("Projects")), /*#__PURE__*/react.createElement("em", null, t("Advertising")), /*#__PURE__*/react.createElement("em", null, t("Community")), /*#__PURE__*/react.createElement("em", null, t("Developer"))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Contact")), /*#__PURE__*/react.createElement("em", null, t("Customer Service")), /*#__PURE__*/react.createElement("em", null, t("FAQs")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://forms.gle/m7AMiQLZQdMq2xyh6",
    target: "_blank"
  }, t("Suggestions & Feedback")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Platform")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1ktcZ2P7lMKEJDsymetdqUzvWKbF0VR2n/view?usp=drive_link",
    target: "_blank"
  }, t("Terms of Service"))), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://drive.google.com/file/d/1JHQmFHsoM2m4qynP0tT2rycXHIm8xX-G/view",
    target: "_blank"
  }, t("Privacy Policy"))), /*#__PURE__*/react.createElement("em", null, t("Career")), /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/download"
  }, t("App Download")))), /*#__PURE__*/react.createElement("div", {
    className: "comm8_conter"
  }, /*#__PURE__*/react.createElement("span", null, t("Follow us")), /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://t.me/cryptoarenaio",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://x.com/cryptoarenax",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
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
;// ./public/images/footer/footer_1.png
const footer_footer_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFEElEQVRoge2Ya2wUVRTHf7vdbl8sj7aWlpJCtaUtqzw1gqgkmNTWWFswRq3GQpXoB4wmhJj4+GJ8kY0mFPADoHET1JBIhcQgtkjYhIDVVomNIBiBKqEaQCUVKC27a66e3c5OZ2Zntop82F8y2Zm99577P/d57iVNmjRp0owFV6zs2nUfWJnxAs1AE3ArUAhEgOPAAUAV/tyBjjuBx4AFQBmQC5wBvgLaga3AFbPCzz3THH/32KjML0ZnGKRVy9MqjiwHfrCwVQ4EgTsM0oqBBnleAB4Bvkwmzp0kfS5w0ES8ntuAbmAFkKlL80iLf20iXk8FsBe4OVlGqx4okJb32agwxnjgXeANoAP4XnqoFihyYEeRB2wH5gNnU3HgdWC6w0pjKLGPplhWi5ofa4HHzTKYDaHZMq6vBZZbDSUzB54HMizEq1WnHthwFRxUGl+0StQzDVhmYbAPaAF2A08DXWMUGAVeA6pkBeozyNMgE9uWAyuTzI2fdWv0j841J9Auy+Yx4BNpHCOdK40K6x1QG9vDYxTklO90+Q+blH9Qu/HG0Le0mizXGxTulSURzW+MLs26XyY7tRPukyF0Wco8ZFJWDe2FsmGaOlBrUHAz8KSMVSPa5InxqiwCdpkD9ADbZMNstijXoHdAP4SMHNhlId6Ij5Okq5beCLwkPYuEKy/L3mEVHSzR/6HNnCXBlZ6ngByb4j2yMlmhenMV8IrUZxU76Zmn16IdQn6JOvXcLSvPSfn/EPCEJo8SUifvU4CSJCLaNe8XJeSotOmA0jtLu3RrHZhrUbBAHsUlXVq5xCt2Ubv8fsnrklZ1whytA9ohNNOhoVT5UELl22VHX+jQjl/7oe2BaTYNqOhyHPCnhBtWPWfEVDmwpEqZ9sNjlmCBOo11SkuqeKhmDGJSwdgBj3t42pWI/hxiygKTFes/JydzIKHB4nPA7QoXXHU1KRCOZCa0ctyB4XCWVfh8zXAlkpmgc6QH3GEnu+3/RiSa2M7xOZDtucCFoQkp66os7KGu6p2k+TqOreDomVtSrsebkbgNxR0Yl/V7yg5MyvmF+qrNZHn0e9xo6qq2cPZCKecuTkmprgnZ5xK+40OoxHc8ee0GKNFN/vXq9zPghmSPN2NwV5O/zZazRkz2nRjW/h3vgbKJR04fOr3E8NhmhtsVpqFmI4V5p06oMDgQCv6WrMyaxS3N+bn93U3+toqPvl1NOGrnbm2E8vzefu13vAdmFHZ3XJd3yoGpKPXVm5VBFZDdb0e8IhAKnldn7rKJh883zHwblytiu8aC3NNK515DB1yuyE41jjNcpleSCeLvqnifmUUHh9R9aSAU/Ma2in+cUOeAZZWFPUO1lUFbxw2lq3bGe6rXtxk6oMKDyb6TvUtvXIc3Y9DUUJ73Dxr9G5hX2qlqbQ2Egp1OxGucUC3ZOqtkX3Spv+1vu2YoPY3+9UydcPSohN8jjsVecmu2smj6ju5JOb+23FS8PyOCm8FhH0PhHLyeyxSN+4n5pXu4p3qTelfinw2EgltSER/jQN/S3kXTd/Tn5/bfO3vKPle25xJD4WyGw9lEo27GZ5+jpqgLNdSKfSdUbz8QCAX79uzeHrcx6np9zeKWejmfmt2Jqkm0KhAKtpukO2bN4pZGYJPF/emALBLq2iXhen3U+TMQCn4ql0xvAkeAQTHwhSqr5vu/KV7q3CmnstVyaB+QetWQeUvpiYlPkyZNmjRp4gB/Ac8bOU3z2E7IAAAAAElFTkSuQmCC";
;// ./public/images/footer/footer_on1.png
const footer_on1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADiElEQVRoge2YWUhWQRTHf5oVRfRiBEVoRtkilVZQRvXQgy1QtEFl0aJJEQVBby0v0fLSU9tDQRBk4YsRVJCSL0X7IojRvkLRQhBGlobGwPlkHO/cO3c+K6H7g4/vLrP8z8yZc88MCQkJCQnpkJGq21bfO6yZPkApsAiYCgxSVYAXwHXgDHAlho5ZwBpgGpAD9Ac+AXeAauA08MtWObOwtePaxYACaTQ/QpQyZB3wNKRMHnAKmBnR1jNgFXA76KVuQGZEQ0XADQfxiunAXWA9YI5Gloz4fQfxipFAHTAlqmDYDGSLoOEOHZp8BGqAR8AYoAQY7NHOG2Ay8Fl/6OpCx4EKj067m5NAuc0AmwtNBMp6gHhkXVldyWbADqBXSKMq6swDjqSvLxKlcZetUJAL5UoUyLLUeS2LLBXmbkpo9aUdOCDRKV8GJddoS4Xs0aIr0oUqQsQr3hox+nka4pEQvRN4AlwA1gaUybStR9MANSMr0xQUl0aj/ENL/eW6x6QwR1otlhEBlRskJKL9p7ilxf0cD3daCOwHfsr9Cks55VbF8sG0GlASUPEEsFF8NYhD8kuxT4KAK4XAPaBK1kBpSL0FpgGmCwUZcClEfBDnIt6rkT4K7JaZRdKVPcDqiOxgtvlAL9xXkiuTTUA/R/FqRrdGlFGzuQXYK/2F5U4mk0wtugsVSNZpMkcizyt5Xg9s0MooIXPleigwJEJEtXb9XVKOUY4GKL0TZN11MaAopGK2/BTNxrs8yVdcUV/5a1I2Q0Y1DoW6AboLjYvZkC9nJVWeIV/04pjtFOg3+gyYXz8bKrscAHyTdCNs5oIYJhsWX3JsBuR0LRuI2o3VykiqfGhsGmJ86KRTz4U+eObsf5sfmYWtHZFIXwPZ/1yaG502LroBYelzT6KTTt2AOF/bHkPUpj4x4E+jh9FmOWDy5TKw2aHuYWB+Gv206je6Ae9kq+jDS0mDvzjULZXjGt++3us3ugvVeIpXCdlSR/GKr8AS+fehzmbAeY/GWuS89EHMeg1iRItHn1X6jW5ArbbBcKFdzo5qPUQgI1kWM3w/Nj3F/A6UO46KKrsNqIzReRCVsmFyMaJFTibabAYgx9vKJZpCGlKLaJmxD04HdYS5WM5TbTTJOrtqvredjapd1XYJd3kSuhplv3tMUunuZqDs9JTQ8ZLzqEO0i8BBPfroB1sJCQkJCf8xwG9xwazyDGqSEwAAAABJRU5ErkJggg==";
;// ./public/images/footer/footer_2.png
const footer_footer_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADaklEQVRoge2ZzUtWQRSHHyUsSvqACFsVFPYhRYGFumlVmElgi4gWSQW1aFFQYvUPpGmQUERFHxZUELQotBZtIiqzCCKiEql2QrRIciWRMXBeebvNzJ25M9dcvA+Ilzt35p7fzDln5p6XEiXCKDP17uy5FTr2cqAH+AUcBYZDBms/vFt7vzxkUAOVQBfwHmgCtst1h7RFJaYAtZr7gCHgGFBR1Kau26Vtj23lfYkloA54DlwBFlueU2298uzG6SBAGXRVDKrTtPcBjzT31bMvHASnklVAhbiJcom9Gpf4BGwFmuV/kyaI1buVy32QIK8gA1kENElQdmmC8ocIW5uY+YdADdAGjCX6zAO6gXdAo68xPgKqxZA+SZHF/BZXWg2cAcY1/cfFUDXONWDCY/wgAWkzNCA+vR8YcRhvRLJVg/RNYlthLwFpPjoiKVEZ8srB8CTK+AaD8LQYcxJgyhLjsimpJb+pcQUfJsT1qg2uV5zlvAXo8vR9CcYTmmAMYUxmvMaSdrXMcHzpN6C1MHjbplZnW7ue9ProGpa02yiruzCtg2sWGjLMjKJF3G0U+AKcAmb7WK1Bveujy4OhO/ER4J4s8VxgKXAceAzMDBzbiRABVTLbOuqBA9NdwGZglqW9OWBsZ0IEpPn5nBzs/YcQAW9S2l8HjO1MiAC1+/Yb2lRGOpuj3ZOEZqFdwN3EvWHJ418t/Wo99iAroQJ+AjuBZfLtq7LPSsMhDQn687J6g/J8EFFmAfgsfzaUsNvAOnlmPfBMzjpq7/ie5cWZBHgeD5BjyDnN8bhMTqM7gJPAJfm2cCaPskoxlfIRfz3lbL8AuAC8BDb4vCCWC+lQrnIHWOHRp1bi57IcTVLJS8Ah+Yqz7dQmlFccdH04toD5EpQtkcc1ElNAnbjMksg2WnEN4mpLyaNcyoZPp9p4PAQskpLHg0TJo3C/I+eEYMQmYFBzr1lKHqfl+i2wZQrsNO3sVgH1lpJHm6xGVTwbtRTXkLTYBBSqbass1ba8SKviTeISA6NS8lhj+bCPSb+ljppJQIEhKXlsC/25KOb4Wc5CXjPkQNAKZz3MOfuohSgxFnoaTas0mxiwZDkvYh2nbZXmYkbk26DBsM/8NwEkKs3dCZdQ153SdiOwov0XeWz/YxLgF2P+0F2iRB4AfwAzHb2XAIOI6wAAAABJRU5ErkJggg==";
;// ./public/images/footer/footer_3.png
const footer_footer_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEHklEQVRoge2Za4hVVRTHf6MpOViQ9FDSLFQiqBA1MKGuhEgY5JdSVOoGpRU29uJojw9hD7QkyPrgoywJsVKhtAdiFIFppFl+SBIdxKLUoDRLBuwxxsL/hu3pPPY+M3fG4P7hcs89d+11/v/9WmuvQxNNNNFEr6LFHv780rVlHAYCU4GbgdHApcAFEcT/Ao4B7cA24ANgK3CqrOGCB2cW/n9OSfvzgfnAPOC8CMJp9AMu1mcCkADfAguBDV3wS5+C/24C9gBPdpF8Hq4G1gMfAhdVdZInYDawBRjarZSzMQXYAYyq0jhLwF3ACqBvA8jm4XLg0yodlhYwTuRbGko3G0b+PaB/TCNfgC20N2MddDPGatOoJGAOcFUvknd4HBgSatzH+360obTC0QrcH2rtBNwAXNHLxH3cGboOnYApPUIrHMMVJ0rhBIw/ywQQyskJqBREGowgTk5ATGLWUwji5AScexYKaA0xKstG05isVPqNCoSOADVltnNDGiS1OsnufoU2bgR+DyTxeRfS3y+BfcA3gfbH9W0p/V5gmc4iZ8AJOBLo9ErghMjE4hPPRwgcpxa1uQ/4GngVGODaOwF7Ap3O0PdjwD8RAr4DVinfmh7RxjDIu2di7gE2OxFOwGeBTtvUG2Y/S6NRht0KlB06iV0W0OaUjpzkZAg3Ai/6AjYBnQGOB+g8a6nvO0r+lmZMwU7NdctprgMOAtOApwOeYdie1OrO57gcG5tSo50Ae8DHgc5H6gR1C/Aj8JCyx6F62LUa9jHAck2bxcBbEYekld715Bwbm05z/G10oYxDkqghGontwGot0APAT/rf/F6vqWNzdnAgccN+4G1dDwMmFthO9AV8oQNNPeJhE/RBc/wXHYgurBBj0Nyfl9Tqf+r33JJRG5Y+UrapB6qgVQt0cEXyhpeTWn2zrocr6BVhYFrAHxr20LjQnXjXO1RZr7/m7/c56MiqSrRr/u7tQfKWmkxPanUXW54FJgW025831Ae1eD7SbtIoHLVeT2r11Z7/JxQoQ7ClqDL3s6pzXzWA/CHgKduSPfKtGonnAn3YQl9ettiOq6C7NaJicRLYCRxO3ftN09O23l1Jre4Cp3XibVZjVoErFIts6w7ZLX4FbtWDy2qYGxV9D+cZWIqs4GYR2jrnDmBEBHGDldOfIWK7s567WylHHqw0eLtK6WUwu1dSiVooXgIecaX5ojWQxvuKulnoUE+GkEc9aNPlXlWoLT3fpZJ7R0G7JcDD/nuFGAFI+aGM+8ty7hfBYs5KJXnjlUddA1wCrMtoZ+nFgvTNWAHHVIL08bdF0Eg/RTih0Wz3bL7n9Gj9541OrAD0QuJ177dF0B+6UQDaIl/QdadK/pnH3qo5S5teF42NCDqxWAM8oDUSeuBqookm/lcA/gXdVMOheBhQswAAAABJRU5ErkJggg==";
;// ./public/images/footer/footer_on3.png
const footer_on3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD50lEQVRoge2ZbWiVZRzGf5uaTtRwFExrWy+GDCRGGqSUSYnKIvoSC41cikYRSdgLah/CGERJkIiM8GXiB2koLKNBiI7A8hV1HxobKab7sPkhfEco25Q/XQ/cPpzzPPf9dM6OH84F4zl7zv1yXff9v+//y6GMMsooo6SosMlHesalcZgEvAYsARqBR4CpAcRvA1eAc8BvwE/AYeBOWsfKxtuJ36cJmAJ8CqwBJgcQ9sHvwEZg3/8RUJnw3UtAL/BZEcgbZgF7gS7g4ayD5BOwGjgAPJqdnzeagBPAU1k65xLwNvAdMGYUyEd4DOjOsmBxAXNEvqKg9Pxg5H8AHgjp5Aqwk7w7dIACY7YujUwC3gEaSkg+wnpgmm/jSuf5UVFp+WMi8J5v60jAC8DjJSbuYrnvOYwENI0KLX/Uy0+kIhLw3H0mAF9OkYBMTqTI8OIUCQgJzEYLXpwiARPuQwETfRqNDRx0kULp9gyELgEvKrJ937dTWqgf7cB1z/F+TQt/E3Ac+AM449n+mp4W0vcDbcpFcgq45DnoTOCmyITikDOGDyJOFerzLnAa2AZUxQX0eg66VM91wHCAgD5gh+KtNwL6GKqddyZmFfBzJCIS8IvnoB9oNaz9m9qNNPTIUd4CPgHqPPrcUcpJnghhPvCNK+BHOy8eA1cpn7XQt0PB3+YcJjgiW7eY5lngAtAMfOExh+GIM+acPG3MpBrdnNi2ZbHnBEPK2rqcd3Y71QD/AAPOITTRn2v1k1JYFy0K7Q0HgZfztGtzBcxVxSAkmbGV2qUDet55P1Yr3ySbrQkY86ziIFuIWuDPhOywz/UDR6W6JWCyefpDNv6XEqKHMvgYZPtrRB75i6TUtjZeVrHqw6kSxkZ2nj7U53rdRFVJHeI2eUPb7usXColOJ6myVd+eRt52PdehOqfz0D+K5NvlHyLf0gos9Oh3Nt+tYNfeAnm+YuIysAJYqfKjYYMcpQ8OpJUWH9Q1lu8uzopBlW+2qGaKos+tqkv5wA56Q9pNcU0F3cMBFYu/gZPyFe67qzLPI7ooIsdpVvA68JUKXL740q5u3+r0DE2cVsPcL+87lNLOJnxGi/MW8GQAccMeJf7DvgIMryrkyIduEUouJ/+HZTKfao+2cXwLrI1K8yEC0G2Ry0ZvyXcMBhAxn7NUt02dHN944ImEbGxTvHIXKmCq6vrTY+8tMvw4gHwSJin0bo61+V47d8+PIqECDK8oIo3wr2x4oEACUDjSq7NnuAg8nStz9I0OXVgEutP5v7PA5NEV+bU+j8hsc6a9WXYA2WiHqsnPxyLRQsHCiGP6Fae1COOXUUYZJQdwF4yZxZ0RK7w7AAAAAElFTkSuQmCC";
;// ./public/images/footer/footer_4.png
const footer_4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEsklEQVRoge2ZDWhbVRiGnybNbdOspmn9abe22lVxc7pVJjKmMxOn4CrCrP9/USYooqKjlYlTcA6tVNlEQUH2EwZOYVaFqXPoXJxzE2QbrevasNq6KV3XVtPF1DRtGjl6Um7Tm/TmhuYK9oUL95x7vnO+99xzv+895zKDGfzPkZNI/7U335+2GWlweybVNfm8uVeV736utLDL47L3VthtQSU6ZhsLRZyDA0Ozv+8PzVmz4pLtfrWNpWZk/D532rzVgd0dq1fctaixubLoeGFCa0txQY+roqi9NjzqWNnSs7z5S//DdzS4PbHEXk0jsPfEfQ8uq/pom0MJTFoFauTnhnIWlu2rcyiDbcD8xOeWbDibiC86Hpm3uHzPlqmcV6O65Mi89jNLmhPrTSFwkeunnc78Pmu6dtXnHl7V0uNeqK7LOoGdrfVl1SVHFxixtVkiFNiCb6jrsk6gsqjtMcUaNmxfXNBztbqcdQJ5uUOGZj8OhxJwqMtZJ2C1jCqZ2OdaRib4nHUCo1HFr6NZUgyNnPOX+lnWCUSi9s2xyQJAN86GS1rVbbNOwPfznb+cCswfNGofI2eDuqyHwFzgVeAwEBRvEWgHtgI3pDH2rCaftx7o+vrE/c5oLH0R0Bcqbyl3+nfpJWADGoEOYC1wpXACsAOXAg8BXwHfiOiYoh8nsA7oFtoNOL8/NOfQsdPX7tDQkknx57Ar4MzvnzRhyaZBRIqPgZU6+l4O/ADcBKjXZzHwDPCkJCHgAzY0uD2COCcDlx0sK+zcaLMOp8zKA0OzOwrz/liqWMO/6yXQqNP5OEoBoVNEmhfKcg3wuLxHvqn1DW7PfrVRZVHbW5Fo/geng1XvOvP7a+22YF78WSxmiQXC552MRO0vXTCre2uygbUICCeeSsP5OC6WjtYABf98b/CZmHHgUDIjxRruKy3sqmvyeWsdSmCXy967/56aV57IyRnrdNl7Q1MNqkXgUZFvDBAQWCodF8vvZeBIOsahSJG4zgItem20CKQTWbRwG/CJ1oMmn1dXB1O3u3f8TisKzU3LXZOhRWAsQ5cy0jrpQotAd4Z9Ttq3Tie0COzJcLwPgU+BxWYReAeIGuzvR6HXgFvl/ecyMk0btAgcB942MGAncL3YugKbpGa6GTgg84M7iZ0I2XcD9bJcC4gt21GpwapSDZpMCz2b5lI6A6wSkgX4TUoIMfDrsk6E5n3At8CNKrtF0tEdUpLEkSefrZXCcZ3WIVwqAmIZ3AKIDfToFM4fkMukNaFekGoQhxAyGwsJvUxOzEHgaeA74PIp+ldkUvRqkUilRkfka10giYjsOCwJ/So/1lrpVGeKfgaAF4ALgRcBIciWABulutWLB+SbmAA9otyvWp+ZYFDO5CYpwY1EqeeBbcCpeIUZB1tin3GFQVvxbaxWV5hBwJ1htlZ/7KYQSBkWdaBC3cQMAsaPJP6FTV0wg0CqiKUHXeo2ZhDYK8NxJvbjMIOA2HEZ/Y8liG9WV5jyf0Amtj4DdutlEh2HWQSEXqoT2+A0bLbL05IJMIuAgDhiuU7HBn5IZmCP1m7R1L+U8rhSnPjdLq9rgDL5Zo7J/cR7QI/Jfs5gBv9NAH8D4bIprXaQcusAAAAASUVORK5CYII=";
;// ./public/images/footer/footer_on4.png
const footer_on4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADY0lEQVRoge2Ze2iOURzHP142YVpZiT/2h2kozKQUaptcCqXcCn9QFP4wlkuSyx9G/KMU5Q+hTEppiKZmubSmKbHIbbW2uURILrlsy14d/bbO+zrP+5zneXiP8n7r7T3nPOd3zu97nnP5nt9DBhn85+iTTL+7KSvdI9IP2A6sBPKBbOUG8BG4BWwCmnWDWHFXb9o1gZlANTA4RZ241Fki6QQCsXR46YEVQK2P88ggLwIemR66IjAGOGGaAT421cmFrgicA/qGsFsAFOkFLggMB8ZGsD+oZ1wQWBfRfrKecUEgyugrDNIzLghkR7SPeWbShOaI3XxzTeB4RPsHesYFgXaRCWGxV8/YECgA9gN3gc/AV+AJcBKYEaDjHGAL0ArkBvf7F+4Dl/WCVFpIJSqBzSK4vHBDhNgzj+fK2XKgAsiTskYhsiyA8x+AQuCdjRZSO8UFYJuP8wplwG1gfFL5EBmAdvlXzt8EZgFTgOXABuCHhfNPgZHK+eQHXgQOAHMtGu7BMNEpA4ChYt8G7JQ3UAeUCNk6ze6wnMzKtiOpzbiQXyU66L2pY9MUKpL5HkarKP1eDAwUB2pk0TVa2M6T+V0PrAdagC+mivoUMk2PtSGdV5gqjp+XaXMvRBufZLFawUQgyM5iwkJZP2mBaQ0UpKvzPwETge6IDUfVOoFgItAWsc34X/Y5ASYCtRHbPAtcBCZFbMcKJgJHLQ8XE+4AncB8SdfIzpRWAo+BIyHaUvv2dDkxD4lmmgM0yOFV6mGntuylopOQ8+A70CQabESqTr20kFqIl4DZls6/kRiPLnXVibxVrpA5UlYv58NVyU8ATgPjUrTdKTb7THEhPzGnRmCjjx5qEDHX4vE8T4RcuaZCG2WtVGrk/FAl/cSDRuZGAWtEhI2WV/5aHD8FXLHceXJFvFWI0AuD3Yq069CiisRdD7lLKcFXGCvuet5T4OJGlmWQ3rboD6zW67ogUBrxtC7TMy4IpNwWLZCvV3FBIEhA14SEReqCgNd2a4tWvZ4LAtcM18eg9r1wQUDduM6EtO1IDoy5+j6wC3gbwm4P8EIvcEXgpXw2Ml7aPVAl0Y4EuPxGpoRdicUFXqnaHaKDfrst+gWt/jZU+GYisFh+0yROpN7MQ7lPHANeOfYzgwz+TQA/AayOrA+a91goAAAAAElFTkSuQmCC";
;// ./public/images/footer/footer_5.png
const footer_5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACgUlEQVRoge2YW4hOURTHfxhKGMYDeZGSByS8UepTIg9uURJp8oDx5MU0kuSSyzS5lfAkUxOllMurS9+TJi9S5kXjGolMyUTTuLVrPXzfmbPXOfucz97R/tWpc9Zee63975y9z16bSCQSCcooW/LO89dKj6u90qo1bwJ2AU+B08CHPDFHLxquf1Z8lwEvgd8Frs/ANiX2bOA6sArYBzwHjgNT8ojIK6ATmOUaUJgKXFTajwJja54nAgeAF0AHMD5vIk3ApLxBLDRb7AuBLZa2FuAU0A+0AeOykmgC/hbHcuSdAVwC+uRTtPr7FrAUWOvgb+ZKD/DE1s+3gJMF+y0A7sjbq8OngNVApWSMESubLwHmf3OiAXEeJg2+BGwGFpeMMSTLbx0+BDSlfbsFuAy8DiHA7CfmlIzx1fYJ+hCwvAExzgIf0xp8CLgB/CjRfwA4Y2v0IeCubB9uy6bQFbO1+BJSALIl2CB/4gcO/d4BFzQHTcB7h0S25El6gRXASuBxjhhm2fyuOTQpbXuAc8B8rfCx8BbYr7TfA+4DG2WJnZviY2qEK1mJNAGmmFnvOHAXzHy4CdwCtgNHgJk1/Q/mmfyaAF/8BK4CpobdDawDqrJ6ZZIlwMyRyQWEDALDSWNXtXuMUuggW+ceuW+psX9rr7QO2QZow0y2T7IOu15m2duZGPwaqZWLxBvoqnan1tjaqcQjYIkiMIvBRFn6DJhXIp75E0/v2Lu1zqi9gQklkiGFuvbsyrQ0Y4iauKFEAaGJAkITBYQmCghNFBCaf0nArzSjJmDEKZgjrxLu/SXj9aUZtYKmTY400urVLExBfzjhs0PiFTmlewMcKtAvEvm/Af4AYVeLbDD++xIAAAAASUVORK5CYII=";
;// ./public/images/footer/footer_on5.png
const footer_on5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACWklEQVRoge3YT4gOcRzH8Zfd5eK/A7koyQEJN6SojRyQKESSC3tzcXAS6//Bn6QoV5tyw50chFw2ZS/a/IukELaVVktT89Q+szPzPDPP7gyadz2H+f6+v+93Ps9v5jff709FRUVFqUxISj7cO3G872s7DuAZzuNDM5Palg/VX6f4rsFL/M7x+4Q9KbEX4CY24DBe4BRmNKu+RtoKPMTqrAFH8A3TE8Z6sDvG/gXncBk/4iZmWYGp2e+5jmkJ9mXYlTA2E2fRjy5MapQkTcB4caKJvHNxFX3ho5joX7SAVdicwT94V26gN2le0QLO5Jy3FHfC1aujSAEbsbbFGKN2tqIEBLvd6TGIcz9qKErADqxoMcZPdEeNRQjoiHt2c3ANr8sQsA8LW4zxPekRLELAujGIcREf4waKEHALv1qY/xkXkgaLEHA3LB9uh0VhVoLS4muZAoQlwdbwS3wvw7x3uJLmkCbgfYZEScmjPEEn1uNpEzG6k6rSGmnl9HxcwpI0vwTe4ggeN8i9LdxiF8WMBz3C4uj7Ey2ny+zIarRjL45j3gj7znADqONvFFAjqP0PYgse4GScU1YBbSldVRoDGIoZb09pdNIYDEuJUQI6UiZ1hks4K0fC4MU7hOsjbJvC2j7PHzIYHgD0RAfSVuARVuZIVmMg0pY+D1/KvARf4jlZeuLJLSQLmNLgOiuz44xl9MRjSiWgbCoBZVMJKJtKQNlUAsrmXxIwHGdMEzDqFCwjryLu/S3G64szpvUDXeGRRly/2oigoT8W8dkfxstzSvcGR3PMq6j4v8EfiZl1b2ANEeUAAAAASUVORK5CYII=";
;// ./public/images/footer/footer_lenu.png
const footer_lenu_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFMElEQVRoge2Ze0yXVRjHPwgaJTdFQIigjVIbXTCbIbZZid3sD2Zaw9bamhZz05qLWW52tc3ij1Yt/6i1ZBlzXZSRtbJGoyVOJehiCZkWBD8iDblIIAi0w563Di/v5fx+P7A/5Lv99p73Oed9zvM9l+c85/kxiUlc4Iiw03/xlbLxGpEMYB2QAHwO7AaGi5c8GJbSKTkDo9/DNFJhphi6RJPdAxwFNgGPAB8AHwOXqMrqxoKEhpMLK79puW1tuJ2HQyAJKAGagCLga5HnAmWWsRruBHao17zM8o7+wegTCy7d98afZzK66gL5m88nAbXs1gANwOPAdOApYBCYCrwNTHP5dlVJVelKVeg+O7Oooy+pPzmmKXZ+2hcvNHfODRxsunvBRBOIlbX8JjBDZPVAhZQfAOb56NhaUlU6JS+z/FxL55y9ljA9viH1urQvD9cF8jdNFIFU4ABQYJO/BQzJzDxhoGcusIKRWUjcODB40bBVER3VE5GTWrntSNtNxp7ElIAyvhLItslV57uknAdcaahvxBXlZlQ0tnZnNeoVERFDXJ2yv9CUhAkBtZ73uCyNWqBZyqtNOhTcUVJVqrwXp3uTy8dWD5OdXF1YF1i6xU+RCYFXgRtd6vZp5bsMdFmIApap8t/9cduHxx5HIzORnVL97KHfl+d6KfIjcDPwsEd9tTyvAC43s/1fjBBYlFlxrLM36axTg2mRvRHp8fUfeSnxIqDqtjud1hpqpbgoSOOR82IEnX1JAbdGaXHHZ33Xess2LyPdcB9wlUd9G2B1fH0IBOaVVJWOHHY9A3HfezW8LL5+Q3VjgaOtUR7f/WBNsws6NfEOCRVCQldf4ubalvxqn2/jgA67cCKDOUeMdzDnNgMZEut4QcVAJ4FIIMfUgJKqUv31D6BFyvMNnMq3sHrQhIDavMt9lK2RUzgZqPG13BkvAxulRrnkWT7t1V6r0wVujG8w6PwvefrNlBcSHfR5YYxdTgTUiKYEQSDuPBLIsgucCKQadm4FYdMN2zshUpMNGbQfs8ScCMQadm65US9X7IcYrb7LoP0Mu8CJgMlIYBu9UKH35XYJ0jFsFzgRMFmLaKPXGwaBbq0cbdC+0y5wItDsxNQB1oiFQ0A/lUwINNoFTgR6gF8NlCXI03TGnHBakyUatP/RLnDbgJ8YxPdT5XkKOGFs8mj8rL2dMdBzwC5wI7BefiZod/LPIeDaUD4aj8TW/wovH/6Qurt61KsNVSzlR4HFIRBZJ0twsehwwzlgrezPUfAicEjyP26zpLzPk6JchROrgjReudB2Kd/u8/07Tsbjs4SOaCkTJ1ys3dhqPdq5QUWV1kHmdaPrA55zq/TbA8U2V2eHlQrcL6nFYPCV1tYrpbgV+CVUAgGJ+90Otlvlqa56B4Mk8Jk81SzOdmmjEsYveSkx8UK7ZRScsEzTEcyd+JRG2M1RqIhgpe20HgNTN/q0JLjsmK2lVMqCCATf0wxb4VDfIrPb5qfIlIBaQo/JTNiXk3VL/w3Y6/CtHYrk6yLLcnC/R+XPkmMmhgVzkCnDt4i70zd2oRYXPW+gR+VZf5JykS0z8r4kvI6bGhXKSfyhbLxdQipGO4TU5X6nx7fW2YHcrqy0ZZMspXsNLzZhEUDWphr5hUJIxU3pUrdekmJ2DMlpai2NZ4BWYINkvveEYki4sVCNeIo52uVeudSlwKdaO+V17gfelXd1l1AJImX4a+HcKcK5z+po57+wAEl4qT/1rpE4v0bCZQv9wOFx6nsSk7hwAfwDGf8x9gbwqtsAAAAASUVORK5CYII=";
;// ./public/images/footer/footer_lenu_on.png
const footer_lenu_on_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEaElEQVRoge2ZW6xeQxTHf9qq0otelDakkZQgIkrFrQ9E0tTlhbqFRCRSNE2KiAYPVPDEg0SQiIjGpRqXNsSthAfRNqijcav7pTktjVOUCkk5ZPHfyXxzZmavvb9zKtLzf9nzzcxee/1n1qy1Zn0MYxi7OfaI6fdv2HOwVmQGsAiYCLwCrAT+6lboiFk7O393KxCYLEVPCfrOBTYC1wNXAk8BzwP7aHwMcDNwUrcf74bAVOBOYBOwEHhD/ScCywNlK5wBLFP7d723FlgDzNuVBMzsFgCfANcBY7WafwJmfw8BozPvng+cp/bDknEy8BKwCjhwqAmMly0/AExS38fAs2pfAhxeI+N2fbcfuC/oPxt4D5jbRKEmBKYD6/ShEA9KGduZGxxyDgPmq227sCMYs/P0okxyUAmY8q8BR0b95lVWqG2mcKhT3qV6/hTsXoWR2hkXCQ+B0bLPlGn0AL1qX+z5oHC6VtvwTGLcdvMeHfwiPATuBk7IjL0ctM9sQGBUYOuvygRj2E48rniSRR2BU4ErCuNr9TwEOLgBAQIC2+SNUtgXuL8tgRGyxQHROkCPmm0CksWLCu8U5pm5nVNSMocLgSMK41uBLWof21j9f89UFex6auYuzS3kqMJL79f45O1Be5lShbZ4TN8rYS9F8A4MZTI3JIiTudwOzFCuU4LlMt/LW8xqqex3wGa1j3E4lQ1KWWoJ2OE9q0bYAkXh/YH1fp07cBdwrTrMJe9XM9/O2rthR47xcY6Pb9OzbqdKmJKQV8IAvVIEbEUPaEBgwi4kMDPuSBGY7vx4dbsa65yfwsigLxWNYwwwsRSB8c6PV2605IrrMC4Y/9kxf1LckSLgWQmi1WuL8Fu5S1CIAXfqFAGPLRKs3m9dEPglaI9xzN8ed6QI9DqrB9WKdUMgjEoeAt/EHSkCvwJfOYRN1NO7Yyn8GPRNccz/MO7IHcAXHPl9lXP0AV+6Ve7Ep8GvHQ456+KO/30uNBiFrf8UJR9+mS4TOdiBWqKxq4E5LYgskgnOkYwc/gAu1/nsQInAW6r/5HbJvM+NEj5BRasmMBf6g+bPq3n/kZTy1JjQB0HJJIW9gxtb3Y0qBcsqq0BWutHZJebW3GDdGVgSuboYs/V7TZynO/B6MGV2YbpV8j5vS2CL8v5cYDtNTytQvdmQwGo9bRenZeZYwfiOkhCPF1qpVUhhbiCjyZ24LyCccxS9KgTvzIz/A68bXaoCV4xpQUlleYNE8IlAsfmJ8c3a3a11grwEzISu0U7E5lTVOb8GnnPIMpL3qj0z4X436s+SzzyKNQlkpvhNcnfhwb4oyItuc8ixOutHai+MsoEnVfD6wqtUm0j8tA7eCpEaFwQhu9w/Wni3ih3odlWVLTfJlC5wXmy6IoBs01b+eBFaDBykscWZIlW/omllGrcA3wJXqUq3qo0ig5XMTdaBrkxjqv68qDxMn4hVgdHuEkcDbzf9UJzMDXU2epTy/PXRPzGtERMYxjB2awB/A7792GWycv+CAAAAAElFTkSuQmCC";
;// ./public/images/icon_xl.png
const icon_xl_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAABL0lEQVQ4jb3Vvy4EURSA8Z+JQuUhVDqNJyASREMkQkchUYhO4QlINKJQSHS0RKOj9Sc0qxJRaYRGIhshQk5yN9lMlpm11lfNnHvnfOfeOXOnY21jD7qxgB7t4xrbnSn9PgbaKKvRn6Hrn2TBSAhfcfFPwvMsXczgsc2yW8xmdTfDeG6T7CG2MxaV1QWvMIG3P5bFIobSomS5wWNM4eOPZFWMo1IL5IXBARbx2aIsip7GSX2wkTDYwkoLsih2Hof5ge+EwSo2fymMYncaDfwkDJaw26RsPRXbkCJhbM0cjkrKorjlnyYUCaXPZBJnBfPifc0WNVsZodTeY/XtneM0deR7UaKywuAJo7jPxSvplKqWSdKMMAjZYDqqgrtUROkjsfY/bIYb9KIPl3gp/TC+AEVPOciiFRZwAAAAAElFTkSuQmCC";
;// ./public/images/defi1.png
const defi1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAACBklEQVRYhe3XTYiNURgH8N/ViMl3E2Eh5CtmYWFDTfnYsGCnxEopjMVkY9TUKNnYTD6SLEkWdjY2ElI22Ev5ltUU3cQoGh0dejvd973ve+feadL86+3tnPs/T//znP/7nOeaxlRCLavl/MVb2WEXFuMLvndC8+DAwT/vGQ1+m4MRjOIT6riDtZ1KXlcynoV72Jpw9qEP2/Ci3SLSTJxIBGSxCJebxJuP7Vg4ERH7m/B3oafB/BKcwzs8wPtgMSxtRcTyJvxawlmBS3iDoUwG5uFUnL+K1UVBU0+EHfws4AezvsZKnMEhzCzgz8YxHMFtDONVMxF9RYoza+43212DNeF73IFV+FEk4nSBqUKtOIu9FQVksSz67maRiOPxnBvhOsbR36KAv+hPRTQqVnm4gnXxC5kIQgnYXJSJPDyNz0ha6jN4iRvR2CHuAfTmcEPGj1YVcQ3dOFzAOYm7mfFjPMrhBpMOxnup9HE8j84uqoT1ZPy5gDs3xlNFxK+qpbhE7O6qIspgdyZeeO8pu7CsJ8pgKD6V0c5MtIwpIaKdxzEeG55v0XQbym6yXZkYw05sxBZsipfh18kUEe6Vh8nck1jkJk3E25z50VZEfMzh1WLBaif+xUtFDMTuKsX62Dvm7bgqPmSPL/06nsXOZ0EyPxabmjWxo06R9+foQo4v6h3I7DT+F+A39T1UCEbjYpAAAAAASUVORK5CYII=";
;// ./public/images/defi2.png
const defi2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAADIElEQVRIiaWWa2jPURjHP9v+KWZo0oYolxcsl6WVTeb2wgsr1+RShCjvhDRSriHXXPJiFhMZ1l64ZkWEqNUQyuTygoY32iS3WS496znz7Ox//r//f751+p3f7zzP8/0955znkrb7UCUBxIAsXfoGNMcR6wfMBoqA/kAa0AA8Ai4CL+OZTvfehWgl8BD4ATTqWObJ5QDHgbfAEWAhMBGYoPO9wAvgKjDUJ42ZeU/gkiomQjFQBeRGyAmmqb2lQHU8T894hL+AJh1ua8cCNUkSOnQHzgFzfNKpQIkhKwV6ANk6TgC91MNuKRA6ZAAVwCBLOs8IHAb26OWxWA8M7AShQ5aedduZjjCLVQGlU8A1YBgwXs8rO0XiWeKt87SrWfgaUHgG3AbKgEUaLnJBXqdAKnwlfsikArlcJ4GRwD7gT5K649z2ylZ10XmDPofoWUvgDzCBX6+Bf1flvgPrNCFUGDsh9I15ROi2HQDmxkkeo/QH1wJ1wCrgvq5V6o+d1mcIzb5R8eqBehi19QXAHWCN+Saxvj9C7501LF7cSDHwM5Rktfm2GXiTQKfWkUoiuNzJwEfjr0DnEt87AnKSz6sdael/Bn6GC3zFWb1gPsqlgKSrwooIozW6bYkwCSjU9S/ATU9WKtIW9LLI5ekTQTgT2AZsjCCebubXzbxJ626jIy3sqNuB0FWZnRHE+WZer0+pq5M1KnCkvQMGbnqEDkK8PaCTY+YfgE3AGOCxFZLk8DtgIA8YbP7YIVPPLx5azLenOgRLTKY6FtMDjodc9XaKIc7USlMc0AnZOqidSStpuiaEEBzx8CQIMSnRR7u0mK6l6UkE8S29jYkIW2wfZJCtyQcNpbb8uiuBMfSCFEXIlHmFw8HmZikSbZ3DeWA+MCPCcAjvga3aDOSpjHi3AFhudMotqRTgxdoZ5CdF8w+fNPA/akGvC8hd0a6wXfn6rGd2IQXC55pcaiPkpO+SnWwNT9tsC+SgpXmSeroBGB0wItspLcpR4Kf5LkneZR7ptSROJfnfs8o+qYOcsQzp/MQTV4Hkooh34pn0xz5emRIXH8Bf/Hai947hAEEAAAAASUVORK5CYII=";
;// ./public/images/defi3.png
const defi3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAADaElEQVRYhc3Xe8jdcxwH8NdjiyyplQx7kvtEY+6xSNrcRuT6BzIlai7xDyYUQy25PCz3yD1LLXMdIWEyY4aU2ybRNGoIwzwefdf71M9xzu+c8zx7lned+v1+39v78/1c3p/TN3fgcaOIPmyPb/FXu3M2GUUC2+J1fIX3MX5jk9gPS3Bo3ifj6o1JYibeQH/T91nYabRJjMOD+W3eYnwxfmi1cOwGInAQHsAebcZ/wWn4udXgSG9iM9yIN2sIFCxqdwtGeBPH4Vbs0sXcNXWDw7mJvfECnumSgEqWjJhESbMnsQxHdzF/CG8nDibhnOGSKBVvGl7E8gRXX2X8x5q1d+OQrCm4D3OxQ2KpjG1ZR2I7zMbneBlHNR3ewL64CX/nfTXuzfPE7D8x72NwGVbid7yFK9ZbWtGOCTgFp8aH3bhqV3wRq7ZKrBS3vZfxkppb1Kxfi90a2XEMFuSaekFj/uLKmhmV5zoCUtRmNKw9bxgE5uGTFt8P6GGPoqxLGySW9LBwbYLtomRAM67Bb13s8xOOL65rkLgdqzosKpnwRw4+OC4c12LeBzi3w14rMDVSvz74StTOjGUXJMhOwsLKomUJ3Kk5+FI8n6DcNHN2xy24B0fWEHgpWnMgnpWyXTJhXhaW1Lw/viqp9zGuTNn9s0X5LY3L9GjDY0nZdhjEtdm3/C5sGDo2wjKU9BpT2eBhHIYzcQQ+zKHNOAtTOhBYmT5jVXqN/ROH5zfcUax9qomAFKdi5at5n5xa0IzTcX2bw4dSvKakpiwNgVL+D8d3Kio6O1YuSvRPiz58hp1rLKzDR7ny0mPOT9UdTJt3QzWzGiS+bFK6m+OCd/LcC4p75yS2LsFzKVrf44zIwL9Q10+8FhGa0CWBErQDuCNBvrwi9a/g7LT+/0GdPsxKJe2EFbF4xxxcyD8RAr9mbHo7AjqQeDRX2Arr8DROxD5J33ejP3tl/sI8D7SprF2RKGX1qsr7YCrcxWnni9+Pxde4M9Ev8l9avxNySx1RFxP9saD4d+sE1DY4OWm7Z9P8QuY6PFT3l68V2pEYn9asEPk01s2J35tR6sxteCRu6RntSKyJEPWnP5zUNL4u2nFXtKDW58O9iYLL44qGQA2lbsyPTqweycHdkigNSwmw0u6V1CvZ8M2GOvj/BfwDkA6/DPiwuf0AAAAASUVORK5CYII=";
;// ./public/images/down.png
const down_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAABXElEQVRYhe3YrUsEQRjH8e8dmsR2iMUiaLRbzrdkMxosoojhgjaxmoxX1GzwDzCaBIPB5lvxjJc0aD3xhUdmYJG9m5dncTfMD5ZlZ2eHDzuz7LNbO2yfocwMsAp8AKfAs2a4ISVmHrgAhs3xLjALPMQOWFeC9jIYyahBRUcLGs9pa5QJKjwJ5EoCuZJAriSQKwnkSuVAPuWH9DkGpnLOTea0SflxmdP+COwAPS1oAdj06GczZra/mQOOgPtBF/tM2Q3wEgDql465SwPjA3oDloBXBaYLLANfRYAkd8BiJKprSt2OT+eQpywGFYQJBYWigjExIF9UFCYW5EJFYzSgfigVRgvKop6AWy2GAr5cLWq6gHF+U9mXq+xbQLME5DdwBbSBTws6ATb+GZLNipn2bbkbI8B6iRibLWCibqarCmupJvWVQN6B8wqA5EfXtV1Da8BBSYtaIkXbPtD7AV75QYOL7AWDAAAAAElFTkSuQmCC";
;// ./public/images/Club.png
const Club_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJgSURBVFiFzdffa09xHMfxx9bXLkxWLsjMFVEkZZIUF7vgSoqGItQoN7IrfwJNLhBpF7ijxJILTS6EJIXmR2ZbZKRcaVoi23DxObPvzs452/frfM3r6nze7895nWefH+/P51S1nbokB1VjHb7hSV6Geegy7uMxjuVhmAfYAmwvarfm4JkL2AAGi9ofc/DMBewrtgjTeBfbcvD8AzYPGzGnTJ87uIgWPCvTY37EUDcKtgq9uIVuLC7DdBfO4BpmlvH+WvRFDK9QX429mB11mIsdJZo24QKqsBLtZYC1oDZ6rkdzNT7EOr0vwXAFOlBTFNuNQyWC9cfa7wo4jQZswD1MteI24KZoTcR0Ak/xYIpe57AQq3EdNwr4Yaz2bMYVHMDnDKO6CKohJV8T+TTi0yRQm3A26vtlNBgvFz3YKuyspoyPdgjTmKX6CG7GJPlOFIqhksDeYkgYidtoixlXCQs9DTqu9TgeixVwWKgAzVFsQomJgw0L23Y0dwQPsSSKHRVKQylqxc7oeQ0e4aSxSgBd8ZcKCUa9WFbUbhQW8lWhtJSj88Ja2iP5tHk+FbDXCbHav4AiFN19GflJp5JksEpqEG/iwSSwnsqzjNML/IoH/4cR60oKJoENmLwo5qnE20jafay3giBxlQTWXUGQYv3Ey6REGti/2gB9wg14gqYbLPW2O91TOaHijyoNrB/fK8MyTl1piaQjibAoO7C0EjSRhoQDPVFpYJR+i8hVWWCEEZtVge+OCGViOK1DFlizcMOslNpxMC2Z9Se+KH+WcVqelcwasU7sV/7feZZGIv9U/QYB63AfzOattgAAAABJRU5ErkJggg==";
;// ./public/images/Governance.png
const Governance_namespaceObject = "data:image/png;base64,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";
;// ./src/components/footer/footerM.jsx
/* eslint-disable react-hooks/exhaustive-deps */































const footerM_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: fixed;
    width: 100%;
    bottom: 0px;
    background: #313640;
    border-radius: 16px 16px 0px 0px;
	padding: 15px 0;
    z-index: 99;

	.footer_conter {
		display: flex;
		span {
			display: block;
			position: relative;
			width: 20%;
			font-size: 9.5px;
			color: #8991A6;
			text-align: center;
		}
		em {
			display: block;
			font-weight: bold;
		}
		img {
			width: 24px;
			padding-bottom: 5px;
		}
		a {
			color: #8991A6;
		}
	}
	.footer_tan_ara {
		position: absolute;
    	width: 360px;
		bottom: 50px;
		left: 0px;
	}
	.footer_comts_arena {
		em {
			color: #FBBD15;
		}
	}
	.footer_comts_more {
		em {
			color: #FBBD15;
		}
	}
	.footer_tan_more {
		position: absolute;
    	width: 190px;
		bottom: 50px;
		right: 20px;
	}
	.m_lanu {
	    background: #2D323D;
    	border-radius: 7px;
		i {
			display: block;
			width: 100%;
    		font-size: 14px;
			font-weight: bold;
			color: #B3BBD0;
			height: 40px;
			line-height: 40px;
		}
		.on1 {
		    background: #FED005;
    		color: #5D151D;
			border-radius: 7px 7px 0px 0px;
		}
		.on2 {
		    background: #FED005;
    		color: #5D151D;
		}
		.on3 {
		    background: #FED005;
    		color: #5D151D;
			border-radius: 0px 0px 7px 7px;
		}
	}
	.m_lanxl {
		background: #3B404B;
		border-radius: 7px;
		margin-top: 6px;
	}
	.m_bpoens {
		display: flex;
		align-items: center;
		height: 45px;
		padding-left: 15px;
		font-size: 12px;
		i {
			padding: 0 8px;
			font-weight: bold;
		}
	}
	.m_defi {
	    width: 180px;
		text-align: left;
	    background: #3B404B;
    	border-radius: 7px;
		i {
			display: block;
			width: 100%;
    		font-size: 12px;
			font-weight: bold;
			color: #B3BBD0;
			height: 45px;
    		line-height: 45px;
		}
		a {
			color: #B3BBD0;
		}
		img {
			width: 20px;
    		margin-right: 8px;
		}
	}
	.m_defi_botm {
		border-bottom: 1px solid #50545E;
		padding-left: 15px;
	}
	.m_defi_pasbotm {
		padding-left: 15px;
	}
	.lanu_on {
		color: #FBBD15;
	}
`;
const FooterM = () => {
  var _i18n$language, _i18n$language2, _i18n$language3;
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
  const hostname = window.location.hostname;
  const domain = hostname.split('.').slice(-2).join('.');
  const gameurl = "https://snake." + domain;
  const [tabOn1, setTabOn1] = (0,react.useState)(false);
  const [tabOn2, setTabOn2] = (0,react.useState)(false);
  const [tabOn3, setTabOn3] = (0,react.useState)(false);
  const [tabOn4, setTabOn4] = (0,react.useState)(false);
  const [tabOnLanu, setTabOnLanu] = (0,react.useState)(false);
  const [walletInstalled, setWalletInstalled] = (0,react.useState)(false);
  const [gamesUrl, setGamesUrl] = (0,react.useState)(gameurl + "?lang=en");

  // 创建一个ref来引用菜单元素
  const menuRef1 = (0,react.useRef)(null);
  const menuRef2 = (0,react.useRef)(null);
  const menuRef3 = (0,react.useRef)(null);
  const menuRef4 = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    setWalletInstalled(typeof window.ethereum !== 'undefined');
  }, []);
  (0,react.useEffect)(() => {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setGamesUrl(gameurl + "?lang=zh-cn");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setGamesUrl(gameurl + "?lang=zh");
    } else {
      setGamesUrl(gameurl + "?lang=en");
    }
  }, [i18n.language]);
  const handleTab1 = e => {
    e.stopPropagation(); // 阻止事件冒泡
    setTabOn1(!tabOn1);
    setTabOn2(false);
    setTabOn3(false);
    setTabOn4(false);
  };
  const handleTab2 = e => {
    e.stopPropagation(); // 阻止事件冒泡
    setTabOn2(!tabOn2);
    setTabOn1(false);
    setTabOn3(false);
    setTabOn4(false);
  };
  const handleTab3 = e => {
    e.stopPropagation(); // 阻止事件冒泡
    setTabOn3(!tabOn3);
    setTabOn1(false);
    setTabOn2(false);
    setTabOn4(false);
  };
  const handleTab4 = e => {
    e.stopPropagation(); // 阻止事件冒泡
    setTabOn4(!tabOn3);
    setTabOn1(false);
    setTabOn2(false);
    setTabOn3(false);
  };
  const handleTab_not = () => {
    setTabOn1(false);
    setTabOn2(false);
    setTabOn3(false);
    setTabOn4(false);
  };
  const handGamesLink = () => {
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
  (0,react.useEffect)(() => {
    const handleClickOutside = event => {
      // 如果菜单是打开的，并且点击的不是菜单内部元素
      if (tabOn1 && menuRef1.current && !menuRef1.current.contains(event.target)) {
        setTabOn1(false);
      }
      if (tabOn2 && menuRef2.current && !menuRef2.current.contains(event.target)) {
        setTabOn2(false);
      }
      if (tabOn3 && menuRef3.current && !menuRef3.current.contains(event.target)) {
        setTabOn3(false);
      }
      if (tabOn4 && menuRef4.current && !menuRef4.current.contains(event.target)) {
        setTabOn4(false);
      }
    };

    // 添加全局点击事件监听
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 组件卸载时移除监听
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tabOn1, tabOn2, tabOn3, tabOn4]);
  return /*#__PURE__*/react.createElement(footerM_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "footer_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: tabOn1 ? "footer_comts_arena" : "",
    ref: menuRef1
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handleTab1
  }, tabOn1 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on1_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_footer_1_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Arena'))), tabOn1 && /*#__PURE__*/react.createElement("div", {
    className: "footer_tan_ara"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model m_menu_bop m_menu_model_m"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu sub-open-menu-m"
  }, /*#__PURE__*/react.createElement("em", {
    style: {
      textAlign: "left",
      color: "#8991A6",
      borderBottom: "1px solid #50545E",
      marginBottom: "8px"
    }
  }, t('POPULAR')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    onClick: handGamesLink
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_1_namespaceObject,
    alt: ""
  }), "Crypto Snake"), /*#__PURE__*/react.createElement("i", null, "HOT"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_2_namespaceObject,
    alt: ""
  }), "Crypto Tetris"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_3_namespaceObject,
    alt: ""
  }), "Crypto Bomberman"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_6_namespaceObject,
    alt: ""
  }), "Crypto Bird"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_7_namespaceObject,
    alt: ""
  }), "Crypto Candy Crush"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING")))), /*#__PURE__*/react.createElement("div", {
    className: "sub-open-menu sub-open-menu-m",
    style: {
      marginTop: '6px'
    }
  }, /*#__PURE__*/react.createElement("em", {
    style: {
      textAlign: "left",
      color: "#8991A6",
      borderBottom: "1px solid #50545E",
      marginBottom: "8px"
    }
  }, t('3RD PARTY')), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_4_namespaceObject,
    alt: ""
  }), "Crypto Fishing"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_5_namespaceObject,
    alt: ""
  }), "Crypto Tank"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING"))), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: men_8_namespaceObject,
    alt: ""
  }), "Crypto Mario World"), /*#__PURE__*/react.createElement("i", {
    style: {
      background: "#008000"
    }
  }, "PENDING")))))))), /*#__PURE__*/react.createElement("span", {
    onClick: handleTab_not
  }, /*#__PURE__*/react.createElement("img", {
    src: footer_footer_2_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Marketplace'))), /*#__PURE__*/react.createElement("span", {
    className: tabOn4 ? "footer_comts_more" : "",
    ref: menuRef4
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handleTab4
  }, tabOn4 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on3_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_footer_3_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Community'))), tabOn4 && /*#__PURE__*/react.createElement("div", {
    className: "footer_tan_more"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_defi"
  }, /*#__PURE__*/react.createElement("i", {
    className: "m_defi_botm"
  }, /*#__PURE__*/react.createElement("img", {
    src: Club_namespaceObject,
    alt: ""
  }), t('Club')), /*#__PURE__*/react.createElement("i", {
    className: "m_defi_pasbotm"
  }, /*#__PURE__*/react.createElement("img", {
    src: Governance_namespaceObject,
    alt: ""
  }), t('Governances')))))), /*#__PURE__*/react.createElement("span", {
    className: tabOn2 ? "footer_comts_more" : "",
    ref: menuRef2
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handleTab2
  }, tabOn2 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on4_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_4_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('DeFi'))), tabOn2 && /*#__PURE__*/react.createElement("div", {
    className: "footer_tan_more"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_defi"
  }, /*#__PURE__*/react.createElement("i", {
    className: "m_defi_botm"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/diamondswap"
  }, /*#__PURE__*/react.createElement("img", {
    src: defi2_namespaceObject,
    alt: ""
  }), t('Diamand Swap'))), /*#__PURE__*/react.createElement("i", {
    className: "m_defi_botm"
  }, /*#__PURE__*/react.createElement("img", {
    src: defi1_namespaceObject,
    alt: ""
  }), t('Farm')), /*#__PURE__*/react.createElement("i", {
    className: "m_defi_pasbotm"
  }, /*#__PURE__*/react.createElement("img", {
    src: defi3_namespaceObject,
    alt: ""
  }), t('Lottery')))))), /*#__PURE__*/react.createElement("span", {
    className: tabOn3 ? "footer_comts_more" : "",
    ref: menuRef3
  }, /*#__PURE__*/react.createElement("div", {
    onClick: handleTab3
  }, tabOn3 ? /*#__PURE__*/react.createElement("img", {
    src: footer_on5_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_5_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('More'))), tabOn3 && /*#__PURE__*/react.createElement("div", {
    className: "footer_tan_more"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_menu_model"
  }, tabOnLanu && /*#__PURE__*/react.createElement("div", {
    className: "m_lanu"
  }, /*#__PURE__*/react.createElement("i", {
    onClick: () => {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
      setTabOnLanu(false);
      setTabOn3(false);
    },
    className: ((_i18n$language = i18n.language) == null ? void 0 : _i18n$language.toUpperCase()) === 'EN' ? "on1" : ""
  }, "English"), /*#__PURE__*/react.createElement("i", {
    onClick: () => {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
      setTabOnLanu(false);
      setTabOn3(false);
    },
    className: ((_i18n$language2 = i18n.language) == null ? void 0 : _i18n$language2.toUpperCase()) === 'ZHCN' ? "on2" : ""
  }, "\u7B80\u4F53\u4E2D\u6587"), /*#__PURE__*/react.createElement("i", {
    onClick: () => {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
      setTabOnLanu(false);
      setTabOn3(false);
    },
    className: ((_i18n$language3 = i18n.language) == null ? void 0 : _i18n$language3.toUpperCase()) === 'ZHTW' ? "on3" : ""
  }, "\u7E41\u9AD4\u4E2D\u6587")), /*#__PURE__*/react.createElement("div", {
    className: "m_lanxl"
  }, /*#__PURE__*/react.createElement("div", {
    className: "m_bpoens m_defi_botm",
    onClick: () => {
      setTabOnLanu(!tabOnLanu);
    }
  }, tabOnLanu ? /*#__PURE__*/react.createElement("img", {
    src: footer_lenu_on_namespaceObject,
    alt: "",
    style: {
      width: "20px",
      height: "auto",
      paddingBottom: "0px"
    }
  }) : /*#__PURE__*/react.createElement("img", {
    src: footer_lenu_namespaceObject,
    alt: "",
    style: {
      width: "20px",
      height: "auto",
      paddingBottom: "0px"
    }
  }), /*#__PURE__*/react.createElement("i", {
    className: tabOnLanu ? "lanu_on" : ""
  }, t("Language")), /*#__PURE__*/react.createElement("img", {
    src: icon_xl_namespaceObject,
    alt: "",
    style: {
      width: "10px",
      height: "auto",
      paddingBottom: "0px"
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "m_bpoens"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "/download"
  }, /*#__PURE__*/react.createElement("img", {
    src: down_namespaceObject,
    alt: "",
    style: {
      width: "20px",
      height: "auto",
      paddingBottom: "0px"
    }
  }), /*#__PURE__*/react.createElement("i", null, t("App Download"))))))))));
};
/* harmony default export */ const footerM = (FooterM);
;// ./src/pages/index/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */






















const index_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	position: relative;
	height: 100%;
`;
function Index() {
  const {
    t,
    i18n
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    document.title = t("Crypto Arena - Your Fun Builds Your Fortune");
  }, [i18n.language]);
  return /*#__PURE__*/react.createElement("div", null, !_isMobile() ? /*#__PURE__*/react.createElement(index_FullPageScroller, null, /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm1, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm2, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm3, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm4, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm5, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm6, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm7, null)), /*#__PURE__*/react.createElement(index_CustomStyle, null, /*#__PURE__*/react.createElement(comm8, null))) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(comm1M, null), /*#__PURE__*/react.createElement(comm2M, null), /*#__PURE__*/react.createElement(comm3M, null), /*#__PURE__*/react.createElement(comm4M, null), /*#__PURE__*/react.createElement(comm5M, null), /*#__PURE__*/react.createElement(comm6M, null), /*#__PURE__*/react.createElement(comm7M, null), /*#__PURE__*/react.createElement(comm8M, null), /*#__PURE__*/react.createElement(footerM, null)));
}
/* harmony default export */ const index = (Index);
;// ./public/images/game_bj.png
const game_bj_namespaceObject = __webpack_require__.p + "5b4aae2f37a8ece80ce6.png";
;// ./public/images/games_kuang.png
const games_kuang_namespaceObject = __webpack_require__.p + "b908fff1c23822e377f0.png";
;// ./src/components/game/main.jsx
/* eslint-disable react-hooks/exhaustive-deps */





const main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	width: 100%;
	min-height: 100vh;
	background: url(${game_bj_namespaceObject}) no-repeat;
	background-size: cover;

	.games_pro {
		width: 1256px;
		height: 728px;
		background: url(${games_kuang_namespaceObject}) no-repeat;
		background-size: 100%;
		margin: auto;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -628px;
		margin-top: -364px;
	}


	@media (max-width: 1400px) {
		.header_left {
			gap: 0px;
		}
	}

`;
function Game() {
  const {
    i18n
  } = (0,dist_es/* useTranslation */.Bd)();
  const hostname = window.location.hostname;
  const domain = hostname.split('.').slice(-2).join('.');
  const gameurl = "https://snake." + domain;
  const [gamesUrl, setGamesUrl] = (0,react.useState)(gameurl + "?lang=en");
  (0,react.useEffect)(() => {
    if ((i18n == null ? void 0 : i18n.language) === "zhCN") {
      setGamesUrl(gameurl + "?lang=zh-cn");
    } else if ((i18n == null ? void 0 : i18n.language) === "zhTW") {
      setGamesUrl(gameurl + "?lang=zh");
    } else {
      setGamesUrl(gameurl + "?lang=en");
    }
  }, [i18n.language]);

  // 使用鼠标移动事件触发函数
  const handleMouseOver = () => {
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
;// ./src/pages/games/index.jsx



function Games() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(main, null));
}
/* harmony default export */ const games = (Games);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 4 modules
var empty = __webpack_require__(9977);
;// ./src/components/swap/main.jsx
/* eslint-disable react-hooks/exhaustive-deps */




const swap_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	width: 75%;
    margin: auto;
    min-width: 1100px;

	.swap_tables {
	    border-bottom: 2px solid #282C34;
		span {
			display: inline-block;
			margin: 0 25px;
			padding: 0 5px;
			color: #979CAB;
			font-weight: bold;
			cursor: pointer;
		}
		.on {
			color: #fff;
		    border-bottom: 2px solid #FBBD15;
    		padding-bottom: 15px;
		}
	}
	.swap_conters {
		background: #13161B;
		border-radius: 8px;
		margin-top: 40px;
		min-height: 650px;
	}
	.swap_nodata {
		padding-top: 230px;
	}
	.ant-empty-description {
		color: #fff;
	}
	

	@media (max-width: 750px) {
		width: 95%;
		margin: auto;
		min-width: auto;

		.swap_tables {
			span {
				margin: 0px 10px;
    			padding: 0px;
				font-size: 14px;
			}
		}
		.swap_conters {
			margin-top: 20px;
			min-height: 600px;
		}
		.swap_nodata {
			padding-top: 150px;
		}
	}
`;
function Swap() {
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
  return /*#__PURE__*/react.createElement(swap_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "swap_tables"
  }, /*#__PURE__*/react.createElement("span", {
    className: "on"
  }, t('Market')), /*#__PURE__*/react.createElement("span", null, t('My Ads')), /*#__PURE__*/react.createElement("span", null, t('Pending')), /*#__PURE__*/react.createElement("span", null, t('History'))), /*#__PURE__*/react.createElement("div", {
    className: "swap_conters"
  }, /*#__PURE__*/react.createElement("div", {
    className: "swap_nodata"
  }, /*#__PURE__*/react.createElement(empty/* default */.A, {
    styles: {
      background: "red"
    }
  }))));
}
/* harmony default export */ const swap_main = (Swap);
;// ./src/pages/swap/index.jsx







const swap_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	margin-top: 130px;
	margin-bottom: 100px;

	@media (max-width: 750px) {
		margin-top: 100px;
	}
`;
function swap_Swap() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(swap_CustomStyle, null, /*#__PURE__*/react.createElement(swap_main, null)), !_isMobile() ? /*#__PURE__*/react.createElement(comm8, null) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(footerM, null), /*#__PURE__*/react.createElement(comm8M, null)));
}
/* harmony default export */ const swap = (swap_Swap);
;// ./public/images/download/down_bg_pc.png
const down_bg_pc_namespaceObject = __webpack_require__.p + "6d3bb755620576d020ce.png";
;// ./public/images/download/down_bg_m.png
const down_bg_m_namespaceObject = __webpack_require__.p + "9069b218443534aa8ee7.png";
;// ./public/images/download/TP.png
const TP_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAW7SURBVHic7d1biFR1HMDx726arUU3ukuSdLGMICvpoYdAuhtFZGCIFb0EBRVRISQ9BD1ED0I3CAqKootshFhkkhUWRKkQ3aTEsoeULnRRU1Nre/iv5e6M7vxm/uc/Z5bvBxZxZ87/f9Dvzpw5t+0bGhpCalV/t1dAvcVgFGIwCjEYhRiMQgxGIQajEINRiMEoxGAUYjAKMRiFGIxCDEYhBqMQg1GIwSjEYBRiMAoxGIUYjEIMRiEGoxCDUYjBKMRgFGIwCjEYhRiMQgxGIQajEINRiMEoxGAUYjAKMRiFGIxCDEYhBqMQg1HIhELzXAXcBhwBdPNO0n3Df+4CPgfeBd6scL5pwEzgbOBU4ARgEukHdRewBdgw/LUW+BTYU+H6dKyvwJ3ArwDeqnqSDqwBFgIrM403A7gRuByYFVx2E/AOMAgsy7Q+WZUI5n3g4qonyeBO4PEOlp8N3APMybM6bACeAJ4ivRrVQoltmIMLzJHDY8B1bSw3HVhKeoXKFQukt7DFwHrg5ozjdqREMH8VmCOXQWBy4Pl3A+uAaypZm2Qq8BzwBnBihfO0xE9JI/UD97b43CWkV4C+sZ6YyRzgK+DSQvM1ZTCN5o/x+ABpQ/mGAusy2pHACmBeF+YGDKaZ04Fj9/PYZGA1cH651WnqZdInseIMplEfcNJ+HltF2qdSBy8Bl5We1GCa297key/S/VeW0ZZTeEPYYBr9Dnw/6nvzGXvbphv6qHZPdQODabSKkTvKDgNe6NK6tGImcFepyQym0eJRf3+Sch+d27UYOLzERCWC6aUol5EOZex1CnBTV9Ykpg94qMREJf4zDy0wRw7f0Lhv5YFurEib7qDAv3WJYFYXmKNTy0mfgPY9jDFAb7y67DUBuKXqSUoEsxD4uMA87fgQWABcCWwb9dhceufA6V63Vj1BidMb9roEOI6xD9UPASfTuPHZjhXA04z8wZgAbCUdl/nuAMsOAtdnWIfSppDOq6lEyWAiJpLnHJCHgUVtLNcHbAaOz7AO+1pDeoveCpwFXE3+T2ALSDsZK1HqFM2o0zKNc3Sby00nbyxbSNtDS0d9fxrwKHlfyWZRYTC99JG3pBkZx9oBnEdjLJDeEucCr2Wcb3rGsRoYTHNTM451H+l0ywOZR+NGd7sqPbZkMM0dlWmcncCzLTxvD/BKpjlzrXtTBtPcQKZxviZF04q1meY8KNM4TRlMtSYFntsT+3wMprlc+xrOoPVPW7Mzzbk70zhNGUy1+oEHW3jeVPJdefBLpnGaMpjq3c6B97MMkI5l5dqBtzHTOE0ZTBmDwCOM/Lg+QDqRex1pr28uX2Ycq0Fd9/SOR/eTrnn6jLQz71TSsbXcPqlgzP8YTFn9wLkVjr+bdIppZXxLGl/eJh3YrIzBjC/PVD2BwYwfP9H8AGdWBjN+tLK/p2MGMz5sJp1ZWDmDGR8WlJrIYHrf8+S7P9+YDKa3rafApSX7MpjetQ24qPSkBtObtgMXAj+Xnthges8m4ALSdVXFGUxvWQmcQzrC3RUG0zsWka4e/bWbK2Ew9bcEOJN0FWfXeXpDPe0GXiXdOr5WNzIwmGrtIL2Kt3L1wA/AR6Rf5LGcCi+o74TBVGsd6Vf/zCBdRz2F/+P5h3TC9kbg2+Hn/l1+FWMMploTgB+Hv97r8rpk4UZvtep+M8Uwg1GIwSjEYBRiMAoxGIUYjELqGszETOMcUni50XLdmKg26hrMb5nGafXuT6P9kWn+PzONUxt1vU8vpF85c20Hy+8k3aTnizaWnQJ8ABzTwfxDpPNtX+9gjNqpczCqobq+JammDEYhBqMQg1GIwSjEYBRiMAoxGIUYjEIMRiEGoxCDUYjBKMRgFGIwCjEYhRiMQgxGIQajEINRiMEoxGAUYjAKMRiFGIxCDEYhBqMQg1GIwSjEYBRiMAoxGIUYjEIMRiEGoxCDUYjBKMRgFGIwCvkXirW5IU6Djm4AAAAASUVORK5CYII=";
;// ./public/images/download/OKX.png
const OKX_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/Binance.png
const Binance_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/Trust.png
const Trust_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/ImToken.png
const ImToken_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/Bitget.png
const Bitget_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/Metamask.png
const Metamask_namespaceObject = __webpack_require__.p + "d0b0f262b70b2a8aa913.png";
;// ./public/images/download/TronLink.png
const TronLink_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAApxSURBVHic7Z1/sFVVFcc/7wm+8qFghhQjj4dgYiiZpiWYYQ02TT8kYwqrQY2JMpoyGzNrqJmafok1Zmlo5dg4jamZ01jY6FRjZBgSRBo9QX7IAyJAoh+WBvb6Y53bu5y3z7lnnXvO3fueuz4zZ+Dud87ea9773v1zrXW6hoaGMIysdPs2wGgvTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMocIEY6gwwRgqTDCGChOMoWKUbwNyMAF4OTAp+rcvKusBnvdoVxrdwL+A3cAmYADYDvwBeNajXWraRTAvABYBbwdmR5+rwF5gJfAd4H7PtmSiqw0yUC0FPgS8xLchJbMGuBa427chaYQsmLOAW4DTPdvRam4H3g8859sQF6EKZi7wgG8jPPIY8Drgr74NiROiYN4ErPBtRABsQXrXf3i24zBCE8yrgUd8GxEQA8Apvo2oJ6R9mG7gPt9GBMZ04DbfRtQTkmC+Doz3bUSAXAKc69uIGqEMSccC+30bETCPAOf4NgLC6WGu8m1A4LwGE8xhLPZtQBtwmW8DIAzBnAEc59uINmAucIRvI0IQTBBdbRvQjxy2eiUEwfT5NqCNOMO3ASEIZrpvA9qIE3wbEIJgpuZ8bjVwDzBYoC2hM9a3ASH4w7wo53PPAPOBLuBlyNA2EzgP6bUmAmOKMDAgjvJtQAgbd3uBF+d89g3ALxJ+Ng44DRHPFOBVwDRESD052/PNzcAHfRoQQg/TjGI/TLJgDiDebCtj5eMR8ZyLDIdTgVcAo5uwo1V4/3aHIJhmuBA4HtijeGYv4g5Z7xI5ARnSpiEuoOcgPVHVvfzUtLtgupEu+nNN1vOX6HoUuCMqGw2ciPikTEb2QGYjoupY2l0wAO+jecG4OAg8EV31TEGWtzOROVIfcCoSxVB5qiCYyYg740Mtam9rdNXPjbqAMxkOezkb6YkmUbGVWhUEA/BpsgtmKjLM/ITiHK2HEK//NbHyscgEexYioCnIbm1vQe22nKoIZi7ZJ7/PAucDdwIbgV8jAWWDwAYk0Kwo/gb8PLpqHIsMadMQl9R+4CQC2PbPQgj7MHsoxtPuKuA6xf2fBL7kKH8cEc52YD3wJ2AHMikukz7glQzPiU5HhDWx7p4fA/NKtiOVKglmI3Cy8pkzkaGp0fK5NgF+GPgjw2Gu2yh3b6Qb6X1mIb3ReuBbJbbXkCoJBuD1wC9jZT2kz1XGIs7nr83R3iCwC1iHiGlD9Hl3jrragqoJ5kfAO2JlPcBXkY26n6Y8+w1k57hZDiHCeQLpiR4Ffgs8RQA7tc1SNcE8DxwN/DtWvhD4HvBuhjfmXCxCAuPLYBDYCaxlWExro3/bhqoJBuATwDJH+VPIhPLjwNdSnp8N3FuwTWmsAzYj9q0BnkREpDnuaBlVFMxO3I5GlwG3Rv//AXBxSh3jkWX3+QXapeE/yGptMzKxXh1du5AhzxtVFAzIimJ1rKwXmYzWdl5XIfOdP6fUcz3w0YJta4ZlSA/qjRA87srgU46yZxjuYUBOpNch2/hJXAFcXpxZTTOx8S3lUlXBXIjbKSs+oZ2ArGDemVLXcsSLr+yNuyx4z+RQVcEAvMdR9lh0xbmT9BPvlcAM4DcF2NXWVFkwVySUfz6hfCmyOkrKn/c0soK6qTmz2psqC6YfeKOj/F5G7tPUmAf8HjlVTmIJYc1rWkqVBQPumO1DyCZeEicjw1bakno5cr7zdH7TcnFki9sbQdUF8zbcB4tfafBcL+JcviTlnlVIRMLD+UzLRVcL23JSdcGMQjJSxtnGSGcnF9+MriT2IdEHrZjXrAA+24J2Uqm6YEB8fl3ckPH5JcgfK83VcgnJk+wiWAa8mQCiPKu60xvHtfMLktZ0XMY6NiE7w65leY0LkCV61jqzcCnpc66W0gk9DCR/+29NKHdxErKCirtP1PMAkvVylaLeJLYikQnBiAU6RzAX4+7FblbW0w38ELgm5Z7dyApqubLuelYg0ZhpvZkXOkUwAO91lG1EXC61fJHG3/zLyeeQdSMyX/F+DOCikwTjWi2B2xE8CwuReVHa/OtGJLN51j/+ByjG6680OkkwpwBzHOXfJ/+3+SwkqiAt7drPkAC336Xcszeq45aUe05DJsBe6STBQPK3t5lXzhyHHEpeknLPDiSgzTWMPYSIIS1l/qnRzxfltLEwOk0w83An5XG5dGq5jcYx3pcCV9d9vgnp9dJcJ+YjvdNRiBeeVzpNMEcAH3OUD1DMFv9SJM4p7fd6LbAAuJL0oweQOdDdDJ8heU9Z1ikbd/UM4s7cWYssKILHgYvIH3bbjyz5L0DmQOsQx/BfISEs3uhEwYB757cHcSAvKsn0P5GeJC0WKolarPV9yMtFg6HThqQaLp/f59Dt/DZiDDI8JS3n09iEHDEEJRbo3B4GJHtn/BV505FlctHcQFjRB7np1B4G3HsaA0j6j6L5CBLznTfFbDCEIBhfNrhWSwBfLqm9OUj2hRNzPj+G/OlpCyMEwRz01O4kJBFRnBVIIqAyOIFsgulFDjAXIE5TDyKrpCQH9pYRQgaqA/hLb7oY+WPUM4QE7JeRQHmIkXOkI5FV2ywkqK4/ulzDl9cwWQhDMFvw94KKecALGRlFsJxyBLMdiY+u562Iy0QWvAfThTAkDXhsexRuF871lPM65F2MzBGjeTlHWhx4SwhBMFs8t391QnkZjt0HHGWalVPaiXdLCEEwaz23Pwl3QP4dFJeWtYarhzg+47M7yOfsVSghCGYV8HfPNriW2IeQw78iedJRlhZlWc+D+FtR/p8QBAPwbc/tL8A9NBQ9LLncE7IKpshji9yEIpiyNss0LHSUbUYiBYpic+zzMWQ7FllPOTvQakIRzD7gu55tSHp39hcKqv8g4opZzziyvWXtyoJsaJoQDh9rjAb24/dlDucx8oVcIHOso5usex+SQap+HnI2ktAojbuAdzXZdmGE0sOA/CLf4tmGJJ/f2wuoew8jJ60zGjyzjfTkjS0nJMGAOESnRRaWzXxk5zdOo2wPWXC5TcxMuX8f4jj+3wLaLozQBAOSzfsiT2134/ZbqblHNsNOR1nSS7m2IJGPrc4/05AQBQOSJWoO7n2Lskk6Q9KG1cbZ7yhzuYPeg7zJJH7mFAShCgZkeJqBLLnLcjdwMRn3zu9dNJed2/Vs/fsjNyBOXfMJNEwWwhYMSEbsa5DNrc9QTFaELFzvKGuU6qwRW2OfxyNL6vsRocxosv6WENKyOit9SOjpTOClyF5GL7IsL2KC2IW8tW0RI90e+hgWU9ZfXFd072IOn5Mcg2whBDn0JNGOgjE8EvqQZASGCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVJhgDBUmGEOFCcZQYYIxVPwP2hTkc391B/oAAAAASUVORK5CYII=";
;// ./public/images/download/Bite.png
const Bite_namespaceObject = "data:image/png;base64,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";
;// ./public/images/download/WhaleDao.png
const WhaleDao_namespaceObject = "data:image/png;base64,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";
;// ./src/components/download/main.jsx
/* eslint-disable react-hooks/exhaustive-deps */

















const download_main_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    width: 1100px;
	margin: auto;

	.down_imgs {
		text-align: center;
		margin-bottom: 30px;
	}
	.down_wallet {
	 	width: 1010px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
    	gap: 15px;
		margin-bottom: 15px;
		a {
			display: inline-block;
			width: 324px;
			height: 357px;
			background: #242735;
			border-radius: 40px;
			&:hover {
				background: #333;
			}
		}
	}
	.down_wall_img {
		margin-top: 10px;
		margin-bottom: 10px;
	    text-align: center;
	}
	.down_wall_title {
	    padding: 0 30px;
		em {
			display: block;
			margin-bottom: 5px;
    		font-size: 20px;
			color: #fff;
			font-weight: 700;
		}
		i {
			display: block;
			font-size: 14px;
    		color: #B1B6C6;
			font-weight: 500;
		}
	}
	

	@media (max-width: 750px) {
		width: 95%;

		.down_imgs {
		    margin-bottom: 15px;
			img {
				width: 100%;
			}
		}
		.down_wallet {
			width: 100%;
			gap: 0px;
			a {
				width: 48%;
				height: auto;
				margin-bottom: 15px;
				border-radius: 20px;        
        		padding-bottom: 30px;
			}
			img {
				width: 80px;
			}
		}
		.down_wall_title {
			padding: 0px 15px;
			em {
			    font-size: 14px;
			}
			i {
				font-size: 12px;
			}
		}
	}
`;
function Download() {
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
  return /*#__PURE__*/react.createElement(download_main_CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "down_imgs"
  }, !_isMobile() ? /*#__PURE__*/react.createElement("img", {
    src: down_bg_pc_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: down_bg_m_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wallet"
  }, /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.tokenpocket.pro/en/download/app",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: TP_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "TokenPocket"), /*#__PURE__*/react.createElement("i", null, t('Your secure crypto wallet to explore blockchain')))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://whaledao.app/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: WhaleDao_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "WhaleDAO"), /*#__PURE__*/react.createElement("i", null, t("The app supports all popular features, including a Web3 wallet, community functions, and more — greatly expanding your social circle and information network")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.okx.com/en-sg/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: OKX_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "OKX"), /*#__PURE__*/react.createElement("i", null, t("Faster, better, stronger than your average crypto exchange")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.binance.com/en",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: Binance_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "Binance"), /*#__PURE__*/react.createElement("i", null, "277,023,149", /*#__PURE__*/react.createElement("br", null), t("USERS TRUST US")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://trustwallet.com/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: Trust_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "Trust"), /*#__PURE__*/react.createElement("i", null, t("True crypto ownership. Powerful Web3 experiences")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://token.im/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: ImToken_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "ImToken"), /*#__PURE__*/react.createElement("i", null, t('imToken — A secure, reliable, and easy-to-use digital wallet trusted by over 10 million users.')))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.bitget.com/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: Bitget_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "Bitget"), /*#__PURE__*/react.createElement("i", null, t("Behind Bitget is a group of early adopters who believe in a blockchain-based future.")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://metamask.io/download",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: Metamask_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "Metamask"), /*#__PURE__*/react.createElement("i", null, t("The Leading Crypto Wallet Platform, Blockchain Wallet")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://www.tronlink.org/",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: TronLink_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "TronLink"), /*#__PURE__*/react.createElement("i", null, t("Trusted by over 10,000,000 users worldwide")))), /*#__PURE__*/react.createElement(dist/* NavLink */.k2, {
    to: "https://bitpie.com/",
    target: "_blank"
  }, /*#__PURE__*/react.createElement("div", {
    className: "down_wall_img"
  }, /*#__PURE__*/react.createElement("img", {
    src: Bite_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "down_wall_title"
  }, /*#__PURE__*/react.createElement("em", null, "\u6BD4\u7279\u6D3E"), /*#__PURE__*/react.createElement("i", null, t("Bitpie – A Global Leader in Multi-Chain Wallets | Bitpie"))))));
}
/* harmony default export */ const download_main = (Download);
;// ./src/pages/download/index.jsx







const download_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	margin-top: 130px;
	margin-bottom: 100px;

	@media (max-width: 750px) {
		margin-top: 70px;
	}
`;
function download_Download() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(download_CustomStyle, null, /*#__PURE__*/react.createElement(download_main, null)), !_isMobile() ? /*#__PURE__*/react.createElement(comm8, null) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(footerM, null), /*#__PURE__*/react.createElement(comm8M, null)));
}
/* harmony default export */ const download = (download_Download);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/.store/jssha@3.3.1/node_modules/jssha/dist/sha.mjs
var sha = __webpack_require__(653);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(2505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./src/http/index.js


// import { ApiLogOut } from '../global/action';
// import history from '../router/history';
// console.log(ENV);
const instance = axios_default().create({
  timeout: 30000,
  // baseURL: ENV === 'development' ? '/api' : '/',/* eslint-disable-line*/
  // baseURL: '/',/* eslint-disable-line*/
  baseURL: "" /* eslint-disable-line*/,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    Accept: "application/json;version=3.0;compress=false",
    "content-type": "application/json"
    // 'TM-Header-Token': token
  }
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在拦截器里添加请求头的token
  // console.log(config);

  // const { token } = JSON.parse(sessionStorage.getItem('sso_user_info') || '{}');
  // config.headers['TM-Header-Token'] = token;
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
    // const resp = await ApiLogOut();
    // // console.log(resp);
    // if(resp.success){
    //   // console.log(1111111);
    //   sessionStorage.removeItem('sso_user_info');
    //   history.push(res.path);
    // }
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
// EXTERNAL MODULE: ./node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(8908);
;// ./src/utils/index.ts




const AddressZero = "0x0000000000000000000000000000000000000000";
const axiosUrl = "http://192.168.90.68:8080";
// 测试环境
// export const axiosUrl = "https://sso.queengame.io"
// 正式环境
// export const axiosUrl = "https://sso.cryptoarena.io"

const isAddress = memoize_default()(value => {
  try {
    return (0,lib_esm.getAddress)(value);
  } catch {
    return false;
  }
});
function getContractObj(address, ABI) {
  var _window, _window2;
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (!((_window = window) != null && _window.ethereum)) {
    return;
  }
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider((_window2 = window) == null ? void 0 : _window2.ethereum);
  return new Contract(address, ABI, provider.getSigner());
}
const unique = arr => {
  const res = new Map();
  return arr.filter(a => !res.has(a.symbol) && res.set(a.symbol, 1));
};
const uniqueNeraChain = arr => {
  const res = new Map();
  return arr.filter(a => !res.has(a.neraChainId) && res.set(a.neraChainId, 1));
};
const uniqueChain = arr => {
  const res = new Map();
  return arr.filter(a => !res.has(a.neraChainId) && res.set(a.neraChainId, 1));
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
// EXTERNAL MODULE: ./src/utils/encryption.ts
var encryption = __webpack_require__(4572);
;// ./src/components/login/web3Sign.jsx
/* eslint-disable react-hooks/exhaustive-deps */










const web3Sign_CustomStyle = styled_components_browser_esm/* default */.Ay.div`


	@media (max-width: 1400px) {
		
	}

`;
function Web3Sign() {
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const handleLang = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang === "zh-cn") {
      localStorage.setItem('language', 'zhCN');
      i18n.changeLanguage('zhCN');
    } else if (lang === "zh") {
      localStorage.setItem('language', 'zhTW');
      i18n.changeLanguage('zhTW');
    } else {
      localStorage.setItem('language', 'en');
      i18n.changeLanguage('en');
    }
  };

  // const handleLogin = async (loginForm) => {
  // 	const data = {
  // 		type: 1,
  // 		loginEvmData: loginForm,
  // 	}

  // 	instance.post(`${axiosUrl}/auth/login`, data)
  // 	.then(function (res) {
  // 		if (res.code !== 200) {
  // 			messageApi.open({
  // 				type: 'error',
  // 				content: t("Signature login failed, please refresh the page and try again"),
  // 			});
  // 		}
  // 	})
  // 	.catch(function (error) {
  // 		console.log("web3 sign login error===>", error);
  // 	});
  // }

  const signDataLogin = async () => {
    const time = new Date().getTime();
    let loginForm = {
      address: address,
      randomHex: '',
      time,
      r: '',
      s: '',
      v: ''
    };
    if (ethereumHelper && address) {
      const randomHex = web3.utils.randomHex(32);
      // 拼接钱包地址、随机哈希和时间戳
      const loginInfoStr = address + randomHex + time;
      // 使用SHA-256对登录信息进行哈希处理
      const shaObj = new sha/* default */.A("SHA-256", "TEXT", {
        encoding: "UTF8"
      });
      shaObj.update(loginInfoStr);
      // 获取十六进制格式的哈希值
      const hash = shaObj.getHash("HEX");
      const signature = await web3.eth.personal.sign(hash, address, err => {
        if (err) {
          messageApi.open({
            type: 'error',
            content: t("The user declined to sign, login failed.")
          });
        }
      });
      const signature1 = signature.substring(2);
      const r = `0x${signature1.substring(0, 64)}`;
      const s = `0x${signature1.substring(64, 128)}`;
      const v = `0x${signature1.substring(128, 130)}`;
      loginForm = {
        ...loginForm,
        randomHex,
        r,
        s,
        v
      };
      const _code = (0,encryption/* encode */.lF)(time + "&" + randomHex + "&" + r + "&" + s + "&" + v);
      localStorage.setItem("TOX-COOKIE-CODE_WEB3", _code);
      // sessionStorage.setItem('loginEvmData', JSON.stringify(loginForm));

      // 签名成功后，进行登录
      // handleLogin(loginForm)
      setTimeout(() => {
        window.location.href = "/";
      }, 200);
    }
  };
  const signLogin = async loginForm => {
    if (loginForm) {
      const savedTime = loginForm.time;
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; // 86400000 毫秒 1天有效期

      if (now - savedTime < oneDay) {
        // 无需再次签名
        console.log("无需再次签名");
        setTimeout(() => {
          window.location.href = "/";
        }, 200);
      } else {
        // 已超过24小时，需要重新签名
        console.log("已超过24小时，需要重新签名");
        signDataLogin();
      }
    } else {
      // 无登录记录，需要签名
      console.log("无登录记录，需要签名");
      signDataLogin();
    }
  };
  const handleStorageWeb3 = () => {
    const toxStorageWeb3 = localStorage.getItem("TOX-COOKIE-CODE_WEB3");
    if (toxStorageWeb3) {
      console.log("有保存签名信息");
      const str = (0,encryption/* decode */.D4)(toxStorageWeb3);
      const array = (0,encryption/* signArray */.tu)(str);
      const loginForm = {
        ...array,
        address
      };
      signLogin(loginForm);
    } else {
      console.log("没有保存签名信息的话，进行签名");
      // 没有保存签名信息的话，进行签名
      signDataLogin();
    }
  };
  (0,react.useEffect)(() => {
    if (address) {
      handleStorageWeb3();
    }
  }, [address]);
  (0,react.useEffect)(() => {
    handleLang();
    connectWallet();
  }, []);
  return /*#__PURE__*/react.createElement(web3Sign_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: ""
  }, /*#__PURE__*/react.createElement("div", null, "web3"), isConnected ? /*#__PURE__*/react.createElement("em", null, address ? `${address.substring(0, 6)}...${address.substr(-4)}` : '') : /*#__PURE__*/react.createElement("em", {
    onClick: () => connectWallet()
  }, t('Connect'))));
}
/* harmony default export */ const web3Sign = (Web3Sign);
;// ./src/pages/login/index.jsx



function Login() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(web3Sign, null));
}
/* harmony default export */ const login = (Login);
// EXTERNAL MODULE: ./node_modules/@tonconnect/ui-react/lib/index.mjs + 3 modules
var lib = __webpack_require__(5646);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var core_dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./node_modules/tweetnacl/nacl-fast.js
var nacl_fast = __webpack_require__(1328);
// EXTERNAL MODULE: ./node_modules/js-sha256/src/sha256.js
var sha256 = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@ton/crypto/dist/index.js
var crypto_dist = __webpack_require__(5269);
;// ./src/components/telegramLogin/telegramSign.jsx
/* eslint-disable react-hooks/exhaustive-deps */












function TelegramSign() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(lib/* TonConnectUIProvider */.Nl, {
    manifestUrl: "https://cryptoarena.io/tonconnect-manifest.json"
  }, /*#__PURE__*/react.createElement(WalletComponent, null)));
}
function WalletComponent() {
  const {
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const [tonConnectUi] = (0,lib/* useTonConnectUI */.Lg)();
  const wallet = (0,lib/* useTonWallet */.c5)();
  const [signedData, setSignedData] = (0,react.useState)(null);
  const [nonBounceableAddress, setNonBounceableAddress] = (0,react.useState)();
  const [publicKey, setPublicKey] = (0,react.useState)();
  // const [randomHex, setRandomHex] = useState(web3.utils.randomHex(32))
  const [randomHex, setRandomHex] = (0,react.useState)("0x340c95e43cf212c3c6df582f0731db870fff3b09123010e6e5c030306b904b1d");
  console.log("tonConnectUi===>", tonConnectUi);
  console.log("wallet===>", wallet);
  const handleConnect = async () => {
    try {
      await tonConnectUi.connectWallet();
    } catch (error) {
      console.error('Connection error:', error);
    }
  };
  const handleDisconnect = async () => {
    await tonConnectUi.disconnect();
  };
  const handleLogin = async () => {
    const data = {
      type: 2,
      loginTonData: {
        signatureHex: sessionStorage.getItem('signature'),
        publicKey: publicKey,
        randomHex: randomHex,
        timestamp: sessionStorage.getItem('timestamp'),
        domain: sessionStorage.getItem('domain'),
        nonBounceableAddress: wallet.account.address
        // nonBounceableAddress: nonBounceableAddress,
      }
    };
    console.log("data===>", data);
    http.post(`${axiosUrl}/auth/login`, data).then(function (res) {
      console.log("res===>", res);
      if (res.code === 200) {
        alert("登录成功");
      }
    }).catch(function (error) {
      console.log("sign login error===>", error);
    });
  };
  const handleSign = address => {
    if (address) {
      setTimeout(() => {
        console.log("publicKey===>", publicKey);
        console.log("randomHex===>", randomHex);
        // 拼接钱包地址、随机哈希
        let loginInfoStr = publicKey + randomHex;
        // 使用SHA-256对登录信息进行哈希处理
        const shaObj = new sha/* default */.A("SHA-256", "TEXT", {
          encoding: "UTF8"
        });
        shaObj.update(loginInfoStr);
        // 获取十六进制格式的哈希值
        const hash = shaObj.getHash("HEX");
        // console.log("loginInfoStr===>", loginInfoStr)
        console.log("hash===>", hash);
        // return

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
          alert("签名成功");
          console.log(res);
          setSignedData(res);
          handleLogin();
          setTimeout(() => {
            // window.location.href = "https://9f72-222-67-156-75.ngrok-free.app"
          }, 300);
        });
      }, 200);
    }
  };
  const handleAddress = async account => {
    if (account) {
      const address = core_dist.Address.parse(account.address);

      // Non-bounceable 地址（UQ 开头）
      const nonBounceable = address.toString({
        bounceable: false,
        urlSafe: false
      });
      setNonBounceableAddress(nonBounceable);
    }
  };
  const handlePublicKey = async account => {
    if (account) {
      const publicKey = account == null ? void 0 : account.publicKey;
      setPublicKey(publicKey);
    }
  };
  (0,react.useEffect)(() => {
    handleAddress(wallet && wallet.account);
    handlePublicKey(wallet && wallet.account);
  }, [wallet]);
  (0,react.useEffect)(() => {
    if (signedData != null && signedData.signature) {
      sessionStorage.setItem('signature', signedData == null ? void 0 : signedData.signature);
      sessionStorage.setItem('address', signedData == null ? void 0 : signedData.address);
      sessionStorage.setItem('timestamp', signedData == null ? void 0 : signedData.timestamp);
      sessionStorage.setItem('domain', signedData == null ? void 0 : signedData.domain);
    }
  }, [signedData]);
  return /*#__PURE__*/react.createElement("div", {
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/react.createElement("div", null, "Telegram"), wallet ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", null, "address: ", wallet.account.address), /*#__PURE__*/react.createElement("div", null, "nonBounceableAddress: ", nonBounceableAddress), /*#__PURE__*/react.createElement("div", null, "publicKey: ", publicKey), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "30px"
    }
  }, signedData ? /*#__PURE__*/react.createElement("div", null, "Sign data:", /*#__PURE__*/react.createElement("div", null, "signature:", /*#__PURE__*/react.createElement("p", {
    style: {
      wordBreak: "break-all",
      fontSize: "12px"
    }
  }, signedData == null ? void 0 : signedData.signature)), /*#__PURE__*/react.createElement("div", null, "address:", /*#__PURE__*/react.createElement("p", {
    style: {
      wordBreak: "break-all",
      fontSize: "12px"
    }
  }, signedData == null ? void 0 : signedData.address)), /*#__PURE__*/react.createElement("div", null, "timestamp:", /*#__PURE__*/react.createElement("p", null, signedData == null ? void 0 : signedData.timestamp)), /*#__PURE__*/react.createElement("div", null, "domain:", /*#__PURE__*/react.createElement("p", null, signedData == null ? void 0 : signedData.domain))) : /*#__PURE__*/react.createElement("button", {
    onClick: handleSign
  }, "Sign")), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/react.createElement("button", {
    onClick: handleDisconnect
  }, "Disconnect")), /*#__PURE__*/react.createElement("div", {
    onClick: handleLogin
  }, "\u63A5\u53E3\u767B\u5F55")) : /*#__PURE__*/react.createElement("button", {
    onClick: handleConnect
  }, "Connect Wallet"), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: "50px"
    }
  }, /*#__PURE__*/react.createElement(lib/* TonConnectButton */.MJ, null)));
}
/* harmony default export */ const telegramSign = (TelegramSign);
;// ./src/pages/telegramLogin/index.jsx



function TelegramLogin() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(telegramSign, null));
}
/* harmony default export */ const telegramLogin = (TelegramLogin);
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
  }, /*#__PURE__*/react.createElement(dist/* HashRouter */.I9, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/cryptoSnake",
    element: /*#__PURE__*/react.createElement(games, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/diamondswap",
    element: /*#__PURE__*/react.createElement(swap, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/download",
    element: /*#__PURE__*/react.createElement(download, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/login",
    element: /*#__PURE__*/react.createElement(login, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/telegramLogin",
    element: /*#__PURE__*/react.createElement(telegramLogin, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
// EXTERNAL MODULE: ./public/css/style.css
var style = __webpack_require__(9823);
// EXTERNAL MODULE: ./public/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8388);
// EXTERNAL MODULE: ./public/css/meanmenu.min.css
var meanmenu_min = __webpack_require__(3234);
// EXTERNAL MODULE: ./public/css/responsive.css
var responsive = __webpack_require__(5144);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(7566);
;// ./src/index.jsx









if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n); // Fallback to Number (inaccurate for big integers!)
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 9823:
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [746], () => (__webpack_require__(8737)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;