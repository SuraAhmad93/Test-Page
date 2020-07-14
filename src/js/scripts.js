 

/* Change Country Dropdown List based on step 1 choice */
$("input[name=ParticipationType]:radio").click(function(ev) {
    if (ev.currentTarget.value == "jif") {
        $("#CompanyName").addClass("registration-notVisible");
        $('#GIFSelectCompanies').removeClass("registration-notVisible");
        $('#0JdSponsorSelectCompanies').addClass("registration-notVisible");
         
  
    } else if (ev.currentTarget.value == "sponsor") {
        $("#CompanyName").addClass("registration-notVisible");
        $('#GIFSelectCompanies').addClass("registration-notVisible");
        $('#0JdSponsorSelectCompanies').removeClass("registration-notVisible");
    }
    else
    {
        $("#CompanyName").removeClass("registration-notVisible");
        $('#GIFSelectCompanies').addClass("registration-notVisible");
        $('#0JdSponsorSelectCompanies').addClass("registration-notVisible");
    }
  });



  /* Change disable for Spouse fields if 250 jd for spouse field choosen  */
  $('#Spouse').change(function(){
    if($(this).is(":checked")) {
        $('#SpouseNameTitle').prop("disabled", false);
        $('#SpouseFirstName').prop("disabled", false);
        $('#SpouseMiddleName').prop("disabled", false);
        $('#SpouseLastName').prop("disabled", false);
        $('#SpouseNationality').prop("disabled", false);
        $('#SpousePetraTrip').prop("disabled", false);
        $('#EntryVisaSpouse').prop("disabled", false);
        $('#PickUpAndFlightApplicableSpouse').prop("disabled", false);
        $('#TransportationApplicableConfirm').prop("disabled", false);
    } else {
        $('#SpouseNameTitle').prop("disabled", true);
        $('#SpouseFirstName').prop("disabled", true);
        $('#SpouseMiddleName').prop("disabled", true);
        $('#SpouseLastName').prop("disabled", true);
        $('#SpouseNationality').prop("disabled", true);
        $('#SpousePetraTrip').prop("disabled", true);
        $('#EntryVisaSpouse').prop("disabled", true);
        $('#PickUpAndFlightApplicableSpouse').prop("disabled", true);
        $('#TransportationApplicableConfirm').prop("disabled", true);
    }
});
 


  /* Change country based on insurance company for gif members */
