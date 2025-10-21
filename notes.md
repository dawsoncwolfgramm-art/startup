# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Project ideas 

- Movie reviews
- Store Front 
- Talk Manager  


## What technologies can do 

- ML structure part
- basic understanding on what it does.

  examples (Voter)
- HTML
- CSS
- React
- Service
- DB/Login
- WebSocket

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## GIT

Git is something that I need to learn. 

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```






### PRIVATE NOTES
- Fetch
CODE TO PUT INTO FETCH AND WHAT THE API DOES.
HTML
```html
<pre></pre>
<p></p>
```
```js
JS
const url = "https://quote.cs260.click";
const photo = 
"https://picsum.photos/id/0/info";
const github = 
"https://api.github.com/users/dawsoncwolfgramm-art";
fetch(url)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("pre").textContent = JSON.stringify(
      response,
      null,
      "  "
    );
});
  
  fetch(photo)
  .then((x) => x.json())
  .then((response) => {
    document.querySelector("p").textContent = JSON.stringify(
      response,
      null,
      "  "
    );
});
```

# Midterm Review Notes
### In the following code, what does the link element do?
- It links an external resource (usually a CSS file) to the HTML document.
  Example:
```html
<link rel="stylesheet" href="styles.css">
```
applies styles from styles.css to the page.

### In the following code,  what does a div tag do?
- <div> is a container element used to group other HTML elements together. It has no visual effect by itself, 
  but helps structure the page for styling and layout using CSS. Commonly used for sections, wrappers, and layout blocks.
```html
<div>
  <p>This is inside a div</p>
</div>
```
- In this example, the paragraph is grouped inside a div, which can be styled or positioned together.
- A <div> is a block-level container that groups other elements. It’s used for structure and layout.
- Examples (use in layouts):
```html
<div class="header"> ... </div>
<div class="content"> ... </div>
```
- Divs have default display:block and take full width. They don’t add behavior by themselves.

### In the following code, what is the difference between the #title and .grid selector?
- #title selects an element by ID (unique).
- .grid selects elements by class (can apply to multiple elements).

### In the following code, what is the difference between padding and margin?
- Padding: space inside the element (between content and border).
- Margin: space outside the element (between border and other elements).

### Given this HTML and this CSS how will the images be displayed using flex?
- If the container uses display: flex;, the images will be displayed in a row by default, side by side, unless flex-direction: column; is specified.

### What does the following padding CSS do?
```css
div {
  padding: 20px;
}
```
- This adds 20 pixels of space inside the div, between its content and its border. Padding increases the internal spacing,
  unlike margin which affects the space outside the element.
```css
padding: 10px 20px;
```
- adds 10px top/bottom and 20px left/right inside the element.
  
### What does the following code using arrow syntax function declaration do?
- Arrow functions are a compact function syntax.
- (a, b) => a + b means a function with parameters a and b that returns a+b.

Examples:
```js
const add = (a, b) => a + b;
const greet = name => `Hi ${name}`;
const square = x => { return x * x; } // block form
```
- Note: arrow functions do not bind their own this and are not suitable as constructors.

```js
const greet = (name) => {
  return 'Hello, ' + name;
}

console.log(greet('Amur'));
```
- This defines an arrow function named greet that takes one argument name and returns a greeting string.

```js
const square = x => x * x;
console.log(square(5));
```
- Here, square takes a number and returns its square. The arrow syntax allows concise one-line functions.

```js
const add = (a, b) => a + b;
console.log(add(2, 3));
```
- This function takes two arguments and returns their sum. Arrow functions are common in modern JS, especially with array methods.

### What does the following code using map with an array output?
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
```
- Output: [2, 4, 6] — The map() function applies a transformation to each element, returning a new array.
```js
const students = [{name: 'Amy'}, {name: 'Ben'}];
const names = students.map(s => s.name);
console.log(names);
```
- Output: ['Amy', 'Ben'] — This extracts the 'name' property from each object. Map doesn’t change the original array.


### What does the following code output using getElementByID and addEventListener?
```js
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```
- getElementById() selects the HTML element with the specified id. addEventListener() waits for an event (like a click) and runs the provided function when triggered. It doesn’t execute immediately—it listens for the event.
```
js
Copy code
const input = document.getElementById('username');
input.addEventListener('change', () => {
  console.log('Input changed');
});
```
- Listens for a change in an input field and logs a message when the value changes.

