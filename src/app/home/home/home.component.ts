import { Component} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../../data-service.service';
declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 public userForm: FormGroup;
 isEditbtn = true; 
 currentUserId: number | null = null; 
 userData:any;
 private currentId: number = 0;
  item: any;
  isUpdateMode: boolean = false; 
  selectedUserId: number | null = null;
  formdata: boolean = false
constructor(public fb : FormBuilder, private http: HttpClient, private data: DataServiceService){

  this.userForm = this.fb.group({
    name:['', Validators.required],
    mobial: ['', Validators.required],
    email: ['', Validators.required]
  })

}


ngOnInit(){
  // $('#basic-datatables').dataTable().fnClearTable();
  // $('#basic-datatables').dataTable().fnDraw();
  // $('#basic-datatables').dataTable().fnDestroy();
  // $.getScript('./assets/table.js');

this.data.gedatedata(this.data).subscribe((res)=>{
      this.item = res
})
}

onSubmitData(): void {
  if (this.userForm.valid) {
    const formData = this.userForm.value;

    if (this.isUpdateMode && this.selectedUserId !== null) {
      // Update existing data
      const updateData = { ...formData, id: this.selectedUserId };
      this.data.updateData(updateData).subscribe({
        next: (res: any) => {
          // console.log("Update response:", res);
          this.item = this.item.map((user: any) =>
            user.id === this.selectedUserId ? updateData : user
          );
          this.resetForm();
        },
        error: (err: any) => {
          console.error("Error during update:", err);
        },
        complete: () => {
          console.log("Update complete");
        },
      });
    } else {
      // Create new data
      const createData = { ...formData, id: this.generateId() };
      this.data.saveData(createData).subscribe({
        next: (res: any) => {
          this.item.push(createData); // Add new data to the list
          this.resetForm();
        },
        error: (err: any) => {
          console.error("Error during save:", err);
        },
        complete: () => {
          console.log("Save complete");
        },
      });
    }
  } else {
    console.error("Form is invalid");
  }
}

// Generate a consistent ID
generateId(): string {
  return (this.currentId++).toString();
}

// --------------------------------delete data in table---------------

deletedata(id: number, index: number){
  this.data.deletedata(id).subscribe({next:(res:any)=>{
   this.item.splice(index,1);
  }});
}

//---------------resetForm------------------------
resetForm(){
this.userForm.reset();
this.isUpdateMode = false;
this.selectedUserId = null;
this.formdata = false;
}
onEditUser(data:any){
this.userForm.patchValue(data);
this.isUpdateMode = true;
this.selectedUserId = data.id;
this.formdata = true;
}


}
