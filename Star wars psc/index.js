let id;
    async function getData(){
        let q=document.getElementById('star_char').value;
        try {
            let url=`https://swapi.dev/api/people/?search=${q}`;
            let res=await fetch(url)
            let data=await res.json()
            //console.log(data.results)
            return data.results

            
        } catch (error) {
            console.log(error)
        }
    }

    function append(data){
         let container=document.getElementById('container')
         container.innerHTML=null;
         data.forEach(function(el){
            let name=document.createElement('h2')
            name.innerText=el.name;

            container.append(name)
         })

    }
    async function main(){
        let data=await getData()
        append(data)
       // console.log(data)
    }
    function debouncing(func,delay){
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(function(){
            func()
            console.log('hello')
        },delay)
    }