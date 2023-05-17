import { AuthState } from 'features/auth/authSlice';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (authState: AuthState) => {
  try {
    const serializedState = JSON.stringify(authState);
    localStorage.setItem('authState', serializedState);
  } catch {
    // ignore write errors
  }
};
