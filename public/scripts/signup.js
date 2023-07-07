// const signupForm = document.getElementById('signup-form');

// signupForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const fullName = document.getElementById('fullName').value;
//   const phone = document.getElementById('phone').value;
//   const city = document.getElementById('city').value;
//   const outfits = Array.from(document.getElementById('outfits').selectedOptions).map(option => option.value).join(', ');
//   const email = document.getElementById('email').value;

//   const data = {
//     fullName: fullName,
//     phone: phone,
//     city: city,
//     outfits: outfits,
//     email: email
//   };

//   fetch('https://script.google.com/macros/s/AKfycbwEy3kvINVHrVAHi33_74uLJQz0x4HffqsBMzBofun4JE2rEXt92VPF6UueqRP9zsqn/exec', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Signup successful!');
//       // Perform any further actions upon successful signup
//     } else {
//       console.error('Signup failed!');
//       // Handle signup failure
//     }
//   })
//   .catch(error => {
//     console.error('An error occurred during signup:', error);
//     // Handle error
//   });


// });






document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const fullName = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        // const outfits = Array.from(document.getElementById("outfits").selectedOptions).map(option => option.value).join(", ");
        const email = document.getElementById("email").value;

        const form = document.querySelector('#signup-form'); // Replace 'myForm' with the ID of your form
        const outfits = form.querySelectorAll('input[name="outfits[]"]:checked');
        let selectedOutfits = '';

        outfits.forEach((outfit, index) => {
            selectedOutfits += outfit.value;
            if (index < outfits.length - 1) {
                selectedOutfits += ', ';
            }
        });

        console.log(selectedOutfits);

        // Create payload object
        const payload = {
            fullName,
            phone,
            city,
            outfits,
            email
        };

        // Make POST request
        fetch("https://script.google.com/macros/s/AKfycbyKWfB9mkJtlUbZVn4J0q9cWiReoHlMOA1MCheacBHzQRiRda5ZmBYj2xZ9bz0WpOsU8g/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "https://fashair.in"
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (response.ok) {
                    alert("Signup successful!");
                    signupForm.reset();
                } else {
                    alert("An error occurred. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred. Please try again.");
            });
    });
});
