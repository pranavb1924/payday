const stateTaxData={
    AL:{name:"Alabama",rates:[{min:0,max:500,rate:.02},{min:500,max:3000,rate:.04},{min:3000,max:Infinity,rate:.05}]},
    AK:{name:"Alaska",rates:[{min:0,max:Infinity,rate:0}]},
    AZ:{name:"Arizona",rates:[{min:0,max:27808,rate:.025},{min:27808,max:55615,rate:.035},{min:55615,max:166843,rate:.0417},{min:166843,max:Infinity,rate:.045}]},
    AR:{name:"Arkansas",rates:[{min:0,max:4999,rate:.02},{min:4999,max:9999,rate:.04},{min:9999,max:Infinity,rate:.059}]},
    CA:{name:"California",rates:[{min:0,max:10099,rate:.01},{min:10099,max:23942,rate:.02},{min:23942,max:37788,rate:.04},{min:37788,max:52455,rate:.06},{min:52455,max:66295,rate:.08},{min:66295,max:338639,rate:.093},{min:338639,max:406364,rate:.103},{min:406364,max:677275,rate:.113},{min:677275,max:Infinity,rate:.123}]},
    CO:{name:"Colorado",rates:[{min:0,max:Infinity,rate:.044}]},
    CT:{name:"Connecticut",rates:[{min:0,max:10000,rate:.03},{min:10000,max:50000,rate:.05},{min:50000,max:100000,rate:.055},{min:100000,max:200000,rate:.06},{min:200000,max:250000,rate:.065},{min:250000,max:500000,rate:.069},{min:500000,max:Infinity,rate:.0699}]},
    DE:{name:"Delaware",rates:[{min:0,max:2000,rate:0},{min:2000,max:5000,rate:.022},{min:5000,max:10000,rate:.039},{min:10000,max:20000,rate:.048},{min:20000,max:25000,rate:.052},{min:25000,max:60000,rate:.0555},{min:60000,max:Infinity,rate:.066}]},
    FL:{name:"Florida",rates:[{min:0,max:Infinity,rate:0}]},
    GA:{name:"Georgia",rates:[{min:0,max:750,rate:.01},{min:750,max:2250,rate:.02},{min:2250,max:3750,rate:.03},{min:3750,max:5250,rate:.04},{min:5250,max:7000,rate:.05},{min:7000,max:Infinity,rate:.0575}]},
    HI:{name:"Hawaii",rates:[{min:0,max:2400,rate:.014},{min:2400,max:4800,rate:.032},{min:4800,max:9600,rate:.055},{min:9600,max:14400,rate:.064},{min:14400,max:19200,rate:.068},{min:19200,max:24000,rate:.072},{min:24000,max:36000,rate:.076},{min:36000,max:48000,rate:.079},{min:48000,max:150000,rate:.0825},{min:150000,max:175000,rate:.09},{min:175000,max:200000,rate:.10},{min:200000,max:Infinity,rate:.11}]},
    ID:{name:"Idaho",rates:[{min:0,max:1567,rate:.01},{min:1567,max:3135,rate:.032},{min:3135,max:4702,rate:.036},{min:4702,max:6269,rate:.041},{min:6269,max:7837,rate:.051},{min:7837,max:11760,rate:.061},{min:11760,max:Infinity,rate:.066}]},
    IL:{name:"Illinois",rates:[{min:0,max:Infinity,rate:.0495}]},
    IN:{name:"Indiana",rates:[{min:0,max:Infinity,rate:.0323}]},
    IA:{name:"Iowa",rates:[{min:0,max:1743,rate:.0033},{min:1743,max:3486,rate:.0067},{min:3486,max:6972,rate:.0225},{min:6972,max:15687,rate:.0414},{min:15687,max:26145,rate:.0563},{min:26145,max:34860,rate:.0596},{min:34860,max:52290,rate:.0625},{min:52290,max:78435,rate:.0744},{min:78435,max:Infinity,rate:.0853}]},
    KS:{name:"Kansas",rates:[{min:0,max:15000,rate:.031},{min:15000,max:30000,rate:.0525},{min:30000,max:Infinity,rate:.057}]},
    KY:{name:"Kentucky",rates:[{min:0,max:Infinity,rate:.05}]},
    LA:{name:"Louisiana",rates:[{min:0,max:12500,rate:.0185},{min:12500,max:50000,rate:.035},{min:50000,max:Infinity,rate:.0425}]},
    ME:{name:"Maine",rates:[{min:0,max:23000,rate:.058},{min:23000,max:54450,rate:.0675},{min:54450,max:Infinity,rate:.0715}]},
    MD:{name:"Maryland",rates:[{min:0,max:1000,rate:.02},{min:1000,max:2000,rate:.03},{min:2000,max:3000,rate:.04},{min:3000,max:100000,rate:.0475},{min:100000,max:125000,rate:.05},{min:125000,max:150000,rate:.0525},{min:150000,max:250000,rate:.055},{min:250000,max:Infinity,rate:.0575}]},
    MA:{name:"Massachusetts",rates:[{min:0,max:Infinity,rate:.05}]},
    MI:{name:"Michigan",rates:[{min:0,max:Infinity,rate:.0425}]},
    MN:{name:"Minnesota",rates:[{min:0,max:28080,rate:.0535},{min:28080,max:92230,rate:.068},{min:92230,max:171220,rate:.0785},{min:171220,max:Infinity,rate:.0985}]},
    MS:{name:"Mississippi",rates:[{min:0,max:5000,rate:0},{min:5000,max:10000,rate:.04},{min:10000,max:Infinity,rate:.05}]},
    MO:{name:"Missouri",rates:[{min:0,max:1207,rate:0},{min:1207,max:2414,rate:.02},{min:2414,max:3621,rate:.025},{min:3621,max:4828,rate:.03},{min:4828,max:6035,rate:.035},{min:6035,max:7242,rate:.04},{min:7242,max:8449,rate:.045},{min:8449,max:9656,rate:.05},{min:9656,max:Infinity,rate:.054}]},
    MT:{name:"Montana",rates:[{min:0,max:3100,rate:.01},{min:3100,max:5500,rate:.02},{min:5500,max:8400,rate:.03},{min:8400,max:11300,rate:.04},{min:11300,max:14500,rate:.05},{min:14500,max:18700,rate:.06},{min:18700,max:Infinity,rate:.0675}]},
    NE:{name:"Nebraska",rates:[{min:0,max:3440,rate:.0246},{min:3440,max:20590,rate:.0351},{min:20590,max:33180,rate:.0501},{min:33180,max:Infinity,rate:.0684}]},
    NV:{name:"Nevada",rates:[{min:0,max:Infinity,rate:0}]},
    NH:{name:"New Hampshire",rates:[{min:0,max:Infinity,rate:0}]},
    NJ:{name:"New Jersey",rates:[{min:0,max:20000,rate:.014},{min:20000,max:35000,rate:.0175},{min:35000,max:40000,rate:.035},{min:40000,max:75000,rate:.05525},{min:75000,max:500000,rate:.0637},{min:500000,max:1000000,rate:.0897},{min:1000000,max:Infinity,rate:.1075}]},
    NM:{name:"New Mexico",rates:[{min:0,max:5500,rate:.017},{min:5500,max:11000,rate:.032},{min:11000,max:16000,rate:.047},{min:16000,max:210000,rate:.049},{min:210000,max:Infinity,rate:.059}]},
    NY:{name:"New York",rates:[{min:0,max:8500,rate:.04},{min:8500,max:11700,rate:.045},{min:11700,max:13900,rate:.0525},{min:13900,max:80650,rate:.055},{min:80650,max:215400,rate:.06},{min:215400,max:1077550,rate:.0685},{min:1077550,max:5000000,rate:.0965},{min:5000000,max:25000000,rate:.103},{min:25000000,max:Infinity,rate:.109}]},
    NC:{name:"North Carolina",rates:[{min:0,max:Infinity,rate:.0475}]},
    ND:{name:"North Dakota",rates:[{min:0,max:41775,rate:.011},{min:41775,max:101050,rate:.0204},{min:101050,max:210825,rate:.0227},{min:210825,max:458350,rate:.0264},{min:458350,max:Infinity,rate:.029}]},
    OH:{name:"Ohio",rates:[{min:0,max:25000,rate:0},{min:25000,max:44250,rate:.02765},{min:44250,max:88450,rate:.03226},{min:88450,max:110650,rate:.03688},{min:110650,max:Infinity,rate:.0399}]},
    OK:{name:"Oklahoma",rates:[{min:0,max:1000,rate:.0025},{min:1000,max:2500,rate:.0075},{min:2500,max:3750,rate:.0175},{min:3750,max:4900,rate:.0275},{min:4900,max:7200,rate:.0375},{min:7200,max:Infinity,rate:.0475}]},
    OR:{name:"Oregon",rates:[{min:0,max:3750,rate:.0475},{min:3750,max:9450,rate:.0675},{min:9450,max:52150,rate:.0875},{min:52150,max:Infinity,rate:.099}]},
    PA:{name:"Pennsylvania",rates:[{min:0,max:Infinity,rate:.0307}]},
    RI:{name:"Rhode Island",rates:[{min:0,max:68200,rate:.0375},{min:68200,max:155050,rate:.0475},{min:155050,max:Infinity,rate:.0599}]},
    SC:{name:"South Carolina",rates:[{min:0,max:3200,rate:0},{min:3200,max:16040,rate:.03},{min:16040,max:Infinity,rate:.067}]},
    SD:{name:"South Dakota",rates:[{min:0,max:Infinity,rate:0}]},
    TN:{name:"Tennessee",rates:[{min:0,max:Infinity,rate:0}]},
    TX:{name:"Texas",rates:[{min:0,max:Infinity,rate:0}]},
    UT:{name:"Utah",rates:[{min:0,max:Infinity,rate:.0485}]},
    VT:{name:"Vermont",rates:[{min:0,max:42150,rate:.0335},{min:42150,max:102200,rate:.066},{min:102200,max:209750,rate:.076},{min:209750,max:Infinity,rate:.0875}]},
    VA:{name:"Virginia",rates:[{min:0,max:3000,rate:.02},{min:3000,max:5000,rate:.03},{min:5000,max:17000,rate:.05},{min:17000,max:Infinity,rate:.0575}]},
    WA:{name:"Washington",rates:[{min:0,max:Infinity,rate:0}]},
    WV:{name:"West Virginia",rates:[{min:0,max:10000,rate:.03},{min:10000,max:25000,rate:.04},{min:25000,max:40000,rate:.045},{min:40000,max:60000,rate:.06},{min:60000,max:Infinity,rate:.065}]},
    WI:{name:"Wisconsin",rates:[{min:0,max:12760,rate:.0354},{min:12760,max:25520,rate:.0465},{min:25520,max:280950,rate:.0627},{min:280950,max:Infinity,rate:.0765}]},
    WY:{name:"Wyoming",rates:[{min:0,max:Infinity,rate:0}]},
    DC:{name:"District of Columbia",rates:[{min:0,max:10000,rate:.04},{min:10000,max:40000,rate:.06},{min:40000,max:60000,rate:.065},{min:60000,max:250000,rate:.085},{min:250000,max:500000,rate:.0925},{min:500000,max:1000000,rate:.0975},{min:1000000,max:Infinity,rate:.1075}]}
  };
  
  const federalTaxBrackets={
    single:[
      {min:0,max:11600,rate:.1},{min:11600,max:47150,rate:.12},{min:47150,max:100525,rate:.22},
      {min:100525,max:191950,rate:.24},{min:191950,max:243725,rate:.32},
      {min:243725,max:609350,rate:.35},{min:609350,max:Infinity,rate:.37}],
    married:[
      {min:0,max:23200,rate:.1},{min:23200,max:94300,rate:.12},{min:94300,max:201050,rate:.22},
      {min:201050,max:383900,rate:.24},{min:383900,max:487450,rate:.32},
      {min:487450,max:731200,rate:.35},{min:731200,max:Infinity,rate:.37}],
    married_separately:[
      {min:0,max:11600,rate:.1},{min:11600,max:47150,rate:.12},{min:47150,max:100525,rate:.22},
      {min:100525,max:191950,rate:.24},{min:191950,max:243725,rate:.32},
      {min:243725,max:365600,rate:.35},{min:365600,max:Infinity,rate:.37}],
    head_of_household:[
      {min:0,max:16550,rate:.1},{min:16550,max:63100,rate:.12},{min:63100,max:100500,rate:.22},
      {min:100500,max:191950,rate:.24},{min:191950,max:243700,rate:.32},
      {min:243700,max:609350,rate:.35},{min:609350,max:Infinity,rate:.37}]
  };
  
  const standardDeductions={single:14600,married:29200,married_separately:14600,head_of_household:21900};
  
  let exchangeRates={USD:1};
  
  async function loadExchangeRates(){
    try{
      const resp=await fetch("https://api.exchangerate.host/latest?base=USD&symbols=INR,CNY,GBP");
      const data=await resp.json();
      if(data&&data.rates){exchangeRates={USD:1,...data.rates}}
    }catch(e){console.error("Exchange-rate fetch failed",e)}
  }
  
  function convert(amount,to){return amount*(exchangeRates[to]??1)}
  
  function formatCurrency(amount,curr="USD"){
    return new Intl.NumberFormat("en-US",{style:"currency",currency:curr,minimumFractionDigits:2}).format(amount)
  }
  
  function calculateTaxFromBrackets(income,brackets){
    let tax=0;
    for(const b of brackets){
      if(income>b.min){
        const taxable=Math.min(income,b.max)-b.min;
        tax+=taxable*b.rate;
      }
    }
    return tax
  }
  
  function calculateTaxes(annual,state,status){
    const taxable=Math.max(0,annual-standardDeductions[status]);
    const federal=calculateTaxFromBrackets(taxable,federalTaxBrackets[status]);
    const stateTax=state&&stateTaxData[state]?calculateTaxFromBrackets(annual,stateTaxData[state].rates):0;
    const ss=Math.min(annual*.062,168600*.062);
    const medicare=annual*.0145+(annual>200000?(annual-200000)*.009:0);
    const total=federal+stateTax+ss+medicare;
    return{gross:annual,federal,state:stateTax,socialSecurity:ss,medicare,totalTax:total,net:annual-total,effectiveRate:annual?total/annual*100:0}
  }
  
  function initializeStates(){
    const opts=Object.entries(stateTaxData).map(([c,d])=>`<option value="${c}">${d.name}</option>`).join("");
    ["stateSelect","compareState1","compareState2"].forEach(id=>document.getElementById(id).insertAdjacentHTML("beforeend",opts))
  }
  
  function updateInputFields(hourly,weekly,biweekly,monthly,annual){
    const map={hourlyRate:hourly,weeklyPay:weekly,biweeklyPay:biweekly,monthlyPay:monthly,annualSalary:annual};
    for(const [id,val] of Object.entries(map)){
      const el=document.getElementById(id);
      if(el&&!el.matches(":focus"))el.value=val>0?val.toFixed(2):""
    }
  }
  
  function updateConverted(){
    const curr=document.getElementById("currencySelect").value;
    document.querySelectorAll(".tax-item .converted").forEach(el=>{
      const base=document.getElementById(el.dataset.baseId);
      const amt=parseFloat(base.textContent.replace(/[^0-9.-]+/g,""))||0;
      el.textContent=formatCurrency(convert(amt,curr),curr)
    })
  }
  
  function updateStateComparison(){
    const s1=document.getElementById("compareState1").value;
    const s2=document.getElementById("compareState2").value;
    const annual=parseFloat(document.getElementById("annualSalary").value)||0;
    const status=document.getElementById("filingStatus").value;
    const c1=document.getElementById("state1Card"),c2=document.getElementById("state2Card");
    if(s1&&annual){
      const t1=calculateTaxes(annual,s1,status);
      c1.style.display="block";
      document.getElementById("state1Name").textContent=stateTaxData[s1].name;
      document.getElementById("state1Gross").textContent=formatCurrency(t1.gross);
      document.getElementById("state1Taxes").textContent=formatCurrency(t1.totalTax);
      document.getElementById("state1Net").textContent=formatCurrency(t1.net);
      document.getElementById("state1Monthly").textContent=formatCurrency(t1.net/12);
      document.getElementById("state1Rate").textContent=t1.effectiveRate.toFixed(2)+"%";
    }else c1.style.display="none";
    if(s2&&annual){
      const t2=calculateTaxes(annual,s2,status);
      c2.style.display="block";
      document.getElementById("state2Name").textContent=stateTaxData[s2].name;
      document.getElementById("state2Gross").textContent=formatCurrency(t2.gross);
      document.getElementById("state2Taxes").textContent=formatCurrency(t2.totalTax);
      document.getElementById("state2Net").textContent=formatCurrency(t2.net);
      document.getElementById("state2Monthly").textContent=formatCurrency(t2.net/12);
      document.getElementById("state2Rate").textContent=t2.effectiveRate.toFixed(2)+"%";
      if(s1){
        const t1=calculateTaxes(annual,s1,status);
        const diff=t2.net-t1.net;
        const badge=document.getElementById("stateDifference");
        c1.classList.remove("lower-tax","higher-tax");c2.classList.remove("lower-tax","higher-tax");
        if(t1.effectiveRate<t2.effectiveRate){c1.classList.add("lower-tax");c2.classList.add("higher-tax")}
        else if(t2.effectiveRate<t1.effectiveRate){c1.classList.add("higher-tax");c2.classList.add("lower-tax")}
        if(diff>0){badge.textContent=`+${formatCurrency(diff)}/yr better than ${stateTaxData[s1].name}`;badge.className="difference-badge positive"}
        else{badge.textContent=`${formatCurrency(Math.abs(diff))}/yr worse than ${stateTaxData[s1].name}`;badge.className="difference-badge negative"}
      }
    }else c2.style.display="none"
  }
  
  function updateCalculations(){
    const hpw=parseFloat(document.getElementById("hoursPerWeek").value)||40;
    const state=document.getElementById("stateSelect").value;
    const status=document.getElementById("filingStatus").value;
    const after=document.getElementById("afterTaxToggle").classList.contains("active");
    if(after&&!state){document.getElementById("stateRequirementNotice").style.display="block";updateConverted();return}
    else document.getElementById("stateRequirementNotice").style.display="none";
  
    let annual=0;
    if(document.getElementById("hourlyRate").value){annual=parseFloat(document.getElementById("hourlyRate").value||0)*hpw*52}
    else if(document.getElementById("weeklyPay").value){annual=parseFloat(document.getElementById("weeklyPay").value||0)*52}
    else if(document.getElementById("biweeklyPay").value){annual=parseFloat(document.getElementById("biweeklyPay").value||0)*26}
    else if(document.getElementById("monthlyPay").value){annual=parseFloat(document.getElementById("monthlyPay").value||0)*12}
    else if(document.getElementById("annualSalary").value){annual=parseFloat(document.getElementById("annualSalary").value)||0}
  
    const hourly=annual/(hpw*52),weekly=annual/52,biweekly=annual/26,monthly=annual/12;
    const tax=calculateTaxes(annual,state,status);const mult=after?(tax.net/tax.gross):1;
    document.getElementById("resultHourly").textContent=formatCurrency(hourly*mult);
    document.getElementById("resultWeekly").textContent=formatCurrency(weekly*mult);
    document.getElementById("resultBiweekly").textContent=formatCurrency(biweekly*mult);
    document.getElementById("resultMonthly").textContent=formatCurrency(monthly*mult);
    document.getElementById("resultAnnual").textContent=formatCurrency(annual*mult);
    document.getElementById("effectiveTaxRate").textContent=tax.effectiveRate.toFixed(2)+"%";
    document.getElementById("taxGrossIncome").textContent=formatCurrency(tax.gross);
    document.getElementById("taxFederal").textContent=formatCurrency(tax.federal);
    document.getElementById("taxState").textContent=formatCurrency(tax.state);
    document.getElementById("taxSocialSecurity").textContent=formatCurrency(tax.socialSecurity);
    document.getElementById("taxMedicare").textContent=formatCurrency(tax.medicare);
    document.getElementById("taxTotal").textContent=formatCurrency(tax.totalTax);
    document.getElementById("taxNetIncome").textContent=formatCurrency(tax.net);
    updateInputFields(hourly,weekly,biweekly,monthly,annual);
    updateConverted();updateStateComparison()
  }
  
  document.addEventListener("DOMContentLoaded",async()=>{
    initializeStates();await loadExchangeRates();
    ["hourlyRate","weeklyPay","biweeklyPay","monthlyPay","annualSalary","hoursPerWeek","stateSelect","filingStatus"].forEach(id=>{
      document.getElementById(id).addEventListener("input",updateCalculations);
      document.getElementById(id).addEventListener("change",updateCalculations)
    });
    document.getElementById("currencySelect").addEventListener("change",updateConverted);
    document.getElementById("compareState1").addEventListener("change",updateStateComparison);
    document.getElementById("compareState2").addEventListener("change",updateStateComparison);
    document.getElementById("afterTaxToggle").addEventListener("click",function(){
      const state=document.getElementById("stateSelect").value;
      const wrap=document.getElementById("stateSelectWrapper");const lab=document.getElementById("stateLabel");
      if(!this.classList.contains("active")&&!state){
        document.getElementById("stateRequirementNotice").style.display="block";
        wrap.classList.add("attention");
        if(!lab.querySelector(".required-indicator")){
          const span=document.createElement("span");span.className="required-indicator";span.textContent="*";
          lab.insertBefore(span,lab.firstChild.nextSibling)
        }
        setTimeout(()=>wrap.classList.remove("attention"),1000);return
      }
      this.classList.toggle("active");
      if(this.classList.contains("active")&&!lab.querySelector(".required-indicator")){
        const span=document.createElement("span");span.className="required-indicator";span.textContent="*";
        lab.insertBefore(span,lab.firstChild.nextSibling)
      }else if(!this.classList.contains("active")){
        const ind=lab.querySelector(".required-indicator");if(ind)ind.remove()
      }
      updateCalculations()
    });
    document.getElementById("stateSelect").addEventListener("change",function(){
      const lab=document.getElementById("stateLabel");const ind=lab.querySelector(".required-indicator");
      if(this.value){if(ind)ind.remove();document.getElementById("stateRequirementNotice").style.display="none"}
      else if(document.getElementById("afterTaxToggle").classList.contains("active")&&!ind){
        const span=document.createElement("span");span.className="required-indicator";span.textContent="*";
        lab.insertBefore(span,lab.firstChild.nextSibling)
      }
      updateCalculations()
    });
    document.getElementById("hourlyRate").value="25";
    updateCalculations()
  });

