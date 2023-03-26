const date = new Date();
var firstdate = new Date(date.getFullYear(), date.getMonth(), 1);
var lastdate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
let thall = document.querySelectorAll("tr button");
let wow22 = document.querySelector("#wow2");
let wow11 = document.querySelector("#wow1");
let firsttr = document.querySelectorAll("thead th");
const rightbutton = document.querySelector("#rb");
const leftbutton = document.querySelector("#lb");
let monthyear = document.querySelector("#wow3");
let rcount = 0;
let lcount = 0;


for (let j = 0; j < 7; j++) {
    if (firstdate.getDay() === j) {
        wow11.innerText = firsttr[j].textContent;
    }
}

if (lastdate.getDate() === 31) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 31; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 31; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 31; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 31; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 31; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 31; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 31; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}
else if (lastdate.getDate() === 30) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 30; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 30; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 30; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 30; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 30; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 30; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 30; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}
else if (lastdate.getDate() === 29) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 29; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 29; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 29; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 29; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 29; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 29; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 29; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}
else if (lastdate.getDate() === 28) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 28; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 28; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 28; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 28; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 28; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 28; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 28; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}

rightbutton.addEventListener("click", function onClick() {
    for (let i = 0; i < 42; i++) {
        thall[i].innerText = null;
    }
    rcount = rcount + 1;
    firstdate = new Date(date.getFullYear(), date.getMonth() + rcount - lcount, 1);
    lastdate = new Date(date.getFullYear(), date.getMonth() + rcount - lcount + 1, 0);
    wow22.innerText = 1;
    if (lastdate.getDate() === 31) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 31; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 31; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 31; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 31; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 31; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 31; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 31; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 30) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 30; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 30; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 30; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 30; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 30; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 30; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 30; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 29) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 29; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 29; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 29; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 29; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 29; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 29; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 29; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 28) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 28; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 28; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 28; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 28; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 28; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 28; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 28; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
});
leftbutton.addEventListener("click", function onClick() {
    for (let i = 0; i < 42; i++) {
        thall[i].innerText = null;
    }
    lcount = lcount + 1;
    firstdate = new Date(date.getFullYear(), date.getMonth() - lcount + rcount, 1);
    lastdate = new Date(date.getFullYear(), date.getMonth() + rcount - lcount + 1, 0);
    wow22.innerText = 1;
    if (lastdate.getDate() === 31) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 31; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 31; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 31; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 31; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 31; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 31; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 31; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 30) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 30; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 30; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 30; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 30; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 30; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 30; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 30; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 29) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 29; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 29; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 29; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 29; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 29; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 29; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 29; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
    else if (lastdate.getDate() === 28) {
        if (firstdate.getDay() === 0) {
            for (let i = 0; i < 28; i++) {
                thall[i].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 1) {
            for (let i = 0; i < 28; i++) {
                thall[i + 1].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 2) {
            for (let i = 0; i < 28; i++) {
                thall[i + 2].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 3) {
            for (let i = 0; i < 28; i++) {
                thall[i + 3].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 4) {
            for (let i = 0; i < 28; i++) {
                thall[i + 4].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 5) {
            for (let i = 0; i < 28; i++) {
                thall[i + 5].innerText = i + 1;
            }
        }
        else if (firstdate.getDay() === 6) {
            for (let i = 0; i < 28; i++) {
                thall[i + 6].innerText = i + 1;
            }
        }
        let mm = firstdate.getMonth() + 1;
        let yy = firstdate.getFullYear();
        monthyear.innerText = yy + "년" + " " + mm + "월";
        for (let j = 0; j < 7; j++) {
            if (firstdate.getDay() === j) {
                wow11.innerText = firsttr[j].textContent;
            }
        }
    }
});



for (let i = 0; i < thall.length; i++) {
    thall[i].addEventListener("click", function onClick(ev) {
        wow22.innerText = ev.target.textContent;

        if (ev.target.className === "11") {
            wow11.innetText = firsttr[0].textContent;
        }
        else if (ev.target.className === "22") {
            wow11.innerText = firsttr[1].textContent;
        }
        else if (ev.target.className === "33") {
            wow11.innerText = firsttr[2].textContent;
        }
        else if (ev.target.className === "44") {
            wow11.innerText = firsttr[3].textContent;
        }
        else if (ev.target.className === "55") {
            wow11.innerText = firsttr[4].textContent;
        }
        else if (ev.target.className === "66") {
            wow11.innerText = firsttr[5].textContent;
        }
        else if (ev.target.className === "77") {
            wow11.innerText = firsttr[6].textContent;
        }
    })
}

/* 하나로 묶어라

arrowbutton.addEventListener("click", function onClick(ev) {
  if (ev.target.idName === "rb") {
    rcount = rcount +1;
    firstdate = new Date(date.getFullYear(), date.getMonth()+rcount-lcount, 1);
  }
  else if (ev.target.idName === "lb") {
    lcount = lcount+1;
    firstdate = new Date(date.getFullYear(), date.getMonth()-lcount+rcount, 1);
  }
})


rightbutton.addEventListener("click", function onClick() {
  rcount = rcount +1;
  firstdate = new Date(date.getFullYear(), date.getMonth()+rcount-lcount, 1);
  console.log(firstdate);
});
leftbutton.addEventListener("click", function onClick() {
  lcount = lcount+1;
  firstdate = new Date(date.getFullYear(), date.getMonth()-lcount+rcount, 1);
  console.log(firstdate);
});


**********************************************
if (firstdate.getDay() === 0) {
  for (let i = 0; i < 31; i++) {
    thall[i].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===1) {
  for (let i =0; i <31; i++) {
    thall[i+1].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===2) {
  for (let i=0; i<31; i++) {
    thall[i+2].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===3) {
  for (let i=0; i<31; i++) {
    thall[i+3].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===4) {
  for (let i=0; i<31; i++) {
    thall[i+4].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===5) {
  for (let i=0; i<31; i++) {
    thall[i+5].innerText = i + 1;
  }
}
else if (firstdate.getDay() ===6) {
  for (let i=0; i<31; i++) {
    thall[i+6].innerText = i + 1;
  }
}
@@@@@@@@@@@@@@@@@@@@년월 추가@@@@@@@@@@@@@@@@@@@@@@@

monthyear.innerText = "&{firstdate.getMonth()} &{firstdate.getFrullYear()}"
monthyear.innerText =yy"년"+" "+mm+"월";

@@@@@@@@@@@@@@시작시 요일, 일 표기@@@@@@@@

for (let j =0; j<7; j++) {
  if (firstdate.getDay() === j) {
    wow11.innerText = firsttr[j];
  }
}

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
else if (lastdate.getDate() === 29) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 30; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 30; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 30; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 30; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 30; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 30; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 30; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}
else if (lastdate.getDate() === 28) {
    if (firstdate.getDay() === 0) {
        for (let i = 0; i < 30; i++) {
            thall[i].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 1) {
        for (let i = 0; i < 30; i++) {
            thall[i + 1].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 2) {
        for (let i = 0; i < 30; i++) {
            thall[i + 2].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 3) {
        for (let i = 0; i < 30; i++) {
            thall[i + 3].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 4) {
        for (let i = 0; i < 30; i++) {
            thall[i + 4].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 5) {
        for (let i = 0; i < 30; i++) {
            thall[i + 5].innerText = i + 1;
        }
    }
    else if (firstdate.getDay() === 6) {
        for (let i = 0; i < 30; i++) {
            thall[i + 6].innerText = i + 1;
        }
    }
    let mm = firstdate.getMonth() + 1;
    let yy = firstdate.getFullYear();
    monthyear.innerText = yy + "년" + " " + mm + "월";
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
wow22.innerText = 1;



*/