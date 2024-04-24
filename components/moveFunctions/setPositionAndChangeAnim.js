export function moveEvent(pos, activeAnim, anims, key){
    activeAnim = []
    switch(key) {
        case 'top':
            if(pos.top - 15 > 0)  pos.top = pos.top - 15
          break
        case 'down':
            pos.top = pos.top + 15
          break
        case 'left':
            if(pos.left - 15 > 0)  pos.left = pos.left - 15
          break
        case 'right':
            pos.left = pos.left + 15
          break
      }
      console.log(activeAnim, anims['adventurer-run'])
      activeAnim = anims['adventurer-run']
}

