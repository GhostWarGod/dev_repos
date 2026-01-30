// 确保Buffer在全局可用
var global = global || window;
var Buffer = Buffer || [];
if (typeof window !== 'undefined') {
    window.Buffer = window.Buffer || [];
    window.global = window.global || window;
} 