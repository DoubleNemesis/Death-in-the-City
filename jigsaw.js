
<!--
jigsaw test below

-->

<style>
  #d1,#d2 {
    float: left; 
    width: 200px; 
    height: 35px;
    margin: 55px;
    margin-top: 155px;
    padding: 10px;
    border: 1px solid #aaaaaa;
  }
  </style>
  </head>
  <body>
  
  <div id="1" ondragstart="dragStart(event)" draggable="true">Drag 1</div>
  <div id="2" ondragstart="dragStart(event)" draggable="true">Drag 2</div>
  
  <div id="d1" ondrop="drop(event)" ondragover="allowDrop(event)">1
  </div>
  <div id="d2" ondragover="allowDrop(event)" ondrop="drop(event)">2
  </div>
  
  
  <p id="demo"></p>
  
  <script>
  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
    document.getElementById("demo").innerHTML = "The p element is OVER the droptarget.";
    //event.target.style.border = "4px dotted green";
  }
  
  function drop(event) {
    let data = event.dataTransfer.getData("Text");
  if (data === event.target.id[1]){
    event.preventDefault();

    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped.";
  }
  else{
    alert(data)
    alert(event.target.id[1])
  }
  

  }
  </script>