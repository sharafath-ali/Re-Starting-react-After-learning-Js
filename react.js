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