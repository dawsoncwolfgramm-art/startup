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

# Final Review Notes
# Web Development & JavaScript – Detailed Study Notes
---

## 1. Default Ports for Common Protocols

### HTTP
- **Port:** 80  
- **Purpose:** Unencrypted web traffic  
- **Example:**  
```html
http://example.com
```
This automatically uses port 80 unless another port is specified:
```html
http://example.com:80
```

### HTTPS
- **Port:** 443  
- **Purpose:** Encrypted web traffic using TLS/SSL  
- **Example:**  

```html
https://example.com
```
Equivalent to:
```html
https://example.com:443
```
Uses port 443 automatically.
### SSH
- **Port:** 22  
- **Purpose:** Secure remote server access  
- **Example:**  

```html
ssh user@server.com
```
Uses port 22 unless overridden:
```html
ssh -p 2222 user@server.com
```

### 2. What does an HTTP status code in the range of 300 / 400 / 500 indicate?
#### 300–399 → Redirection
Indicates the client must take additional action.

Common examples:
- 301 – Moved Permanently
- 302 – Found (temporary redirect)
- 304 – Not Modified (used with caching)
Example:
```html
GET /old-page
→ 301 Moved Permanently
→ Redirect to /new-page
```
#### 400–499 → Client Errors
The request was invalid or cannot be fulfilled.

Common examples:
- 400 – Bad Request
- 401 – Unauthorized
- 403 – Forbidden
- 404 – Not Found
Example:
```html
GET /api/user/abc
→ 400 Bad Request
```
#### 500–599 → Server Errors
The server failed to process a valid request.

Common examples:
- 500 – Internal Server Error
- 502 – Bad Gateway
- 503 – Service Unavailable

Example:
```html
GET /api/data
→ Server crashes
→ 500 Internal Server Error
```
### 3. What does the HTTP header Content-Type allow you to do?
#### Purpose
It tells the receiver how to interpret the body of the request or response.
#### Common Content-Types
- application/json
- text/html
- text/plain
- application/x-www-form-urlencoded
- multipart/form-data

#### Example (JSON response)
```http
Content-Type: application/json
```
```json
{ "name": "Mark" }
```
#### Why it matters
- Browsers know how to render content
- APIs know how to parse request bodies
- Security policies depend on it

### 4. What does a Secure / Http-Only / Same-Site cookie do?
Secure Cookie
- Sent only over HTTPS
- Prevents interception via HTTP
Example:
```http
Set-Cookie: sessionId=abc123; Secure
```
Http-Only Cookie
- Cannot be accessed via JavaScript
- Protects against XSS attacks
Example:
```http
Set-Cookie: sessionId=abc123; HttpOnly
```
```js
document.cookie // ❌ cannot read HttpOnly cookies
```
#### Same-Site Cookie
Controls whether cookies are sent with cross-site requests.
- Strict → never sent cross-site
- Lax → sent on top-level navigation
- None → always sent (requires Secure)
Example:
```http
Set-Cookie: sessionId=abc123; SameSite=Strict
```

### 5. Express middleware: console.log output for /api/document
#### Assumption (typical middleware):
```js
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
```
#### Request:
```html
GET /api/document
```
#### Console output:
```html
GET /api/document
```
Key concept
- Middleware runs before routes
- next() passes control forward

### 6. Express service + front-end fetch: what does fetch return?
#### Assumption (backend):
```js
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello' });
});
```
Front-end fetch:
```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));
```
Returned value:
```js
{ message: "Hello" }
```
Key point
- fetch() returns a Promise
- res.json() parses JSON
- Actual data comes asynchronously

### 7. MongoDB query { name: "Mark" }
What it does
Selects all documents where name equals "Mark"
Example collection:
```json
{ "name": "Mark", "age": 22 }
{ "name": "Sarah", "age": 25 }
{ "name": "Mark", "age": 30 }
```
Matches:
```json
{ "name": "Mark", "age": 22 }
{ "name": "Mark", "age": 30 }
```
Important note
- MongoDB queries are case-sensitive
- Exact match only

### 8. How should user passwords be stored?
❌ Never store:
- Plain text
- Encrypted (reversible)

✅ Correct approach:
- Hashed
- Salted
- Use strong algorithms:
  - bcrypt
  - argon2
  - scrypt

Example:
```js
bcrypt.hash(password, 12);
```
Why?
- Hashing is one-way
- Salting prevents rainbow tables
- Even if DB is stolen, passwords are safe

