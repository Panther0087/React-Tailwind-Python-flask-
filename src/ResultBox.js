import ReactHtmlParser from 'react-html-parser';
let name = '';
const ResultBox = ({item}) => {
  let resultArray = item[0].split(" ");
  if (resultArray[0].includes('\n')) {
    let temp = resultArray[0].split('\n')
    name = temp[0].slice(1, -1)
  } else {
    name = resultArray[0].slice(1)
  }
  return (
    <div className="m-10 rounded-md shadow-md">
      <div className="bg-primary w-50 h-36 text-center p-4 font-bold pt-14 text-4xl align-middle border-b border-black">{ ReactHtmlParser(item[0]) }</div>
      <div className="flex flex-col mb-8 p-4">
        <label className="font-bold m-2 text-2xl">Name</label>
        <p className="ml-2 text-2xl">{name}</p>
        <label className="font-bold m-2 text-2xl">Occurances</label>
        <p className="ml-2 text-2xl">{ ReactHtmlParser(item[1]) }</p>
      </div>
    </div>
  )
}

export default ResultBox;