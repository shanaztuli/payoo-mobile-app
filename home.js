// ****FUNCTION to get INPUT values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
///****FUNCTION to get InnerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}
///****FUNCTION to Set InnerText;;
function setInnerText(value) {
  // console.log(value);
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
///****FUNCTION  to card Toggle;
function toggleHandle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
///****FUNCTION  to Toggle  card button style;
function toggleHandleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove(
      "border-[#0874f2]",
      "bg-[#0874f20d]",
      "text-[#0874f2]"
    );
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
}

// ****add money feature

const pinNumber = 1234;
const transactionData = [];
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const getBank = document.getElementById("bank").value;
    const getAccount = getInputValue("add-account");
    const getAmountValue = getInputValueNumber("add-amount");
    const getPinValue = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");
    if (getAccount.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (getPinValue != pinNumber) {
      alert("please provide valid pin number");
      return;
    }
    // console.log(availableBalance);
    const totalAvailableBalance = getAmountValue + availableBalance;
    setInnerText(totalAvailableBalance);

    const data = {
      name: "Add Money",
      date: new Date().toLocaleDateString,
    };
    transactionData.push(data);
    console.log(transactionData);
  });

//******cashout money feature

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = getInputValue("agent-number");

  const cashPinNumber = getInputValue("cash-pin-number");
  const withdrawAmount = getInputValueNumber("withdraw-amount");
  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("Please provide valid agent number");
    return;
  }
  if (cashPinNumber.length < 4) {
    alert("Please provide valid pin number");
    return;
  }

  // console.log(withdrawAmount, availableBalance);
  const totalNewAvailableBalance = availableBalance - withdrawAmount;
  setInnerText(totalNewAvailableBalance);
});

// ***** transfer money feature

document.getElementById("btn-send").addEventListener("click", function (e) {
  e.preventDefault();
  const transferUserNumber = document.getElementById(
    "transfer-user-number"
  ).value;

  const transferPinNumber = document.getElementById(
    "transfer-pin-number"
  ).value;
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (transferUserNumber.length < 11) {
    alert("Please provide valid user number");
    return;
  }
  if (transferPinNumber.length < 4) {
    alert("Please provide valid pin number");
    return;
  }

  // console.log(withdrawAmount, availableBalance);
  const totalNewAvailableBalance = availableBalance - transferAmount;
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});

//**** */ get bonus feature;
const coupon = 1234;
document.getElementById("btn-bonus").addEventListener("click", function (e) {
  e.preventDefault();

  const bonusCoupon = parseInt(document.getElementById("bonus-coupon").value);

  if (bonusCoupon != coupon) {
    alert("invalid coupon");
    return;
  }
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  const totalNewAvailableBalance = availableBalance + 10;
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});

//Pay Bill feature*****

document.getElementById("btn-pay-now").addEventListener("click", function (e) {
  e.preventDefault();
  const selectPay = document.getElementById("select-pay").value;
  const payBillerAccount = document.getElementById("pay-biller-account").value;
  const payAmount = parseInt(document.getElementById("pay-amount").value);
  const payPin = parseInt(document.getElementById("pay-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (payPin != pinNumber) {
    alert("please provide valid pin number");
    return;
  }
  // console.log(availableBalance);
  const totalAvailableBalance = availableBalance - payAmount;
  document.getElementById("available-balance").innerText =
    totalAvailableBalance;
});

// ****transaction feature

//***** */ toggling feature

document
  .getElementById("button-add-money")
  .addEventListener("click", function (e) {
    toggleHandle("add-money-parent");
    toggleHandleButton("button-add-money");
  });
document
  .getElementById("button-cashout")
  .addEventListener("click", function (e) {
    toggleHandle("cash-out-parent");
    toggleHandleButton("button-cashout");
  });
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (e) {
    toggleHandle("transfer-parent");
    toggleHandleButton("btn-transfer-money");
  });
document.getElementById("card-bonus").addEventListener("click", function (e) {
  toggleHandle("bonus-parent");
  toggleHandleButton("card-bonus");
});
document
  .getElementById("card-pay-bill")
  .addEventListener("click", function (e) {
    toggleHandle("pay-bill-parent");
    toggleHandleButton("card-pay-bill");
  });
document
  .getElementById("card-transactions")
  .addEventListener("click", function (e) {
    toggleHandle("transaction-parent");
    toggleHandleButton("card-transactions");
  });
