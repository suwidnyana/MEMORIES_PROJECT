const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return posts;

        default:
            return posts;
    }
}