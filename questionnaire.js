var questionnaire = {
  introduction: {
    title: " Bye Bye Acne ",
    shortdescription: `Take a 6-question quiz
to figure out what products are best for your skin`,
    description: `We spend a lot of time and money finding the right skincare
products. According to our research, on average, people buy <span
class="highlight">7 to 9 products</span> until they find the perfect one for
their skin. Now, with this short quiz, you can <span class="highlight">quickly</span>
find products that are <span class="highlight">suitable</span> for treating your acne.`,
    productssofar: `These are the recommended products based on your selections so far`,
    finalproducts: `These are the final recommended products based on the quiz`
  },
  questions: [
  {
    id: "skin",
    question: "1. What best defines your skin?",
    options: {
      "skin-normal": "Normal",
      "skin-oily": "Oily",
      "skin-dry": "Dry",
      "skin-combination": "Combination"
    },
    multiple: false
  },
  {
    id: "age",
    question: "2. What age range are you in?",
    options: {
      "age-12to18": "12-18",
      "age-19to24": "19-24",
      "age-25to35": "25-35",
      "age-36plus": "36+"
    },
    multiple: false
  },
  {
    id: "kind",
    question: "3. What kind of breakouts do you have (select all that apply)?",
    options: {
      "kind-whiteheads": "Whiteheads",
      "kind-blackheads": "Blackheads",
      "kind-inflamed_bumps": "Inflamed Bumps",
      "kind-painful_red_bumps": "Painful red bumps"
    },
    multiple: true
  },
  {
    id: "location",
    question: "4. Where do you break out the most (select all that apply)?",
    options: {
      "location-forehead": "Forehead",
      "location-nose-cheeks": "Nose/Cheeks",
      "location-chin": "Chin",
      "location-back-chest": "Back/Chest"
    },
    multiple: true
  },
  {
    id: "count",
    question: "5. How many pimples do you currently have on your face?",
    options: {
      "count-0to3": "0-3",
      "count-4to6": "4-6",
      "count-7to10": "7-10",
      "count-11plus": "11+"
    },
    multiple: false
  },
  {
    id: "type",
    question: "6. Would you prefer a cleanser, cream, moisturizer, or a mask (select all that apply)?",
    options: {
      "type-cleansers": "Cleansers",
      "type-creams": "Creams",
      "type-moisturizers": "Moisturizers",
      "type-masks": "Masks"
    },
    multiple: true
  }
]
};
