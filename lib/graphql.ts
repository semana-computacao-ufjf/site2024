import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://api.hygraph.com/v2/your-project-id/master'; // Substitua pela URL do hygraph 

export const hygraph = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer YOUR_ACCESS_TOKEN`, // Substitua pelo seu token de acesso hygraph
  },
});
