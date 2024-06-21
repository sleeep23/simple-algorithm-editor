require.config({ paths: { 'vs': 'monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
    window.editor = monaco.editor.create(document.getElementById('editorContainer'), {
        value: '/* 매개변수의 형태는 작성한 input 칸의 오브젝트의 구조에 따릅니다\n 예를 들어,\n { "a": 1, "b": 2 }\n 이라는 오브젝트를 받는 함수를 작성한다면,\n function solve(input) {\n    return input.a + input.b;\n }\n 와 같이 작성하면 됩니다.*/\nfunction solve(input) {\n    // 여기에 코드를 작성하세요.\n}',
        language: 'javascript'
    });
});

window.addEventListener('resize', function() {
    window.editor.layout();
});

const originalConsoleLog = console.log;

console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    const output = document.getElementById('output');
    const message = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' ');
    output.textContent += message + '\n';
    return args[0];
};