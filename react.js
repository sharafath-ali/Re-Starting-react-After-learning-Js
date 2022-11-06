ReactDOM.render(<h1>this is h1 rendered by dom</h1>,document.getElementById("root"))
ReactDOM.render(<h3>this is h3 using ReactDOM</h3>,document.getElementById("h3"))
ReactDOM.render(<ul><li>this</li><li>is</li><li>list</li>
<li>using react</li></ul>,document.getElementById("ul"))
function Dif(){
   return(
         <h1>h1 in first function</h1>
         )
}
function Navb() {
    return (
    <div>
    <h1>h1 in second function</h1>
    <img src="fullsnap.png" width="30" height="30" alt=""/>
    <button type="button" class="btn btn-primary">Primary</button>
    
    </div>

    )
}

ReactDOM.render(
    <div>
      <Navb />
      <Dif />
    </div>,
    document.getElementById("nav")
)


*/challenge*/
const nav=(
    <nav>
    <h1>OWNIT</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
)
ReactDOM.render(nav,document.getElementById("cnav"))


*/challenge =jsx assing to a variable and use an append()*/
const a=(
    <div>
        <h1>jsx using append()</h1>
        <h2>we cant do that with append</h2>
    </div>
)
document.getElementById("append").append(JSON.stringify(a));
ReactDOM.render(a,document.getElementById("append"))


*/challenge*/
const b=(
    <div>
      <img src="imgreact.png" width="70px" />
      <h1>Fun facts about React</h1>
      <ol>
        <li>2013</li>
        <li>100k stars on github</li>
        <li>maintained by meta</li>
      </ol>


    </div>
)
ReactDOM.render(b,document.getElementById("react"))
*/challenge console.log(b)=a javascript Object.react element that describe what react should add to thr real dom for us */
*/challenge*/

function Time(){
    return (
        <div>
           <Heade />
         <header>
            <nav>
                <img src="imgreact.png" width="70px"/>
            </nav>
         </header>
         <h1>custom page component</h1>
         <ol>
            <li>easy</li>
            <li>smartway</li>
         </ol>
         
        <footer>
            <small>Ⓒ 2022 sharafath development .All rights reserved</small>
        </footer>
        </div>
    )
}
ReactDOM.render(<Time /> ,document.getElementById("custom"))
*/challenge =react component =function that returns react elements (ui)*/
function Heade(){
    return(
        <div>
        <header>
            <nav>
                <img src="imgreact.png" width="70px"/>
            </nav>
         </header>
         </div>
    )
}
function Ol(){
    return(
          <div>
          <ol>
           <li>easy</li>
           <li>smartway</li>
          </ol>
          </div>
          )
}
function Foot(){
    return(
        <div>
        <footer>
        <small>Ⓒ 2022 sharafath development .All rights reserved</small>
        </footer>
        </div>
    )
}
function Comp(){
    return(<div>
    <Heade />
    <Ol />
    <Foot />
    </div>)
}
ReactDOM.render(<Comp />,document.getElementById("comp"))