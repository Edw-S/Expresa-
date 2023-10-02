var defaultThreads = [
    {
        id: 1,
        title: "Hilo 1",
        author: "Edwar",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Luis",
                date: Date.now(),
                content: "Hola, cómo están todos?"
            },
            {
                author: "Samuel",
                date: Date.now(),
                content: "Hola Luis!"
            }
        ]
    },
    {
        id: 2,
        title: "Hilo 2",
        author: "Edwar",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Samuel",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Felipe",
                date: Date.now(),
                content: "qué"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}