import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'robert-wilson.auth0.com',
        clientID: '-DHPK3TcjMo6ig6Uahr85C69BRUZsMlU',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://robert-wilson.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      });
    
      login() {
        this.auth0.authorize();
      }
}

export default Auth;