```js
const form = document.getElementById('loginForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted');
});
```
- Prevents form refresh on submit and handles the event using JS.

```js
const heading = document.getElementById('title');
heading.style.color = 'green';
```
- This example changes the text color of an element with id='title' to green.

### What does the following line of Javascript do using a # selector?

### Which of the following are true? (mark all that are true about the DOM)

### By default, the HTML span element has a default CSS display property value of: 

### How would you use CSS to change all the div elements to have a background color of red?

### How would you display an image with a hyperlink in HTML?
```html
<a href="https://www.example.com">
  <img src="images/photo.jpg" alt="Example image">
</a>
```
- This code wraps an image inside a hyperlink. Clicking the image takes the user to the linked page.
  Your folder structure could look like this:

```markdown
project-folder/
 ├── index.html
 └── images/
     └── photo.jpg
```
You can also use an external image URL:
```html
<a href="https://openai.com">
  <img src="https://example.com/image.png" alt="External image">
</a>
```
### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?


### Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

### What will the following code output when executed using a for loop and console.log?

### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

### How do you declare the document type to be html?
<img width="1919" height="1151" alt="image" src="https://github.com/user-attachments/assets/fe900eb5-a0ad-4590-a075-02555c443fdb" />
<img width="1912" height="1092" alt="image" src="https://github.com/user-attachments/assets/71a8ae5f-bc5c-47f4-b23c-0c7b5657b872" />
<img width="647" height="473" alt="image" src="https://github.com/user-attachments/assets/6be4d8fd-7b17-467b-ba3c-0afb121eae0d" />
<img width="1909" height="1041" alt="image" src="https://github.com/user-attachments/assets/447b3520-a9d8-464d-a936-da84697eb3b3" />
<img width="1918" height="1083" alt="image" src="https://github.com/user-attachments/assets/c6a3af06-3d27-4686-9161-092b8ffde39f" />
<img width="606" height="281" alt="image" src="https://github.com/user-attachments/assets/a791647f-0f42-4db3-a067-ed693acbce19" />
<img width="724" height="978" alt="image" src="https://github.com/user-attachments/assets/04362826-4324-4a92-bebe-0f8fc0e1e057" />
<img width="749" height="760" alt="image" src="https://github.com/user-attachments/assets/6b72265a-ca2f-4722-b423-7d361a8b4b08" />
<img width="1785" height="873" alt="image" src="https://github.com/user-attachments/assets/29881384-dca8-4028-8f0a-be0150a26c90" />




### What is valid javascript syntax for if, else, for, while, switch statements?

### What is the correct syntax for creating a javascript object?

### Is it possible to add new properties to javascript objects?

### If you want to include JavaScript on an HTML page, which tag do you use?

### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

### Which of the following correctly describes JSON?
- JSON (JavaScript Object Notation) is a text-based format for structured data using key-value pairs.
Example: { "name": "John", "age": 25 }

### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- chmod - change permissions,
- pwd - print working directory,
- cd - change directory,
- ls - list files,
- ls -a - prints all files including the secret ones
- vim/nano - text editors,
- mkdir - make directory,
- mv - move/rename,
- rm - remove,
- man - manual,
- ssh - remote shell,
- ps - processes, show whats running
- wget - download files,
- sudo - run as admin

### Which of the following console command creates a remote shell session?
- ssh
  
### Which of the following is true when the -la parameter is specified for the ls console command?
- ls -la lists all files (including hidden) in long format

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- TLD: .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested subdomain)
- <img width="813" height="892" alt="image" src="https://github.com/user-attachments/assets/cdf39cd6-5370-46b2-bfa5-709ec208c051" />

  
### Is a web certificate is necessary to use HTTPS.
- Yes, HTTPS requires a valid SSL/TLS certificate
  
### Can a DNS A record can point to an IP address or another A record.
- A DNS A record points to an IP address; it should not point to another A record.
  
### Port 443, 80, 22 is reserved for which protocol?
- Port 443 = HTTPS
- Port 80 = HTTPS
- Port 22 = SSH

### What will the following code using Promises output when executed?
- Many possibilities depending on promise behavior. Examples:
  -  Promise.resolve('Done').then(console.log) -> 'Done'
  -  Promise.reject('Error').catch(console.error) -> 'Error'
  -  new Promise(res => setTimeout(() => res('Hi'),1000)).then(console.log) -> 'Hi' after 1s
  -  Async function returns value -> printed when awaited or .then
  -  Promise chain: Promise.resolve(2).then(x=>x*2).then(x=>x+1).then(console.log) -> 5Reject handled -> shows error via catch.
 
