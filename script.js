// MODO ESCURO
const darkToggle = document.querySelector('.dark-toggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// AMPLIAR FOTO
const profilePic = document.querySelector('.profile-pic');
profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('enlarged');
});
