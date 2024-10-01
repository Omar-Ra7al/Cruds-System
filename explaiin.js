//  وقبل ما نخش في الجافا لازم نقسم  برضوشغل الجافا
//  1- fn get total price
//  2- fn creat element
/*
محتاجين  قبل ما نبدا ننشى العنصر نلم البيانات دي واوال ما تسمع كحلمه بيانت ف انت محتج تحفظهم في مكان 
قبل ما تبدا 
واحسن حاجه ممكن تتعامل فيها مع البيانت هي الاراى 
*/
//  3- save data in local storage
//  4- clear inputs
//  5- read
//  6- count
//  7- delete
//  8- update
//  9- search
//  10- clean data
// Get Total of the price
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let creat = document.getElementById("submit");
let mood = "Creat";
let tmp;

// عاوزسن نشغل الفانكشن دي فين على الاربع خانات بتوعنا ف هنروح نحطهم في
// HTML
function getTotal() {
  if (price.value.length !== 0) {
    let TotalWithoutDis = +price.value + +taxes.value + +ads.value;
    total.innerHTML = TotalWithoutDis - +discount.value;
    // مش محتاج تعمل كوندشن تانيه عشان تغير لون التوتال
    total.style.backgroundColor = "#040";
    total.classList.remove("animation");
  } else {
    total.classList.remove("animation");
    total.innerHTML = "";
    total.style.backgroundColor = "rgb(0, 187, 255)";
  }
  if (total.innerHTML < 0) {
    total.classList.add("animation");
    total.style.backgroundColor = "red";
  }
}

//  2- fn creat element
/*
محتاجين  قبل ما نبدا ننشى العنصر نلم البيانات دي واوال ما تسمع كلمه بيانت ف انت محتج تحفظهم في مكان 
قبل ما تبدا 
واحسن حاجه ممكن تتعامل فيها مع البيانت هي الاراى 
وعشان البيانات متسيحش محتاجين نحطهم في اوبجيكت  باسمائهم 
وبعد كدا نروح حادفينهم في الاراى بتاعتنا 
*/

/*
let productData;
if (localStorage.getItem("productData") !== null) {
  productData = JSON.parse(localStorage.productData);
} else {
}
كنا في الاو عاملين كدا بس 
productData = [];
عشان نبعت الحاجه للوكال استورج بس لقينا مشكله ايه  هي 
ان كل ما نيجي نعمل لوود البيانت القديمه تتشتال ويتحط مكانها جديد
ليه لان الجفا اسكربت بتمش على الكود سطر سطر  
فهتلاقي الاراى فاضيه فكل ما تعمل لووود هتفضيلك الرارى من الاوبجيكت القيد الي اننت حطبته فيها 
كدا تمام نيجي بقا للجديد 
شرح
1-  declare the variable >> لسا محددناش هو ارارى ولا لا عشان عنددنا كوندشن تحت هنسال بيها ؟؟
هل اللوكال استورج مش فضيه لو مش فاضيه هننفز طزا طاب لو فاضيه 
خليلنا الفاريبول ده اراى ليه 
عشان نبوش فيه الاوبيجكت ونبعته للوكال استورج 
وبعدكدا لو ملقنهاش اضيه هنخلي الفاريبول ده هيساوي البيانات القديمه  ازاى يا جدع 
هفهمك الفاريبول ده لما كانت اللوكال استورج فاضيه دخل اراى حواهاالاوبجيكت 
وجينا بقا في الفانكشن قولناله اعمنا بوش للداتا 
ف عمل بوش للداتا وجينا بقا يا معلم اكدنا على حاجه مكنش متاكد عليها 
 >> ومش هنعرف ناكد عليها غير بالطريقه دي اننا نقوله ان الفاريبول ده >>  الي هو البيانات الي فيه عبار عن اراى  
ف مش محتاجين نعرفه انه اراى تاني 
هنقوله بقا انه هيساوى البيانت الي في اللوكال استورج بعد معملننلها تحليل ليه عشان 
يرجع لهيئته الطبيعيه الي هي اراى في كل كليك هتعمله 
وبكدا نبق اكدنا عليه ان الفاريبول مش هيكون فاضي كل منعمل ريلود 
لا الفاريبول ده هيتحط فيه البانات القديمه والجديده 
*/
//  3- save data in local storage
let productData;
if (localStorage.getItem("productData") !== null) {
  productData = JSON.parse(localStorage.productData);
} else {
  productData = [];
}
creat.onclick = function creatElement() {
  // عارف بقا لو كنا اكمتفينا بالاوبجيكت على كل ضغطه انت هتضغطها هيعمل ابديت للبينات الي هندم بمعنى ان اي حاجه قديمه هتكون طارت

  if (title.value.trim() === "") {
    creat.preventDefault(); // Prevent the default click behavior
  }
  let singleProudct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  productData.push(singleProudct);
  window.localStorage.setItem("productData", JSON.stringify(productData));
  // عشان نشغل موضوع الكونت يامعللم كنا محتاحين نفكر ايه الفانكشن الي بتنشائ االمنتج
  // هنلاقي الكيرييت وهنلاقي جواها اننا بنببش في الوزوكال عندنا الاوبجيكت
  // ولازم كوندشن تتاكد انهه لو مش فاضي عشان ميبقاش عندك
  // الزامي انه ينشائ الاوبيجكت بالرقم بتاع الكونت
  // وبرضو عشان لو حد حب يستظؤف ويكتب انع عاوز منتج -1
  if (mood === "Creat") {
    // سبقا كدا دلوقت في حاله الكرريت هيعمل نفس الي كان بعيمله
    if (singleProudct.count > 1) {
      for (let i = 0; i < singleProudct.count; i++) {
        productData.push(singleProudct);
      }
    } else {
      productData.push(singleProudct);
    }
  } else {
    //  update
    // الشغل الججديد كله هنا بس
    productData[tmp] = singleProudct;
    creat.innerHTML = "creat";
    count.style.display = "block";
  }

  //  ممكن نخخلي الموضوع مرتب شويه ونحط اسم الفانكشن الي بتفضي لانبت بس
  clearInputs(); // هتشتغل لما تعمل كليك على كريييت
  showData();
};

