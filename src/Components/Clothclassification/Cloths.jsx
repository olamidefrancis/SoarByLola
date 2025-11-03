import './Cloths.css'
import one from '../../assets/Images/md1.jpeg'
import two from '../../assets/Images/md2.jpeg'
import React from 'react'

const clothContent=[
    {"picture":one,
      "discription":"BUBU"

    },

    {"picture":two,
      "discription":"JOGGERS"

    },

     {"picture":one,
      "discription":"BUBU"

    },

    {"picture":two,
      "discription":"JOGGERS"

    }
]

function Cloths() {
   return (

    <div className="clothcontainer">
        {
            clothContent.map((item,i)=>{
              return(  
                    <div >
                        <figure className='bg-yellow-200 w-full h-full flex flex-col clothdiscription' key={i} >
                            <img src={item.picture} alt="four"  className='object-cover '/>
                            <p>{item.discription}</p>
                        </figure> 

                    </div>
              )
                  
            })
         }
    </div>
       
    )
}

export default Cloths
