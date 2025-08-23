// ****add money feature

const pinNumber = 2345;
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const getBank = document.getElementById("bank").value;
    const getAccount = document.getElementById("add-account").value;
    const getAmountValue = parseInt(
      document.getElementById("add-amount").value
    );
    const getPinValue = parseInt(document.getElementById("add-pin").value);

    // console.log(getBank, getAccount, getAmountValue, getPinValue);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
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
    document.getElementById("available-balance").innerText =
      totalAvailableBalance;
  });

//******cashout money feature

document.getElementById("btn-withdraw").addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = document.getElementById("agent-number").value;

  const cashPinNumber = document.getElementById("cash-pin-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

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
  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
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
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "none";
    document.getElementById("transaction-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";

    document.getElementById("bonus-parent").style.display = "none";
    document.getElementById("latest-section").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
  });
document
  .getElementById("button-cashout")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "none";
    document.getElementById("transaction-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("latest-section").style.display = "none";

    document.getElementById("bonus-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transaction-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("bonus-parent").style.display = "none";
    document.getElementById("latest-section").style.display = "none";

    document.getElementById("transfer-parent").style.display = "block";
  });
document.getElementById("card-bonus").addEventListener("click", function (e) {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("transfer-parent").style.display = "none";
  document.getElementById("transaction-parent").style.display = "none";
  document.getElementById("pay-bill-parent").style.display = "none";
  document.getElementById("latest-section").style.display = "none";

  document.getElementById("bonus-parent").style.display = "block";
});
document
  .getElementById("card-pay-bill")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "none";
    document.getElementById("bonus-parent").style.display = "none";
    document.getElementById("transaction-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "block";
  });
document
  .getElementById("card-transactions")
  .addEventListener("click", function (e) {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-parent").style.display = "none";
    document.getElementById("bonus-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("latest-section").style.display = "none";

    document.getElementById("transaction-parent").style.display = "block";
  });