# internet response


### 1) What does the <link> element do?

It connects external resources to your HTML document. Most commonly, it loads a CSS stylesheet.
```html
<!-- In <head> -->
<link rel="stylesheet" href="/styles/main.css">
```

Other uses: favicons (rel="icon"), preconnect, preload, etc.

### 2) What does a "<div>" tag do?

It’s a generic block-level container with no semantic meaning by itself—used for layout, grouping, or styling hooks.
```html
<div class="card">
  <h2>Title</h2>
  <p>Content inside a generic container.</p>
</div>
```
### 3) Difference between #title and .grid selectors?

#title targets one element with id="title" (IDs must be unique).

.grid targets any elements with class="grid" (classes can repeat).

Specificity: #id > .class.
```html
<h1 id="title">Hello</h1>
<section class="grid">…</section>
```
```css
#title { color: blue; }   /* more specific */
.grid  { display: grid; }
```
### 4) Difference between padding and margin?

Padding = space inside the border (between content and border).

Margin = space outside the border (separates elements).
```css
.box {
  margin: 16px;   /* pushes neighbors away */
  padding: 16px;  /* cushions its own content */
  border: 2px solid #333;
}
```

### 5) Flex layout for images — how will they display?

Example: three images in a row, wrapping on small screens, evenly spaced.
```html
<div class="gallery">
  <img src="a.jpg" alt="">
  <img src="b.jpg" alt="">
  <img src="c.jpg" alt="">
</div>
```
```css
.gallery {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;              /* images wrap on narrow screens */
  justify-content: space-between;
}
.gallery img {
  flex: 1 1 200px;              /* grow/shrink; base width ~200px */
  max-width: 100%;
  height: auto;
  display: block;
}
```

Result: Images sit on one line if there’s room; otherwise they wrap to the next line with gaps.

### 6) What does this padding do?
```css
.card { padding: 10px 20px 5px 0; }
```

Order is top, right, bottom, left → top=10, right=20, bottom=5, left=0.

### 7) Arrow function declaration

Shorter function syntax; also lexically binds this.
```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```
### 8) map with an array — what gets output?
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```

map returns a new array; original is unchanged.

### 9) getElementById + addEventListener output
```html
<button id="go">Click me</button>
<p id="msg"></p>
<script>
  const btn = document.getElementById('go');
  const msg = document.getElementById('msg');
  btn.addEventListener('click', () => {
    msg.textContent = 'Button was clicked!';
  });
</script>
```

When clicked: it sets the paragraph text to “Button was clicked!”.

### 10) What does a line using a # selector do?

# in selectors means “by id”. With JS:
```js
const el = document.querySelector('#title'); // the element with id="title"
```
### 11) DOM truths (mark all that are true)

The DOM is a tree of nodes. ✅

document is the root for page scripts. ✅

Elements, text, and comments are all node types. ✅

You can read & modify DOM nodes via JS. ✅

Changing the DOM can trigger reflow/repaint. ✅

### 12) Default CSS display value for <span>

inline.

### 13) Make all divs have a red background
```css
div { background: red; }
```

(Usually scope this with a class to avoid global styling.)

### 14) Display an image that’s also a link
```html
<a href="https://example.com">
  <img src="/img/pic.jpg" alt="Go to Example">
</a>
```

### 15) CSS box model order (inside → outside)

content → padding → border → margin

### 16) Make only the word “trouble” green
```html
<p>double <span class="trouble">trouble</span></p>
```
```css
.trouble { color: green; }
```

“double” is unaffected because the selector targets only .trouble.

### 17) For-loop output
```css
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```
### 18) Select #byu and make it green
```js
document.getElementById('byu').style.color = 'green';
// or:
document.querySelector('#byu').style.color = 'green';
```

### 19) Opening tags: p, ol, ul, h2, h1, h3
```html
<p>…</p>
<ol>…</ol>
<ul>…</ul>
<h2>…</h2>
<h1>…</h1>
<h3>…</h3>
```
### 20) Declare HTML5 doctype
```html
<!DOCTYPE html>
```

(Must be the very first line.)

### 21) Valid JS syntax for if, else, for, while, switch
```js
if (x > 0) {
  // ...
} else {
  // ...
}