function clearInputs() {
  let allInpts = document.querySelectorAll("input");
  allInpts.forEach((input) => {
    input.value = "";
  });
  total.innerHTML = "";
  total.style.backgroundColor = "rgb(0, 187, 255)";
}

//  window.localStorage.clear();

// C وكجا احنا خلصانا اول حرف من ال مشروع الي هو
// نبدا بقا في تاني حرف الي هو اني اقراء البيانات عادي
function showData() {
  // Get all Titles
  let table = "";
  for (let i = 0; i < productData.length; i++) {
    // اخنا عملناها بطريقه الابيند بس انا شايف الطريقه باعته احسن واسهل للقرائه
    // جاب كود ال HTML
    // وعدل عليه بس
    let tbody = document.getElementById("tbody");
    //   = عارف لو محطناش ال +  قبل ال
    // هيعجل على البيانات القديمه  فانت لاززم تقوله ده زائد الجديد
    table += `
     <tr>
              <td>${i + 1}</td>
              <td>${productData[i].title}</td>
              <td>${productData[i].price}</td>
              <td>${productData[i].taxes}</td>
              <td>${productData[i].ads}</td>
              <td>${productData[i].discount}</td>
              <td>${productData[i].total}</td>
              <td>${productData[i].category}</td>
              <td><button id="update">update</button></td>
              <td><button id="delete">delete</button></td>
            </tr>
    `;
    tbody.innerHTML = table;

    // let idRow = document.createElement("tr");
    // let id = document.createElement("td");
    // let title = document.createElement("td");
    // let price = document.createElement("td");
    // let taxes = document.createElement("td");
    // let ads = document.createElement("td");
    // let discount = document.createElement("td");
    // let total = document.createElement("td");
    // let category = document.createElement("td");
    // tbody.appendChild(idRow);
    // // // append elements
    // idRow.appendChild(id);
    // idRow.appendChild(title);
    // idRow.appendChild(price);
    // idRow.appendChild(taxes);
    // idRow.appendChild(ads);
    // idRow.appendChild(discount);
    // idRow.appendChild(total);
    // idRow.appendChild(category);
    // id.textContent = i + 1;
    // title.textContent = productData[i].title;
    // price.textContent = productData[i].price;
    // taxes.textContent = productData[i].taxes;
    // ads.textContent = productData[i].ads;
    // discount.textContent = productData[i].discount;
    // total.innerHTML = productData[i].total;
    // category.textContent = productData[i].category;
  }
}
// وقبل منعمل اي حاجه بنشوف انهي فانكشن الي فيها البيانات بتاعتنا عشان نعمل الكوندشن
// Delet ALL >
// وعملنا اتشيكم على الراى اشهل بدل نروح سا لوكال استورج
if (productData.length > 1) {
  deletAll.style.display = "block";
} else {
  deletAll.style.display = "none";
}
deletAll.onclick = function () {
  // انت البيانات موجوده عندك في مكانين اللوكال استورج وال الاراى
  localStorage.removeItem("productData");
  productData = [];
  tbody.innerHTML = "";
  deletAll.style.display = "none";
};
// Delet ALL >
// كان فيه مشكله ان كل لما يعمل اتشيمم على البيانات بيحتاج تعمله ريلوود لما حطبنا الكوندشن جوه الشوداتا اشتغل عادي
showData(); // لو مكناش حطينا الفانكشن دي بره كانت المنتجاتهتتسمح لاننا مهنكون  كدا بنقوله شغلنا الموضوع دع بس لما نضغط على الزرار

