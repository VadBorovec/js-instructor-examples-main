// Скрипт на змін кольору фону

const colors = ['teal', 'indigo', 'tomato', 'maroon', 'plum', 'cyan', 'violet', 'skyblue', 'orange', 'aquamarine'];
        const max = colors.length - 1;
        const min = 0;

        const index = Math.round(Math.random() * (max - min) + min);
        const color = colors[index];

        console.log(color);

        document.body.style.backgroundColor = color;