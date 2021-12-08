import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometest',
  templateUrl: './hometest.component.html',
  styleUrls: ['./hometest.component.scss']
})
export class HometestComponent implements OnInit {

  public content = '';
  public wordPlace = 'word here...';
  public isBorderWord = true;
  public isBorderText = true;
  public wordValue = '';
  public textStrValue = '';
  public textStrPlaceholder = '';

  constructor() { }
  ngOnInit(): void { }

  add(): void {
    if (this.wordValue == '') {
      this.wordPlace = 'Please, write a word!';
      this.isBorderWord = false;
    }
    else {
      if (this.content == '') {
        this.content += `${this.wordValue}`;
      }
      else {
        this.content += `,${this.wordValue}`;
      }
      this.wordValue = '';
      this.isBorderWord = true;
    }
  }

  reset(): void {
    this.content = '';
    this.wordValue = '';
  };

  censor(): void {
    if (this.textStrValue == ''){
      this.textStrPlaceholder = 'Please, write a text!';
      this.isBorderText = false;
    }
    else {
      let wordsList = this.content.split(',');
      let str = this.textStrValue;
      console.log(str);
      for (let i = 0; i<wordsList.length; i++){
        let regExp = new RegExp(wordsList[i], "g");
        str = str.replace(regExp, `${"*".repeat(wordsList[i].length)}`);
      }
      this.textStrValue = str;
      this.isBorderText = true;
    }
  };


}