// localStorage.clear();
// تمام دلوقتي اناا عملتها بطريقه اصعب هو عملها بطريقه اروق فشخ
// انت في الاول وفي الخر عندك لووب شغاله صح طبما تيجي نحط الاي دي ك براميتير
// ازاى ختروح تحط الايفينت بتاعك في الكود بتاع التش تي ام ال الي في الحافا
// وتحط ال الاي دي ك ارجيو مينت للبراميتر
let update = document.getElementById("update");
let deletee = document.querySelectorAll("#delete");
// console.log(deletee);
deletee.forEach(
  (delet) =>
    (delet.onclick = function del() {
      let indexToremove =
        this.parentNode.parentNode.firstElementChild.innerHTML - 1;
      productData.splice(indexToremove, 1);
      this.parentNode.parentNode.remove();
      showData();
    })
);

// console.log(productData);
// الطريقه دي اسهل فشخ ورايقه واريح لقرايه الكود تمام وبتعمل نفس الي انت
// عاوزه طريقتك فيها لفه برضو حلوه بس افرد معندكش اي دي ؟؟

// function deleteData(indexofElement) {
//   // productData = localStorage.getItem("productData");
//   productData.splice(indexofElement, 1);
//   localStorage.productData = JSON.stringify(productData);
//   // let indexToremove =
//   //   index.parentNode.parentNode.firstElementChild.innerHTML - 1;
//   // let tr = document.querySelectorAll("#tr");
//   // tr[indexofElement].remove();
//   // console.log(indexofElement)
//   // غلطنا تاني في حاجه اننا بنقوله يمسحلنا ده طب احنا مش عندنا
//   // قانكشن بتحدث بيانت ال اتش تي ا ال
//   // طب مننده عليها هنا كل ما نيجي ندوس على الديليت وهتعدل على البيانات
//   showData();
// }

// // في موضوع الابديت احنا اول حاجه محتاحين نرفع البيانات للعناصر الي فوق تمام
// // تاني حاجه اوزين نخلي زرار الكرييت اسمه ابديت
// let upadtButton = document.querySelector(".updatedata");
// upadtButton.style.display = "none";
function updateData(element) {
  // let storeData = JSON.parse(localStorage.productData)[element];
  title.value = productData[element].title;
  price.value = productData[element].price;
  taxes.value = productData[element].taxes;
  ads.value = productData[element].ads;
  discount.value = productData[element].discount;
  category.value = productData[element].category;
  getTotal();
  // هنواجه دلوقت مشكله بسيطه بس ان التوتال مش هيتحسب لان الفانكشن بتاعته مش بتبتغل غير لنما ن  غط على الكيبورد
  // ف هننددنه عليه هنا بقا يا معلم
  //وهنطير خهانه ال count
  count.style.display = "none";
  // creat.style.display = "none";
  // upadtButton.style.display = "block";

  scroll({ top: 0, behavior: "smooth" });
  mood = "Update";
  tmp = element;
  creat.innerHTML = "Update";
  // دلوقتي هو مانشناش عنصر جديد هو عدل على نفس العنصر بطريقه رايقه فشخ
  // عمل متغير اسم
  // mood = "creat">> وهيغيريه لما يعوز يعدل على العنصر
  // ودلوقت هيروح يعمل كوندشن لو المو\د بتاعنا كرييت شغلي الفانكشن بتاعه الكريت
  // وهيخلي المتغير في فانكشن الابديت ل ابديت
  // ف في الاول هنروحلمكان الي في زرار الكرييت الي بيعمل بوش للعناصر واللوب بتاعهالكونت بالمره
  // ونعمل كوندشنمش هتشتغل غير لما يكونالموود باسم كرييت
  // تمام بس هو معملش كونددشن في الكريت لا عمل
  // else{}
  // بس زيمانت قولت هنجيب ال
  // i بتاعه اللوب ازاى ؟؟
  // في حاله شبه دي بنستخدم حاجه اسمها المتغير الوهمي او المتغير المساعد
  // هنروح نعمل متغير جلوبال في الصفحه بتعتنا عادي بس في اولها مثلا عشان يشتغل في كل حته
  // ولما نيجي بقا يا معلم ندووس على الابديت خليلي المتغير الي عملناه في الجلوبال بيساوي ال لووب الي عنجنا
  // في فانكشن الابديت
  // وبكدا اتحلت يا معلم

  // وحاجه كمان هو مرحسش على اللوكال وبهدل نفيه شبهك لا راح للاوبجكت الاصلي
  // وقاله ان  البيانات اي جايه بالاندكس كزا هيساوي البيانات ال عندك
  //و عشان يرجع الحاجه زي ماهي في الاصل راح قاله رجعلي المود ككرييت ر

  // upadtButton.onclick = function () {
  //   productData[element].title = title.value;
  //   productData[element].price = price.value;
  //   productData[element].tataxes = taxes.value;
  //   productData[element].ads = ads.value;
  //   productData[element].discdiscount = discount.value;
  //   productData[element].category = category.value;
  //   let store = JSON.parse(localStorage.getItem("productData"));
  //   store = productData;
  //   localStorage.setItem("productData", JSON.stringify(store));
  //   showData();
  //   upadtButton.style.display = "none";
  //   count.style.display = "block";
  //   creat.style.display = "block";
  // };
}

