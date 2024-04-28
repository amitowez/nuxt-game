export function moveEvent(pos, activeAnim, anims, key){
    switch(key) {
        case 'top':
            if(pos.top - 15 > 0)  pos.top -= 15
          break
        case 'down':
            pos.top +=  15
          break
        case 'left':
            if(pos.left - 15 > 0)  pos.left -=   15
            pos.rotate = 110
            pos.skewX = 3.2
          break
        case 'right':
            pos.left +=  15
            pos.rotate = 0
            pos.skewX = 0
          break
      }
      console.log('adventurer-run',anims['adventurer-run'])
      activeAnim.value = anims['adventurer-run']
}

