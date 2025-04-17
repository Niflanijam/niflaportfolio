
window.onload = function () {
  
  emailjs.init("ipr-B6k8DFozYRRG4"); // Replace with your actual public key
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    emailjs.send("service_oxa25bh", "template_k0ib2ba", {
      name: name,
      email: email,
      message: message,
    })
    .then(function (response) {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset();
    }, function (error) {
      alert("❌ Error sending message: " + JSON.stringify(error));
    });
  });
};
   
   
  
       






   
   
   const jobTitleElement = document.querySelector('.hero-section h1 strong');
    const jobTitles = ["Frontend Developer", "Web Developer", "Full Stack Developer"];
    let currentIndex = 0;
    
    function cycleJobTitles() {
      if (jobTitleElement) {
        jobTitleElement.textContent = jobTitles[currentIndex];
        currentIndex = (currentIndex + 1) % jobTitles.length;
        setTimeout(cycleJobTitles, 500); 
      }
    }
    
   
    
    
    
    
    

    
    document.addEventListener('DOMContentLoaded', cycleJobTitles);


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   


   
   
   
   
   
   
   
   
   













