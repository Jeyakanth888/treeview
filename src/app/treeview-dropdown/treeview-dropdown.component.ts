import { Component, OnInit } from '@angular/core';
import { persons } from '../data';
import { IAxiomTreeSearch } from 'axiom-ngx-tree';




@Component({
  selector: 'app-treeview-dropdown',
  templateUrl: './treeview-dropdown.component.html',
  styleUrls: ['./treeview-dropdown.component.css']
})
export class TreeviewDropdownComponent implements OnInit {

  model : any;
  data = persons;
  selectedItems : any[];
  selectedItem : any;

  search : IAxiomTreeSearch = (item : any,search : string) : boolean => {
    return item.first_name.toLowerCase().indexOf(search) > -1;
  }
  
  constructor(){
    
  }

  ngOnInit() {
  }

  selected(e){
    this.selectedItems = e;
  }
  select(e){
    this.selectedItem = e;
  }

}
