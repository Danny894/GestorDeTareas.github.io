document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;

    if (title.trim() === '') return;

    const task = document.createElement('div');
    task.classList.add('task-item');
    task.innerHTML = `
        <h4>${title}</h4>
        <p>${desc}</p>
        <button class="move-progress">Mover a En Progreso</button>
    `;
    document.getElementById('pending-tasks').appendChild(task);

    document.getElementById('task-form').reset();

    task.querySelector('.move-progress').addEventListener('click', function() {
        document.getElementById('progress-tasks').appendChild(task);
        this.remove(); 
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Mover a Completado';
        completeBtn.classList.add('move-complete');
        task.appendChild(completeBtn);

        completeBtn.addEventListener('click', function() {
            document.getElementById('completed-tasks').appendChild(task);
            this.remove(); 
        });
    });
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#fff');
        this.textContent = 'Modo Claro';
    } else {
        document.documentElement.style.setProperty('--background-color', '#f5f5f5');
        document.documentElement.style.setProperty('--text-color', '#333');
        this.textContent = 'Modo Oscuro';
    }
});