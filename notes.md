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






PRIVATE NOTES
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



In the following code, what does the link element do?

In the following code,  what does a div tag do?

In the following code, what is the difference between the #title and .grid selector?

In the following code, what is the difference between padding and margin?

Given this HTML and this CSS how will the images be displayed using flex?

What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?

What does the following code using map with an array output?

What does the following code output using getElementByID and addEventListener?

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)

By default, the HTML span element has a default CSS display property value of: 

How would you use CSS to change all the div elements to have a background color of red?

How would you display an image with a hyperlink in HTML?

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

How do you declare the document type to be html?

What is valid javascript syntax for if, else, for, while, switch statements?

What is the correct syntax for creating a javascript object?

Is it possible to add new properties to javascript objects?

If you want to include JavaScript on an HTML page, which tag do you use?

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Which of the following correctly describes JSON?

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

Which of the following console command creates a remote shell session?

Which of the following is true when the -la parameter is specified for the ls console command?

Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

Is a web certificate is necessary to use HTTPS.

Can a DNS A record can point to an IP address or another A record.

Port 443, 80, 22 is reserved for which protocol?

What will the following code using Promises output when executed?
