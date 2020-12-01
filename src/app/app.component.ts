import { Component, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ""; 
  length = 0; 
  useLetters = false; 
  useNumbers = false; 
  useSymbols = false; 

  onButtonClick(){
    let validChars = ''; 
    let tempPasswordHold = ''; 
    if(this.useLetters)
    {
      validChars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    }
    if(this.useNumbers)
    {
      validChars +='1234567890'; 
    }
    if(this.useSymbols)
    {
      validChars+= '!@#$%^&*()'; 
    }
    for(let i = 0; i < this.length; i++)
    {
       tempPasswordHold += validChars[Math.floor(Math.random() * Math.floor(validChars.length - 1))];
    }
    this.password = tempPasswordHold;
  }

  onChangeLength(event:Event){
    let changedTo = (<HTMLInputElement>event.target).value; 
    changedTo = changedTo.trim(); 
    if(changedTo == "")
    {
        this.length = 0; 
      return; 
    }
    let changedToConverted = Number(changedTo); 
    if(!isNaN(changedToConverted) && changedToConverted > 0)
    {
      this.length = Number(changedTo); 
    }
    else{
       this.length = 0; 
       (<HTMLInputElement>event.target).value = '';
      alert("please enter a number that is greater than 0");
    }
  }

  useLettersChecked(){
    this.useLetters = !this.useLetters; 
  }

  useSymbolsChecked(){
    this.useSymbols = !this.useSymbols; 
  }

  useNumbersChecked(){
    this.useNumbers = !this.useNumbers; 
    }
}
