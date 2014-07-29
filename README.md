globalErrors
============

A simple global errors module for AngularJS. I tested this with 1.22 and the current 1.3 angular beta.

Hopefully this is useful for somebody. Just drop the variable wherever, or give it its own file.

Be sure to add it to your app:

**var app = angular.module('app', [
        'globalErrors'
	]);**
	
To use add a:

  **<div class="globalAlerts" app-messages></div>**
  
to where ever you want the alerts to show up. 

Stylize it using the current classes or add more if you have additional cases (for different error types such as 404).

Here is some sample css for your convinience:


  .globalAlerts{
      border-radius: 5px;
      text-align: center;
      transition: all 1s;
      position: fixed;
      top: 1px;
      left: 9px;
      width: 40%;
      z-index: 10300;
      display: block;
      margin-left: 20%;
      margin-top: 50px;
      margin-bottom: -75px;
      float: left;
  }
  
  .globalAlertMessage{
      border: 1px solid #E8B7C5;
      display: 'block';
  }
  
  .successMessage{
      background-color: #C2E0BA;
      border: 1px solid green;
  }
  
  .errorMessage403{
      background-color: #E8B7C5;
  }
  
  .errorMessage{
      background-color: #FECB9F;
  }
