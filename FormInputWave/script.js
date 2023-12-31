const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
                        .map((letter, id) => `<span style="transition-delay:${id * 50}ms">${letter}</span>`)
                            .join('');
});