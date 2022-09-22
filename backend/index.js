import express from 'express';
import cors from 'cors';
import { route } from './routes/routes.js';
import { User } from './models/user.model.js';


const employee = User.user

const app = express()
var corsOptions = {
  origin:'http://localhost:4200'
}
const PORT = 3000;
app.use(express.json())
app.use(cors(corsOptions))


app.get('/',(req,res)=>{
  res.json('server is running')
})

app.use('/employee', route.router)

app.listen(`${PORT}`,()=>{
  console.log('listening')

  // var currentYear = new Date().getFullYear();
  // var time = Date.now()
  // console.log('date',currentYear,time)
  // var newEmp = new employee()
  // newEmp = {
  //   empid:'10',
  //   name: 'ww',
  //   file: 'ww',
  //   gender: 'ww',
  //   organzn:'ww',
  //   designation: 'ww',
  //   dob: '1984-03-21',
  //   time: 'ww',
  //   Age: 0
  // }
  // var dob = newEmp.dob.split('-')
  // var age = currentYear - Number(dob[0])
  // newEmp.Age = age;
  // console.log(age,newEmp)

})
