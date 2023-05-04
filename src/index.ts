import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    type Todo {
        id: ID
        title: String!
        completed: Boolean 
    }
    type Query {
        todos: [Todo]
        todo(id: ID): Todo
    }
`;

type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

const todos: Todo[] = [
	{
		id: '1',
		title: 'Drink milk',
		completed: false,
	},
	{
		id: '2',
		title: 'Eat Lunch',
		completed: false,
	},
];

const resolvers = {
	Query: {
		todos: () => todos,
		todo: (_: never, { id }: any) => {
			return todos.find((todo: Todo) => todo.id === id);
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});
console.log(`🚀  Server ready at ${url}`);
