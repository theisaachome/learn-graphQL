const graphql = require("graphql");
const axios = require("axios");
const AuthorType = require("./author");

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new graphql.GraphQLList(UserType),
      resolve(parentValue, args) {
        console.log(parentValue);
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then((res) => res.data);
      },
    },
  }),
});
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then((res) => res.data);
      },
    },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: graphql.GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then((res) => res.data);
      },
    },
    users: {
        type: new graphql.GraphQLList(UserType),
        resolve(parentValue, args) {
          return axios
            .get(`http://localhost:3000/users`)
            .then((res) => res.data);
        },
      },
    company: {
      type: CompanyType,
      args: { id: { type: graphql.GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${args.id}`)
          .then((res) => res.data);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: graphql.GraphQLID } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/authors/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new graphql.GraphQLNonNull(GraphQLString) },
        age: { type: new graphql.GraphQLNonNull(GraphQLInt) },
        companyId: { type: new graphql.GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { age, firstName }) {
        return axios
          .post(`http://localhost:3000/users`, { firstName, age })
          .then((res) => res.data);
      },
    },
    deleteUser:{
        type:UserType,
        args:{
            id:{type:new graphql.GraphQLNonNull(GraphQLString)}
        },
        resolve(parentValue,{id}){
            return axios.delete(`http://localhost:3000/users/${id}`)
            .then(res=>res.data);
        }
    },
    editUser:{
        type:UserType,
        args:{
            id:{type:new graphql.GraphQLNonNull(GraphQLString)},
            firstName:{type:GraphQLString},
            age:{type:GraphQLInt},
            companyId:{type:GraphQLString}
        },
        resolve(parentValue,args){
            return axios.patch(`http://localhost:3000/users/${args.id}`,args)
            .then(res=>res.data);
        }
    }
  },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation });
