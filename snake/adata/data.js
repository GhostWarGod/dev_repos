var v_type = 1;

//服务器path

var wsServer1 = "wss://wss-hall.queengame.io"; //测试环境
var address1 = "https://snake.queengame.io"; //外网-s0-web地址 (线上测试)


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