// console.log((productData[0].title = "none"));

// Search >>
/*
1- هنسرش بال تايتل والكاتيجوري 
فهنعمل مود برضو مود لده و لده 
2- وهنعمل فانكشن وهنشغلها لما ندوس على اي زرار من الاتين فهنحطهم في ال اتش تي امل
3- وعاوزوين نجيب الايدي بتاعهم عشان نعمل كوندشن بيه لو الايدي بيساوي تايتل مثلا خليلي
الموود تايتل فاهم 
ممكن تعملها بالتيكست كونتينت كدا بس الايدي كويسه برضو 
عشان هنجبهاههنا بططريقه كويسه 
*/

let searchMood = "title";
function getSearchMood(id) {
  // conditon by Id >>

  if (id === "searchTitle") {
    searchMood = "title";
    search.placeholder = "Search by Title";
  } else {
    searchMood = "category";
    search.placeholder = "Search by Category";
  }
  search.focus();
}
// getSearchMood(this.id) << في كل زرار عندنا شغلنا الفانكشن وحطينا جواه دول

// عندنا فننكشن تانيه هنشغلها لما نيجي نكتب بس هنا على طول

// وعاوزين نجيب الفاليو الي فيها فهنقوله في الارجيومينت this.value
function searchData(value) {
  // دول لازم يكونو بره عشان لو مش بره هيطبعلك عنصر واحد بس
  // وباخص ال تابل ليه عشان يعد على قيمته يا معلم يجبلك القديم والجديد فاهم
  let table = "";
  let tbody = document.getElementById("tbody");
  // هنعمل بقا يا معلم كوندشن تانيه عشان نعرفه ان النتايح الي هتطلع تطلع على حسب المود بتاعنا
  if (searchMood == "title") {
    for (let i = 0; i < productData.length; i++) {
      // console.log(productData[i].title);
      // زودنا موضو الانكلود عشان ندور جوه الاندكس بتاع البيانات ان في حرف مووجود فاهم
      // ومن خلال الانكلودز تقدر تدور على حرف كلمه وكدا
      if (productData[i].title.includes(value)) {
        // i نخليه يرجعالاندكس الي ه ال

        table += `
     <tr id="tr">
              <td>${i + 1}</td>
              <td>${productData[i].title}</td>
              <td>${productData[i].price}</td>
              <td>${productData[i].taxes}</td>
              <td>${productData[i].ads}</td>
              <td>${productData[i].discount}</td>
              <td>${productData[i].total}</td>
              <td>${productData[i].category}</td>
              <td><button onclick="updateData(${i})" id="update">update</button></td>
              <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `;
      }
    }
  } else {
    for (let i = 0; i < productData.length; i++) {
      // console.log(productData[i].title);
      // زودنا موضو الانكلود عشان ندور جوه الاندكس بتاع البيانات ان في حرف مووجود فاهم
      // ومن خلال الانكلودز تقدر تدور على حرف كلمه وكدا
      if (productData[i].category.includes(value)) {
        // i نخليه يرجعالاندكس الي ه ال

        table += `
     <tr id="tr">
              <td>${i + 1}</td>
              <td>${productData[i].title}</td>
              <td>${productData[i].price}</td>
              <td>${productData[i].taxes}</td>
              <td>${productData[i].ads}</td>
              <td>${productData[i].discount}</td>
              <td>${productData[i].total}</td>
              <td>${productData[i].category}</td>
              <td><button onclick="updateData(${i})" id="update">update</button></td>
              <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
              </tr>
              `;
      }
    }
  }
  // ليه تحت عشان هنستخدمخا في الاتنين التايتل والكاتيجوري
  tbody.innerHTML = table;
  // بدل منكتبها مرتين
}
