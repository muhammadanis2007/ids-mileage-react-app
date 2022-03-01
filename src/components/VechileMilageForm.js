import React, { Component } from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';

function VehicleMilageForm(props){

   
     props = {
            vehicleTrpID:0,
            rfidno:"",
            vehono: "",
            vehicledrvrname:"",
            trpStrtDtTime:"",
            trpEndDtTime:"",
            trpStrtMilage:null,
            trpEndMilage:null,
            trpDuration:"",
            trpDistence:null,
            
     }

      

        //this.state = { value: "initial Value" };
      // eslint-disable-next-line no-undef
  var  state = ''; /*{vehicleMileageTrip:[
           {rfidno:"0001675114",vehono:"3908 LES",vehicledrvrname:"Muhammad Anees",trpStrtDtTime:"2020-01-11 17:11:32.000",trpEndDtTime:"2020-01-11 17:13:25.000",trpStrtMilage:15500,trpEndMilage:15675,trpDuration:"2020-01-11 00:01:52.000",trpDistence:175},
             {rfidno:"0001229708",vehono:"6267 LES",vehicledrvrname:"Muhammad Saleem",trpStrtDtTime:"2020-01-11 17:15:32.000",trpEndDtTime:"2020-01-11 18:20:25.000",trpStrtMilage:12500,trpEndMilage:12685,trpDuration:"2020-01-11 01:05:52.000",trpDistence:185},
             {rfidno:"0016556854",vehono:"3907 LES",vehicledrvrname:"Shan Maseeh",trpStrtDtTime:"2020-01-11 17:25:32.000",trpEndDtTime:"2020-01-11 18:25:25.000",trpStrtMilage:12510,trpEndMilage:12690,trpDuration:"2020-01-11 01:00:52.000",trpDistence:180},
      
      

   ]};*/
    
   


var SortedData = function(rfidcode){


    let rfidData = [];
        for (let i = 0; i < state.vehicleMileageTrip.length; i++) {
            if (state.vehicleMileageTrip[i].rfidno === rfidcode) {
                rfidData.push(state.vehicleMileageTrip[i]);
            }
}
    
        return rfidData;

  }
 
 

/*var VehicleFindByIds = function(event){
    let rs;
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:5000/api/vehicles/vehiclesbyid/"+event, true);
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        rs = { data: data };
    };
    xhr.send();
    return rs;

  }*/
      

const FindByRFIDVehicle = function(event) {

    if(event.target.value.length ===0)
    {        document.getElementsByClassName("validation").display="none";
        document.getElementsByClassName("validation").text ="";
        var elements = document.getElementsByTagName("input");
        for (var ii=0; ii < elements.length; ii++) {
          if (elements[ii].type === "text" || elements[ii].type === "number" ) {
            elements[ii].value = "";
          }
        }
    } 

    console.log("RFID typed."+event.target.value);
        //  this.setState({vehicleMileageTrip:[1]});
    if(event.target.value.length === 10)
    { 

    let  tripvehicle =[];
 axios.get('http://manis:5000/api/vehicles/vehiclesbyid/'+event.target.value)
      .then(res => {
        tripvehicle = res.data[0];
        console.log("VEHICLE TRIP : "+tripvehicle.vehicleNo);     
        props={ vehicleTrpID:tripvehicle.vehicleId}
       
  
       if(tripvehicle.vehicleRFID === event.target.value) 
       {
       console.log("NEW MIALGE SET : "+tripvehicle.vehicleRFID);
       document.getElementById("vehidno").value = tripvehicle.vehicleId;
       document.getElementById("vehiclno").value = tripvehicle.vehicleNo;
       document.getElementById("drvrname").value = tripvehicle.vehicleOwner;
        var messageBoxs = document.getElementById("sendmessage");
        messageBoxs.textContent="Following RFID Succesufully for Following Vehicles.";
        messageBoxs.style.display="block";
       }
       else{
        var messageBox = document.getElementById("sendmessage");
        messageBox.textContent="Following RFID NOT Registere with any Vehicle.";
        messageBox.style.display="block";
       }


      })

          
        setTimeout(function(){
            document.getElementById("contact-form").reset();
            var messageBox = document.getElementById("sendmessage");
           messageBox.textContent="";
           messageBox.style.display="none";
            
        }, 5000);

     }
     else{

        document.getElementsByClassName("validation").display="block";
        document.getElementsByClassName("validation").text ="INVALID RFID CARD.";
     }

        };
    
    
    return (  <form id="contact-form" >
        <h3>Please Scan Your Vehicle's RFID CARD for Fuel Or Milage Transaction Services :</h3>

        <div className="contentform row">
            <div id="sendmessage"> Your message has been sent successfully.Thank you.</div>

         


            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">


            <div className="form-group">
            <span className="icon-case" ><i className="fa fa-barcode"></i></span>
            <input type="text" name="rfidno" id="rfidno" placeholder="0000000000" data-rule="required" ref={input => input && input.focus()} data-msg="Please move your RFID Card for scan by device ."  onChange={FindByRFIDVehicle}  />
            <div className="validation"></div>
            </div>



                <div className="form-group">
                    <p>Vehicle No</p>
                    <span className="icon-case"><i className="fa fa-truck"></i></span>
                    <input type="text" name="vehiclno" id="vehiclno" disabled data-rule="required" placeholder="0000 ABC" data-msg="Following Vehicle Information : Scanned by RFID." value={props.vehono} />

                </div>


                <div className="form-group">
                    <p>Trip Start Date Time </p>
                    <span className="icon-case"><i className="fa fa-calendar"></i></span>
                    <input type="text" name="strtdatetime" id="strtdatetime" placeholder="YYYY-DAY-MONTH HH:MM:SS.mls" data-rule="required" disabled data-msg="Trip Starting Time." value={props.trpStrtDtTime} />
                 
                </div>

                <div className="form-group">
                    <p>Start Trip @Mile </p>
                    <span className="icon-case"><i class="fa fa-tachometer"></i></span>
                    <input type="number" name="startatmiles" id="startatmiles" data-rule="required" placeholder="0" disabled data-msg="Trip Starting Time." value={props.trpStrtMilage} />

                </div>



                <div className="form-group">
                    <p>Trip Time Duration </p>
                    <span className="icon-case"><i className="fa fa-calendar"></i></span>
                    <input type="text" name="trpdurdatetime" id="trpdurdatetime" data-rule="required" placeholder="HH:MM:SS.mls" disabled data-msg="Trip Starting Time." value={props.trpDuration} />
                  
                </div>



            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">


            <div className="form-group" >
            <span className="icon-case"><i className="fa fa-key"></i></span>
            <input type="text" name="vehidno" id="vehidno" placeholder="0" disabled data-rule="required" ref={input => input && input.focus()} data-msg="Please move your VEHICLE ID for scan by device ."    />
            </div>


            <div className="form-group">
            <p>Driver Name</p>
            <span className="icon-case"><i className="fa fa-user"></i></span>
            <input type="text" name="drvrname" id="drvrname" data-rule="required" placeholder="ABCD" disabled data-msg="Following Vehicle Driver Name" value={props.vehicledrvrname} />
            </div>


            <div className="form-group">
                <p>Trip End Date Time </p>
                <span className="icon-case"><i className="fa fa-calendar"></i></span>
                <input type="text" name="enddatetime" id="enddatetime" data-rule="required" placeholder="YYYY-DAY-MONTH HH:MM:SS.mls" disabled data-msg="Trip Ending Time." value={props.trpEndDtTime} />

            </div>




                <div className="form-group">
                    <p>End Trip @Mile </p>
                    <span className="icon-case"><i class="fa fa-tachometer"></i></span>
                    <input type="number" name="endatmiles" id="endatmiles" data-rule="required" placeholder="0" disabled data-msg="Trip Starting Time." value={props.trpEndMilage} />

                </div>




                <div className="form-group">
                    <p>Trip Distence @ Miles</p>
                    <span className="icon-case"><i class="fa fa-tachometer"></i></span>
                    <input type="number" name="tripdistmiles" id="tripdistmiles" data-rule="required" placeholder="0" disabled data-msg="Trip Distence." value={props.trpDistence} />

                </div>


            </div>
        </div>


    </form>
     ) 
}



export default VehicleMilageForm;