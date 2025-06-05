/*
 * @Descripttion:
 * @version:
 * @Author: hjy
 * @Date: 2025-05-29 11:25:02
 * @LastEditors: hjy
 * @LastEditTime: 2025-06-05 16:54:50
 */
window.v_type = 1; //0=QA；1=S0; 2=SN;

//服务器path
window.server2 = "https://sso.queenarena.io"; //正式环境
window.wsServer2 = "wss://wss-snake.queenarena.io"; //正式环境
// window.address2 = "https://snake.queenarena.io"; //外网-sn-web地址 (线上正式)

window.server1 = "https://sso.queengame.io"; //测试环境
window.wsServer1 = "wss://wss-hall.queengame.io"; //测试环境
// window.address1 = "https://snake.queengame.io"; //外网-s0-web地址 (线上测试)

window.server0 = "http://13.250.6.10:7055"; //测试环境
window.wsServer0 = "ws://13.250.6.10:7055"; //国服-qa-徐服务器

var nodeData = [
    {
        id: 3001,
        socketUrl: "ws://13.250.6.10:7056",
        serverUrl: "ws://13.250.6.10:7055",
        open: 1,
        area: 1010,
        name: 1010,
        url: "https://wss-room-sg.queengame.io/ping",
        type: 0,
        point: "1_00"
    },
    {
        id: 1001,
        socketUrl: "wss://wss-room-sg.queengame.io",
        serverUrl: "wss://wss-hall.queengame.io",
        open: 1,
        area: 1010,
        name: 1010,
        url: "https://wss-room-sg.queengame.io/ping",
        type: 1,
        point: "1_00"
    },
    {
        id: 1002,
        socketUrl: "wss://wss-room-us.queengame.io",
        serverUrl: "wss://wss-hall.queengame.io",
        open: 0,
        area: 1016,
        name: 1016,
        url: "https://wss-room-us.queengame.io/ping",
        type: 1,
        point: "2_00"
    },
    {
        id: 1003,
        socketUrl: "wss://wss-room-jp.queengame.io",
        serverUrl: "wss://wss-hall.queengame.io",
        open: 0,
        area: 1018,
        name: 1018,
        url: "https://wss-room-jp.queengame.io/ping",
        type: 1,
        point: "3_00"
    },
    { area: 1010, id: 2001, name: 1010, open: 0, type: 2 },
    { area: 1013, id: 2002, name: 1001, open: 0, type: 2 },
    { area: 1200, id: 2003, name: 1002, open: 0, type: 2 },
    { area: 1201, id: 2004, name: 1003, open: 0, type: 2 },
    { area: 1016, id: 2005, name: 1004, open: 0, type: 2 },
    { area: 1202, id: 2006, name: 1008, open: 0, type: 2 },
    { area: 1202, id: 2007, name: 1011, open: 0, type: 2 },
    { area: 1202, id: 2008, name: 1013, open: 0, type: 2 },
    { area: 1202, id: 2009, name: 1016, open: 0, type: 2 },
    { area: 1202, id: 2010, name: 1017, open: 0, type: 2 },
    { area: 1202, id: 2011, name: 1018, open: 0, type: 2 }
];
