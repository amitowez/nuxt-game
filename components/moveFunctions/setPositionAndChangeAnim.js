export function moveEvent(pos, activeAnim, anims, key, height, width){
    switch(key) {
        case 'top':
            if(pos.top - 15 > 0)  pos.top -= 15
            activeAnim.value = anims['adventurer-run']
        break
        case 'down':
          if(pos.top + 30 < height)  pos.top +=  15
          activeAnim.value = anims['adventurer-run']
        break
        case 'left':
            if(pos.left - 15 > 0)  pos.left -=   15
            pos.rotate = 110
            pos.skewX = 3.2
            activeAnim.value = anims['adventurer-run']
          break
        case 'right':
            if(pos.left + 30 < width) pos.left +=  15
            pos.rotate = 0
            pos.skewX = 0
            activeAnim.value = anims['adventurer-run']
        break
        case 'space':
            activeAnim.value = anims['adventurer-attack3']
        break
      }
     
}

