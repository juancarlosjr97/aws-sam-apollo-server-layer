# AWS SAM Apollo Server Layer Template

This is a template project to create a TypeScript Lambda using Apollo Server with a TypeScript Layer mounted and running locally using [AWS SAM](https://aws.amazon.com/serverless/sam/).

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [AWS SAM CLI](https://aws.amazon.com/serverless/sam/)
- [nvm](https://github.com/nvm-sh/nvm)

## Local Development

1. Install node dependencies

   ```bash
   npm ci
   ```

2. Start services on watch mode

```bash
npm run watch
```

This will start a watch for development of the Lambda and the Layer and will watch files and recompile whenever they change, and will start the AWS resources using SAM locally.

## GraphQL Server

The GraphQL server will be available from the port `3000` and can be open using `http://localhost:3000/graphql`.

The server on `watch` mode will have introspection with the Apollo Playground for development.

## Production Build

The production build can be executed locally by running

```bash
npm run start:production
```

This will create a Lambda and Layer distribution with built-in optimizations for production, and will start locally the AWS SAM running on the port `3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file.
