import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { FileSaveService } from '../../services/file_save.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {

  constructor(private fileSaveService: FileSaveService) { }

  saveData() {
    const data = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    };
    this.fileSaveService.saveDataAsJson(data, 'user-data');
  }
}
