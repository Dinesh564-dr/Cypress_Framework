import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import loginpage from '../../support/pages/login'

const loginpageobj = new loginpage();
Given('user login to Application',() =>
{
  loginpageobj.login();

});

Then(`verify login is success`, ()=>
{
  console.log("success login ")
});
