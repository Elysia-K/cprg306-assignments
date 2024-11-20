'use client';

import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const goToShoppingList = () => {
    router.push('/week-10/shopping-list');
  };

  return (
    <div className="m-3">
      <h1 className="text-3xl font-bold">Shopping List App</h1>
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
