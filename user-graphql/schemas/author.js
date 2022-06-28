const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");



const AuthorType = new GraphQLObjectType({
    name:"Author",
    fields:{
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
        address:{type:GraphQLString},
    }
});


module.exports = AuthorType;