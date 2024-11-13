'use client';

import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1>Week 9</h1>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
