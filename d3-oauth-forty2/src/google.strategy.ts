import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"; 

// Use google
// import { Strategy, VerifyCallback } from 'passport-google-oauth20'

// Use 42
import { Strategy, VerifyCallback } from 'passport-42' 

// Use google
/*
@Injectable()
export class GoogleStrategy extends PassportStrategy (
  Strategy, 'google'
*/

// Use 42
@Injectable()
export class FortytwoStrategy extends PassportStrategy (
    Strategy, '42'//'fortytwo' 
) {

  constructor () {
    super ({
      clientID : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
      callbackURL : process.env.GOOGLE_CALLBACK_URL,
      // scope : [ 'profile', 'email' ]
      scope: ['public'], // for 42
    });
  }

  async validate (

    accessToken : string, 
    refreshToken : string,
    profile: any,
    done: VerifyCallback
  ) : Promise<any> {

    const { name, emails, photos } = profile
    const user = {
      email : emails[0].value,
      firstName : name.givenName,
      lastName : name.familyName,
      picture: photos[0].value,
      accessToken
    } 

    console.log( profile['_json']['picture'] )

    done ( null, user )
  }
}
