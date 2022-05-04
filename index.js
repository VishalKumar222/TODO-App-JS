const tasklist = [];
var tempobj = {};



function showBox() {
    var inp = document.createElement("input");
    var btn = document.createElement("button");
    var ele = document.createElement("section");
    var cncll = document.createElement("button");
    cncll.className = "cancll";
    cncll.textContent = "Cancel";
    ele.className = "add-item";
    var hed = document.createElement("p");
    hed.id = "heading";
    inp.type = "text";
    inp.style.width = "60%";
    inp.style.marginLeft = "20%"
    inp.id = "inp";
    btn.className = "add";
    btn.textContent = "Add";
    hed.textContent = "Add New List";
    ele.appendChild(hed);
    ele.appendChild(inp);
    ele.appendChild(btn);
    ele.appendChild(cncll);
    document.body.appendChild(ele);
    let blurbac = document.getElementById("secid");
    blurbac.style.filter = "blur(4px)";
    btn.addEventListener("click", addon);

    cncll.addEventListener("click", () => {
        document.body.removeChild(cncll.parentElement);
        console.log(document.body.removeChild(cncll.parentElement))
        blurbac.style.filter = "blur(0px)";
    })

    function addon() {
        var inpvalue = document.getElementById("inp");
        tempobj = {
            id: Date.now(),
            invalue: inpvalue.value
        }
        var deleteEle = document.createElement("span");
        deleteEle.className = "material-icons";
        deleteEle.textContent = "delete";
        deleteEle.style.float = "bottom"

        deleteEle.addEventListener("click", () => {
            var idddd = this.idd;
            var itemdel = document.getElementById(idddd);
            itemdel.parentElement.removeChild(itemdel);

        })

        console.log(this);

        tasklist.push(tempobj);

        var presentid = this.idd;
        var addEle = document.createElement("span");
        addEle.className = "material-icons";
        addEle.textContent = "add_circle";

        addEle.addEventListener("click", () => {
            AddItems(document.body);
            let blurbac = document.getElementById("secid")
            var cont = document.querySelector(".add-item");
            var add = document.body.querySelector(".add");
            var cncl = document.body.querySelector(".cancll");
            var inp = document.querySelector("#inp")
            var el = document.createElement("p");
            var butn = document.createElement("button");
            butn.textContent = "done"
            butn.style.border = "none";
            butn.style.background = "red";
            butn.style.borderRadius = "13px";
            var del = addEle.previousElementSibling;


            add.addEventListener('click', () => {
                el.innerText = inp.value;
                el.appendChild(butn);
                del.before(el);
                butn.addEventListener("click", () => {
                    var e = butn.parentElement;
                    e.style.textDecoration = "line-through";
                })
                document.body.removeChild(cont);
                blurbac.style.filter = "blur(0px)"
                console.log(el);
                console.log("add working")
            })
            cncl.addEventListener('click', () => {
                document.body.removeChild(cont);
                blurbac.style.filter = "blur(0px)"
                console.log("cncll working")
            })

        })


        var createEle = document.createElement("div");
        createEle.className = "box";
        this.idd = tempobj.id;
        this.invalue = tempobj.inpvalue;
        createEle.id = tempobj.id;
        var hedbtn = document.createElement("button")
        hedbtn.style.border = "none";
        hedbtn.style.padding = "0";
        hedbtn.style.background = "none";
        var heading = document.createElement("p");
        heading.className = "h2";
        heading.textContent = inpvalue.value;
        hedbtn.appendChild(heading)

        createEle.append(hedbtn);
        var hrtag = document.createElement("hr");

        var show = document.getElementById("boxess");
        createEle.appendChild(hrtag);
        createEle.append(deleteEle);
        createEle.append(addEle);
        show.appendChild(createEle);
        document.body.removeChild(ele);
        blurbac.style.filter = "blur(0px)";

        hedbtn.addEventListener("click", () => {
            var listbox = hedbtn.parentElement;
            var hdng = document.getElementById("hed1");
            listbox.classList.add("classaftr");
            console.log(listbox, hdng)
            hdng.style.visibility = "hidden"
            var backbtn = document.createElement("span");
            backbtn.className = "material-icons";
            backbtn.textContent = "arrow_back";
            document.body.appendChild(backbtn);

            backbtn.addEventListener("click", () => {
                hdng.style.visibility = "visible"
                document.body.removeChild(backbtn)
                listbox.classList.remove("classaftr")
            })



        })
    }
}
console.log(tasklist);





function AddItems(loc) {
    let blurbac = document.getElementById("secid");
    var inp = document.createElement("input");
    var btn = document.createElement("button");
    var ele = document.createElement("section");
    var cncll = document.createElement("button");
    cncll.className = "cancll";
    cncll.textContent = "Cancel";
    ele.className = "add-item";
    var hed = document.createElement("p");
    hed.id = "heading";
    inp.type = "text";
    inp.style.width = "60%";
    inp.style.marginLeft = "20%"
    inp.id = "inp";
    btn.className = "add";
    btn.textContent = "Add";
    hed.textContent = "Add New List";
    ele.appendChild(hed);
    ele.appendChild(inp);
    ele.appendChild(btn);
    ele.appendChild(cncll);
    loc.appendChild(ele);
    blurbac.style.filter = "blur(8px)";
}