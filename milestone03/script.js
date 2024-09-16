document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function ValidateForm() {
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("Please fill all required fields correctly.");
            return false;
        }
        return true;
    }
    function GenerateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        // populate resume
        document.getElementById("displayName").innerText = name;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    document.getElementById("displayPicture").src = e.target.result;
                }
            };
            reader.readAsDataURL(picture);
        }
    }
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (ValidateForm()) {
            GenerateResume();
        }
    });
    // generate resume
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", GenerateResume);
    (_c = document.getElementById("email")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", GenerateResume);
    (_d = document.getElementById("address")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", GenerateResume);
    (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", GenerateResume);
    (_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", GenerateResume);
    (_g = document.getElementById("education")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", GenerateResume);
    (_h = document.getElementById("experience")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", GenerateResume);
    (_j = document.getElementById("picture")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", GenerateResume);
});