### 9. WebSocket backend + frontend: what will be logged?
Assumption
Backend:
```js
ws.on('connection', socket => {
  socket.send('Hello client');
});
```
Frontend:
```js
socket.onmessage = (event) => {
  console.log(event.data);
};
```
Console output:
```html
Hello client
```
Key concept
- WebSockets send messages instantly
- No request/response cycle

### 10. What is the WebSocket protocol intended to provide?
Purpose
- Persistent, full-duplex communication
- Real-time data exchange

Compared to HTTP
| HTTP            | WebSocket              |
|----------------|------------------------|
| Request/response | Continuous connection |
| Client-initiated | Bidirectional         |
| Stateless        | Stateful              |

Eamples:
- Live chat
- Multiplayer games
- Stock tickers
- Notifications

### 11. Acronyms
| Acronym | Meaning |
|--------|---------|
| JSX | JavaScript XML |
| JS | JavaScript |
| AWS | Amazon Web Services |
| NPM | Node Package Manager |
| NVM | Node Version Manager |

---

## 12. React Component with Parameters (Props)

### Concept
- React components can receive **parameters**, called **props** (short for properties).
- Props allow components to be **reusable** and **dynamic**.
- Props are passed from a **parent component** to a **child component**.
- Props are **read-only** (immutable) inside the component.

---

### Example React Component
```jsx
function Greeting({ name }) {
  return <p>Hello {name}</p>;
}
```
Usage:
```JSX
<Greeting name="Mark" />
```
- The prop **name** is passed with the value **"Mark"**
Output HTML:
```html
<p>Hello Mark</p>
```
## 13. Nested React Components

### React Components
```jsx
function A() {
  return <B />;
}

function B() {
  return <C />;
}

function C() {
  return <p>Hi</p>;
}
```
Render:
```jsx
<A />
```
Output:
```jsx
<p>Hi</p>
```
Key concept
- React renders component trees
- Only final JSX appears in DOM

### 14. What does React.useState do?
**Purpose**
- Adds state to functional components
- Triggers re-renders on updates
**Example:**
```jsx
const [count, setCount] = useState(0);
```
Behavior
- count stores value
- setCount() updates state
- Component re-renders automatically

### 15. What are React Hooks used for?
## React Hooks: What They Are Used For (In Depth)

### What Are React Hooks?
- **React Hooks** are special functions that let you “hook into” React features **inside functional components**.
- Before Hooks (pre-React 16.8), features like **state** and **lifecycle methods** were only available in **class components**.
- Hooks allow developers to:
  - Use state
  - Respond to lifecycle events
  - Share logic between components
  - Access the DOM
  - Improve performance  
  **without using classes**

---

## Why React Hooks Exist

Hooks solve several major problems:

### 1. Eliminate Class Components
- No `this`
- No constructor binding
- Less boilerplate
- Easier to read and maintain

### 2. Reuse Logic Cleanly
- Logic can be extracted into **custom hooks**
- Avoids duplication and complex inheritance

### 3. Make Side Effects Predictable
- Data fetching
- Subscriptions
- Timers
- DOM updates

---

## What React Hooks Are Used For

### 1. Managing State (`useState`)
Used when a component needs to **remember information** between renders.

**Example: Counter**
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 16. What do specific React Hooks do?
## React Hooks Overview: What Each Hook Does (State / Context / Ref / Effect / Performance)

This section explains the **purpose**, **behavior**, and **use cases** of the most important React Hooks. These are commonly tested and heavily used in real-world React apps.

---

## 1. State Hook — `useState`

### What It Does
- Allows a functional component to **store and manage internal state**
- Causes the component to **re-render** when the state changes

### When to Use
- Tracking user input
- Counters
- Toggle states (on/off, open/closed)
- Any data that changes over time within a component

