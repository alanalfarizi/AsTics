/**
 * Function copy link
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        
        /**
         * Function toast notification
         */
        document.getElementById("toast").innerHTML = `
            <div class="toast-container toast-gone">
                <p>✅ Link copied!</p>
            </div>
        `;

        /**
         * Function to hide/remove toast notification
         */

        setTimeout(() => {
            document
                .querySelector("#toast .toast-container")
                .classList.add("toast-gone");
        }, 300)
        
        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000)
    });
});

/**
 * Function icon sosmed while hover
 */

// document.querySelectorAll(".sosmed i").forEach((sosmed) => {
//     sosmed.addEventListener("mouseenter", () => {
//         sosmed.classList.remove("ph");
//         sosmed.classList.add("ph-fill");
//     });

//     sosmed.addEventListener("mouseleave", () => {
//         sosmed.classList.remove("ph-fill");
//         sosmed.classList.add("ph");
//     });
// });

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  const textElement = sosmed.querySelector(".sosmed-text");

  sosmed.addEventListener("mouseenter", () => {
    sosmed.querySelector("i").classList.remove("ph");
    sosmed.querySelector("i").classList.add("ph-fill");
    textElement.style.display = "block";
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.querySelector("i").classList.remove("ph-fill");
    sosmed.querySelector("i").classList.add("ph");
    textElement.style.display = "none";
  });
});