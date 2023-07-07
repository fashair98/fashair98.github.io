const mobileBRs = document.getElementsByClassName('mb-br');

for (let i = 0; i < mobileBRs.length; i++) {
  if (window.innerWidth <= 999) {
    mobileBRs[i].innerHTML = '<br>';
  }
}

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
            outfits: selectedOutfits,
            email
        };

        // Make POST request
        fetch("https://script.google.com/macros/s/AKfycbyKWfB9mkJtlUbZVn4J0q9cWiReoHlMOA1MCheacBHzQRiRda5ZmBYj2xZ9bz0WpOsU8g/exec", { 
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (response.ok) {
                    alert("Signup successful!");
                    signupForm.reset();
                    window.location.href = "/"
                } else {
                    alert("An error occurred. Please try again.");
                }
            })
            .catch(error => {
                alert("An error occurred. Please try again.");
            });
    });
});