$('#GIFSelectCompanies').change(function(){  
    var country =  $('#GIFSelectCompanies option:selected').attr('data-country');
    var telephone =  $('#GIFSelectCompanies option:selected').attr('data-telephone');
    //var fax =  $('#GIFSelectCompanies option:selected').attr('data-fax');
    $('#ParticipantCountry option[value='+ country +']').attr('selected','selected');
    $('#ParticipantCompanyTelephone').val(telephone);
    //$('#ParticipantCompanyFax').val(fax);
})


  /* Change country based on insurance company for 0 JD For Sponsor */
  $('#0JdSponsorSelectCompanies').change(function(){  
    var country =  $('#0JdSponsorSelectCompanies option:selected').attr('data-country');
    var telephone =  $('#0JdSponsorSelectCompanies option:selected').attr('data-telephone');
    //var fax =  $('#0JdSponsorSelectCompanies option:selected').attr('data-fax');
    $('#ParticipantCountry option[value='+ country +']').attr('selected','selected');
    $('#ParticipantCompanyTelephone').val(telephone);
    //$('#ParticipantCompanyFax').val(fax);
})


  /* Change disable for Accommodation Hotel Category fields if Accommodation in Amman (Before the Conference) field choosen  */
  $('#AccommodationInAmmBC').change(function(){
    if($(this).is(":checked")) {
        
        $('#HotelCategoryInAmmBC').prop("disabled", false);
        $('#HotelNameInAmmBC').prop("disabled", false);
        $('#RoomCategoryInAmmBC').prop("disabled", false);
        $('#RoomTypeInAmmBC').prop("disabled", false);
        $('#PartnerNameInRoomInAmmBC').prop("disabled", false);
        $('#RoomRateInAmmBC').prop("disabled", false);
        $('#CheckInInAmmBC').prop("disabled", false);
        $('#CheckOutInAmmBC').prop("disabled", false);
        $('#AvailableRoomInAmmBC').prop("disabled", false);
    } else {
        $('#HotelCategoryInAmmBC').prop("disabled", true);
        $('#HotelNameInAmmBC').prop("disabled", true);
        $('#RoomCategoryInAmmBC').prop("disabled", true);
        $('#RoomTypeInAmmBC').prop("disabled", true);
        $('#PartnerNameInRoomInAmmBC').prop("disabled", true);
        $('#RoomRateInAmmBC').prop("disabled", true);
        $('#CheckInInAmmBC').prop("disabled", true);
        $('#CheckOutInAmmBC').prop("disabled", true);
        $('#AvailableRoomInAmmBC').prop("disabled", true);
    }
});

 

  /* Change disable for Accommodation fields if Accommodation in Aqaba (Conference Venue) field choosen  */
  $('#AccommodationInAqabaCV').change(function(){
    if($(this).is(":checked")) {
        $('#HotelCategoryInAqabaCV').prop("disabled", false);
        $('#HotelNameInAqabaCV').prop("disabled", false);
        $('#RoomCategoryInAqabaCV').prop("disabled", false);
        $('#RoomTypeInAqabaCV').prop("disabled", false);
        $('#PartnerNameInRoomAqabaCV').prop("disabled", false);
        $('#RoomRateInAqabaCV').prop("disabled", false);
        $('#CheckInInAqabaCV').prop("disabled", false);
        $('#CheckOutInAqabaCV').prop("disabled", false);
        $('#AvailableRoomInAqabaCV').prop("disabled", false);
    } else {
        $('#HotelCategoryInAqabaCV').prop("disabled", true);
        $('#HotelNameInAqabaCV').prop("disabled", true);
        $('#RoomCategoryInAqabaCV').prop("disabled", true);
        $('#RoomTypeInAqabaCV').prop("disabled", true);
        $('#PartnerNameInRoomAqabaCV').prop("disabled", true);
        $('#RoomRateInAqabaCV').prop("disabled", true);
        $('#CheckInInAqabaCV').prop("disabled", true);
        $('#CheckOutInAqabaCV').prop("disabled", true);
        $('#AvailableRoomInAqabaCV').prop("disabled", true);
    }
});


  /* Change disable for Accommodation fields if Accommodation in Amman (After the Conference) field choosen  */
  $('#AccommodationInAmmAC').change(function(){
    if($(this).is(":checked")) {
        $('#HotelCategoryInAmmAC').prop("disabled", false);
        $('#HotelNameInAmmAC').prop("disabled", false);
        $('#RoomCategoryInAmmAC').prop("disabled", false);
        $('#RoomTypeInAmmAC').prop("disabled", false);
        $('#PartnerNameInRoomInAmmAC').prop("disabled", false);
        $('#RoomRateInAmmAC').prop("disabled", false);
        $('#CheckInInAmmAC').prop("disabled", false);
        $('#CheckOutInAmmAC').prop("disabled", false);
        $('#AvailableRoomInAmmAC').prop("disabled", false);
    } else {
        $('#HotelCategoryInAmmAC').prop("disabled", true);
        $('#HotelNameInAmmAC').prop("disabled", true);
        $('#RoomCategoryInAmmAC').prop("disabled", true);
        $('#RoomTypeInAmmAC').prop("disabled", true);
        $('#PartnerNameInRoomInAmmAC').prop("disabled", true);
        $('#RoomRateInAmmAC').prop("disabled", true);
        $('#CheckInInAmmAC').prop("disabled", true);
        $('#CheckOutInAmmAC').prop("disabled", true);
        $('#AvailableRoomInAmmAC').prop("disabled", true);
    }
});


 /* Add Hotels Names To dropdown list on hotel category change before conference */