for (let i = 0; i < n; i++) {
  // ...
}

while (condition) {
  // ...
}

switch (kind) {
  case 'a':
    // ...
    break;
  case 'b':
    // ...
    break;
  default:
    // ...
}
```

### 22) Correct syntax for creating a JS object
```js
const user = { name: 'Ada', admin: true };
```

Other ways: Object.create(proto), new Object(), or class instances.

### 23) Can you add new properties to JS objects?

Yes (for plain objects & non-frozen ones):
```js
const o = {};
o.answer = 42;
console.log(o.answer); // 42
```

Use Object.freeze(o) to prevent changes.

### 24) Which tag includes JavaScript?
```html
<script>
// inline
</script>

<script src="/app.js"></script> <!-- external -->
```

Place scripts at the end of <body> or use defer in <head>:
```html
<script src="/app.js" defer></script>
```
### 25) Set text “animal” → “crow” (leave “fish” alone)
```html
<ul>
  <li id="animal">animal</li>
  <li>fish</li>
</ul>
<script>
  document.getElementById('animal').textContent = 'crow';
</script>
```
### 26) Which describes JSON?

Text format for data (objects/arrays) using double-quoted keys/strings.

Interoperable across languages; a data format, not code.

Example:
```json
{
  "name": "Ada",
  "skills": ["math", "logic"],
  "active": true,
  "score": 9.7
}
```
### 27) What do these console commands do?

chmod — change file permissions

pwd — print current directory

cd — change directory

ls — list files

vim — open Vim editor

nano — open Nano editor

mkdir — make directory

mv — move/rename files

rm — remove files (use -r for dirs)

man — show manual for a command

ssh — secure shell (remote login)

ps — list running processes

wget — download via HTTP(S)/FTP

sudo — run command as superuser

### 28) Which command creates a remote shell session?

ssh user@host

### 29) What does ls -la do?

Lists all files (including dotfiles) in long format (permissions, owner, size, dates).

### 30) Domain parts for banana.fruit.bozo.click

Top-level domain (TLD): click

Root (apex) domain: bozo.click

Subdomains: fruit.bozo.click, and banana.fruit.bozo.click (a sub-subdomain)

### 31) Is a web certificate necessary to use HTTPS?

Yes. HTTPS requires a server certificate (self-signed will trigger warnings; trusted CA certs avoid warnings).

### 32) Can a DNS A record point to an IP or another A?

An A record must point to an IPv4 address only.
To alias a name to another name, use CNAME (with caveats at the zone apex).

### 33) Ports 443, 80, 22 are reserved for which protocols?

443 → HTTPS

80 → HTTP

22 → SSH

### 34) Promises output ordering example
```js
console.log('A');

Promise.resolve().then(() => {
  console.log('B');             // microtask (after current call stack)
});

setTimeout(() => {
  console.log('C');             // macrotask (after microtasks)
}, 0);

console.log('D');
```

Output order:
A
D
B
C

### Bonus: Tiny playground page you can paste into index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Notes Playground</title>
    <link rel="stylesheet" href="styles.css">
    <style>
      .box { margin: 12px; padding: 12px; border: 2px solid #333; }
      .gallery { display: flex; gap: 8px; flex-wrap: wrap; }
      .gallery img { flex: 1 1 150px; max-width: 100%; height: auto; display: block; }
      #title { color: royalblue; }
      .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
      .trouble { color: green; }
    </style>
  </head>
  <body>
    <h1 id="title">Hello</h1>
    <div class="box">Padding vs margin demo</div>

    <div class="gallery">
      <img src="https://picsum.photos/300?1" alt="">
      <img src="https://picsum.photos/300?2" alt="">
      <img src="https://picsum.photos/300?3" alt="">
    </div>

    <p>double <span class="trouble">trouble</span></p>

    <button id="go">Click me</button>
    <p id="msg"></p>

    <ul>
      <li id="animal">animal</li>
      <li>fish</li>
    </ul>

    <script>
      document.getElementById('go').addEventListener('click', () => {
        document.getElementById('msg').textContent = 'Button was clicked!';
      });
      document.getElementById('animal').textContent = 'crow';
      console.log('A');
      Promise.resolve().then(() => console.log('B'));
      setTimeout(() => console.log('C'), 0);
      console.log('D');
    </script>
  </body>
</html>
```

If you want this broken into separate files (notes.md, index.html, styles.css), say the word and I’ll split it cleanly.