### Example
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```
## Key Notes (Per Hook)

### State Hook — `useState`
- Returns an array: `[stateValue, setStateFunction]`
- Updating state **triggers a re-render**
- State is **local** to the component
- Initial state can be a value or a function
- State updates are **asynchronous**

---

### Context Hook — `useContext`
- Reads the value from the **nearest Provider**
- Eliminates **prop drilling**
- Triggers a re-render when the context value changes
- Best for **global/shared data** (auth, theme, locale)

---

### Ref Hook — `useRef`
- Returns a persistent object with a `.current` property
- Updating `.current` **does NOT trigger a re-render**
- Commonly used for:
  - DOM access
  - Timers
  - Storing previous values
- Preferred over direct DOM queries

---

### Effect Hook — `useEffect`
- Runs **after render**
- Handles **side effects**:
  - API calls
  - Subscriptions
  - Timers
  - Logging
- Dependency array behavior:
  - No array → runs after every render
  - `[]` → runs once on mount
  - `[dep]` → runs when `dep` changes
- Can return a **cleanup function**

---

### Performance Hooks — `useMemo` and `useCallback`
- Prevent unnecessary recalculations and re-renders
- Improve performance in large or complex components

#### `useMemo`
- Memoizes a **computed value**
- Recomputes only when dependencies change

#### `useCallback`
- Memoizes a **function**
- Prevents recreating functions on every render
- Useful when passing callbacks to child components

---

## Quick Comparison Table

| Hook | Purpose | Triggers Re-render? |
|-----|--------|---------------------|
| `useState` | Store component state | ✅ Yes |
| `useContext` | Access global/shared state | ✅ Yes |
| `useRef` | Store mutable values / DOM access | ❌ No |
| `useEffect` | Run side effects after render | Depends |
| `useMemo` | Cache computed values | ❌ No |
| `useCallback` | Cache functions | ❌ No |

---

## Exam-Ready One-Liners

- **State Hook:** Stores changing data inside a component  
- **Context Hook:** Shares data across components without passing props  
- **Ref Hook:** Accesses DOM or stores mutable values without re-rendering  
- **Effect Hook:** Runs side effects after rendering  
- **Performance Hooks:** Optimize rendering and expensive computations  

### 17. React Router: true statements
## React Router: “Given the code, select statements that are true”

Since you didn’t paste the exact Router code, below are the **most common React Router patterns** and the **true statements** that usually match them on quizzes/exams. These cover what instructors typically test.

---

# Core True Statements (React Router v6+)

## A) Router Basics
✅ **`<BrowserRouter>` must wrap your routes** (usually at the top of your app).  
✅ **Routes are matched by the URL path** in the browser.  
✅ **React Router changes the UI without doing a full page reload** (client-side routing).  
✅ **A `<Route>` maps a `path` to an `element`**.

**Typical code:**
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```
## React Router — True Statements

### Core True Statements
- `<BrowserRouter>` must wrap the routing logic in the application.
- React Router enables **client-side routing** without a full page reload.
- URLs are matched against `<Route path="">` values.
- Each `<Route>` maps a URL path to a React component using the `element` prop.
- Navigating between routes updates the UI without refreshing the browser.

---

### `<Routes>` and `<Route>` (React Router v6+)
- `<Route>` components must be placed **inside** a `<Routes>` component.
- The `element` prop is used to render components (e.g., `element={<Home />}`).
- Route matching is **exclusive**—only the best match is rendered.
- The older `component={Component}` syntax is **not valid** in v6.

---

### `<Link>` and Navigation
- `<Link to="/path">` changes the URL without reloading the page.
- `<Link>` should be used instead of `<a>` for internal navigation.
- Clicking a `<Link>` triggers React Router navigation.
- Using `<a href="">` for internal routes usually causes a full page reload.

---

### Route Parameters
- Routes can define parameters using `:` (e.g., `/users/:id`).
- Route parameters are accessed using the `useParams()` hook.
- Route parameter values are returned as **strings**.
- A single route can match multiple parameter values.

---

### Nested Routes and `<Outlet>`
- Nested routes render inside the parent component’s `<Outlet />`.
- Parent route components can act as **layout components**.
- Child route paths are **relative** to the parent route.
- The parent route remains rendered when a child route is active.

---

### Index Routes
- An `index` route is the default child route of a parent.
- Index routes render when the parent path matches exactly.
- Only one index route can exist per parent route.

---

### Catch-All (404) Routes
- A route with `path="*"` matches all unmatched paths.
- Catch-all routes are typically used for 404 pages.
- The wildcard route should be placed last.

---

### Programmatic Navigation
- `useNavigate()` allows navigation through JavaScript logic.
- Calling `navigate("/path")` updates the URL and rendered component.
- Programmatic navigation does not cause a page reload.

---

## Common “Select All That Apply” Traps

### True Statements
- React Router enables single-page application (SPA) navigation.
- `<Link>` prevents full page reloads for internal navigation.
- Route parameters are read using `useParams()`.
- Nested routes render through `<Outlet />`.
- Route matching is based on the URL path.
- Index routes act as default child routes.

---