$('#HotelCategoryInAmmBC').change(function(){
    var Hotels = ["--------","AMM Hotel 1 BC", "AMM Hotel 2 BC", "AMM Hotel 3 BC"];
    $('#HotelNameInAmmBC').find('option').remove();//empty the dropdown list before appending new items
    for(var i=0; i< Hotels.length;i++)
    {
      jQuery('<option/>', {
            value: Hotels[i],
            html: Hotels[i]
            }).appendTo('#HotelNameInAmmBC'); 
    }
});


 /* Add Hotels Names To dropdown list on hotel category change During conference */
 $('#HotelCategoryInAqabaCV').change(function(){
    var Hotels = ["--------","Aqaba Hotel 1", "Aqaba Hotel 2", "Aqaba Hotel 3"];
    $('#HotelNameInAqabaCV').find('option').remove();//empty the dropdown list before appending new items
    for(var i=0; i< Hotels.length;i++)
    {
      jQuery('<option/>', {
            value: Hotels[i],
            html: Hotels[i]
            }).appendTo('#HotelNameInAqabaCV'); 
    }

});



 /* Add Hotels Names To dropdown list on hotel category change after conference*/
 $('#HotelCategoryInAmmAC').change(function(){
    var Hotels = ["--------","AMM Hotel 1 AC", "AMM Hotel 2 AC", "AMM Hotel 3 AC"];
    $('#HotelNameInAmmAC').find('option').remove();//empty the dropdown list before appending new items 

    for(var i=0; i< Hotels.length;i++)
    {
      jQuery('<option/>', {
            value: Hotels[i],
            html: Hotels[i]
            }).appendTo('#HotelNameInAmmAC'); 
    }
});


 /* Add Room Category To dropdown list on Hotel Name change Before conference */
 $('#HotelNameInAmmBC').change(function(){
    var RoomCategories = ["--------","Amm Standard 1 BC", "Amm Standard 2 BC", "Amm Standard 3 BC"];
    $('#RoomCategoryInAmmBC').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomCategoryInAmmBC'); 
    }
});


 /* Add Room Category To dropdown list on Hotel Name change During conference */
 $('#HotelNameInAqabaCV').change(function(){
    var RoomCategories = ["--------","Aqaba Standard 1", "Aqaba Standard 2", "Aqaba Standard 3"];
    $('#RoomCategoryInAqabaCV').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomCategoryInAqabaCV'); 
    }
});


 /* Add Room Category To dropdown list on Hotel Name change After conference */
 $('#HotelNameInAmmAC').change(function(){
    var RoomCategories = ["--------","Amm Standard 1 AC", "Amm Standard 2 AC", "Amm Standard 3 AC"];
    $('#RoomCategoryInAmmAC').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomCategoryInAmmAC'); 
    }
});



 /* Add Room Type and available Rooms To dropdown list on Room Category change Before conference */
 $('#RoomCategoryInAmmBC').change(function(){
    var RoomCategories = ["--------","Single", "Double"];
    var Available = "10";
    $('#RoomTypeInAmmBC').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomTypeInAmmBC'); 
    }

    $('#AvailableRoomInAmmBC').val(Available);
});

 /* Add Room Type and available Rooms To dropdown list on Room Category change During conference */
 $('#RoomCategoryInAqabaCV').change(function(){
    var RoomCategories = ["--------","Single", "Double"];
    var Available = "10";
    $('#RoomTypeInAqabaCV').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomTypeInAqabaCV'); 
    }
    $('#AvailableRoomInAqabaCV').val(Available);
});

 /* Add Room Type and available Rooms To dropdown list on Room Category change After conference */
 $('#RoomCategoryInAmmAC').change(function(){
    var RoomCategories = ["--------","Single", "Double"];
    var Available = "10";
    $('#RoomTypeInAmmAC').find('option').remove();//empty the dropdown list before appending new items

    for(var i=0; i< RoomCategories.length;i++)
    {
      jQuery('<option/>', {
            value: RoomCategories[i],
            html: RoomCategories[i]
            }).appendTo('#RoomTypeInAmmAC'); 
    }
    $('#AvailableRoomInAmmAC').val(Available);
});
 

/* Show partner name field and fill room rate if double room is selected Before conference */
$('#RoomTypeInAmmBC').change(function(){
    var SelectedRoomType =  $('#RoomTypeInAmmBC').val();
    var DoubleRoomRate = "150";
    var SingleRoomRate = "170";
        if (SelectedRoomType == "Double")
        { 
            $('#PartnerNameInRoomInAmmBCCN').removeClass("registration-notVisible");
            $('#RoomRateInAmmBC').val(DoubleRoomRate);
        } 
        else 
        {
            $('#PartnerNameInRoomInAmmBCCN').addClass("registration-notVisible");
            $('#RoomRateInAmmBC').val(SingleRoomRate);
        }
});
 
 /* Show partner name field and fill room rate if double room is selected  During conference */
$('#RoomTypeInAqabaCV').change(function(){
    var SelectedRoomType =  $('#RoomTypeInAqabaCV').val();
    var DoubleRoomRate = "150";
    var SingleRoomRate = "170";
        if (SelectedRoomType == "Double")
        { 
            $('#PartnerNameInRoomAqabaCVCN').removeClass("registration-notVisible");
            $('#RoomRateInAqabaCV').val(DoubleRoomRate);
        } 
        else 
        {
            $('#PartnerNameInRoomAqabaCVCN').addClass("registration-notVisible");
            $('#RoomRateInAqabaCV').val(SingleRoomRate);
        }
});


