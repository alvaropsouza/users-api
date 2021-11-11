import fakeData from '../FakeData.js';
// Lodash helps to deal with arrays, numbers, objects strings
import _ from "lodash";

const resolvers = {
    Query: {
        // User resolvers
        users: () => {
            return fakeData.UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            // In this case, lodash is working with find method to search for a user based on passed id trough arguments and converting
            // that argument to number type
            const user = _.find(fakeData.UserList, {id: Number(id)});

            return user;
        },
        // Movie resolvers
        movies: () => {
            return fakeData.MovieList;
        },

        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(fakeData.MovieList, {name: name})

            return movie;
        }
    },
}

export default resolvers;