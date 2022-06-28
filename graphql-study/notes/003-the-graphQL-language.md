# **The GraphQL Query Language**

GraphQL takes the ideas that were originally developed to query the database and applies them to internet.

"A single SQL command can access multiple records from tables in database".

Like SQL , GraphQL queries can change or remove data.

The **QL** in `SQL` and `GraphQL` stand for `Query Language`.

But SQL and GraphQL are completely different:

- intended for completely different enviroments.

- Use SQL queries for database.

- Use GraphQL queries for an API endpoints.

- Instead of `SELECT`, GraphQL uses Query to request data.

- Instead of `INSERT`, `UPDATE`, or `DELETE`, GraphQL wraps all of these data changes into one data type: the `Mutation`.

## GraphQL

- Standardize according to its spec.
- does not matter what Language we used : a GraphQL query is GraphQL query.
- The query syntax is a String not any specific programing Language.

Example:

```graphql
{
  allLifts {
    name
  }
}
```

### **Mutation**

To modify data, we can send mutations.

```graphql
mutation {
  setLiftStatus(id: "panorama", status: OPEN) {
    name
    status
  }
}
```

----

## **GraphQL API Tools**


The GraphQL community has produced several open source tools that you can use to interact with GraphQL APIs. 

The two most popular tools for testing GraphQL queries against a GraphQL API: `GraphiQL` and `GraphQL Playground`.


## GraphiQL

The in-browser integrated development environment (IDE) that was created at Facebook to query and explore a GraphQL API.

GraphiQL offers :

- syntax highlighting, 

- code completion, and 

- error warnings, and 

- query results directly in the browser. 


## GraphQL Playground

Another tool for exploring GraphQL APIs is GraphQL Playground. 

Created by the team at Prisma, GraphQL Playground mirrors the functionality of GraphiQL and adds on a few interesting options.

The most important feature is the ability to send custom HTTP headers along with your GraphQL request.


GraphQL Playground has a desktop version that you can install locally using Homebrew:

```
brew cask install graphql-playground
```
Or, you can just download it from the website.


---

## **The GraphQL Query**

You can use the query operation to request data from an API.

A query describes the data that you want to fetch from a GraphQL server.


when you send a query, you ask for units of data by field.

These fields map to the same field in the JSON data response you receive from your server.

```

```