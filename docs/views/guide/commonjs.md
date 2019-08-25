---
title: 'untiljs示例'
---
# untiljs

```javascript

export function RandomCharacter () {
  return Math.random().toString(36).substr(2)
}

export function getAge (insurerId) {
  const len = (insurerId + '').length
  if ((len !== 15) && (len !== 18)) {
    return 0
  }
  let strBirthday = ''
  if (len === 18) {
    strBirthday = insurerId.substr(6, 4) + '/' + insurerId.substr(10, 2) + '/' + insurerId.substr(12, 2)
  }
  if (len === 15) {
    strBirthday = '19' + insurerId.substr(6, 2) + '/' + insurerId.substr(8, 2) + '/' + insurerId.substr(10, 2)
  }
  const birthDate = new Date(strBirthday)
  const nowDateTime = new Date()
  let age = nowDateTime.getFullYear() - birthDate.getFullYear()
  if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() === birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}


```
<ClientOnly>
  
</ClientOnly>