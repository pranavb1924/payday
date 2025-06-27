const stateTaxData = {
  AL: {
    name: "Alabama",
    rates: [
      { min: 0, max: 500, rate: 0.02 },
      { min: 500, max: 3000, rate: 0.04 },
      { min: 3000, max: Infinity, rate: 0.05 }
    ]
  },
  AK: {
    name: "Alaska",
    rates: [{ min: 0, max: Infinity, rate: 0 }]
  },
  AZ: {
    name: "Arizona",
    rates: [
      { min: 0, max: 27808, rate: 0.025 },
      { min: 27808, max: 55615, rate: 0.035 },
      { min: 55615, max: 166843, rate: 0.0417 },
      { min: 166843, max: Infinity, rate: 0.045 }
    ]
  },
  AR: {
    name: "Arkansas",
    rates: [
      { min: 0, max: 4999, rate: 0.02 },
      { min: 4999, max: 9999, rate: 0.04 },
      { min: 9999, max: Infinity, rate: 0.059 }
    ]
  },
  CA: {
    name: "California",
    rates: [
      { min: 0, max: 10099, rate: 0.01 },
      { min: 10099, max: 23942, rate: 0.02 },
      { min: 23942, max: 37788, rate: 0.04 },
      { min: 37788, max: 52455, rate: 0.06 },
      { min: 52455, max: 66295, rate: 0.08 },
      { min: 66295, max: 338639, rate: 0.093 },
      { min: 338639, max: 406364, rate: 0.103 },
      { min: 406364, max: 677275, rate: 0.113 },
      { min: 677275, max: Infinity, rate: 0.123 }
    ]
  },
  CO: {
    name: "Colorado",
    rates: [{ min: 0, max: Infinity, rate: 0.044 }]
  },
  CT: {
    name: "Connecticut",
    rates: [
      { min: 0, max: 10000, rate: 0.03 },
      { min: 10000, max: 50000, rate: 0.05 },
      { min: 50000, max: 100000, rate: 0.055 },
      { min: 100000, max: 200000, rate: 0.06 },
      { min: 200000, max: 250000, rate: 0.065 },
      { min: 250000, max: 500000, rate: 0.069 },
      { min: 500000, max: Infinity, rate: 0.0699 }
    ]
  },
  DE: {
    name: "Delaware",
    rates: [
      { min: 0, max: 2000, rate: 0 },
      { min: 2000, max: 5000, rate: 0.022 },
      { min: 5000, max: 10000, rate: 0.039 },
      { min: 10000, max: 20000, rate: 0.048 },
      { min: 20000, max: 25000, rate: 0.052 },
      { min: 25000, max: 60000, rate: 0.0555 },
      { min: 60000, max: Infinity, rate: 0.066 }
    ]
  },
  FL: { name: "Florida", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  GA: {
    name: "Georgia",
    rates: [
      { min: 0, max: 750, rate: 0.01 },
      { min: 750, max: 2250, rate: 0.02 },
      { min: 2250, max: 3750, rate: 0.03 },
      { min: 3750, max: 5250, rate: 0.04 },
      { min: 5250, max: 7000, rate: 0.05 },
      { min: 7000, max: Infinity, rate: 0.0575 }
    ]
  },
  HI: {
    name: "Hawaii",
    rates: [
      { min: 0, max: 2400, rate: 0.014 },
      { min: 2400, max: 4800, rate: 0.032 },
      { min: 4800, max: 9600, rate: 0.055 },
      { min: 9600, max: 14400, rate: 0.064 },
      { min: 14400, max: 19200, rate: 0.068 },
      { min: 19200, max: 24000, rate: 0.072 },
      { min: 24000, max: 36000, rate: 0.076 },
      { min: 36000, max: 48000, rate: 0.079 },
      { min: 48000, max: 150000, rate: 0.0825 },
      { min: 150000, max: 175000, rate: 0.09 },
      { min: 175000, max: 200000, rate: 0.1 },
      { min: 200000, max: Infinity, rate: 0.11 }
    ]
  },
  ID: {
    name: "Idaho",
    rates: [
      { min: 0, max: 1567, rate: 0.01 },
      { min: 1567, max: 3135, rate: 0.032 },
      { min: 3135, max: 4702, rate: 0.036 },
      { min: 4702, max: 6269, rate: 0.041 },
      { min: 6269, max: 7837, rate: 0.051 },
      { min: 7837, max: 11760, rate: 0.061 },
      { min: 11760, max: Infinity, rate: 0.066 }
    ]
  },
  IL: {
    name: "Illinois",
    rates: [{ min: 0, max: Infinity, rate: 0.0495 }]
  },
  IN: {
    name: "Indiana",
    rates: [{ min: 0, max: Infinity, rate: 0.0323 }]
  },
  IA: {
    name: "Iowa",
    rates: [
      { min: 0, max: 1743, rate: 0.0033 },
      { min: 1743, max: 3486, rate: 0.0067 },
      { min: 3486, max: 6972, rate: 0.0225 },
      { min: 6972, max: 15687, rate: 0.0414 },
      { min: 15687, max: 26145, rate: 0.0563 },
      { min: 26145, max: 34860, rate: 0.0596 },
      { min: 34860, max: 52290, rate: 0.0625 },
      { min: 52290, max: 78435, rate: 0.0744 },
      { min: 78435, max: Infinity, rate: 0.0853 }
    ]
  },
  KS: {
    name: "Kansas",
    rates: [
      { min: 0, max: 15000, rate: 0.031 },
      { min: 15000, max: 30000, rate: 0.0525 },
      { min: 30000, max: Infinity, rate: 0.057 }
    ]
  },
  KY: { name: "Kentucky", rates: [{ min: 0, max: Infinity, rate: 0.05 }] },
  LA: {
    name: "Louisiana",
    rates: [
      { min: 0, max: 12500, rate: 0.0185 },
      { min: 12500, max: 50000, rate: 0.035 },
      { min: 50000, max: Infinity, rate: 0.0425 }
    ]
  },
  ME: {
    name: "Maine",
    rates: [
      { min: 0, max: 23000, rate: 0.058 },
      { min: 23000, max: 54450, rate: 0.0675 },
      { min: 54450, max: Infinity, rate: 0.0715 }
    ]
  },
  MD: {
    name: "Maryland",
    rates: [
      { min: 0, max: 1000, rate: 0.02 },
      { min: 1000, max: 2000, rate: 0.03 },
      { min: 2000, max: 3000, rate: 0.04 },
      { min: 3000, max: 100000, rate: 0.0475 },
      { min: 100000, max: 125000, rate: 0.05 },
      { min: 125000, max: 150000, rate: 0.0525 },
      { min: 150000, max: 250000, rate: 0.055 },
      { min: 250000, max: Infinity, rate: 0.0575 }
    ]
  },
  MA: { name: "Massachusetts", rates: [{ min: 0, max: Infinity, rate: 0.05 }] },
  MI: {
    name: "Michigan",
    rates: [{ min: 0, max: Infinity, rate: 0.0425 }]
  },
  MN: {
    name: "Minnesota",
    rates: [
      { min: 0, max: 28080, rate: 0.0535 },
      { min: 28080, max: 92230, rate: 0.068 },
      { min: 92230, max: 171220, rate: 0.0785 },
      { min: 171220, max: Infinity, rate: 0.0985 }
    ]
  },
  MS: {
    name: "Mississippi",
    rates: [
      { min: 0, max: 5000, rate: 0 },
      { min: 5000, max: 10000, rate: 0.04 },
      { min: 10000, max: Infinity, rate: 0.05 }
    ]
  },
  MO: {
    name: "Missouri",
    rates: [
      { min: 0, max: 1207, rate: 0 },
      { min: 1207, max: 2414, rate: 0.02 },
      { min: 2414, max: 3621, rate: 0.025 },
      { min: 3621, max: 4828, rate: 0.03 },
      { min: 4828, max: 6035, rate: 0.035 },
      { min: 6035, max: 7242, rate: 0.04 },
      { min: 7242, max: 8449, rate: 0.045 },
      { min: 8449, max: 9656, rate: 0.05 },
      { min: 9656, max: Infinity, rate: 0.054 }
    ]
  },
  MT: {
    name: "Montana",
    rates: [
      { min: 0, max: 3100, rate: 0.01 },
      { min: 3100, max: 5500, rate: 0.02 },
      { min: 5500, max: 8400, rate: 0.03 },
      { min: 8400, max: 11300, rate: 0.04 },
      { min: 11300, max: 14500, rate: 0.05 },
      { min: 14500, max: 18700, rate: 0.06 },
      { min: 18700, max: Infinity, rate: 0.0675 }
    ]
  },
  NE: {
    name: "Nebraska",
    rates: [
      { min: 0, max: 3440, rate: 0.0246 },
      { min: 3440, max: 20590, rate: 0.0351 },
      { min: 20590, max: 33180, rate: 0.0501 },
      { min: 33180, max: Infinity, rate: 0.0684 }
    ]
  },
  NV: { name: "Nevada", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  NH: { name: "New Hampshire", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  NJ: {
    name: "New Jersey",
    rates: [
      { min: 0, max: 20000, rate: 0.014 },
      { min: 20000, max: 35000, rate: 0.0175 },
      { min: 35000, max: 40000, rate: 0.035 },
      { min: 40000, max: 75000, rate: 0.05525 },
      { min: 75000, max: 500000, rate: 0.0637 },
      { min: 500000, max: 1000000, rate: 0.0897 },
      { min: 1000000, max: Infinity, rate: 0.1075 }
    ]
  },
  NM: {
    name: "New Mexico",
    rates: [
      { min: 0, max: 5500, rate: 0.017 },
      { min: 5500, max: 11000, rate: 0.032 },
      { min: 11000, max: 16000, rate: 0.047 },
      { min: 16000, max: 210000, rate: 0.049 },
      { min: 210000, max: Infinity, rate: 0.059 }
    ]
  },
  NY: {
    name: "New York",
    rates: [
      { min: 0, max: 8500, rate: 0.04 },
      { min: 8500, max: 11700, rate: 0.045 },
      { min: 11700, max: 13900, rate: 0.0525 },
      { min: 13900, max: 80650, rate: 0.055 },
      { min: 80650, max: 215400, rate: 0.06 },
      { min: 215400, max: 1077550, rate: 0.0685 },
      { min: 1077550, max: 5000000, rate: 0.0965 },
      { min: 5000000, max: 25000000, rate: 0.103 },
      { min: 25000000, max: Infinity, rate: 0.109 }
    ]
  },
  NC: {
    name: "North Carolina",
    rates: [{ min: 0, max: Infinity, rate: 0.0475 }]
  },
  ND: {
    name: "North Dakota",
    rates: [
      { min: 0, max: 41775, rate: 0.011 },
      { min: 41775, max: 101050, rate: 0.0204 },
      { min: 101050, max: 210825, rate: 0.0227 },
      { min: 210825, max: 458350, rate: 0.0264 },
      { min: 458350, max: Infinity, rate: 0.029 }
    ]
  },
  OH: {
    name: "Ohio",
    rates: [
      { min: 0, max: 25000, rate: 0 },
      { min: 25000, max: 44250, rate: 0.02765 },
      { min: 44250, max: 88450, rate: 0.03226 },
      { min: 88450, max: 110650, rate: 0.03688 },
      { min: 110650, max: Infinity, rate: 0.0399 }
    ]
  },
  OK: {
    name: "Oklahoma",
    rates: [
      { min: 0, max: 1000, rate: 0.0025 },
      { min: 1000, max: 2500, rate: 0.0075 },
      { min: 2500, max: 3750, rate: 0.0175 },
      { min: 3750, max: 4900, rate: 0.0275 },
      { min: 4900, max: 7200, rate: 0.0375 },
      { min: 7200, max: Infinity, rate: 0.0475 }
    ]
  },
  OR: {
    name: "Oregon",
    rates: [
      { min: 0, max: 3750, rate: 0.0475 },
      { min: 3750, max: 9450, rate: 0.0675 },
      { min: 9450, max: 52150, rate: 0.0875 },
      { min: 52150, max: Infinity, rate: 0.099 }
    ]
  },
  PA: {
    name: "Pennsylvania",
    rates: [{ min: 0, max: Infinity, rate: 0.0307 }]
  },
  RI: {
    name: "Rhode Island",
    rates: [
      { min: 0, max: 68200, rate: 0.0375 },
      { min: 68200, max: 155050, rate: 0.0475 },
      { min: 155050, max: Infinity, rate: 0.0599 }
    ]
  },
  SC: {
    name: "South Carolina",
    rates: [
      { min: 0, max: 3200, rate: 0 },
      { min: 3200, max: 16040, rate: 0.03 },
      { min: 16040, max: Infinity, rate: 0.067 }
    ]
  },
  SD: { name: "South Dakota", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  TN: { name: "Tennessee", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  TX: { name: "Texas", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  UT: {
    name: "Utah",
    rates: [{ min: 0, max: Infinity, rate: 0.0485 }]
  },
  VT: {
    name: "Vermont",
    rates: [
      { min: 0, max: 42150, rate: 0.0335 },
      { min: 42150, max: 102200, rate: 0.066 },
      { min: 102200, max: 209750, rate: 0.076 },
      { min: 209750, max: Infinity, rate: 0.0875 }
    ]
  },
  VA: {
    name: "Virginia",
    rates: [
      { min: 0, max: 3000, rate: 0.02 },
      { min: 3000, max: 5000, rate: 0.03 },
      { min: 5000, max: 17000, rate: 0.05 },
      { min: 17000, max: Infinity, rate: 0.0575 }
    ]
  },
  WA: { name: "Washington", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  WV: {
    name: "West Virginia",
    rates: [
      { min: 0, max: 10000, rate: 0.03 },
      { min: 10000, max: 25000, rate: 0.04 },
      { min: 25000, max: 40000, rate: 0.045 },
      { min: 40000, max: 60000, rate: 0.06 },
      { min: 60000, max: Infinity, rate: 0.065 }
    ]
  },
  WI: {
    name: "Wisconsin",
    rates: [
      { min: 0, max: 12760, rate: 0.0354 },
      { min: 12760, max: 25520, rate: 0.0465 },
      { min: 25520, max: 280950, rate: 0.0627 },
      { min: 280950, max: Infinity, rate: 0.0765 }
    ]
  },
  WY: { name: "Wyoming", rates: [{ min: 0, max: Infinity, rate: 0 }] },
  DC: {
    name: "District of Columbia",
    rates: [
      { min: 0, max: 10000, rate: 0.04 },
      { min: 10000, max: 40000, rate: 0.06 },
      { min: 40000, max: 60000, rate: 0.065 },
      { min: 60000, max: 250000, rate: 0.085 },
      { min: 250000, max: 500000, rate: 0.0925 },
      { min: 500000, max: 1000000, rate: 0.0975 },
      { min: 1000000, max: Infinity, rate: 0.1075 }
    ]
  }
};

const federalTaxBrackets = {
  single: [
    { min: 0, max: 11600, rate: 0.1 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  married: [
    { min: 0, max: 23200, rate: 0.1 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ],
  married_separately: [
    { min: 0, max: 11600, rate: 0.1 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 365600, rate: 0.35 },
    { min: 365600, max: Infinity, rate: 0.37 }
  ],
  head_of_household: [
    { min: 0, max: 16550, rate: 0.1 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ]
};

const standardDeductions = {
  single: 14600,
  married: 29200,
  married_separately: 14600,
  head_of_household: 21900
};

let exchangeRates = {
  USD: 1,
  INR: 83.5,
  CNY: 7.25,
  GBP: 0.79
};

const baseUSD = {
  hourly: 0,
  weekly: 0,
  monthly: 0,
  fourMonths: 0,
  sixMonths: 0,
  eightMonths: 0,
  annual: 0,
  customWeeks: 0,
  gross: 0,
  federal: 0,
  state: 0,
  socialSecurity: 0,
  medicare: 0,
  totalTax: 0,
  net: 0
};

const formatCurrency = (amount, cur = "USD") =>
  new Intl.NumberFormat(
    cur === "INR" ? "en-IN" : "en-US",
    {
      style: "currency",
      currency: cur,
      minimumFractionDigits: 2
    }
  ).format(amount);

const convert = (val, target) => (exchangeRates[target] ?? 1) * val;

const calcFromBrackets = (income, brackets) => {
  let tax = 0;
  for (const br of brackets) {
    if (income > br.min) {
      tax += (Math.min(income, br.max) - br.min) * br.rate;
    }
  }
  return tax;
};

const calcTaxes = (annual, stateCode, filing, isF1) => {
  const taxable = Math.max(0, annual - standardDeductions[filing]);

  const federal = calcFromBrackets(taxable, federalTaxBrackets[filing]);

  const state = stateTaxData[stateCode]
    ? calcFromBrackets(annual, stateTaxData[stateCode].rates)
    : 0;

  let socialSecurity = 0,
    medicare = 0;

  if (!isF1) {
    socialSecurity = Math.min(annual * 0.062, 168600 * 0.062);
    medicare =
      annual * 0.0145 + (annual > 200000 ? (annual - 200000) * 0.009 : 0);
  }

  const totalTax = federal + state + socialSecurity + medicare;

  return {
    gross: annual,
    federal,
    state,
    socialSecurity,
    medicare,
    totalTax,
    net: annual - totalTax,
    effectiveRate: annual ? (totalTax / annual) * 100 : 0
  };
};

async function loadExchangeRates() {
  const key = "d1cnshpr01qic6lesaa0d1cnshpr01qic6lesaag";
  try {
    if (key && key !== "YOUR_FINNHUB_API_KEY") {
      const res = await fetch(
        `https://finnhub.io/api/v1/forex/rates?base=USD&token=${key}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.quote) {
          exchangeRates = {
            USD: 1,
            INR: data.quote.INR ?? 83.5,
            CNY: data.quote.CNY ?? 7.25,
            GBP: data.quote.GBP ?? 0.79
          };
          return;
        }
      }
    }
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (res.ok) {
      const data = await res.json();
      if (data.rates) {
        exchangeRates = {
          USD: 1,
          INR: data.rates.INR,
          CNY: data.rates.CNY,
          GBP: data.rates.GBP
        };
      }
    }
  } catch {}
}

function populateStates() {
  const opts = Object.entries(stateTaxData)
    .map(
      ([code, info]) => `<option value="${code}">${info.name}</option>`
    )
    .join("");

  ["stateSelect", "compareState1", "compareState2"].forEach((id) =>
    document.getElementById(id).insertAdjacentHTML("beforeend", opts)
  );
}

function updateConverted() {
  const cur = document.getElementById("currencySelect").value;

  const fields = {
    resultHourly: baseUSD.hourly,
    resultWeekly: baseUSD.weekly,
    resultMonthly: baseUSD.monthly,
    result4Months: baseUSD.fourMonths,
    result6Months: baseUSD.sixMonths,
    result8Months: baseUSD.eightMonths,
    resultAnnual: baseUSD.annual,
    resultCustomWeeks: baseUSD.customWeeks,
    taxGrossIncome: baseUSD.gross,
    taxFederal: baseUSD.federal,
    taxState: baseUSD.state,
    taxSocialSecurity: baseUSD.socialSecurity,
    taxMedicare: baseUSD.medicare,
    taxTotal: baseUSD.totalTax,
    taxNetIncome: baseUSD.net
  };

  for (const [id, val] of Object.entries(fields)) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = formatCurrency(convert(val, cur), cur);
    }
  }
}

function updateStateComparison(annual, filing, isF1) {
  const cur = document.getElementById("currencySelect").value;
  const s1 = document.getElementById("compareState1").value;
  const s2 = document.getElementById("compareState2").value;

  const card1 = document.getElementById("state1Card");
  const card2 = document.getElementById("state2Card");

  const render = (prefix, stateCode, taxObj) => {
    document.getElementById(`${prefix}Name`).textContent =
      stateTaxData[stateCode].name;
    document.getElementById(`${prefix}Gross`).textContent = formatCurrency(
      convert(taxObj.gross, cur),
      cur
    );
    document.getElementById(`${prefix}Taxes`).textContent = formatCurrency(
      convert(taxObj.totalTax, cur),
      cur
    );
    document.getElementById(`${prefix}Net`).textContent = formatCurrency(
      convert(taxObj.net, cur),
      cur
    );
    document.getElementById(`${prefix}Monthly`).textContent = formatCurrency(
      convert(taxObj.net / 12, cur),
      cur
    );
    document.getElementById(`${prefix}Rate`).textContent =
      taxObj.effectiveRate.toFixed(2) + "%";
  };

  if (s1 && annual) {
    const tax1 = calcTaxes(annual, s1, filing, isF1);
    card1.style.display = "block";
    render("state1", s1, tax1);
  } else {
    card1.style.display = "none";
  }

  if (s2 && annual) {
    const tax2 = calcTaxes(annual, s2, filing, isF1);
    card2.style.display = "block";
    render("state2", s2, tax2);

    if (s1) {
      const tax1 = calcTaxes(annual, s1, filing, isF1);
      const diff = tax2.net - tax1.net;

      const badge = document.getElementById("stateDifference");
      card1.classList.remove("lower-tax", "higher-tax");
      card2.classList.remove("lower-tax", "higher-tax");

      if (tax1.effectiveRate < tax2.effectiveRate) {
        card1.classList.add("lower-tax");
        card2.classList.add("higher-tax");
      } else if (tax2.effectiveRate < tax1.effectiveRate) {
        card1.classList.add("higher-tax");
        card2.classList.add("lower-tax");
      }

      badge.textContent =
        (diff >= 0 ? "+" : "-") +
        formatCurrency(convert(Math.abs(diff), cur), cur) +
        "/yr vs " +
        stateTaxData[s1].name;
      badge.className =
        "difference-badge " + (diff >= 0 ? "positive" : "negative");
    }
  } else {
    card2.style.display = "none";
  }
}

function updateCalculations() {
  const hourly = parseFloat(document.getElementById("hourlyRate").value) || 0;
  const hpw =
    parseFloat(document.getElementById("hoursPerWeek").value) || 40;
  const customWeeks = parseInt(document.getElementById("customWeeks").value) || 0;

  if (!hourly) {
    updateConverted();
    return;
  }

  const annual = hourly * hpw * 52;
  const weekly = annual / 52;
  const monthly = annual / 12;
  const four = monthly * 4;
  const six = monthly * 6;
  const eight = monthly * 8;
  const customTotal = hourly * hpw * customWeeks;

  const afterTax = document
    .getElementById("afterTaxToggle")
    .classList.contains("active");
  const state = document.getElementById("stateSelect").value;
  const filing = document.getElementById("filingStatus").value;
  const isF1 = document.getElementById("f1StudentCheckbox").checked;

  const needState = afterTax && !state;
  document.getElementById("stateRequirementNotice").style.display =
    needState ? "block" : "none";
  if (needState) {
    updateConverted();
    return;
  }

  const tax = calcTaxes(annual, state, filing, isF1);
  const multiplier = afterTax ? tax.net / tax.gross : 1;

  Object.assign(baseUSD, {
    hourly: hourly * multiplier,
    weekly: weekly * multiplier,
    monthly: monthly * multiplier,
    fourMonths: four * multiplier,
    sixMonths: six * multiplier,
    eightMonths: eight * multiplier,
    annual: annual * multiplier,
    customWeeks: customTotal * multiplier,
    gross: tax.gross,
    federal: tax.federal,
    state: tax.state,
    socialSecurity: tax.socialSecurity,
    medicare: tax.medicare,
    totalTax: tax.totalTax,
    net: tax.net
  });

  const customCard = document.getElementById("customWeeksCard");
  const customLabel = document.getElementById("customWeeksLabel");
  if (customWeeks > 0) {
    customCard.style.display = "block";
    customLabel.textContent = customWeeks;
  } else {
    customCard.style.display = "none";
  }

  document.getElementById("f1Notice").style.display = isF1
    ? "block"
    : "none";
  document.getElementById("effectiveTaxRate").textContent =
    tax.effectiveRate.toFixed(2) + "%";

  updateConverted();
  updateStateComparison(annual, filing, isF1);
}

document.addEventListener("DOMContentLoaded", async () => {
  populateStates();
  await loadExchangeRates();

  ["hourlyRate", "hoursPerWeek", "stateSelect", "filingStatus", "customWeeks"].forEach(
    (id) => document.getElementById(id).addEventListener("input", updateCalculations)
  );

  document
    .getElementById("currencySelect")
    .addEventListener("change", () => {
      updateConverted();
      updateStateComparison(
        baseUSD.annual,
        document.getElementById("filingStatus").value,
        document.getElementById("f1StudentCheckbox").checked
      );
    });

  ["compareState1", "compareState2"].forEach((id) =>
    document.getElementById(id).addEventListener("change", () =>
      updateStateComparison(
        baseUSD.annual,
        document.getElementById("filingStatus").value,
        document.getElementById("f1StudentCheckbox").checked
      )
    )
  );

  document
    .getElementById("afterTaxToggle")
    .addEventListener("click", function () {
      this.classList.toggle("active");
      this.setAttribute(
        "aria-checked",
        this.classList.contains("active")
      );
      updateCalculations();
    });

  document
    .getElementById("f1StudentCheckbox")
    .addEventListener("change", updateCalculations);

  document.getElementById("hourlyRate").value = "0";
  updateCalculations();
});