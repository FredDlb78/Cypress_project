class userFactory {
    newUser() {
        const id = Math.floor(Math.random() * 900000) + 100000;
        const username = 'username' + id;
        const password = 'Test1234';
        return { username, password };
    }

    userAlreadyExists() {
        const username = 'username123';
        const password = 'Test1234';
        return { username, password };
    }

    userUnknown() {
        const id = Math.floor(Math.random() * 900000) + 100000;
        const username = 'username' + id + id;
        const password = 'Test1234';

        return { username, password };
    }
} 

export default userFactory;