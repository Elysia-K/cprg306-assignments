'use client';

import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const goToShoppingList = () => {
    router.push('/week-9/shopping-list');
  };

  return (
    <div>
      <h1>Week 9</h1>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div>
            <button onClick={firebaseSignOut}>Sign Out</button>
          </div>
          <div>
            <button onClick={goToShoppingList}>
              Continue to your Shopping List
            </button>
          </div>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