### False or Commonly Incorrect Statements
- Routes use `component={}` instead of `element={}` (❌ v5 syntax).
- `<Route>` can exist outside `<Routes>` (❌ v6).
- Route parameter values are numbers by default (❌ they are strings).
- Using `<a href="">` is recommended for internal navigation (❌).
- React Router causes the browser to refresh the page on navigation (❌).

---


### 18. What does package.json do?
## What Does the `package.json` File Do?

The `package.json` file is the **configuration and metadata file** for a Node.js (and front-end JavaScript) project. It tells **Node, npm, and other tools** how the project is structured, what it depends on, and how it should be run.

---

## Primary Purposes of `package.json`

### 1. Project Metadata
Defines basic information about the project.

**Common fields:**
- `name` – Project name
- `version` – Current version
- `description` – What the project does
- `author` – Who created it
- `license` – Usage rights

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A React application"
}
```
## 2. Dependency Management

The `package.json` file lists all external libraries the project depends on.

### `dependencies`
- Required to run the application in **production**
- Installed when running `npm install`

### `devDependencies`
- Only needed during **development**
- Not required in production builds

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

## 3. Script Definitions
Defines command-line scripts that can be run using npm run.

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "vite",
    "build": "vite build",
    "test": "jest"
  }
}
```
**Usage**
```bash
npm run dev
```

## 4. Entry Point Definition
Specifies the main file of the application or package.
```json
{
  "main": "index.js"
}
```
- Used when the project is imported as a module
- important for backend services and reusable libraries

## 5. Engine & Environment Constraints

Specifies compatible versions of **Node.js** or **npm** that the project supports.

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```
- Helps prevent runtime incompatibilities
- Useful for teams and deployment environments
- Some platforms (like Heroku) respect this field
- 6. Module System Declaration

Controls whether the project uses CommonJS or ES Modules.

{
  "type": "module"
}


"module" → Uses ES Modules

import / export

Default → Uses CommonJS

require() / module.exports

7. Version Control & Reproducibility

Works together with package-lock.json

Ensures consistent dependency versions across machines and environments

Prevents “works on my machine” issues

Why package.json Is Critical

Allows others to install dependencies with one command

Enables build tools such as Vite and Webpack

Standardizes how projects are:

Started

Built

Tested

Required for publishing packages to npm

Exam-Ready One-Liner

package.json defines a JavaScript project’s metadata, dependencies, scripts, and configuration so it can be installed, run, and maintained consistently.

Common Exam Traps
True Statements

package.json lists project dependencies

npm run executes scripts from package.json

devDependencies are not required in production

It defines how a project starts and builds

False Statements

package.json contains actual source code

Dependencies are automatically downloaded without npm/yarn

package.json replaces package-lock.json


### 19. What does the fetch function do?
## What Does the `fetch` Function Do?

The `fetch` function is a **browser (and Node.js) API** used to make **HTTP requests** to a server. It allows JavaScript to request data from an API or send data to a server **asynchronously** without reloading the page.

## Basic Purpose
- Send HTTP requests (GET, POST, PUT, DELETE, etc.)
- Receive responses from servers
- Used heavily for communicating with APIs
- Core tool for client–server communication in web apps

## Basic Example
```js
fetch("/api/data");
```
- sends a GET request by default
- returns a Promise

## Handling the Response
```js
fetch("/api/data")
  .then(response => response.json())
  .then(data => console.log(data));
```
- fetch() returns a Promise that resolves to a Response object
- .json() parses the response body into a JavaScript object

## Making a POST Request
```js
fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Mark" })
});
```
- method specifies the HTTP method
- headers describe the request content
- body sends data to the server
## Important Behavior
- fetch() does NOT reject the Promise on HTTP errors (404, 500)
- You must check response.ok manually
```js
fetch("/api/data")
  .then(res => {
    if (!res.ok) {
      throw new Error("Request failed");
    }
    return res.json();
  });
