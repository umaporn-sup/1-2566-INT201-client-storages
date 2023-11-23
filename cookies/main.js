//1. string.indexOf(searchvalue, start)
//return an index number here the specified searchvalue occurs for the first time,
//or -1 if it never occurs

//2. string.substring(start,end)
//start
//The substring() method extracts the characters from a string,
//between "start" (inclusive) and "end" (exclusive), not including "end" itself., and returns the new sub string.

class CookieUtil {
  static get(name) {
    console.log(`all cookies: ${document.cookie}`)
    let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null
    console.log(`cookieName = ${cookieName}`)
    console.log(`cookieStart = ${cookieStart}`)

    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      console.log(`cookieEnd = ${cookieEnd}`)
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
      )
      console.log(`cookieValue = ${cookieValue}`)
    }

    return cookieValue
  }

  static set(
    name,
    value,
    expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
  ) {
    console.log(expires)
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

    if (expires instanceof Date) {
      // cookieText += `; expires=${expires.toUTCString()}`
      cookieText += `; expires=${expires}`
    }

    console.log(`cookieText = ${cookieText}`)
    document.cookie = cookieText
  }

  static unset(name) {
    CookieUtil.set(name, '', new Date(0))
  }
}

// remove the cookies
CookieUtil.unset('hobby')
CookieUtil.unset('color-tone')
CookieUtil.unset('font')
CookieUtil.unset('user')

//create cookies
CookieUtil.set('hobby', 'reading', new Date('November 30, 2022'))
alert(`CookieUtil.get("hobby")#1: ${CookieUtil.get('hobby')}`)

CookieUtil.set('hobby', 'shopping', new Date('December 10, 2022')) //overwrite and change an expiration date
alert(`CookieUtil.get("hobby")#2: ${CookieUtil.get('hobby')}`) //shopping

CookieUtil.set('color-tone', 'pastel')

// expiredDate = new Date('December 1, 2022')
// document.cookie = 'font=12' + ';expires=' + expiredDate
// document.cookie = 'user=umaporn'

document.cookie = 'memberType=Gold;domain=127.0.0.1;path=/'
