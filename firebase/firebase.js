require('dotenv').config();
const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');

admin.initializeApp({
	credential: admin.credential.cert({
		type: 'service_account',
		project_id: 'educa-app-6f86a',
		private_key_id: `${process.env.PRIVATE_KEY_ID}`,
		private_key: `${process.env.PRIVATE_KEY ? JSON.parse(process.env.PRIVATE_KEY) : undefined}`,
		client_email: 'firebase-adminsdk-vwhmz@educa-app-6f86a.iam.gserviceaccount.com',
		client_id: `${process.env.CLIENT_ID}`,
		auth_uri: 'https://accounts.google.com/o/oauth2/auth"',
		token_uri: 'https://oauth2.googleapis.com/token',
		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
		client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vwhmz%40educa-app-6f86a.iam.gserviceaccount.com',
	}),
});

const auth = getAuth();
const db = getFirestore();

module.exports = { auth, db };