```
## Common Uses
- Fetching API data
- Submitting forms
- Authenticating users
- Loading dynamic content

## Exam-Ready One-Liner
The fetch function sends HTTP requests and returns a Promise that resolves to a response object, allowing JavaScript to communicate with servers asynchronously.
Common Exam Traps
## True
fetch returns a Promise
fetch can make GET and POST requests
fetch works asynchronously
fetch does not reload the page

## False

fetch blocks the browser
fetch automatically throws errors on 404/500
fetch only works with JSON

### 20. What does Node.js do?
## What Does Node.js Do?

Node.js is a **JavaScript runtime environment** that allows JavaScript to be executed **outside of a web browser**. It is primarily used to build **servers, APIs, and backend services**, but it is also used for tooling and automation.

## Core Purpose
- Runs JavaScript on the **server**
- Enables backend development using JavaScript
- Powers web servers, APIs, and command-line tools

## How Node.js Works
- Built on Google’s **V8 JavaScript engine**
- Uses a **non-blocking, event-driven architecture**
- Handles many connections efficiently using a single thread

## Basic Example (Server)
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000);
```
- Starts a server on port 3000
- Responds to HTTP requests with "Hello World"

## Key Features
- Asynchronous I/O
- High performance
- Cross-platform
- Large ecosystem via npm
##Common Uses
- REST APIs (Express, Fastify)
- Web servers
- Real-time apps (WebSockets)
- Build tools (Vite, Webpack)
- CLI tools
## Node.js vs Browser JavaScript
- Node.js has access to the file system
- Browser JavaScript does not
- Node.js does not have DOM access by default
## Exam-Ready One-Liner
Node.js allows JavaScript to run outside the browser, enabling server-side development, APIs, and backend services.

## Common Exam Traps
## True

Node.js runs JavaScript on the server
Node.js uses the V8 engine
Node.js supports asynchronous operations
Node.js can access the file system

## False

Node.js runs in the browser
Node.js replaces the browser
Node.js is a programming language
Node.js has built-in DOM access

### 21. What does PM2 do?
## What Does PM2 Do?

PM2 is a **process manager for Node.js applications**. It is used to **run, monitor, and keep Node.js apps alive** in production environments.

## Core Purpose
- Keeps Node.js applications running continuously
- Automatically restarts apps if they crash
- Manages multiple Node processes easily

## Basic Example
```bash
pm2 start server.js
```
- Starts server.js as a managed process
- Runs in the background
- Restarts the app if it crashes

## Key Features
- Auto-restart on crashes or errors
- Process monitoring (CPU and memory usage)
- Log management
- Startup scripts (restart apps on server reboot)
- Clustering / load balancing
  
### Running Multiple Apps

```bash
pm2 start app1.js
pm2 start app2.js
```

PM2 manages both processes independently.

## Common Commands
```bash
pm2 list        # show running processes
pm2 stop app    # stop an app
pm2 restart app # restart an app
pm2 logs        # view logs
```

## Why PM2 Is Used
- Prevents downtime from crashes
- Simplifies production deployment
- Eliminates the need to manually restart servers

## Exam-Ready One-Liner
PM2 is a process manager that runs, monitors, and automatically restarts Node.js applications in production.

## Common Exam Traps
## True

PM2 keeps Node.js apps running
PM2 restarts apps if they crash
PM2 manages multiple processes
PM2 is commonly used in production

## False

PM2 is a web framework
PM2 replaces Node.js
PM2 runs only in development
PM2 is used to write JavaScript code

### 22. What does Vite do?
## What Does Vite Do?

Vite is a **modern front-end build tool and development server** used to build web applications, especially those using frameworks like **React, Vue, and Svelte**.

## Core Purpose
- Provides a **fast development server**
- Bundles and optimizes code for **production**
- Replaces older tools like Webpack for many projects

## What Vite Is Used For
- Running a local development server
- Building front-end projects
- Handling module imports
- Optimizing assets for production

## Why Vite Is Fast
- Uses **native ES modules** in the browser during development
- Only loads files that are actually needed
- Avoids bundling everything upfront in dev mode

## Basic Example
```bash
npm create vite@latest
npm install
npm run dev
```
- Starts a local dev server
- Automatically reloads the page on file changes

## Development vs Production
## Development
- No full bundling
- Uses ES module imports
- Extremely fast startup

## Production
- Bundles code into optimized files
- Minifies JavaScript and CSS
 -Improves performance for deployment

## Common Uses
- React applications
- Vue applications
- Front-end SPAs
- Modern JavaScript projects

## Vite vs Webpack (High Level)
- Vite starts faster
- Vite has simpler configuration
- Vite is optimized for modern browsers

## Exam-Ready One-Liner
Vite is a fast front-end build tool and development server that uses modern JavaScript features to speed up development and optimize production builds.

## Common Exam Traps
## True
Vite is a build tool
Vite provides a development server
Vite is commonly used with React
Vite bundles code for production

## False
Vite is a backend framework
Vite replaces Node.js
Vite is only used in production
Vite runs without Node.js
