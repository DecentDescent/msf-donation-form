// Variables
personTypeActive = "private";
var personTypePrivate = document.getElementById("private");
var personTypeCompany = document.getElementById("company");
var personTypePrivateContainer = document.getElementById("contact-info-private");
var personTypeCompanyContainer = document.getElementById("contact-info-company");
var personTypeCompanyContainer = document.getElementById("contact-info-company");
var paymentClaimCard = document.getElementsByClassName("payment-card")[0];
var paymentClaimWire = document.getElementsByClassName("payment-wire")[0];
var paymentClaimBitcoin = document.getElementsByClassName("payment-bitcoin")[0];
var approvalReceed = document.getElementById("approval_receed");
var approvalReceedDiv = document.getElementById("receed_type");
var receedDetailsEmail = document.getElementsByClassName("receed_details-email")[0];
var receedDetailsPost = document.getElementsByClassName("receed_details-post")[0];
var receedType = "email";

function checkPersonType() {
    if(personTypePrivate.checked === true) {
        personTypePrivateContainer.classList.add("active");
        personTypeCompanyContainer.classList.remove("active");
        personTypeActive = "private";
    } else if(personTypeCompany.checked === true) {
        personTypePrivateContainer.classList.remove("active");
        personTypeCompanyContainer.classList.add("active");
        personTypeActive = "company";
    }
}


function checkReceedType(receedTypeParam) {
  if (receedTypeParam === "email") {
    receedType = "email";
    receedDetailsEmail.classList.remove("hidden");
    receedDetailsPost.classList.add("hidden");
  } else if (receedTypeParam ==="post"){
    receedType = "post";
    receedDetailsEmail.classList.add("hidden");
    receedDetailsPost.classList.remove("hidden");
  }
}

function checkReceed(){
  if(approvalReceed.checked === true) {
    approvalReceedDiv.classList.remove("hidden");
    receedType = "email";
    document.getElementById("receed_type_email").checked = true;
    document.getElementById("receed_type_post").checked = false;
    checkReceedType(receedType);
  } else if (approvalReceed.checked === false) {
    approvalReceedDiv.classList.add("hidden");
    receedDetailsEmail.classList.add("hidden");
    receedDetailsPost.classList.add("hidden");
  }
}


