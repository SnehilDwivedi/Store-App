const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const googleAuthURIs = {
  SignInUrl: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  SignUpUrl: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  ChangePassword: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
  updateProfile: `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
  getProfileInfo: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
  verifyEmail: `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
  passwordReset: `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
  firebaseUrl: `https://react-http-a588f-default-rtdb.firebaseio.com/mail-box-client`,
};

export default googleAuthURIs;


/*
  
  signin with ps: https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password 
  --> {"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}
  signup: https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
  -->"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}
  change email: https://firebase.google.com/docs/reference/rest/auth#section-change-email
  -->{"idToken":"[FIREBASE_ID_TOKEN]","email":"[user@example2.com]","returnSecureToken":true}
  change ps: https://firebase.google.com/docs/reference/rest/auth#section-change-password
  -->{"idToken":"[FIREBASE_ID_TOKEN]","password":"[NEW_PASSWORD]","returnSecureToken":true}'
  update profile: https://firebase.google.com/docs/reference/rest/auth#section-update-profile
  --> {"idToken":"[ID_TOKEN]","displayName":"[NAME]","photoUrl":"[URL]","returnSecureToken":true}
  get user data: https://firebase.google.com/docs/reference/rest/auth#section-get-account-info
  --> {"idToken":"[FIREBASE_ID_TOKEN]"}
  Send email verification : https://firebase.google.com/docs/reference/rest/auth#section-send-email-verification
  --> {"requestType":"VERIFY_EMAIL","idToken":"[FIREBASE_ID_TOKEN]"}
  send password reset email: https://firebase.google.com/docs/reference/rest/auth#section-send-password-reset-email
  --> {"requestType":"PASSWORD_RESET","email":"[user@example.com]"}

  */
