function runCode() {
    const code = window.editor.getValue();
    const output = document.getElementById('output');
    output.textContent = '';

    // Retrieve test cases
    const testCases = document.querySelectorAll('.testCase');

    testCases.forEach((testCase, index) => {
        const input = testCase.querySelector('.input').value;
        const expectedOutput = testCase.querySelector('.expectedOutput').value;

        // Execute the algorithm code with the provided input
        try {
            const func = new Function('input', code + '; return solve(input);');
            const actualOutput = func(JSON.parse(input));
            const result = actualOutput.toString() === expectedOutput.trim() ? 'Pass' : `Fail (Expected: ${expectedOutput.trim()}, Got: ${actualOutput})`;

            output.textContent += `Test Case ${index + 1}: ${result}\n`;
        } catch (error) {
            output.textContent += `Test Case ${index + 1}: Error (${error.message})\n`;
        }
    });

    // Execute just the code
    // try {
    //     const result = eval(code);
    //     if (result === undefined) {
    //         output.textContent = 'Code ran successfully, but did not return a value.';
    //     } else {
    //         output.textContent = result;
    //     }
    // } catch (error) {
    //     output.textContent = error;
    //     console.error('Execution error:', error);
    // }
}