//import logo from './logo.svg';
import './App.css';


const fashiontrends = [
    {id: 1, title: 'Trench Coats', theme: 'outerwear', isAvailable: true},
    {id: 2, title: 'White Dress', theme: 'dress', isAvailable: true},
    {id: 3, title: 'Pastel Colors', theme: 'Colors', isAvailable: true},
    {id: 4, title: 'Oversized Bags', theme: 'Accessories', isAvailable: true},
    {id: 5, title: 'Slime Green', theme: 'Colors', isAvailable: false},
    {id: 6, title: 'Psychedelic Prints', theme: 'Patterns', isAvailable: false},

  ];

  const vogue = {
    title: 'Vogue',
    editor: 'Editor: Anna Wintour',
    image:  'https://th.bing.com/th/id/OIP.d-iZ4DFg2mh1CXVr2IqVAgHaKE?w=200&h=272&c=7&r=0&o=5&dpr=2&pid=1.7',
    width: '264',
    height: '378'

    //https://en.wikipedia.org/wiki/Vogue_(magazine)#/media/File:Vogue_SM.jpg


  };

  const elle = {
    title: 'Elle',
    editor: ' Editor: Nina Garcia',
    image: 'https://th.bing.com/th/id/OIP.7dZfZ_eooEvqMGLiM65vqgHaJf?w=200&h=257&c=7&r=0&o=5&dpr=2&pid=1.7',
    width: '264',
    height: '378'
  };

  function Bookshelf() {
    return (
      <div>
        <h3>{vogue.title}</h3>
        <p>{vogue.editor}</p>
        <img
          className= "magazineCover"
          src={vogue.image}
          alt ={vogue.title+ ' cover'}
          style={{
            width: vogue.width,
            height: vogue.height
          }}
          />
     
      </div>

      
    );
  }


  function Bookshelftwo() {
    return (
      <div>
        <h3>{elle.title}</h3>
        <p>{elle.editor}</p>
        <img
          className= "magazineCover2"
          src={elle.image}
          alt ={elle.title+ ' cover'}
          style={{
            width: elle.width,
            height: elle.height
          }}
          />
     
      </div>
      
    );

  }
  

  function FashionTrends() {
    const list_fashiontrends = fashiontrends.map( zine =>
      <li
      key={zine.id}
      style={{
        color:zine.isAvailable? '#034732' : '#A20021'
      }}
      >
        {zine.title}
      </li>
      );
      return (
        <ul>{list_fashiontrends}</ul>
      )
  }




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Fashion Magazines</h2>
       <Bookshelf />
       <Bookshelftwo />
       <h2>Fashion Trends: Ins and Outs</h2>
       <div id= "ins_outs">
         <FashionTrends />
       </div>
      </header>
    </div>
  );
}

export default App;
