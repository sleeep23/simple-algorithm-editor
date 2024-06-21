function saveFile() {
    const code = document.getElementById('editorContainer').innerText;
    const blob = new Blob([code], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const saveLink = document.getElementById('saveLink');
    saveLink.href = url;
    saveLink.style.display = 'inline';
    saveLink.click();
    URL.revokeObjectURL(url);
}