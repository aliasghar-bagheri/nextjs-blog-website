'use server';

import { appwriteConfig, createAdminClient, createSessionClient } from '@/lib/appwrite/config';
import { cookies } from 'next/headers';

// ******** Get current user
export const getCurrentUser = async () => {
  const session = cookies().get('session');

  const { account, database } = await createSessionClient(session?.value);
  const currentAccount = await account.get();

  const currentUser = await database.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    currentAccount.$id
  );
  return currentUser;
};

// ******** Get user by id
export const getUserById = async (id: string) => {
  const { database } = await createAdminClient();
  const user = await database.getDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    id
  );

  return user;
};
