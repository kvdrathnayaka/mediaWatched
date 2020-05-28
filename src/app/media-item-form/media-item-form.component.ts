import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from '../media-item.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;
  minYear = 1900
  maxYear = 2100

  constructor(private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      medium: this.formBuilder.control(''),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', [
        Validators.max(this.maxYear),
        Validators.min(this.minYear)
      ]),
      description: this.formBuilder.control('')
    });
    console.log(this.form.get('year'));
  }

  yearValidator(control: FormControl){
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if(year >= minYear && year <= maxYear){
      return null;
    }
    else{
      return {
        min: minYear,
        max: maxYear,
        // console.log(min , "  " , max);
      };
    }
  }

  onSubmit(mediaItem){
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
    this.form.reset();
  }

}
