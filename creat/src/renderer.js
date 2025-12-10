document.addEventListener("DOMContentLoaded", () => {
    console.log("Renderer loaded");

    document.getElementById('btn_pass_gen')
        .addEventListener('click', () => changeSection('password_generator'));

    document.getElementById('btn_pass_hash')
        .addEventListener('click', () => changeSection('password_hashing'));
});

function changeSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    console.log(`Switched to section: ${id}`);
}