/* Show partner name field and fill room rate if double room is selected After conference */
$('#RoomTypeInAmmAC').change(function(){
    var SelectedRoomType =  $('#RoomTypeInAmmAC').val();
    var DoubleRoomRate = "150";
    var SingleRoomRate = "170";
        if (SelectedRoomType == "Double")
        { 
            $('#PartnerNameInRoomInAmmACCN').removeClass("registration-notVisible");
            $('#RoomRateInAmmAC').val(DoubleRoomRate);
        } 
        else 
        {
            $('#PartnerNameInRoomInAmmACCN').addClass("registration-notVisible");
            $('#RoomRateInAmmAC').val(SingleRoomRate);
        }
});
 

/* Change Disapled for transportation in step 4 */
$("input[name=PickUpNeed]:radio").click(function(ev) {
    if (ev.currentTarget.value == "NeedAirPortPickUp") {
        $('#QAIP').prop("disabled", false);  
        $('#KHIA').prop("disabled", false);  
        $('#PickupArrivalDate').prop("disabled", false);  
        $('#ArrivalAirline').prop("disabled", false);  
        $('#ArrivalFlightNumber').prop("disabled", false);  
        $('#ArrivalTime').prop("disabled", false);  
        $('#PickupDepartureDate').prop("disabled", false);  
        $('#DepartureAirline').prop("disabled", false);  
        $('#DepartureFlightNumber').prop("disabled", false);  
        $('#DepartureTime').prop("disabled", false);  
 
    }  
    else
    {
        $('#QAIP').prop("disabled", true);
        $('#KHIA').prop("disabled", true);  
        $('#PickupArrivalDate').prop("disabled", true);  
        $('#ArrivalAirline').prop("disabled", true);  
        $('#ArrivalFlightNumber').prop("disabled", true);  
        $('#ArrivalTime').prop("disabled", true);  
        $('#PickupDepartureDate').prop("disabled", true);  
        $('#DepartureAirline').prop("disabled", true);  
        $('#DepartureFlightNumber').prop("disabled", true);  
        $('#DepartureTime').prop("disabled", true);  
    }
  });



 
/* Remove Disabled for amman - aqaba transportation time by coach*/

  $('#ByCoachAmmAqb').change(function(){
    if($(this).is(":checked")) {
        $('#ByCoachAmmAqbDay').prop("disabled", false);
        $('.ByCoachAmmAqbRadio  input:radio').prop("disabled", false);
        $('#ByOwnTransportationAmmAqb').prop("disabled", true);
  
    } else {
        $('#ByCoachAmmAqbDay').prop("disabled", true);
        $('.ByCoachAmmAqbRadio  input:radio').prop("disabled", true);
        $('#ByOwnTransportationAmmAqb').prop("disabled", false);

    }
});



  
/* Remove Disabled for aqaba - amman transportation time by coach*/

$('#ByCoachAqbAmm').change(function(){
    if($(this).is(":checked")) {
        $('#ByCoachAqbAmmDay').prop("disabled", false);
        $('.ByCoachAqbAmmRadio  input:radio').prop("disabled", false);
        $('#ByOwnTransportationAqbAmm').prop("disabled", true);
  
    } else {
        $('#ByCoachAqbAmmDay').prop("disabled", true);
        $('.ByCoachAqbAmmRadio  input:radio').prop("disabled", true);
        $('#ByOwnTransportationAqbAmm').prop("disabled", false);

    }
});


/* Disable By coach amman - aqaba if my own transportaion amman aqaba ticked*/
$('#ByOwnTransportationAmmAqb').change(function(){
    if($(this).is(":checked")) {
        $('#ByCoachAmmAqb').prop("disabled", true);
         
  
    } else {
        $('#ByCoachAmmAqb').prop("disabled", false);

    }
});


/* Disable By coach aqaba - amman if my own transportaion aqaba amman ticked*/
$('#ByOwnTransportationAqbAmm').change(function(){
    if($(this).is(":checked")) {
        $('#ByCoachAqbAmm').prop("disabled", true);
         
  
    } else {
        $('#ByCoachAqbAmm').prop("disabled", false);

    }
});

var clipboardDemos = new Clipboard('[data-clipboard-demo]');

clipboardDemos.on('success', function(e) {
    e.clearSelection();

    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
 
});

clipboardDemos.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
 
});

// tooltips.js

var btns = document.querySelectorAll('.copyboard');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseleave');
    btns[i].addEventListener('blur');
}

 