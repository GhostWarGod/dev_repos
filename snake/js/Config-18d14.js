/*
 * @Descripttion:
 * @version:
 * @Author: hjy
 * @Date: 2025-04-22 14:02:12
 * @LastEditors: hjy
 * @LastEditTime: 2025-06-06 18:19:44
 */
var game_version = "V_0606_03";

//Buffer
// var Buffer_1 = require("buffer");
// Object.defineProperty(exports, "Buffer", { enumerable: true, get: function () { return Buffer_1.Buffer; } });
// var Buffer = Buffer_1.Buffer;
// window.Buffer = Buffer;

function getGameVersion() {
    return game_version;
}

function getVType() {
    return window.v_type;
}

function getServer() {
    if (v_type == 2) {
        return window.server2;
    } else if (v_type == 1) {
        return window.server1;
    } else {
        return window.server0;
    }
}
function getWSServer() {
    if (getVType() == 2) {
        return window.wsServer2;
    } else if (getVType() == 1) {
        return window.wsServer1;
    } else {
        return window.wsServer0;
    }
}

function getNodeData() {
    return nodeData;
}
var requestTime = 4000; //请求超过4000毫秒，记录
function getRequestTime() {
    return requestTime;
}

var loginTime = 5000; //登录超过5000毫秒，记录
function getLoginTime() {
    return loginTime;
}

// const ClipboardJS = require('clipboard');

function doCopy(str, needLog = true) {
    if (needLog) console.log("doCopy ======" + str);

    var clipboard = new ClipboardJS(".btn-copy", {
        text: function (trigger) {
            return str;
        }
    });

    $(".btn-copy").trigger("click");
}

function doChatMax() {
    LiveChatWidget.call("maximize");
    console.log("doChatMax");
}

function showChatBtn(isShow, address, name) {
    // return;
    // initLiveChat();

    // 获取 chat-widget-container 元素
    var chatWidget = document.getElementById("chat-widget-container");
    if (chatWidget) {
        if (isShow) {
            if (address) {
                LiveChatWidget.call("set_customer_name", address);
            }
            if (name) {
                LiveChatWidget.call("set_customer_email", name);
            }

            chatWidget.style.display = "block";
            fixedIframe();
        } else {
            chatWidget.style.display = "none";
        }
    } else {
        console.log("chat-widget-container is null");
    }
}

function fixedIframe() {
    // 获取 iframe 元素
    const iframe = document.getElementById("chat-widget-minimized");
    if (iframe) {
        // 检查 iframe 的 display 属性是否为 none
        const iframeStyle = window.getComputedStyle(iframe);
        if (iframeStyle.display !== "none") {
            // 访问 iframe 的内容文档
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

            // 找到 role="main" 的 div 元素
            const mainDiv = iframeDocument.querySelector('div[role="main"]');

            // 获取该 div 的高度
            if (mainDiv) {
                const height = mainDiv.offsetHeight;
                const width = mainDiv.offsetWidth;
                console.log("高度:", height, "宽度:", width);

                // 设置外部 div 的高度
                const containerDiv = document.getElementById("chat-widget-container");
                if (containerDiv) {
                    containerDiv.style.height = height + "px";
                    containerDiv.style.width = width + "px";
                }
            } else {
                console.log('未找到 role="main" 的 div 元素');
            }
        } else {
            console.log("iframe 不可见");
        }
    } else {
        console.log("iframe 不存在");
    }
}

var isInitLiveChat = false;

function initLiveChat() {
    if (!isInitLiveChat) {
        //<!-- Start of LiveChat (www.livechat.com) code -->

        window.__lc = window.__lc || {};
        window.__lc.license = 18239331; //正式版
        // window.__lc.license = 18239421;//测试版
        window.__lc.integration_name = "manual_onboarding";
        window.__lc.product_name = "livechat";
        (function (n, t, c) {
            function i(n) {
                return e._h ? e._h.apply(null, n) : e._q.push(n);
            }
            var e = {
                _q: [],
                _h: null,
                _v: "2.0",
                on: function () {
                    i(["on", c.call(arguments)]);
                },
                once: function () {
                    i(["once", c.call(arguments)]);
                },
                off: function () {
                    i(["off", c.call(arguments)]);
                },
                get: function () {
                    if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
                    return i(["get", c.call(arguments)]);
                },
                call: function () {
                    i(["call", c.call(arguments)]);
                },
                init: function () {
                    var n = t.createElement("script");
                    (n.async = !0), (n.type = "text/javascript"), (n.src = "https://cdn.livechatinc.com/tracking.js"), t.head.appendChild(n);
                }
            };
            !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
        })(window, document, [].slice);

        isInitLiveChat = true;
    }
}

