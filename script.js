script.js doesn't contain: ["addEventListener", "DOMContentLoaded", "function"]
script.js doesn't contain: ["document.getElementById", "registration-form"] 
script.js doesn't contain: ["form-feedback"]

Make feedbackDiv visible by setting its style.display to “block”.
If isValid remains true, set the textContent of feedbackDiv to “Registration successful!” and its style.color to “#28a745”.
If isValid is false, join messages with <br> to form a single string, and assign this to theinnerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".
