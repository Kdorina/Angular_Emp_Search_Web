import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent  implements OnInit{

  constructor(private api:EmpService){}

  ngOnInit(): void {
    this.getEmp();
  }

  employees!:any;
  getEmp(){
    this.api.emp().subscribe({
      next: data=>{
        console.log(data);
        this.employees = data;
      },
      error: err => {

      }
    })
  }

}
