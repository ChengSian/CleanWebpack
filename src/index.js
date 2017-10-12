const obj = {a:1}

function func(){
	setTimeout( () => { console.log(this) }, 2000)
}

func.call(obj)