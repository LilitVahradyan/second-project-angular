import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

 addUserBtnIsClicked = false;
 
 firstName = ' ';
 lastName =  ' ';
 age = 0;
 password = '';
  
 users: {
   firstName: string, 
   lastName: string, 
   age: number, 
   password: string, 
   status: boolean
  }[] = 
   [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 32,
      password: '121313',
      status: true
      
    },
    {
      firstName: 'Mike',
      lastName: 'Daniels',
      age: 52,
      password: '656356',
      status: false
    
    }
  ];
   
  addFrom() : void{
    if(!this.addUserBtnIsClicked){
      this.addUserBtnIsClicked = true
    }else{
      this.addUserBtnIsClicked = false
    }
  }
 
  addUser() : void {
    this.users.unshift({
      firstName: this.firstName, 
      lastName: this.lastName,
      age: this.age, 
      password: this.password,
      status: true
      
    })

    this.firstName = ' ';
    this.lastName =  ' ';
    this.age = 0;
    this.password = '';
  }

  deleteUser(idx: number) : void{
    this.users.splice(idx, 1); 
  }

  changeStatus(idx: number) : void{
    this.users[idx].status = !this.users[idx].status
  }

}
