import { Account, Client, Databases } from 'node-appwrite';

const appwriteConfig = {
  apiEndpoint: process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  apiKey: process.env.NEXT_PUBLIC_APPWRITE_API_KEY!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
};

const createAdminClient = async () => {
  const client = new Client();
  client.setEndpoint(appwriteConfig.apiEndpoint);
  client.setProject(appwriteConfig.projectId);
  client.setKey(appwriteConfig.apiKey);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
};

const createSessionClient = async (session?: string) => {
  const client = new Client();
  client.setEndpoint(appwriteConfig.apiEndpoint);
  client.setProject(appwriteConfig.projectId);

  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
  };
};

export { appwriteConfig, createSessionClient, createAdminClient };