var logStore = [];
var clientLogStore = [];
var serverLogStore = [];

function initEruda(lineNum) {
    if (lineNum === undefined) {
        lineNum = 100;
    }
    logStore = [];
    // 动态加载 eruda
    var script = document.createElement("script");
    script.src = "https://eruda.liriliri.io/eruda.js";
    // script.src = "https://cdn.jsdelivr.net/npm/eruda";
    script.onload = function () {
        // 初始化 eruda
        eruda.init();
        var erudaConsole = eruda.get("console");

        // 创建日志存储数组
        // window.logStore = JSON.parse(localStorage.getItem('erudaLogs') || '[]');

        // 监听所有类型的日志事件
        const logTypes = ["log", "error", "warn", "debug", "table"];
        // const logTypes = ['log', 'error', 'warn', 'info', 'debug', 'table'];

        logTypes.forEach((type) => {
            erudaConsole.on(type, function (...args) {
                // 构造日志对象
                const logEntry = {
                    type: type,
                    timestamp: formatDate(new Date()),
                    data: args.map((arg) => {
                        // 处理 Error 对象
                        if (arg instanceof Error) {
                            return {
                                __type: "Error",
                                message: arg.message,
                                stack: arg.stack
                            };
                        }
                        return arg;
                    })
                };
                if (type == "debug") {
                    clientLogStore.push(logEntry);
                } else if (type == "table") {
                    serverLogStore.push(logEntry);
                }
                // 添加到存储
                logStore.push(logEntry);

                // 保存到 localStorage（可替换为服务器发送）
                // localStorage.setItem('erudaLogs', JSON.stringify(logStore));

                // 可选：控制台保留最近100条
                if (logStore.length > lineNum) {
                    logStore.shift();
                }
            });
        });

        // 可选：重写原生 console 方法确保捕获所有日志
        // logTypes.forEach(type => {
        //     const native = console[type];
        //     console[type] = function(...args) {
        //         native.apply(console, args);
        //         erudaConsole[type].apply(erudaConsole, args);
        //     };
        // });
    };
    document.head.appendChild(script);
    this.initTriggerArea();
}

const formatDate = (date) => {
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1).toString().padStart(2, "0");
    const D = date.getDate().toString().padStart(2, "0");
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    const s = date.getSeconds().toString().padStart(2, "0");
    const ms = date.getMilliseconds().toString().padStart(3, "0");
    return `${Y}-${M}-${D} ${h}:${m}:${s} ${ms}`;
};

