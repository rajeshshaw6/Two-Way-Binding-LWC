import { LightningElement } from 'lwc';

export default class RegisterDemo extends LightningElement {
    formData ={}; //Created an empty object, for storing firstname,lastname and phone
    firstName ="Test"; // this is one way binding i.e from JS to HTML we are assigning values, it is supported by deault in LWC(On first time loading first name will be Test)
    lastName="Name";
    phone="3245";
    submitHandler()
    {
        //WAY - 1
        // Get Values from HTML Using data-id attribute
        // this.firstName = this.template.querySelector('[data-id="firstName"]').value;
        // this.lastName = this.template.querySelector('[data-id="lastName"]').value;
        // this.phone = this.template.querySelector('[data-id="phone"]').value;


        //WAY - 2
        //Get Values from HTML using data-prop-name attribute
        //this.formData['firstName'] = this.template.querySelector('[data-prop-name="firstName"]').value;
        //this.formData['lastName'] = this.template.querySelector('[data-prop-name="lastName"]').value;
        //this.formData['phone'] = this.template.querySelector('[data-prop-name="phone"]').value;

      //Using Loop so we don't need to assign the values individually like we did above
    //    let comp = this.template.querySelectorAll('[data-prop-name]');
    //    comp.forEach(element=>{
    //     this.formData[element.dataset.propName] = element.value;
    //    });

      //Way 3: 
      //  Individually Assign Values
       this.firstName = this.refs.firstName.value; // This is two way binding , i.e from HTML we are getting values in JS file
       this.lastName = this.refs.lastName.value;
       this.phone = this.refs.phone.value;
       console.log(this.firstName);
       console.log(this.lastName);
       console.log(this.phone);

       //Use For In Loop
       for(let prop in this.refs)
       {
        this.formData[prop] = this.refs[prop].value;
       }
       console.log('First Name-> ' + this.formData.firstName);
       console.log('Last Name-> ' + this.formData.lastName);
       console.log('Phone-> ' + this.formData.phone);

        // console.log(this.refs);
        
    }
}