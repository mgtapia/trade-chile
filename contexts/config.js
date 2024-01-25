import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const createFirebaseApp = () => {
  const credentials = {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET
  }

  if (getApps().length <= 0) {
    const app = null; //initializeApp(credentials);
    
    if (app && typeof window !== 'undefined') {
      if ('measurementId' in credentials) {
        getAnalytics(app);
      }
    }
    return app;
  }
}

const app = createFirebaseApp();

export default app;