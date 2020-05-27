import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("delete..!");
    this.delete.emit(this.mediaItem);
  }

  public toggleSelected() {
    this.selected = !this.selected;
    console.log("isFavorite : " + this.selected);
    this.selectedChange.emit(this.selected);
  }
}
