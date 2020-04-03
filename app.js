document.getElementById("button1").addEventListener("click", loadCustomer);
// load a single customer
function loadCustomer(e) {
  xhr = new XMLHttpRequest();
  // last argument is true for asynchronus
  xhr.open("GET", "customer.JSON", true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customer = JSON.parse(this.responseText);
      const output = `<ul>
        <li>ID:${customer.id}</li>
        <li>Name:${customer.name}</li>
        <li>Company:${customer.company}</li>
        <li>Number:${customer.number}</li>
      </ul>`;
      document.getElementById("customer").innerHTML = output;
    }
  };
  xhr.send();
}
document.getElementById("button2").addEventListener("click", loadCustomers);
//load an array of customers
function loadCustomers(e) {
  xhr = new XMLHttpRequest();
  // last argument is true for asynchronus
  xhr.open("GET", "customers.JSON", true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach(customer => {
        output += `<ul>
        <li>ID:${customer.id}</li>
        <li>Name:${customer.name}</li>
        <li>Company:${customer.company}</li>
        <li>Number:${customer.number}</li>
      </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };
  xhr.send();
}
