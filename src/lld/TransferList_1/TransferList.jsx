import { data } from './constatns/data';
import { useState } from 'react';
import "./index.css"
const TransferList = () => {
  const [list, setList] = useState(data);

  const handleChecboxChange=(e, key)=>{

      setList((prevList)=>{
      const UpdatedList=  prevList.map((ele)=>{
            if(ele.id==key){
                return  {
                    ...ele,
                    isChecked:!(ele.isChecked)
                }
            }
            else return ele;
        })
        return UpdatedList;
    })


  }

const handleMovementSelected= (src, dest)=>{
    setList((prevList)=>{
           const srcEleIntact= prevList.filter((ele)=> ele.placement==src && !ele.isChecked);
        const destEle= prevList.filter((ele)=> ele.placement==dest);
     //making sure dstele changed are below already existing dst ele
        const srcChanged=prevList.filter((ele)=> ele.placement==src && ele.isChecked).map((ele)=>{
            return({...ele,placement:dest})
        });
        return [...srcEleIntact,...destEle,...srcChanged]

})
}

const moveAllto=(src,dest)=>{

        setList((prevList)=>{

        const destEle= prevList.filter((ele)=> ele.placement==dest);
     //making sure dstele changed are below already existing dst ele
const srcChanged=prevList.filter((ele)=> ele.placement==src ).map((ele)=>{
            return({...ele,placement:dest})
        });
        return [...destEle,...srcChanged]

})
    
}



  return (
    <div className="Parent">
      <div className='indBox'>
        {list.filter((ele)=>ele.placement=="left").map((ele) => {
          return (
            <div key={ele.id}>
              <input
                checked={ele.isChecked}
                type="checkbox"
               onChange={(e)=>handleChecboxChange(e,ele.id)}
              />
              <label htmlFor="">{ele.title}</label>
            </div>
          );
        })}
      </div>
      <div className='buttonList'>
        <button onClick={()=>handleMovementSelected("right","left")}>Move selected to left</button>
        <button onClick={()=>handleMovementSelected("left","right")}>Move selected to right</button>
        <button onClick={()=>moveAllto("right","left")}>Move All to left</button>
        <button onClick={()=>moveAllto("left","right")}>Move All to right</button>

      </div>
      <div className='indBox'>
        {list.filter((ele)=>ele.placement=="right").map((ele) => {
          return (
            <div key={ele.id}>
              <input
                checked={ele.isChecked}
                type="checkbox"
               onChange={(e)=>handleChecboxChange(e,ele.id)}
              />
              <label htmlFor="">{ele.title}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransferList;
