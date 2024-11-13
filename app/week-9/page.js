// Import the useUserAuth hook
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div>
      <h1>Week9</h1>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
      ;
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In with GitHub</button>
        )}
      </p>
    </div>
  );
}

// Sign in to Firebase with GitHub authentication
// await gitHubSignIn();

// Sign out of Firebase
// await firebaseSignOut();