function checkPaymentType(type) {
  if (type === "card") {
    paymentClaimCard.classList.remove("hidden");
    paymentClaimWire.classList.add("hidden");
    paymentClaimBitcoin.classList.add("hidden");
  }
  else if (type === "wire") {
    paymentClaimCard.classList.add("hidden");
    paymentClaimWire.classList.remove("hidden");
    paymentClaimBitcoin.classList.add("hidden");
  }
  else if (type === "bitcoin") {
    paymentClaimCard.classList.add("hidden");
    paymentClaimWire.classList.add("hidden");
    paymentClaimBitcoin.classList.remove("hidden");
  }
}
// AFTER CLICK ON VALIDATION
var formValidation = function(){
  if(personTypeActive === "private") {
    var contact_private_gender = document.getElementById("contact_private_gender");
    var contact_private_name = document.getElementById("contact_private_name");
    var contact_private_surname = document.getElementById("contact_private_surname");
    var contact_private_email = document.getElementById("contact_private_email");
    var contact_private_telephone = document.getElementById("contact_private_telephone");

    // Check Name
    if(contact_private_name.validity.valueMissing || contact_private_name.validity.valueMismatch) {
      contact_private_name.parentNode.classList.add("invalid");
    } else {
      contact_private_name.parentNode.classList.remove("invalid");
    }

    // Check Surname
    if(contact_private_surname.validity.valueMissing || contact_private_surname.validity.valueMismatch) {
      contact_private_surname.parentNode.classList.add("invalid");
    } else {
      contact_private_surname.parentNode.classList.remove("invalid");
    }

    // Check Email
    if(contact_private_email.validity.valueMissing || contact_private_email.validity.valueMismatch) {
      contact_private_email.parentNode.classList.add("invalid");
    } else {
      contact_private_email.parentNode.classList.remove("invalid");
    }

    // Telephone
    if(contact_private_telephone.validity.valueMismatch) {
      contact_private_telephone.parentNode.classList.add("invalid");
    } else {
      contact_private_telephone.parentNode.classList.remove("invalid");
    }
  } else {
    var contact_company_organization = document.getElementById("contact_company_organization");
    var contact_company_id = document.getElementById("contact_company_id");
    var contact_company_address = document.getElementById("contact_company_address");
    var contact_company_city = document.getElementById("contact_company_city");
    var contact_company_zip = document.getElementById("contact_company_zip");
    var contact_company_gender = document.getElementById("contact_company_gender");
    var contact_company_name = document.getElementById("contact_company_name");
    var contact_company_surname = document.getElementById("contact_company_surname");
    var contact_company_email = document.getElementById("contact_company_email");
    var contact_company_telephone = document.getElementById("contact_company_telephone");

    // Check Organization
    if(contact_company_organization.validity.valueMissing || contact_company_organization.validity.valueMismatch) {
      contact_company_organization.parentNode.classList.add("invalid");
    } else {
      contact_company_organization.parentNode.classList.remove("invalid");
    }

    // Check ICO
    if(contact_company_id.validity.valueMissing || contact_company_id.validity.valueMismatch) {
      contact_company_id.parentNode.classList.add("invalid");
    } else {
      contact_company_id.parentNode.classList.remove("invalid");
    }

    // Check Address
    if(contact_company_address.validity.valueMissing || contact_company_address.validity.valueMismatch) {
      contact_company_address.parentNode.classList.add("invalid");
    } else {
      contact_company_address.parentNode.classList.remove("invalid");
    }

    // Check City
    if(contact_company_city.validity.valueMissing || contact_company_city.validity.valueMismatch) {
      contact_company_city.parentNode.classList.add("invalid");
    } else {
      contact_company_city.parentNode.classList.remove("invalid");
    }

    // Check ZIP
    if(contact_company_zip.validity.valueMissing || contact_company_zip.validity.valueMismatch) {
      contact_company_zip.parentNode.classList.add("invalid");
    } else {
      contact_company_zip.parentNode.classList.remove("invalid");
    }

    // Check Name
    if(contact_company_name.validity.valueMissing || contact_company_name.validity.valueMismatch) {
      contact_company_name.parentNode.classList.add("invalid");
    } else {
      contact_company_name.parentNode.classList.remove("invalid");
    }

    // Check Surname
    if(contact_company_surname.validity.valueMissing || contact_company_surname.validity.valueMismatch) {
      contact_company_surname.parentNode.classList.add("invalid");
    } else {
      contact_company_surname.parentNode.classList.remove("invalid");
    }

    // Check Email
    if(contact_company_email.validity.valueMismatch) {
      contact_company_email.parentNode.classList.add("invalid");
    } else {
      contact_company_email.parentNode.classList.remove("invalid");
    }

    // Telephone
    if(contact_company_telephone.validity.valueMismatch) {
      contact_company_telephone.parentNode.classList.add("invalid");
    } else {
      contact_company_telephone.parentNode.classList.remove("invalid");
    }
  }

  // Check the receed
  if(approvalReceed.checked === true) {
    console.log(receedType);
    var receed_email_email = document.getElementById("receed_email_email");
    var receed_post_name = document.getElementById("receed_post_name");
    var receed_post_street = document.getElementById("receed_post_street");
    var receed_post_city = document.getElementById("receed_post_city");
    var receed_post_zip = document.getElementById("receed_post_zip");
    if (receedType === "email") {
      if(receed_email_email.validity.valueMissing || receed_email_email.validity.valueMismatch) {
        receed_email_email.parentNode.classList.add("invalid");
      } else {
        receed_email_email.parentNode.classList.remove("invalid");
      }
    } else if (receedType ==="post") {
      // Check name
      if(receed_post_name.validity.valueMissing || receed_post_name.validity.valueMismatch) {
        receed_post_name.parentNode.classList.add("invalid");
      } else {
        receed_post_street.parentNode.classList.remove("invalid");
      }

      // Check Street
      if(receed_post_street.validity.valueMissing || receed_post_street.validity.valueMismatch) {
        receed_post_street.parentNode.classList.add("invalid");
      } else {
        receed_post_street.parentNode.classList.remove("invalid");
      }

      // Check City
      if(receed_post_city.validity.valueMissing || receed_post_city.validity.valueMismatch) {
        receed_post_city.parentNode.classList.add("invalid");
      } else {
        receed_post_city.parentNode.classList.remove("invalid");
      }

      // Check ZIP
      if(receed_post_zip.validity.valueMissing || receed_post_zip.validity.valueMismatch) {
        receed_post_zip.parentNode.classList.add("invalid");
      } else {
        receed_post_zip.parentNode.classList.remove("invalid");
      }
    }
  }
}
