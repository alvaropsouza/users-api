import fakeData from '../FakeData.js'

const resolvers = {
    Query: {
        users() {
            return fakeData.UserList;
        }
    }
}

export default resolvers;