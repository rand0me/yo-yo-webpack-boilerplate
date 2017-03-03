var yo = require('yo-yo')

var el = list([
  'grizzly',
  'polar',
  'brown'
])

function list (items) {
  return yo`<div>
    <h1>Yo-Yo + Webpack 2 Boilerplate</h1>
    <ul>
      ${items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
  </div>`
}

document.body.appendChild(el)
