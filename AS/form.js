const addNewFieldBtn  = document.getElementById("addNewFieldBtn");
const spaceforAppend  = document.getElementById("spaceforAppend");
let newfieldcount = 1;



addNewFieldBtn.addEventListener("click",addNewField)





function addNewField(e) {
  e.preventDefault();
  newfieldcount++;
  const EmployementTemplate = `<label for="fnamme">Previous Company Name #${newfieldcount}</label>
         <input type="text" placeholder="Previous Company Name" name="" id="fname" value="">
       </div>
       <div class="divide two margin-down">
         <div class="df">
           <label for="fnamme">Phone</label>
           <input type="text" placeholder="Designation" name="" id="fname" value="">
         </div>
         <div>
           <label for="enamme">Joining Year</label>
           <input type="text" placeholder="" name="" id="ename" value="">
         </div>
         </div>`;

    const div = document.createElement('div');
    div.classList = "margin-down border-top";
    console.log(div);
  div.innerHTML = EmployementTemplate;
  spaceforAppend.append(div)
}
