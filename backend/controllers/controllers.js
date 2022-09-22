
import { User } from "../models/user.model.js";
import jsonwebtoken  from 'jsonwebtoken';
import { db } from "../config/db.config.js";

const employee = User.user

const employeeList = async (req,res)=>{
  employee.find((err,result)=>{
      if(err){
        console.log(err)
      }
      else{
        res.json(result)
      }
    })

}
const newEmployee = (req,res)=>{
  console.log('mongo')
  // console.log(db.database)
  var newEmp = new employee(req.body)
  newEmp.created = Date.now()
  var currentYear = new Date().getFullYear();
  var dob = newEmp.dob.split('-')
  var age = currentYear - Number(dob[0])
  newEmp.Age = age;
  console.log(age,newEmp)
  newEmp.save((err, result)=>{
      if(err){
        console.log(err)
      }
      else{
        res.json(result)
      }
    })

}

const empAuth = (req,res)=>{
  var val = req.params.id.trim()
  employee.findOne({empid:val}, (err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      if(result!==null){
        res.json({token: jsonwebtoken.sign({empid:result.empid,name:result.name},'secret',{expiresIn:50})})
      }
      else{
        res.json(result);
      }

    }
  })
}

export const empControl = {
  employeeList,
  newEmployee,
  empAuth
}
