'use server';

import { appwriteConfig, createAdminClient, createSessionClient } from '@/lib/appwrite/config';
import {
  signinSchema,
  SigninSchemaType,
  signupSchema,
  SignupSchemaType,
} from '@/lib/validation/auth';
import { cookies } from 'next/headers';
import { ID } from 'node-appwrite';
import { getUserById } from './user.service';

// ------------------------  Authentication User ------------------------

// ******** Signin
export const signinWithEmail = async (userData: SigninSchemaType) => {
  const resultCheck = signinSchema.safeParse(userData);
  if (!resultCheck.success) {
    const { message } = JSON.parse(resultCheck.error.message)[0];
    throw new Error(message);
  }

  const { email, password } = resultCheck.data;

  const { account } = await createAdminClient();

  const session = await account.createEmailPasswordSession(email, password);

  if (!session.secret) {
    throw new Error('Something went wrong please try again');
  }

  const user = await getUserById(session.userId);

  cookies().set('session', session.secret, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    expires: new Date(session.expire),
  });

  return user;
};

// ******** Signup
export const signupWithEmail = async (userData: SignupSchemaType) => {
  const resultCheck = signupSchema.safeParse(userData);

  if (!resultCheck.success) {
    const { message } = JSON.parse(resultCheck.error.message)[0];
    throw new Error(message);
  }

  const user = resultCheck.data;
  const { account, database } = await createAdminClient();

  const seprateWordEmail = user.email.split('@');

  const newAccout = await account.create(
    ID.unique(),
    user.email,
    user.password,
    seprateWordEmail[0]
  );

  const newUser = await database.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    newAccout.$id,
    {
      name: seprateWordEmail[0],
      email: user.email,
      role: 'user',
      avatarUrl:
        'https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.com/search%3Fq%3Dgoogle%26oq%3Dgoogle%26gs_lcrp%3DEgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMg0IARAuGMcBGNEDGIAEMgkIAhBFGDsYgAQyCQgDEEUYOxiABDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRhB0gEIMjM0MWowajGoAgiwAgE%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GBRAAQ',
    }
  );

  const session = await account.createEmailPasswordSession(user.email, user.password);

  cookies().set('session', session.secret, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    expires: new Date(session.expire),
  });

  return newUser;
};

// ******** Signout
export const signoutUser = async () => {
  const session = cookies().get('session');

  const { account } = await createSessionClient(session?.value);

  await account.deleteSession('current');

  cookies().delete('session');
};
