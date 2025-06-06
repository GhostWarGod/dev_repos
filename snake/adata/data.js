/*
 * @Descripttion:
 * @version:
 * @Author: hjy
 * @Date: 2025-05-29 11:25:02
 * @LastEditors: hjy
 * @LastEditTime: 2025-06-06 16:58:41
 */
window.v_type = 1; //0=QA；1=S0; 2=SN;

//服务器path
window.server2 = "https://sso.cryptoarena.io"; //正式环境
window.wsServer2 = "wss://wss-hall-1.cryptoarena.io"; //正式环境
// window.address2 = "https://snake.cryptoarena.io; //外网-sn-web地址 (线上正式)

window.server1 = "https://sso.queengame.io"; //测试环境
window.wsServer1 = "wss://wss-hall-1.queengame.io"; //测试环境
// window.address1 = "https://snake.queengame.io"; //外网-s0-web地址 (线上测试)

window.server0 = "http://13.250.6.10:7055"; //测试环境
window.wsServer0 = "ws://13.250.6.10:7055"; //国服-qa-徐服务器

var nodeData = [
    {
        area: 1010,
        open: 1,
        point: "1_00",
        socketUrl: "ws://13.250.6.10:7056",
        id: 3001,
        name: 1010,
        url: "https://wss-room-sg.queengame.io",
        type: 0
    },
    {
        area: 1010,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-sg.queengame.io",
        id: 1001,
        name: 1010,
        url: "https://wss-room-sg.queengame.io",
        type: 1
    },
    {
        area: 1016,
        open: 0,
        point: "2_00",
        socketUrl: "wss://wss-room-us.queengame.io",
        id: 1002,
        name: 1016,
        url: "https://wss-room-us.queengame.io",
        type: 1
    },
    {
        area: 1018,
        open: 0,
        point: "3_00",
        socketUrl: "wss://wss-room-jp.queengame.io",
        id: 1003,
        name: 1018,
        url: "https://wss-room-jp.queengame.io",
        type: 1
    },
    {
        area: 1010,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-sg-01.cryptoarena.io",
        id: 2001,
        name: 1010,
        url: "https://wss-room-sg-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1011,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-camb-01.cryptoarena.io",
        id: 2002,
        name: 1011,
        url: "https://wss-room-camb-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1018,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-jp-01.cryptoarena.io",
        id: 2003,
        name: 1018,
        url: "https://wss-room-jp-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1013,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-kr-01.cryptoarena.io",
        id: 2004,
        name: 1013,
        url: "https://wss-room-kr-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1019,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-fr-01.cryptoarena.io",
        id: 2005,
        name: 1019,
        url: "https://wss-room-fr-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1020,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-india-01.cryptoarena.io",
        id: 2006,
        name: 1020,
        url: "https://wss-room-india-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1002,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-thai-01.cryptoarena.io",
        id: 2007,
        name: 1002,
        url: "https://wss-room-thai-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1008,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-mala-01.cryptoarena.io",
        id: 2008,
        name: 1008,
        url: "https://wss-room-mala-01.cryptoarena.io",
        type: 2
    },
    {
        area: 1017,
        open: 1,
        point: "1_00",
        socketUrl: "wss://wss-room-uae-01.cryptoarena.io",
        id: 2009,
        name: 1017,
        url: "https://wss-room-uae-01.cryptoarena.io",
        type: 2
    }
];