function initTriggerArea() {
    // 创建触发区域
    const triggerArea = document.createElement("div");
    triggerArea.innerHTML = "复制客户端日志"; // 添加文字提示
    Object.assign(triggerArea.style, {
        position: "fixed",
        left: "50%",
        top: "0",
        width: "40px",
        height: "40px",
        zIndex: "99999",
        backgroundColor: "rgba(255,165,0,0.8)", // 半透明橙色背景
        cursor: "pointer", // 桌面端显示手型指针
        touchAction: "manipulation" // 优化触摸行为
    });
    document.body.appendChild(triggerArea);
    // 创建触发区域
    const triggerArea1 = document.createElement("div");
    triggerArea1.innerHTML = "复制服务器日志"; // 添加文字提示
    Object.assign(triggerArea1.style, {
        position: "fixed",
        left: "90%",
        top: "0",
        width: "40px",
        height: "40px",
        zIndex: "99999",
        backgroundColor: "rgba(255,165,0,0.8)", // 半透明橙色背景
        cursor: "pointer", // 桌面端显示手型指针
        touchAction: "manipulation" // 优化触摸行为
    });
    document.body.appendChild(triggerArea1);

    // 通用点击处理
    function handleClick(e) {
        e.preventDefault();

        // 执行复制操作
        const logs = clientLogStore;
        copyLogsToClipboard1(logs);
    }
    // 通用点击处理
    function handleClick1(e) {
        e.preventDefault();

        // 执行复制操作
        const logs = serverLogStore;
        copyLogsToClipboard1(logs);
    }

    // 添加样式动画
    const style = document.createElement("style");
    style.textContent = `
        @keyframes ripple {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(15); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // 事件监听（同时兼容移动端和桌面端）
    triggerArea.addEventListener("click", handleClick);
    triggerArea.addEventListener("touchend", handleClick);
    triggerArea1.addEventListener("click", handleClick1);
    triggerArea1.addEventListener("touchend", handleClick1);

    // 复制日志到剪贴板（保持原有实现）
    async function copyLogsToClipboard(logs) {
        try {
            // const logs = window.logStore || [];
            const logText = logs
                .map((log) => {
                    return `[${log.timestamp}] ${log.type.toUpperCase()}: ${log.data
                        .map((item) => {
                            if (item && item.__type === "Error") {
                                return `Error: ${item.message}\n${item.stack}`;
                            }
                            return typeof item === "object"
                                ? JSON.stringify(item)
                                : // ? JSON.stringify(item, null, 2)
                                  item;
                        })
                        .join(" ")}`;
                })
                .join("\n");

            doCopy(logText, false);
            showFeedback("✅ 日志已复制到剪贴板");
        } catch (err) {
            showFeedback("❌ 复制失败: " + err.message);
        }
    }
    // 复制日志到剪贴板（保持原有实现）
    async function copyLogsToClipboard1(logs) {
        try {
            // const logs = window.logStore || [];
            const logText = logs
                .map((log) => {
                    // return `[${log.timestamp}] ${log.type.toUpperCase()}: ${log.data
                    return `${log.data
                        .map((item) => {
                            if (item && item.__type === "Error") {
                                return `Error: ${item.message}\n${item.stack}`;
                            }
                            return typeof item === "object"
                                ? JSON.stringify(item)
                                : // ? JSON.stringify(item, null, 2)
                                  item;
                        })
                        .join(" ")}`;
                })
                .join("\n");

            doCopy(logText, false);
            showFeedback("✅ 日志已复制到剪贴板");
        } catch (err) {
            showFeedback("❌ 复制失败: " + err.message);
        }
    }

    // 显示反馈提示（优化样式）
    function showFeedback(message) {
        const tip = document.createElement("div");
        Object.assign(tip.style, {
            position: "fixed",
            left: "10px",
            top: "110px",
            backgroundColor: "#444",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            zIndex: "999999",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            animation: "fadeInOut 2s ease-out"
        });
        tip.textContent = message;
        document.body.appendChild(tip);

        // 添加动画样式
        const animationStyle = document.createElement("style");
        animationStyle.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(10px); }
                15% { opacity: 1; transform: translateY(0); }
                85% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(animationStyle);

        setTimeout(() => {
            tip.remove();
            animationStyle.remove();
        }, 2000);
    }
}

function getPayApi(requestUri, apiKey, secretKey, walletAddress, chain, token, uid, _callBack) {
    const httpMethod = "post";
    const requestTimeStamp = Math.floor(Date.now() / 1000);

    const rawString = `${apiKey}${httpMethod}${requestUri}${requestTimeStamp}`;
    const lowercaseString = rawString.toLowerCase();
    const signature = CryptoJS.HmacSHA256(lowercaseString, secretKey).toString(CryptoJS.enc.Base64);
    const xSignature = `${apiKey}:${signature}:${requestTimeStamp}`;

    // Prepare the data in x-www-form-urlencoded format
    const formData = new URLSearchParams();
    formData.append("walletAddress", walletAddress);
    formData.append("chain", chain);
    formData.append("token", token);
    formData.append("uid", uid);

    fetch(requestUri, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-api-key": apiKey,
            "x-signature": xSignature
        },
        body: formData.toString() // Send the form data as the body
    })
        .then((response) => response.json())
        .then((data) => {
            if (_callBack) {
                _callBack(data);
            }
        })
        .catch((error) => console.error("Error:", error));
}

//====================================================
function decodeCharCode(params) {
    b = eval("String.fromCharCode(" + params + ")");
    return b;
}
function compressByt(params) {
    var deflate = new Zlib.Deflate(params);
    var compressed = deflate.compress();
    return compressed;
}
function decompressByt(params) {
    var inflate = new Zlib.Inflate(params);
    var plain = inflate.decompress();

    return plain;
}
function MD5Compress(params) {
    var _md5Str = hex_md5(params);
    return _md5Str;
}
