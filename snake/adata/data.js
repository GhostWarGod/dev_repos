/*
 * @Descripttion:
 * @version:
 * @Author: hjy
 * @Date: 2025-05-29 11:25:02
 * @LastEditors: hjy
 * @LastEditTime: 2025-06-05 10:29:04
 */
window.v_type = 1; //0=QA；1=S0; 2=SN;

//服务器path


window.server1 = "https://sso.queengame.io/auth/login"; //测试环境
window.wsServer1 = "wss://wss-hall.queengame.io"; //测试环境


var nodeData = [

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
    }
];
