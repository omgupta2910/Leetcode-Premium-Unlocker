(()=>{"use strict";class e{constructor(e,t){this.name=e,this.button=t}}class t{constructor(e,t,n,a,l,o){this.frequency=e,this.id=t,this.difficulty=n,this.problemUrl=a,this.problemName=l,this.acceptance=o}}class n extends t{constructor(e,t,n,a,l,o,i,r){super(e,t,n,a,l,o),this.companyName=i,this.duration=r}}class a{constructor(){self.data={}}getData(){return self.data}getList(e){return e in self.data?self.data[e]:[]}appendData(e,t){e in self.data?self.data[e].push(t):self.data[e]=[t]}}class l{static SIXMONTHS="6 months";static TWOYEARS="2 years";static ALLTIME="All time";static ONEYEAR="1 year"}function o(){function e(e){let t=document.createElement("div"),n=document.createElement("h3");return n.textContent=e,n.style="color: black;\n        text-align: center;\n        ",t.appendChild(n),t}function t(t){let n=e(t);return n.style="\n       width: 5%\n       ",n}function n(e){let t=document.createElement("div");t.style="\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #e9ecef;\n        border-radius: 0.25rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        ";let n=document.createElement("div");return n.style=`\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: #0d6efd;\n        `,t.appendChild(n),t}function a(e,t){let n=document.createElement("div"),a=document.createElement("a");return a.href=t,a.textContent=e,n.appendChild(a),n.style="\n        width: 50%\n        ",n}function l(t){let n=e(t);return n.style="\n        width: 12%\n        ",n}function o(t){let n=e(String(100*t).slice(0,2)+"%");return n.style="\n        width: 10%\n        ",n}function i(){let e=document.createElement("div");return e.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",e}this.getTableHeaderElement=function(){let e=i(),n=t("#"),r=a("Title","#"),s=o("Acceptance"),d=l("Difficulty"),c=o("Frequency");return n.setAttribute("role","modal-header"),r.setAttribute("role","modal-header"),s.setAttribute("role","modal-header"),d.setAttribute("role","modal-header"),c.setAttribute("role","modal-header"),e.appendChild(n),e.appendChild(r),e.appendChild(s),e.appendChild(d),e.appendChild(c),e},this.getTableContentElement=function(e,...r){let s=document.createElement("div");for(let r=0;r<=e.length-1;r++){let d=i(),c=e[r].frequency,h=e[r].id,u=e[r].difficulty,p=e[r].problemUrl,m=e[r].problemName,C=e[r].acceptance;d.appendChild(t(h)),d.appendChild(a(m,p)),d.appendChild(o(C)),d.appendChild(l(u)),d.appendChild(n(c)),s.append(d)}return s.id="table-content",s}}class i{constructor(e,t){this.parentElement=t,this.tableId="table-content",this.tableData=e,this.elementGenerator=new o}generateDurationButton(e){let t=document.createElement("button");return t.innerText=e,t.style=" \n        width:5%\n        ",t.setAttribute("duration",e),t.addEventListener("click",this.onDurationButtonClicked),t}generateRowDiv(){let e=document.createElement("div");return e.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",e}generateDurationButtons(){let e=this.generateRowDiv();return e.appendChild(this.generateDurationButton(l.SIXMONTHS)),e.appendChild(this.generateDurationButton(l.ONEYEAR)),e.appendChild(this.generateDurationButton(l.TWOYEARS)),e.appendChild(this.generateDurationButton(l.ALLTIME)),e}test(){this.parentElement.appendChild(this.getContentElement())}getContentElement(){let e=document.createElement("div"),t=this.tableData.getList(l.ALLTIME),n=this.elementGenerator.getTableHeaderElement(),a=this.elementGenerator.getTableContentElement(t);return e.appendChild(this.generateDurationButtons()),e.appendChild(n),e.appendChild(a),e}onDurationButtonClicked=e=>{this.swapTable(e.currentTarget.getAttribute("duration"))};swapTable=e=>{null!=document.getElementById(this.tableId)&&document.getElementById(this.tableId).remove();let t=this.tableData.getList(e),n=this.elementGenerator.getTableContentElement(t);this.parentElement.appendChild(n)}}var r=new class{constructor(){this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let e=document.createElement("div");return e.style="\n        background-color: #fefefe;\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        width: 80%;\n        mid-height: 15%\n        ",e}getModalContentBox(){return this.modalContentBox}appendModal(e){e.appendChild(this.modal)}appendToModal(e){this.modal.appendChild(e)}appendToContainer(e){this.modalContentBox.appendChild(e)}createCloseButton(){let e=document.createElement("span");return e.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",e.innerText="x",e.addEventListener("click",resetModal),e}createModal(){let e=document.createElement("div");return e.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),e.id="CompanyModal",e}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=e=>{e.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}},s=new function(){function t(e){var a=document.getElementsByClassName("mt-0")[0];const l=new MutationObserver((()=>{n(e)}));a?l.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{t()}),500)}function n(t){let n=function(){let t=[],n=document.getElementsByClassName("swiper-slide-active"),a=n[n.length-1].getElementsByTagName("a");for(let n=0;n<=a.length-1;n++){let l=a[n].firstChild.firstChild.textContent.toLowerCase(),o=new e(l,a[n]);a[n].href="javascript:void(0)",t.push(o)}return t}();for(let e=0;e<=n.length-1;e++){let a=n[e].name;if(1!=n[e].button.getAttribute("listener-registered")){n[e].button.setAttribute("listener-registered","true"),n[e].button.setAttribute("company-name",a);for(let a=0;a<=t.length-1;a++)n[e].button.addEventListener("click",t[a])}}}this.onCompanyButtonClick=[],this.addOnCompanyButtonClickEvent=function(e){this.onCompanyButtonClick.push(e)},this.initialize=function(){n(this.onCompanyButtonClick),t(this.onCompanyButtonClick)}},d=new class{constructor(){this.sheetsId="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE",this.api_key="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs",this.companyPageTableData={};let e=this.fetchPageTable();this.setCompanyPageTableData(e)}getUrl(e){return`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetsId}/values/${e}?key=${this.api_key}`}fetchPageTable(){let e=this.getUrl("CompaniesProblem_Map!A:C");var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),JSON.parse(t.responseText)}setCompanyPageTableData(e){let t=e.values;for(let e=1;e<=t.length-1;e++){let n=t[e][0],a=t[e][1],l=t[e][2];this.companyPageTableData[n]=[a,l]}}haveData(e){return e in this.companyPageTableData}getCompanyProblemData(e){let t=this.fetchCompanyProblemData(e);return this.parseData(t)}fetchCompanyProblemData(e){if(!this.haveData(e))return[];let t=`CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,n=this.getUrl(t);var a=new XMLHttpRequest;return a.open("GET",n,!1),a.send(),JSON.parse(a.responseText).values}parseData(e){let t=new a;for(let a=0;a<=e.length-1;a++){let l=e[a][2],o=e[a][1],i=e[a][7],r=e[a][6],s=e[a][4],d=e[a][5],c=e[a][0],h=e[a][3],u=new n(l,o,i,r,s,d,c,h);t.appendData(h,u)}return t}};s.addOnCompanyButtonClickEvent((e=>{let t=e.currentTarget.getAttribute("company-name"),n=d.getCompanyProblemData(t);new i(n,r.getModalContentBox()).test(),r.openModal()})),s.initialize()})();