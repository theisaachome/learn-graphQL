# What is GraphQl

GraphQL is a query language for your APIs.

## REST

A Representational State Transfer (REST) API that has been wrapped with GraphQL.  
We can use it to send queries and receive data.

### Example

A GraphQL query asks only for the data that it needs.

We want the fifth person (personID:5).  
Next, we ask for three fields of data: name, birthYear, and created.

## GraphQL schema

Every GraphQL service defines `types` in a GraphQL schema.  
You can think of a type system as a blueprint for your API’s data,

```
type Person {
    id: ID!
    name: String
    birthYear: String 
    eyeColor: String
}
```

## The GraphQL Specification

GraphQL is a specification (spec) for client-server communication.

### What is a spec?
A spec describes the capabilities and characteristics of a language.

The spec describes the language and grammar you should use when writing queries.


## Design Principles of GraphQL

### Hierarchical
- A GraphQL query is hierarchical. Fields are nested within other fields and the query is shaped like the data that it returns.
### Product centric
- GraphQL is driven by the data needs of the client and the language and runtime that support the client.
### Strong typing
- A GraphQL server is backed by the GraphQL type system. In the schema, each data point has a specific type against which it will be validated.
### Client-specified queries
- A GraphQL server provides the capabilities that the clients are allowed to consume.
### Introspective
- The GraphQL language is able to query the GraphQL server’s type system.


---


## REST
A resource-oriented architecture in which users would progress through web resources by performing operations such as `GET`, `PUT`, `POST`, and `DELETE`.   

In a RESTful architecture, routes represent information.   
Example.
```
/api/food/hot-dog
/api/sport/skiing
/api/city/Lisbon
```
## REST Drawbacks
