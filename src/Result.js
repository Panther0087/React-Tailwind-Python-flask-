import ResultBox from './ResultBox.js';

function Result(props) {
  return(
    <div className="p-12">
      <div className="flex justify-between ml-10 mr-10 mt-12 mb-8">
        <h1 className="font-bold text-5xl">Results</h1>
        <button className="p-2 text-center font-bold btn bg-secondary border-black border-2" >Run Again</button>
      </div>
      <div className="grid grid-cols-2 gap-x-80">
        {props.state.result.map((item) => { 
            return(
              <ResultBox item={item} />
            )}
          )
        }
      </div>
      
    </div>
  )
}

export default Result;