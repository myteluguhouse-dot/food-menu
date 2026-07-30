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
    id: "paneer-tikka",
    name: "Paneer Tikka",
    category: "veg",
    description: "Char-grilled cottage cheese marinated in yogurt and roasted spices.",
    price: "₹240",
    image: "images/paneer-tikka.jpg",
    spice: 2
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    category: "veg",
    description: "Black lentils simmered overnight with butter and cream.",
    price: "₹190",
    image: "images/dal-makhani.jpg",
    spice: 1
  },
  {
    id: "veg-biryani",
    name: "Vegetable Biryani",
    category: "veg",
    description: "Basmati rice layered with seasonal vegetables and saffron.",
    price: "₹210",
    image: "images/veg-biryani.jpg",
    spice: 2
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "non-veg",
    description: "Tandoori chicken simmered in a rich tomato and butter gravy.",
    price: "₹320",
    image: "images/butter-chicken.jpg",
    spice: 1
  },
  {
    id: "mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    category: "non-veg",
    description: "Slow-cooked mutton in a Kashmiri red chili and yogurt curry.",
    price: "₹380",
    image: "images/mutton-rogan-josh.jpg",
    spice: 3
  },
  {
    id: "fish-fry",
    name: "Kerala Fish Fry",
    category: "non-veg",
    description: "Pan-seared fish coated in a coastal red masala.",
    price: "₹300",
    image: "images/fish-fry.jpg",
    spice: 2
  }
];
