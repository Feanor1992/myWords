let editor = document.getElementById('editor');

//checking if there is text in local storage
if (localStorage.getItem('text_in_editor') !== null) {
    editor.innerHTML = localStorage.getItem('text_in_editor');
}

document.addEventListener('keydown', function (e) { 
    localStorage.setItem('text_in_editor', editor.innerHTML);
});