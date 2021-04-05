import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDHAMBQxqD6nzsg5StgDRHUIsxNmJ7ptGc',
  authDomain: 'devtter-61a0b.firebaseapp.com',
  projectId: 'devtter-61a0b',
  storageBucket: 'devtter-61a0b.appspot.com',
  messagingSenderId: '1055490201232',
  appId: '1:1055490201232:web:004808228f51426e0e6a15',
  measurementId: 'G-93CHXTH786',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, email } = user;

  return {
    avatar: photoURL,
    email,
    username: displayName,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase
  .auth()
  .onAuthStateChanged((user) => {
    console.log(user)
    const normalizedUser = 
    mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    // .then(mapUserFromFirebaseAuthToUser)
    //same than
    // .then((user) => {
    //   mapUserFromFirebaseAuthToUser(user);
    // });
};
