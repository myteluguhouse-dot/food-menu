/*
  ================================
  ADD YOUR DISHES HERE
  ================================
  Copy one block, change the values, save the file. That's it — no other
  file needs to change when you add a new recipe.

  - id:          any unique short name, no spaces (e.g. "paneer-tikka")
  - name:        dish name shown on the menu
  - category:    "veg" or "non-veg"  (exactly this spelling, lowercase)
  - description: one or two lines about the dish
  - price:       shown as-is, e.g. "₹220" or "$12"
  - image:       path to the photo. Put the photo file inside the
                 "images" folder and reference it like "images/yourfile.jpg"
  - spice:       optional, 0 to 3 (controls the chili marks). Leave out if unsure.
*/

const menuItems = [
  {
  id: "Chicken-Biryani",
  name: "Chicken-Biryani",
  category: "non-veg",
  ingredients: ["Chicken", "Yogurt", "Spices", "Fried Onion", "Roasted spices"],
  mayContain: ["Dairy"],
  image: "images/paneer-tikka.jpg",
  spice: 2
}
  
];
