const {
    addBookHandler,
    getAllBooksHandler,
    getBooksByIdHandler,
    editBookByIdHandler,
} = require("./handler");

const routes = [{
        method: "POST",
        path: "/books",
        handler: addBookHandler,
        options: {
            cors: {
                origin: ["*"],
            },
        },
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooksHandler,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: getBooksByIdHandler,
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: editBookByIdHandler,
    },
];

module.exports = routes;