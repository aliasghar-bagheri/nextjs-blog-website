'use client';

import { MAIN_PAGE_ROUTES } from '@/constants/routes';
import { SigninSchemaType, SignupSchemaType } from '@/lib/validation/auth';
import { signinWithEmail, signoutUser, signupWithEmail } from '@/services/auth.service';
import { getCurrentUser } from '@/services/user.service';
import { I_User } from '@/types';
import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';

type T_AuthAction =
  | { type: 'PENDING' }
  | { type: 'SIGN_IN'; payload: I_User }
  | { type: 'SIGN_UP'; payload: I_User }
  | { type: 'ERROR' }
  | { type: 'SIGN_OUT' }
  | { type: 'USER_LOADED'; payload: I_User };

type T_AuthContext = {
  signin: (userData: SigninSchemaType) => Promise<void>;
  signup: (userData: SignupSchemaType) => Promise<void>;
  signout: () => Promise<void>;
  state: {
    user: I_User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  };
};

type T_AuthState = {
  user: I_User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const initialStateContext: T_AuthContext = {
  signin: async () => {},
  signup: async () => {},
  signout: async () => {},
  state: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
};

const AuthContext = createContext<T_AuthContext>(initialStateContext);

const authReducer = (state: T_AuthState, action: T_AuthAction) => {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'USER_LOADED':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      throw new Error('action not found.');
  }
};

const authState: T_AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authState);

  const router = useRouter();

  // ---------------Signin
  const signin = async (userData: SigninSchemaType) => {
    dispatch({ type: 'PENDING' });
    try {
      const user = (await signinWithEmail(userData)) as I_User;

      toast.success('You have successfully logged in');
      dispatch({ type: 'SIGN_IN', payload: user });

      router.push('/');
    } catch (error) {
      toast.error(error?.message);
      dispatch({ type: 'ERROR' });
    }
  };

  // ---------------Signup
  const signup = async (userData: SignupSchemaType) => {
    dispatch({ type: 'PENDING' });
    try {
      const newUser = (await signupWithEmail(userData)) as I_User;

      toast.success('Your registration was successful');
      dispatch({ type: 'SIGN_UP', payload: newUser });

      router.push(MAIN_PAGE_ROUTES.ROOT);
    } catch (error) {
      toast.error(error?.message);
      dispatch({ type: 'ERROR' });
    }
  };

  // ---------------Signout
  const signout = async () => {
    try {
      await signoutUser();
      toast.success('You have successfully logged out');

      dispatch({ type: 'SIGN_OUT' });

      router.push(MAIN_PAGE_ROUTES.ROOT);
    } catch (error) {
      toast.error(error?.message);
      dispatch({ type: 'ERROR' });
    }
  };

  // ---------------Get current user
  const getUser = async () => {
    dispatch({ type: 'PENDING' });
    try {
      const currentUserData = (await getCurrentUser()) as I_User;

      dispatch({ type: 'USER_LOADED', payload: currentUserData });
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        signin,
        signup,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth should be used within AuthProvider.');
  }

  return context;
};
