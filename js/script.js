const $form = document.getElementById('form');
const $content = document.getElementById('content');
const $list = document.getElementById('list');

$form.addEventListener('submit', function(event) {
    event.preventDefault();
    const $todo = document.getElementById('todo');
    if ($todo.value != '') {
        let $li = document.createElement('li');
        $li.innerHTML = $todo.value;
        $list.insertBefore($li, $list.firstChild);
        $todo.value = '';
    }

    if ($list.innerHTML != '') {
        $content.innerHTML = '';
        $content.classList.remove('content');
    }
}); 

$list.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className == 'complete') {
        let elParent = target.parentNode;
        elParent.removeChild(target);
    } else {
        target.className = 'complete';
    }

    if ($list.innerHTML != '') {
        $content.innerHTML = '';
        $content.classList.remove('content');
    } else {
        $content.innerHTML = 'There are no events yet';
        $content.classList.add('content');
    }
});
