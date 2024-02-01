const detail = {
  ticketPrice: 100,
  availableTicket: 100,
};

const booking = async () => {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const count = document.getElementById("count").value;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count > detail.availableTicket) {
        reject({
            message: "Ticket not available",
            flag: false
        });
      } else {
        resolve({
          source: source,
          destination: destination,
          count: count,
          flag: true
        });
      }
    }, 4000);
  });
};

const bookTicket = async (event) => {
  event.preventDefault();
  console.log("bookTicket");
  const ticketStatus = document.getElementById("ticketStatus"); //h1

  const book = await booking();
  console.log("boook....",book);
  if(book.flag ==true){
    console.log("Ticket booked successfully");
    console.log(book);
    ticketStatus.innerHTML = "Ticket booked successfully";
  }
  else{
    ticketStatus.innerHTML = "Ticket not available"
    console.log(book.message);
    
  }
  
};
