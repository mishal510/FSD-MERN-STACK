import React from 'react'

const Selected = () => {
 var {colour,setcolour}=useState();

    const isred=() =>{
       setcolour("red")
    }
    const isblack=()=>{
        setcolour('black')
    }
    const isbrown=()=>{
        setcolour('brown')
    }

  return (
    <div>
<h2>colour is {colour}</h2>
<Button variant='contained'color='primary'onClick={isred}>red</Button>
<Button variant='contained'color='secondary'onclick={isblack}>black</Button>
<Button variant='contained'color='success'onclick={isbrown}>brown</Button>
    </div>
  )
}

export default Selected