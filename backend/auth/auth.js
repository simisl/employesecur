import jsonwebtoken from 'jsonwebtoken';
import {StatusCodes} from 'http-status-codes';

const authGuard = (req,res,next)=>{
  var token = req.headers['authorization']
  jsonwebtoken.verify(token,'secret',(err,decoded)=>{
    if(err){
      console.log('token expired')
      res.json(StatusCodes.UNAUTHORIZED)

    }
    else{

      console.log('token is active')
      next();

    }
})
};

export const Auth = {authGuard}
