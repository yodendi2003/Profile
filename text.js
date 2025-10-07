document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langSwitch");
    let currentLang = "TH";

    langBtn.classList.add("th");
    document.body.classList.add("thai");

    const translations = {
        TH: {
            // ส่วนเดิม
            heroName: 'ชื่อ <span class="highlight">นาย มีชัย มีแก้ว</span>',
            heroNick: "ชื่อเล่น : เฟย์ | นักศึกษาปี 1",
            aboutTitle: "เกี่ยวกับฉัน",
            aboutText: "สวัสดีครับ ผมคือนาย มีชัย มีแก้ว ปัจจุบันศึกษาอยู่ที่วิทยาลัยศรีปทุม SPU คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์และนวัฒกรรมพัฒนาซอฟต์แวร์ ระดับชั้น ปริญญาตรี ชั้นปีที่ 1",
            eduTitle: "การศึกษา",
            eduCollege: "วิทยาลัย : ศรีปทุม SPU",
            eduFaculty: "คณะ : เทคโนโลยีสารสนเทศ",
            eduMajor: "สาขา : วิทยาการคอมพิวเตอร์และนวัฒกรรมพัฒนาซอฟต์แวร์",
            eduLevel: "ระดับชั้น : ปริญญาตรี ชั้นปีที่ 1",
            contactTitle: "ช่องทางการติดต่อ",
            fb: "Facebook",
            ig: "Instagram",
            mail: "อีเมล: Apmeechay@gmail.com",

            // ส่วนตารางเรียนใหม่
            timetableTitle: "ตารางเรียน (ภาค 1/2568)",
            dayTuesday: "อังคาร",
            contentTuesday: `
                <p class="time">15:00-17:30 | CSI101</p>
                <p class="detail">กลุ่ม:006 ปฏิบัติ ห้อง 05-0903</p>
                <p class="lecturer">อ.วุฒิชัย พุ่มเย็น</p>
            `,
            dayWednesday: "พุธ",
            contentWednesday: `
                <p class="time">09:00-10:40 | USC10967</p>
                <p class="detail">กลุ่ม:049 ทฤษฎี</p>
                <p class="time">12:00-14:30 | CSI102</p>
                <p class="detail">กลุ่ม:003 ทฤษฎี ห้อง 05-0409</p>
                <p class="time">15:00-16:40 | CSI101</p>
                <p class="detail">กลุ่ม:003 ทฤษฎี ห้อง 05-0404</p>
            `,
            dayThursday: "พฤหัสบดี",
            contentThursday: `
                <p class="time">09:00-11:30 | USC12067</p>
                <p class="detail">กลุ่ม:749 ทฤษฎี</p>
                <p class="time">12:00-14:30 | CSI106</p>
                <p class="detail">กลุ่ม:703 ทฤษฎี ห้อง 05-0306</p>
                <p class="time">13:00-14:40 | CSI199</p>
                <p class="detail">กลุ่ม:002 ปฏิบัติ ห้อง 01-0500</p>
            `,
        },
        EN: {
            heroName: 'Name: <span class="highlight">Mr. Meechai Meekaew</span>',
            heroNick: "Nickname: Fai | 1st Year Student",
            aboutTitle: "About Me",
            aboutText: "Hello, I am Meechai Meekaew, studying at Sripatum University (SPU). Faculty of IT, Computer Science and Software Innovation, Bachelor Year 1.",
            eduTitle: "Education",
            eduCollege: "College: Sripatum University (SPU)",
            eduFaculty: "Faculty: Information Technology",
            eduMajor: "Major: Computer Science and Software Innovation",
            eduLevel: "Level: Bachelor Year 1",
            contactTitle: "Contact",
            fb: "Facebook",
            ig: "Instagram",
            mail: "Email: Apmeechay@gmail.com",

            timetableTitle: "Class Schedule (Semester 1/2568)",
            dayTuesday: "Tuesday",
            contentTuesday: `
                <p class="time">15:00-17:30 | CSI101</p>
                <p class="detail">Group:006 Practice, Room 05-0903</p>
                <p class="lecturer">Lecturer: Wutthichai Pumyen</p>
            `,
            dayWednesday: "Wednesday",
            contentWednesday: `
                <p class="time">09:00-10:40 | USC10967</p>
                <p class="detail">Group:049 Theory</p>
                <p class="time">12:00-14:30 | CSI102</p>
                <p class="detail">Group:003 Theory, Room 05-0409</p>
                <p class="time">15:00-16:40 | CSI101</p>
                <p class="detail">Group:003 Theory, Room 05-0404</p>
            `,
            dayThursday: "Thursday",
            contentThursday: `
                <p class="time">09:00-11:30 | USC12067</p>
                <p class="detail">Group:749 Theory</p>
                <p class="time">12:00-14:30 | CSI106</p>
                <p class="detail">Group:703 Theory, Room 05-0306</p>
                <p class="time">13:00-14:40 | CSI199</p>
                <p class="detail">Group:002 Practice, Room 01-0500</p>
            `,
        }
    };


    function switchLanguage(lang) {
        for (const key in translations[lang]) {
            const el = document.getElementById(key);
            if (el) {

                if (key === "heroName" || key.startsWith("content")) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    }

    langBtn.addEventListener("click", () => {
        if (currentLang === "TH") {
            currentLang = "EN";
            langBtn.textContent = "EN";

            langBtn.classList.remove("th");
            langBtn.classList.add("en");
            document.body.classList.remove("thai");
            document.body.classList.add("english");

            switchLanguage("EN");
        } else {
            currentLang = "TH";
            langBtn.textContent = "TH";

            langBtn.classList.remove("en");
            langBtn.classList.add("th");
            document.body.classList.remove("english");
            document.body.classList.add("thai");

            switchLanguage("TH");
        }
    });

    switchLanguage("TH");
});