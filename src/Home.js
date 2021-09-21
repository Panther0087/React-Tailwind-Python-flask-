
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Home() {
  const [html, setHtml] = useState("");
  const history = useHistory();

  const handler = async () => {
    // let payload = html;
  
    // let res = await axios.post('http://localhost:5000', payload);
    // let data = res.data;
    let data = {
      "result": [
          [
              "<button class=\"aa\" value=\"Foo\"></button>",
              2
          ],
          [
              "<div>\n<h1 class=\"red-text\"> My Text </h1>\n</div>",
              3
          ]
      ]
    }

    history.push({
      pathname: '/result',
      state: data
    })
  }

  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold p-4 pl-0">Find similar nodes</h1>
      <p className="font-medium">Paste HTML code here</p>
      <textarea className="h-60 w-full border-2 border-black p-2" value={html} onChange={e => setHtml(e.target.value)} />
      <div className="text-center">
        <button className="p-2 text-center font-bold btn bg-secondary border-black border-2" onClick={handler}>Process Code</button>
      </div>
    </div>
  );
}

export default Home;