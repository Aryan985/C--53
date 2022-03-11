AFRAME.registerComponent("fly",{
    schema:{
        speed:{type:"number",default:0.5}
    },
    tick:function(){
        var pos=this.el.getAttribute("position")
        pos.z=pos.z+this.data.speed
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
        
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            var pos=this.el.getAttribute("position")
           
            if(e.key=="ArrowLeft"){
                pos.x=pos.x+this.data.speed+2
            this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z}) 
            }
            if(e.key=="ArrowRight"){
                pos.x=pos.x-this.data.speed-2
            this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z}) 
            }
        })
    }
})

AFRAME.registerComponent("air",{
    schema:{
        speed:{type:"number",default:0.0005}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            var pos=this.el.getAttribute("position")
           
            if(e.key=="ArrowRight"){
                pos.x=pos.x+this.data.speed
            this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z}) 
            }
            if(e.key=="ArrowLeft"){
                pos.x=pos.x-this.data.speed
            this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z}) 
            }
          
        })
      
    }
    
})