/*
  ================================
  ADD YOUR DISHES HERE
  ================================
  Copy one block, change the values, save the file. That's it — no other
  file needs to change when you add a new recipe.

  - id:           any unique short name, no spaces (e.g. "paneer-tikka")
  - name:         dish name shown on the menu
  - category:     "veg" or "non-veg"  (exactly this spelling, lowercase)
  - ingredients:  a list of ingredients, e.g. ["Paneer", "Yogurt", "Bell pepper"]
  - mayContain:   optional list of allergens, e.g. ["Dairy", "Nuts"]. Leave out or [] if none.
  - image:        path to the photo. Put the photo file inside the
                  "images" folder and reference it like "images/yourfile.jpg"
  - spice:        optional, 0 to 3 (controls the chili marks). Leave out if unsure.
*/

const menuItems = [
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    category: "veg",
    ingredients: ["Paneer", "Yogurt", "Bell pepper", "Onion", "Roasted spices"],
    mayContain: ["Dairy"],
    image: "images/paneer-tikka.jpg",
    spice: 2
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    category: "veg",
    ingredients: ["Black lentils", "Kidney beans", "Butter", "Cream", "Tomato"],
    mayContain: ["Dairy"],
    image: "images/dal-makhani.jpg",
    spice: 1
  },
  {
    id: "veg-biryani",
    name: "Vegetable Biryani",
    category: "veg",
    ingredients: ["Basmati rice", "Mixed vegetables", "Saffron", "Fried onion", "Whole spices"],
    mayContain: [],
    image: "images/ChickenBir.jpg",
    spice: 2
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "non-veg",
    ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Fenugreek"],
    mayContain: ["Dairy"],
    image: "images/ChickenBir.jpg",
    spice: 1
  },
  {
    id: "mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    category: "non-veg",
    ingredients: ["Mutton", "Yogurt", "Kashmiri red chili", "Whole spices"],
    mayContain: ["Dairy"],
    image: "images/mutton-rogan-josh.jpg",
    spice: 3
  },
  {
    id: "fish-fry",
    name: "Kerala Fish Fry",
    category: "non-veg",
    ingredients: ["Fish", "Curry leaves", "Coastal masala", "Rice flour"],
    mayContain: ["Fish"],
    image: "images/fish-fry.jpg",
    spice: 2
  }
];
