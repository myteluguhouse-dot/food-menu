# The Menu

A simple, static food menu site — filterable by **Veg** / **Non-Veg** — built to run for free on GitHub Pages.

## 1. Put this on GitHub

1. Create a new repository on GitHub (e.g. `food-menu`).
2. Upload all the files in this folder (`index.html`, `style.css`, `app.js`, `menu-data.js`, the `images` folder) to that repository — either by dragging them into the GitHub web UI ("Add file" → "Upload files") or via git:
   ```
   git init
   git add .
   git commit -m "Initial menu"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/food-menu.git
   git push -u origin main
   ```

## 2. Turn on GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to "Deploy from a branch".
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. GitHub will give you a live URL, usually `https://YOUR-USERNAME.github.io/food-menu/`, live within a minute or two.

## 3. Add a new dish

You only need to touch **`menu-data.js`**.

1. Drop your photo into the `images` folder (e.g. `images/chana-masala.jpg`).
2. Open `menu-data.js` and copy one of the existing entries, then edit it:
   ```js
   {
     id: "chana-masala",
     name: "Chana Masala",
     category: "veg",          // "veg" or "non-veg" only
     description: "Spiced chickpeas simmered in a tangy tomato base.",
     price: "₹180",
     image: "images/chana-masala.jpg",
     spice: 2                  // optional, 0–3
   }
   ```
3. Save, commit, and push (or re-upload the file on GitHub). The live site updates automatically.

No photo yet? Leave the `image` path pointing at a file that doesn't exist yet — the page will show a small veg/non-veg icon in its place until you add one.

## What's in each file

| File | Purpose |
|---|---|
| `menu-data.js` | The list of dishes — the only file you edit regularly |
| `index.html` | Page structure |
| `style.css` | Visual design |
| `app.js` | Renders the cards and handles the Veg / Non-Veg filter |
| `images/` | Your dish photos |

## Notes

- Filenames in `image:` are case-sensitive on GitHub Pages — `Paneer.jpg` and `paneer.jpg` are different files.
- Large photos slow the page down. Aim for roughly 800–1200px wide, under ~300KB, before uploading.
- To rename the site title or intro text, edit the `<h1>` and `<p class="subtitle">` near the top of `index.html`.
