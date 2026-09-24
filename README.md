# Ahmad Alhalabi — Portfolio

A static portfolio built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — portfolio page
- `styles.css` — responsive styling, animations and themes
- `script.js` — theme switching, mobile navigation and reveal animations
- `assets/profile.jpg` — profile photo
- `assets/Ahmad_Alhalabi_CV_Modern.pdf` — CV

## Themes

The Theme button in the header lets visitors switch between:
- Midnight
- Aurora
- Emerald
- Sunset

The selected theme is saved in the browser with localStorage.

## Publish on Netlify from a phone

1. Extract the ZIP on your phone if needed.
2. Open Netlify in your mobile browser and sign in.
3. Use Netlify's manual/deploy upload area and upload the **portfolio folder** (the folder containing `index.html`).
4. Netlify will publish the site and give you a `netlify.app` address.
5. If the mobile browser does not allow folder upload, upload the ZIP if the current Netlify interface offers ZIP deployment, or use GitHub Pages instead.

## Publish on GitHub from a phone

1. Create a new GitHub repository, e.g. `ahmad-portfolio`.
2. Open the repository and choose **Add file → Upload files**.
3. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder contents while preserving the folder structure.
4. Commit the files.
5. Go to **Settings → Pages**.
6. Choose **Deploy from a branch**, select the main branch and root folder, then save.
7. GitHub will provide your Pages URL.

### Important

Keep this exact structure:

```text
index.html
styles.css
script.js
assets/
  profile.jpg
  Ahmad_Alhalabi_CV_Modern.pdf
```

If you move the image or CV, update their paths in `index.html`.
