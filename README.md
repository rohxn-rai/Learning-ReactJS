﻿<h1>Learning ReactJS</h1>
<p>This repository is a collection of small projects I created during my learning of ReactJS from Udemy course by Jannick Leismann. This is only for my own reference but feel free to use this repository as you please. This course was about ReactJS only and the style sheet used here is premade. I am listing down the topics covered in this course.</p>
<h3>Topics:</h3>

```text
.
├─────────────────────────────────┬─ Sorting
├── Handling States               ├─ Reducer
├── Event Handling                ├─ Context API
├── Searching                     ├─ Web API
├── Refactoring                   └─ Router
└── Filtering                      
```


<!-- Set-up -->
<h2>Local Set-up</h2>
<h3>Windows</h3> 
<ol class="set-up">
  <li>Install Node.js</li>
  <li>Open terminal</li>
  <li>Change directory to your folder</li>
</ol>
<pre><code>cd <-path-></code></pre>
<ol start="4">
  <li>run the following command on terminal</li>
</ol>
<pre><code>git clone https://github.com/rohxn-rai/Learning-React.git</code></pre>
<ol start="5">
  <li>Change directory to the project you want to run</li>
</ol>
<pre><code>cd <-project-name-></code></pre>
<ol start="6">
  <li>Install all the node modules</li>
</ol>
<pre><code>npm install --force</code></pre>
<p><code>--force</code> is used to avoid the warinings cause by different version of dependencies. Don't worry the versions mentioned in <code>package.json</code> work fine. It is just a warnings.</code></p>
<ol start="7">
  <li>run the project</li>
</ol>
<pre><code>npm start</code></pre>
<p>The app starts running on <code>http://localhost:3000</code>. Go to <code>http://localhost:3000</code> to test your app</p>

<!-- Projects -->
<h2>Projects</h2>

```text
.
├── moviedux
│   └── ...
├── bugblaster
│   └── ...
├── blogpost
│   └── ...
└── ...
```
<h6>each of them have their own react web app</h6>

<img src="moviedux\public\logo.png" alt="Moviedux Logo"/>
<h3>Moviedux</h3>
<p>This project is a simple directory to watch movies. Here users can search, filter(genre,rating) and select a movie. The user can also add and remove movies into the watchlist. The watchlist can be view by the user above the search bar.</p>
<img src="moviedux\moviedux-home.png" alt="Moviedux-Home" />
<img src="moviedux\moviedux-watchlist.png" alt="Moviedux-Watchlist" />
<h3>Bug Blaster</h3>
<p>This project is a simple priority list of bugs to report. The entries here can be created, edited and deleted. The project also has a sorting machanism to sort bug based on priority.</p>
<img src="bugblaster\Bug-Blaster.png" alt="Bug-Blaster" />
